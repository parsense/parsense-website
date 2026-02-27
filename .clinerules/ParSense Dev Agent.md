# Agent Role

You are a coding agent for the **ParSense** marketing website. You must understand the product's domain (golf), its hybrid AI architecture, and the specific technology stack of this codebase. Every code change, copy suggestion, or architectural decision should reflect accurate knowledge of both the golf domain and the underlying agentic AI system described below.

---

## Product Domain

**ParSense** = **Par** (golf performance & scoring) + **Sense** (AI intelligence & environmental awareness).

ParSense is an AI-powered golf application that functions as a **Digital Caddie** (course strategy, risk management) and **Swing Coach** (personalized technique correction). It transforms raw sensor data into contextual, actionable strategy for each shot — going beyond traditional GPS yardage calculators.

### Core Value Proposition

Traditional golf GPS apps answer one question: "How far is the hole?" ParSense answers: "How should I play this hole?" by synthesizing:

- Player-specific capabilities (handicap, club distances, swing faults)
- Real-time environmental conditions (wind, humidity, turf state)
- Course topology (elevation, hazard positions, optimal landing zones)
- Swing biomechanics (tempo, angle of attack, body positions)

### Product Status

- **Stage:** Pre-seed (Friends & Family round, SAFE agreement)
- **Platforms:** iOS + Android (Coming Soon)
- **Website purpose:** Waitlist capture + investor-facing landing page

---

## Agentic AI Architecture

Understanding this architecture is **mandatory** when writing copy, building feature sections, or creating technical diagrams for the website. Do not simplify or misrepresent the agent topology.

### Core Intelligence

The central AI "brain" runs on **Gemini + Claude LLMs**. It is NOT a single linear algorithm — it is a **network of specialized agents and subagents** that process parallel data streams and synthesize contextual strategy.

### Specialized Agents

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────────┐
│  Vision Agent   │     │ Topographic Agent │     │  Weather Agent       │
│  (Computer      │────▶│ (Elevation/LiDAR  │────▶│  (Meteorological     │
│   Vision)       │     │  Mapping)         │     │   APIs)              │
└────────┬────────┘     └────────┬─────────┘     └──────────┬───────────┘
         │                       │                           │
         └───────────────────────┼───────────────────────────┘
                                 ▼
                    ┌────────────────────────┐
                    │   Core Intelligence    │
                    │   (Gemini + Claude)    │
                    │   Analysis & Synthesis │
                    └────────────┬───────────┘
                                 ▼
                    ┌────────────────────────┐
                    │  Actionable Strategy   │
                    │  (Club + Line + Tips)  │
                    └────────────────────────┘
