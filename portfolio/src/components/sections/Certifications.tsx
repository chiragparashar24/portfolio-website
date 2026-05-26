'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { certifications } from '@/lib/data';
import type { Certification } from '@/types';

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous learning, validated"
        description="Programs and certifications I've earned to deepen my skills across security, cloud, AI, and engineering."
        id="certifications-heading"
      />

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <ScrollReveal as="li" key={cert.title} delay={i * 0.05}>
              <GlassCard className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="flex h-full w-full flex-col items-start text-left"
                  aria-label={`View details for ${cert.title}`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon aria-hidden className="text-lg" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-slate-100">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {cert.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View details <FaArrowUpRightFromSquare aria-hidden />
                  </span>
                </button>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="relative w-full max-w-lg glass-strong rounded-2xl p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close certificate details"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 hover:text-primary hover:border-primary/40"
              >
                <FaXmark />
              </button>

              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <active.icon aria-hidden className="text-2xl" />
                </span>
                <div>
                  <h3
                    id="cert-modal-title"
                    className="font-display text-lg font-semibold text-slate-100"
                  >
                    {active.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{active.issuer}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {active.description}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Skills covered
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {active.credentialUrl && (
                <a
                  href={active.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow"
                >
                  Verify credential <FaArrowUpRightFromSquare aria-hidden />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
