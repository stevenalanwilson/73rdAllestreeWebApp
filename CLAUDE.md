# CLAUDE.md — 73rd Allestree Scout Group Website

This file is the source of truth for Claude Code when working on this project.
Read it fully before writing any code, creating any file, or making any
architectural decision. Every convention here exists for a reason — follow it.

---

## Project overview

**What this is:** The public website for the 73rd Allestree Scout Group, Derby.
It serves parents, young people, and prospective members across four sections
(Squirrels, Beavers, Cubs, Scouts) each with two named units.

**Repo:** `github.com/73rd-allestree-scouts/website`
**Deployed at:** TBD (Railway container deployment)
**Local dev:** `http://localhost:3000`

---

## Tech stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSG preferred; ISR for dynamic content |
| Language | TypeScript (strict mode) | No `any`, no `// @ts-ignore` |
| Styling | Tailwind CSS v3 | Design tokens in `tailwind.config.ts` |
| Component docs | Storybook 8 | All UI components must have a story |
| CMS | Sanity v3 | Content managed by leaders, not devs |
| Testing | Jest + React Testing Library + Playwright | See testing section |
| Containerisation | Docker (multi-stage) | See deployment section |
| CI/CD | GitHub Actions | See pipeline section |
| Package manager | pnpm | Always use pnpm, never npm or yarn |

---

## Monorepo structure

```
73rd-allestree-scouts/
├── apps/
│   └── web/                        # Next.js app
│       ├── app/                    # App Router pages
│       │   ├── (group)/            # Group-level pages (homepage, about, contact)
│       │   ├── squirrels/
│       │   │   ├── page.tsx        # Section index
│       │   │   ├── red-squirrels/  # Unit pages
│       │   │   └── grey-squirrels/
│       │   ├── beavers/
│       │   │   ├── page.tsx
│       │   │   ├── mohawks/
│       │   │   └── cherokees/
│       │   ├── cubs/
│       │   │   ├── page.tsx
│       │   │   ├── lions/
│       │   │   └── tigers/
│       │   └── scouts/
│       │       ├── page.tsx
│       │       ├── pumas/
│       │       └── jaguars/
│       ├── components/             # App-specific wrappers only — UI belongs in packages/ui
│       ├── lib/                    # Utilities, Sanity client
│       └── public/
│           └── icons/              # Unit SVG icons (see iconography section)
├── packages/
│   ├── ui/                         # Shared pattern library
│   │   ├── src/
│   │   │   ├── primitives/         # Button, Badge, Tag, Avatar, Icon
│   │   │   ├── components/         # HeroBanner, EventCard, SectionCard, etc.
│   │   │   └── patterns/           # Full page-level layout patterns
│   │   └── .storybook/
│   └── tokens/                     # Design tokens (consumed by Tailwind)
│       └── src/
│           ├── colours.ts
│           ├── typography.ts
│           └── index.ts
├── Dockerfile
├── docker-compose.yml
├── turbo.json
├── pnpm-workspace.yaml
└── CLAUDE.md                       # ← you are here
```

---

## Package scaffold order — read this before touching packages/ui or packages/tokens

Neither `packages/ui` nor `packages/tokens` exists yet. Before any component
or token work begins, they must be scaffolded in strict order. Do not skip
steps or build out of sequence.

### Step 1 — Scaffold packages/tokens first

`packages/tokens` must exist and export its types and helpers before any
component in `packages/ui` can import from it.

Minimum required structure:

```
packages/tokens/
├── package.json          # name: "@73rd/tokens"
├── tsconfig.json
└── src/
    ├── index.ts          # re-exports everything
    ├── sections.ts       # SectionConfig, UnitConfig, getSectionConfig, getUnitConfig
    ├── colours.ts        # hex constants for all three brand tiers
    └── typography.ts     # font family, scale, weight constants
```

`package.json` must declare:

```json
{
  "name": "@73rd/tokens",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": { ".": "./src/index.ts" }
}
```

### Step 2 — Scaffold packages/ui with Storybook before any component

`packages/ui` must not be created until Step 1 is complete. Storybook
configuration must be in place before the first component file is written —
stories are never retrofitted after the fact.

Minimum required structure:

