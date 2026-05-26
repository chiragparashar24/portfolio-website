'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personal } from '@/lib/data';

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const ready = () => {
      // small min-duration so it doesn't flash
      window.setTimeout(() => setDone(true), 600);
    };
    if (document.readyState === 'complete') ready();
    else window.addEventListener('load', ready, { once: true });
    return () => window.removeEventListener('load', ready);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border-2 border-secondary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <span className="absolute inset-0 grid place-items-center font-display text-2xl font-bold gradient-text-static">
                {personal.firstName.charAt(0)}P
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              loading portfolio…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
