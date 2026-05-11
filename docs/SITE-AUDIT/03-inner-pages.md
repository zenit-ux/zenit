# Inner Pages

---

## `/companies` — For Companies
**File:** `app/companies/page.tsx`  
**Language:** Spanish (hero, pipeline, comparison, SafePay callout), English (some labels)  
**Layout:** `<main>` + 6 sections

### Section 1 — Hero
- NeuralNoise: gold `[245, 158, 11]`, opacity 0.32, mixBlendMode: screen
- Eyebrow: `"Para Empresas"` (gold pill, pulsing dot)
- H1: `"Kaizen entiende"` / `"tu producto primero."` / `"Después trae el squad."` (shimmer-gold)
- Body: "La mayoría de las plataformas te muestran una lista. Kaizen hace un discovery de tu negocio…"
- CTA primary: `"Iniciar discovery"` → `/get-started` (BROKEN)
- CTA secondary: `"Cómo funciona Kaizen"` → `/kaizen`

### Section 2 — Stats strip (border-y)
4 stats in divided grid:
- `48h` — "De conversación a primer match"
- `6` — "Pasos del pipeline de Kaizen"
- `7–12%` — "Comisión SafePay (sin costo fijo)" ⚠️ NOTE: inconsistent with Pricing page which shows 12%
- `100%` — "Criterios validados antes del pago"

### Section 3 — Benefits (6 cards, 3-col grid)
Eyebrow: `"Por qué Zenit"` / H2: `"La diferencia que no ves"` / `"en ninguna otra plataforma."` (shimmer-gold)
1. **Discovery antes del match** (gold) — ScanSearch icon
2. **SafePay valida resultados, no solo el pago** (cyan) — ShieldCheck icon
3. **ZenitRank: badges que significan algo** (teal) — BadgeCheck icon
4. **Product Brain — memoria de tu producto** (gold) — BrainCircuit icon
5. **Vos elegís. Kaizen recomienda.** (cyan) — UserCheck icon
6. **Humano en el loop en cada decisión crítica** (teal) — Layers3 icon

### Section 4 — Pipeline (6 steps, 2-col grid)
Eyebrow: `"El proceso"` / H2: `"De conversación a producto entregado"` / `"en seis pasos."` (shimmer cyan)
Sub: "Kaizen orquesta cada etapa. Vos aprobás las decisiones que importan…"
Steps (numbered, color-coded):
1. **Discover** (gold) — 4-min natural conversation
2. **Assess Maturity** (cyan) — evaluates tech stage for routing
3. **Generate Brief** (teal) — full brief: stack, milestones, budget, squad profile
4. **Match Squads** (gold) — recommends by fit, 30-min call
5. **Setup SafePay** (cyan) — acceptance criteria, digital signature, escrow
6. **Monitor Delivery** (teal) — scope creep detection, escalation

### Section 5 — Comparison table
Eyebrow: `"La diferencia"` / H2: `"Zenit vs. el resto."`
Columns: Feature | Upwork / Agencias | Zenit
6 rows:
- Discovery del producto: "No existe" → "Incluido — 6 fases con Kaizen"
- Validación de la entrega: "El cliente aprueba (subjetivo)" → "Kaizen valida criterios objetivos"
- Protección del pago: "Escrow o nada" → "SafePay — libera por resultado"
- Reputación del squad: "Reviews o auditoría pagada" → "ZenitRank — 100% por resultados reales"
- Disputas: "Sin contexto previo, 7–15 días" → "Con historial completo, resolución en 7 días"
- Tiempo al primer match: "3–4 semanas" → "48 horas"

### Section 6 — SafePay callout (2-col)
Left: `"SafePay"` eyebrow / H2: `"El pago no se mueve"` / `"hasta que el resultado existe."` (shimmer-gold)
Body: (paragraph about escrow mechanism + dispute protocol)
Link: `"Ver cómo funciona SafePay"` → `/safepay`
Right: 4 checklist items with gold CheckCircle2:
1. Criterios definidos antes de empezar
2. Fondos en escrow desde el inicio
3. Validación automática de la entrega
4. Protocolo de disputas de 3 niveles

### Section 7 — CTA (full-width card)
H2: `"Kaizen empieza con"` / `"una conversación de 4 minutos."` (shimmer-gold)
Body: "Sin formularios. Sin procurement. Primer match en 48 horas. Solo pagás cuando contratás…"
CTA: `"Iniciar discovery"` → `/get-started` (BROKEN) + `"Ver precios"` → `/pricing`

