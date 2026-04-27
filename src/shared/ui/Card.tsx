import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'glass' | 'solid' | 'outline';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  as?: 'div' | 'section' | 'article';
  padding?: 'none' | 'sm' | 'md' | 'lg';
};

const variantClasses: Record<Variant, string> = {
  glass: 'glass',
  solid: 'bg-surface border border-white/8',
  outline: 'border border-white/10',
};

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
} as const;

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, variant = 'glass', as: As = 'div', padding = 'md', ...rest },
  ref,
) {
  return (
    <As
      ref={ref as never}
      className={cn(
        'rounded-3xl',
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      {...rest}
    />
  );
});

export default Card;
