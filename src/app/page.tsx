import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        <HeroSection />
        <TrustIndicators />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 glass-panel border-b border-outline-variant bg-surface-container/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="material-symbols-outlined">architecture</span>
          SystemArchitect AI
        </div>
        <div className="hidden md:flex gap-6 text-on-surface-variant text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-semibold hover:text-primary transition-colors">Log In</button>
          <button className="bg-primary-container text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-secondary font-mono border border-outline-variant">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          New: Interactive Architecture Playground
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Understand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Modern Apps</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
          Deconstruct and visualize complex systems instantly. Ask AI how your favorite apps are built, explore real-world architectures, and learn through interactive diagrams.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-primary-container text-white px-6 py-3 rounded-xl font-semibold shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all">
            Start Exploring Free
          </button>
          <button className="glass-panel px-6 py-3 rounded-xl font-semibold text-on-surface hover:bg-surface-container-high transition-all border border-outline-variant">
            View Examples
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full max-w-xl relative mt-12 lg:mt-0">
        <ArchitectureVisualization />
      </div>
    </section>
  );
}

function ArchitectureVisualization() {
  return (
    <div className="relative w-full aspect-[5/4] glass-panel rounded-2xl border border-outline-variant bg-surface-container-low/50 p-6 overflow-hidden grid-bg shadow-2xl flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Connection Lines (Behind Nodes) */}
        <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full z-0 overflow-visible" preserveAspectRatio="xMidYMid meet">
           <defs>
            <linearGradient id="comet-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="var(--color-secondary)" />
            </linearGradient>
            <linearGradient id="comet-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
            <linearGradient id="comet-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="var(--color-tertiary)" />
            </linearGradient>
          </defs>
          
          {/* Client to Gateway */}
          <path d="M 50 200 L 180 200" stroke="var(--color-outline-variant)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 50 200 L 180 200" className="data-flow-line-comet" stroke="url(#comet-1)" strokeWidth="4" fill="none" />

          {/* Gateway to Auth */}
          <path d="M 180 200 C 240 200, 240 100, 340 100" stroke="var(--color-outline-variant)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 180 200 C 240 200, 240 100, 340 100" className="data-flow-line-comet" style={{ animationDelay: '0.8s' }} stroke="url(#comet-2)" strokeWidth="4" fill="none" />

          {/* Gateway to Core */}
          <path d="M 180 200 C 240 200, 240 300, 340 300" stroke="var(--color-outline-variant)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 180 200 C 240 200, 240 300, 340 300" className="data-flow-line-comet" style={{ animationDelay: '1.2s' }} stroke="url(#comet-2)" strokeWidth="4" fill="none" />

          {/* Auth to DB */}
          <path d="M 340 100 C 400 100, 400 200, 450 200" stroke="var(--color-outline-variant)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 340 100 C 400 100, 400 200, 450 200" className="data-flow-line-comet" style={{ animationDelay: '1.6s' }} stroke="url(#comet-3)" strokeWidth="4" fill="none" />

          {/* Core to DB */}
          <path d="M 340 300 C 400 300, 400 200, 450 200" stroke="var(--color-outline-variant)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 340 300 C 400 300, 400 200, 450 200" className="data-flow-line-comet" style={{ animationDelay: '2.0s' }} stroke="url(#comet-3)" strokeWidth="4" fill="none" />
        </svg>

        {/* Nodes overlaying the SVG */}
        {/* Client */}
        <div className="absolute top-[50%] left-[10%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-14 h-14 rounded-2xl bg-surface-container-highest border border-outline-variant flex items-center justify-center shadow-lg pulse-node relative">
            <span className="material-symbols-outlined text-secondary">smartphone</span>
          </div>
          <span className="text-xs font-mono text-on-surface-variant bg-surface-container-low px-1 rounded">Client</span>
        </div>

        {/* API Gateway */}
        <div className="absolute top-[50%] left-[36%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-16 h-16 rounded-2xl bg-surface-container-highest border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(195,192,255,0.2)] pulse-node relative" style={{ animationDelay: '0.5s' }}>
            <span className="material-symbols-outlined text-primary text-3xl">api</span>
          </div>
          <span className="text-xs font-mono text-on-surface-variant bg-surface-container-low px-1 rounded">API Gateway</span>
        </div>

        {/* Auth Service */}
        <div className="absolute top-[25%] left-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-14 h-14 rounded-xl bg-surface-container-highest border border-tertiary flex items-center justify-center shadow-lg pulse-node relative" style={{ animationDelay: '1s' }}>
            <span className="material-symbols-outlined text-tertiary">admin_panel_settings</span>
          </div>
          <span className="text-xs font-mono text-on-surface-variant bg-surface-container-low px-1 rounded">Auth Service</span>
        </div>

        {/* Core Service */}
        <div className="absolute top-[75%] left-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-14 h-14 rounded-xl bg-surface-container-highest border border-tertiary flex items-center justify-center shadow-lg pulse-node relative" style={{ animationDelay: '1.2s' }}>
            <span className="material-symbols-outlined text-tertiary">memory</span>
          </div>
          <span className="text-xs font-mono text-on-surface-variant bg-surface-container-low px-1 rounded">Core Engine</span>
        </div>

        {/* Database */}
        <div className="absolute top-[50%] left-[90%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-16 h-16 rounded-2xl bg-surface-container-highest border border-error flex items-center justify-center shadow-lg pulse-node relative" style={{ animationDelay: '1.8s' }}>
            <span className="material-symbols-outlined text-error text-3xl">database</span>
          </div>
          <span className="text-xs font-mono text-on-surface-variant bg-surface-container-low px-1 rounded">PostgreSQL</span>
        </div>

      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24" id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Unpack complexity in seconds</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Explore interactive architectures, dissect popular platforms, and master system design with our suite of powerful tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Bento Item 1 */}
        <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group border border-outline-variant hover:border-primary transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
          <div className="h-full flex flex-col">
            <div className="flex-1 z-10">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant mb-4">
                <span className="material-symbols-outlined text-primary">search</span>
              </span>
              <h3 className="text-2xl font-bold mb-2">How Instagram Works</h3>
              <p className="text-on-surface-variant max-w-md">
                Dive deep into real-world architectures. See how scaling, caching, and database sharding work together in apps you use every day.
              </p>
            </div>
            <div className="mt-auto z-10">
              <Link href="/blueprints/instagram" className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore Blueprint <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bento Item 2 */}
        <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group border border-outline-variant hover:border-secondary transition-colors">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary-container opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <div className="h-full flex flex-col z-10">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant mb-4">
              <span className="material-symbols-outlined text-secondary">chat_bubble</span>
            </span>
            <h3 className="text-xl font-bold mb-2">Ask AI Anything</h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Got a specific question about event-driven architectures or Kubernetes? Ask our AI expert.
            </p>
            <div className="mt-auto bg-surface-container-high p-3 rounded-lg border border-outline-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">robot_2</span>
              <span className="text-xs text-on-surface-variant font-mono">Explain Redis caching...|</span>
            </div>
          </div>
        </div>

        {/* Bento Item 3 */}
        <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group border border-outline-variant hover:border-tertiary transition-colors">
          <div className="h-full flex flex-col z-10">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant mb-4">
              <span className="material-symbols-outlined text-tertiary">design_services</span>
            </span>
            <h3 className="text-xl font-bold mb-2">Interactive Playground</h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Drag and drop components to build and test your own system designs instantly.
            </p>
            <div className="mt-auto grid grid-cols-3 gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="h-8 rounded bg-surface-container-highest border border-outline-variant"></div>
              <div className="h-8 rounded bg-surface-container-highest border border-outline-variant col-span-2"></div>
              <div className="h-8 rounded bg-surface-container-highest border border-outline-variant col-span-2"></div>
              <div className="h-8 rounded bg-surface-container-highest border border-outline-variant"></div>
            </div>
          </div>
        </div>

        {/* Bento Item 4 */}
        <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group border border-outline-variant hover:border-error transition-colors">
           <div className="h-full flex flex-col md:flex-row items-center gap-8 z-10">
             <div className="flex-1">
               <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant mb-4">
                  <span className="material-symbols-outlined text-error">monitoring</span>
                </span>
                <h3 className="text-2xl font-bold mb-2">Simulate Load & Bottlenecks</h3>
                <p className="text-on-surface-variant max-w-md">
                  Watch what happens when 1M users hit your API at once. Visually identify single points of failure before you write a single line of code.
                </p>
             </div>
             <div className="w-full md:w-1/2 h-32 bg-surface-container-highest rounded-xl border border-outline-variant flex items-end p-4 gap-2">
                <div className="flex-1 bg-primary rounded-t-sm h-[20%] animate-pulse"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[40%] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="flex-1 bg-error rounded-t-sm h-[90%] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="flex-1 bg-error rounded-t-sm h-[100%] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[60%] animate-pulse" style={{ animationDelay: '0.8s' }}></div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 border-y border-surface-container-high">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
          Trusted by 10,000+ engineers at forward-thinking companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold font-mono">
            <span className="material-symbols-outlined">cloud</span> CloudScale
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-sans">
            <span className="material-symbols-outlined">token</span> Nexus
          </div>
          <div className="flex items-center gap-2 text-xl font-bold italic">
            <span className="material-symbols-outlined">public</span> GlobalTech
          </div>
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <span className="material-symbols-outlined">bolt</span> FastStream
          </div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="material-symbols-outlined">data_object</span> CodeBase
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
            <span className="material-symbols-outlined">architecture</span>
            SystemArchitect AI
          </div>
          <p className="text-on-surface-variant max-w-sm mb-6">
            Demystifying complex software architecture through interactive visualizations and AI-driven insights.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors border border-outline-variant">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors border border-outline-variant">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-on-surface">Product</h4>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Blueprints</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Playground</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">AI Assistant</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-on-surface">Resources</h4>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">System Design Guide</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-outline-variant pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
        <p>© 2026 SystemArchitect AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
