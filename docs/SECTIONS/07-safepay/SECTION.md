# 07 — SafePay

**File:** `app/safepay/page.tsx`
**Route:** `/safepay`
**Language:** English / Spanish mixed (H1 in Spanish, rest mostly EN)
**Status:** ✅ Built (partially audited)
**Layout:** Hero + 6 sections

---

## Current State

SafePay product page. Confirmed: hero with NeuralNoise (gold) + `EscrowFlowMockup` with 4 milestones, `MultiCurrencyMockup`. Mixed language — H1 Spanish, features in English. Not fully audited during initial SITE-AUDIT.

---

## Sub-sections

### 1 — Hero
- NeuralNoise: gold, opacity (not confirmed)
- Eyebrow badge: "Milestone Escrow · AI-Protected"
- H1 line 1: "SafePay —"
- H1 line 2: "el dinero está seguro." *(shimmer-gold, Spanish)*
- Body: "Escrow que libera fondos solo cuando Kaizen valida que los criterios de entrega se cumplieron."
- CTA: "See how SafePay works"
- Trust: "Every project covered. No exceptions."

### 2 — Feature 1: Pre-work Escrow
- Eyebrow: "Pre-work Escrow"
- H3: "Funds move before work starts. / So does accountability." *(gold)*
- Body: "The moment a project is agreed, funds lock in SafePay escrow…"
- Bullets: "Zero risk of non-payment for squads" / "Zero risk of non-delivery for companies" / "Both sides protected from day one"

### 3 — Feature 2: Kaizen Risk Intelligence
- Eyebrow: "Kaizen Risk Intelligence"
- H3: "AI monitors every milestone / before it's late." *(cyan)*
- Body: "SafePay is connected to Kaizen's delivery intelligence…"
- Bullets: "Daily milestone risk scoring" / "Automated squad check-ins on delay signals" / "95% of flagged issues resolved without formal dispute"

### 4 — Feature 3: Multi-Currency
- Eyebrow: "Multi-Currency Payouts"
- H3: "Companies pay in USD. / Squads receive in theirs." *(teal)*
- Body: "We handle FX at mid-market rates. No conversion markup…"
- Bullets: "Mid-market FX, zero markup" / "Payouts in 10+ currencies" / "Same-day processing on milestone release"

### 5 — AI Callout
- Eyebrow: "SafePay + Kaizen"
- H2: "The first escrow that / watches the work, not just the money." *(shimmer-gold)*
- Stats: $0 disputes / 95% success rate / 100% projects covered

### 6 — EscrowFlowMockup
- Steps: Company deposits → Escrow secured → Squad delivers → Company reviews → SafePay releases
- Project: "SaaS MVP · $80,000 total · 28% released"
- Milestones: Discovery & Design ($20k ✓) / Backend API ($25k ✓) / Frontend & UI ($20k 🔄) / QA & Launch ($15k 🔒)

### 7 — MultiCurrencyMockup
- "Company paid: $25,000 USD"
- "Mid-market rate: $23,847.50 USD"
- "Squad receives: R$119,237 BRL"
- "No FX markup. No hidden fees."

### 8 — Final CTA
- H2: "Every project. / Every dollar. / Protected." *(shimmer-gold)*
- Body: "SafePay is automatic on every Zenit project. No opt-in. No extra cost."
- CTA: "Start a project" → `/get-started` (BROKEN)

---

## Copy — English

Route: `/safepay`
Language: English (features and body — primary content language)

### Hero

- Eyebrow: "Milestone Escrow · AI-Protected"
- H1 line 1: "SafePay —"
- H1 line 2: "your money is safe." *(EN version of current ES H1)*
- Body: "Escrow that releases funds only when Kaizen validates that delivery criteria have been met."
- CTA: "See how SafePay works"
- Trust: "Every project covered. No exceptions."

### Feature 1 — Pre-work Escrow

- Eyebrow: "Pre-work Escrow"
- H3 line 1: "Funds move before work starts."
- H3 emphasis: "So does accountability." *(gold)*
- Body: "The moment a project is agreed, funds lock in SafePay escrow. Neither side can touch them until a milestone is approved — creating a clean incentive for delivery."
- Bullets:
  - "Zero risk of non-payment for squads"
  - "Zero risk of non-delivery for companies"
  - "Both sides protected from day one"

### Feature 2 — Kaizen Risk Intelligence

- Eyebrow: "Kaizen Risk Intelligence"
- H3: "AI monitors every milestone"
- H3 emphasis: "before it's late." *(cyan)*
- Body: "SafePay is connected to Kaizen's delivery intelligence. If a milestone falls behind, Kaizen flags it — before it becomes a dispute."
- Bullets:
  - "Daily milestone risk scoring"
  - "Automated squad check-ins on delay signals"
  - "95% of flagged issues resolved without formal dispute"

### Feature 3 — Multi-Currency

