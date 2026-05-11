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

## Copy

See `copy-en.md` / `copy-es.md` / `copy-pt.md`.

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
