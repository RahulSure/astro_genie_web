import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import AppShell from '@/layouts/AppShell';
import AuthLayout from '@/layouts/AuthLayout';
import MarketingLayout from '@/layouts/MarketingLayout';
import RouteFallback from '@/shared/components/RouteFallback';

const LandingPage = lazy(() => import('@/pages/LandingPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const OnboardingPage = lazy(() => import('@/pages/OnboardingPage'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const KundliPage = lazy(() => import('@/pages/KundliPage'));
const MatchmakingPage = lazy(() => import('@/pages/MatchmakingPage'));
const ChatPage = lazy(() => import('@/pages/ChatPage'));
const ProfilesPage = lazy(() => import('@/pages/ProfilesPage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function SuspendedOutlet() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Outlet />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      {
        element: <SuspendedOutlet />,
        children: [{ path: '/', element: <LandingPage /> }],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <SuspendedOutlet />,
        children: [
          { path: '/signin', element: <SignInPage /> },
          { path: '/onboarding', element: <OnboardingPage /> },
        ],
      },
    ],
  },
  {
    path: '/app',
    element: <AppShell />,
    children: [
      {
        element: <SuspendedOutlet />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: 'home', element: <HomePage /> },
          { path: 'kundli', element: <KundliPage /> },
          { path: 'match', element: <MatchmakingPage /> },
          { path: 'chat', element: <ChatPage /> },
          { path: 'profiles', element: <ProfilesPage /> },
          { path: 'shop', element: <ShopPage /> },
        ],
      },
    ],
  },
  {
    element: <MarketingLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
]);
