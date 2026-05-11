# 01 — Homepage

**File:** `app/page.tsx`
**Route:** `/`
**Language:** English (primary), Spanish mixed in badge copy
**Status:** ✅ Built
**Sections:** 7

---

## Current State

The homepage is fully built with 7 sections using primarily English copy. It serves both Companies and Squads audiences. NeuralNoise WebGL effect anchors the hero. All CTAs resolve to either real routes or broken ones (see Known Issues). No i18n implementation — single-language EN with some Spanish badge text.

---

## Visual Structure

Full-width, single-column page. Each section uses `max-w-7xl` container with `px-4 sm:px-6 lg:px-8`. Dark-only (#080c0c background).

---

## Sub-sections

### 1 — HeroSection
**File:** `components/sections/HeroSection.tsx`
Layout: Centered, full-viewport-height
- Badge row (2 pills: cyan + gold)
- H1 with shimmer-gold accent on second line
- 4-line subheadline
- 3 CTAs (primary white, secondary cyan-border, tertiary teal text)
- Trust strip (muted, 3 stats)
- Background: NeuralNoise WebGL (gold) + 3 radial glows + grid SVG + bottom fade

### 2 — ValuePropSection
**File:** `components/sections/ValuePropSection.tsx`
Layout: 2-column grid (lg), 1-column (mobile)
- Left card: "For Companies" (gold badge, 5 benefit rows, gold Check icons)
- Right card: "For Squads" (teal badge, 5 benefit rows, teal Check icons)
- Background: radial gradient teal/cyan

### 3 — FlowSection
**File:** `components/sections/FlowSection.tsx`
Layout: 2-column (lg), stacked (mobile) — mockup left, text right
- Left: `TimelineMockup` — 3-step dark card (#050f0f) with outcomes + footer stat
- Right: H2 + body + link to `/how-it-works`
- Background: teal glow right + teal blur orb left

### 4 — WhyZenitSection
**File:** `components/sections/WhyZenitSection.tsx`
Layout: 2-column (lg), stacked (mobile) — text left, matrix right
- Left: H2 + 3 competitor comparison cards + Zenit advantages box (teal border)
- Right: `ComparisonMatrix` — 4×3 grid (Velocidad/Calidad/Costo/Flexibilidad × Hiring/Upwork/Zenit)
- Background: gold glow left + gold blur orb right

### 5 — AITeamsSection
**File:** `components/sections/AITeamsSection.tsx`
Layout: Centered text top, full-width mockup bottom
- Badge: "For AI Teams" gold pill
- H2 + 3 alternative comparison cards (red-bordered)
- Zenit AI-native path box (gold border)
- `AITimelineMockup`: 4-column Month 1–4 grid
- **CTA links to `/ai-migration` — BROKEN**

### 6 — TestimonialsSection
**File:** `components/sections/TestimonialsSection.tsx`
Layout: 3-column card grid (lg), 1-column (mobile)
- Header: eyebrow + H2
- 3 testimonial cards (SAR format: Situation/Action/Result)
- Cards: cyan (🇦🇷), gold (🇲🇽), teal (🇧🇷)

### 7 — FinalCTASection
**File:** `components/sections/FinalCTASection.tsx`
Layout: Centered, full-width
- Eyebrow pill + H2 + body
- 3 audience cards (Companies/Squads/AI Teams)
- Social proof strip: 4 stats
- Background: #070b0b + complex glow system + grid-pattern + corner accent lines
- **"For AI Teams" card links to `/ai-migration` — BROKEN**

---

## Copy

See `copy-en.md` for all English copy.
See `copy-es.md` for Spanish copy (mostly TBD — homepage is EN-primary).
See `copy-pt.md` for Portuguese copy (all TBD).

**Key copy:**
- H1: "The modern way to / scale engineering teams."
- Subheadline: "Kaizen discovers what you actually need. / Zenit matches vetted squads that fit your stack. / You deploy production-ready teams in 2 weeks instead of 6 months. / 4.8★ · 15% cost · Zero long-term contracts."
- Primary CTA: "Start Discovery →"

---

## Components Used

| Component | Import Path | Notes |
|-----------|-------------|-------|
| `HeroSection` | `components/sections/HeroSection.tsx` | Includes internal `BackgroundGlows`, `GridOverlay` |
| `ValuePropSection` | `components/sections/ValuePropSection.tsx` | — |
| `FlowSection` | `components/sections/FlowSection.tsx` | Includes internal `TimelineMockup` |
| `WhyZenitSection` | `components/sections/WhyZenitSection.tsx` | Includes internal `ComparisonMatrix` |
| `AITeamsSection` | `components/sections/AITeamsSection.tsx` | Includes internal `AITimelineMockup` |
| `TestimonialsSection` | `components/sections/TestimonialsSection.tsx` | — |
| `FinalCTASection` | `components/sections/FinalCTASection.tsx` | — |
| `NeuralNoise` | `components/ui/neural-noise.tsx` | WebGL, gold `[0.96, 0.62, 0.04]`, opacity 0.80 |
| `Navbar` | `components/Navbar.tsx` | Global layout |
| `Footer` | `components/Footer.tsx` | Global layout |

See `components-used.md` for full details with props.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#080c0c` | Page background |
| `--primary` (teal) | `#0d9488` | Squad card borders, Check icons |
| `--secondary` (cyan) | `#00b4d8` | Hero badge, testimonial header |
| `--accent` (gold) | `#f59e0b` | H1 shimmer, company card, AI section |
| H1 typography | `clamp(28px, 3.8vw, 54px)` | `font-display` (Plus Jakarta Sans) |
| H2 typography | `clamp(26px, 3vw, 42px)` | Per section variant |
| Body | `font-sans text-base` | Inter, `#94a3b8` muted |
| NeuralNoise color | `[0.96, 0.62, 0.04]` (gold) | opacity 0.80, mixBlendMode: screen |
| Section bg: Hero | `#0F0F0F` | + WebGL overlay |
| Section bg: FinalCTA | `#070b0b` | + glow system |
| Card dark bg | `#050f0f` | TimelineMockup, ComparisonMatrix |

**CSS Animations used:**
- `.text-shimmer-gold` — H1 "scale engineering teams.", FlowSection H2, WhyZenitSection H2, FinalCTA H2
- `.text-shimmer` (cyan) — TestimonialsSection H2, AITeamsSection H2
- `animate-breathe` — badge pulsing dot (Hero, FinalCTA eyebrow)
- `gradient-border-teal` — Zenit advantages box

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| H1 → H2 → H3 hierarchy | ✅ |
| CTA `aria-label` where needed | ✅ |
| Decorative elements `aria-hidden` | ✅ |
| Color contrast (teal text) | ✅ 5.6:1 |
| Color contrast (cyan text) | ⚠️ ~3.5:1 (large text only) |
| Color contrast (gold text) | ⚠️ ~4.2:1 (borderline AA) |
| Reduced motion | ✅ Full `prefers-reduced-motion` support |
| Focus styles | ✅ `focus-visible` ring: 2px solid #00b4d8 |

**Gaps:**
- Testimonial avatar initials circles have no `aria-label`
- AITimelineMockup interactive-looking month cards have no `role="presentation"`
- ComparisonMatrix icons (✓/—/✕) are visual-only with no screen-reader text

---

## Responsive

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (375px) | All sections single-column. Hero centered. ValueProp cards stacked. FlowSection: text first, then mockup. WhyZenitSection: text first, matrix below. AITimeline: scrollable or stacked. |
| Tablet (768px) | ValueProp goes 2-col (md:grid-cols-2). Most others still single. |
| Desktop (1440px) | Full 2-col layout in FlowSection, WhyZenitSection. Testimonials 3-col. AITimeline 4-col. |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | `/ai-migration` linked from `AITeamsSection` CTA and `FinalCTASection` "For AI Teams" card — both 404 |
| P0 | Hero trust line: "15+ squads" inconsistent with "500+" used in FinalCTA stats + Footer |
| P0 | Badge copy: "Kaizen AI · Matching Inteligente" — Spanish in English page (intentional mixed or oversight?) |
| P1 | ComparisonMatrix rows labeled in Spanish (Velocidad, Calidad, Costo, Flexibilidad) while page is EN |
| P1 | No OG image at `/og-image.png` — social previews broken |
| P2 | AOS provider initialized but not used |

---

## Next Steps (for implementation)

- [ ] Fix `/ai-migration` — create page or redirect to `/how-it-works#ai`
- [ ] Fix hero trust line: change "15+ squads" to "500+ squads"
- [ ] Migrate all copy to i18n dictionaries (EN/ES/PT)
- [ ] Add `role="presentation"` to mockup elements inside `AITimelineMockup`
- [ ] Add `aria-label` to testimonial avatar initials
- [ ] Generate `/og-image.png` and add to `/public`
- [ ] Decide: keep Spanish ComparisonMatrix labels or translate to EN for consistency
