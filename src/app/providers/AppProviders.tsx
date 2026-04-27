import type { ReactNode } from 'react';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { MotionConfigProvider } from '@/shared/motion';

/**
 * Root-level providers that wrap the entire app. Keep this list small and
 * ordered from outermost to innermost (Theme > Query > Motion > Auth > I18n).
 * Theme stays dark-only for now; Auth/I18n land as they become relevant.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <MotionConfigProvider>{children}</MotionConfigProvider>
    </QueryProvider>
  );
}
