import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-starlight-muted">
        Error 404
      </p>
      <h1 className="mt-3 font-serif text-5xl">Lost in the cosmos</h1>
      <p className="mt-3 text-sm text-starlight-muted">
        That page doesn’t exist — or hasn’t been charted yet.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-gold-violet px-5 py-2.5 text-sm font-medium text-cosmic-950 shadow-glow-gold"
      >
        Back to home
      </Link>
    </div>
  );
}
