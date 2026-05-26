'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { skillCategories } from '@/lib/data';
import { accentMap } from '@/lib/utils';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="My technical toolkit"
        description="A blend of programming languages, AI/ML frameworks, web tech, and the soft skills to make it all matter."
        id="skills-heading"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          const accent = accentMap[category.accent];
          return (
            <ScrollReveal key={category.title} delay={i * 0.06}>
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${accent.bgSoft} ${accent.border} ${accent.text}`}
                  >
                    <Icon aria-hidden className="text-lg" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-100">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span className="flex items-center gap-2 font-medium">
                            {SkillIcon && (
                              <span className={`${accent.text}`}>
                                <SkillIcon aria-hidden />
                              </span>
                            )}
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                          <motion.span
                            className={`block h-full rounded-full bg-gradient-to-r ${accent.gradient}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                              duration: 1,
                              ease: 'easeOut',
                              delay: 0.1,
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