```
packages/ui/
├── package.json          # name: "@73rd/ui"
├── tsconfig.json
├── .storybook/
│   ├── main.ts
│   └── preview.tsx       # wraps all stories in base CSS + font import
└── src/
    ├── index.ts          # re-exports all public components
    ├── primitives/
    ├── components/
    └── patterns/
```

`package.json` must declare:

```json
{
  "name": "@73rd/ui",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./hooks": "./src/hooks/index.ts"
  },
  "peerDependencies": { "react": "^19.0.0", "react-dom": "^19.0.0" },
  "dependencies": { "@73rd/tokens": "workspace:*" }
}
```

Only after `pnpm storybook` runs without error should any component file be
created inside `src/`.

### Step 3 — Only then build page-level content in apps/web

`apps/web` pages may import from `@73rd/ui` once Step 2 is complete.
If a component is needed on a page and does not yet exist, create it in
`packages/ui` first, then import it into the page.

Uncomment the `packages/ui` content path in `apps/web/tailwind.config.ts`
as soon as Step 2 is complete:

```ts
content: [
  './app/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  '../../packages/ui/src/**/*.{ts,tsx}',  // ← uncomment this
],
```

---

## Component and pattern library — mandatory workflow

This is the primary architectural rule of the project. Read it before
creating any file inside `apps/web/app/` or `apps/web/components/`.

### The three-layer architecture

All UI lives in `packages/ui`. The library has three layers. Each layer
may only depend on layers below it — never on layers above it.

| Layer | Directory | What goes here | Examples |
|---|---|---|---|
| Primitives | `src/primitives/` | Atomic, stateless, no business logic. No `useSectionTheme`. Accepts explicit colour props if colour is needed. | `Button`, `Badge`, `Tag`, `Avatar`, `Icon`, `Pill` |
| Components | `src/components/` | Composed from primitives. May call `useSectionTheme()`. Contains real layout and content structure. | `HeroBanner`, `EventCard`, `SectionCard`, `UnitNav`, `LeaderBio` |
| Patterns | `src/patterns/` | Full-width layout regions composed from components. Always sits inside a `SectionProvider`. Represents a reusable page section. | `SectionHeroBlock`, `EventsGridBlock`, `JoinCTABlock` |

Never place a primitive directly inside `patterns/`. Always compose through
the component layer.

### What is genuinely app-specific (allowed in apps/web)

| Category | Location in apps/web | Why it stays in apps/web |
|---|---|---|
| Route definitions | `app/**/page.tsx` | Next.js file-system routing |
| Root layout | `app/layout.tsx` | App-level HTML shell, font loading, metadata |
| Data-fetching shells | `app/**/page.tsx` | Sanity queries, async server components |
| App-specific wrappers | `components/` | Thin shells that fetch data and pass props into a `@73rd/ui` component |
| Middleware | `middleware.ts` | Next.js request handling |

If a file in `apps/web/components/` contains JSX that renders UI beyond a
simple prop-pass-through, that UI belongs in `packages/ui`.

### The "would another Scout group want this?" rule

Before writing any component, ask:

> Would a future site for a different Scout group — with different section
> colours but the same structure — want to reuse this component?

- **Yes** → the component belongs in `packages/ui`
- **No** (wired to a specific Sanity query, specific route, or 73rd group identity) → it may live in `apps/web/components/`

When in doubt, put it in `packages/ui`. It is easier to move something into
the app later than to extract it from the app.

### Storybook is a mandatory gate, not documentation

A component in `packages/ui` without a co-located `.stories.tsx` file is
**incomplete** and must not be merged. The story is written in the same
commit as the component — never deferred to a follow-up PR.

File placement mirrors the component:

```
packages/ui/src/components/HeroBanner/
├── HeroBanner.tsx
├── HeroBanner.test.tsx
└── HeroBanner.stories.tsx   ← required, same PR
```

Every story must include at least one variant per section to demonstrate
theming across all four section contexts (Squirrels, Beavers, Cubs, Scouts).

---

## Brand hierarchy — CRITICAL, read before touching any colour or style

The site has a strict three-tier brand system. Never collapse or skip tiers.

### Tier 1 — National Scout Association (global, locked)
These values are set once in `tailwind.config.ts` and never overridden.
They appear in structural chrome: the fleur-de-lis mark, trust badges,
any cross-organisation elements.

