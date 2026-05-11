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

## Copy — English

Route: `/companies`
Status: ⚠️ Pending — Page is currently in Spanish. EN copy is a translation of the ES version.

### Hero

- Eyebrow: "For Companies · Verified teams in 48 hours"
- H1 line 1: "The team you need,"
- H1 line 2: "when you need it." *(shimmer-gold)*
- Body: "Kaizen maps your real need. Zenit matches verified squads in 48 hours. SafePay protects every milestone. No long-term contract."
- CTA primary: "Talk to Kaizen →"
- CTA secondary: "See how it works"
- Trust line: "15% commission · No equity · No long-term commitment"

### Stats Strip

- `500+` — Verified squads
- `4.8★` — Average quality score
- `15%` — Commission fee *(standard)*
- `2 weeks` — Time to deploy

### Section 1 — Why Zenit (3 pain points)

1. **Expensive delay**
   - Body: "Hiring takes 6 months. Zenit matches in 48 hours."
   - Sub: "Traditional hiring timelines are your biggest competitor."

2. **Unknown quality**
   - Body: "Unfiltered freelancers. Zenit verifies experience with real projects."
   - Sub: "No more pretty CVs with mediocre deliverables."

3. **Financial risk**
   - Body: "SafePay holds payment until Kaizen validates delivery."
   - Sub: "Every milestone — you pay only for what was actually delivered."

### Section 2 — How It Works (3 steps)

1. **Kaizen discovers what you actually need**
   - Sub: "Kaizen asks the hard questions that prevent costly surprises."
2. **Zenit matches the best squads**
   - Sub: "3–5 filtered squads. Not 50 candidates. Only those who can do exactly what you need."
3. **SafePay protects your investment**
   - Sub: "Funds in escrow until verified delivery. Squad B on backup if something fails."

### Section 3 — Case Study Mockup

- Badge: "Case Study · FinTech"
- Title: "Personal loan app MVP"
- Subtitle: "From nothing to production in 10 weeks"
- Metrics: $80k project · 10 weeks · 4.9★ quality
- Requirement: "Stack: React Native + Node + Stripe. First working version in 8 weeks."
- Delivery: "Verified squad assigned in 48 hours. App live in week 10."

### Section 4 — Squad Profile Mockup

- Header: "Active matching · 500+ squads available"
- Filter pills: All / React / AI / DevOps / Python
- Squad cards: (same as ES, names are neutral)
- CTA: "See full match →"
- Footer: "Matched by Kaizen AI · Updated 2 min ago"

### Section 5 — SafePay Explainer

- Eyebrow: "SafePay"
- H2: "Your money, protected."
- CTA: "See how SafePay works →"

### Section 6 — Pricing Card

- Eyebrow: "Pricing"
- Primary: "15% commission" *(standard)*
- Enterprise: "Volume + dedicated SLA"
- CTA: "See plans →"

### Section 7 — Final CTA

- H2: "Your next team, in 48 hours."
- Body: "Kaizen maps your need. Zenit solves it."
- CTA primary: "Talk to Kaizen →"

---

## Copy — Spanish (Español)

Route: `/companies`
Language: Spanish (primary — page is fully in Spanish)

### Hero

- Eyebrow: "Para empresas · Equipos verificados en 48 horas"
- H1 line 1: "El equipo que necesitás,"
- H1 line 2: "cuando lo necesitás." *(shimmer-gold)*
- Body: "Kaizen mapea tu necesidad real. Zenit matchea squads verificados en 48 horas. SafePay protege cada milestone. Sin contrato a largo plazo."
- CTA primary: "Hablar con Kaizen →" *(→ `/get-started`, BROKEN)*
- CTA secondary: "Ver cómo funciona"
- Trust line: "12% comisión · Sin equity · Sin compromiso a largo plazo"

### Stats Strip

- `500+` — Squads verificados
- `4.8★` — Calidad promedio
- `7–12%` — Comisión *(⚠️ INCONSISTENCIA — debería ser 15%)*
- `2 semanas` — Tiempo de deploy

