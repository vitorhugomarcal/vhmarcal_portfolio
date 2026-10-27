'use client';

import { useReducedMotion } from 'framer-motion';

export function useReveal() {
  const reducedMotion = useReducedMotion();
  return (delay = 0) => ({
    'data-reveal': true,
    initial: reducedMotion ? false as const : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reducedMotion ? 0 : 0.44,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });
}
