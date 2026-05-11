# 01 — Homepage

**File:** `app/page.tsx`
**Route:** `/`
**Language:** English (primary), Spanish mixed in badge copy
**Status:** ✅ Built
**Sections:** 7

---

## Current State

The homepage is fully built with 7 sections using primarily English copy. It serves both Companies and Squads audiences. NeuralNoise WebGL effect anchors the hero. All CTAs resolve to either real routes or broken ones (see Known Issues). No i18n implementation — single-language EN with some Spanish badge text.

---

## Visual Structure

Full-width, single-column page. Each section uses `max-w-7xl` container with `px-4 sm:px-6 lg:px-8`. Dark-only (#080c0c background).

---

## Sub-sections

### 1 — HeroSection
**File:** `components/sections/HeroSection.tsx`
Layout: Centered, full-viewport-height
- Badge row (2 pills: cyan + gold)
- H1 with shimmer-gold accent on second line
- 4-line subheadline
- 3 CTAs (primary white, secondary cyan-border, tertiary teal text)
- Trust strip (muted, 3 stats)
- Background: NeuralNoise WebGL (gold) + 3 radial glows + grid SVG + bottom fade

### 2 — ValuePropSection
**File:** `components/sections/ValuePropSection.tsx`
Layout: 2-column grid (lg), 1-column (mobile)
- Left card: "For Companies" (gold badge, 5 benefit rows, gold Check icons)
- Right card: "For Squads" (teal badge, 5 benefit rows, teal Check icons)
- Background: radial gradient teal/cyan

### 3 — FlowSection
**File:** `components/sections/FlowSection.tsx`
Layout: 2-column (lg), stacked (mobile) — mockup left, text right
- Left: `TimelineMockup` — 3-step dark card (#050f0f) with outcomes + footer stat
- Right: H2 + body + link to `/how-it-works`
- Background: teal glow right + teal blur orb left

### 4 — WhyZenitSection
**File:** `components/sections/WhyZenitSection.tsx`
Layout: 2-column (lg), stacked (mobile) — text left, matrix right
- Left: H2 + 3 competitor comparison cards + Zenit advantages box (teal border)
- Right: `ComparisonMatrix` — 4×3 grid (Velocidad/Calidad/Costo/Flexibilidad × Hiring/Upwork/Zenit)
- Background: gold glow left + gold blur orb right

### 5 — AITeamsSection
**File:** `components/sections/AITeamsSection.tsx`
Layout: Centered text top, full-width mockup bottom
- Badge: "For AI Teams" gold pill
- H2 + 3 alternative comparison cards (red-bordered)
- Zenit AI-native path box (gold border)
- `AITimelineMockup`: 4-column Month 1–4 grid
- **CTA links to `/ai-migration` — BROKEN**

### 6 — TestimonialsSection
**File:** `components/sections/TestimonialsSection.tsx`
Layout: 3-column card grid (lg), 1-column (mobile)
- Header: eyebrow + H2
- 3 testimonial cards (SAR format: Situation/Action/Result)
- Cards: cyan (🇦🇷), gold (🇲🇽), teal (🇧🇷)

### 7 — FinalCTASection
**File:** `components/sections/FinalCTASection.tsx`
Layout: Centered, full-width
- Eyebrow pill + H2 + body
- 3 audience cards (Companies/Squads/AI Teams)
- Social proof strip: 4 stats
- Background: #070b0b + complex glow system + grid-pattern + corner accent lines
- **"For AI Teams" card links to `/ai-migration` — BROKEN**

---

## Copy — English

Route: `/`
Language: English (primary)

### Global Components (on all pages)

**Navbar:**
- For Companies
- For Squads
- How It Works
- Pricing
- Blog
- Log in
- Get started

**Footer:**
- Tagline: "The marketplace for elite tech squads."
- Live badge: "500+ squads active"
- Copyright: "© 2026 Zenit Technologies, Inc. All rights reserved."
- Footer note: "Built for the future of work."

### Section 1 — HeroSection

**Badges:**
- "Kaizen AI · Matching Inteligente" *(mixed — Spanish phrase in EN page)*
- "SafePay Protegido" *(Spanish — EN equivalent: "SafePay Protected")*

**H1:**
- Line 1: "The modern way to"
- Line 2: "scale engineering teams." *(shimmer-gold)*

**Subheadline (4 lines):**
1. "Kaizen discovers what you actually need."
2. "Zenit matches vetted squads that fit your stack."
3. "You deploy production-ready teams in 2 weeks instead of 6 months."
4. "4.8★ · 15% cost · Zero long-term contracts."

**CTAs:**
- Primary: "Start Discovery →" → `/companies`
- Secondary: "Pre-register Your Squad →" → `/squads/pre-registro`
- Tertiary: "See how it works ↓" → `#how-it-works`

**Trust line:** "15+ squads · $500k+ projects · 95% success rate" *(⚠️ should be "500+ squads")*

### Section 2 — ValuePropSection

**For Companies card:**
- Badge: "For Companies"
- H2: "Get Capacity Without Hiring"
- Benefits:
  1. "Kaizen maps your actual needs" → "Clear specification. No surprises mid-project."
  2. "Zenit matches from 500+ vetted squads down to 3–5 perfect fits" → "You interview candidates you'd actually hire."
  3. "SafePay escrow + GitHub proof on every milestone" → "Zero payment risk. Work is proven."
  4. "Squad B backup replaces underperforming teams in 24 hours" → "Your timeline is protected."
  5. "15% commission. No equity. No long-term commitment" → "Flexibility to scale up or down as needed."
- CTA: "Start Discovery — free, no commitment →" → `/companies`

**For Squads card:**
- Badge: "For Squads"
- H2: "Stop Competing On Price"
- Benefits:
  1. "Pre-vetted clients come to you with clear, Kaizen-generated briefs" → "No vetting, no guessing, just work."
  2. "You set your rate. We guarantee it" → "No race to the bottom."
  3. "ZenitRank shows your reputation based on real project outcomes" → "Better clients find you. Better projects follow."
  4. "Seña model means clients are as committed as you are" → "No ghosting. Real partnerships."
  5. "Elite tier unlocks higher rates, mentorship, and premium projects" → "Clear path to growth."
- CTA: "Pre-register — see your first opportunities →" → `/get-started?type=squad`

### Section 3 — FlowSection (TimelineMockup)

**TimelineMockup (left):**
- **01 Discovery** (cyan, "1–2 weeks")
  - Body: "Kaizen interviews your CEO, CTO, PM…"
  - Outcome: "You have a clear brief. No vague specifications."
- **02 Matching** (teal, "24–48 hours")
  - Body: "Zenit searches 500+ vetted squads…"
  - Outcome: "You interview people who can actually do the job."
- **03 Deployment** (gold, "2 weeks onboarding")
  - Body: "Squad integrates with your workflow…"
  - Outcome: "Project ships on time. Your risk is zero."
- Footer stat: "Time to first team → 2 weeks"

**Text block (right):**
- H2 line 1: "From zero to production"
- H2 line 2: "in 3 steps." *(shimmer-gold)*
- Body: "Kaizen discovers. Zenit matches. SafePay protects. / No guessing. No surprises."
- Link: "See Full Process" → `/how-it-works`

### Section 4 — WhyZenitSection

**Text block (left):**
- H2 line 1: "Not just faster."
- H2 line 2: "Better in every way." *(shimmer-gold)*

**Competitor comparisons:**
- Hiring in-house: Pro "Quality ✓" / Con "6 months + $300k+ equity. Headcount forever."
- Upwork: Pro "Speed ✓" / Con "Quality is a gamble. You vet 50 candidates yourself."
- Toptal: Pro "Quality + Speed ✓" / Con "30% commission. Matching takes 2–3 weeks."

**Zenit advantages box:**
- Quality: "4.8★ vetted squads, production-ready"
- Speed: "2 weeks, not 6 months"
- Cost: "15% commission, no equity, no long-term"
- Safety: "SafePay escrow, GitHub proof, Squad B backup"
- Control: "You interview 3–5 pre-filtered candidates"
- Link: "See Full Comparison" → `/how-it-works`

**ComparisonMatrix (right):**
- Rows: Velocidad / Calidad / Costo / Flexibilidad *(Spanish — see ES copy)*
- Columns: Hiring / Upwork / Zenit
- Footer: "Basado en tiempo promedio de contratación en LATAM · 2025"

### Section 5 — AITeamsSection

- Badge: "For AI Teams"
- H2 line 1: "Ship AI Features Fast."
- H2 line 2: "Not 9 Months Later." *(text-shimmer cyan)*

**Alternative cards (red-bordered):**
- Hiring AI engineers: "$300k+ salary" / "9 months" / "Unproven fit. Equity commitment."
- Consulting firm: "$200k delivery" / "3 months" / "They leave. You still don't know AI."
- DIY with your team: "Lost time" / "Slow" / "Wrong architecture. High risk."

**Zenit AI-native path box:**
- Timeline: "3–4 months to live feature. Your team learns it."
- Cost: "$80–150k (15–18% on project cost)"
- ROI: "Breaks even month 2–3. Capability stays with you."

**CTA:** "Explore AI Transformation" → `/ai-migration` *(BROKEN)*

**AITimelineMockup:**
- Month 1: "Assessment" (cyan)
- Month 2: "Build" (teal)
- Month 3: "Rollout" (gold)
- Month 4: "Handoff" (cyan)

### Section 6 — TestimonialsSection

- Eyebrow: "Testimonials"
- H2 line 1: "Real teams."
- H2 line 2: "Measurable results." *(text-shimmer cyan)*

**Card 1 — Matías Rodríguez 🇦🇷 (cyan):**
- Title: "CEO, Series B SaaS"
- Situation: "We were running 3 parallel projects with no capacity to add engineers."
- Action: "Zenit matched 3 vetted squads in under 2 weeks. Each one fit our stack exactly."
- Result: "$450k in dev costs saved. 4.7★ quality across all three projects."

**Card 2 — Diego Fuentes 🇲🇽 (gold):**
- Title: "CTO, FinTech MX"
- Situation: "We promised an AI feature for Q3. Our team had zero AI experience."
- Action: "Kaizen scoped it in a week. The squad shipped to production in 3 months."
- Result: "Feature live in Q3 — not 9 months later. Team owns it. No dependency."

**Card 3 — Carlos Mendes 🇧🇷 (teal):**
- Title: "Squad Lead, DevCraft"
- Situation: "We were winning 3% of proposals. Clients didn't trust us — no proof, no ranking."
- Action: "Kaizen pre-qualified clients. ZenitRank surfaced our track record automatically."
- Result: "Win rate jumped to 65%. Rates doubled. Zero time wasted on bad-fit clients."

### Section 7 — FinalCTASection

- Eyebrow: "Get Started"
- H2 line 1: "Ship Your Next Team"
- H2 line 2: "In 2 Weeks." *(shimmer-gold)*
- Body: "Not 6 months. Not $300k in salaries. Vetted squads, proven work, SafePay protection — from day one."

**Audience cards:**
- **For Companies** (gold): "Vetted squads in 48h. SafePay on every milestone." / CTA: "Start Discovery →" → `/companies`
- **For Squads** (teal): "Pre-vetted clients. Set your rate. ZenitRank grows it." / CTA: "Pre-register →" → `/squads/pre-registro`
- **For AI Teams** (cyan): "Ship AI features in 3 months. Your team owns it after." / CTA: "Explore AI Path →" → `/ai-migration` *(BROKEN)*

**Social proof strip:**
- 500+ vetted squads
- 4.8★ average quality score
- 95% project success rate
- 2 wks to first team

---

## Copy — Spanish (Español)

Route: `/`
Status: ⚠️ Pending — Homepage is EN-primary. Spanish copy needed for i18n implementation.

### What exists in Spanish today (embedded in EN page)

- Badge 1: "Kaizen AI · Matching Inteligente"
- Badge 2: "SafePay Protegido"
- ComparisonMatrix rows: "Velocidad" / "Calidad" / "Costo" / "Flexibilidad"
- ComparisonMatrix footer: "Basado en tiempo promedio de contratación en LATAM · 2025"

### Section 1 — HeroSection
- Badge 1: *(already ES)* "Kaizen AI · Matching Inteligente"
- Badge 2: *(already ES)* "SafePay Protegido"
- H1 line 1: "La manera moderna de"
- H1 line 2: "escalar equipos de ingeniería."
- Subheadline:
  1. "Kaizen descubre lo que realmente necesitás."
  2. "Zenit matchea squads verificados que encajan con tu stack."
  3. "Desplegás equipos listos para producción en 2 semanas en vez de 6 meses."
  4. "4.8★ · 15% comisión · Sin contratos a largo plazo."
- CTA primary: "Iniciar discovery →"
- CTA secondary: "Pre-registrar mi squad →"
- CTA tertiary: "Ver cómo funciona ↓"
- Trust line: "500+ squads · $500k+ proyectos · 95% tasa de éxito"

### Section 2 — ValuePropSection

**Para empresas:**
- Badge: "Para empresas"
- H2: "Capacidad sin contratar"
- Benefits:
  1. "Kaizen mapea tus necesidades reales" → "Especificación clara. Sin sorpresas en el proyecto."
  2. "Zenit matchea de 500+ squads a 3–5 candidatos perfectos" → "Entrevistás candidatos que realmente contratarías."
  3. "SafePay escrow + prueba de GitHub en cada milestone" → "Cero riesgo de pago. El trabajo está probado."
  4. "Squad B reemplaza equipos con bajo rendimiento en 24 horas" → "Tu cronograma está protegido."
  5. "15% comisión. Sin equity. Sin compromiso a largo plazo" → "Flexibilidad para escalar según necesitás."
- CTA: "Iniciar discovery — gratis, sin compromiso →"

**Para squads:**
- Badge: "Para squads"
- H2: "Dejá de competir por precio"
- Benefits:
  1. "Clientes pre-verificados llegan a vos con briefs claros de Kaizen" → "Sin filtrado, sin conjeturas. Solo trabajo."
  2. "Vos ponés tu precio. Lo garantizamos" → "Sin race to the bottom."
  3. "ZenitRank muestra tu reputación basada en resultados reales" → "Mejores clientes te encuentran. Mejores proyectos siguen."
  4. "El modelo de seña significa que los clientes están tan comprometidos como vos" → "Sin ghosting. Partnerships reales."
  5. "El tier Elite desbloquea tarifas más altas, mentoría y proyectos premium" → "Camino claro al crecimiento."
- CTA: "Pre-registrarte — ver tus primeras oportunidades →"

### Section 3 — FlowSection

**TimelineMockup:**
- 01 Discovery (cyan): "Kaizen entrevista a tu CEO, CTO, PM…" / Outcome: "Tenés un brief claro. Sin especificaciones vagas."
- 02 Matching (teal): "Zenit busca en 500+ squads verificados…" / Outcome: "Entrevistás personas que realmente pueden hacer el trabajo."
- 03 Deployment (gold): "El squad se integra con tu flujo de trabajo…" / Outcome: "El proyecto se entrega a tiempo. Tu riesgo es cero."
- Footer: "Tiempo al primer equipo → 2 semanas"

**Text block:**
- H2 line 1: "De cero a producción"
- H2 line 2: "en 3 pasos."
- Body: "Kaizen descubre. Zenit matchea. SafePay protege. / Sin conjeturas. Sin sorpresas."
- Link: "Ver proceso completo"

### Section 4 — WhyZenitSection

- H2 line 1: "No solo más rápido."
- H2 line 2: "Mejor en todos los sentidos."
- Hiring in-house: Pro "Calidad ✓" / Con "6 meses + $300k+ en equity. Headcount para siempre."
- Upwork: Pro "Velocidad ✓" / Con "La calidad es una apuesta. Vos filtrás 50 candidatos."
- Toptal: Pro "Calidad + Velocidad ✓" / Con "30% comisión. El matching tarda 2–3 semanas."
- Ventajas Zenit box:
  - Calidad: "4.8★ squads verificados, listos para producción"
  - Velocidad: "2 semanas, no 6 meses"
  - Costo: "15% comisión, sin equity, sin largo plazo"
  - Seguridad: "SafePay escrow, prueba GitHub, Squad B de backup"
  - Control: "Entrevistás 3–5 candidatos pre-filtrados"
- Link: "Ver comparación completa"

**ComparisonMatrix:** *(already in Spanish)*
- Velocidad / Calidad / Costo / Flexibilidad
- "Basado en tiempo promedio de contratación en LATAM · 2025"

### Section 5 — AITeamsSection

- Badge: "Para equipos de IA"
- H2 line 1: "Despachá features de IA."
- H2 line 2: "No en 9 meses."
- Alternativas:
  - Contratar ingenieros de IA: "$300k+ salario" / "9 meses" / "Fit no probado. Compromiso de equity."
  - Consultora: "$200k entrega" / "3 meses" / "Se van. Seguís sin saber IA."
  - DIY: "Tiempo perdido" / "Lento" / "Arquitectura incorrecta. Alto riesgo."
- Caja Zenit AI-native:
  - Timeline: "3–4 meses hasta feature vivo. Tu equipo lo aprende."
  - Costo: "$80–150k (15–18% del costo del proyecto)"
  - ROI: "Se paga en el mes 2–3. La capacidad queda en tu equipo."
- CTA: "Explorar transformación IA"

### Section 6 — TestimonialsSection

- Eyebrow: "Testimonios"
- H2 line 1: "Equipos reales."
- H2 line 2: "Resultados medibles."

*(Testimonial quotes stay in their original language — personas are LATAM, quotes can remain in EN or be translated)*

### Section 7 — FinalCTASection

- Eyebrow: "Empezar"
- H2 line 1: "Tu próximo equipo"
- H2 line 2: "en 2 semanas."
- Body: "No en 6 meses. No con $300k en salarios. Squads verificados, trabajo probado, protección SafePay — desde el día uno."
- Para empresas: "Squads verificados en 48h. SafePay en cada milestone." / "Iniciar discovery →"
- Para squads: "Clientes pre-verificados. Ponés tu precio. ZenitRank lo hace crecer." / "Pre-registrarme →"
- Para equipos IA: "Despachá features de IA en 3 meses. Tu equipo lo mantiene." / "Explorar camino IA →"
- Stats: "500+ squads verificados · 4.8★ score de calidad · 95% tasa de éxito · 2 sem. al primer equipo"

---

## Copy — Portuguese (Português)

Route: `/`
Status: ❌ Missing — No Portuguese copy exists. All strings are TBD.

When implementing PT localization, translate from the English copy above and adapt for Brazilian Portuguese (PT-BR) unless otherwise specified.

### Section 1 — HeroSection
- Badge 1: "Kaizen AI · Matching Inteligente" *(may work as-is)*
- Badge 2: "SafePay Protegido" *(may work as-is)*
- H1 line 1: TBD — "A maneira moderna de"
- H1 line 2: TBD — "escalar times de engenharia."
- Subheadline:
  1. TBD — "Kaizen descobre o que você realmente precisa."
  2. TBD — "Zenit faz o match de squads verificados que combinam com sua stack."
  3. TBD — "Você tem times prontos para produção em 2 semanas em vez de 6 meses."
  4. TBD — "4.8★ · 15% comissão · Sem contratos de longo prazo."
- CTA primary: TBD — "Iniciar discovery →"
- CTA secondary: TBD — "Pré-registrar meu squad →"
- CTA tertiary: TBD — "Ver como funciona ↓"
- Trust line: TBD — "500+ squads · $500k+ em projetos · 95% taxa de sucesso"

### Section 2 — ValuePropSection

**Para Empresas:**
- Badge: TBD — "Para Empresas"
- H2: TBD — "Capacidade sem contratar"
- Benefits: TBD (translate from EN copy above)
- CTA: TBD — "Iniciar discovery — grátis, sem compromisso →"

**Para Squads:**
- Badge: TBD — "Para Squads"
- H2: TBD — "Pare de competir por preço"
- Benefits: TBD (translate from EN copy above)
- CTA: TBD — "Pré-cadastrar — ver primeiras oportunidades →"

### Section 3 — FlowSection
- Timeline steps: TBD (translate from EN copy above)
- H2 line 1: TBD — "Do zero à produção"
- H2 line 2: TBD — "em 3 passos."
- Body: TBD — "Kaizen descobre. Zenit faz o match. SafePay protege. / Sem incertezas. Sem surpresas."
- Link: TBD — "Ver processo completo"

### Section 4 — WhyZenitSection
- H2: TBD — "Não só mais rápido. / Melhor em todos os sentidos."
- Competitor cards: TBD (translate from EN)
- Zenit box: TBD
- ComparisonMatrix rows: TBD — "Velocidade / Qualidade / Custo / Flexibilidade"
- Footer: TBD — "Baseado no tempo médio de contratação na LATAM · 2025"

### Section 5 — AITeamsSection
- Badge: TBD — "Para Times de IA"
- H2: TBD — "Lance features de IA. / Não em 9 meses."
- Alternatives: TBD
- Zenit AI box: TBD
- CTA: TBD — "Explorar transformação IA"

### Section 6 — TestimonialsSection
- Eyebrow: TBD — "Depoimentos"
- H2: TBD — "Times reais. / Resultados mensuráveis."
- Testimonial cards: TBD *(quotes may stay in original language)*

### Section 7 — FinalCTASection
- Eyebrow: TBD — "Começar"
- H2: TBD — "Seu próximo time / em 2 semanas."
- Body: TBD
- Card labels: TBD — "Para Empresas" / "Para Squads" / "Para Times de IA"
- CTAs: TBD
- Stats: TBD — "500+ squads verificados · 4.8★ score de qualidade · 95% taxa de sucesso · 2 sem. para o primeiro time"

**Notes for translator:**
- Use PT-BR (Brazilian Portuguese) as the primary dialect
- "Squad" is kept as-is (technical term, used across all languages)
- "Kaizen", "SafePay", "ZenitRank", "TalentPath", "TalkFlow" are brand names — do not translate
- "milestone" can be kept in English or translated as "entrega" depending on context
- "discovery" in the Kaizen context is a technical term — consider keeping as-is or using "diagnóstico"

---

## Components Used

| Component | Import Path | Notes |
|-----------|-------------|-------|
| `HeroSection` | `components/sections/HeroSection.tsx` | Includes internal `BackgroundGlows`, `GridOverlay` |
| `ValuePropSection` | `components/sections/ValuePropSection.tsx` | — |
| `FlowSection` | `components/sections/FlowSection.tsx` | Includes internal `TimelineMockup` |
| `WhyZenitSection` | `components/sections/WhyZenitSection.tsx` | Includes internal `ComparisonMatrix` |
| `AITeamsSection` | `components/sections/AITeamsSection.tsx` | Includes internal `AITimelineMockup` |
| `TestimonialsSection` | `components/sections/TestimonialsSection.tsx` | — |
| `FinalCTASection` | `components/sections/FinalCTASection.tsx` | — |
| `NeuralNoise` | `components/ui/neural-noise.tsx` | WebGL, gold `[0.96, 0.62, 0.04]`, opacity 0.80 |
| `Navbar` | `components/Navbar.tsx` | Global layout |
| `Footer` | `components/Footer.tsx` | Global layout |

See `components-used.md` for full details with props.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#080c0c` | Page background |
| `--primary` (teal) | `#0d9488` | Squad card borders, Check icons |
| `--secondary` (cyan) | `#00b4d8` | Hero badge, testimonial header |
| `--accent` (gold) | `#f59e0b` | H1 shimmer, company card, AI section |
| H1 typography | `clamp(28px, 3.8vw, 54px)` | `font-display` (Plus Jakarta Sans) |
| H2 typography | `clamp(26px, 3vw, 42px)` | Per section variant |
| Body | `font-sans text-base` | Inter, `#94a3b8` muted |
| NeuralNoise color | `[0.96, 0.62, 0.04]` (gold) | opacity 0.80, mixBlendMode: screen |
| Section bg: Hero | `#0F0F0F` | + WebGL overlay |
| Section bg: FinalCTA | `#070b0b` | + glow system |
| Card dark bg | `#050f0f` | TimelineMockup, ComparisonMatrix |

**CSS Animations used:**
- `.text-shimmer-gold` — H1 "scale engineering teams.", FlowSection H2, WhyZenitSection H2, FinalCTA H2
- `.text-shimmer` (cyan) — TestimonialsSection H2, AITeamsSection H2
- `animate-breathe` — badge pulsing dot (Hero, FinalCTA eyebrow)
- `gradient-border-teal` — Zenit advantages box

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| H1 → H2 → H3 hierarchy | ✅ |
| CTA `aria-label` where needed | ✅ |
| Decorative elements `aria-hidden` | ✅ |
| Color contrast (teal text) | ✅ 5.6:1 |
| Color contrast (cyan text) | ⚠️ ~3.5:1 (large text only) |
| Color contrast (gold text) | ⚠️ ~4.2:1 (borderline AA) |
| Reduced motion | ✅ Full `prefers-reduced-motion` support |
| Focus styles | ✅ `focus-visible` ring: 2px solid #00b4d8 |

**Gaps:**
- Testimonial avatar initials circles have no `aria-label`
- AITimelineMockup interactive-looking month cards have no `role="presentation"`
- ComparisonMatrix icons (✓/—/✕) are visual-only with no screen-reader text

---

## Responsive

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (375px) | All sections single-column. Hero centered. ValueProp cards stacked. FlowSection: text first, then mockup. WhyZenitSection: text first, matrix below. AITimeline: scrollable or stacked. |
| Tablet (768px) | ValueProp goes 2-col (md:grid-cols-2). Most others still single. |
| Desktop (1440px) | Full 2-col layout in FlowSection, WhyZenitSection. Testimonials 3-col. AITimeline 4-col. |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | `/ai-migration` linked from `AITeamsSection` CTA and `FinalCTASection` "For AI Teams" card — both 404 |
| P0 | Hero trust line: "15+ squads" inconsistent with "500+" used in FinalCTA stats + Footer |
| P0 | Badge copy: "Kaizen AI · Matching Inteligente" — Spanish in English page (intentional mixed or oversight?) |
| P1 | ComparisonMatrix rows labeled in Spanish (Velocidad, Calidad, Costo, Flexibilidad) while page is EN |
| P1 | No OG image at `/og-image.png` — social previews broken |
| P2 | AOS provider initialized but not used |

---

## Next Steps (for implementation)

- [ ] Fix `/ai-migration` — create page or redirect to `/how-it-works#ai`
- [ ] Fix hero trust line: change "15+ squads" to "500+ squads"
- [ ] Migrate all copy to i18n dictionaries (EN/ES/PT)
- [ ] Add `role="presentation"` to mockup elements inside `AITimelineMockup`
- [ ] Add `aria-label` to testimonial avatar initials
- [ ] Generate `/og-image.png` and add to `/public`
- [ ] Decide: keep Spanish ComparisonMatrix labels or translate to EN for consistency
