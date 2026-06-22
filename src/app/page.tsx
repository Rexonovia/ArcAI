/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AnimatedLandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[100px] px-margin md:px-gutter max-w-7xl mx-auto w-full flex flex-col gap-xl pb-xl">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center min-h-[716px]">

<div className="flex flex-col gap-lg z-10">
<div className="inline-flex items-center gap-2 bg-surface-container/50 border border-outline/20 px-3 py-1 rounded-full w-max backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-secondary pulse-node"></span>
<span className="font-code-sm text-code-sm text-secondary">v2.0 Architecture Engine Live</span>
</div>
<h1 className="font-headline-display text-headline-display md:text-headline-display text-headline-lg-mobile text-on-surface">
                    Understand How Modern Apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Actually Work.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                    Deconstruct the systems behind Instagram, WhatsApp, and Netflix. Interactive learning environment for software engineers and architects powered by AI.
                </p>
<div className="flex flex-col sm:flex-row gap-md pt-xs">
<button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-6 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex justify-center items-center gap-2 active:scale-95">
                        Start Learning Free
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button className="glass-panel text-on-surface px-6 py-3 rounded-lg font-label-md text-label-md hover:border-secondary transition-colors flex justify-center items-center gap-2 active:scale-95">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
                        Explore Product Architectures
                    </button>
</div>
<div className="flex items-center gap-4 mt-sm pt-sm border-t border-white/5">
<div className="flex -space-x-2">
<img alt="Engineer" className="w-8 h-8 rounded-full border border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGCkXYQGm4eMTWe4PC9GFNyw_BOo9RhrFUivujWQAQUty9CesLaQmr28u6-llTm4wuNy-7aBv0u6FjhSreRfxU6IxFb85ZVthixpxaicngcLtQOSzmjv0sz9LSqZCEuZEUZg38fm0Jk5dx8Hv-ZSusKXHtu9HLVCDwv4wzy5zhOX2eD0xoLdqRVM6c_E4MSbGygaQ8eO71m20o8BAijQr_lQ4d_-4HBAK3Je1B_GLiFtIdWA8hAW1Y2KwH-VC7Hc5Gjyi08CLQw8Zj"/>
<img alt="Architect" className="w-8 h-8 rounded-full border border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBij_eEjaxEbsJDy5UMuLc5_t5yatr0A234Rnf20p5G8gPfMSJwBoZpaOEOCOhg2MMXrIPZOP2NgM10LV2gO6lvoDhtBCmdwC5LB6VRMXFFaR1WCA4-UVEw4RlfmHeZsN40SHNtP_b5hoR9q8LdTnOp1v24bvOW-GVumVaVfVk0kwIoyJjbTrivDKAVo8FOeVcbyWPgwZXSJSBhEv7KMEmbVBSNS56bbyTD2sPezjwuqWGC4n7Ggps5TSwG-3oDRRCh6HPJcg7Ua4z-"/>
<img alt="Developer" className="w-8 h-8 rounded-full border border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVhguaj6CNpgZVxYVgdMmlTyrDs15oyicx1GKGKPB3rHpoJMGZbsL_XdBSzb9IpJiUaWDEC4m98HvYMr1_kXh7agPeEwWGIfJbrsaDCPq2Y5K35v8zp6QgWoRnO9r6yia2oSi9zBEFedRQndYNVB5yT8PyYKqCxpL-IbbCUHsiRe-8jZ9JgpbkiLWksQ8sT7h1XpGqxE5d8M9o0VrHBoj2W-bZcNoC2OK2zRWgfuMGgRSVx9-UCkd71svhdQryxtNOY_lOUXf3ouYI"/>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Joined by 10,000+ engineers</p>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-video lg:aspect-square glass-panel rounded-xl flex items-center justify-center overflow-hidden p-6 shadow-[0_0_40px_rgba(79,70,229,0.1)]">
<div className="absolute top-4 left-4 font-code-sm text-code-sm text-outline flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">terminal</span>
                    Simulation: Send WhatsApp Message
                </div>

<div className="relative w-full h-full flex items-center justify-between mt-8">

<div className="flex flex-col items-center gap-2 z-10 w-1/5">
<div className="w-12 h-16 rounded-md bg-surface-container border border-outline/30 flex items-center justify-center relative group hover:border-secondary transition-colors cursor-pointer node-glow">
<span className="material-symbols-outlined text-secondary text-2xl">smartphone</span>
<div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full pulse-node opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="font-code-sm text-[11px] text-on-surface-variant text-center">Client App</span>
</div>

