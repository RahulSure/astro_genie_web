import { ShopTeaser } from '@/features/shop';

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl">Aura shop</h1>
        <p className="mt-1 text-sm text-starlight-muted">
          Curated gemstones and spiritual tools — never banner ads.
        </p>
      </header>
      <ShopTeaser />
    </div>
  );
}
