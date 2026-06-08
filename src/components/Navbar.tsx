import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-surface/60 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-sm flex justify-between items-center px-gutter py-sm max-w-full mx-auto">
      <div className="flex items-center gap-xs">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          <span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">SystemArchitect AI</span>
        </Link>
      </div>
      
      <div className="hidden md:flex gap-lg">
        <Link href="/learn" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 px-3 py-1 rounded-md">
          Learn
        </Link>
        <Link href="/explore" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 px-3 py-1 rounded-md">
          Explore
        </Link>
        <Link href="/playground" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 px-3 py-1 rounded-md">
          Playground
        </Link>
        <Link href="/chat" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 px-3 py-1 rounded-md">
          Chat
        </Link>
      </div>

      <div className="flex items-center gap-md">
        <button className="hidden md:block bg-gradient-to-r from-primary-container to-secondary-container text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          Get Started
        </button>
        <button className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div className="w-8 h-8 rounded-full border border-outline hidden md:flex items-center justify-center bg-surface-container-highest overflow-hidden">
          <span className="material-symbols-outlined text-outline text-sm">person</span>
        </div>
      </div>
    </nav>
  );
}