---

## `/squads` — For Squads
**File:** `app/squads/page.tsx`  
**Language:** Spanish  
**Layout:** `<main>` + 6 sections

### Section 1 — Hero (2-col: text + SquadDashboardMockup)
- NeuralNoise: teal `[15, 118, 110]`, opacity 0.40
- Eyebrow: `"Para Squads"` (teal pill)
- H1: `"Equipos técnicos"` / `"bajo demanda."` (text-shimmer cyan)
- Body: "Sin nómina fija. Paga por milestone. SafePay garantiza el resultado."
- CTA: `"Registrar mi squad"` → `/get-started` (BROKEN) + `"Cómo funciona"` → `/how-it-works`
- Right mockup: `SquadDashboardMockup` — shows 3 squads (Velocity Squad ★★ Elite 98%, CoreStack Labs ✓ Verificado 91%, ByteForge ★ Confiable 84%) with progress bars, hidden on mobile

### Section 2 — Stats strip (4 stats)
- `50+` — Squads pre-registrados
- `48h` — De aplicación a primer match
- `100%` — Equipos calibrados por Kaizen
- `$0` — Costo de entrada

### Section 3 — Benefits (6 cards, 3-col)
Eyebrow: `"Por qué Zenit"` / H2: `"Todo lo que tu squad necesita."` / `"Sin lo que te distrae."` (shimmer cyan)
1. **ZenitRank: reputación que se acumula** (cyan) — TrendingUp
2. **SafePay: el pago está antes de que escribas una línea** (teal) — Shield
3. **Kaizen trae el cliente correcto** (gold) — BrainCircuit
4. **Acceso a proyectos globales sin salir de LATAM** (cyan) — Globe
5. **Sin ops, sin chasing, sin invoicing** (teal) — Zap
6. **TalentPath: tu pipeline de talento propio** (gold) — GraduationCap

### Section 4 — ZenitRank (4 badges, 4-col grid)
Eyebrow: `"ZenitRank"` / H2: `"Cuatro badges."` / `"Todos ganados, ninguno comprado."` (shimmer cyan)
Sub: "ZenitRank es 100% objetivo — on-time rate, response time, criterios cumplidos, disputas y diversidad de clientes."
Badges:
- ◆ Squad Validado (cyan): LinkedIn verificado, perfil completo, skills + portfolio
- ★ Squad Confiable (teal): 1+ milestone, >80% on-time, score >7/10
- ✓ Squad Verificado (gold): 5+ milestones, >90%, 2+ clients, score >8.5
- ★★ Squad Elite (cyan): 15+ milestones, >95%, 5+ clients, 0 disputes lost

Footer note: "Los squads con badge más alto aparecen primero en el matching de Kaizen…"

### Section 5 — Process (4 steps, vertical list)
Eyebrow: `"El proceso"` / H2: `"De aplicación a proyecto pago en cuatro pasos."`
1. Aplicá y pasá el review técnico (cyan)
2. Obtenés tu badge inicial (◆ Squad Validado) (teal)
3. Kaizen te matchea con el proyecto correcto (cyan)
4. Entregás, Kaizen valida, cobrás (teal)

### Section 6 — Criteria (2-col: text + checklist)
Left text: H2: `"¿Qué hace a un"` / `"squad de Zenit?"` (shimmer cyan)
Right: 6 criteria with CheckCircle2:
- 3+ engineers con skills complementarios
- Portfolio público o GitHub con productos entregados
- Comunicación en inglés (B2+ o superior)
- Track record de entregas en fecha
- Async-ready y remote-native
- Mínimo una especialidad full-stack o vertical
(Note: TalentPath inline link in left text)

### Section 7 — CTA
H2: `"Tu ZenitRank empieza"` / `"desde el primer milestone."` (shimmer cyan)
Body: "La aplicación toma 10 minutos. Aprobación en 48 horas. Primer match la misma semana."
CTA: `"Registrar mi squad"` → `/get-started` (BROKEN)

---

## `/squads/pre-registro` — Squad Pre-Registration Form
**File:** `app/squads/pre-registro/page.tsx`  
**Language:** Spanish  
**Note:** This is the standalone form. The localized versions (`/es/`, `/en/`, `/pt/`) use `components/squads/PreRegistroPage.tsx` with i18n.

