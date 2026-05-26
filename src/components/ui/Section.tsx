import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  bare?: boolean;
}

export function Section({
  id,
  className,
  containerSize = 'lg',
  bare = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('section-padding scroll-mt-24 relative', className)}
      aria-labelledby={`${id}-heading`}
      {...props}
    >
      {bare ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}