```

### Four Sensory Layers (Real-Time Data Ingestion)

| Layer              | Data Source              | Output                                             |
| ------------------ | ------------------------ | -------------------------------------------------- |
| Precision GPS      | Device GPS + course maps | Exact location, distance to flag, carry to hazards |
| Elevation Mapping  | LiDAR / topographic data | Slope, altitude, effective distance adjustment     |
| Dynamic Atmosphere | Weather APIs             | Wind (speed/direction), temperature, humidity      |
| Visual Perception  | Device camera + CV       | Turf condition (grass height, moisture), lie angle |

### Computer Vision Pipeline

The "Digital Eye" allows users to photograph ball position and surroundings. The vision agent detects:

- **Grass height** (e.g., 2.5 inches)
- **Moisture level** (e.g., 85%)
- **Lie type** classification (fairway, rough, bunker, fringe)
- **Lie angle** calculation and physical variable prediction

### Player Profile System

Before the first shot, ParSense builds a dynamic, comprehensive profile:

| Data Category        | Inputs                                                |
| -------------------- | ----------------------------------------------------- |
| Base Data            | Age, fitness level, play frequency                    |
| Performance History  | Current handicap, round history, consistency patterns |
| Equipment Audit      | Complete club configuration (every club in the bag)   |
| Gapping Verification | Loft progression analysis, distance gap validation    |
| Bag Mapping          | Distance ranges per club (e.g., Driver 250-280 yd)    |

### Swing Video Analysis (Advanced Feature)

Users upload swing videos. The AI extracts:

- **Tempo** (e.g., 3.1:1 backswing-to-downswing ratio)
- **Angle of attack** (e.g., -4.2 degrees)
- **Body angles:** shoulders, hands, hips, knees (measured in degrees)
- **Club path** and trajectory
- **Fault diagnosis** — common errors feed the coaching component
- **Result:** Club selection optimized for the player's _actual_ swing, not theoretical

### Strategy Output

The synthesis produces per-shot recommendations:

- **Club selection** adjusted for wind, elevation, and player capability
- **Optimal landing zone** with avoidance zones around hazards
- **Safe trajectory** plotting (considering bunkers, water, OB)
- **Shot line** (ideal aim point)
- **Contextual coaching tip** (e.g., "Adjust stance for wet turf")

---

## Infrastructure & API Integrations

| Service                       | Role                                     |
| ----------------------------- | ---------------------------------------- |
| Google Cloud Platform (GCP)   | Hosts the Agentic Framework              |
| Claude API (Anthropic)        | Primary LLM — "the brain of the app"     |
| Gemini (Google)               | Secondary LLM — multimodal processing    |
| Weather & Maps APIs           | Wind, temperature, humidity, course data |
| Apple App Store / Google Play | Distribution (Coming Soon)               |

---

## Website Technology Stack

| Layer                | Technology                                  |
| -------------------- | ------------------------------------------- |
| Framework            | Next.js 16.1.6 (App Router)                 |
| Language             | TypeScript 5 (strict mode)                  |
| UI Library           | React 19.2.3                                |
| Styling              | Tailwind CSS 4 + shadcn/ui (New York style) |
| Components           | Radix UI 1.4.3 + class-variance-authority   |
| Internationalization | next-intl 4.8.3 (EN/ES)                     |
| Animation            | Framer Motion 12.x                          |
| Icons                | Lucide React                                |
| Linting              | ESLint 9 (Next.js core web vitals + TS)     |

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        # Server component: i18n provider, Inter font, metadata
│   │   └── page.tsx          # Client component: full landing page (~1050 lines)
│   └── globals.css           # Theme tokens, custom utilities (.glass, .gradient-text, .glow-*)
├── components/
│   ├── svg/                  # Inline SVG React components (logo, hero bg, mockup, swing)
│   │   ├── parsense-logo.tsx # Golf ball dimples (emerald) + neural network (blue)
│   │   ├── hero-background.tsx # Animated topographic contour lines + floating nodes
│   │   ├── app-mockup.tsx    # Phone frame with golf course UI visualization
│   │   └── swing-analysis.tsx # Swing biomechanics visualization
│   ├── ui/                   # shadcn/ui components (button, card, badge, separator)
│   ├── language-toggle.tsx   # EN/ES locale switcher (pill toggle)
│   └── section-wrapper.tsx   # Scroll-triggered framer-motion animation wrapper
├── i18n/
│   ├── routing.ts            # Locale config: ['en', 'es'], default 'en', prefix 'as-needed'
│   ├── request.ts            # Server-side i18n request handler
│   └── navigation.ts         # Typed Link/redirect/useRouter utilities
├── lib/
│   └── utils.ts              # cn() helper (clsx + tailwind-merge)
└── messages/
    ├── en.json               # English translations (all page content)
    └── es.json               # Spanish translations
middleware.ts                 # next-intl locale detection middleware
```

---

## Brand Identity

### Theme

**Dark-only** — no light mode. The `dark` class is hardcoded on `<html>`. All design decisions assume dark backgrounds.

### Color System

Colors are semantically tied to the product concept:

| Role              | Hex       | CSS Variable   | Semantic Meaning                        |
| ----------------- | --------- | -------------- | --------------------------------------- |
| Background        | `#0B1120` | `--background` | Deep navy — night-course atmosphere     |
| Foreground        | `#F8FAFC` | `--foreground` | Off-white primary text                  |
| Card              | `#111827` | `--card`       | Slightly lighter navy card surfaces     |
| Emerald (Primary) | `#10B981` | `--primary`    | **Golf/Par** — CTAs, golf-related UI    |
| Blue (Accent)     | `#3B82F6` | `--accent`     | **AI/Sense** — tech, neural indicators  |
| Gold              | `#D4A843` | `--color-gold` | **Premium/Investor** — prestige accents |
| Border            | `#1E293B` | `--border`     | Slate-toned card edges, dividers        |
| Muted             | `#94A3B8` | `--muted`      | Secondary/descriptive text              |

**Rule:** Emerald = golf/nature/action. Blue = AI/technology/intelligence. Gold = premium/investor. Never swap these associations.

### Logo Concept

Split design reflecting the product name:

- **Left half:** Golf ball dimples pattern in emerald (Par)
- **Right half:** Neural network nodes in blue (Sense)
- **Text:** "Par" (white) + "Sense" (gradient emerald-to-blue)

### Typography

- **Font:** Inter (loaded via `next/font/google`)
- **CSS Variable:** `--font-inter`
- **Fallback:** `system-ui, -apple-system, sans-serif`

### Custom CSS Utilities

| Class            | Effect                                        |
| ---------------- | --------------------------------------------- |
| `.glass`         | Glassmorphism panel (blur + semi-transparent) |
| `.gradient-text` | Emerald-to-blue gradient text                 |
| `.glow-emerald`  | Emerald box-shadow glow                       |
| `.glow-blue`     | Blue box-shadow glow                          |