```
Scout Purple   #4D2177
Scout Green    #84A40B
Scout Teal     #00A794
Scout Orange   #ED7703
Scout Navy     #001323
Font           Nunito Sans (Google Fonts)
```

### Tier 2 — 73rd Allestree Group (group identity layer)
73rd Red is the group's own accent. It appears in:
- The group homepage hero
- The main navigation bar and footer
- Group-level calls-to-action
- The group wordmark / badge

```
Group Red      #B31C27
Group Red Light #E8474F
Group Red Dark  #8A1018
```

73rd Red must NEVER appear as the dominant colour on a section or unit page.
It appears only as a thin identity stripe or in the persistent nav.

### Tier 3 — Section and unit colours

**Section colour** is the dominant colour for all pages within that section.
**Unit accent** differentiates the two units within a section.

| Section | Section colour | Unit | Unit accent |
|---|---|---|---|
| Squirrels | `#9B1C1C` | Red Squirrels | `#CC2222` |
| Squirrels | `#9B1C1C` | Grey Squirrels | `#8A8A8A` |
| Beavers | `#004F6E` | Mohawks | `#0085B2` |
| Beavers | `#004F6E` | Cherokees | `#003F6B` |
| Cubs | `#4A5E06` | Lions | `#C8850A` |
| Cubs | `#4A5E06` | Tigers | `#E06B00` |
| Scouts | `#0F3D0F` | Pumas | `#7A9E3B` |
| Scouts | `#0F3D0F` | Jaguars | `#C4A000` |

**Rule:** A user should always be able to tell which section they are in from
the page colour alone, without reading any text. Colour is navigation.

---

## Type system for sections and units

All section/unit data flows through these shared types. Import from
`@73rd/tokens` — never define section data inline in a component.

```typescript
// packages/tokens/src/sections.ts

export type SectionSlug = 'squirrels' | 'beavers' | 'cubs' | 'scouts'

export type UnitSlug =
  | 'red-squirrels' | 'grey-squirrels'
  | 'mohawks'       | 'cherokees'
  | 'lions'         | 'tigers'
  | 'pumas'         | 'jaguars'

export interface SectionConfig {
  slug:         SectionSlug
  name:         string
  colour:       string   // section bg hex
  tint:         string   // light page tint hex
  ageRange:     string   // e.g. "Ages 4–6"
  unitGroupName: string  // e.g. "Drey" | "Colony" | "Pack" | "Troop"
  units:        UnitConfig[]
}

export interface UnitConfig {
  slug:       UnitSlug
  name:       string         // e.g. "Red Squirrels"
  section:    SectionSlug
  unitNumber: 1 | 2
  groupName:  string         // e.g. "1st Drey"
  animal:     string         // e.g. "Red Squirrel"
  accent:     string         // unit accent hex
  tint:       string         // page bg tint hex
  iconPath:   string         // e.g. "/icons/red-squirrel.svg"
  route:      string         // e.g. "/squirrels/red-squirrels"
}
```

Use `getSectionConfig(slug: SectionSlug)` and `getUnitConfig(slug: UnitSlug)`
helper functions — never hardcode hex values in components.

---

## Iconography

Every unit has a dedicated SVG icon. These live in `apps/web/public/icons/`.

| Unit | Icon file | Motif |
|---|---|---|
| Red Squirrels | `red-squirrel.svg` | Rufous squirrel, tufted ears |
| Grey Squirrels | `grey-squirrel.svg` | Grey squirrel, bushy tail |
| Mohawks | `mohawk-headdress.svg` | Feather headdress |
| Cherokees | `cherokee-arrow.svg` | Arrow / arrowhead |
| Lions | `lion-head.svg` | Lion head with mane |
| Tigers | `tiger-stripes.svg` | Tiger with stripe motif |
| Pumas | `puma-silhouette.svg` | Crouching puma silhouette |
| Jaguars | `jaguar-spots.svg` | Jaguar with rosette spots |

**SVG icon rules:**
- All icons must be square viewBox (e.g. `0 0 48 48`)
- Use `currentColor` for strokes so they adapt to context
- No hardcoded colours inside SVG files — colour comes from CSS
- Minimum usable size: 24×24px. Must be legible at 16×16px for nav chips
- Export at 48px artboard. Provide both filled and outline variants.
- Store as React components via `@svgr/webpack` — import as `<RedSquirrelIcon />`

