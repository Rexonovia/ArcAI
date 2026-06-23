"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/explore", label: "Explore" },
    { href: "/playground", label: "Playground" },
    { href: "/chat", label: "Chat" },
  ];

  return (
    <>
      <nav className="bg-surface/60 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-white/10 border-t border-t-white/5 shadow-sm flex justify-between items-center px-gutter py-sm max-w-full mx-auto">
        <div className="flex items-center gap-xs">
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              architecture
            </span>
            <span className="font-headline-md text-lg sm:text-xl font-extrabold text-primary tracking-tight">
              Arc
              <span className="text-secondary">-AI</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-body-md text-body-md transition-all duration-200 ${
                  isActive
                    ? "text-on-surface bg-white/5"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                }`}
              >
                {link.label}
                {/* Active indicator bar */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-md">
          <Link href="/learn" className="hidden md:block bg-gradient-to-r from-primary-container to-secondary-container text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]">
            Get Started
          </Link>
          <button
            className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          
          {session ? (
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => signOut()}
                className="text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors"
              >
                Sign Out
              </button>
              <div className="w-8 h-8 rounded-full border border-outline flex items-center justify-center bg-surface-container-highest overflow-hidden hover:border-primary transition-colors duration-200" title={session.user?.name || "User"}>
                {session.user?.image ? (
                  <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-outline text-sm">person</span>
                )}
              </div>
            </div>
          ) : (
            <button 
              onClick={() => signIn()}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container border border-outline hover:border-primary/50 hover:bg-surface-container-high transition-all duration-200 text-sm font-medium"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-surface/95 backdrop-blur-3xl z-40 md:hidden flex flex-col p-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl font-headline-md text-headline-md transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-surface-container border border-outline-variant text-on-surface hover:border-primary/50"
                  }`}
                >
                  {link.label}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-8">
            <div className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl border border-outline-variant">
              <div className="w-10 h-10 rounded-full border border-outline flex items-center justify-center bg-surface-container-highest overflow-hidden">
                {session?.user?.image ? (
                  <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-outline">
                    person
                  </span>
                )}
              </div>
              <div>
                <div className="text-on-surface font-medium">{session?.user?.name || "Guest User"}</div>
                <div className="text-outline text-xs">{session ? "Logged in" : "Sign in to save progress"}</div>
              </div>
            </div>
            {session ? (
              <button 
                onClick={() => signOut()}
                className="w-full bg-surface-container text-on-surface p-4 rounded-xl font-label-md text-label-md hover:bg-surface-container-high transition-all duration-200 border border-outline-variant"
              >
                Sign Out
              </button>
            ) : (
              <button 
                onClick={() => signIn()}
                className="w-full bg-gradient-to-r from-primary-container to-secondary-container text-white p-4 rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg flex justify-center"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
