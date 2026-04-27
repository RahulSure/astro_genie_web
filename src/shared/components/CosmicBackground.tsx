import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  /** Slightly brighter variant used on the landing hero. */
  intense?: boolean;
};

/**
 * Layered cosmic background: subtle starfield on top of violet/gold glow.
 * Absolutely positioned; parent must be `relative` and `overflow-hidden`.
 */
export default function CosmicBackground({ className, intense = false }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-cosmic-radial',
          intense && 'opacity-100',
          !intense && 'opacity-70',
        )}
      />
      <div className="starfield absolute inset-0 animate-twinkle opacity-60" />
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-violet/10 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-gold/10 blur-3xl" />
    </div>
  );
}
