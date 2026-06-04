# Lavelle Networks Website — Claude Code Instructions

## Critical: Read architect.md First

**Before every task, read `architect.md` in full.** That file is the authoritative specification for this project — stack, design system, page architecture, SEO strategy, component conventions, and quality gates. Do not write a single line of code without having read it.

## Project Context

This is the full redesign of lavellenetworks.com — India's largest SD-WAN enterprise networking company. The website must convey royalty, authority, and market dominance. Every design and code decision must reflect that.

## Workflow Rules

- Always check `architect.md` before proposing or implementing anything
- Always check `color_palette.md` before choosing any color
- When building components, follow the directory structure in `architect.md` section 8 exactly
- When writing copy, follow the tone and anti-patterns in sections 1 and 9
- Run `tsc --noEmit` before marking any task done
- Every page must pass the quality gates in section 10

## Code Style

- TypeScript strict — no `any`
- Named exports only (except `page.tsx`, `layout.tsx`)
- Tailwind utility classes only — no inline styles
- `next/image` for every image
- Framer Motion variants defined outside components
- All copy in `lib/content.ts`, not hardcoded in JSX

## What "Done" Means

A feature is done when: it renders at 375px, 768px, and 1440px without breaking; TypeScript passes; Lighthouse scores ≥ 90 Performance / ≥ 95 SEO / ≥ 90 Accessibility; and the copy sounds like a human expert, not an AI.
