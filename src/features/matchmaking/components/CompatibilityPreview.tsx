import { Card, Badge, Button } from '@/shared/ui';
import CompatibilityRing from './CompatibilityRing';

export default function CompatibilityPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
      <Card variant="glass" padding="lg" className="flex items-center justify-center">
        <CompatibilityRing score={29} />
      </Card>
      <Card variant="glass" padding="lg">
        <Badge tone="gold">Strong alignment</Badge>
        <h2 className="mt-3 font-serif text-2xl">
          Warm, grounded, and playful.
        </h2>
        <p className="mt-2 text-sm text-starlight-muted">
          Your Moon and Venus placements harmonize — shared sense of comfort,
          easy conversation. Saturn mildly advises patience during travel.
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {[
            ['Varna', '4/4'],
            ['Tara', '3/3'],
            ['Yoni', '3/4'],
            ['Nadi', '7/8'],
          ].map(([k, v]) => (
            <li
              key={k}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2"
            >
              <span className="text-starlight-muted">{k}</span>
              <span className="text-starlight">{v}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Button variant="secondary">Unlock full report</Button>
        </div>
      </Card>
    </div>
  );
}
