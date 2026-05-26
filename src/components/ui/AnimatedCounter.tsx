'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  to,
  duration = 1.6,
  suffix = '',
  prefix = '',
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (value) => Math.floor(value).toLocaleString());

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, motionValue, to]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}
      <motion.span aria-hidden>{display}</motion.span>
      {suffix}
    </span>
  );
}
