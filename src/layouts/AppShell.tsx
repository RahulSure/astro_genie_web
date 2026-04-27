import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { PageTransition } from '@/shared/motion';
import {
  Home as HomeIcon,
  Sparkles,
  HeartHandshake,
  CircleUserRound,
  ShoppingBag,
  MessageCircle,
  Search,
} from 'lucide-react';
import CosmicBackground from '@/shared/components/CosmicBackground';
import Logo from '@/shared/components/Logo';
import { cn } from '@/lib/cn';

type NavItem = {
  to: string;
  label: string;
  icon: typeof HomeIcon;
};

const NAV: NavItem[] = [
  { to: '/app/home', label: 'Home', icon: HomeIcon },
  { to: '/app/kundli', label: 'Kundli', icon: Sparkles },
  { to: '/app/match', label: 'Match', icon: HeartHandshake },
  { to: '/app/profiles', label: 'Profiles', icon: CircleUserRound },
  { to: '/app/shop', label: 'Shop', icon: ShoppingBag },
];

function SidebarLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        cn(
          'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition',
          isActive
            ? 'bg-white/8 text-starlight shadow-inner shadow-white/5'
            : 'text-starlight-muted hover:bg-white/5 hover:text-starlight',
        )
      }
    >
      <Icon className="h-4 w-4" aria-hidden />
      <span>{item.label}</span>
    </NavLink>
  );
}

function MobileTabLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        cn(
          'flex flex-1 flex-col items-center gap-1 py-2 text-[10px] uppercase tracking-wider transition',
          isActive ? 'text-accent-gold-soft' : 'text-starlight-muted',
        )
      }
    >
      <Icon className="h-5 w-5" aria-hidden />
      <span>{item.label}</span>
    </NavLink>
  );
}

/**
 * Authenticated app shell: top search bar + left sidebar on desktop, bottom
 * tab bar on mobile, and a persistent floating AI chat button.
 */
export default function AppShell() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <CosmicBackground />

      <header className="sticky top-0 z-30 border-b border-white/5 bg-cosmic-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <div className="hidden w-56 shrink-0 md:block">
            <Logo />
          </div>
          <button
            type="button"
            className="group flex w-full max-w-xl items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-starlight-muted transition hover:border-white/20 hover:text-starlight"
            onClick={() => {
              /* Placeholder: the global command palette (cmdk) lands in search feature. */
            }}
          >
            <Search className="h-4 w-4" aria-hidden />
            <span className="flex-1 text-left">
              Search insights, calculators, reports…
            </span>
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-starlight-muted">
              ⌘K
            </kbd>
          </button>
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-accent-violet/30 bg-accent-violet/10 px-3 py-1 text-xs text-accent-violet-soft">
              Free plan
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 pb-28 pt-6 sm:px-6 md:pb-10">
        <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-56 shrink-0 flex-col md:flex">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <SidebarLink key={item.to} item={item} />
            ))}
          </nav>
          <div className="mt-auto glass rounded-2xl p-4 text-xs text-starlight-muted">
            <p className="mb-1 font-serif text-sm text-starlight">Aura AI</p>
            <p>
              Transparent by design. Every insight is clearly labelled as
              AI-generated guidance.
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>

      {/* Floating AI chat FAB (always visible on desktop + mobile). */}
      <button
        type="button"
        onClick={() => navigate('/app/chat')}
        className="fixed bottom-24 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-violet px-4 py-3 text-sm font-medium text-cosmic-950 shadow-glow transition hover:scale-[1.02] hover:shadow-glow-gold focus-visible:scale-[1.02] md:bottom-6"
        aria-label="Ask Aura, the AI astrologer"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        <span>Ask Aura</span>
      </button>

      {/* Mobile bottom tab bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-white/5 bg-cosmic-950/85 backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto flex w-full max-w-md">
          {NAV.map((item) => (
            <MobileTabLink key={item.to} item={item} />
          ))}
        </div>
      </nav>
    </div>
  );
}
