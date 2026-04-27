import { useMediaQuery } from './useMediaQuery';

/**
 * True when the user has requested reduced motion. Prefer wrapping all
 * non-essential animations in a check against this hook.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
