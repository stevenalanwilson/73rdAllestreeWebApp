# 73rd Allestree Scout Group — Website

The official website for the **73rd Allestree Scout Group**, Derby.
Built to help parents, young people, and prospective members find their
section, explore upcoming events, and get in touch with leaders.

[![CI](https://github.com/73rd-allestree-scouts/website/actions/workflows/ci.yml/badge.svg)](https://github.com/73rd-allestree-scouts/website/actions)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-brightgreen)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Contents

- [About the project](#about-the-project)
- [Our sections](#our-sections)
- [For stakeholders and leaders](#for-stakeholders-and-leaders)
- [Visual identity](#visual-identity)
- [Tech stack](#tech-stack)
- [Getting started (developers)](#getting-started-developers)
- [Deployment](#deployment)
- [Quality and accessibility](#quality-and-accessibility)
- [Contributing](#contributing)
- [Contact](#contact)

---

## About the project

The 73rd Allestree Scout Group has been part of the Allestree community in
Derby for many years, providing young people aged 4–14 with the skills,
adventures, and friendships that Scouting is known for.

This website serves as the group's public home on the web. Its goals are:

- **Inform** — parents and young people can find their section quickly and
  understand what it offers
- **Engage** — upcoming events, news, and activities are kept up to date by
  section leaders without needing a developer
- **Recruit** — prospective members and volunteers can find out how to join
- **Represent** — the site is a source of pride that reflects the energy and
  identity of every section in the group

The site is built and maintained by volunteers. All design and technical
decisions are made with that context in mind: it must be straightforward to
update, reliable to host, and easy for future volunteers to pick up.

---

## Our sections

The 73rd has four sections, each with two named units. Every unit has its own
identity — a name, an animal, and a colour — while sharing the visual language
of its parent section.

### 🐿️ Squirrels — Ages 4 to 6

Our newest and youngest section, for children aged 4–6. Meeting in their
Dreys, Squirrels explore the world around them through play, creativity, and
their first taste of the outdoors.

| Unit | Drey | Animal identity |
|---|---|---|
| **Red Squirrels** | 1st Drey | The native British red squirrel — rufous, tufted, bold |
| **Grey Squirrels** | 2nd Drey | The familiar grey squirrel — silver, confident, curious |

---

### 🦫 Beavers — Ages 6 to 8

Beavers Colonies are where young people first discover what it means to be a
Scout — learning to work as a team, try new things, and earn their first
badges.

| Unit | Colony | Identity |
|---|---|---|
| **Mohawks** | 1st Colony | Feather headdress motif — bold cobalt accent |
| **Cherokees** | 2nd Colony | Arrow motif — deep navy accent |

---

### 🐻 Cubs — Ages 8 to 10½

Cub Packs take on bigger challenges — camps, hikes, community projects, and
a wide programme of badges. Cubs is where many young people find their feet
as Scouts.

| Unit | Pack | Identity |
|---|---|---|
| **Lions** | 1st Pack | Lion head motif — tawny gold accent |
| **Tigers** | 2nd Pack | Tiger stripe motif — burnt orange accent |

---

### ⚜️ Scouts — Ages 10½ to 14

Scout Troops offer the fullest programme — expeditions, pioneering, water
activities, Duke of Edinburgh, and leadership opportunities. This is Scouting
at its most adventurous.

| Unit | Troop | Identity |
|---|---|---|
| **Pumas** | 1st Troop | Crouching puma silhouette — sage green accent |
| **Jaguars** | 2nd Troop | Jaguar rosette spot pattern — gold accent |

---

## For stakeholders and leaders

### How content is managed

Content on the website — events, news, leader profiles, section information —
is managed through **Sanity**, a content management system (CMS) designed for
non-technical editors. Leaders can log in, make changes, and publish without
touching any code or involving a developer.

If you need access to the CMS, contact the group's digital lead.

### What requires a developer

The following changes do require developer involvement:

- Adding a new section or unit to the site
- Changes to the site's design, layout, or structure
- Changes to navigation or URL structure
- Integrating a new external service or form

For these, raise an issue on GitHub (see [Contributing](#contributing)) or
contact the digital lead directly.

### Raising a bug or request

If something on the live site looks wrong, or you'd like to request a new
feature, please [open a GitHub issue](https://github.com/73rd-allestree-scouts/website/issues/new/choose).
Use the appropriate template:

- **Bug report** — something is broken or displaying incorrectly
- **Feature request** — a new page, section, or piece of functionality
- **Content issue** — something is out of date or factually incorrect

You do not need a technical background to raise an issue. Plain English is fine.

---

## Visual identity

The website follows a strict three-tier brand hierarchy that flows from the
national Scout Association down to each individual unit.

### Tier 1 — National Scout Association

The foundation of the visual identity is set by the Scout Association's
brand guidelines and applies across all Scout Group websites in the UK.

- **Primary colour:** Scout Purple `#4D2177`
- **Typeface:** Nunito Sans (free Google Font)
- **Logo:** The fleur-de-lis mark, used with the group name beneath it

These elements are locked and consistent with the national brand.

### Tier 2 — 73rd Allestree Group

The group's own identity layer, layered over the national brand.

- **Group colour:** 73rd Red `#B31C27`
- Used in the main navigation, footer, and group-level pages
- Each section page carries a thin group identity stripe to reinforce
  that all sections belong to the same group

### Tier 3 — Sections and units

Each section has a distinct colour drawn from the Scout Association's official
section palette. Within each section, units are differentiated by a unit
accent colour and their animal icon.

| Section | Colour | Unit | Unit accent |
|---|---|---|---|
| Squirrels | Scout Red `#9B1C1C` | Red Squirrels | `#CC2222` |
| | | Grey Squirrels | `#8A8A8A` |
| Beavers | Scout Blue `#004F6E` | Mohawks | `#0085B2` |
| | | Cherokees | `#003F6B` |
| Cubs | Scout Green `#4A5E06` | Lions | `#C8850A` |
| | | Tigers | `#E06B00` |
| Scouts | Dark Green `#0F3D0F` | Pumas | `#7A9E3B` |
| | | Jaguars | `#C4A000` |

**Design principle:** A visitor should be able to tell which section they are
on from the page colour alone, without reading any text. Colour is navigation.

---

## Tech stack

The website is built using modern, well-supported open-source tools chosen for
reliability and ease of handover to future volunteers.

| Concern | Technology | Why |
|---|---|---|
| Framework | [Next.js 14](https://nextjs.org) | Fast, SEO-friendly, widely supported |
| Language | [TypeScript](https://typescriptlang.org) | Fewer bugs, easier for future contributors |
| Styling | [Tailwind CSS](https://tailwindcss.com) | Consistent design tokens, no CSS sprawl |
| Component library | Built in-house (Storybook) | Matches Scout branding exactly |
| Content management | [Sanity](https://sanity.io) | Leader-friendly editing, generous free tier |
| Testing | Jest + Playwright | Unit, accessibility, and end-to-end tests |
| Containerisation | Docker | Host anywhere — not tied to one provider |
| CI/CD | GitHub Actions | Automated quality and security checks on every change |
| Hosting | Railway | Simple, low-cost container hosting |
| Package manager | pnpm | Fast, efficient dependency management |

### Repository structure

```
73rd-allestree-scouts/
├── apps/
│   └── web/            Next.js website application
├── packages/
│   ├── ui/             Shared component library (Storybook pattern library)
│   └── tokens/         Design tokens — colours, typography, section config
├── Dockerfile          Container build instructions
├── docker-compose.yml  Local development stack
├── CLAUDE.md           AI development conventions (see below)
└── README.md           This file
```

---

## Getting started (developers)

### Prerequisites

- [Node.js](https://nodejs.org) 20 or later
- [pnpm](https://pnpm.io) 9 or later (`npm install -g pnpm`)
- [Docker](https://docker.com) (optional, for container testing)

### Local development

```bash
# Clone the repository
git clone https://github.com/73rd-allestree-scouts/website.git
cd website

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

### Running Storybook (pattern library)

```bash
pnpm storybook
```

Storybook opens at `http://localhost:6006` and shows every component in
isolation across all section themes.

### Environment variables

Copy `.env.example` to `.env.local` and fill in the required values.
Contact the digital lead for the Sanity project credentials.

```bash
cp .env.example .env.local
```

Required variables are documented in `.env.example`. Never commit real values.

### Useful commands

```bash
pnpm dev          Start local development server
pnpm build        Production build
pnpm test         Run unit and component tests
pnpm test:e2e     Run Playwright end-to-end tests
pnpm test:a11y    Run accessibility audit
pnpm lint         Lint and type-check
pnpm storybook    Start Storybook pattern library
pnpm audit        Check for security vulnerabilities
```

---

## Deployment

The site is packaged as a Docker container, which means it can be hosted on
any container-capable platform. It is not tied to a specific cloud provider.

### How deployment works

1. A developer merges a pull request into the `main` branch
2. GitHub Actions automatically runs the full quality pipeline (see below)
3. If all checks pass, a new Docker image is built and pushed to the
   GitHub Container Registry
4. Railway pulls the new image and deploys it automatically
5. The live site is updated — typically within a few minutes of merge

### Environments

| Environment | URL | Updated when |
|---|---|---|
| Production | TBD | Merge to `main` |
| Preview | Auto-generated per PR | PR opened or updated |

Preview deployments allow stakeholders to review changes before they go live.
Every pull request gets its own preview URL.

---

## Quality and accessibility

The website is built with quality and accessibility as first-class concerns,
not afterthoughts. This matters because the site serves young people and
families, and because Scout values include being inclusive and welcoming to
everyone.

### Automated quality gates

Every proposed change must pass five automated checks before it can be merged.
These run automatically on GitHub when a pull request is raised.

| Gate | What it checks |
|---|---|
| **Lint and type check** | Code style and TypeScript correctness |
| **Unit tests** | Individual components work as expected |
| **Accessibility audit** | WCAG 2.1 AA compliance on every component |
| **Security scan** | Known vulnerabilities in dependencies |
| **End-to-end tests** | Full user journeys across Chrome, Firefox, and Safari |

A failing check blocks the merge. This is intentional — it means the live
site is never knowingly broken or inaccessible.

### Accessibility standard

The site targets **WCAG 2.1 Level AA** compliance. This includes:

- All images have descriptive alternative text
- Colour contrast meets minimum ratios for readability
- All content is navigable by keyboard
- The site works with screen readers
- Forms have proper labels and error messages

If you spot an accessibility issue on the live site, please
[raise it as a bug](https://github.com/73rd-allestree-scouts/website/issues/new/choose)
— it will be treated as a priority fix.

---

## Contributing

The site is maintained by volunteers. All contributions are welcome, whether
you are a developer, a designer, or simply someone who spotted a typo.

### For developers

Please read `CLAUDE.md` before contributing. It documents the conventions,
architecture decisions, and standards that keep the codebase consistent.

Branch naming:

```
feature/   New functionality           feature/section-hero-banner
fix/       Bug fixes                   fix/beaver-colour-contrast
chore/     Dependencies, tooling       chore/update-tailwind
a11y/      Accessibility improvements  a11y/keyboard-nav
content/   CMS schema changes          content/add-events-schema
```

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat(beavers): add Mohawks unit hero banner
fix(a11y): improve focus ring on section nav chips
chore(deps): bump Next.js from 14.1.0 to 14.2.0
```

### For non-developers

If you would like to suggest an improvement or report a problem but are not
comfortable with GitHub, email the digital lead and they will raise an issue
on your behalf.

---

## AI development conventions

This project uses **Claude Code** as a development assistant. The file
`CLAUDE.md` at the root of the repository documents all conventions that
Claude Code follows when working on this codebase — including the brand
hierarchy, component patterns, testing requirements, and things that should
never be done.

If you are using Claude Code on this project, read `CLAUDE.md` first.
It is the source of truth for how this codebase is built and maintained.

---

## Useful links

| Resource | Link |
|---|---|
| Live site | TBD |
| Storybook pattern library | TBD |
| Sanity CMS | TBD |
| Scout Association brand guidelines | [scouts.org.uk/brand](https://www.scouts.org.uk/volunteers/running-things-locally/local-media-and-member-communications/our-brand/) |
| Scout Association | [scouts.org.uk](https://www.scouts.org.uk) |
| Derbyshire Scouts | [derbyshirescouts.org](https://www.derbyshirescouts.org) |

---

## Contact

**Digital lead:** TBD
**Group lead volunteer:** TBD
**Email:** TBD

For technical issues, please use GitHub Issues rather than email where
possible — it keeps everything in one place and means other volunteers can
see and contribute to the conversation.

---

*The Scout Association — Registered Charity numbers 306101 (England and Wales) and SC038437 (Scotland).*

*Be Prepared.*
