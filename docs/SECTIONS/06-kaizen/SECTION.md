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

## Copy — English

Route: `/kaizen`
Language: English (mockup labels, CTA section — already EN in code)

### Hero (EN translation)

- Eyebrow: "Kaizen AI · AI-Powered Discovery"
- H1: "Kaizen maps your / technical maturity."
- Body: "AI that understands what it can solve alone — and when it needs to bring the right squad."
- CTA: "Start your brief →" / "See how it works"
- Trust: "No intake forms · 48h to first match · 2–3 curated squads"

### Section 2 — Brief Intelligence
- "You describe the problem. Kaizen understands the solution."

### Section 3 — Precision Matching
- "Not a shortlist. / A recommendation."
- "94% on-time delivery across matched projects"
- "AI reasoning per recommendation — not just keyword matching"
- "Re-match at zero cost if the first doesn't fit"

### Section 4 — Delivery Intelligence
- "Kaizen doesn't disappear after the match."

### Section 5 — AI Flywheel
- Eyebrow: "Continuous Learning"
- H2: "Every project makes the next match smarter."
- Stats: 94% on-time / 500+ squads in model / 48h avg match time

### Section 6 — CTA
- H2: "Your brief. 48 hours. A squad."
- CTA: "Start with Kaizen →"

---

## Copy — Spanish (Español)

Route: `/kaizen`
Language: Spanish (primary for hero and features)

### Hero

- Eyebrow: "Kaizen · AI-Powered Discovery"
- H1: "Kaizen descubre / lo que realmente necesitás."
- Body: "La mayoría de proyectos fallidos empiezan con un brief incompleto. Kaizen entrevista a tu equipo y genera la especificación que previene el fallo."
- CTA primary: "Empezar tu brief" *(→ `/get-started`, BROKEN)*
- CTA secondary: "Ver cómo funciona" *(→ `#how-it-works`)*
- Trust pills: "Sin formularios de intake" / "48h al primer match" / "2–3 squads seleccionados"

### Section 1 — Discovery

- Badge: "Logistics SaaS · Brief Intelligence: 78%"
- Eyebrow: "Discovery"
- H2: "Kaizen pregunta lo que vos no pensás preguntar."

### Section 2 — Product Brain

- Eyebrow: "Analysis"
- H2: "Un brief que previene sorpresas."

**ProductBrainMockup content:**
- Quadrant 1: Product
- Quadrant 2: Technical
- Quadrant 3: Business
- Quadrant 4: Risk
- Score: 94% brief quality
- Status: "Matching against 500+ squads · ETA 48h"

### Section 3 — Kaizen Dashboard

- H2: "Todo tu ecosistema. / Kaizen lo monitorea, vos decidís." *(shimmer cyan)*
- Tags: "Proactive alerts" / "Gen UI integrado" / "Human-in-the-loop"

**KaizenDashboardMockup content:**
- KPIs: 3 active projects / 89% on-time / $240k managed / 4.8★ avg
- AI Insights: "AI components detected in Project 3 — Recommend AI-native squad" / "Milestone 2 at risk — Squad check-in recommended" / "Backend squad available for quick assignment"
- Active project: "SaaS MVP - Logistics Dashboard" (78% brief quality)

### Section 4 — Matching

- Eyebrow: "Matching"
- H2: "De 500+ squads, a los 3 que encajan."

**PrecisionMatchMockup content:**
- Header: "Kaizen Match · 3 squads seleccionados de 500+"
- Squad 1: 94% match (Velocity Squad)
- Squad 2: 91% match (CoreStack Labs)
- Squad 3: 84% match (ByteForge)
- Filter tags: React / Node / API / Auth

### Section 5 — Delivery Intelligence

- Eyebrow: "Intelligence"
- H2: "Kaizen monitorea cada milestone."

**DeliveryDashboardMockup content:**
- Warning: "🚨 SCOPE CREEP DETECTED: Payment gateway complexity is 2.3x estimated. 4-day delay risk."
- Kaizen action: "Recommend timeline adjustment + add backend specialist"

### Section 6 — AI Flywheel

- H2: "Kaizen + SafePay — el primer escrow que mira el trabajo."
- Body: "SafePay retiene fondos. Kaizen valida la entrega. El primero en detectar riesgos antes de que se conviertan en disputas."
- Stats: 94% on-time / 500+ squads / 48h

### Section 7 — Final CTA

- H2: "Empezá con Kaizen."
- CTA: "Hablar con Kaizen" *(→ `/get-started`, BROKEN)*

---

## Copy — Portuguese (Português)

Route: `/kaizen`
Status: ❌ Missing — All strings TBD (PT-BR).

Translate from English copy above. Keep "Kaizen", "SafePay", "ZenitRank", "Squad", "milestone", "brief" as-is.

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
