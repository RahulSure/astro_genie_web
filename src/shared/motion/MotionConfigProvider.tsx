import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/shared/hooks/usePrefersReducedMotion';

/**
 * Centralizes Framer Motion defaults and honors `prefers-reduced-motion`.
 * When reduced motion is on, MotionConfig disables all transitions globally.
 */
export function MotionConfigProvider({ children }: { children: ReactNode }) {
  const reduce = usePrefersReducedMotion();
  return (
    <MotionConfig reducedMotion={reduce ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  );
}
