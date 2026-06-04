# Lavelle Networks — Website Architect

> **You are the lead architect and designer for this project. Read every word of this document before writing a single line of code. This file is the single source of truth.**

---

## 1. Project Identity

- **Company**: Lavelle Networks — India's largest SD-WAN and enterprise networking solutions provider
- **Founded**: Bangalore (named after Lavelle Road — origin story worth telling)
- **Market claim**: "Every 3 out of 5 Enterprise Networks in India runs on Lavelle SD-WAN"
- **Tone**: Royal, authoritative, confident. Think: a world-class financial institution meets a global tech leader. NOT startup-casual. NOT AI-generic. NOT corporate-bland.
- **The one thing visitors must feel**: *This is the company that owns Indian enterprise networking. Full stop.*

---

## 2. Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router, TypeScript) | Performance, SEO, scalability |
| Styling | Tailwind CSS v4 | Utility-first, no class bloat |
| Animation | Framer Motion | Production-grade motion |
| Icons | Lucide React | Clean, consistent |
| SEO | `next/metadata` + JSON-LD | Native, no extra lib |
| Fonts | `next/font/google` | Zero layout shift |
| Images | `next/image` | Optimized, WebP auto |
| Deployment | Vercel | Best-in-class for Next.js |
| Content | MDX (blog/resources) | No CMS dependency to start |

---

## 3. Design System

### Typography
- **Display (H1–H2)**: `Montserrat` weight 500 — refined, commanding without heaviness; royal presence
- **UI / H3–H4**: `Montserrat` weight 500 — consistent family, clean hierarchy
- **Body**: `DM Sans` weight 400 — 17px, line-height 1.75, high readability
- **NEVER USE**: Inter, Roboto, Arial, Space Grotesk, Exo 2, Cormorant Garamond, or any system font

### Color Palette
See `color_palette.md` for full values. Key anchors:
- **Primary**: `#0078D4` (Brand Royal Blue)
- **Deep Navy**: `#003F72` (stats bands, dark sections)
- **Page BG**: `#FFFFFF` / `#F7FAFD` (alternating sections)
- **Heading text**: `#1A1A1A`
- **Body text**: `#4A4A4A`
- **Accent hover**: `#005A9E`

### Motion Rules
- Page load: staggered fade-up, 60ms delay between elements
- Scroll entrance: `y: 24 → 0`, `opacity: 0 → 1`, duration 0.5s
- Hover on cards: `scale(1.02)`, `box-shadow` lift, 200ms ease
- Stats counters: animated count-up on scroll entry
- NEVER: bounce, elastic, or full-page transition effects
- ALWAYS: respect `prefers-reduced-motion` — wrap all motion in `useReducedMotion()`

### Spatial Composition
- Hero: 100vh, deep navy background with blue gradient glow, centered content
- Section rhythm: white → off-white → navy (repeat)
- Stats band: full-width `#003F72`, white text, 4-column grid
- Generous padding — minimum `py-24` on desktop sections
- Cards: soft shadow, `rounded-xl`, `border border-[#C8D6E5]/40`

---

## 4. Site Architecture

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero → Stats → Solutions → Client Logos → Products → Awards → CTA |
| `/products` | Products | Deep-dive on all 4 products with specs |
| `/solutions` | Solutions | SD-WAN, ScaleAOn, SD-NET, Hybrid WAN |
| `/industries` | Industries | 8 verticals with use cases |
| `/technology` | Technology | Architecture, differentiators, how it works |
| `/about` | About | Company story, mission, culture, team |
| `/partners` | Partners | Partner program, become a partner |
| `/resources` | Resources | Blog, whitepapers, case studies, videos |
| `/contact` | Contact | Form + sales CTA + office info |

### Home Page Section Order (non-negotiable):
1. **Hero** — Bold headline, sub-headline, two CTAs, background video or animated gradient
2. **Stats Bar** — 4 key numbers: nodes deployed, enterprise clients, years in market, uptime
3. **Solutions Overview** — 4 cards: SD-WAN / ScaleAOn / SD-NET / Hybrid WAN
4. **Client Logos** — Logo wall, 10+ enterprise names, "Trusted by India's largest enterprises"
5. **Products Showcase** — Feature cards for each of the 4 products
6. **Industries** — Grid of 8 verticals with icons
7. **Testimonials** — 2–3 client quotes with metrics ("40% cost reduction")
8. **Awards & Recognition** — ISO 27001, NASSCOM Emerge 50, CIO Choice 2023, and more
9. **CTA Banner** — Full-width navy band: "Ready to modernize your network?" + two CTAs

---

## 5. Content Reference (from current site)

### Key Stats (use these exact figures)
- "Every 3 out of 5 Enterprise Networks in India Runs on Lavelle SD-WAN"
- "Asia's largest SD-WAN deployment in banking — 2019"
- "Deploy 1,000 nodes in 2 weeks"
- "Up to 40% reduction in hardware/software support costs"
- "Fastest-growing SD-WAN company in India"

### Flagship Clients (logo wall — in order of prestige)
Axis Bank · HDFC Bank · ICICI Bank · SBI · Tata · Mahindra · Godrej · Aditya Birla · TVS · Swiggy

### Products
| Product | Core pitch |
|---|---|
| CloudStation Controller | Intent-driven SDN policies. One dashboard, full network intelligence. |
| CloudStation Insights | Deep flow analysis. Dynamic path selection. See everything. |
| CloudPort Edge | Physical, virtual, or cloud — 4G to Fiber to E1. Any edge, anywhere. |
| CloudPort Gateway | Data center and cloud aggregation. Multi-vendor interoperability. |

