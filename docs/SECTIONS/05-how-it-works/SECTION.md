# 05 — How It Works

**File:** `app/how-it-works/page.tsx`
**Route:** `/how-it-works`
**Language:** Spanish (main content) + English (company steps, CTA) — mixed
**Status:** ✅ Built
**Layout:** 9 sections

---

## Current State

Comprehensive process explanation page with interactive mockups for Kaizen discovery, SafePay timeline, agent network, and Gen UI. Two sections carry BETA labels (AgentNetworkMockup, GenUIMockup). All CTAs → `/get-started` (broken). Contains a 7-question FAQ (inline, not using FAQSection component).

---

## Sub-sections

### 1 — Hero
- NeuralNoise: teal, opacity 0.30
- H1: "Brief to first commit. / 48 hours, guaranteed." (shimmer cyan)
- Body: "Companies find vetted squads in 48 hours. Squads get qualified clients — without chasing leads."

### 2 — Platform Stats (3 stat blocks)
- `500+` vetted squads / across 15 countries (teal)
- `48h` average match time / from brief to intro call (cyan)
- `12%` success fee only / zero cost to browse or post (gold) ⚠️ should be 15%

### 3 — Kaizen Discovery (2-col)
Left: `KaizenBriefMockup` — chat UI + brief (fintech example, 94% quality, 48h ETA)
Right: "Kaizen hace el trabajo / antes de presentarte al squad." (shimmer cyan)
3 bullets about brief quality

### 4 — For Companies (5-step cards, 5-col grid)
Steps: Post project / Get matched 48h / Meet the team / SafePay locks funds / Ship and review
CTA: "Post your project" → `/get-started` (BROKEN)

### 5 — For Squads (5-step cards)
Steps: Submit application / Kaizen calibra / Get verified badge / Accept match / Deliver and get paid
CTA: "Apply as a squad" → `/get-started` (BROKEN)

### 6 — SafePay (2-col)
Left: "El dinero no se mueve / hasta que vos lo aprobás." (shimmer cyan)
Right: `SafePayTimelineMockup` — milestone 3/5, $80k escrow, $32k released, $48k remaining

### 7 — Agentic Pipeline + Gen UI (2-col) — **BETA CONCEPT**
Left: `AgentNetworkMockup` — 5 sub-agents (Discovery, Brief Generator, Squad Matcher, Risk Monitor, SafePay Validator) + "BETA CONCEPT" badge
Right: `GenUIMockup` — Fleet Management workspace generator + "BETA" badge
H2: "Kaizen no es un asistente. / Es un orquestador de agentes." (shimmer-gold)

### 8 — FAQ (7 questions, inline)
Questions about verification, non-delivery, cost, repeat squads, currencies, juniors, Kaizen

### 9 — CTA
H2: "Post a brief today. / Meet your squad in 48h." (shimmer cyan)
CTA: "Post a project" + "Apply as a squad" → `/get-started` (BROKEN) + `/squads`

---

## Copy — English

Route: `/how-it-works`
Language: English (hero, company steps, CTA — already in EN)

### Hero

- Eyebrow: "The Process"
- H1 line 1: "How Zenit"
- H1 line 2: "actually works." *(shimmer-gold)*
- Body: "Three stages. Each one removes risk. Together they guarantee outcomes."

### Platform Stats

- `500+` vetted squads / across 15 countries
- `48h` average match time / from brief to intro call
- `15%` success fee only / zero cost to browse or post *(⚠️ shows 12% in code)*

### Section 1 — Kaizen Discovery

- Eyebrow: "Stage 1 — Kaizen"
- H2: "Discovery before delivery."
- Body: "Most failed projects fail at the brief. Kaizen runs a structured discovery — with your CEO, CTO, PM, and lead devs — to produce a specification that prevents surprises."
- Bullets:
  - What Kaizen asks
  - What it produces
  - What it prevents

**KaizenBriefMockup content:**
- Brief Intelligence Score: 78%
- Problem: "Current loan origination takes 4-6 days. Target: under 2 hours. Must comply with Regulation E + CFPB guidelines."
- Tech: "Legacy Oracle DB · Existing Salesforce integration · SOC 2 compliance required"
- Risk: "🚨 State licensing requirements vary — legal review needed before MVP"
- Timeline: "8 weeks (hard deadline)"

### Section 2 — Matching

