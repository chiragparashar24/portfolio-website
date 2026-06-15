'use client';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { achievements } from '@/lib/data';
import { accentMap } from '@/lib/utils';

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="By the numbers"
        description="Milestones that mark my journey as a student, builder, and community lead."
        id="achievements-heading"
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          const accent = accentMap[a.accent];
          return (
            <ScrollReveal as="li" key={a.label} delay={i * 0.06}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl border ${accent.bgSoft} ${accent.border} ${accent.text}`}
                  >
                    <Icon aria-hidden className="text-xl" />
                  </span>
                  <div>
                    <p
                      className={`font-display text-3xl font-bold ${accent.text}`}
                    >
                      {a.value === 1 ? (
                        <span aria-label="Achieved">★</span>
                      ) : (
                        <AnimatedCounter to={a.value} suffix={a.suffix ?? ''} />
                      )}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{a.label}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </ul>
    </Section>
  );
}
