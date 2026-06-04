# Lavelle Networks Website — Gemini Agent Instructions

## First Step: Read architect.md

Before any task, read `architect.md` in full. It is the authoritative specification for this entire project. Do not make any design or code decisions without consulting it first.

Secondary reference: `color_palette.md` for all color values.

## Project Overview

This is the complete redesign of lavellenetworks.com — India's largest enterprise SD-WAN and networking solutions company. The website must convey market dominance, royalty, and technical authority. The aesthetic target is luxury B2B — think premium financial institution meets world-class technology leader.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15, App Router, TypeScript strict |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Cormorant Garamond + DM Sans (via next/font) |
| SEO | next/metadata + JSON-LD structured data |
| Images | next/image (always) |
| Deployment | Vercel |

## File References

- `architect.md` — master specification (read first)
- `color_palette.md` — all approved color values
- `frontend_design.md` — frontend aesthetic philosophy

## Coding Standards

- TypeScript strict — no `any`, no `@ts-ignore`
- Named exports only (except page.tsx, layout.tsx files)
- Tailwind classes only — no inline styles, no CSS-in-JS
- All page copy defined in `lib/content.ts` — never hardcoded in JSX
- `next/image` for every image — never `<img>`
- Mobile-first responsive: base → `md:` → `lg:` breakpoints
- All Framer Motion variants defined as constants outside components
- `useReducedMotion()` hook guards all animations

## Quality Requirements

Before completing any task:
- `tsc --noEmit` must pass
- Zero browser console errors
- Lighthouse: Performance ≥ 90 · SEO ≥ 95 · Accessibility ≥ 90
- Renders correctly at 375px, 768px, and 1440px viewport widths
- No AI-filler language in copy ("robust", "seamless", "leverage", "empower", "revolutionize")

## Site Pages

Home · Products · Solutions · Industries · Technology · About · Partners · Resources · Contact

See `architect.md` section 4 for the complete page architecture and required home page section order.