- Eyebrow: "Stage 2 — Matching"
- H2: "Only the right squads. Nothing else."
- Body: "After Kaizen produces the brief, Zenit searches 500+ verified squads and filters to 3–5 that actually fit — stack, experience, availability, and delivery track record."

### Section 3 — Agentic Pipeline (BETA CONCEPT)

- Eyebrow: "AI-Powered Matching"
- H2: "Kaizen doesn't just read briefs. It finds what fits."
- Body: "Kaizen uses an agentic pipeline to match projects to squads — not keyword search, but semantic understanding of requirements, constraints, and team capability."

**AgentNetworkMockup content:**
- Agents: RequirementsAgent / StackMatchAgent / RiskAgent / TimelineAgent
- Task queue: "Analyzing 500+ squad profiles" / "Evaluating 12 risk factors" / "Matching stack requirements"

### Section 4 — SafePay

- Eyebrow: "Stage 3 — SafePay"
- H2: "Protection on both sides."
- Body: "Funds go into escrow before work starts. Kaizen monitors milestone delivery. Squads get paid when criteria are met — verified by Kaizen and confirmed by the company."

**SafePayTimelineMockup content:**
- Project: $80k total, "Milestone 3 of 5 · In Progress"
- Labels: Discovery & Design ($15k) / Backend API ($20k) / Frontend MVP ($20k) / Testing ($12k) / Launch ($13k)
- Note: "All GitHub deliverables verified for Milestone 2"

### Section 5 — Gen UI (BETA)

- Eyebrow: "Coming — Gen UI"
- H2: "The brief becomes the app."
- Body: "Kaizen will generate working wireframes directly from the discovery brief — for companies to validate and squads to use as a build target."

**GenUIMockup content:**
- "Fleet Management · Workspace"
- KPIs: Active Vehicles 247 / Route Efficiency 94.2% / Total Distance 12.4k km

### Section 6 — For Companies (5 steps)

1. "Post your project" — Share what you need and your timeline.
2. "Get matched in 48h" — Kaizen reviews and finds 3 perfect squads.
3. "Meet the team" — 30-minute intro calls. You choose.
4. "SafePay locks funds" — Escrow before work starts.
5. "Ship and review" — Milestone by milestone, until done.

CTA: "Post your project" → `/get-started`

### Section 7 — For Squads (5 steps, mixed ES/EN in code)

1. "Submit your application" — Profile, stack, and featured project.
2. "Kaizen calibra tu equipo" *(ES)* — Assessment of maturity and skills.
3. "Get your verified badge" — Badge based on objective criteria.
4. "Accept a match" — Review the brief and accept.
5. "Deliver and get paid" — Milestone by milestone.

CTA: "Apply as a squad" → `/get-started`

### Section 8 — Why It Works

- H2: "Three stages. One guarantee."
- Card 1: "$0 lost to delivery disputes"
- Card 2: "95% success rate"
- Card 3: "2-week deploy time"

### Section 9 — FAQ (currently EN)

1. "How does Kaizen know what I actually need?" *(vs what I say I need)*
2. "How long does discovery take?" → "Typically 1–2 weeks."
3. "Can I skip discovery?" → "You can, but we don't recommend it."
4. "How do you verify squads?" → "GitHub history, project documentation, previous client reviews."
5. "What happens if a milestone fails?" → "Kaizen flags it early. Squad B activates if needed."
6. "How does Squad B work?" → "Pre-matched backup squad activates within 24 hours."
7. "Is SafePay mandatory?" → "Yes. Every project."
8. "What's the commission?" → "15% for standard, 18% for AI-native."
9. "How is 'delivery' defined?" → "By milestone criteria agreed pre-project, not subjective client approval."

### Section 10 — CTA

- H2: "Post a brief today. / Meet your squad in 48h." *(shimmer cyan on "48h.")*
- CTA 1: "Post a project" → `/get-started` (BROKEN)
- CTA 2: "Apply as a squad" → `/squads`

---

## Copy — Spanish (Español)

Route: `/how-it-works`
Language: Spanish (main sections — already in ES in code)

### Hero (needs translation from EN)

- Eyebrow: "El proceso"
- H1: "Cómo funciona / Zenit realmente."
- Body: "Tres etapas. Cada una elimina riesgo. Juntas garantizan resultados."

### Kaizen Discovery

- Eyebrow: "Etapa 1 — Kaizen"
- H2: "Discovery antes de la entrega."
- Body: "La mayoría de proyectos fallidos fallan en el brief. Kaizen hace un discovery estructurado — con tu CEO, CTO, PM y desarrolladores líderes — para producir una especificación que previene sorpresas."

