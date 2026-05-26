'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  id,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-400 text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
