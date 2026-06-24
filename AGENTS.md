# Lavelle Networks Website — Agent Instructions (OpenAI Codex)

## Mandatory: Read architect.md Before Any Task

Read `architect.md` completely before writing any code or making any decisions. It is the single source of truth for this project: stack, design, SEO, component architecture, content, and quality standards.

## What This Project Is

Full redesign of lavellenetworks.com — India's largest SD-WAN enterprise networking company. The site must project royalty, authority, and technical dominance. Luxury B2B aesthetic, not startup-casual.

## Key References in This Repo

| File | Purpose |
|---|---|
| `architect.md` | Master specification — read first, always |
| `color_palette.md` | All color values — use these, nothing else |
| `frontend_design.md` | Frontend aesthetic guidelines |

## Stack (from architect.md)

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · Framer Motion · next/metadata SEO · next/font (Cormorant Garamond + DM Sans) · next/image · Vercel deployment

## Non-Negotiable Rules

1. TypeScript strict — zero `any`, zero type suppressions
2. Named exports only (except page.tsx / layout.tsx)
3. Tailwind only — no inline styles
4. All copy in `lib/content.ts` — never hardcode strings in JSX
5. `next/image` for every image — never raw `<img>`
6. Mobile-first responsive (375px → 768px → 1440px)
7. `prefers-reduced-motion` respected for all animations
8. No AI-filler words in copy ("robust", "seamless", "leverage", "comprehensive")

## Quality Gate

Before marking any task complete: `tsc --noEmit` passes · zero console errors · Lighthouse ≥ 90 Performance, ≥ 95 SEO, ≥ 90 Accessibility.

## Project Ownership

- **User** owns the redesign end-to-end: visual, structural, and technical implementation.
- **Marketing / Product team** will restructure the content later. Implication for code:
  - All copy lives in `src/lib/*-content.ts` files. Never hardcode strings in JSX.
  - Components are presentational; they receive content via props from page-level files.
  - Keep page files thin composition layers (import content, pass props, render sections).
  - If a new section needs data, add it to the appropriate `lib/*-content.ts` file rather than inlining.
- Do not ask the user to clarify copy — write it like a human expert, in line with `architect.md` tone rules, and they will revise later.
