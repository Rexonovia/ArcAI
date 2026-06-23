import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const session = await auth();

  const courses = await db.course.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
    include: {
      _count: { select: { modules: true } },
      ...(session?.user?.id
        ? {
            progress: {
              where: { userId: session.user.id },
              select: {
                progressPercent: true,
                startedAt: true,
                completedAt: true,
              },
            },
          }
        : {}),
    },
  });

  // Transform to a cleaner shape
  const result = courses.map((course) => ({
    id: course.id,
    slug: course.slug,
    title: course.title,
    description: course.description,
    icon: course.icon,
    level: course.level,
    color: course.color,
    conceptCount: course.conceptCount,
    durationMinutes: course.durationMinutes,
    moduleCount: course._count.modules,
    progress: (course as any).progress?.[0]?.progressPercent ?? 0,
    startedAt: (course as any).progress?.[0]?.startedAt ?? null,
    completedAt: (course as any).progress?.[0]?.completedAt ?? null,
  }));

  return Response.json(result);
}
