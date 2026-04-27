import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ className, showWordmark = true }: Props) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span
        aria-hidden
        className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-violet shadow-glow"
      >
        <span className="absolute inset-[2px] rounded-full bg-cosmic-950" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-accent-gold-soft" />
      </span>
      {showWordmark && (
        <span className="font-serif text-lg tracking-wide text-starlight">
          Aura
        </span>
      )}
    </div>
  );
}