---

## Internationalization

- **Locales:** `en` (default), `es`
- **Prefix strategy:** `as-needed` — English at root `/`, Spanish at `/es`
- **All visible text** lives in `src/messages/{en,es}.json` — never hardcode strings
- **Translation namespaces:** `Metadata`, `Nav`, `Hero`, `Problem`, `Features`, `HowItWorks`, `Investors`, `Testimonials`, `Stats`, `FAQ`, `CTA`, `Footer`
- Client components: `useTranslations('Namespace')`
- Server components: `getTranslations({ locale, namespace })`

---

## Architecture Conventions

### Component Boundaries

- `layout.tsx` = **server component** — handles i18n setup, font loading, metadata generation
- `page.tsx` = **client component** (`"use client"`) — all animations and interactivity
- Visual assets = **inline SVG React components** in `src/components/svg/` (zero external image files)
- UI primitives = **shadcn/ui** in `src/components/ui/`

### Styling Rules

- **Mobile-first** Tailwind (`md:` breakpoint for desktop layouts)
- Use `cn()` from `@/lib/utils` for conditional/merged classes
- Card hover pattern: `border-white/5` to `hover:border-white/10` with transition
- Wrap page sections in `SectionWrapper` for consistent scroll animations
- Bento grid for feature cards: asymmetric `md:grid-cols-3` with `md:col-span-2` for hero features

### Animation Patterns

- **Framer Motion variants:** `fadeUp`, `fadeIn`, `scaleIn`, `stagger`
- Scroll-triggered: `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- Hero parallax: `useScroll()` controlling opacity and scale via `useTransform()`
- SVG backgrounds: CSS `@keyframes` (`float-slow` 8s, `float-medium` 6s, `float-fast` 5s, `pulse-soft` 4s)

### Import Order

```typescript
// 1. React
import { useState } from "react";

// 2. Next.js
import Link from "next/link";
import Image from "next/image";

// 3. Third-party
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";

// 4. Local
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Path Alias

`@/` maps to `./src/`

---

## Page Sections (in order)

1. **Nav** — Logo + language toggle + CTA button
2. **Hero** — Headline, tech stack badges (GPS, LLM, Swing AI), store buttons (Coming Soon), app mockup (3D perspective)
3. **Stats** — Key metrics bar
4. **Problem/Solution** — Old Way (static distance data) vs ParSense Way (contextual strategy)
5. **Features** — Bento grid (5 cards): Agentic Framework, Environmental Data, Turf Assessment, Player Profile, Swing Video Analysis
6. **How It Works** — 3-step process: Data Collection (Wind icon) -> AI Processing (Brain icon) -> Strategic Recommendation (Zap icon)
7. **Testimonials** — 3 user quotes with star ratings and handicap/role
8. **Investors** — 3 metric cards (Agentic AI, Scalable SaaS, Pre-Seed Stage)
9. **FAQ** — 4 Q&A cards (tournament legality, offline use, swing analysis, availability)
10. **CTA** — Email waitlist capture + store buttons
11. **Footer** — Links, copyright, social icons

---

## Golf Domain Glossary

Use correct terminology when writing copy, components, or data models:

| Term               | Definition                                                        |
| ------------------ | ----------------------------------------------------------------- |
| Par                | Expected number of strokes for a hole or course                   |
| Handicap           | Numerical measure of a golfer's ability (lower = better)          |
| Lie                | How the ball sits on the ground (fairway, rough, bunker, etc.)    |
| Gapping            | Distance intervals between consecutive clubs in a bag             |
| Loft               | Angle of the club face that controls trajectory                   |
| Angle of Attack    | Vertical angle of the club head at impact (negative = descending) |
| Tempo              | Ratio of backswing to downswing time (ideal approx 3:1)           |
| Carry Distance     | How far the ball flies through the air (before roll)              |
| Effective Distance | Adjusted distance accounting for elevation and wind               |
| Landing Zone       | Target area where the ball should land                            |
| Hazard             | Water, bunkers, OB (out of bounds) areas                          |
| Bag Mapping        | Cataloging each club's distance range                             |
| Club Path          | Direction the club head travels through impact                    |

---

## Development

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Config in `components.json`: New York style, RSC-enabled, Lucide icons, neutral base color.

### Adding Translations

1. Add keys to **both** `src/messages/en.json` and `src/messages/es.json`
2. Use `useTranslations('Namespace')` in client components
3. Use `getTranslations({ locale, namespace })` in server components

---

## Git

- **Branch:** `main`
- **Commit style:** Conventional commits (`feat:`, `style:`, `chore:`, `fix:`, `docs:`)
- Standard `git add/commit/push` — no automated workflow scripts
