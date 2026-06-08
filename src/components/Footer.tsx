import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin mt-xl">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <span className="material-symbols-outlined text-primary">architecture</span>
        <span className="font-headline-md text-headline-md text-primary tracking-tight">SystemArchitect AI</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-md font-body-md text-body-md">
        <Link href="#" className="text-outline hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100">
          Documentation
        </Link>
        <Link href="#" className="text-outline hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100">
          API
        </Link>
        <Link href="#" className="text-outline hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100">
          Privacy
        </Link>
        <Link href="#" className="text-outline hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100">
          Terms
        </Link>
      </div>
      
      <div className="mt-4 md:mt-0 font-body-md text-body-md text-outline opacity-80">
        © 2026 SystemArchitect AI. Built for scale.
      </div>
    </footer>
  );
}
