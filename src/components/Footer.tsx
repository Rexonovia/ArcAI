import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ];

  return (
    <footer className="bg-surface-container-lowest w-full py-lg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-margin">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform duration-300">
            architecture
          </span>
          <span className="font-headline-md text-xl font-bold text-primary tracking-tight">
            Arc <span className="text-secondary">AI</span>
          </span>
        </Link>

        <div className="flex flex-wrap justify-center gap-md font-body-md text-body-md">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-outline animated-underline hover:text-on-surface transition-all duration-200 opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="font-body-md text-sm text-outline opacity-80 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary/60 pulse-node" />
          © 2026 ArcAI
        </div>
      </div>
    </footer>
  );
}
