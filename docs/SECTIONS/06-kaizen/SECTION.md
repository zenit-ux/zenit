# 06 — Kaizen AI

**File:** `app/kaizen/page.tsx`
**Route:** `/kaizen`
**Language:** Spanish (hero + features) + English (mockup labels, CTA)
**Status:** ✅ Built
**Layout:** 7 sections + hero

---

## Current State

Deep-dive product page for Kaizen. Features 5 interactive mockups (Discovery, ProductBrain, Dashboard, PrecisionMatch, DeliveryDashboard). Mix of Spanish and English. All CTAs → `/get-started` (broken).

---

## Sub-sections

### 1 — Hero (2-col)
- NeuralNoise: teal, opacity 0.38 + dot-grid overlay
- Eyebrow: "Kaizen AI" + "AI discovery. Human delivery."
- H1: "Kaizen mapea tu / madurez técnica." (text-shimmer cyan)
- Body: "IA que entiende qué puede resolver sola y cuándo necesita traer el squad correcto."
- CTAs: "Start your brief" → `/get-started` (BROKEN) + "See how it works" → `#how-it-works`
- Trust pills: "No intake forms" / "48h to first match" / "2–3 curated squads"
- Right: `KaizenDiscoveryMockup` — chat UI, logistics SaaS, Brief Intelligence 78%

### 2 — Brief Intelligence (2-col)
Left: "You describe the problem. Kaizen understands the solution."
Right: `ProductBrainMockup` — 4-quadrant (Product/Technical/Business/Risk) + 94% quality + 48h ETA

### 3 — Proactive Dashboard (centered, border-y)
H2: "Todo tu ecosistema. / Kaizen lo monitorea, vos decidís." (shimmer cyan)
`KaizenDashboardMockup` — sidebar + 2 active projects + SafePay stats + 4 AI alerts
Tags: Proactive alerts / Gen UI integrado / Human-in-the-loop

### 4 — Precision Matching (2-col, reversed)
Left: `PrecisionMatchMockup` — 3 squads (98%, 91%, 84%) with reasoning
Right: "Not a shortlist. / A recommendation." (shimmer cyan)
Bullets: 94% on-time / AI reasoning per recommendation / re-match at zero cost

### 5 — Delivery Intelligence (2-col)
Left: "Kaizen doesn't disappear / after the match." (shimmer-gold)
Right: `DeliveryDashboardMockup` — 65% progress, 4 milestones, scope creep +18% alert

### 6 — AI Flywheel (full-width card)
Eyebrow: "Continuous Learning" (cyan pill)
H2: "Every project makes the / next match smarter." (shimmer cyan)
Stats: 94% on-time / 500+ squads in model / 48h avg match

### 7 — CTA
H2: "Your brief. 48 hours. A squad." (shimmer-gold on "48 hours.")
CTA: "Start with Kaizen" → `/get-started` (BROKEN)

---

## Copy

See `copy-es.md` / `copy-en.md` / `copy-pt.md`.

---

## Components Used

| Component | Notes |
|-----------|-------|
| `NeuralNoise` | Teal, opacity 0.38 + dot-grid CSS overlay |
| `KaizenDiscoveryMockup` | Inline — logistics SaaS chat UI |
| `ProductBrainMockup` | Inline — 4-quadrant analysis |
| `KaizenDashboardMockup` | Inline — full app mockup with sidebar |
| `PrecisionMatchMockup` | Inline — 3 squad cards with match % |
| `DeliveryDashboardMockup` | Inline — project progress + scope creep alert |

See `components-used.md` for full list.

---

## Design Tokens

- H1: clamp(28px, 3.8vw, 54px), text-shimmer cyan
- Dashboard mockup: sidebar dark card, KPI tiles teal/cyan/gold
- Alert badges: amber/warning

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| Mockup buttons `aria-disabled` | ⚠️ Missing on all 5 mockups |
| `<html lang>` | ⚠️ Mixed ES/EN |
| Trust pills semantics | ⚠️ Decorative elements need review |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | CTA → `/get-started` BROKEN |
| P1 | No OG image at `/og-kaizen.png` |
| P1 | Mixed ES/EN without i18n |
| P2 | All 5 dashboard mockups have interactive-looking buttons with no `aria-disabled` |

---

## Next Steps

- [ ] Fix CTAs
- [ ] Add `aria-disabled` or `role="presentation"` to all mockup buttons
- [ ] Generate OG image
- [ ] Migrate to i18n
