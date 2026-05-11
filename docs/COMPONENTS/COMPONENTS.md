# Components Catalog

Complete catalog of all components in the Zenit codebase.
Source: `04-components.md` (SITE-AUDIT)

---

## Global Layout

### `components/Navbar.tsx`
**Type:** Client (`"use client"`)
**Used by:** `app/layout.tsx` (all pages)

| Sub-component | Purpose |
|--------------|---------|
| `LocaleSwitcher` | Globe icon + ES/PT/EN dropdown; detects locale from pathname; `aria-expanded`, `aria-haspopup`, `aria-label="Cambiar idioma"` |
| `FeaturedCard` | Card in megamenu; icon + label + description + color variant (cyan/gold/teal) |
| `MegaPanel` | 4-col dropdown; 2 featured cards + platform links + resource links + CTA bar; AnimatePresence |
| `NavDropdown` | Button + ChevronDown + MegaPanel; hover-open; Escape closes |
| `MobileAccordion` | Accordion item for mobile; AnimatePresence height animation; `aria-expanded` |

**Desktop nav items:** For Companies (dropdown) / For Squads (dropdown) / How It Works / Pricing / Blog
**Desktop CTAs:** LocaleSwitcher / "Log in" → `/login` (BROKEN) / "Get started" → `/get-started` (BROKEN)
**Mobile:** Hamburger toggle + locale pills + MobileAccordion + link grid

**Scroll behavior:** Transparent → `bg-[#080c0c]/85 backdrop-blur-2xl border-b` after 24px scroll

**Animations:**
- Entrance: `opacity: 0→1, y: -20→0`, 0.5s
- Megamenu: `opacity: 0→1, y: 8→0, scale: 0.98→1`, 0.18s
- Mobile menu: `height: 0→auto`, 0.22s

**A11y gaps:** Desktop megamenu is hover-only, not keyboard-navigable; mobile `<nav>` lacks `aria-label`

---

### `components/Footer.tsx`
**Type:** Server component
**Used by:** `app/layout.tsx`

4-col grid (1 brand + 3 link columns) + bottom bar.

**Brand column:** Logo SVG + tagline + "500+ squads active" live badge (pulsing cyan dot)

**Link columns:**
- Product: /squads, /companies, /how-it-works, /pricing
- Company: /blog, /about (BROKEN), /careers (BROKEN), /contact (BROKEN)
- Legal: /privacy (BROKEN), /terms (BROKEN), /safepay

**Bottom bar:** "© 2026 Zenit Technologies, Inc. All rights reserved." + "Built for the future of work."

---

## Providers

### `components/providers/SmoothScrollProvider.tsx`
**Type:** Client
**Library:** Lenis v1.3.23
Wraps entire app. Enables smooth scrolling globally.

### `components/providers/AOSProvider.tsx`
**Type:** Client
**Library:** AOS
Initializes AOS on mount. **Currently not active — no AOS classes used anywhere.**

---

## Section Components (Active — used by pages)

### `components/sections/HeroSection.tsx`
**Used by:** `app/page.tsx`
NeuralNoise (gold), badge row, H1, 4-line subheadline, 3 CTAs, trust strip.
Internal: `BackgroundGlows`, `GridOverlay`

### `components/sections/ValuePropSection.tsx`
**Used by:** `app/page.tsx`
2-col grid — For Companies (gold) + For Squads (teal) benefit cards.

### `components/sections/FlowSection.tsx`
**Used by:** `app/page.tsx`
2-col — TimelineMockup (left) + text (right).
Internal: `TimelineMockup` (3-step dark card)

### `components/sections/WhyZenitSection.tsx`
**Used by:** `app/page.tsx`
2-col — alternatives text (left) + ComparisonMatrix (right).
Internal: `ComparisonMatrix` (4×3 grid)

### `components/sections/AITeamsSection.tsx`
**Used by:** `app/page.tsx`
Centered text + AITimelineMockup.
Internal: `AITimelineMockup` (4-col Month 1–4 grid)

### `components/sections/TestimonialsSection.tsx`
**Used by:** `app/page.tsx`
3-col testimonial cards (SAR format). 3 personas: 🇦🇷 cyan / 🇲🇽 gold / 🇧🇷 teal.

### `components/sections/FinalCTASection.tsx`
**Used by:** `app/page.tsx`
3 audience cards + social proof strip. Complex glow background.

---

## Section Components (UNUSED — dead code)

These exist in `components/sections/` but are **NOT imported by any page**:

