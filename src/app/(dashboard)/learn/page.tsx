import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { CourseCard } from '@/components/ui/CourseCard';

export default function LearningPathsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface p-6 md:p-8 lg:p-12 font-sans grid-bg relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-primary opacity-5 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary opacity-5 blur-[128px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary pulse-node">school</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Paths</span>
            </h1>
          </div>
          <p className="text-lg text-on-surface-variant max-w-2xl font-sans">
            Master system architecture through structured, interactive courses. Track your progress and build production-ready skills.
          </p>
        </header>

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard 
            title="Learning Streak" 
            value="14 Days" 
            icon="local_fire_department" 
            trend="3 days longer"
            trendUp={true}
          />
          <StatCard 
            title="Mastered Concepts" 
            value="32" 
            icon="workspace_premium" 
            trend="+5 this week"
            trendUp={true}
          />
          <StatCard 
            title="Total XP" 
            value="12,450" 
            icon="stars" 
            trend="Top 15%"
            trendUp={true}
          />
        </section>

        {/* Course Tracks Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">route</span>
              Select Your Path
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/50 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <CourseCard 
              title="Fundamentals"
              description="Learn the core principles of system design, scalability, and distributed systems architecture."
              icon="account_tree"
              level="Beginner"
              progress={100}
              color="primary"
              href="/learn/fundamentals"
            />
            <CourseCard 
              title="PM Track"
              description="Master technical product management, translating business needs into architectural decisions."
              icon="dashboard"
              level="Intermediate"
              progress={45}
              color="secondary"
              href="/learn/pm-track"
            />
            <CourseCard 
              title="Startup Founder"
              description="Design pragmatic, cost-effective architectures for early-stage products that scale as you grow."
              icon="rocket_launch"
              level="Advanced"
              progress={12}
              color="tertiary"
              href="/learn/startup-founder"
            />
            <CourseCard 
              title="Interview Prep"
              description="Crack the system design interview with mock sessions, patterns, and framework strategies."
              icon="psychology"
              level="All Levels"
              progress={0}
              color="primary"
              href="/learn/interview-prep"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
