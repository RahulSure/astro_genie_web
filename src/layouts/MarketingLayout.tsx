import { Link, Outlet } from 'react-router-dom';
import CosmicBackground from '@/shared/components/CosmicBackground';
import Logo from '@/shared/components/Logo';
import { PageTransition } from '@/shared/motion';

export default function MarketingLayout() {
  return (
    <div className="relative min-h-screen">
      <CosmicBackground intense />
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" aria-label="Aura home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-starlight-muted">
          <Link to="/signin" className="transition hover:text-starlight">
            Sign in
          </Link>
          <Link
            to="/onboarding"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-starlight transition hover:bg-white/10"
          >
            Get started
          </Link>
        </nav>
      </header>
      <main className="relative z-10">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <footer className="relative z-10 mx-auto mt-20 w-full max-w-6xl px-6 pb-10 text-xs text-starlight-muted">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <span>© {new Date().getFullYear()} Aura — AI-first astrology</span>
          <span className="tracking-[0.25em] uppercase">Cosmic minimalism</span>
        </div>
      </footer>
    </div>
  );
}
