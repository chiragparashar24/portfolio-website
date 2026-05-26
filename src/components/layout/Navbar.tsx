'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark, FaCode } from 'react-icons/fa6';
import { navLinks, personal } from '@/lib/data';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0% -50% 0%', threshold: 0 }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300',
          scrolled && 'sm:max-w-6xl'
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'flex items-center justify-between rounded-full px-4 sm:px-5 py-2 transition-all duration-300',
            scrolled ? 'glass-strong shadow-lg' : 'glass'
          )}
        >
          <Link
            href="#home"
            className="group flex items-center gap-2 font-display text-base font-bold"
            aria-label={`${personal.name} — Home`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-slate-950 shadow-glow transition-transform group-hover:rotate-12">
              <FaCode aria-hidden />
            </span>
            <span className="hidden sm:inline gradient-text-static">
              {personal.firstName}.dev
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative px-3 py-2 rounded-full font-medium transition-colors',
                      isActive ? 'text-primary' : 'text-slate-300 hover:text-white'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10 border border-primary/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={personal.resumeUrl}
              download
              className="hidden md:inline-flex h-10 items-center rounded-full bg-gradient-to-r from-primary to-secondary px-4 text-sm font-semibold text-slate-950 shadow-glow transition-all hover:shadow-glow-lg hover:saturate-150"
            >
              Resume
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 hover:text-primary hover:border-primary/40 transition-colors"
            >
              {open ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3 glass-strong rounded-2xl p-3"
            >
              <ul className="grid gap-1 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-xl px-4 py-3 font-medium transition-colors',
                        active === link.href
                          ? 'bg-primary/10 text-primary border border-primary/30'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={personal.resumeUrl}
                    download
                    onClick={() => setOpen(false)}
                    className="mt-2 block rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-center text-sm font-semibold text-slate-950"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
