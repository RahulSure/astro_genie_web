/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public-facing app name, e.g. "Aura AI". */
  readonly VITE_APP_NAME: string;
  /** Base URL of the backend API (no trailing slash). */
  readonly VITE_API_BASE_URL: string;
  /** Optional public Sentry DSN; leave empty to disable. */
  readonly VITE_SENTRY_DSN?: string;
  /** Optional analytics write key; leave empty to disable. */
  readonly VITE_ANALYTICS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