The Scout fleur-de-lis mark is a separate asset (`fleur-de-lis.svg`) and is
always rendered in Scout Purple or white. Never recolour it.

---

## Component conventions

### SectionProvider

Every section and unit page tree must be wrapped in `SectionProvider`.
This is how all downstream components receive theme data without prop-drilling.

```tsx
// app/beavers/mohawks/page.tsx
import { SectionProvider } from '@73rd/ui'

export default function MohawksPage() {
  return (
    <SectionProvider section="beavers" unit="mohawks">
      <HeroBanner />
      <EventsGrid />
    </SectionProvider>
  )
}
```

```tsx
// In any component:
const { sectionColour, unitAccent, unitTint, unitIcon, unitName, sectionName } =
  useSectionTheme()
```

Never pass `section` or `unit` as props through component trees.
Always use the context hook.

### Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase | `HeroBanner.tsx` |
| Component folders | PascalCase | `HeroBanner/` |
| Utility files | camelCase | `getSectionConfig.ts` |
| Page files | `page.tsx` (Next.js convention) | `app/cubs/lions/page.tsx` |
| Test files | co-located, `.test.tsx` | `HeroBanner.test.tsx` |
| Story files | co-located, `.stories.tsx` | `HeroBanner.stories.tsx` |
| CSS class names | Tailwind only — no custom CSS classes | — |
| Constants | SCREAMING_SNAKE_CASE | `MAX_EVENTS_PER_PAGE` |
| Types/interfaces | PascalCase | `UnitConfig` |
| Hooks | `use` prefix, camelCase | `useSectionTheme` |

### Component file structure

Every component follows this exact structure:

```tsx
// 1. External imports
import { type FC } from 'react'
import Image from 'next/image'

// 2. Internal imports (absolute, via tsconfig paths)
import { useSectionTheme } from '@73rd/ui/hooks'
import type { UnitConfig } from '@73rd/tokens'

// 3. Types (local to this file only)
interface HeroBannerProps {
  title: string
  strapline?: string
}

// 4. Component (named export always — no default exports from components)
export const HeroBanner: FC<HeroBannerProps> = ({ title, strapline }) => {
  const { unitAccent, unitIcon } = useSectionTheme()

  return (
    <section aria-label="Page hero">
      {/* ... */}
    </section>
  )
}
```

**No default exports from components.** Pages use default exports (Next.js
requirement) but all components use named exports.

---

## Accessibility — non-negotiable

This site serves young people and families. WCAG 2.1 AA compliance is
mandatory on every component. The CI pipeline will fail on accessibility
violations — this is intentional.

- All images require meaningful `alt` text. Decorative images use `alt=""`
- Colour contrast: minimum 4.5:1 for normal text, 3:1 for large text
- Every interactive element must be keyboard-navigable
- Section colour backgrounds must always pair with white (`#ffffff`) text —
  check contrast before using any section colour as a background
- Use semantic HTML: `<nav>`, `<main>`, `<section aria-label>`, `<article>`,
  `<header>`, `<footer>` — never `<div>` for structural elements
- Forms must have associated `<label>` elements (no placeholder-only labels)
- Focus rings must be visible — never `outline: none` without a replacement
- All unit icons need `aria-label` or `aria-hidden` depending on context

Run `pnpm a11y` locally before raising a PR.

---

## Tailwind usage rules

- **Tokens only.** All colours must reference a token from `tailwind.config.ts`.
  Never use arbitrary values like `bg-[#CC2222]` — use `bg-squirrels-red-400`.
- **No inline styles** for colours, spacing, or typography. Tailwind classes only.
- **Responsive first.** Default styles are mobile (375px). Use `md:` for
  tablet (768px) and `lg:` for desktop (1280px). Every component must be
  designed and verified at all three breakpoints. Never design desktop-first.
- **Dark mode.** Use `dark:` variants. The site supports OS-level dark mode.
  Every colour token must have a legible dark-mode pairing.
- **No `@apply` in component files.** Tailwind classes belong in JSX.
  `@apply` is allowed only in `globals.css` for base element resets.

---

## Responsive design

Every component and every page must work correctly at all three breakpoints.
This is non-negotiable — the site is used on phones by young people and on
desktops by parents and leaders.

### Breakpoints

