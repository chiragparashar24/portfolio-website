'use client';

import { FaArrowUpRightFromSquare, FaClock, FaCalendar } from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { blogPosts } from '@/lib/data';

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="Blog"
        title="Writing & sharing what I learn"
        description="Technical articles and notes on AI, machine learning, Python, and modern software development."
        id="blog-heading"
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, i) => (
          <ScrollReveal as="li" key={post.title} delay={i * 0.06}>
            <GlassCard className="h-full">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
                aria-label={`Read: ${post.title}`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-2xl">
                    {post.emoji}
                  </span>
                  <div className="flex flex-col gap-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <FaCalendar aria-hidden /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FaClock aria-hidden /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-slate-100 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <span className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read article <FaArrowUpRightFromSquare aria-hidden />
                </span>
              </a>
            </GlassCard>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
