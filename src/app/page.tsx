import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const systems = [
  { name: "Instagram", icon: "photo_camera", color: "text-secondary" },
  { name: "WhatsApp", icon: "chat", color: "text-emerald-300" },
  { name: "Netflix", icon: "movie", color: "text-rose-300" },
  { name: "Uber", icon: "local_taxi", color: "text-amber-200" },
  { name: "Stripe", icon: "credit_card", color: "text-primary" },
];

const learningLoop = [
  {
    number: "01",
    icon: "travel_explore",
    title: "Trace the request",
    copy: "Follow one user action across clients, gateways, services, queues, caches, and databases.",
  },
  {
    number: "02",
    icon: "speed",
    title: "Change the load",
    copy: "Turn up traffic and see where latency grows, retries cascade, and the architecture needs to evolve.",
  },
  {
    number: "03",
    icon: "forum",
    title: "Interrogate the design",
    copy: "Ask the AI tutor why each trade-off was made and what would break under a different constraint.",
  },
];

const paths = [
  {
    eyebrow: "Case study · 18 min",
    title: "Design Instagram’s home feed",
    copy: "Fan-out, ranking, media delivery, caching, and the trade-off between freshness and speed.",
    icon: "photo_camera",
    color: "secondary",
    href: "/learn",
    stat: "7 concepts",
  },
  {
    eyebrow: "Architecture lab · 24 min",
    title: "Scale WhatsApp messaging",
    copy: "Persistent connections, ordering, delivery receipts, queues, and high-throughput storage.",
    icon: "chat",
    color: "tertiary",
    href: "/explore",
    stat: "9 concepts",
  },
  {
    eyebrow: "Interactive simulation",
    title: "Survive a 10× traffic spike",
    copy: "Find the bottleneck, make an architecture decision, and watch the system respond.",
    icon: "monitoring",
    color: "primary",
    href: "/playground",
    stat: "Live lab",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="home-shell">
        <div className="mesh-bg" aria-hidden="true">
          <div className="mesh-blob-1" />
          <div className="mesh-blob-2" />
        </div>
        <div className="home-noise" aria-hidden="true" />
        <div className="home-grid-bg" aria-hidden="true" />
        <div className="home-orb home-orb-one" aria-hidden="true" />
        <div className="home-orb home-orb-two" aria-hidden="true" />
        <div className="hero-glow-bg" />

        <section className="home-section grid min-h-[760px] items-center gap-14 pb-20 pt-36 lg:grid-cols-[0.92fr_1.08fr] lg:pt-32">
          <div className="relative z-10 min-w-0 max-w-[42rem] text-center lg:text-left fade-in-up">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-secondary shadow-[0_0_15px_rgba(137,206,255,0.15)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
              <span className="font-code-sm text-[11px] font-bold uppercase tracking-[0.2em]">
                Learn system design by doing
              </span>
            </div>

            <h1 className="max-w-[680px] text-[clamp(4rem,8vw,7.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-on-surface drop-shadow-sm text-glow-premium">
              See what happens{" "}
              <span className="gradient-text-animated drop-shadow-md">after the click.</span>
            </h1>

            <p className="mt-7 max-w-[36rem] text-lg leading-8 text-on-surface-variant md:text-xl">
              Explore the architecture behind the apps you use every day.
              Trace real requests, create traffic spikes, and learn every
              trade-off with an AI staff engineer beside you.
            </p>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center lg:justify-start">
              <Link href="/learn" className="home-primary-button group shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] px-8 py-4 text-lg rounded-full">
                Start with Instagram
                <span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link href="/explore" className="font-semibold text-outline hover:text-white transition-colors flex items-center gap-2 group">
                Browse all systems
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  east
                </span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-outline lg:justify-start">
              {["No setup", "Interactive lessons", "Learn at your pace"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
                      check_circle
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative z-10 min-w-0 fade-in-up-delay-2">
            <div className="architecture-window animate-float">
              <div className="architecture-toolbar">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-200/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
                </div>
                <div className="flex items-center gap-2 font-code-sm text-[11px] text-outline">
                  <span className="material-symbols-outlined text-[15px]">
                    play_circle
                  </span>
                  instagram / publish-post
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  LIVE
                </div>
              </div>

              <div className="architecture-canvas grid-bg-small">
                <div className="flow-route flow-route-one" aria-hidden="true">
                  <span />
                </div>
                <div className="flow-route flow-route-two" aria-hidden="true">
                  <span />
                </div>
                <div className="flow-route flow-route-three" aria-hidden="true">
                  <span />
                </div>

                <div className="architecture-node node-client">
                  <span className="material-symbols-outlined text-secondary">
                    smartphone
                  </span>
                  <div><strong>iOS client</strong><small>POST /media</small></div>
                </div>
                <div className="architecture-node node-gateway">
                  <span className="material-symbols-outlined text-tertiary">
                    conversion_path
                  </span>
                  <div><strong>API gateway</strong><small>Auth · route</small></div>
                </div>
                <div className="architecture-node node-service node-active">
                  <span className="architecture-pulse" aria-hidden="true" />
                  <span className="material-symbols-outlined text-primary">
                    deployed_code
                  </span>
                  <div><strong>Post service</strong><small>12.4k req/s</small></div>
                </div>
                <div className="architecture-node node-store">
                  <span className="material-symbols-outlined text-amber-200">
                    database
                  </span>
                  <div><strong>Metadata DB</strong><small>p95 · 18ms</small></div>
                </div>
                <div className="architecture-node node-queue">
                  <span className="material-symbols-outlined text-emerald-300">
                    stacked_inbox
                  </span>
                  <div><strong>Event queue</strong><small>3 consumers</small></div>
                </div>

                <div className="architecture-insight">
                  <div className="mb-2 flex items-center gap-2 text-tertiary">
                    <span className="material-symbols-outlined text-[16px]">
                      auto_awesome
                    </span>
                    <span className="font-code-sm text-[10px] font-semibold uppercase tracking-[0.16em]">
                      AI insight
                    </span>
                  </div>
                  <p>
                    The upload returns before fan-out completes. That keeps the
                    write path fast and moves expensive work off the request.
                  </p>
                </div>
              </div>

              <div className="architecture-status">
                <div><span>Latency</span><strong>84 ms</strong></div>
                <div><span>Throughput</span><strong>12.4k/s</strong></div>
                <div><span>Errors</span><strong className="text-emerald-300">0.02%</strong></div>
              </div>
            </div>

            <div className="floating-note floating-note-left">
              <span className="material-symbols-outlined text-[17px] text-amber-200">bolt</span>
              Async fan-out
            </div>
            <div className="floating-note floating-note-right">
              <span className="material-symbols-outlined text-[17px] text-secondary">timeline</span>
              p95 healthy
            </div>
          </div>
        </section>

        <section className="relative z-10 w-full overflow-hidden border-y border-white/5 bg-surface/50 backdrop-blur-md">
          <div className="system-strip">
            <p className="font-code-sm text-[10px] font-semibold uppercase tracking-[0.2em] text-outline z-10 shrink-0 hidden md:block">
              Explore systems you already know
            </p>
            <div className="marquee-container z-10 relative">
              <div className="marquee-content flex items-center gap-x-16 px-8">
                {[...systems, ...systems, ...systems].map((system, i) => (
                  <div key={`${system.name}-${i}`} className="flex items-center gap-3 text-base font-semibold text-on-surface-variant transition-colors hover:text-white cursor-default group shrink-0">
                    <span className={`material-symbols-outlined text-[24px] ${system.color} transition-transform group-hover:scale-110 drop-shadow-md`}>
                      {system.icon}
                    </span>
                    {system.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section py-24">
          <div className="mb-14 mx-auto max-w-[42rem] text-center">
            <p className="home-eyebrow inline-flex items-center gap-2">
              <span className="h-px w-8 bg-secondary/50"></span>
              A better way to learn
              <span className="h-px w-8 bg-secondary/50"></span>
            </p>
            <h2 className="home-heading mx-auto text-[clamp(2.5rem,4vw,3.5rem)]">From boxes and arrows to real engineering intuition.</h2>
            <p className="home-subheading mx-auto">
              Every lesson is built around a concrete request and a decision
              you can see, test, and question.
            </p>
          </div>
          <div className="bento-grid mt-14 relative">
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            {learningLoop.map((item, idx) => (
              <article key={item.number} className={`learning-step spotlight-card group glass-card relative overflow-hidden ${idx === 0 ? 'bento-large' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`mb-9 flex items-center justify-between relative z-10 ${idx === 0 ? 'mb-16' : ''}`}>
                  <span className={`material-symbols-outlined text-primary drop-shadow-[0_0_12px_rgba(195,192,255,0.4)] transition-transform duration-500 group-hover:scale-110 ${idx === 0 ? 'text-6xl' : 'text-4xl'}`} style={{ animation: 'floatIcon 4s ease-in-out infinite' }}>{item.icon}</span>
                  <span className="font-code-sm text-xs font-bold text-outline/50 transition-colors duration-300 group-hover:text-primary/70">{item.number}</span>
                </div>
                <h3 className={`relative z-10 font-bold tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary ${idx === 0 ? 'text-3xl' : 'text-xl'}`}>{item.title}</h3>
                <p className={`relative z-10 mt-4 leading-relaxed text-on-surface-variant ${idx === 0 ? 'text-lg max-w-[80%]' : 'text-sm'}`}>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section relative py-24">
          <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />
          <div className="relative z-10 mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[42rem]">
              <p className="home-eyebrow">Start somewhere interesting</p>
              <h2 className="home-heading">Choose your first deep dive.</h2>
            </div>
            <Link href="/explore" className="group flex w-max items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-secondary">
              View the full library
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="relative z-10 flex flex-col">
            {paths.map((path, idx) => (
              <div key={path.title} className={`path-block ${idx % 2 !== 0 ? 'path-block-reverse' : ''}`}>
                <div className="path-block-visual group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className={`material-symbols-outlined path-block-icon-bg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0 text-${path.color}`}>{path.icon}</span>
                  
                  {/* Decorative glass elements inside visual */}
                  <div className="relative z-10 p-8 glass-panel rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                     <div className="flex items-center gap-3 mb-4">
                       <span className={`material-symbols-outlined text-3xl text-${path.color}`}>{path.icon}</span>
                       <span className="font-code-sm text-xs font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">{path.stat}</span>
                     </div>
                     <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                       <div className={`h-full w-2/3 bg-primary rounded-full`} />
                     </div>
                  </div>
                </div>
                <div className="px-6 lg:px-12">
                  <p className="font-code-sm text-[10px] font-bold uppercase tracking-[0.2em] text-outline/80 mb-4">{path.eyebrow}</p>
                  <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-on-surface mb-6">{path.title}</h3>
                  <p className="text-lg leading-8 text-on-surface-variant mb-8">{path.copy}</p>
                  <Link href={path.href} className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors group">
                    Start this lab
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section py-32 max-w-[56rem] mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-rose-500" />
              <div className="terminal-dot bg-amber-400" />
              <div className="terminal-dot bg-emerald-500" />
              <span className="ml-4 font-code-sm text-xs text-outline opacity-60">guest@arc-ai: ~/simulation</span>
            </div>
            <div className="terminal-body bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-surface/0 to-transparent">
              <div className="mb-8 font-code-sm text-primary flex items-center gap-3">
                <span className="text-secondary">$</span> ./run_simulation --mode=interactive
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-on-surface mb-6">
                Stop memorizing design. <br/><span className="text-glow-premium text-white">Start tracing it.</span>
              </h2>
              <p className="text-lg text-on-surface-variant mb-10 max-w-[38rem]">
                Open a real architecture, follow the data, and build the
                intuition that sticks through interviews and production.
              </p>
              <Link href="/learn" className="home-primary-button group inline-flex px-8 py-4 text-base rounded-lg shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:shadow-[0_0_50px_rgba(79,70,229,0.4)]">
                Initialize Environment
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">terminal</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