| Component | Notes |
|-----------|-------|
| `AIMaturitySection.tsx` | Purpose unclear |
| `AgenticPipelineSection.tsx` | Content inline in how-it-works |
| `BenefitsSection.tsx` | Benefits inline in pages |
| `DualAudienceSection.tsx` | Unused |
| `FAQSection.tsx` | FAQ inline in how-it-works + pricing |
| `FeaturedSquadsSection.tsx` | Unused |
| `GenUISection.tsx` | Content inline in how-it-works |
| `HeroCanvas.tsx` | Canvas handled by neural-noise.tsx |
| `HeroVisuals.tsx` | Unused |
| `HowItWorksSection.tsx` | HIW is a full page |
| `KaizenSection.tsx` | Kaizen is a full page |
| `PlatformFeatures.tsx` | Unused |
| `PlatformShowcase.tsx` | Unused |
| `PlatformWireframes.tsx` | Unused |
| `PreRegCTA.tsx` | Unused |
| `ProblemSolutionSection.tsx` | Unused |
| `SafePaySection.tsx` | SafePay is a full page |
| `StatsSection.tsx` | Stats inline in pages |
| `TheSolutionSection.tsx` | Unused |
| `TrustSignals.tsx` | Inline in HeroSection |
| `TrustStrip.tsx` | Unused |

**Count: 21 unused section components**

---

## Squad Components

### `components/squads/PreRegistroPage.tsx`
**Type:** Client
**Used by:** `/es/squads/pre-registro`, `/en/squads/pre-registro`, `/pt/squads/pre-registro`
**Props:** `{ locale: Locale }` (es | en | pt)
Uses `t(locale)` from `lib/i18n/preregistro.ts`. Opens `RegistroModal` on CTA click.

### `components/squads/RegistroModal.tsx`
**Type:** Client
**Used by:** `PreRegistroPage`
9-step conversational modal flow for squad registration.

### `components/squads/KaizenChat.tsx`
Exists. Not confirmed whether used in any current page.

---

## Shared Components

### `components/SectionHeader.tsx`
Reusable section header: eyebrow + H2 + optional sub.
**Not confirmed active** — most pages define headings inline.

---

## UI Components

### `components/ui/neural-noise.tsx`
**Type:** Client (WebGL)
**Props:** `color: [R,G,B]` (0-255 scale), `opacity: number`, `speed: number`, `intensity: number`, `className`, `style`
**Implementation:** Custom WebGL shader with 15-iteration GLSL loop for organic neural noise. Mouse-reactive.

**Usage per page:**

| Page | Color | Opacity |
|------|-------|---------|
| Homepage hero | gold `[0.96, 0.62, 0.04]` (0-1 scale) | 0.80 |
| /companies | gold `[245,158,11]` (0-255 scale) | 0.32 |
| /squads | teal `[15,118,110]` | 0.40 |
| /kaizen | teal | 0.38 |
| /how-it-works | teal | 0.30 |
| /safepay | gold | unconfirmed |
| /pricing | teal | 0.32 |
| /blog | unconfirmed | unconfirmed |
| /skillbase | unconfirmed | unconfirmed |
| /talentpath | unconfirmed | unconfirmed |
| /talkflow | unconfirmed | unconfirmed |

### `components/ui/GradientButton.tsx`
Gradient border button with `.gb-spin` animation (conic-gradient rotation 3.5s).

### `components/ui/GBCard.tsx`
Gradient border card component.

### `components/ui/SpotlightCard.tsx`
Card with spotlight/hover glow effect.

### `components/ui/button.tsx`
shadcn button primitive. Variants: default, secondary, outline, ghost, link.

---

## i18n

### `lib/i18n/preregistro.ts`
Provides `t(locale: Locale)` → all UI strings for pre-registro page in ES/EN/PT.
Only i18n file in the codebase. Pattern for future pages to follow.

---

## Motion Variants (`lib/motionVariants.ts`)

All variants use ease `[0.22, 1, 0.36, 1]`.

| Variant | Effect | Duration | Typical use |
|---------|--------|----------|-------------|
| `fadeInUp` | y: 32→0, opacity 0→1 | 0.6s | Text blocks, hero content |
| `staggerContainer` | children delay 0.12s, self delay 0.08s | — | Grid parents |
| `scaleIn` | scale: 0.92→1, opacity 0→1 | 0.5s | Cards, modals, badges |
| `slideInRight` | x: 48→0, opacity 0→1 | 0.6s | Hero right panels |
| `slideInLeft` | x: -48→0, opacity 0→1 | 0.6s | Hero left panels |
| `fadeIn` | opacity 0→1 | 0.4s | Overlays, dividers |
| `defaultViewport` | `{ once: true, margin: "-80px" }` | — | All `whileInView` |
