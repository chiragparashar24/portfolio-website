'use client';

import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('theme')) as Theme | null;
    const initial: Theme = stored ?? 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('light', initial === 'light');
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-slate-200 hover:text-primary hover:border-primary/40 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="absolute inline-flex"
            aria-hidden
          >
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
