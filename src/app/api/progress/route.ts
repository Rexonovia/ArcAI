import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

/**
 * GET /api/progress — Get user's overall progress across all courses
 */
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const courseProgress = await db.userCourseProgress.findMany({
    where: { userId: session.user.id },
    include: {
      course: {
        select: {
          slug: true,
          title: true,
          icon: true,
          color: true,
        },
      },
    },
    orderBy: { startedAt: "desc" },
  });

  return Response.json(courseProgress);
}

/**
 * POST /api/progress — Update module completion and recalculate course progress
 */
const UpdateProgressSchema = z.object({
  moduleId: z.string(),
  status: z.enum(["not_started", "in_progress", "completed"]),
  score: z.number().min(0).max(100).optional(),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateProgressSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { moduleId, status, score } = parsed.data;

  // Get the module and its course
  const module = await db.module.findUnique({
    where: { id: moduleId },
    include: {
      course: {
        include: {
          modules: { select: { id: true } },
        },
      },
    },
  });

  if (!module) {
    return Response.json({ error: "Module not found" }, { status: 404 });
  }

  // Upsert module progress
  await db.userModuleProgress.upsert({
    where: {
      userId_moduleId: {
        userId: session.user.id,
        moduleId,
      },
    },
    create: {
      userId: session.user.id,
      moduleId,
      status,
      score,
      completedAt: status === "completed" ? new Date() : null,
    },
    update: {
      status,
      score,
      completedAt: status === "completed" ? new Date() : null,
    },
  });

  // Recalculate course progress
  const totalModules = module.course.modules.length;
  const completedModules = await db.userModuleProgress.count({
    where: {
      userId: session.user.id,
      moduleId: { in: module.course.modules.map((m) => m.id) },
      status: "completed",
    },
  });

  const progressPercent = Math.round((completedModules / totalModules) * 100);

  await db.userCourseProgress.upsert({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId: module.courseId,
      },
    },
    create: {
      userId: session.user.id,
      courseId: module.courseId,
      progressPercent,
      completedAt: progressPercent === 100 ? new Date() : null,
    },
    update: {
      progressPercent,
      completedAt: progressPercent === 100 ? new Date() : null,
    },
  });

  // Award XP for completed modules
  if (status === "completed") {
    const xpGain = score ? Math.round(score * 2) : 100;
    await db.user.update({
      where: { id: session.user.id },
      data: {
        xp: { increment: xpGain },
        lastActiveAt: new Date(),
      },
    });
  }

  return Response.json({
    success: true,
    courseProgress: progressPercent,
  });
}
