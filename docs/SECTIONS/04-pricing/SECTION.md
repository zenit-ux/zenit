# 04 — Pricing

**File:** `app/pricing/page.tsx`
**Route:** `/pricing`
**Language:** Spanish (hero/plans) + English (FAQ, SafePay callout, bottom CTA) — mixed
**Status:** ✅ Built
**Layout:** 5 sections

---

## Current State

Pricing page shows 3 plans: Squads ($0), Companies (12%), Enterprise (custom). FAQ in English, plans in Spanish. Commission shown as "12%" — inconsistent with the 15% (standard) / 18% (AI-native) model defined in CLAUDE.md and how-it-works FAQ. All CTAs point to `/get-started` (broken) or `/contact` (broken).

---

## Sub-sections

### 1 — Hero
- NeuralNoise: teal, opacity 0.32
- Eyebrow: "Pricing"
- H1: "Paga solo / por resultados." (shimmer cyan)
- Body: "Sin costo fijo. Sin sorpresas. SafePay asegura que pagás solo por lo que acordamos."

### 2 — Plans (3 cards)
**For Squads (teal) — $0 always free**
- 8 features, CTA: "Apply as a squad" → `/get-started` (BROKEN)

**For Companies (cyan) — 12% success fee — "Most popular"**
- 8 features, CTA: "Post your project" → `/get-started` (BROKEN)
- ⚠️ Should be 15% per CLAUDE.md

**Enterprise (gold) — Custom rate**
- 8 features, CTA: "Talk to sales" → `/contact` (BROKEN)

### 3 — SafePay Callout (centered)
- Shield icon (teal)
- H2: "Every project protected by SafePay"
- Link: "Learn how SafePay works" → `/safepay`

### 4 — FAQ (5 questions, English)
1. "When does the 12% fee apply?"
2. "Is the 12% charged upfront?"
3. "Do squads pay any fees?"
4. "What counts as a 'project' for billing?"
5. "Can I negotiate the fee for large projects?"

### 5 — Bottom CTA
- H2: "Start for free. Scale when you're ready."
- CTAs: "Get started free" + "Contact sales" — both → `/get-started` (BROKEN)

---

## Copy

See `copy-es.md` / `copy-en.md` / `copy-pt.md`.

---

## Components Used

| Component | File | Notes |
|-----------|------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | Teal, opacity 0.32 |
| `Button` | `components/ui/button.tsx` | shadcn — featured plan uses white variant |

---

## Design Tokens

- NeuralNoise: teal
- Plan card borders: teal / cyan (featured with glow) / gold
- "Most popular" badge: cyan pill
- SafePay icon: teal Shield
- H1: clamp(28px, 3.8vw, 54px), shimmer cyan
- FAQ uses accordion-style expansion (Framer Motion height animation)

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| `<html lang>` | ⚠️ Mixed ES/EN content, lang="en" |
| FAQ accordion | ⚠️ Needs `aria-expanded` on triggers |
| Plan CTAs | ⚠️ Generic "Get started" on multiple CTAs — each needs unique `aria-label` |

---

## Responsive

| Breakpoint | Behavior |
|-----------|----------|
| Mobile | Plans stack 1-col |
| Desktop | Plans 3-col grid |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | All CTAs → `/get-started` BROKEN; Enterprise → `/contact` BROKEN |
| P0 | Plans show "12%" — should be 15% standard / 18% AI-native per CLAUDE.md |
| P1 | No OG image at `/og-pricing.png` |
| P2 | FAQ references "12%" — needs correction |
| P2 | Mixed language (ES plans + EN FAQ) without i18n |

---

## Next Steps

- [ ] Fix all broken CTA routes
- [ ] Fix commission fee: 12% → 15% (standard) everywhere; add 18% AI-native tier
- [ ] Add `aria-expanded` to FAQ accordion triggers
- [ ] Add unique `aria-label` to each plan CTA
- [ ] Generate `/og-pricing.png`
- [ ] Migrate to i18n dictionaries
