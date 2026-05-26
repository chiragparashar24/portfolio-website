'use client';

import { FaBriefcase, FaUsers, FaGraduationCap, FaCircleCheck } from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { experiences } from '@/lib/data';

const typeMeta = {
  work: { icon: FaBriefcase, color: 'text-primary', ring: 'ring-primary/40', bg: 'bg-primary/15' },
  leadership: { icon: FaUsers, color: 'text-secondary-300', ring: 'ring-secondary/40', bg: 'bg-secondary/15' },
  education: { icon: FaGraduationCap, color: 'text-accent', ring: 'ring-accent/40', bg: 'bg-accent/15' },
};

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="My journey so far"
        description="Leadership, learning, and building — the experiences shaping me as an engineer."
        id="experience-heading"
      />

      <ol className="relative mx-auto max-w-4xl">
        <span
          aria-hidden
          className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-secondary/30 to-accent/30"
        />

        {experiences.map((exp, i) => {
          const meta = typeMeta[exp.type];
          const Icon = meta.icon;
          const isLeft = i % 2 === 0;

          return (
            <ScrollReveal as="li" key={exp.role} delay={i * 0.08} className="relative">
              <div
                className={`relative grid md:grid-cols-2 gap-6 py-6 ${
                  isLeft ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute left-5 md:left-1/2 top-10 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full ring-2 ${meta.ring} ${meta.bg} ${meta.color} backdrop-blur`}
                >
                  <Icon />
                </span>

                <div className={`md:pr-12 ${isLeft ? 'md:text-right' : 'md:text-left md:pl-12 md:pr-0'}`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {exp.duration}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{exp.location}</p>
                </div>

                <div className={`pl-14 md:pl-12 ${isLeft ? 'md:pl-12' : 'md:pr-12 md:pl-0'}`}>
                  <GlassCard hover className="text-left">
                    <h3 className="font-display text-lg font-semibold text-slate-100">
                      {exp.role}
                    </h3>
                    <p className={`mt-1 text-sm font-medium ${meta.color}`}>
                      {exp.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {exp.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                          <FaCircleCheck className={`mt-0.5 shrink-0 ${meta.color}`} aria-hidden />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </ol>
    </Section>
  );
}
