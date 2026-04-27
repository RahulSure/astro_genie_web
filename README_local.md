# Aura AI — Web

AI-first astrology web app. Built with **Vite + React + TypeScript + Tailwind CSS**.

## Stack

- **Vite 5** — dev server, bundler, typed env via `import.meta.env`.
- **React 18 + TypeScript 5** — strict mode enabled.
- **Tailwind CSS 3** — dark-first "Cosmic Minimalism" palette; tokens land in the design-system step.
- **Path aliases** — `@/*`, `@/features/*`, `@/shared/*`, etc. Configured in both `vite.config.ts` and `tsconfig.app.json`.

## Scripts

```bash
npm install        # install deps
npm run dev        # start Vite dev server (http://localhost:5173)
npm run build      # type-check + production build
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
```

## Environment variables

Only `VITE_*` vars are exposed to the browser. Copy the example file and fill in values:

```bash
cp .env.example .env.local
```

| Var | Required | Description |
|-----|----------|-------------|
| `VITE_APP_NAME` | yes | Public-facing app name (e.g. "Aura AI"). |
| `VITE_API_BASE_URL` | yes | Backend API base URL, no trailing slash. |
| `VITE_SENTRY_DSN` | no | Public Sentry DSN. |
| `VITE_ANALYTICS_KEY` | no | Analytics write key. |

Import env vars via `@/config/env` — never read `import.meta.env.VITE_*` directly in feature code. This keeps validation and defaults in one place.

## Folder layout (target)

See `vite_react_astrology_frontend_afa6c2ec.plan.md` for the full architecture. The scaffold currently contains the bootstrap pieces (`src/app`, `src/config`, `src/styles`); feature slices, layouts, and the shared UI kit ship in subsequent tasks.
