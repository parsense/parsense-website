# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

ParSense is an AI-powered golf caddie and swing coach app marketing website built with Next.js 16 (App Router), featuring bilingual support (EN/ES) via next-intl v4 and a dark SaaS aesthetic.

## Development Commands

```bash
npm run dev     # Start development server at http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
npx shadcn add <component>  # Add shadcn/ui component to src/components/ui/
```

No test framework is configured. Rely on TypeScript (`tsc`) and ESLint for code validation.

## Architecture

### Directory Structure

```
src/
  app/
    globals.css              # Tailwind v4 theme + CSS custom properties
    [locale]/
      layout.tsx             # Root layout with NextIntlClientProvider
      page.tsx               # Single-page site (~1000+ lines, "use client")
  components/
    language-toggle.tsx      # EN/ES pill switcher
    section-wrapper.tsx      # Framer Motion scroll-reveal wrapper
    svg/                     # Custom inline SVG components
    ui/                      # shadcn/ui primitives
  i18n/
    routing.ts               # Locale config: ['en', 'es']
    request.ts               # next-intl server config
    navigation.ts            # Locale-aware Link, redirect, usePathname, useRouter
  messages/
    en.json                  # English translations
    es.json                  # Spanish translations
  lib/utils.ts               # cn() helper (clsx + tailwind-merge)
```

### Single-Page Architecture

The entire site lives in `src/app/[locale]/page.tsx` as a client component (~1000+ lines). All sections, variants, and sub-components are co-located in this file unless they require independent reuse.

## i18n (next-intl v4)

### Critical Pattern

**Never use `next/link` or `next/navigation` directly.** Always import from `@/i18n/navigation`:

```typescript
import { Link, useRouter, usePathname } from "@/i18n/navigation";
```

### Server Components

```typescript
import { getTranslations, setRequestLocale } from "next-intl/server";

// Always call setRequestLocale early, before any async work
setRequestLocale(locale);
const t = await getTranslations({ locale, namespace: "Hero" });
```

### Client Components

```typescript
import { useTranslations } from "next-intl";

const t = useTranslations("Features");
t("agentic.title"); // PascalCase namespaces, camelCase sub-keys
```

### Adding New Translations

1. Add to `messages/en.json` under the appropriate namespace
2. Add identical key path to `messages/es.json` with Spanish translation
3. Translation keys follow: `namespace(\"key.subkey\")`

## Styling (Tailwind v4 + shadcn)

### Dark-Only Theme

No light mode exists. The `<html>` element always has `class="dark"`.

### Brand Colors (defined in `globals.css`)

- **Emerald** (`#10B981`) — primary/golf green, focus ring, CTA → use `bg-emerald`, `text-emerald`, `shadow-emerald/20`
- **Blue** (`#3B82F6`) — AI/Sense accent → use `bg-blue`, `text-blue`
- **Gold** (`#D4A843`) — investor/premium sections → use `bg-gold`, `text-gold`
- **Background**: `#0B1120` (near-black navy)

### Utility Usage

```typescript
import { cn } from "@/lib/utils";

// Always use cn() when merging conditional classes
<div className={cn("base-class", condition && "conditional-class")} />
```

### Adding shadcn Components

```bash
npx shadcn add <component>
# Outputs to src/components/ui/
```

## Animations (Framer Motion)

### Scroll-Reveal Pattern

All page sections must be wrapped in `<SectionWrapper>`:

```typescript
import SectionWrapper from "@/components/section-wrapper";

<SectionWrapper id="features" className="py-20">
  {/* section content */}
</SectionWrapper>
```

`SectionWrapper` provides automatic scroll-triggered fade-up animation (`opacity` + `y` reveal, `whileInView`, `once: true`).

### Animation Variants

Reusable motion variants are defined at the top of `page.tsx`:

- `fadeUp` — opacity + y translate
- `fadeIn` — opacity only
- `stagger` — container for staggered children
- `scaleIn` — scale + opacity

### Parallax

Hero parallax uses `useScroll` + `useTransform` tied to a ref. Example pattern exists in `page.tsx` hero section.

## Key Conventions

1. **SVG Assets**: Use React components in `src/components/svg/`, prefer inline SVG over `<img>` for theme-aware coloring
2. **Client Components**: `page.tsx` is `"use client"` and owns all state (`useState`, `useRef`) and translations
3. **Co-located Components**: Sub-components within `page.tsx` (e.g., `StoreButton`) are plain functions in the same file unless they need independent reuse
4. **Path Alias**: Use `@/*` for imports (maps to `./src/*`)

## Configuration Files

- `next.config.ts`: Wraps config with `createNextIntlPlugin('./src/i18n/request.ts')` — required for next-intl static rendering
- `middleware.ts`: Handles locale detection/redirection for all non-asset routes
- `tsconfig.json`: Strict TypeScript, `@/*` path mapping

## Dependencies

### Core

- Next.js 16.1.6 (App Router)
- React 19.2.3
- next-intl 4.8.3 (i18n)
- TypeScript 5

### UI/Styling

- Tailwind CSS 4 (utility-first, dark-only theme)
- Framer Motion 12.34.3 (animations)
- shadcn (component CLI, outputs to `src/components/ui/`)
- lucide-react (icons)
- class-variance-authority, clsx, tailwind-merge (utility composition)

### Dev Tools

- ESLint 9 + eslint-config-next
- tw-animate-css (animation utilities)
