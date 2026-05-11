# 10 — TalkFlow

**File:** `app/talkflow/page.tsx`
**Route:** `/talkflow`
**Language:** Spanish (H1/hero body) + English (all feature sections)
**Status:** ✅ Built (partially audited)
**Layout:** Hero + 4 features + impact + pricing + CTA

---

## Current State

Real-time translation product page. H1/hero in Spanish, features in English. `LiveCallMockup` confirmed. 0.4s average latency claim. Add-on pricing: $29/month. Language pairs: ES↔EN and PT↔EN live; others in BETA or coming.

---

## Sub-sections

### 1 — Hero
- NeuralNoise (color not confirmed)
- Eyebrow: "TalkFlow · Real-time Translation"
- H1: "Habla tu idioma. / Trabajá con cualquiera." *(Spanish, shimmer cyan)*
- Body: "Traducción de voz en tiempo real para llamadas técnicas…" *(Spanish)*
- CTA: "Try TalkFlow →"
- Pricing note: "Add-on for $29/month"
- Trust: "Works inside Zenit calls. No separate app needed."

### 2 — Feature: Real-time Translation
- H3: "Both sides speak their native language. Naturally."
- 0.4s latency / subtitles + audio / both-direction

### 3 — Feature: Language Coverage
- H3: "Spanish. Portuguese. English. And growing."
- ES↔EN 🟢 live / PT↔EN 🟢 live / MX-ES↔EN 🟢 live
- AR-ES↔DE 🔶 BETA / CO-ES↔FR 🔶 BETA / BR-PT↔JP ⬜ COMING SOON

### 4 — Feature: Technical Calls
- H3: "It knows what Kubernetes means. And API rate limiting."
- 97.3% accuracy on tech vocabulary

### 5 — Impact Section
- Quote: "A squad in Buenos Aires can now close a deal with a company in Berlin. In Spanish."
- Stats: 24,389 calls translated / 0.41s avg latency / 47 countries / $0 language learning

### 6 — AI Callout
- H2: "Not just translation. Technical comprehension."
- Stats: 97.3% / 0.4s / Fine-tuned on tech vocabulary

### 7 — Pricing
- Label: "Add-on"
- Price: $29/month per account
- Features: Unlimited call minutes / All language pairs / Subtitles + audio / Works inside Zenit

### 8 — Final CTA
- H2: "Speak your language. Work with anyone."
- CTA: "Try TalkFlow →"

---

## Copy

See `copy-en.md` / `copy-es.md` / `copy-pt.md`.

---

## Components Used

| Component | Notes |
|-----------|-------|
| `NeuralNoise` | Color not confirmed |
| `LiveCallMockup` | Inline — ES→EN, 0.4s latency, "Excellent" quality indicator |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P1 | H1 in Spanish, all content in English — mixed without i18n |
| P1 | No OG image |
| P2 | LiveCallMockup buttons need `aria-disabled` |

---

## Next Steps

- [ ] Migrate to i18n
- [ ] Generate OG image
- [ ] Complete accessibility audit
