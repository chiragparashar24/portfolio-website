'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaMagnifyingGlass,
  FaCircleCheck,
} from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { projects } from '@/lib/data';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

const filters: ProjectCategory[] = ['All', 'AI/ML', 'Web', 'Python', 'Data'];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const inFilter = filter === 'All' || p.category.includes(filter);
      const q = query.trim().toLowerCase();
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inFilter && inQuery;
    });
  }, [filter, query]);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A curated selection of projects across AI/ML, Python development, and modern web."
        id="projects-heading"
      />

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-semibold transition-all',
                filter === f
                  ? 'border-primary/60 bg-primary/15 text-primary shadow-glow'
                  : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-primary/40 hover:text-primary'
              )}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-72">
          <span className="sr-only">Search projects</span>
          <FaMagnifyingGlass
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tags…"
            className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 transition-colors focus:border-primary/50"
          />
        </label>
      </div>

      <motion.ul layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="h-full"
            >
              <GlassCard className="flex h-full flex-col overflow-hidden">
                <div
                  className={`relative -m-6 mb-6 h-44 overflow-hidden rounded-t-2xl bg-gradient-to-br ${p.gradient}`}
                  aria-hidden
                >
                  <div className="absolute inset-0 grid place-items-center text-6xl">
                    {p.emoji}
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {p.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-slate-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {p.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-slate-300">
                      <FaCircleCheck className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex items-center gap-3 border-t border-white/[0.06]">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-primary"
                      aria-label={`${p.title} on GitHub`}
                    >
                      <FaGithub aria-hidden /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-glow transition-shadow hover:shadow-glow-lg"
                      aria-label={`${p.title} live demo`}
                    >
                      <FaArrowUpRightFromSquare aria-hidden /> Live Demo
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-slate-400">
          No projects match your filter. Try clearing the search.
        </p>
      )}
    </Section>
  );
}
