# ParSense Website — Copilot Instructions

## Project Overview

Marketing/landing page for **ParSense**, an AI-powered golf caddie and swing coach app. Single-page Next.js 16 app with bilingual (EN/ES) support and a fixed dark SaaS aesthetic.

## Architecture

```
src/
  app/
    globals.css          # Tailwind v4 theme + all CSS custom properties
    [locale]/
      layout.tsx         # Root layout: wraps NextIntlClientProvider, sets html lang, always dark
      page.tsx           # Entire single-page site (~1053 lines) — "use client"
  components/
    language-toggle.tsx  # EN/ES pill switcher using next-intl router
    section-wrapper.tsx  # Framer Motion scroll-reveal wrapper for every section
    svg/                 # Custom inline SVG components (logo, hero bg, app mockup, swing analysis)
    ui/                  # shadcn/ui primitives (badge, button, card, separator)
  i18n/
    routing.ts           # Locales: ['en', 'es'], defaultLocale: 'en', localePrefix: 'as-needed'
    request.ts           # next-intl server config — loads messages/{locale}.json
    navigation.ts        # Re-exports locale-aware Link, redirect, usePathname, useRouter
  messages/
    en.json              # All English copy keyed by namespace (Nav, Hero, Features, …)
    es.json              # Spanish translations — mirrors en.json structure exactly
  lib/utils.ts           # cn() helper (clsx + tailwind-merge)
```

## i18n Pattern (next-intl v4)

- **All routes live under `[locale]`** — `src/app/[locale]/layout.tsx` validates the locale and calls `setRequestLocale`.
- Always call `setRequestLocale(locale)` early in Server Components before any async work.
- Use `useTranslations("Namespace")` in client components; `getTranslations({ locale, namespace })` in server components.
- **Never use `next/link` or `next/navigation` directly** — import `Link`, `useRouter`, `usePathname` from `@/i18n/navigation` instead.
- Translation keys follow PascalCase namespaces with camelCase sub-keys: `hero("tech1")`, `features("agentic.title")`.
- All 12 namespaces (confirmed complete): `Metadata`, `Nav`, `Hero`, `Problem`, `Features`, `HowItWorks`, `Investors`, `Testimonials`, `Stats`, `FAQ`, `CTA`, `Footer`.
- Adding a new string: add to **both** `en.json` and `es.json` under the same key path.

## Styling (Tailwind v4 + shadcn)

- **Dark-only theme** — no light mode. The `<html>` element always has `class="dark"`.
- Brand tokens defined in `globals.css` `@theme inline` block:
  - `emerald` (`#10B981`) — primary/golf green, focus ring, CTA
  - `blue` (`#3B82F6`) — AI/Sense accent
  - `gold` (`#D4A843`) — investor/premium sections
  - `--background: #0B1120` (near-black navy)
- Use Tailwind utilities like `bg-emerald`, `text-emerald`, `shadow-emerald/20` directly (mapped via `--color-emerald`).
- Use `cn()` from `@/lib/utils` whenever merging conditional class strings.
- Add shadcn components via CLI: `npx shadcn add <component>` — outputs to `src/components/ui/`.

## Animations (Framer Motion)

- Reusable variants are defined at the top of `page.tsx`: `fadeUp`, `fadeIn`, `stagger`, `scaleIn`.
- All page sections are wrapped in `<SectionWrapper>` which provides scroll-triggered `opacity` + `y` reveal (`whileInView`, `once: true`).
- Parallax on the hero uses `useScroll` + `useTransform` tied to `heroRef`.

## Key Conventions

- `page.tsx` is `"use client"` — it owns all state (`useState`, `useRef`) and translations.
- Sub-components within `page.tsx` (e.g. `StoreButton`) are defined as plain functions in the same file, not separate modules, unless they need independent reuse.
- SVG assets are React components in `src/components/svg/` — prefer inline SVG over `<img>` for theme-aware coloring.
- `SectionWrapper` is the standard scroll-reveal container — wrap every new `<section>` in it.

## Recommended Refactor Approach

`page.tsx` is intentionally monolithic but should be split when adding significant new sections. The preferred pattern:

1. **Extract each section** into `src/components/sections/<SectionName>.tsx` as a `"use client"` component that receives its `useTranslations` hook internally.
2. **Keep animation variants** in a shared `src/lib/variants.ts` file (`fadeUp`, `fadeIn`, `stagger`, `scaleIn`) so extracted components import them instead of redefining.
3. **`StoreButton`** is the first candidate — move to `src/components/store-button.tsx` when it's used in more than one section.
4. **`page.tsx`** becomes a thin orchestrator: imports section components, sets up `heroRef`/scroll parallax, and passes no props (each section fetches its own translations).
5. Do **not** convert sections to Server Components — `whileInView` animations require client-side rendering throughout.

## Dev Workflow

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run lint    # ESLint (next lint config)
```

- No test runner is configured — focus on type safety (`tsc`) and lint.
- `next.config.ts` wraps the config with `createNextIntlPlugin('./src/i18n/request.ts')` — required for next-intl static rendering support.
- `middleware.ts` handles locale detection/redirection for all non-asset routes.

## Deployment (Vercel)

- Deployed on **Vercel**. No custom environment variables are required for the current codebase.
- The `[locale]` dynamic segment uses `generateStaticParams` implicitly via next-intl's static rendering support — ensure `setRequestLocale` is always called in `layout.tsx` to keep pages statically renderable.
- The `middleware.ts` matcher excludes `_next`, `_vercel`, and static assets — do not widen this matcher or locale redirects will fire on asset requests.
- Commit style: conventional commits (`feat:`, `fix:`, `style:`, `chore:`, `docs:`). Push to `main` triggers Vercel production deployment.
