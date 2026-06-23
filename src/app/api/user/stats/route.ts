import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

/**
 * GET /api/user/stats — Aggregated stats for the Learn page
 * Returns: streak, XP, mastered concepts, total courses, completion rate
 */
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      xp: true,
      streak: true,
      lastActiveAt: true,
    },
  });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  // Count mastered (completed) modules
  const masteredConcepts = await db.userModuleProgress.count({
    where: {
      userId: session.user.id,
      status: "completed",
    },
  });

  // Get course completion stats
  const courseProgress = await db.userCourseProgress.findMany({
    where: { userId: session.user.id },
  });
  const completedCourses = courseProgress.filter(
    (cp) => cp.progressPercent === 100
  ).length;
  const totalCoursesStarted = courseProgress.length;

  // Calculate streak (check if user was active yesterday)
  const now = new Date();
  const lastActive = new Date(user.lastActiveAt);
  const daysSinceActive = Math.floor(
    (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
  );
  const currentStreak = daysSinceActive <= 1 ? user.streak : 0;

  // Calculate percentile rank based on XP (simplified)
  const totalUsers = await db.user.count();
  const usersWithLessXp = await db.user.count({
    where: { xp: { lt: user.xp } },
  });
  const percentileRank =
    totalUsers > 0 ? Math.round((usersWithLessXp / totalUsers) * 100) : 0;

  return Response.json({
    xp: user.xp,
    streak: currentStreak,
    masteredConcepts,
    completedCourses,
    totalCoursesStarted,
    percentileRank,
    lastActiveAt: user.lastActiveAt,
  });
}