### Structure
1. **Hero** (2-col, text + SquadProfileMockup)
   - Eyebrow: `"Para squads de desarrollo · Acceso anticipado"`
   - H1: `"¿No encontrás trabajo?"` / `"Zenit vino a solucionar eso."` (shimmer cyan)
   - Body (3 paragraphs): problem framing → value prop → "No es freelance. Es tu squad como un activo productivo."
   - CTAs: `"Pre-registrar mi squad"` → `#form` + `"Ver criterios"` → `#criterios`
   - Trust: `"Sin spam · Solo el aviso de apertura"`
   - Right: `SquadProfileMockup` — shows "Código Sur" card with stack, ZenitRank progress, SafePay status, floating milestone card (hidden on mobile)

2. **Stats strip** (3 columns): ZenitRank "100% objetivo" / SafePay "Por milestone" / Squads "Todo nivel"

3. **Cómo funciona** (3-col grid)
   - H2: `"Tres pasos. Sin fricción."`
   - 01 Kaizen revisa tu squad / 02 Te notificamos cuando abramos / 03 Primeros proyectos con SafePay

4. **A quién buscamos** (2-col, `id="criterios"`)
   - Left: criteria list (5 ✅ green, 2 ✕ red strikethrough)
   - Right: TalentPath callout (gold card) + junior FAQ note

5. **ZenitRank** section (4 badges with "Entrás aquí" tag on ◆ Validado)
   - Blockquote from "Kaizen, agente de producto de Zenit"

6. **Form** (`id="form"`, `max-w-2xl`)
   - Fields: squad name, members (2–4, dynamic add/remove with AnimatePresence), stack selector (pills), featured project (name + description 280ch counter + optional link), email, terms checkbox
   - Submit: teal button with loading state
   - Post-submit: `SuccessView` component (checkmark + confirmation message)
   - Full client-side validation with `aria-invalid`, `role="alert"` errors, `aria-describedby`

---

## `/pricing` — Pricing
**File:** `app/pricing/page.tsx`  
**Language:** Spanish (hero/plans), English (FAQ, SafePay callout, bottom CTA)

### Section 1 — Hero
- NeuralNoise: teal, opacity 0.32
- Eyebrow: `"Pricing"`
- H1: `"Paga solo"` / `"por resultados."` (shimmer cyan)
- Body: "Sin costo fijo. Sin sorpresas. SafePay asegura que pagás solo por lo que acordamos."

### Section 2 — Plans (3 cards)
**For Squads (teal)**
- Price: `$0` / "always free"
- Description: "Join the marketplace and start receiving qualified project matches — for free."
- Features (8): Free squad profile, Verified badge, Unlimited matches, SafePay, Multi-currency payouts (USD/BRL/ARS/MXN/COP/CLP), Client comms tools, Project management dashboard, Priority support after 3 projects
- CTA: `"Apply as a squad"` → `/get-started` (BROKEN)

**For Companies (cyan) — "Most popular" badge**
- Price: `12%` / "success fee"
- Description: "Free to post. Pay only when you hire — 12% of the total project value."
- Features (8): Free posting, 2–3 matches in 48h, 30-min intro calls, SafePay, Milestone payments, Dedicated account manager, NDA templates, Unlimited revision requests
- CTA: `"Post your project"` → `/get-started` (BROKEN) — white button (featured)

**Enterprise (gold)**
- Price: `Custom` / "negotiated rate"
- Description: "For companies running multiple concurrent projects or recurring squad relationships."
- Features (8): Custom fee (as low as 6%), Dedicated squad pipeline, 24h priority SLA, Legal/contract review, Custom SLA + uptime, Volume billing, Dedicated account team, White-glove onboarding
- CTA: `"Talk to sales"` → `/contact` (BROKEN)

⚠️ NOTE: Companies page shows `"7–12%"` but pricing page shows `"12%"` — inconsistency.

### Section 3 — SafePay callout (centered)
- Shield icon (teal)
- H2: `"Every project protected by SafePay"`
- Body: "Regardless of plan, all projects on Zenit are covered by SafePay…"
- Link: `"Learn how SafePay works"` → `/safepay`

### Section 4 — FAQ (5 questions)
1. "When does the 12% fee apply?" — Only when you hire a squad and a project is started.
2. "Is the 12% charged upfront?" — No. Added at contract signing, paid proportionally per milestone.
3. "Do squads pay any fees?" — No. Squads join and receive payments with zero fees.
4. "What counts as a 'project' for billing?" — Any defined-scope engagement. Retainers billed monthly × 12%.
5. "Can I negotiate the fee for large projects?" — Yes, projects over $100K eligible for reduced rates.

