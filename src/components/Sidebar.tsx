import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-base bg-surface-container-low text-secondary font-label-md text-label-md h-screen w-64 fixed left-0 top-0 pt-20 border-r border-white/10 z-40 shrink-0">
      <div className="px-md mb-xl">
        <Link href="/" className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-2 group">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">architecture</span>
          SystemArchitect AI
        </Link>
      </div>
      
      <nav className="flex flex-col gap-2 flex-1 overflow-y-auto px-xs">
        <div className="px-sm py-2 text-outline text-xs uppercase tracking-wider mb-2">Navigation</div>
        
        <Link href="/chat" className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg mx-2 transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>smart_toy</span>
          AI Tutor
        </Link>
        
        <Link href="/explore" className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg mx-2 transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
          Dashboard
        </Link>
        
        <Link href="/learn" className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg mx-2 transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">school</span>
          Modules
        </Link>

        <Link href="/playground" className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg mx-2 transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">tune</span>
          Playground
        </Link>

        <div className="px-sm py-2 text-outline text-xs uppercase tracking-wider mt-xl mb-2">Recent Chats</div>
        
        <Link href="#" className="flex flex-col px-sm py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 transition-all">
          <span className="truncate w-full font-label-md text-on-surface">Netflix CDN Architecture</span>
          <span className="text-xs text-outline">2 hours ago</span>
        </Link>
        
        <Link href="#" className="flex flex-col px-sm py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 transition-all">
          <span className="truncate w-full font-label-md text-on-surface">Redis Caching Strategies</span>
          <span className="text-xs text-outline">Yesterday</span>
        </Link>
        
        <Link href="#" className="flex flex-col px-sm py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 transition-all">
          <span className="truncate w-full font-label-md text-on-surface">Microservices vs Monolith</span>
          <span className="text-xs text-outline">3 days ago</span>
        </Link>
      </nav>

      <div className="p-md border-t border-white/5 mt-auto bg-surface-container-lowest/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/10">
            <span className="material-symbols-outlined text-outline">person</span>
          </div>
          <div>
            <div className="text-on-surface font-label-md">Learning Path</div>
            <div className="text-outline text-xs">Distributed Systems</div>
          </div>
        </div>
        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
}
