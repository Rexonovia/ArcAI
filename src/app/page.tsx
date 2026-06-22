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
        <div className="home-noise" aria-hidden="true" />
        <div className="home-orb home-orb-one" aria-hidden="true" />
        <div className="home-orb home-orb-two" aria-hidden="true" />

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

            <h1 className="max-w-[680px] text-[clamp(3.25rem,6.3vw,5.85rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-on-surface drop-shadow-sm">
              See what happens{" "}
              <span className="home-gradient-text drop-shadow-md">after the click.</span>
            </h1>

            <p className="mt-7 max-w-[36rem] text-lg leading-8 text-on-surface-variant md:text-xl">
              Explore the architecture behind the apps you use every day.
              Trace real requests, create traffic spikes, and learn every
              trade-off with an AI staff engineer beside you.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/learn" className="home-primary-button group shadow-lg shadow-primary/20 hover:shadow-primary/40">
                Start with Instagram
                <span className="material-symbols-outlined text-[19px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link href="/explore" className="home-secondary-button group backdrop-blur-md">
                Browse all systems
                <span className="material-symbols-outlined text-[19px] text-outline transition-colors group-hover:text-on-surface">
                  grid_view
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
            <div className="architecture-window">
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

        <section className="home-section pb-24 relative z-10">
          <div className="system-strip rounded-2xl bg-surface-container/30 backdrop-blur-md border border-white/5 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <p className="font-code-sm text-[10px] font-semibold uppercase tracking-[0.2em] text-outline z-10">
              Explore systems you already know
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5 lg:justify-end z-10">
              {systems.map((system) => (
                <div key={system.name} className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant transition-colors hover:text-white cursor-default group">
                  <span className={`material-symbols-outlined text-[20px] ${system.color} transition-transform group-hover:scale-110 drop-shadow-md`}>
                    {system.icon}
                  </span>
                  {system.name}
                </div>
              ))}
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
          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            {learningLoop.map((item) => (
              <article key={item.number} className="learning-step group glass-card relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-9 flex items-center justify-between relative z-10">
                  <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_12px_rgba(195,192,255,0.4)] transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
                  <span className="font-code-sm text-xs font-bold text-outline/50 transition-colors duration-300 group-hover:text-primary/70">{item.number}</span>
                </div>
                <h3 className="relative z-10 text-xl font-bold tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-on-surface-variant">{item.copy}</p>
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
          <div className="relative z-10 grid gap-6 lg:grid-cols-3">
            {paths.map((path) => (
              <Link key={path.title} href={path.href} className="path-card group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />
                <div className={`path-card-visual path-card-${path.color} transition-transform duration-700 ease-out group-hover:scale-105`}>
                  <div className="path-card-grid" />
                  <span className="material-symbols-outlined path-card-icon drop-shadow-lg transition-transform duration-500 group-hover:scale-110">{path.icon}</span>
                  <span className="path-card-chip border border-white/10 bg-black/40 font-bold backdrop-blur-md">{path.stat}</span>
                </div>
                <div className="relative z-20 bg-gradient-to-b from-surface/90 to-surface p-7">
                  <p className="font-code-sm text-[10px] font-bold uppercase tracking-[0.2em] text-outline/80 transition-colors group-hover:text-primary">{path.eyebrow}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold leading-7 tracking-tight text-on-surface transition-colors group-hover:text-white">{path.title}</h3>
                    <div className="flex h-8 w-8 -translate-x-4 transform items-center justify-center rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined text-[18px] text-primary">arrow_forward</span>
                    </div>
                  </div>
                  <p className="line-clamp-2 mt-3 text-sm leading-6 text-on-surface-variant">{path.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section py-24">
          <div className="home-cta relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-surface-container/80 to-surface/40 p-12 shadow-2xl backdrop-blur-xl md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-surface/0 to-transparent pointer-events-none" />
            <div className="home-cta-grid opacity-30" aria-hidden="true" />
            
            <div className="relative z-10 mx-auto max-w-[42rem] text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-inner">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-md">architecture</span>
              </div>
              <p className="home-eyebrow">Your next “aha” is one request away</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.045em] text-on-surface drop-shadow-md md:text-5xl">
                Stop memorizing system design. <span className="home-gradient-text drop-shadow-lg">Start seeing it.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[36rem] text-lg leading-8 text-on-surface-variant">
                Open a real architecture, follow the data, and build the
                intuition that sticks through interviews and production.
              </p>
              <Link href="/learn" className="home-primary-button group mt-10 inline-flex px-8 py-4 text-base shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:shadow-[0_0_60px_rgba(79,70,229,0.5)]">
                Begin your first lesson
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
