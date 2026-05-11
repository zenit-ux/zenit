# Colors

All colors defined in `app/globals.css` via `@theme inline` and `:root`.
Source: `05-design-system.md` (SITE-AUDIT)

---

## CSS Custom Properties (`:root`)

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `#080c0c` | Page background |
| `--foreground` | `#e8f4f4` | Default text |
| `--card` | `#0d1313` | Card backgrounds |
| `--card-foreground` | `#e8f4f4` | Card text |
| `--popover` | `#0d1313` | Popover background |
| `--primary` | `#0d9488` | Primary — teal |
| `--primary-foreground` | `#e8f4f4` | Text on primary |
| `--secondary` | `#00b4d8` | Secondary — cyan |
| `--secondary-foreground` | `#080c0c` | Text on secondary |
| `--accent` | `#f59e0b` | Accent — gold |
| `--accent-foreground` | `#080c0c` | Text on accent |
| `--muted` | `#111919` | Muted backgrounds |
| `--muted-foreground` | `#94a3b8` | Muted text |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/destructive |
| `--border` | `rgba(255,255,255,0.06)` | Default border |
| `--input` | `rgba(255,255,255,0.08)` | Input border |
| `--ring` | `#00b4d8` | Focus ring (cyan) |
| `--radius` | `0.625rem` | Base border radius |

---

## Brand Direct Utilities (`@theme inline`)

| Class | Hex | Usage |
|-------|-----|-------|
| `text-teal` / `bg-teal` | `#0d9488` | Squad elements, teal accents |
| `text-cyan` / `bg-cyan` | `#00b4d8` | Secondary CTA, focus ring, badges |
| `text-gold` / `bg-gold` | `#f59e0b` | Company elements, gold accents |
| `bg-surface` | `#0d1313` | Card surfaces |
| `bg-surface-2` | `#111919` | Elevated surfaces, muted bg |

---

## WCAG Contrast Ratios (vs `#080c0c` background)

| Color | Hex | Ratio | AA Normal Text | AA Large Text |
|-------|-----|-------|---------------|--------------|
| `--primary` teal | `#0d9488` | 5.6:1 | ✅ Pass | ✅ Pass |
| `--muted-foreground` | `#94a3b8` | 7.8:1 | ✅ Pass | ✅ Pass |
| `--foreground` | `#e8f4f4` | ~16:1 | ✅ Pass | ✅ Pass |
| `--secondary` cyan | `#00b4d8` | ~3.5:1 | ⚠️ Fail (needs 4.5:1) | ✅ Pass (needs 3:1) |
| `--accent` gold | `#f59e0b` | ~4.2:1 | ⚠️ Borderline (4.5:1 req) | ✅ Pass |

**Previous teal (before upgrade):** `#0f766e` was 3.6:1 — explicitly upgraded to `#0d9488` for WCAG AA compliance.
**Previous muted (before upgrade):** `#64748b` was 4.1:1 — explicitly upgraded to `#94a3b8` for WCAG AA compliance.

---

## Semantic Color Usage

### Gold (`#f59e0b`)
- H1 shimmer (`.text-shimmer-gold`) on homepage, companies, flow section
- "For Companies" cards, badges, and icons
- AI Teams section
- FinalCTA H2
- ZenitRank ✓ Verificado badge
- SafePay escrow H2
- NeuralNoise on homepage + companies + safepay

### Teal (`#0d9488`)
- "For Squads" cards, badges, and Check icons
- Primary button borders and accents
- NeuralNoise on squads + kaizen + how-it-works
- ZenitRank ★ Confiable badge
- Feature cards: benefit #3, #6 on companies/squads pages
- Section background gradients (right side)

### Cyan (`#00b4d8`)
- "Start Discovery" badges in hero
- H2 shimmer (`.text-shimmer`) on testimonials, AI section, squads pages
- Focus ring (`--ring`)
- ZenitRank ◆ Validado + ★★ Elite badges
- FlowSection timeline Step 01
- Kaizen H1 shimmer

---

## Dark Surfaces

| Name | Value | Usage |
|------|-------|-------|
| Page background | `#080c0c` | Root background |
| Card surface | `#0d1313` | Most card backgrounds |
| Muted surface | `#111919` | Elevated backgrounds, `bg-surface-2` |
| Deep dark | `#050f0f` | TimelineMockup, ComparisonMatrix internals |
| Hero dark | `#0F0F0F` | HeroSection specific background |
| FinalCTA dark | `#070b0b` | FinalCTASection |

---

## Text Opacity Patterns

Used throughout in cards and overlays (potential a11y issues):
- `text-white/40` — decorative muted text in cards (⚠️ may fail AA)
- `text-white/30` — very muted annotations (⚠️ likely fails AA)
- `text-white/25` — near-invisible context text (⚠️ fails AA)
- `text-white/70` — secondary body text — `rgba(255,255,255,0.70)` ≈ 10:1 on dark bg ✅

---

## Dark Mode

**Always dark.** `<html class="dark" style="color-scheme: dark">` is hardcoded in `RootLayout`. No light mode exists. The `@custom-variant dark` is defined but not toggled by user preference — it's permanent.

---

## Focus + Selection

```css
/* Focus ring — keyboard only */
a:focus-visible, button:focus-visible, input:focus-visible
  outline: 2px solid #00b4d8
  outline-offset: 2px
  border-radius: 4px

/* Text selection */
::selection
  background: rgba(0,180,216,0.22)
  color: #fff
```
