'use client';

import { FaCircleCheck } from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { leadership } from '@/lib/data';
import { accentMap } from '@/lib/utils';

export function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading
        eyebrow="Leadership"
        title="Building communities, not just code"
        description="A look at the leadership roles where I&apos;ve organized, mentored, and shipped at scale."
        id="leadership-heading"
      />

      <ol className="relative space-y-6 border-l border-white/[0.08] pl-8 md:pl-10">
        {leadership.map((l, i) => {
          const Icon = l.icon;
          const accent = accentMap[l.accent];
          return (
            <ScrollReveal as="li" key={l.role} delay={i * 0.07} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[37px] md:-left-[45px] top-2 grid h-9 w-9 place-items-center rounded-full border ${accent.bgSoft} ${accent.border} ${accent.text} backdrop-blur shadow-glow`}
              >
                <Icon />
              </span>
              <GlassCard hover>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-lg font-semibold text-slate-100">
                    {l.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {l.duration}
                  </span>
                </div>
                <p className={`mt-1 text-sm font-medium ${accent.text}`}>
                  {l.organization}
                </p>
                <ul className="mt-4 space-y-2">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                      <FaCircleCheck className={`mt-0.5 shrink-0 ${accent.text}`} aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </ol>
    </Section>
  );
}
