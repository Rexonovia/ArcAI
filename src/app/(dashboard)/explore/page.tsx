import React from 'react';
import Link from 'next/link';
import { db } from "@/lib/db";

export default async function ExplorePage() {
  const architectures = await db.architecture.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
  });
  return (
    <div className="flex flex-col gap-8 min-h-full p-6 md:p-8">
      {/* Header section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between fade-in-up">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">Architecture Explorer</h1>
          <p className="text-on-surface-variant mt-1">Discover and analyze real-world system architectures</p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              type="text" 
              placeholder="Search architectures..." 
              className="bg-surface-container-high border border-outline-variant text-on-surface placeholder:text-outline-variant rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(195,192,255,0.1)] w-full sm:w-64 transition-all duration-200 font-sans"
            />
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">filter_list</span>
            <select className="bg-surface-container-high border border-outline-variant text-on-surface rounded-lg pl-10 pr-10 py-2 focus:outline-none focus:border-primary w-full sm:w-auto transition-all duration-200 font-sans appearance-none">
              <option value="">All Patterns</option>
              <option value="cdn">CDN</option>
              <option value="distributed">Distributed Systems</option>
              <option value="realtime">Real-time</option>
              <option value="database">Database</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {architectures.map((arch) => (
          <div key={arch.id} className="glass-panel p-6 flex flex-col h-full rounded-xl border border-outline-variant hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="material-symbols-outlined">{arch.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-on-surface">{arch.name}</h3>
                  <span className="text-xs font-medium text-secondary border border-secondary/30 px-2 py-0.5 rounded-full inline-block mt-1">
                    {arch.pattern}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-on-surface-variant text-sm flex-grow mb-6">
              {arch.description}
            </p>
            
            <div className="mt-auto flex flex-col gap-5">
              <div className="flex flex-wrap gap-2">
                {(arch.technologies as string[] || []).map(tech => (
                  <span key={tech} className="text-xs font-mono text-tertiary bg-surface-container-highest border border-outline-variant px-2 py-1 rounded-md hover:bg-tertiary/10 transition-colors duration-200 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/explore/${arch.slug}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-surface-container-high hover:bg-surface-container-highest text-primary font-medium rounded-lg border border-outline-variant hover:border-primary transition-all duration-200 group/btn"
              >
                <span>View Architecture</span>
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform duration-200">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