| Name | Tailwind prefix | Min width | Typical device |
|---|---|---|---|
| Mobile | (default) | 375px | Phones, small screens |
| Tablet | `md:` | 768px | Tablets, large phones landscape |
| Desktop | `lg:` | 1280px | Laptops, monitors |

All Tailwind responsive prefixes map to these. `sm:` (640px) may be used for
in-between adjustments but is not a primary design target.

### Mobile-first rules

- Write default (unprefixed) classes for mobile layout first
- Add `md:` overrides for tablet, then `lg:` overrides for desktop
- Never write a `lg:` rule without first considering what the mobile layout
  should be — the mobile style is always the fallback
- Text size, spacing, and column counts must all scale gracefully between
  breakpoints — no abrupt reflows or clipping

### What must be checked at each breakpoint

| Element | Mobile (375px) | Tablet (768px) | Desktop (1280px) |
|---|---|---|---|
| Navigation | Collapsed to hamburger / bottom bar | May show top-level items | Full nav with all section links visible |
| Hero banners | Single-column, full-width image | Side-by-side text + image | Wider layout, larger heading |
| Cards (EventCard, SectionCard) | Full-width stack | 2-column grid | 3- or 4-column grid |
| Body text | 16px minimum, single column | Can widen | Max ~72ch line length |
| Tap/click targets | Minimum 44×44px | Same | Same |
| Section colour backgrounds | Full-bleed | Full-bleed | Full-bleed |
| Unit icons in nav chips | 24px, legible | 24px+ | 24px+ |

### Storybook viewport testing

Every component story must include the three canonical viewports using the
Storybook viewport addon. Add this to `.storybook/preview.tsx`:

```tsx
export const parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: {
      mobile:  { name: 'Mobile',  styles: { width: '375px',  height: '812px' } },
      tablet:  { name: 'Tablet',  styles: { width: '768px',  height: '1024px' } },
      desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
    },
  },
}
```

When writing stories for layout components (HeroBanner, SectionCard, patterns),
add explicit story variants at each viewport so the difference is visible in
the pattern library:

```tsx
export const Mobile: StoryObj  = { parameters: { viewport: { defaultViewport: 'mobile'  } } }
export const Tablet: StoryObj  = { parameters: { viewport: { defaultViewport: 'tablet'  } } }
export const Desktop: StoryObj = { parameters: { viewport: { defaultViewport: 'desktop' } } }
```

### Playwright responsive tests

E2E tests must assert layout at all three breakpoints for any component that
changes layout across viewports:

```ts
const VIEWPORTS = [
  { name: 'mobile',  width: 375,  height: 812  },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'desktop', width: 1280, height: 800  },
]

for (const vp of VIEWPORTS) {
  test(`section page renders correctly at ${vp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height })
    await page.goto('/beavers')
    await expect(page.getByRole('main')).toBeVisible()
    // assert layout-specific elements at this viewport
  })
}
```

---

## Testing requirements

Every PR must maintain or improve coverage. The CI gate is:
- Unit/component tests: >80% coverage
- Zero accessibility violations (axe-core)
- All Playwright E2E tests passing

### What to test

| Layer | Tool | What |
|---|---|---|
| Utility functions | Jest | All branches, edge cases |
| React components | Jest + RTL | Renders correctly, user interactions |
| Accessibility | jest-axe | Every component story |
| Section theming | Jest | `useSectionTheme` returns correct values |
| Navigation | Playwright | User can reach all section/unit pages |
| Colour rendering | Playwright | Section pages render correct background |
| Responsive layout | Playwright | Key pages checked at 375px, 768px, 1280px |
| Forms | Playwright | Contact form submits, validates |

### Test file conventions

```tsx
// HeroBanner.test.tsx
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { SectionProvider } from '@73rd/ui'
import { HeroBanner } from './HeroBanner'

expect.extend(toHaveNoViolations)

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <SectionProvider section="beavers" unit="mohawks">
    {children}
  </SectionProvider>
)

