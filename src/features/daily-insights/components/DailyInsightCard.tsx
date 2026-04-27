import { Moon, Sun, Sparkle } from 'lucide-react';
import { Card, Badge } from '@/shared/ui';

/**
 * Hero card on the dashboard. Placeholder data until the backend is live;
 * the hook `useDailyInsight` wires real data by profile id.
 */
export default function DailyInsightCard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="relative overflow-hidden"
    >
      <div className="starfield absolute inset-0 -z-10 opacity-40" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge tone="gold" icon={<Sparkle className="h-3 w-3" />}>
            Cosmic weather
          </Badge>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            A steady, grounding day.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-starlight-muted">
            Moon in Taurus invites you to slow down. Schedule deep work in the
            morning; save conversations for the late afternoon.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-starlight-muted">
          <div className="flex flex-col items-center gap-1">
            <Sun className="h-5 w-5 text-accent-gold" aria-hidden />
            <span>Aries</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Moon className="h-5 w-5 text-accent-violet-soft" aria-hidden />
            <span>Taurus</span>
          </div>
        </div>
      </div>
      <dl className="mt-6 grid grid-cols-3 gap-3 text-xs">
        {[
          ['Lucky color', 'Starlight white'],
          ['Lucky number', '7'],
          ['Best hour', '6–8 pm'],
        ].map(([k, v]) => (
          <div
            key={k}
            className="rounded-xl border border-white/5 bg-white/5 p-3"
          >
            <dt className="text-starlight-muted">{k}</dt>
            <dd className="mt-1 text-starlight">{v}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
