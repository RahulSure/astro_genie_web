import { CompatibilityPreview } from '@/features/matchmaking';

export default function MatchmakingPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl">Gun Milan</h1>
        <p className="mt-1 text-sm text-starlight-muted">
          A visual compatibility score — no dense astrological tables.
        </p>
      </header>
      <CompatibilityPreview />
    </div>
  );
}