describe('HeroBanner', () => {
  it('renders the title', () => {
    render(<HeroBanner title="Welcome" />, { wrapper })
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<HeroBanner title="Welcome" />, { wrapper })
    expect(await axe(container)).toHaveNoViolations()
  })
})
```

---

## Storybook conventions

Every component in `packages/ui` must have a co-located `.stories.tsx` file
created in the same PR as the component — no exceptions. A component without
a story is incomplete and must not be merged. The story is part of the
definition of done, not documentation added after the fact. Stories serve as
the living pattern library — what leaders and future developers browse to
understand what's available.

```tsx
// HeroBanner.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { SectionProvider } from '../SectionProvider'
import { HeroBanner } from './HeroBanner'

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  decorators: [
    (Story, { args }) => (
      <SectionProvider section="beavers" unit="mohawks">
        <Story {...args} />
      </SectionProvider>
    ),
  ],
}
export default meta

// Always include a story for each section to show theming in action
export const BeaversMohawks: StoryObj = { args: { title: 'Mohawks Beavers' } }
export const CubsLions: StoryObj = {
  decorators: [(Story) => (
    <SectionProvider section="cubs" unit="lions"><Story /></SectionProvider>
  )],
  args: { title: 'Lions Cubs' },
}
```

---

## CI/CD pipeline (GitHub Actions)

All five gates must pass before a PR can merge. They run in sequence.
A failing gate stops the pipeline — do not skip or bypass.

```
1. pnpm lint          ESLint + TypeScript type check (tsc --noEmit)
2. pnpm test          Jest unit + component tests with coverage gate
3. pnpm test:a11y     axe-core accessibility audit on all Storybook stories
4. pnpm audit         npm/pnpm security audit (fail on high/critical)
5. pnpm test:e2e      Playwright across Chrome, Firefox, WebKit
```

Merges to `main` automatically build and push the Docker image to GHCR,
then deploy to the Railway production environment.

Preview deployments are created for every PR automatically.

---

## Docker and deployment

The Dockerfile uses a multi-stage build. Never add development dependencies
to the production stage.

```dockerfile
# Stage 1: deps
FROM node:20-alpine AS deps

# Stage 2: builder
FROM node:20-alpine AS builder

