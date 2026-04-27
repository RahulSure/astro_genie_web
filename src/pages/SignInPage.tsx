import { Link } from 'react-router-dom';

export default function SignInPage() {
  return (
    <div className="glass rounded-3xl p-8">
      <h1 className="font-serif text-3xl">Welcome back</h1>
      <p className="mt-2 text-sm text-starlight-muted">
        Sign in to continue your cosmic journey.
      </p>
      <div className="mt-8 space-y-3">
        <button
          type="button"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm transition hover:bg-white/10"
        >
          Continue with Google
        </button>
        <button
          type="button"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm transition hover:bg-white/10"
        >
          Continue with Apple
        </button>
      </div>
      <p className="mt-8 text-center text-xs text-starlight-muted">
        New here?{' '}
        <Link to="/onboarding" className="text-accent-gold-soft hover:underline">
          Create your chart
        </Link>
      </p>
    </div>
  );
}
