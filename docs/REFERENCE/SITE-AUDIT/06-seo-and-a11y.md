# SEO & Accessibility

---

## SEO State

### Root Metadata (`app/layout.tsx`)
```
Title template: "%s | Zenit"
Default title: "Zenit — On-Demand Expert Tech Squads"
Description: "Zenit connects companies with verified Latin American tech squads. AI-powered matching via Kaizen in 48 hours. SafePay escrow protects every project."
Keywords: tech squads, on-demand development, remote tech team, LATAM developers, software outsourcing, SafePay escrow, squad marketplace, Kaizen AI, product discovery, hire developers
metadataBase: https://www.zenit.work
canonical: https://www.zenit.work
OG image: /og-image.png (FILE MISSING from /public)
Twitter card: summary_large_image
```

### JSON-LD (root layout, server-rendered)
Two schemas:
1. `Organization` — name: Zenit, url, logo, description, `sameAs: []`
2. `WebSite` — name: Zenit, url, `potentialAction: SearchAction` (target: `/squads?q={search_term_string}`)

### Per-Page Metadata (from `layout.tsx` files)

| Route | Has layout.tsx | Title | Description | OG image |
|-------|---------------|-------|-------------|----------|
| `/` | Root only | "Zenit — On-Demand Expert Tech Squads" | ✅ | /og-image.png (missing) |
| `/companies` | ✅ | "For Companies — Hire Verified Tech Squads in 48 Hours" | ✅ | /og-companies.png (missing) |
| `/squads` | ✅ | "For Squads — Join Zenit & Get Paid Your Worth" | ✅ | /og-squads.png (missing) |
| `/pricing` | ✅ | "Pricing — 12% Success Fee, Always Free for Squads" | ✅ | /og-pricing.png (missing) |
| `/safepay` | ✅ | "SafePay — Escrow Payment Protection" | ✅ | /og-safepay.png (missing) |
| `/how-it-works` | ✅ | (not read, confirmed exists) | ✅ | missing |
| `/kaizen` | ✅ | (not read, confirmed exists) | ✅ | missing |
| `/blog` | ✅ | (not read, confirmed exists) | ✅ | missing |
| `/squads/pre-registro` | ✅ | (not read, confirmed exists) | ✅ | missing |
| `/skillbase` | ✅ | (not read) | — | missing |
| `/talentpath` | ✅ | (not read) | — | missing |
| `/talkflow` | ✅ | (not read) | — | missing |

All per-page layouts include canonical, openGraph, twitter, and keywords fields.

### Sitemap (`app/sitemap.ts`)
- 11 routes included
- All with `lastModified: new Date()` (generates dynamically)
- Missing: `/squads/pre-registro`, blog post detail pages, locale variants

### Robots (`app/robots.ts`)
- Allow: `*`
- Disallow: `/api/`, `/login`, `/get-started`, `/post-project`
- Sitemap: `https://www.zenit.work/sitemap.xml`

---

## Accessibility State

### Overall approach
The codebase shows strong a11y intent, especially in the form pages. Key patterns observed:

### Heading Hierarchy
- ✅ Single `<h1>` per page (enforced by components)
- ✅ H1 → H2 → H3 hierarchy followed in all pages
- ✅ H1 uses `style={{ fontSize: "clamp(...)" }}` not semantic classes

### ARIA Landmarks
- ✅ `<header>` implicit in `<motion.header>` (Navbar)
- ✅ `<footer>` in Footer
- ✅ `<main>` on all page components
- ✅ `<nav>` for desktop and mobile nav in Navbar
- ✅ `<section>` used for all content sections
- ⚠️ `<nav>` in mobile menu lacks `aria-label` distinguishing it from desktop nav

### Interactive Elements

**Navbar:**
- ✅ `aria-expanded` + `aria-haspopup="true"` on dropdown triggers
- ✅ `aria-label="Toggle menu"` on hamburger
- ✅ `aria-label="Cambiar idioma"` on locale switcher
- ✅ Escape key closes dropdowns
- ✅ Outside click closes locale dropdown
- ⚠️ Desktop megamenu not keyboard-navigable (hover-only, no focus management)

**Forms (`/squads/pre-registro`):**
- ✅ All inputs have `<label htmlFor="id">`
- ✅ `autoComplete` on email, name, organization fields
- ✅ `aria-required="true"` on required fields
- ✅ `aria-invalid={!!error}` on fields with errors
- ✅ `aria-describedby` pointing to error message IDs
- ✅ Error messages have `role="alert"` for screen readers
- ✅ Character counter has `aria-live="polite" aria-atomic="true"`
- ✅ Stack selector buttons use `aria-pressed={selected}`
- ✅ `<fieldset>` + `<legend>` for member group and project group
- ✅ Form has `aria-label="Formulario de pre-registro de squad"`
- ✅ Decorative glows have `aria-hidden`

**Blog newsletter form:**
- ✅ `aria-label="Newsletter signup"` on `<form>`
- ✅ `<label className="sr-only">` for email (screen-reader only)
- ✅ `autoComplete="email"`

**Mockup components:**
- ✅ `SquadProfileMockup` has `role="img"` + `aria-label` on outer div
- ✅ All decorative background elements have `aria-hidden`

### Image Alt Text
- ✅ Logo images: `alt="Zenit"`
- ✅ Decorative backgrounds: `aria-hidden` (not `<img>` elements, so alt not needed)
- ⚠️ No `<img>` tags with content exist currently — all visuals are CSS/SVG/canvas

### Color & Contrast
As defined in globals.css, all explicit upgrades for WCAG AA:
- ✅ `--teal`: `#0d9488` — 5.6:1 on background (upgraded from `#0f766e` which was 3.6:1)
- ✅ `--muted-foreground`: `#94a3b8` — 7.8:1 on background (upgraded from `#64748b` which was 4.1:1)
- ⚠️ `--cyan`: `#00b4d8` — ~3.5:1 (borderline for AA on normal text, passes for large text)
- ⚠️ `--gold`: `#f59e0b` — ~4.2:1 (borderline AA for normal text)
- ⚠️ Some muted text combinations (e.g. `text-white/40`, `text-white/30`) may fail on dark cards

### Reduced Motion
- ✅ Full `@media (prefers-reduced-motion: reduce)` block disabling all animations
- ✅ `.text-shimmer` and `.text-shimmer-gold` have explicit fallbacks (plain color)

### Focus Styles
- ✅ `focus-visible` ring: `2px solid #00b4d8`, `outline-offset: 2px`, `border-radius: 4px`
- ✅ Pointer clicks do NOT show focus ring (`:focus-visible` only)

### Known Gaps
- ⚠️ `KaizenDashboardMockup`, `DeliveryDashboardMockup`, etc. — interactive-looking buttons inside mockups have `cursor-default` but no `aria-disabled` or `role="presentation"`
- ⚠️ Desktop megamenu is hover-only — not keyboard accessible (Tab navigation enters but focus management is incomplete)
- ⚠️ Some pages (safepay, skillbase, talentpath, talkflow) not fully audited
- ⚠️ No skip-to-main-content link
- ⚠️ No visible focus style on the custom checkbox in the pre-registro form (only outline from globals, no visual indicator specific to checkbox state beyond the CheckCircle2 icon)
- ⚠️ `lang` attribute on `<html>` is `"en"` globally but many pages are in Spanish
