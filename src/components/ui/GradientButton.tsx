'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  iconRight?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

const baseClass =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

const sizeClass = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
};

const variantClass: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-primary to-secondary text-slate-950 shadow-glow hover:shadow-glow-lg hover:saturate-150',
  secondary:
    'border border-primary/40 bg-white/[0.03] text-primary hover:bg-primary/10 hover:border-primary',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/5',
};

export function GradientButton({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(baseClass, sizeClass[size], variantClass[variant], className)}
      {...(props as object)}
    >
      {icon && <span aria-hidden className="text-base">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span aria-hidden className="text-base transition-transform group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </motion.button>
  );
}

export function GradientLink({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(baseClass, sizeClass[size], variantClass[variant], className)}
      {...(props as object)}
    >
      {icon && <span aria-hidden className="text-base">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span aria-hidden className="text-base transition-transform group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </motion.a>
  );
}
