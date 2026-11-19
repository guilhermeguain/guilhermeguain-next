# Agent context — guilhermeguain-next

Personal portfolio for **Guilherme Guain** (Front-End Developer | AI-Assisted Development). One bilingual, SEO-oriented page: hero, about, front-end + AI, data-driven SEO, experience, projects, education, and events.

Read this file before changing code. Match the patterns below instead of introducing a new stack.

Shared agent files live in `agents/` (`context/`, `rules/`, `docs/`). This file is the brief. The repo-root `AGENTS.md` and the files in `.cursor/rules/` are plain-text pointers here, not copies and not symlinks. Edit the files under `agents/`.

## Stack

| Concern | Choice |
| --- | --- |
| App | Next.js **16.4** App Router, React **19.2**, TypeScript **5.9** (`strict`) |
| Bundler | Webpack only: `next dev --webpack` / `next build --webpack` |
| Runtime | Node **26** LTS |
| Style | Vanilla Extract (`*.css.ts`) via `@vanilla-extract/next-plugin`. No Tailwind, CSS Modules, or styled-components |
| Copy | `i18next` + `react-i18next`. JSON in `public/locales/{en,pt-BR}` |
| Icons | `react-icons`, plus custom SVG components in `src/assets/` |
| Font | `next/font` Montserrat (weights 100–900) in the locale layout |
| Analytics | `react-gtm-module`, container `GTM-MFKHPQ4` |
| SEO files | `next-sitemap` in `postbuild` |
| Host | Vercel. No `vercel.json` |

There is no API, auth, CMS, database, or test runner. Jest appears only as a skill in the hero copy.

Committed lockfile is `package-lock.json`. `yarn.lock` is gitignored. `npm` and `yarn` both run the scripts in `package.json`.

## Routes

Public site: `https://www.guilhermeguain.com.br`.

- `pt-BR` (default) is `/`. `en` is `/en`. Detection is off.
- `src/proxy.ts` rewrites `/` to the internal `/pt-BR` segment and redirects a visible `/pt-BR` back to `/`. English passes through. Do not add `src/middleware.ts`; Next 16 uses the proxy file.
- `src/app/[locale]/layout.tsx` is the root layout (`<html>` / `<body>`). There is no `src/app/layout.tsx`.
- `src/app/[locale]/page.tsx` is the only page. `revalidate` is the literal `86400` (24h). Route `params` are a `Promise`.
- `guilhermeguain.com` and `www.guilhermeguain.com` 308 to `https://www.guilhermeguain.com.br/en` (`next.config.js`).
- Preview deploys send `X-Robots-Tag: noindex` when `NEXT_PUBLIC_VERCEL_ENV === 'preview'`.

`usePathname()` is the browser path (`/` or `/en`). `useParams().locale` is the route segment (`pt-BR` even on `/`). Home links go through `localeHref()` in `src/lib/locales.ts` so English stays on `/en`.

Sitemap: `next-sitemap.config.js` drops `/pt-BR` and adds `/` with `additionalPaths`. `SITE_URL` comes from `.env.sample` (`https://www.guilhermeguain.com.br`).

## Server and client

The layout and page are Server Components. They may import `src/lib/meta.ts` and `src/lib/locales.ts`. They must not import `src/lib/i18n.ts`: that module loads `react-i18next` and breaks the server build (`createContext is not a function`).

Client boundaries already in place:

- `I18nProvider` — one `i18next` instance per locale (`useSuspense: false`)
- `GoogleTagManager` — `TagManager.initialize` after mount
- `AppContext` — header state; the file is `'use client'`
- `Home` — the section tree. Feature components are imported from here, so they run as client code without their own directive

A new module that uses state, effects, or context and is imported from the layout or page needs `'use client'` on that module.

## Directory map

```
src/
  app/[locale]/    # layout + page
  proxy.ts         # locale rewrite / redirect
  components/      # sections, Header, Footer, Page, shared/
  contexts/App/    # HeaderProvider
  hooks/           # useWindowSize
  styles/          # theme, reset, layout, typography
  lib/             # locales, i18n resources, meta copy, constants
  utils/           # Highlight
  assets/          # custom SVG components
public/
  locales/{en,pt-BR}/
  images/
  documents/       # cv-guilherme-guain-{locale}.pdf
```

