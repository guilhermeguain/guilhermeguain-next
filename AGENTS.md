# Agent context — guilhermeguain-next

Personal portfolio for **Guilherme Guain** (Front-End Developer | AI-Assisted Development). A bilingual, SEO-oriented single-page site: hero, about, front-end + AI, data-driven SEO, experience, projects, education, and events.

Read this file before changing code. Prefer matching existing patterns over introducing new ones.

## Stack

- **Next.js 16** with the **Pages Router** (`src/pages/`). Do not migrate to the App Router unless asked.
- **React 19** + **TypeScript 5.9** (`strict: true`).
- **Vanilla Extract** for all styling (`*.css.ts`). No Tailwind, CSS Modules, or styled-components.
- **next-i18next** for copy: `en-US` (default) and `pt-BR`.
- **react-icons** for most icons; custom SVGs live in `src/assets/`.
- **Google Tag Manager** (`GTM-MFKHPQ4`) via `react-gtm-module`.
- **next-sitemap** runs after `next build`.
- Node **>= 24**. Dev/build use webpack: `next dev --webpack` / `next build --webpack`.

Committed lockfile is `package-lock.json`. `yarn.lock` is gitignored.

## What the site is (and is not)

- One static page: `src/pages/index.tsx` (ISR, 24h). No API routes, auth, CMS, or database.
- Layout shell is `Page` (`Header` + `<main>` + `Footer`).
- Domain-based locales (detection off):
  - `en-US` → `https://www.guilhermeguain.com`
  - `pt-BR` → `https://www.guilhermeguain.com.br`
- Preview deploys send `X-Robots-Tag: noindex` when `NEXT_PUBLIC_VERCEL_ENV === 'preview'`.

## Directory map

```
src/
  pages/           # Pages Router: _app, _document, index
  components/      # Feature sections + Header/Footer/Page + shared/
  contexts/App/    # Root providers (currently HeaderProvider)
  hooks/           # Cross-cutting hooks (useWindowSize)
  styles/          # Global theme, reset, layout, typography tokens
  lib/             # Shared constants
  utils/           # Helpers (text Highlight)
  assets/          # Custom SVG React components
public/
  locales/{en-US,pt-BR}/  # i18n JSON namespaces
  images/          # Static images (hero, avatar, project logos)
```

Path aliases (use these, not deep relatives):

| Alias | Path |
| --- | --- |
| `@assets/*` | `src/assets/*` |
| `@components/*` | `src/components/*` |
| `@contexts/*` | `src/contexts/*` |
| `@hooks/*` | `src/hooks/*` |
| `@lib/*` | `src/lib/*` |
| `@pages/*` | `src/pages/*` |
| `@styles/*` | `src/styles/*` |
| `@utils/*` | `src/utils/*` |

## Component pattern

Colocate by feature:

```
ComponentName/
  index.tsx              # Named export, presentational
  styles.css.ts          # Vanilla Extract class names
  hooks/useComponent.ts  # Data, i18n, handlers
  types.ts | types.d.ts  # Optional; ambient .d.ts is used in several places
  context/               # Optional local provider
  components/            # Nested UI (Header menus)
```

- Named exports (`export const Hero = …`), functional components.
- Copy and labels live in locale JSON. Hooks hold **structure** (ids, links, badge icons, numeric values).
- `useTranslation(['namespace'])` + keys like `t('experience:ifood.role')`.
- New namespaces must be added to `serverSideTranslations` in `src/pages/index.tsx`.
- Shared UI: `When` (conditional render), `Row` (responsive two-column section).
- `Highlight` (`@utils/highlight`) wraps translated paragraphs and bolds query terms.

## Styling

- Tokens: `vars` from `@styles/theme.css` (primary / secondary / tertiary / gray / text).
- Reuse `@styles/layout.css` (`Content`, list primitives) and `@styles/typography.css` (`Title`).
- Compose styles with arrays: `style([Content, { … }])`.
- Mobile-first `@media` in rem (`30rem`, `48rem`). JS breakpoint: `MOBILE_BREAKPOINT` (768) in `@lib/constants`.
- Dark page: `body` uses `vars.color.gray[800]`. Headings use secondary green.

## i18n

- Files: `public/locales/{en-US,pt-BR}/{namespace}.json`.
- Namespaces in use: `common`, `meta`, `menu`, `hero`, `about`, `hard-skills`, `soft-skills`, `data-driven-seo`, `front-end-ai`, `experience`, `projects`, `education`, `events`.
- Always update **both** locales together. Keep JSON keys in sync.
- Language switch: `LangSelector` → `router.push(asPath, asPath, { locale })`.
- CV PDFs: `/documents/cv-guilherme-guain-${locale}.pdf`.

## Analytics

Push GTM events via `TagManager.dataLayer`. Existing events: `contactClick`, `menuClick`. Do not use `console.log` (`no-console` is an ESLint error).

## Code style

- Prettier: single quotes, semicolons, trailing commas, `printWidth` 100, 2-space indent, LF.
- ESLint: unused imports are errors; `any` is allowed; `react-hooks/exhaustive-deps` is off.
- Types are often ambient (`types.d.ts` with no import/export). `LangSelector` uses a real `types.ts` export instead — match the file you are in.

## Commands

```bash
yarn dev      # or npm run dev
yarn build
yarn lint
```

Env (see `.env.sample`): `NEXT_PUBLIC_EN_URL`, `NEXT_PUBLIC_PT_URL`. Sitemap uses `SITE_URL`.

## Guardrails

- Do not add a new page/router paradigm unless asked.
- Do not hardcode user-facing strings in components when a locale key exists (or should).
- Do not restyle with a new CSS approach.
- Do not expand README/docs unless asked.
- There is **no test suite** yet (Jest is listed as a skill in the hero, not as project tooling).
