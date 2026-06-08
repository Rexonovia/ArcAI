import React from 'react';
import Link from 'next/link';

// Mock data
const architectures = [
  {
    id: 'netflix-cdn',
    name: 'Netflix Open Connect',
    description: 'Global content delivery network architecture optimized for streaming video at scale.',
    pattern: 'CDN / Edge Computing',
    technologies: ['FreeBSD', 'NGINX', 'BGP'],
    icon: 'dns',
  },
  {
    id: 'twitter-snowflake',
    name: 'Twitter Snowflake',
    description: 'Highly available, distributed unique ID generation service.',
    pattern: 'Distributed Systems',
    technologies: ['Scala', 'ZooKeeper', 'Thrift'],
    icon: 'ac_unit',
  },
  {
    id: 'uber-dispatch',
    name: 'Uber Dispatch',
    description: 'Real-time dispatch system matching drivers with riders using geospatial querying.',
    pattern: 'Real-time / Geospatial',
    technologies: ['Go', 'Node.js', 'Redis', 'Cassandra'],
    icon: 'local_taxi',
  },
  {
    id: 'whatsapp-messaging',
    name: 'WhatsApp Messaging',
    description: 'High-throughput, low-latency messaging architecture handling billions of messages.',
    pattern: 'Message Broker',
    technologies: ['Erlang', 'FreeBSD', 'Mnesia'],
    icon: 'chat',
  }
];

export default function ExplorePage() {
  return (
    <div className="flex flex-col gap-8 min-h-full">
      {/* Header section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
              className="bg-surface-container-high border border-outline-variant text-on-surface placeholder:text-outline-variant rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary w-full sm:w-64 transition-colors font-sans"
            />
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">filter_list</span>
            <select className="bg-surface-container-high border border-outline-variant text-on-surface rounded-lg pl-10 pr-10 py-2 focus:outline-none focus:border-primary w-full sm:w-auto transition-colors font-sans appearance-none">
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
          <div key={arch.id} className="glass-panel p-6 flex flex-col h-full rounded-xl border border-outline-variant hover:border-primary/50 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary transition-colors">
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
                {arch.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono text-tertiary bg-surface-container-highest border border-outline-variant px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/explore/${arch.id}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-surface-container-high hover:bg-surface-container-highest text-primary font-medium rounded-lg border border-outline-variant hover:border-primary transition-all duration-200"
              >
                <span>View Architecture</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
