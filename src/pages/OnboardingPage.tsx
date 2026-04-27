import { Link } from 'react-router-dom';

export default function OnboardingPage() {
  return (
    <div className="glass rounded-3xl p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-starlight-muted">
        Step 1 of 3
      </p>
      <h1 className="mt-2 font-serif text-3xl">Your birth details</h1>
      <p className="mt-2 text-sm text-starlight-muted">
        Accurate date, time, and place let Aura compute your Lahiri Ayanamsa
        chart precisely. The full form lives in the profiles feature slice.
      </p>
      <Link
        to="/app/home"
        className="mt-8 inline-flex rounded-full bg-gold-violet px-5 py-2.5 text-sm font-medium text-cosmic-950 shadow-glow-gold"
      >
        Skip for now
      </Link>
    </div>
  );
}
