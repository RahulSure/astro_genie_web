import { useEffect, useState } from 'react';

/**
 * Reactively subscribes to a CSS media query. SSR-safe: returns `false`
 * until the client mounts so hydration never mismatches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return matches;
}
