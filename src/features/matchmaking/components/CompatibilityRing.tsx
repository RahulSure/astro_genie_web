import { cn } from '@/lib/cn';

type Props = {
  score: number;
  max?: number;
  label?: string;
  className?: string;
};

/**
 * A minimal SVG score ring for Gun Milan. Keeps chart deps out of the
 * dashboard payload; heavier visualisations (radar) can live in their
 * own component and be lazy-loaded from the matchmaking page.
 */
export default function CompatibilityRing({
  score,
  max = 36,
  label = 'Guna score',
  className,
}: Props) {
  const pct = Math.max(0, Math.min(1, score / max));
  const size = 180;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
    >
      <svg width={size} height={size}>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(214 176 104)" />
            <stop offset="100%" stopColor="rgb(139 110 235)" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgb(255 255 255 / 0.08)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-4xl text-starlight">{score}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-starlight-muted">
          / {max} {label}
        </span>
      </div>
    </div>
  );
}
