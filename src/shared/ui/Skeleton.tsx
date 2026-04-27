import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  /** Shape helpers; default is rounded rectangle. */
  shape?: 'rect' | 'circle' | 'text';
};

export default function Skeleton({ className, shape = 'rect' }: Props) {
  return (
    <span
      aria-hidden
      className={cn(
        'relative block overflow-hidden bg-white/5',
        shape === 'rect' && 'rounded-xl',
        shape === 'circle' && 'rounded-full',
        shape === 'text' && 'h-3 w-full rounded',
        'after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer',
        'after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent',
        className,
      )}
    />
  );
}
