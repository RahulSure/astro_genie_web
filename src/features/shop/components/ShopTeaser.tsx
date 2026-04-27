import { Card, Badge } from '@/shared/ui';

const items = [
  { name: 'Yellow Sapphire', subtitle: 'Jupiter remedy', price: '₹12,400' },
  { name: 'Rudraksha Mala', subtitle: '108 beads, Nepali', price: '₹3,200' },
  { name: 'Moonstone Ring', subtitle: 'For Moon placements', price: '₹5,800' },
];

export default function ShopTeaser() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.name} variant="glass" padding="md">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-accent-violet/30 via-cosmic-800 to-accent-gold/20" />
          <div className="mt-4 flex items-start justify-between">
            <div>
              <p className="font-serif text-lg">{item.name}</p>
              <p className="mt-0.5 text-xs text-starlight-muted">
                {item.subtitle}
              </p>
            </div>
            <Badge tone="gold">{item.price}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
