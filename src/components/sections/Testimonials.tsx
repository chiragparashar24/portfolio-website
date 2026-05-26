'use client';

import { FaQuoteLeft } from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What others say"
        description="Notes from mentors, peers, and collaborators I've had the chance to work with."
        id="testimonials-heading"
      />

      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal as="li" key={t.name} delay={i * 0.07}>
            <GlassCard className="flex h-full flex-col">
              <FaQuoteLeft aria-hidden className="text-2xl text-primary/60" />
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.message}&rdquo;
              </p>
              <div className="mt-auto pt-5 flex items-center gap-3 border-t border-white/[0.06]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-slate-950">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role} · {t.organization}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
