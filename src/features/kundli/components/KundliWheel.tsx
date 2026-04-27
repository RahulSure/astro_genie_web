import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';

const PLANETS = [
  { key: 'Su', name: 'Sun', house: 1, color: 'text-accent-gold' },
  { key: 'Mo', name: 'Moon', house: 4, color: 'text-accent-violet-soft' },
  { key: 'Ma', name: 'Mars', house: 7, color: 'text-accent-rose' },
  { key: 'Me', name: 'Mercury', house: 10, color: 'text-accent-gold-soft' },
  { key: 'Ju', name: 'Jupiter', house: 2, color: 'text-accent-gold-soft' },
  { key: 'Ve', name: 'Venus', house: 5, color: 'text-accent-rose' },
  { key: 'Sa', name: 'Saturn', house: 8, color: 'text-starlight-muted' },
  { key: 'Ra', name: 'Rahu', house: 11, color: 'text-accent-violet' },
  { key: 'Ke', name: 'Ketu', house: 5, color: 'text-accent-violet' },
] as const;

const SIZE = 420;
const CENTER = SIZE / 2;
const OUTER = 190;
const INNER = 60;

/**
 * Scaffolded SVG Kundli wheel — 12 houses with a ring of planet markers.
 * Real chart data (sign rulers, aspects) will plug into this once the
 * chart API is connected.
 */
export default function KundliWheel() {
  const [hovered, setHovered] = useState<(typeof PLANETS)[number] | null>(null);

  const houses = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const start = (i * 30 - 90) * (Math.PI / 180);
        const end = ((i + 1) * 30 - 90) * (Math.PI / 180);
        const labelAngle = (start + end) / 2;
        return {
          index: i + 1,
          labelX: CENTER + Math.cos(labelAngle) * (OUTER - 22),
          labelY: CENTER + Math.sin(labelAngle) * (OUTER - 22),
          start,
          end,
        };
      }),
    [],
  );

  const planetDots = useMemo(
    () =>
      PLANETS.map((p, i) => {
        const baseAngle = ((p.house - 1) * 30 + 15 - 90) * (Math.PI / 180);
        // Tiny per-planet jitter so stacked houses don't overlap visually.
        const r = OUTER - 50 - (i % 3) * 18;
        return {
          ...p,
          x: CENTER + Math.cos(baseAngle) * r,
          y: CENTER + Math.sin(baseAngle) * r,
        };
      }),
    [],
  );

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label="Interactive Kundli wheel"
        className="h-auto w-full drop-shadow-[0_20px_60px_rgba(139,110,235,0.25)]"
      >
        <defs>
          <radialGradient id="wheelFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(139 110 235 / 0.15)" />
            <stop offset="100%" stopColor="rgb(5 6 10 / 0)" />
          </radialGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r={OUTER} fill="url(#wheelFill)" />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER}
          fill="none"
          stroke="rgb(255 255 255 / 0.12)"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={INNER}
          fill="none"
          stroke="rgb(255 255 255 / 0.12)"
        />

        {houses.map((h) => {
          const x1 = CENTER + Math.cos(h.start) * OUTER;
          const y1 = CENTER + Math.sin(h.start) * OUTER;
          return (
            <line
              key={h.index}
              x1={CENTER}
              y1={CENTER}
              x2={x1}
              y2={y1}
              stroke="rgb(255 255 255 / 0.08)"
            />
          );
        })}

        {houses.map((h) => (
          <text
            key={`l-${h.index}`}
            x={h.labelX}
            y={h.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-starlight-muted text-[10px] uppercase tracking-wider"
          >
            {h.index}
          </text>
        ))}

        {planetDots.map((p) => (
          <g
            key={p.key}
            onMouseEnter={() => setHovered(p)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(p)}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            className="cursor-pointer outline-none"
          >
            <circle
              cx={p.x}
              cy={p.y}
              r={14}
              className="fill-cosmic-800 stroke-white/15"
              strokeWidth={1}
            />
            <text
              x={p.x}
              y={p.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className={cn('text-[10px] font-medium', p.color)}
              fill="currentColor"
            >
              {p.key}
            </text>
          </g>
        ))}

        <circle
          cx={CENTER}
          cy={CENTER}
          r={INNER - 4}
          fill="rgb(5 6 10 / 0.7)"
          stroke="rgb(214 176 104 / 0.3)"
        />
        <text
          x={CENTER}
          y={CENTER - 4}
          textAnchor="middle"
          className="fill-starlight text-[12px] font-serif"
        >
          {hovered?.name ?? 'Aura'}
        </text>
        <text
          x={CENTER}
          y={CENTER + 12}
          textAnchor="middle"
          className="fill-starlight-muted text-[9px] uppercase tracking-[0.2em]"
        >
          {hovered ? `House ${hovered.house}` : 'Natal chart'}
        </text>
      </svg>
    </div>
  );
}
