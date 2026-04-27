import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Compose Tailwind class names while resolving conflicts predictably.
 * Prefer `cn` over raw string concatenation so utility overrides behave
 * the way a human reader expects (last-wins for the same property).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
