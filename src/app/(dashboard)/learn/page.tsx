import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { CourseCard } from '@/components/ui/CourseCard';
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export default async function LearningPathsPage() {
  const session = await auth();

  // Get Courses
  const courses = await db.course.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
    include: {
      _count: { select: { modules: true } },
      ...(session?.user?.id
        ? {
            progress: {
              where: { userId: session.user.id },
              select: { progressPercent: true, startedAt: true, completedAt: true },
            },
          }
        : {}),
    },
  });

  const courseCards = courses.map((course) => ({
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
  }));

  // Get Stats
  let streak = 0;
  let masteredConcepts = 0;
  let xp = 0;
  let percentileRank = 0;

  if (session?.user?.id) {
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: { xp: true, streak: true, lastActiveAt: true },
    });
    if (user) {
      xp = user.xp;
      masteredConcepts = await db.userModuleProgress.count({
        where: { userId: session.user.id, status: "completed" },
      });
      const now = new Date();
      const lastActive = new Date(user.lastActiveAt);
      const daysSinceActive = Math.floor((now.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
      streak = daysSinceActive <= 1 ? user.streak : 0;
      
      const totalUsers = await db.user.count();
      const usersWithLessXp = await db.user.count({ where: { xp: { lt: user.xp } } });
      percentileRank = totalUsers > 0 ? Math.round((usersWithLessXp / totalUsers) * 100) : 0;
    }
  }
  return (
    <div className="min-h-screen bg-background text-on-surface p-6 md:p-8 lg:p-12 font-sans grid-bg relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-primary opacity-5 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary opacity-5 blur-[128px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center breathing-glow">
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary gradient-text-animated">Paths</span>
            </h1>
          </div>
          <p className="text-lg text-on-surface-variant max-w-2xl font-sans">
            Master system architecture through structured, interactive courses. Track your progress and build production-ready skills.
          </p>
        </header>

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fade-in-up-delay-1">
          <StatCard 
            title="Learning Streak" 
            value={`${streak} Days`} 
            icon="local_fire_department" 
            trend={streak > 0 ? "Active" : "Start today!"}
            trendUp={streak > 0}
          />
          <StatCard 
            title="Mastered Concepts" 
            value={masteredConcepts.toString()} 
            icon="workspace_premium" 
            trend={session ? "Keep going" : "Sign in to track"}
            trendUp={true}
          />
          <StatCard 
            title="Total XP" 
            value={xp.toLocaleString()} 
            icon="stars" 
            trend={session ? `Top ${100 - percentileRank}%` : "0 XP"}
            trendUp={true}
          />
        </section>

        {/* Course Tracks Section */}
        <section className="fade-in-up-delay-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">route</span>
              Select Your Path
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/50 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {courseCards.map((c) => (
              <CourseCard 
                key={c.id}
                title={c.title}
                description={c.description}
                icon={c.icon}
                level={c.level}
                progress={c.progress}
                color={c.color as any}
                href={`/learn/${c.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