### Industries Served
BFSI · Logistics & Supply Chain · IT Services · Retail · Healthcare · Education · Manufacturing · Public Sector (PSUs)

### Certifications & Recognition
ISO 27001:2013 · NASSCOM Emerge 50 · CIO Choice 2023 · IAA Vendor of Note

---

## 6. Feature Blueprint

### From Arista (arista.com)
- **Mega-menu**: Top nav expands into visual grid with product images and category descriptions
- **Rotating hero banners**: Framer Motion carousel, max 3 slides, auto-advance 6s
- **Contextual CTAs**: Match CTA text to content type — "Watch Demo" / "Read Report" / "Contact Sales" / "Download Datasheet"
- **Card-based resources section**: Thumbnail + category tag + headline + excerpt
- **Trust anchors**: Industry analyst recognition displayed prominently above fold
- **Video integration**: Embed product demo videos in product pages

### From Forward Networks (forwardnetworks.com)
- **Power headline format**: Short, 4–6 word command — e.g. "Scale Fast. Break Nothing." Adapt for Lavelle.
- **Progressive trust architecture**: Hero → Stats → Client logos → Testimonials with metrics → Awards
- **Quantified testimonials**: "80% MTTR reduction" — every quote must have a number
- **Vendor/integration grid**: Show all compatible vendors and partners in a visual grid
- **Awards wall**: "25+ Industry Awards" callout with grid of badges
- **Persistent demo CTA**: "Request a Demo" button visible in header and at end of every major section

---

## 7. SEO Strategy

### Primary Keywords (target these)
- `SD-WAN India` · `SD-WAN solutions India` · `enterprise networking India`
- `SD-WAN provider India` · `network solutions India` · `managed SD-WAN`
- `SD-WAN for banking India` · `enterprise WAN India`

### Technical SEO (implement on every page)
- Unique `title` (60 chars max) + `description` (155 chars max) via `generateMetadata()`
- OpenGraph image per page — `1200×630px`, branded, text overlay
- JSON-LD: `Organization` on every page, `Product` on product pages, `FAQPage` on resource pages
- `src/app/sitemap.ts` — auto-generated from all routes
- `src/app/robots.ts` — allow all, point to sitemap
- Canonical URLs on all pages
- All images: descriptive `alt` text, served as WebP via `next/image`

### Performance (required for SEO ranking)
- LCP < 2.5s: hero image preloaded, no render-blocking resources
- CLS < 0.1: all images have explicit dimensions, no font flash
- INP < 200ms: no heavy JS on critical path

### Content SEO
- H1 on every page contains primary keyword for that page
- Every product/solution page: minimum 600 words of original copy
- Resources/blog: target long-tail — "how does SD-WAN work", "SD-WAN vs MPLS India"
- Internal links: each page links to at least 3 other pages naturally

---

## 8. Component Architecture

```
src/
  app/                        # Next.js App Router
    (pages)/                  # Route groups
    layout.tsx                # Root layout — fonts, metadata, header/footer
    sitemap.ts
    robots.ts
  components/
    ui/                       # Primitives: Button, Card, Badge, Input, Tag
    sections/                 # Page sections: Hero, StatsBar, ClientLogos, etc.
    layout/                   # Header, Footer, MegaMenu, MobileNav
  lib/
    content.ts                # All copy/strings — never hardcode in JSX
    constants.ts              # Site config, nav structure, contact info
    types.ts                  # Shared TypeScript types
  styles/
    globals.css               # Tailwind base + CSS variables
  content/                    # MDX files for blog posts and case studies
  public/
    images/                   # Optimized source images
    logos/                    # Client logos as SVGs
    og/                       # OpenGraph images per page
```

### Code Rules (non-negotiable)
- TypeScript strict mode — zero `any` — zero type suppressions
- Named exports only — no default exports except `page.tsx` and `layout.tsx`
- Tailwind only — no inline styles, no `style={{}}`, no `styled-components`
- All Framer Motion `variants` defined as constants outside the component
- All copy lives in `lib/content.ts` or passed as props — never hardcoded in JSX
- Mobile-first: always write `base` styles first, then `md:`, `lg:`
- `next/image` for every image, always — never `<img>`

---

## 9. Anti-Patterns (Never Do These)

- No AI-aesthetic words in copy: "robust", "seamless", "leverage", "comprehensive", "cutting-edge", "state-of-the-art", "empower", "revolutionize"
- No purple gradients, no generic hero stock photos, no floating 3D orbs
- No cookie-cutter layout: hero → three boxes → testimonials (with zero personality)
- No heavy UI component libraries (no shadcn mass-import, no MUI, no Chakra)
- No animations that distract from content — motion serves communication, not decoration
- No placeholder lorem ipsum committed to the repo — every section has real copy

---

## 10. Quality Gates

Every component is "done" only when ALL pass:

- [ ] Renders correctly at 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] Zero TypeScript errors (`tsc --noEmit` passes)
- [ ] Zero console errors in browser
- [ ] Lighthouse: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90
- [ ] `prefers-reduced-motion` respected — all animations conditional
- [ ] All images have descriptive `alt` text
- [ ] All interactive elements keyboard-navigable
- [ ] Copy reviewed: no AI filler phrases, reads as human expert writing
