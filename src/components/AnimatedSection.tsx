'use client';

import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReveal } from './useReveal';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: Props) {
  const reveal = useReveal();
  return (
    <m.div className={className} {...reveal(delay)}>
      {children}
    </m.div>
  );
}