### For Companies (5 steps — currently EN in code)

1. "Publicá tu proyecto" — Contá qué necesitás y tu timeline.
2. "Match en 48h" — Kaizen revisa y encuentra 3 squads perfectos.
3. "Conocé al equipo" — Llamadas de 30 minutos. Vos elegís.
4. "SafePay bloquea los fondos" — Escrow antes de empezar.
5. "Entregá y revisá" — Milestone por milestone, hasta terminar.

### For Squads (5 steps — mixed ES/EN, primarily ES)

1. "Aplicá" — Perfil, stack y proyecto destacado.
2. "Kaizen calibra tu equipo" — Evaluación de madurez y skills.
3. "Obtenés tu badge verificado" — Badge basado en criterios objetivos.
4. "Aceptás el match" — Revisás el brief y aceptás.
5. "Entregás y cobrás" — Milestone por milestone.

### SafePay section

- H2: "El dinero no se mueve / hasta que vos lo aprobás." *(shimmer cyan)*
- 4 bullets with Shield icon:
  1. Fondos en escrow antes de arrancar
  2. Kaizen monitorea cada milestone
  3. Liberación solo con criterios cumplidos
  4. Protocolo de disputas si algo falla

### FAQ

1. "¿Cómo sabe Kaizen lo que realmente necesito?" *(vs. lo que digo que necesito)*
2. "¿Cuánto dura el discovery?" → "Típicamente 1–2 semanas."
3. "¿Puedo saltear el discovery?" → "Podés, pero no lo recomendamos."
4. "¿Cómo verifican a los squads?" → "Historial de GitHub, documentación de proyectos, reviews de clientes anteriores."
5. "¿Qué pasa si un milestone falla?" → "Kaizen lo señala antes. Squad B se activa si es necesario."
6. "¿Cómo funciona el Squad B?" → "Squad de backup pre-matcheado se activa en 24 horas."
7. "¿SafePay es obligatorio?" → "Sí. En cada proyecto."
8. "¿Cuál es la comisión?" → "15% para estándar, 18% para AI-native."
9. "¿Cómo se define 'entrega'?" → "Por criterios de milestone acordados antes del proyecto, no aprobación subjetiva del cliente."

### CTA

- H2: "Publicá un brief hoy. / Conocé tu squad en 48h."
- CTA 1: "Publicar un proyecto"
- CTA 2: "Aplicar como squad"

---

## Copy — Portuguese (Português)

Route: `/how-it-works`
Status: ❌ Missing — All strings TBD (PT-BR).

Translate from English copy above. Key terms to keep: "SafePay", "Kaizen", "ZenitRank", "Squad B", "milestone", "squad", "discovery".

---

## Components Used

| Component | File | Notes |
|-----------|------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | Teal, opacity 0.30 |
| `KaizenBriefMockup` | Inline or dedicated | Fintech example chat + brief |
| `SafePayTimelineMockup` | Inline or dedicated | 5 milestones, $80k project |
| `AgentNetworkMockup` | Inline or dedicated | BETA CONCEPT badge |
| `GenUIMockup` | Inline or dedicated | BETA badge |
| Lucide icons | `lucide-react` | Various |

See `components-used.md` for full list.

---

## Design Tokens

- H1: clamp(28px, 3.8vw, 54px), shimmer cyan
- Mockup backgrounds: `#050f0f`
- BETA badge: amber/warning color
- Step numbers: alternating teal/cyan/gold

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| Mockups `role="img"` | ⚠️ Some mockups lack this |
| BETA labels | ⚠️ No AT context that these are roadmap items |
| FAQ accordion | ⚠️ Needs `aria-expanded` on triggers |

---

## Responsive

- Mobile: All single-col. 5-step grids scroll or stack.
- Desktop: 2-col for Kaizen/SafePay sections. 5-col step grids.

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | All CTAs → `/get-started` BROKEN |
| P0 | Stats show "12%" — should be 15% |
| P1 | BETA labels (AgentNetwork, GenUI) visible in production |
| P1 | No OG image |
| P2 | Mixed ES/EN without i18n |

---

## Next Steps

- [ ] Fix all broken CTAs
- [ ] Fix "12%" → "15%" in stats
- [ ] Decide BETA section visibility policy
- [ ] Add `role="img"` + labels to all mockup components
- [ ] Add `aria-expanded` to FAQ accordion
- [ ] Generate OG image
