'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  hover?: boolean;
  strong?: boolean;
  glow?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, strong = false, glow = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className={cn(
          'relative rounded-2xl p-6 md:p-7 noise-overlay',
          strong ? 'glass-strong' : 'glass',
          hover && 'glow-border transition-shadow duration-300 hover:shadow-glow',
          glow && 'shadow-glow',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
