import { KundliWheelPlaceholder } from '@/features/kundli';

export default function KundliPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl">Your Kundli</h1>
        <p className="mt-1 text-sm text-starlight-muted">
          Tap any planet to read a plain-language summary of its placement.
        </p>
      </header>
      <KundliWheelPlaceholder />
    </div>
  );
}