### Section 5 — Bottom CTA
- H2: `"Start for free. Scale when you're ready."`
- CTA: `"Get started free"` + `"Contact sales"` → both → `/get-started` (BROKEN)

---

## `/how-it-works` — How It Works
**File:** `app/how-it-works/page.tsx`  
**Language:** Spanish (main content), English (company steps, CTA bottom)

### Section 1 — Hero
- NeuralNoise: teal, opacity 0.30
- H1: `"Brief to first commit."` / `"48 hours, guaranteed."` (shimmer cyan)
- Body: "Companies find vetted squads in 48 hours. Squads get qualified clients — without chasing leads."

### Section 2 — Platform overview (3 stats)
- `500+` vetted squads / across 15 countries (teal)
- `48h` average match time / from brief to intro call (cyan)
- `12%` success fee only / zero cost to browse or post (gold)

### Section 3 — Kaizen Discovery (2-col)
Left: `KaizenBriefMockup` — chat UI showing discovery conversation + brief generation (94% quality, fintech example)
Right: `"Kaizen hace el trabajo"` / `"antes de presentarte al squad."` (shimmer cyan)
3 bullet points: brief in <5 min / matches 500+ squads / only shows squads that already delivered something similar

### Section 4 — For Companies (5-step cards, 5-col grid)
Steps: 01 Post your project / 02 Get matched in 48h / 03 Meet the team / 04 SafePay locks funds / 05 Ship and review
CTA: `"Post your project"` → `/get-started` (BROKEN)

### Section 5 — For Squads (5-step cards)
Steps: 01 Submit your application / 02 Kaizen calibra tu equipo / 03 Get your verified badge / 04 Accept a match / 05 Deliver and get paid
CTA: `"Apply as a squad"` → `/get-started` (BROKEN)

### Section 6 — SafePay (2-col)
Left: `"El dinero no se mueve"` / `"hasta que vos lo aprobás."` (shimmer cyan)
Features: 4 bullets with Shield icon
Right: `SafePayTimelineMockup` — milestone 3/5, $80k escrow, $32k released, $48k remaining

### Section 7 — Agentic pipeline + Gen UI (2-col, product vision)
Left: `AgentNetworkMockup` — Kaizen Orchestrator with 5 sub-agents (Discovery Agent, Brief Generator, Squad Matcher ★ACTIVE, Risk Monitor STANDBY, SafePay Validator STANDBY) + "BETA CONCEPT" badge
Right: `GenUIMockup` — workspace generator showing Fleet Management App with generated map UI

H2: `"Kaizen no es un asistente."` / `"Es un orquestador de agentes."` (shimmer-gold)

### Section 8 — FAQ (7 questions)
1. ¿Cómo verifica Zenit a los squads?
2. ¿Qué pasa si un squad no entrega?
3. ¿Cuánto cuesta?
4. ¿Puedo trabajar con el mismo squad de nuevo?
5. ¿Qué monedas están soportadas?
6. ¿Qué pasa si nuestro equipo tiene juniors?
7. ¿Qué es Kaizen exactamente?

### Section 9 — CTA
H2: `"Post a brief today."` / `"Meet your squad in 48h."` (shimmer cyan)
CTA: `"Post a project"` + `"Apply as a squad"` → `/get-started` (BROKEN) + `/squads`

---

## `/kaizen` — Kaizen AI
**File:** `app/kaizen/page.tsx`  
**Language:** Spanish (hero, feature sections), English (mockup labels, CTA bottom)

### Section 1 — Hero (2-col)
- NeuralNoise: teal, opacity 0.38, dot-grid overlay
- Eyebrow: `"Kaizen AI"` + `"AI discovery. Human delivery."` (pill with inline text)
- H1: `"Kaizen mapea tu"` / `"madurez técnica."` (text-shimmer cyan)
- Body: "IA que entiende qué puede resolver sola y cuándo necesita traer el squad correcto."
- CTAs: `"Start your brief"` → `/get-started` (BROKEN) + `"See how it works"` → `#how-it-works`
- 3 inline trust pills: No intake forms / 48h to first match / 2–3 curated squads
- Right: `KaizenDiscoveryMockup` — chat UI, logistics SaaS example, Brief Intelligence 78%, tag chips

### Section 2 — Brief Intelligence (2-col)
Left text: "You describe the problem. Kaizen understands the solution."
Right: `ProductBrainMockup` — 4-quadrant view (Product, Technical, Business, Risk signals) + 94% brief quality + "Matching against 500+ squads · ETA 48h"

