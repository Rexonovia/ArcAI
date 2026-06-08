import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: string;
  trendUp?: boolean;
}

export function StatCard({ title, value, icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="glass-panel p-6 flex items-start justify-between rounded-xl border border-outline-variant shadow-lg hover:border-outline transition-colors group">
      <div>
        <p className="text-sm font-medium text-on-surface-variant mb-2 font-sans tracking-wide uppercase">{title}</p>
        <div className="flex items-baseline gap-3">
          <h3 className="text-3xl font-bold text-on-surface tracking-tight font-sans">{value}</h3>
          {trend && (
            <span className={`text-sm font-medium flex items-center gap-1 ${trendUp ? 'text-primary' : 'text-error'}`}>
              <span className="material-symbols-outlined text-[16px]">
                {trendUp ? 'trending_up' : 'trending_down'}
              </span>
              {trend}
            </span>
          )}
        </div>
      </div>
      <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant shadow-inner group-hover:scale-105 transition-transform duration-300">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
      </div>
    </div>
  );
}
