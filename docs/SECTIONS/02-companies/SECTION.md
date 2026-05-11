# 02 — For Companies

**File:** `app/companies/page.tsx`
**Route:** `/companies`
**Language:** Spanish (primary), English (some UI labels)
**Status:** ✅ Built
**Layout:** `<main>` + 7 sections

---

## Current State

Fully built Spanish-language page targeting companies. NeuralNoise hero with gold color. Contains a commission inconsistency: stats strip shows "7–12%" while the rest of the site uses 15% (standard) and 18% (AI-native). Primary CTA points to `/get-started` which is broken.

---

## Visual Structure

Full-width sections, `max-w-7xl` container, dark-only. Two-column layouts for SafePay callout and CTA sections.

---

## Sub-sections

### 1 — Hero
**Background:** NeuralNoise gold `[245, 158, 11]`, opacity 0.32, mixBlendMode: screen
- Eyebrow: gold pill + pulsing dot
- H1: 3-line shimmer-gold
- Body: single paragraph
- CTA primary → `/get-started` **(BROKEN)**
- CTA secondary → `/kaizen`

### 2 — Stats Strip
Border-top/bottom divider, 4-column grid:
- `48h` — "De conversación a primer match"
- `6` — "Pasos del pipeline de Kaizen"
- `7–12%` — "Comisión SafePay" ⚠️ **INCONSISTENCY** — should be 15%
- `100%` — "Criterios validados antes del pago"

### 3 — Benefits (6 cards, 3-col grid)
Eyebrow + H2 (shimmer-gold) + 6 feature cards:
1. Discovery antes del match (gold, ScanSearch)
2. SafePay valida resultados (cyan, ShieldCheck)
3. ZenitRank: badges que significan algo (teal, BadgeCheck)
4. Product Brain — memoria de tu producto (gold, BrainCircuit)
5. Vos elegís. Kaizen recomienda (cyan, UserCheck)
6. Humano en el loop en cada decisión (teal, Layers3)

### 4 — Pipeline (6 steps, 2-col grid)
Eyebrow + H2 (shimmer cyan) + numbered steps:
1. Discover (gold) — 4-min natural conversation
2. Assess Maturity (cyan) — routes based on tech stage
3. Generate Brief (teal) — full brief: stack, milestones, budget, squad profile
4. Match Squads (gold) — recommends by fit, 30-min call
5. Setup SafePay (cyan) — acceptance criteria, digital signature, escrow
6. Monitor Delivery (teal) — scope creep detection, escalation

### 5 — Comparison Table
Columns: Feature | Upwork / Agencias | Zenit
6 rows comparing: Discovery, Delivery validation, Payment protection, Squad reputation, Disputes, Time to first match

### 6 — SafePay Callout (2-col)
Left: H2 (shimmer-gold) + body + link to `/safepay`
Right: 4 checklist items with gold CheckCircle2

### 7 — CTA (full-width card)
H2 (shimmer-gold) + body + dual CTAs → `/get-started` (BROKEN) + `/pricing`

---

## Copy

See `copy-es.md` for all Spanish copy (current primary language).
See `copy-en.md` for English translations (TBD — page currently in Spanish only).
See `copy-pt.md` for Portuguese copy (TBD).

---

## Components Used

| Component | Import Path | Notes |
|-----------|-------------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | Gold `[245,158,11]`, opacity 0.32 |
| Lucide icons | `lucide-react` | ScanSearch, ShieldCheck, BadgeCheck, BrainCircuit, UserCheck, Layers3, CheckCircle2 |
| Framer Motion | `framer-motion` | whileInView animations on all sections |

See `components-used.md` for full details.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#080c0c` | Page background |
| `--accent` (gold) | `#f59e0b` | H1 shimmer, hero NeuralNoise, benefit cards #1/#4 |
| `--secondary` (cyan) | `#00b4d8` | Benefit cards #2/#5, pipeline steps #2/#5 |
| `--primary` (teal) | `#0d9488` | Benefit cards #3/#6, pipeline steps #3/#6 |
| H1 | `clamp(28px, 3.8vw, 54px)` | 3-line, shimmer-gold |
| H2 | `clamp(26px, 3vw, 42px)` | Per section |
| `.text-shimmer-gold` | CSS animation | H1, SafePay callout H2, CTA H2 |
| `.text-shimmer` (cyan) | CSS animation | Pipeline H2 |

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| H1 → H2 → H3 | ✅ |
| `<main>` landmark | ✅ |
| CTA aria-labels | ⚠️ Buttons with arrows may need labels |
| Decorative elements `aria-hidden` | ✅ (NeuralNoise) |
| `<html lang>` | ⚠️ Page is ES but `lang="en"` in root layout |
| Reduced motion | ✅ |

**Gaps:**
- `lang="en"` on `<html>` for a fully Spanish page — incorrect for AT
- Pipeline step numbers are decorative spans, not semantic list items

---

## Responsive

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (375px) | Hero single-col. Stats strip 2-col. Benefits 1-col. Pipeline 1-col. SafePay 1-col stacked. |
| Tablet (768px) | Benefits go 2-col. |
| Desktop (1440px) | Benefits 3-col. Pipeline 2-col. SafePay 2-col. |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | Primary CTA "Iniciar discovery" → `/get-started` — BROKEN |
| P0 | Stats strip: "7–12%" should be "15%" (standard) per CLAUDE.md + pricing page |
| P1 | `<html lang="en">` for Spanish page |
| P1 | No OG image at `/og-companies.png` |
| P2 | Page is Spanish-only, no i18n |

---

## Next Steps

- [ ] Fix CTA route from `/get-started` to working destination
- [ ] Fix "7–12%" → "15%" in stats strip
- [ ] Migrate copy to i18n dictionaries
- [ ] Generate `/og-companies.png`
- [ ] Add `lang="es"` per-route when i18n implemented
