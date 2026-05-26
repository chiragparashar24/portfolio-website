import Link from 'next/link';
import { socials, personal, navLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/[0.06] pt-12 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold gradient-text-static">
              {personal.name}
            </p>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              {personal.title}. Building intelligent solutions with AI, data & code.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-primary/40 hover:text-primary hover:shadow-glow"
                  >
                    <Icon aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Quick Links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-400">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, '')}`}
                  className="hover:text-primary transition-colors"
                >
                  {personal.phone}
                </a>
              </li>
              <li>{personal.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {personal.name}. Crafted with Next.js,
            Tailwind CSS & Framer Motion.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Open to internships & full-time roles
          </p>
        </div>
      </div>
    </footer>
  );
}
