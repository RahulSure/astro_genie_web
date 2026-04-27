import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'gold' | 'violet' | 'success' | 'danger';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  icon?: ReactNode;
};

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-white/5 border-white/10 text-starlight-muted',
  gold: 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold-soft',
  violet: 'bg-accent-violet/10 border-accent-violet/30 text-accent-violet-soft',
  success: 'bg-success/10 border-success/30 text-success',
  danger: 'bg-danger/10 border-danger/30 text-danger',
};

export default function Badge({
  className,
  tone = 'neutral',
  icon,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider',
        toneClasses[tone],
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
