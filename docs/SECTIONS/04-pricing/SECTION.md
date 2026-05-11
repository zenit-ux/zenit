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

## Copy — English

Route: `/pricing`
Language: English (FAQ and SafePay callout — already in EN in code)

### Hero (EN translation of current ES)

- H1: "Simple pricing."
- Subtext: "No surprises."
- Body: "15% commission when the project closes — nothing else. SafePay included on every project."

### Plans (EN)

**Squads — $0 / Always free**
- Tagline: "Free forever"
- Features: SkillBase profile / Kaizen matching / SafePay on every project / ZenitRank reputation / TalentPath access
- CTA: "Apply as a squad →"

**Companies — 15% success fee**
- Tagline: "Pay only on delivery"
- Features: Kaizen AI discovery / 500+ verified squads / SafePay escrow / Squad B backup / GitHub proof per milestone
- CTA: "Post your project →"
- Badge: "Most popular"

**Enterprise — Custom rate**
- Tagline: "Volume + dedicated SLA"
- Features: All Companies features / Dedicated Kaizen instance / Priority matching / Custom contracts / Direct support
- CTA: "Talk to sales →"

### SafePay Callout (already EN in code)

- H2: "Every project protected by SafePay"
- Body: "Regardless of plan, all projects on Zenit are covered by SafePay escrow. Funds are held until Kaizen validates milestone delivery."
- Link: "Learn how SafePay works"

### FAQ (already EN in code)

1. **"When does the 15% fee apply?"** — "Only when you hire a squad and a project is started."
2. **"Is the 15% charged upfront?"** — "No. Added at contract signing, paid proportionally per milestone."
3. **"Do squads pay any fees?"** — "No. Squads join and receive payments with zero fees."
4. **"What counts as a 'project' for billing?"** — "Any defined-scope engagement. Retainers billed monthly × 15%."
5. **"Can I negotiate the fee for large projects?"** — "Yes, projects over $100K eligible for reduced rates."

### Bottom CTA (already EN in code)

- H2: "Start for free. Scale when you're ready."
- CTA 1: "Get started free"
- CTA 2: "Contact sales"

---

## Copy — Spanish (Español)

Route: `/pricing`
Language: Spanish (hero and plans sections)

### Hero

- H1: "Precios simples."
- Subtext: "Sin sorpresas."
- Body: "15% de comisión cuando el proyecto cierra — nada más. SafePay incluido en cada proyecto."

### Plans

**Squads — $0 / Gratis siempre**
- Tagline: "Free forever"
- Includes: SkillBase profile / Kaizen matching / SafePay en cada proyecto / ZenitRank reputation / TalentPath access
- CTA: "Pre-register →"

**Companies — 15% / Solo al entregar**
- Tagline: "Pay only on delivery"
- Includes: Kaizen AI discovery / 500+ squads verificados / SafePay escrow / Squad B backup / GitHub proof por milestone
- CTA: "Start Discovery →"
- Badge: "Más popular"

**Enterprise — A convenir**
- Tagline: "Volumen + SLA dedicado"
- Includes: Todo lo de Companies / Instancia Kaizen dedicada / Matching prioritario / Contratos personalizados / Soporte directo
- CTA: "Contactanos →"

### FAQ

1. "¿Cuándo pago la comisión?" → "Solo cuando un proyecto se completa y el squad cobra."
2. "¿Hay costos ocultos?" → "No. SafePay, ZenitRank y Kaizen están incluidos."
3. "¿Qué pasa si el squad no entrega?" → "SafePay retiene el pago. Squad B entra en 24 horas."
4. "¿Puedo cancelar en cualquier momento?" → "Sí. Sin penalidades, sin compromisos."
5. "¿TalentPath tiene costo extra?" → "$49/mes por junior. Gratis para squads que mentorean."
6. "¿TalkFlow está incluido?" → "$29/mes add-on. Funciona dentro de las llamadas de Zenit."

### Bottom CTA

- H2: "Empezá gratis. Escalá cuando estés listo."
- CTA 1: "Empezar gratis"
- CTA 2: "Contactar ventas"

---

## Copy — Portuguese (Português)

Route: `/pricing`
Status: ❌ Missing — All strings TBD (PT-BR).

- H1: TBD — "Preços simples. / Sem surpresas."
- Plan labels: TBD — "Para Squads / Para Empresas / Enterprise"
- CTAs: TBD — "Aplicar como squad →" / "Publicar projeto →" / "Falar com vendas →"
- FAQ: TBD (translate from English copy above)

Translate from English copy above. Keep "SafePay", "Kaizen", "ZenitRank", "milestone", "squad" as-is.

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
