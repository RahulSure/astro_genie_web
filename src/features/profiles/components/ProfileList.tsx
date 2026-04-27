import { Plus } from 'lucide-react';
import { Card, Button, Badge } from '@/shared/ui';

const demo = [
  { id: '1', name: 'You', place: 'Bengaluru, IN', primary: true },
  { id: '2', name: 'Aarav', place: 'Mumbai, IN', primary: false },
  { id: '3', name: 'Priya', place: 'New York, US', primary: false },
];

export default function ProfileList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {demo.map((p) => (
        <Card key={p.id} variant="glass" padding="md">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-serif text-xl">{p.name}</p>
              <p className="mt-0.5 text-xs text-starlight-muted">{p.place}</p>
            </div>
            {p.primary && <Badge tone="gold">Primary</Badge>}
          </div>
        </Card>
      ))}
      <Card
        variant="outline"
        padding="md"
        className="flex items-center justify-center border-dashed"
      >
        <Button variant="ghost" leftIcon={<Plus className="h-4 w-4" />}>
          Add profile
        </Button>
      </Card>
    </div>
  );
}
