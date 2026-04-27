/**
 * Typed, validated access to Vite public env vars.
 *
 * Rules:
 *  - Only `VITE_*` vars are exposed to the client; never put secrets here.
 *  - Import from `@/config/env` instead of reading `import.meta.env` directly,
 *    so required vars are validated at boot and defaults live in one place.
 */

type RawEnv = ImportMetaEnv;

function required(name: keyof RawEnv, value: string | undefined): string {
  if (value === undefined || value === '') {
    throw new Error(
      `[env] Missing required env var "${String(name)}". ` +
        `Add it to your .env file (see .env.example).`,
    );
  }
  return value;
}

function optional(value: string | undefined): string | undefined {
  return value === undefined || value === '' ? undefined : value;
}

function stripTrailingSlash(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export const env = {
  APP_NAME: required('VITE_APP_NAME', import.meta.env.VITE_APP_NAME),
  API_BASE_URL: stripTrailingSlash(
    required('VITE_API_BASE_URL', import.meta.env.VITE_API_BASE_URL),
  ),
  SENTRY_DSN: optional(import.meta.env.VITE_SENTRY_DSN),
  ANALYTICS_KEY: optional(import.meta.env.VITE_ANALYTICS_KEY),
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
} as const;

export type Env = typeof env;