Path aliases (use these, not deep relatives):

| Alias | Path |
| --- | --- |
| `@assets/*` | `src/assets/*` |
| `@components/*` | `src/components/*` |
| `@contexts/*` | `src/contexts/*` |
| `@hooks/*` | `src/hooks/*` |
| `@lib/*` | `src/lib/*` |
| `@styles/*` | `src/styles/*` |
| `@utils/*` | `src/utils/*` |

## Components

```
ComponentName/
  index.tsx              # named export, presentational
  styles.css.ts
  hooks/useComponent.ts  # ids, links, icons, numbers, handlers
  types.d.ts | types.ts  # optional
  context/               # optional
  components/            # nested UI (Header menus)
```

- Named exports (`export const Hero = …`). Keep `import React from 'react'` when the file already has it.
- Copy lives in locale JSON. Hooks hold structure. Read copy with `useTranslation` from `react-i18next`: `t('experience:ifood.role')`.
- Section roots use `<section id="…">` matching menu hashes (`#about`, `#experience`, `#projects`, `#education`).
- `When` for conditional render, `Row` for a responsive two-column section, `Highlight` to bold terms inside a translated paragraph.
- Most local types are ambient `types.d.ts` (no import/export). `LangSelector/types.ts` is a real export — match the folder you are in.

## Styling

- Tokens: `vars` from `@styles/theme.css` (primary / secondary / tertiary / gray / text).
- Reuse `@styles/layout.css` (`Content`, list primitives) and `@styles/typography.css` (`Title`).
- Compose with `style([Content, { … }])`. Export PascalCase class names (`Container`).
- Mobile-first `@media` in rem (`30rem`, `48rem`). JS breakpoint: `MOBILE_BREAKPOINT` (`768`) in `@lib/constants`.
- Dark page: `body` uses `vars.color.gray[800]`. Headings use secondary green.
- `className={Container}`. Inline style only for a dynamic value (progress width, header height).

## i18n

Namespaces: `common`, `meta`, `menu`, `hero`, `about`, `hard-skills`, `soft-skills`, `data-driven-seo`, `front-end-ai`, `experience`, `projects`, `education`, `events`.

- Change keys in **both** `en` and `pt-BR`. Keep the trees identical.
- A new namespace needs both JSON files plus an entry in `namespaces` and `resources` in `src/lib/i18n.ts`.
- `LangSelector` navigates to `/` or `/en` and keeps `window.location.hash`.
- CV URL: `/documents/cv-guilherme-guain-${locale}.pdf`.
- Metadata (title, description, canonical, hreflang, robots, Open Graph, Twitter) comes from `generateMetadata` and `metaCopy` in `src/lib/meta.ts`. Do not put it back in `next/head`.

## Analytics

Initialize GTM only in `GoogleTagManager`. Push events with `TagManager.dataLayer`. Existing events: `contactClick`, `menuClick`. `no-console` is an ESLint error.

## Tooling

```bash
yarn dev      # or npm run dev
yarn build    # then next-sitemap
yarn lint
```

- Prettier: single quotes, semicolons, trailing commas, `printWidth` 100, 2-space indent, LF.
- ESLint (`.eslintrc.json`): `next/core-web-vitals`, `@typescript-eslint`. Unused imports are errors. `any` is allowed. `react-hooks/exhaustive-deps` is off.
- `tsconfig` target is `ES2017`, `moduleResolution` is `bundler`. Include `.next/types` and `.next/dev/types` (Next writes both). Do not commit `next-env.d.ts` when `next dev` points it at `.next/dev/types`; the committed file imports `.next/types`.

## Guardrails

- Do not add a router, CSS system, or i18n library unless asked.
- Do not hardcode user-facing strings when a locale key exists or should exist. Tech badge titles (`React.js`) may stay in code.
- Do not expand `README.md` unless asked. It is still the create-next-app stub.