# Stage 3: runner (production only)
FROM node:20-alpine AS runner
# Only .next/standalone, .next/static, and public/ are copied here
```

**Environment variables** are managed via Railway's environment panel.
Never commit `.env` files. Use `.env.example` to document required variables.

Required env vars:
```
NEXT_PUBLIC_SITE_URL=
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=          # server-side only, never NEXT_PUBLIC_
```

---

## Content management (Sanity)

Content editors are Scout leaders — not developers. The Sanity schema must
be simple, clearly labelled, and never expose technical implementation details.

- Field names in the Sanity Studio use plain English labels, not camelCase keys
- Every section has its own document type with a `section` and `unit` reference
- Events, news posts, and leader bios are the primary content types
- Images must go through Sanity's asset pipeline — never commit images to git

---

## Git conventions

### Branch naming
```
feature/   new functionality          feature/section-hero-banner
fix/       bug fixes                  fix/beaver-colour-contrast
chore/     tooling, deps, config      chore/update-tailwind-v4
content/   Sanity schema changes      content/add-events-schema
a11y/      accessibility fixes        a11y/keyboard-nav-section-cards
```

### Commit messages (Conventional Commits)
```
feat(beavers): add Mohawks unit hero banner
fix(a11y): improve focus ring visibility on section nav chips
chore(deps): bump next from 14.1.0 to 14.2.0
test(cubs): add Lions EventCard accessibility tests
docs: update CLAUDE.md with Storybook conventions
```

### PR checklist
Every PR description must include:
- [ ] Does this affect section theming? If yes, tested all 8 units
- [ ] Has the component been checked at mobile (375px), tablet (768px), and desktop (1280px)?
- [ ] Has `pnpm a11y` been run locally and passes?
- [ ] Are new UI components in `packages/ui`? (If not, is there a documented reason they are app-specific?)
- [ ] Does every new component in `packages/ui` have a co-located `.stories.tsx` file in this PR?
- [ ] Are new components covered by unit tests and at least one axe accessibility test?
- [ ] Does this change require a Sanity schema migration?
- [ ] Has the Docker build been verified locally (`docker build .`)?

---

## Things Claude must never do in this project

- **Never hardcode hex values** in component files. Always use Tailwind tokens.
- **Never use `<div>`** for semantic structural elements (nav, header, main, etc.)
- **Never skip the `SectionProvider`** wrapper on section or unit pages.
- **Never add a new section or unit** without updating `packages/tokens/src/sections.ts`
  and adding the corresponding Tailwind token and icon.
- **Never use `any`** in TypeScript. If the type is unknown, use `unknown`
  and narrow it.
- **Never write CSS** in `.css` files for component styling. Tailwind only.
  Exception: `globals.css` base resets only.
- **Never commit secrets** or real environment variable values.
- **Never use `console.log`** in production code. Use the structured logger
  in `lib/logger.ts`.
- **Never disable ESLint rules** without a comment explaining why and a ticket
  reference.
- **Never ship a component** without a Storybook story and at least one
  accessibility test.
- **Never override Scout brand colours** (Tier 1 tokens) for local styling.
  The national brand is non-negotiable.
- **Never build a UI component directly in `apps/web`** without first checking
  whether it belongs in `packages/ui`. Any JSX that renders visual UI and
  could appear on more than one page must live in the shared library.
- **Never ship a component in `packages/ui` without a co-located `.stories.tsx`
  file** in the same PR. A component without a story fails the CI
  accessibility gate and is considered unfinished.
- **Never create a new package** without a `package.json` that declares `name`
  as `@73rd/[package-name]`. Incorrectly named packages break pnpm workspace
  resolution and the Turbo task graph.
- **Never write a component that reads section or unit data from anything other
  than `useSectionTheme()`** or a `@73rd/tokens` helper function. Inline
  colour values and local type redeclarations are forbidden.
- **Never scaffold `packages/ui` before `packages/tokens` is in place.**
  The component library depends on the token package — building them out of
  order creates import errors that are expensive to untangle.
- **Never verify a component at only one viewport.** Mobile, tablet (768px),
  and desktop (1280px) are all required. A layout that only works on desktop
  is not finished.

---

## Quick reference — section routes

```
/                           Group homepage
/about                      About the 73rd
/contact                    Contact / join
/squirrels                  Squirrels section index
/squirrels/red-squirrels    Red Squirrels Drey
/squirrels/grey-squirrels   Grey Squirrels Drey
/beavers                    Beavers section index
/beavers/mohawks            Mohawks Colony
/beavers/cherokees          Cherokees Colony
/cubs                       Cubs section index
/cubs/lions                 Lions Pack
/cubs/tigers                Tigers Pack
/scouts                     Scouts section index
/scouts/pumas               Pumas Troop
/scouts/jaguars             Jaguars Troop
```

---

## Before you build — mandatory checklist

Run through these steps before creating any new component or writing any JSX
in a page file.

**1. Does this already exist in packages/ui?**
Check `src/primitives/`, `src/components/`, and `src/patterns/`. If Storybook
is running (`pnpm storybook`), check the index. Do not create near-duplicates.

**2. Which layer does it belong in?**

| Situation | Layer |
|---|---|
| Single atomic element, no context, no internal state | Primitive |
| Composed from primitives or reads `useSectionTheme()` | Component |
| Full-width page region composed from multiple components | Pattern |

**3. Is the package scaffold in place?**
If `packages/ui` or `packages/tokens` does not exist, complete the
"Package scaffold order" steps before creating any component file.

**4. Has the Storybook story been planned?**
Identify the story variants before writing the component:
- Minimum one variant per section (Squirrels, Beavers, Cubs, Scouts)
- Any props that need their own story (long copy, empty state, etc.)
- Whether a `dark:` variant is needed

**5. Do the types come from @73rd/tokens?**
Any type describing a section, unit, colour, or brand concept must be
imported from `@73rd/tokens`. Do not redeclare these types locally.

**6. Have you planned the layout at all three breakpoints?**
Before writing any JSX, sketch (even mentally) what the component looks like
at mobile (375px), tablet (768px), and desktop (1280px). If the layout
changes across breakpoints, plan the Tailwind responsive classes up front —
retrofitting responsive behaviour is harder than building it in from the start.

---

## Questions to ask before starting any task

1. Which tier of the brand hierarchy does this affect?
2. Does this component need to be themed by section/unit?
3. Does this work at all 8 unit routes, or just the one I'm testing?
4. Have I checked colour contrast for all section background colours?
5. Is there a Storybook story for this, and does it show all relevant states?
6. What does this look like at mobile (375px), tablet (768px), and desktop (1280px)?
7. Is there a Sanity schema implication — do leaders need to edit this content?

---

*Last updated: initial project setup*
*Maintained by: 73rd Allestree Scout Group development team*