- Eyebrow: "Multi-Currency Payouts"
- H3 line 1: "Companies pay in USD."
- H3 emphasis: "Squads receive in theirs." *(teal)*
- Body: "We handle FX at mid-market rates. No conversion markup. Squads in Buenos Aires, Bogotá, or Barcelona get paid accurately and fast."
- Bullets:
  - "Mid-market FX, zero markup"
  - "Payouts in 10+ currencies"
  - "Same-day processing on milestone release"

### AI Callout

- Eyebrow: "SafePay + Kaizen"
- H2 line 1: "The first escrow that"
- H2 emphasis: "watches the work" *(shimmer-gold)*
- H2 end: ", not just the money."
- Body: "Traditional escrow holds funds. SafePay holds funds AND monitors delivery."
- Stats: $0 / 95% / 100%

### EscrowFlowMockup

- Steps: "Company deposits funds → Funds secured in escrow" / "Squad delivers milestone → Company reviews & approves" / "SafePay releases funds → Squad paid instantly"
- Active project: "SaaS MVP · $80,000 total · 28% released"
- Milestones: Discovery & Design ($20k ✓) / Backend API ($25k ✓) / Frontend & UI ($20k 🔄) / QA & Launch ($15k 🔒)

### MultiCurrencyMockup

- "Company paid: $25,000 USD"
- "Mid-market rate: $23,847.50 USD"
- "Squad receives: R$119,237 BRL"
- "No FX markup. No hidden fees."

### Final CTA

- Eyebrow: "Get started"
- H2: "Every project."
- H2 emphasis: "Every dollar." *(shimmer-gold)*
- H2 end: "Protected."
- Body: "SafePay is automatic on every Zenit project. No opt-in. No extra cost."
- CTA: "Start a project" → `/get-started` *(BROKEN)*

---

## Copy — Spanish (Español)

Route: `/safepay`
Language: Spanish (H1 is in Spanish — rest of page is EN)

### Currently in Spanish (in code)

**H1 (in page):**
- H1 line 1: "SafePay —"
- H1 line 2: "el dinero está seguro." *(shimmer-gold)*

**Body (hero):**
"Escrow que libera fondos solo cuando Kaizen valida que los criterios de entrega se cumplieron."

### Full ES translation needed for i18n

**Hero:**
- H1: "SafePay — / tu dinero está seguro."
- Body: *(as above)*
- CTA: "Ver cómo funciona SafePay"
- Trust: "Cada proyecto cubierto. Sin excepciones."

**Feature 1 — Pre-work Escrow:**
- Eyebrow: "Escrow pre-trabajo"
- H3: "Los fondos se mueven antes de empezar el trabajo. / La responsabilidad también."
- Body: "En el momento en que se acuerda un proyecto, los fondos se bloquean en escrow de SafePay. Ninguna parte puede tocarlos hasta que se aprueba un milestone…"
- Bullets: "Cero riesgo de no pago para squads" / "Cero riesgo de no entrega para empresas" / "Ambos lados protegidos desde el día uno"

**Feature 2 — Kaizen Risk Intelligence:**
- Eyebrow: "Kaizen Risk Intelligence"
- H3: "IA monitorea cada milestone / antes de que sea tarde."
- Bullets: "Scoring diario de riesgo por milestone" / "Check-ins automáticos ante señales de retraso" / "95% de problemas resueltos sin disputa formal"

**Feature 3 — Multi-Currency:**
- Eyebrow: "Pagos Multi-Moneda"
- H3: "Las empresas pagan en USD. / Los squads cobran en la suya."
- Bullets: "FX al precio de mercado, sin markup" / "Pagos en 10+ monedas" / "Procesamiento mismo día al liberar milestone"

**AI Callout:**
- H2: "El primer escrow que mira el trabajo, no solo el dinero."
- Body: "El escrow tradicional retiene fondos. SafePay retiene fondos Y monitorea la entrega."

**Final CTA:**
- H2: "Cada proyecto. / Cada dólar. / Protegido."
- Body: "SafePay es automático en cada proyecto de Zenit. Sin opt-in. Sin costo extra."
- CTA: "Iniciar un proyecto"

---

## Copy — Portuguese (Português)

Route: `/safepay`
Status: ❌ Missing — All strings TBD (PT-BR).

Translate from English copy above. Keep "SafePay", "Kaizen", "milestone", "escrow", "squad" as-is.

---

## Components Used

| Component | Notes |
|-----------|-------|
| `NeuralNoise` | Gold, opacity ~0.32 |
| `EscrowFlowMockup` | Inline — 4 milestones, $80k project |
| `MultiCurrencyMockup` | Inline — USD→BRL conversion |
| Lucide: `Shield` / `CheckCircle` | Feature sections |

**Note:** `SafePaySection.tsx` exists but is NOT used — content is inline in page.

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | CTA → `/get-started` BROKEN |
| P1 | H1 in Spanish on page with English body copy |
| P1 | No OG image at `/og-safepay.png` |
| P2 | Page not fully audited — some sections may have issues |

---

## Next Steps

- [ ] Fix broken CTA
- [ ] Decide language strategy: full EN or full ES + i18n
- [ ] Generate OG image
- [ ] Complete full accessibility audit