### Section 1 — Why Zenit (3 pain points)

**Pain point 1 — Delay caro:**
- Title: "Delay caro"
- Body: "Contratar lleva 6 meses. Zenit matchea en 48 horas."
- Sub: "El tiempo de contratación tradicional es tu mayor competitor."

**Pain point 2 — Calidad desconocida:**
- Title: "Calidad desconocida"
- Body: "Freelancers sin filtro. Zenit verifica experiencia con proyectos reales."
- Sub: "No más CVs bonitos con entregables mediocres."

**Pain point 3 — Riesgo financiero:**
- Title: "Riesgo financiero"
- Body: "SafePay retiene el pago hasta que Kaizen valida la entrega."
- Sub: "Cada milestone, pagás solo por lo que realmente se entregó."

### Section 2 — How It Works (3 steps)

1. **Kaizen descubre lo que realmente necesitás**
   - Sub: "Kaizen hace las preguntas difíciles que evitan surpresas costosas."
2. **Zenit matchea los mejores squads**
   - Sub: "3–5 squads filtrados. No 50 candidatos. Solo los que saben hacer exactamente lo que necesitás."
3. **SafePay protege tu inversión**
   - Sub: "Fondos en escrow hasta la entrega verificada. Squad B en backup si algo falla."

### Section 3 — Case Study Mockup

- Badge: "Caso de Estudio · FinTech"
- Title: "MVP de app de préstamos personales"
- Subtitle: "De nada a producción en 10 semanas"
- Metrics: $80k proyecto · 10 semanas · 4.9★ calidad
- Requirement: "Stack: React Native + Node + Stripe. Primera versión funcional en 8 semanas."
- Delivery: "Squad verificado asignado en 48 horas. App live en semana 10."

### Section 4 — Squad Profile Mockup

- Header: "Matching activo · 500+ squads disponibles"
- Filter pills: All / React / AI / DevOps / Python
- Squad cards:
  - "React Squad 🇦🇷 4.9★"
  - "AI Squad 🇲🇽 4.8★"
  - "DevOps Squad 🇧🇷 4.9★"
- CTA: "Ver match completo →"
- Footer: "Matched by Kaizen AI · Updated 2 min ago"

### Section 5 — SafePay Explainer

- Eyebrow: "SafePay"
- H2: "Tu dinero, protegido."
- Flow labels (3 steps with $80k example):
  - "Company → escrow"
  - "Milestone validado"
  - "Squad cobra"
- Footer: "Kaizen valida la entrega antes del pago · GitHub proof en cada milestone"
- CTA: "Ver cómo funciona SafePay →" *(→ `/safepay`)*

### Section 6 — Pricing Card

- Eyebrow: "Precios"
- Primary: "12% de comisión" *(standard)*
- Enterprise: "Volumen y SLA dedicado"
- CTA: "Ver planes →" *(→ `/pricing`)*

### Section 7 — Final CTA

- H2: "Tu próximo equipo, en 48 horas."
- Body: "Kaizen mapea tu necesidad. Zenit lo resuelve."
- CTA primary: "Hablar con Kaizen →" *(→ `/get-started`, BROKEN)*

---

## Copy — Portuguese (Português)

Route: `/companies`
Status: ❌ Missing — No Portuguese copy exists. All strings TBD.

### Hero
- Eyebrow: TBD — "Para Empresas · Times verificados em 48 horas"
- H1: TBD — "O time que você precisa, / quando você precisa."
- Body: TBD
- CTA: TBD — "Falar com Kaizen →"
- Trust: TBD — "15% comissão · Sem equity · Sem compromisso de longo prazo"

### Stats Strip
- TBD — `500+` squads verificados / `4.8★` qualidade / `15%` comissão / `2 semanas` para deploy

### Sections 1–7: TBD — translate from English copy above

**Notes:**
- PT-BR (Brazilian Portuguese) preferred
- "Squad", "SafePay", "Kaizen", "ZenitRank", "milestone" — keep as brand/technical terms
- "discovery" → consider "diagnóstico" or keep as-is

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
