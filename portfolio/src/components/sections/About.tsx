'use client';

import {
  FaBrain,
  FaPython,
  FaCode,
  FaUsers,
  FaGraduationCap,
  FaBullseye,
} from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { personal } from '@/lib/data';

const focusAreas = [
  {
    icon: FaBrain,
    title: 'AI / ML Engineering',
    description:
      'Designing and deploying ML systems — from data pipelines to model serving — for real-world impact.',
    accent: 'text-primary',
    bg: 'bg-primary/10 border-primary/30',
  },
  {
    icon: FaPython,
    title: 'Python Development',
    description:
      'Backend services, data tools, and automation scripts written in clean, idiomatic Python.',
    accent: 'text-secondary-300',
    bg: 'bg-secondary/10 border-secondary/30',
  },
  {
    icon: FaCode,
    title: 'Software Engineering',
    description:
      'End-to-end product thinking — architecture, performance, accessibility, and DX.',
    accent: 'text-accent',
    bg: 'bg-accent/10 border-accent/30',
  },
  {
    icon: FaUsers,
    title: 'Open Source & Community',
    description:
      'Contributing to projects, mentoring peers, and growing developer communities at scale.',
    accent: 'text-primary',
    bg: 'bg-primary/10 border-primary/30',
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="The engineer behind the keyboard"
        description="Passionate about turning ambitious ideas into clean, reliable software."
        id="about-heading"
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <ScrollReveal>
          <GlassCard hover={false} className="h-full">
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              {personal.longBio}
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-300">
              I&apos;m a{' '}
              <span className="font-semibold text-primary">
                Microsoft Learn Student Ambassador
              </span>{' '}
              and{' '}
              <span className="font-semibold text-secondary-300">
                Vice Secretary of the ACM Student Chapter at PCU
              </span>
              , where I lead technical initiatives, mentor students, and ship
              workshops on AI, modern web stacks, and developer productivity.
              Beyond classes, I&apos;m an open-source contributor and a serial
              hackathon participant who loves shipping things that actually
              help people.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <FaGraduationCap aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Education
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    B.Tech CSE (AI & ML)
                  </p>
                  <p className="text-xs text-slate-400">
                    Pimpri Chinchwad University · CGPA 8.71
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/15 text-secondary-300">
                  <FaBullseye aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Career Objective
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    AI/ML & Software Engineering Internships
                  </p>
                  <p className="text-xs text-slate-400">
                    Looking to ship impactful, intelligent products
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 0.08} as="li">
                <GlassCard className="h-full">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl border ${f.bg} ${f.accent}`}
                  >
                    <Icon aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-100">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {f.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