### Section 3 — Proactive Dashboard (centered, border-y)
H2: `"Todo tu ecosistema."` / `"Kaizen lo monitorea, vos decidís."` (shimmer cyan)
`KaizenDashboardMockup` — full app mockup with sidebar, 2 active projects, SafePay stats, Kaizen AI panel with 4 alerts
3 feature tags below: Proactive alerts / Gen UI integrado / Human-in-the-loop

### Section 4 — Precision Matching (2-col, reversed)
Left: `PrecisionMatchMockup` — 3 squad cards (Velocity Squad 98%, CoreStack Labs 91%, ByteForge 84%) with reasoning per match
Right: `"Not a shortlist."` / `"A recommendation."` (shimmer cyan)
3 bullets: 94% on-time / AI reasoning per recommendation / re-match at zero cost

### Section 5 — Delivery Intelligence (2-col)
Left: `"Kaizen doesn't disappear"` / `"after the match."` (shimmer-gold)
Right: `DeliveryDashboardMockup` — active project 65% progress, 4 milestones, Kaizen AI Alert: scope creep detected +18%

### Section 6 — AI Flywheel callout (full-width card)
Eyebrow: `"Continuous Learning"` (cyan pill)
H2: `"Every project makes the"` / `"next match smarter."` (shimmer cyan)
3 stats: 94% on-time delivery / 500+ squads in model / 48h avg match time

### Section 7 — CTA
H2: `"Your brief. 48 hours. A squad."` (shimmer-gold on "48 hours.")
CTA: `"Start with Kaizen"` → `/get-started` (BROKEN)

---

## `/safepay` — SafePay
**File:** `app/safepay/page.tsx` (only first 50 lines read)  
**Language:** ES/EN mixed  
**Confirmed sections:** Hero with NeuralNoise (gold) + EscrowFlowMockup (4 milestones: Discovery, Backend API, Frontend, QA)

---

## `/skillbase` — SkillBase
**File:** `app/skillbase/page.tsx` (only first 50 lines read)  
**Language:** EN  
**Confirmed:** NeuralNoise, community browse mockup with filter chips and profile cards (squads + individuals)

---

## `/talentpath` — TalentPath
**File:** `app/talentpath/page.tsx` (only first 50 lines read)  
**Language:** EN  
**Confirmed:** NeuralNoise, challenge interface mockup with step indicator

---

## `/talkflow` — TalkFlow
**File:** `app/talkflow/page.tsx` (only first 50 lines read)  
**Language:** EN  
**Confirmed:** NeuralNoise, live call mockup with real-time translation (latency: 0.4s, recording disabled indicator)

---

## `/blog` — Blog
**File:** `app/blog/page.tsx`  
**Language:** Spanish (post content), English (newsletter, UI labels)

### Structure
- Hero: `"Ideas on the future of work."` — gold shimmer — "Engineering, product, and culture from the team building Zenit."
- Featured post (full-width card): "Por qué el matching automático falla…" (Abr 28, 2026, 7 min)
- Post grid (5 posts, 3-col): remaining posts
- Newsletter: form with email input + Subscribe button, `aria-label`, `autoComplete="email"`, `htmlFor` label

### Posts (all static, no detail pages)
1. **Featured** — Engineering — "Por qué el matching automático falla (y cómo Kaizen lo resuelve)" — Abr 28, 2026
2. Engineering — "SSR vs SR: cuándo cada uno" — Abr 21, 2026
3. Culture — "La verdad sobre equipos 100% remotos en LATAM" — Abr 14, 2026
4. Product — "SafePay: cómo construimos escrow para proyectos de software" — Abr 7, 2026
5. Case Study — "Caso real: cómo Kaizen matcheó un backend bancario en 48h" — Mar 31, 2026
6. Product — "ZenitRank: por qué la reputación objetiva cambia todo" — Mar 24, 2026

All post links are broken (no `/blog/[slug]` route).

---

## `/es/squads/pre-registro`, `/en/squads/pre-registro`, `/pt/squads/pre-registro`
**Component:** `components/squads/PreRegistroPage.tsx`  
**i18n:** Uses `lib/i18n/preregistro.ts` with `t(locale)` for all strings  
**Locales:** `es` | `en` | `pt`  
Includes `RegistroModal` component (modal flow, not used in standalone `/squads/pre-registro`)
