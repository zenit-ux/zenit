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

## Copy — English

Route: `/talkflow`
Language: English (all feature sections — primary)

### Hero

- Eyebrow: "TalkFlow · Real-time Translation"
- H1: "Speak your language. / Work with anyone." *(EN version — code has Spanish)*
- Body: "Real-time voice translation for technical calls. Your squad in Buenos Aires, your client in Berlin — no language barrier, with 0.4s average latency."
- CTA: "Try TalkFlow →"
- Note: "Add-on for $29/month"
- Trust: "Works inside Zenit calls. No separate app needed."

### Feature 1 — Real-time Translation

- Eyebrow: "Real-time Translation"
- H3: "Both sides speak their native language. Naturally." *(shimmer)*
- Body: "TalkFlow doesn't pause the conversation to translate."
- Bullets:
  - "0.4s average latency — faster than human interpretation"
  - "Subtitles + translated audio simultaneously"
  - "Both-direction: squad to company and back"

### Feature 2 — Language Coverage

- Eyebrow: "Language Coverage"
- H3: "Spanish. Portuguese. English. And growing." *(shimmer)*
- Body: "TalkFlow is built for the LatAm-to-global workflow."
- Bullets: "Spanish ↔ English: live and production-ready" / "Portuguese ↔ English: live and production-ready" / "6+ language pairs in active development"

**Language pairs status:**
- ES↔EN 🟢 Live
- PT↔EN 🟢 Live
- MX-ES↔EN 🟢 Live
- AR-ES↔DE 🔶 BETA
- CO-ES↔FR 🔶 BETA
- BR-PT↔JP ⬜ COMING SOON

### Feature 3 — Technical Calls

- Eyebrow: "Built for Technical Calls"
- H3: "It knows what Kubernetes means. And API rate limiting." *(shimmer)*
- Body: "General translation AI fails on technical vocabulary. TalkFlow's model is fine-tuned on thousands of hours of tech project calls."
- Bullets:
  - "Fine-tuned on software project conversations"
  - "Handles tech stack names, acronyms, and code references"
  - "97.3% accuracy on human-reviewed samples"

### Impact Section

- Quote: "A squad in Buenos Aires can now close a deal with a company in Berlin. In Spanish." *(shimmer)*
- Body: "TalkFlow doesn't just remove a barrier. It opens the entire global market to every squad in LatAm."
- Stats: 24,389 calls translated / 0.41s avg latency / 47 countries reached / $0 language learning required

### AI Callout

- Eyebrow: "TalkFlow AI"
- H2: "Not just translation. Technical comprehension." *(shimmer)*
- Body: "TalkFlow's model doesn't just translate words — it understands context."
- Stats: 97.3% accuracy / 0.4s avg latency / Fine-tuned on tech vocabulary

### LiveCallMockup

- Original (ES): "Necesitamos hablar sobre el timeline del milestone 2..."
- Translated (EN): "We need to talk about the timeline for milestone 2..."
- Quality indicator: "ES → EN · 0.4s avg · Excellent"

### Pricing

- Label: "Add-on"
- Product: "TalkFlow"
- Price: $29/month per account
- Features: Unlimited call minutes / All supported language pairs / Subtitles + audio translation / Works inside Zenit calls
- Fine-print: "Available for squad and company accounts. Cancel anytime."

### Final CTA

- H2: "Speak your language. Work with anyone." *(shimmer)*
- Body: "TalkFlow is live. Add it to your Zenit account in one click."
- CTA: "Try TalkFlow →"

---

## Copy — Spanish (Español)

Route: `/talkflow`
Language: Spanish (H1 + hero body already in ES; rest TBD)

### Currently in Spanish (in code)

**H1:** "Habla tu idioma. / Trabajá con cualquiera." *(shimmer cyan)*
**Hero body:** "Traducción de voz en tiempo real para llamadas técnicas. Tu squad en Buenos Aires, tu cliente en Berlín — sin barrera de idioma, con 0.4s de latencia promedio."

### Full ES strings (for i18n)

- CTA: "Probar TalkFlow →"
- Note: "Add-on por $29/mes"
- Trust: "Funciona dentro de las llamadas de Zenit. Sin app separada."

**Features (translation from EN):**
- "Ambos lados hablan su idioma nativo. Naturalmente."
- "0.4s de latencia promedio — más rápido que un intérprete humano"
- "Subtítulos + audio traducido simultáneamente"
- "Dirección doble: squad a empresa y de vuelta"
- "Español. Portugués. Inglés. Y creciendo."
- "Sabe qué significa Kubernetes. Y API rate limiting."
- "97.3% de precisión en vocabulario técnico"

**Impact:**
- Quote: "Un squad en Buenos Aires ahora puede cerrar un trato con una empresa en Berlín. En español."
- Stats: 24.389 llamadas traducidas / 0.41s latencia / 47 países / $0 en cursos de idiomas

**Pricing:**
- "$29/mes por cuenta"
- "Minutos ilimitados / Todos los pares de idiomas / Subtítulos + audio / Funciona dentro de Zenit"

**Final CTA:**
- "Hablá tu idioma. Trabajá con cualquiera."
- "TalkFlow ya está disponible. Activalo en tu cuenta de Zenit en un clic."

---

## Copy — Portuguese (Português)

Route: `/talkflow`
Status: ❌ Missing — All strings TBD (PT-BR).

Translate from English copy above. Keep "TalkFlow", "Kaizen", "squad", "milestone" as-is.
Note: TalkFlow is specifically relevant to PT speakers — PT↔EN is already live. Consider prioritizing PT translation.

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