<div className="flex-grow h-[2px] relative bg-white/5 mx-2">
<div className="absolute w-full h-full overflow-hidden">
<div className="w-8 h-full bg-secondary absolute top-0 left-0" style={{"boxShadow":"0 0 8px 2px #89ceff","animation":"flow 2s linear infinite"}}></div>
</div>
</div>

<div className="flex flex-col items-center gap-2 z-10 w-1/5">
<div className="w-16 h-16 rounded-full bg-surface-container border border-outline/30 flex items-center justify-center relative group hover:border-tertiary transition-colors cursor-pointer node-glow-delayed-1">
<span className="material-symbols-outlined text-tertiary text-2xl">router</span>
</div>
<span className="font-code-sm text-[11px] text-on-surface-variant text-center">API Gateway</span>
<div className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-[9px] font-code-sm border border-tertiary/20">Load Balancing</div>
</div>

<div className="flex-grow h-[2px] relative bg-white/5 mx-2">
<div className="absolute w-full h-full overflow-hidden">
<div className="w-8 h-full bg-tertiary absolute top-0 left-0" style={{"boxShadow":"0 0 8px 2px #ddb7ff","animation":"flow 2s linear infinite 0.5s"}}></div>
</div>
</div>

<div className="flex flex-col items-center gap-2 z-10 w-1/5">
<div className="w-20 h-24 rounded-lg bg-surface-container border border-outline/30 flex flex-col items-center justify-center gap-1 relative group hover:border-primary transition-colors cursor-pointer node-glow-delayed-2">
<span className="material-symbols-outlined text-primary text-xl">dns</span>
<div className="w-8 h-1 bg-white/10 rounded-full mt-1 overflow-hidden"><div className="w-2/3 h-full bg-primary pulse-node"></div></div>
<div className="w-8 h-1 bg-white/10 rounded-full"><div className="w-1/3 h-full bg-primary"></div></div>
<div className="w-8 h-1 bg-white/10 rounded-full"><div className="w-4/5 h-full bg-primary"></div></div>
</div>
<span className="font-code-sm text-[11px] text-on-surface-variant text-center">Message Servers</span>
</div>

<div className="w-1/5 h-32 relative mx-2 flex flex-col justify-between py-4">

<div className="absolute top-4 left-0 w-full h-[2px] bg-white/5 origin-left rotate-[-20deg]">
<div className="absolute w-full h-full overflow-hidden">
<div className="w-6 h-full bg-secondary absolute top-0 left-0" style={{"boxShadow":"0 0 6px 1px #89ceff","animation":"flow 1.5s linear infinite 1s"}}></div>
</div>
</div>

<div className="absolute bottom-4 left-0 w-full h-[2px] bg-white/5 origin-left rotate-[20deg]">
<div className="absolute w-full h-full overflow-hidden">
<div className="w-6 h-full bg-primary absolute top-0 left-0" style={{"boxShadow":"0 0 6px 1px #c3c0ff","animation":"flow 2.5s linear infinite 1.2s"}}></div>
</div>
</div>
</div>

<div className="flex flex-col justify-between h-40 z-10 w-1/5">

<div className="flex flex-col items-center gap-1">
<div className="w-12 h-10 rounded-md bg-surface-container border border-outline/30 flex items-center justify-center hover:border-secondary transition-colors cursor-pointer node-glow-delayed-1">
<span className="material-symbols-outlined text-secondary text-lg">queue</span>
</div>
<span className="font-code-sm text-[10px] text-on-surface-variant text-center">Kafka Queue</span>
</div>

<div className="flex flex-col items-center gap-1">
<div className="w-12 h-14 rounded-md bg-surface-container border border-outline/30 flex items-center justify-center hover:border-primary transition-colors cursor-pointer node-glow-delayed-2">
<span className="material-symbols-outlined text-primary text-lg">database</span>
</div>
<span className="font-code-sm text-[10px] text-on-surface-variant text-center">Cassandra DB</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-lg mt-xl">
<div className="text-center max-w-2xl mx-auto mb-md">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Architectural Mastery, Accelerated</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Move beyond high-level diagrams. Dive into component-level specifics, interactive traffic simulations, and expert AI guidance.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="glass-panel rounded-xl p-6 flex flex-col md:col-span-2 group overflow-hidden relative cursor-pointer border border-white/5 hover:border-secondary/50 transition-colors duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start z-10 mb-4">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">How Instagram Works</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">System Design Case Study</p>
</div>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md text-xs border border-secondary/20">Featured</span>
</div>
<div className="flex-grow rounded-lg bg-surface-container-low border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">

