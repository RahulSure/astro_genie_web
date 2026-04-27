import { Card } from '@/shared/ui';
import KundliWheel from './KundliWheel';

const PANELS = [
  {
    title: 'Ascendant',
    body: 'Leo rising. You lead with warmth and a sense of occasion.',
  },
  {
    title: 'Moon sign',
    body: 'Taurus. Your inner weather prefers ritual, comfort, slow mornings.',
  },
  {
    title: 'Sun sign',
    body: 'Aries. A dose of initiative — best channelled into one big thing.',
  },
];

export default function KundliWheelPlaceholder() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <Card variant="glass" padding="lg" className="flex items-center justify-center">
        <KundliWheel />
      </Card>
      <div className="space-y-3">
        {PANELS.map((p) => (
          <Card key={p.title} variant="glass" padding="md">
            <p className="text-xs uppercase tracking-[0.2em] text-starlight-muted">
              {p.title}
            </p>
            <p className="mt-2 font-serif text-lg">{p.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
