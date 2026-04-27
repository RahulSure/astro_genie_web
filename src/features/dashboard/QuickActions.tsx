import { Link } from 'react-router-dom';
import { Sparkles, HeartHandshake, CircleUserRound, ShoppingBag } from 'lucide-react';
import { Card } from '@/shared/ui';

const actions = [
  {
    to: '/app/kundli',
    title: 'Interactive Kundli',
    body: 'Tap a planet, read its placement.',
    icon: Sparkles,
  },
  {
    to: '/app/match',
    title: 'Gun Milan',
    body: 'Visual compatibility in seconds.',
    icon: HeartHandshake,
  },
  {
    to: '/app/profiles',
    title: 'Saved profiles',
    body: 'Switch between charts you track.',
    icon: CircleUserRound,
  },
  {
    to: '/app/shop',
    title: 'Curated shop',
    body: 'Gemstones and ritual tools.',
    icon: ShoppingBag,
  },
];

export default function QuickActions() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map(({ to, title, body, icon: Icon }) => (
        <Link key={to} to={to} className="group">
          <Card
            variant="glass"
            padding="md"
            className="h-full transition group-hover:-translate-y-0.5 group-hover:shadow-glow"
          >
            <Icon className="h-5 w-5 text-accent-gold-soft" aria-hidden />
            <p className="mt-4 font-serif text-lg">{title}</p>
            <p className="mt-1 text-xs text-starlight-muted">{body}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