<div className="w-3/4 h-3/4 border border-outline/20 rounded-md p-2 flex flex-col gap-2">
<div className="w-full h-8 flex items-center gap-2 border-b border-outline/20 pb-2">
<div className="w-6 h-6 rounded-full bg-white/10"></div>
<div className="w-16 h-2 rounded bg-white/10"></div>
</div>
<div className="flex-grow bg-white/5 rounded relative overflow-hidden flex items-center justify-center">
<span className="material-symbols-outlined text-outline/50 text-4xl">image</span>

<div className="absolute top-2 right-2 flex items-center gap-1 bg-surface/80 backdrop-blur px-2 py-1 rounded text-[9px] font-code-sm text-secondary border border-secondary/20">
<span className="material-symbols-outlined text-[10px]">cloud_download</span> Edge CDN
                                 </div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 flex flex-col group overflow-hidden relative border border-white/5 hover:border-tertiary/50 transition-colors duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="font-headline-md text-headline-md text-on-surface z-10">Ask AI Anything</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1 z-10 mb-4">Your personal staff engineer.</p>
<div className="flex-grow rounded-lg bg-surface-container-low border border-white/5 p-4 flex flex-col gap-3 font-code-sm text-code-sm z-10 group-hover:-translate-y-1 transition-transform">
<div className="flex gap-2 items-start">
<span className="material-symbols-outlined text-outline text-sm mt-0.5">account_circle</span>
<div className="bg-surface p-2 rounded-md rounded-tl-none border border-white/5 text-on-surface-variant text-[11px]">Why use Cassandra instead of MySQL for the message store?</div>
</div>
<div className="flex gap-2 items-start">
<span className="material-symbols-outlined text-tertiary text-sm mt-0.5">smart_toy</span>
<div className="bg-tertiary/10 p-2 rounded-md rounded-tr-none border border-tertiary/20 text-on-surface text-[11px]">
                                WhatsApp requires massive write throughput. Cassandra&apos;s LSM-tree architecture handles high write loads better than MySQL&apos;s B-trees...
                            </div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 flex flex-col md:col-span-3 group overflow-hidden relative border border-white/5 hover:border-primary/50 transition-colors duration-300 min-h-[250px]">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center z-10 mb-6 gap-4">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">tune</span> Interactive Playground
                            </h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Simulate traffic spikes and watch system constraints in real-time.</p>
</div>

<div className="w-full md:w-64 bg-surface-container-low p-3 rounded-lg border border-white/5 flex flex-col gap-2">
<div className="flex justify-between font-code-sm text-[11px] text-on-surface-variant">
<span>Traffic Load (Req/s)</span>
<span className="text-primary font-bold">10,000</span>
</div>
<input className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-primary [&amp;::-webkit-slider-thumb]:rounded-full" max="100" min="1" type="range" value="50"/>
</div>
</div>

<div className="flex-grow flex items-center justify-around z-10 px-4 md:px-12 relative">

<div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white/5 -translate-y-1/2 -z-10"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded bg-surface border border-outline flex items-center justify-center">
<span className="material-symbols-outlined text-outline">group</span>
</div>
<span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-code-sm border border-primary/20">Normal Load</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-surface border border-primary shadow-[0_0_15px_rgba(195,192,255,0.2)] flex items-center justify-center pulse-node">
<span className="material-symbols-outlined text-primary">speed</span>
</div>
<span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-code-sm border border-primary/20">Scaling Cluster</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded bg-surface border border-error flex items-center justify-center relative">
<span className="material-symbols-outlined text-error">database</span>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full animate-ping"></div>
</div>
<span className="bg-error/10 text-error px-2 py-0.5 rounded text-[10px] font-code-sm border border-error/20">I/O Bottleneck</span>
</div>
</div>
</div>
</div>
</section>
</main>
      <Footer />
    </>
  );
}