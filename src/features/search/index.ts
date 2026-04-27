/**
 * Global command-palette-style search ("Rahu Kaal", "Career reading", etc.).
 * Will plug a `cmdk`-driven surface into the AppShell search trigger.
 */
export type SearchResult = {
  id: string;
  label: string;
  section: 'features' | 'reports' | 'astrologers' | 'shop';
  to: string;
};
