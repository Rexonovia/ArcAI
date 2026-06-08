import React from 'react';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  icon: string;
  level: string;
  progress: number;
  color: 'primary' | 'secondary' | 'tertiary';
  href: string;
}

export function CourseCard({ title, description, icon, level, progress, color, href }: CourseCardProps) {
  const progressColorMap = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  };
  
  const iconColorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  };

  return (
    <div className="glass-panel p-6 flex flex-col h-full rounded-2xl border border-outline-variant hover:border-outline transition-all duration-300 relative overflow-hidden group hover:shadow-lg hover:-translate-y-1">
      {/* Subtle background glow */}
      <div className={`absolute -right-12 -top-12 w-32 h-32 blur-[64px] opacity-20 group-hover:opacity-30 transition-opacity ${progressColorMap[color]}`} />
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <span className={`material-symbols-outlined text-3xl ${iconColorMap[color]}`}>{icon}</span>
        </div>
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-container border border-outline-variant text-on-surface-variant font-mono tracking-wide uppercase">
          {level}
        </span>
      </div>
      
      <div className="mb-8 relative z-10 flex-grow">
        <h3 className="text-xl font-bold text-on-surface mb-3 font-sans group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed">{description}</p>
      </div>
      
      <div className="mt-auto relative z-10">
        <div className="flex justify-between items-end mb-3 font-sans">
          <span className="text-sm text-on-surface-variant font-medium">Progress</span>
          <span className="text-sm text-on-surface font-bold">{progress}%</span>
        </div>
        <div className="h-2.5 w-full bg-surface-container-high rounded-full overflow-hidden mb-6 border border-outline-variant/50 shadow-inner">
          <div 
            className={`h-full rounded-full ${progressColorMap[color]} shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out`} 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <Link 
          href={href}
          className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-highest border border-outline-variant text-on-surface font-medium transition-all duration-300 hover:border-primary/50"
        >
          {progress > 0 && progress < 100 ? 'Continue Path' : progress === 100 ? 'Review Path' : 'Start Path'}
          <span className="material-symbols-outlined text-sm">
            {progress === 100 ? 'replay' : 'arrow_forward'}
          </span>
        </Link>
      </div>
    </div>
  );
}
