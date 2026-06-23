import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await auth();
  const { slug } = await params;

  const course = await db.course.findUnique({
    where: { slug },
    include: {
      modules: {
        orderBy: { sortOrder: "asc" },
        include: session?.user?.id
          ? {
              progress: {
                where: { userId: session.user.id },
                select: {
                  status: true,
                  score: true,
                  completedAt: true,
                },
              },
            }
          : {},
      },
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

  if (!course) {
    return Response.json({ error: "Course not found" }, { status: 404 });
  }

  // Transform modules to include progress
  const result = {
    ...course,
    progress: (course as any).progress?.[0]?.progressPercent ?? 0,
    modules: course.modules.map((mod) => ({
      id: mod.id,
      slug: mod.slug,
      title: mod.title,
      description: mod.description,
      durationMinutes: mod.durationMinutes,
      conceptCount: mod.conceptCount,
      status: (mod as any).progress?.[0]?.status ?? "not_started",
      score: (mod as any).progress?.[0]?.score ?? null,
      completedAt: (mod as any).progress?.[0]?.completedAt ?? null,
    })),
  };

  return Response.json(result);
}
