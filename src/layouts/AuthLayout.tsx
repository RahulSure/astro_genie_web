import { Link, Outlet } from 'react-router-dom';
import CosmicBackground from '@/shared/components/CosmicBackground';
import Logo from '@/shared/components/Logo';

export default function AuthLayout() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
      <CosmicBackground />
      <div className="absolute left-6 top-6">
        <Link to="/" aria-label="Aura home">
          <Logo />
        </Link>
      </div>
      <div className="relative z-10 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
