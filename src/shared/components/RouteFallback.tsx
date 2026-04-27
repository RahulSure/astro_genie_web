export default function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[40vh] w-full items-center justify-center"
    >
      <span className="sr-only">Loading…</span>
      <div className="relative h-10 w-10">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent-violet/30" />
        <span className="absolute inset-2 rounded-full bg-accent-violet/70" />
      </div>
    </div>
  );
}
