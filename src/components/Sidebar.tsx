"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/chat", icon: "smart_toy", label: "AI Tutor" },
    { href: "/explore", icon: "dashboard", label: "Dashboard" },
    { href: "/learn", icon: "school", label: "Modules" },
    { href: "/playground", icon: "tune", label: "Playground" },
  ];

  const recentChats = [
    { label: "Netflix CDN Architecture", time: "2 hours ago" },
    { label: "Redis Caching Strategies", time: "Yesterday" },
    { label: "Microservices vs Monolith", time: "3 days ago" },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-base bg-surface-container-low text-secondary font-label-md text-label-md h-screen w-64 fixed left-0 top-0 pt-20 border-r border-white/10 z-40 shrink-0">

      <nav className="flex flex-col gap-1 flex-1 overflow-y-auto px-xs">

        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-sm py-2.5 rounded-lg mx-2 transition-all duration-200 group relative ${
                isActive
                  ? "bg-surface-container-high text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              {/* Active left bar */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-primary transition-all duration-300 ${
                  isActive ? "h-5 opacity-100" : "h-0 opacity-0"
                }`}
              />
              <span
                className={`material-symbols-outlined transition-colors duration-200 ${
                  isActive ? "text-primary" : "group-hover:text-primary"
                }`}
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Recent Chats section */}
        <div className="px-sm py-2 flex items-center gap-3 mt-xl mb-1">
          <span className="text-outline text-xs uppercase tracking-wider font-medium">
            Recent Chats
          </span>
          <div className="flex-1 border-t border-dashed border-outline-variant/40" />
        </div>

        {recentChats.map((chat, i) => (
          <Link
            key={i}
            href="#"
            className="flex flex-col px-sm py-2.5 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 transition-all duration-200 group"
          >
            <span className="truncate w-full font-label-md text-on-surface group-hover:text-primary transition-colors">
              {chat.label}
            </span>
            <span className="text-xs text-outline">{chat.time}</span>
          </Link>
        ))}
      </nav>

      <div className="p-md border-t border-white/5 mt-auto bg-surface-container-lowest/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/10">
            <span className="material-symbols-outlined text-outline">
              person
            </span>
          </div>
          <div>
            <div className="text-on-surface font-label-md">Learning Path</div>
            <div className="text-outline text-xs">Distributed Systems</div>
          </div>
        </div>
        <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all duration-200 shimmer relative overflow-hidden">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
}
