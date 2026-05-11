# Homepage — `/`

**File:** `app/page.tsx`  
**Language:** English (primary), Spanish mixed in badges  
**Sections:** 7

---

## Section 1 — HeroSection
**File:** `components/sections/HeroSection.tsx`  
**Background:** `#0F0F0F` + NeuralNoise WebGL (gold `[0.96, 0.62, 0.04]`, opacity 0.80, mixBlendMode: screen)  
**Overlays:** Background glows (teal top-left, cyan top-right, gold bottom-center) + grid SVG overlay + bottom fade

### Badges row
- `"Kaizen AI · Matching Inteligente"` — cyan pill, pulsing dot
- `"SafePay Protegido"` — gold pill

### H1
```
The modern way to
scale engineering teams.
```
"scale engineering teams." uses `.text-shimmer-gold` animation.

### Subheadline (4 lines)
```
Kaizen discovers what you actually need.
Zenit matches vetted squads that fit your stack.
You deploy production-ready teams in 2 weeks instead of 6 months.
4.8★ · 15% cost · Zero long-term contracts.
```
Fonts: `4.8★` gold bold, `15% cost` cyan bold, last line white/70.

### CTAs
- Primary: `"Start Discovery →"` → `/companies` (white button, hover scale + glow)
- Secondary: `"Pre-register Your Squad →"` → `/squads/pre-registro` (cyan border)
- Tertiary link: `"See how it works ↓"` → `#how-it-works` (teal text)
- Trust line: `"15+ squads · $500k+ projects · 95% success rate"` (muted)

### Animations
- NeuralNoise: WebGL shader, mouse-reactive gold neural pattern
- BackgroundGlows: static radial gradients (no animation)
- GridOverlay: static SVG cyan grid at 6% opacity
- H1 badge: `motion` fadeInUp, delay 0
- H1: delay 0.12, y: 32→0
- Subheadline: delay 0.28, y: 20→0
- CTAs: delay 0.42, y: 18→0

---

## Section 2 — ValuePropSection
**File:** `components/sections/ValuePropSection.tsx`  
**Background:** radial gradient teal/cyan on section  
**Layout:** 2-column grid (lg), each column a card

### Left card — "For Companies"
- Badge: `"For Companies"` gold pill
- H2: `"Get Capacity Without Hiring"` (clamp 22–32px)
- 5 benefit rows with gold Check icons:
  1. Kaizen maps your actual needs → "Clear specification. No surprises mid-project."
  2. Zenit matches from 500+ vetted squads down to 3–5 perfect fits → "You interview candidates you'd actually hire."
  3. SafePay escrow + GitHub proof on every milestone → "Zero payment risk. Work is proven."
  4. Squad B backup replaces underperforming teams in 24 hours → "Your timeline is protected."
  5. 15% commission. No equity. No long-term commitment → "Flexibility to scale up or down as needed."
- CTA link: `"Start Discovery — free, no commitment →"` → `/companies` (gold text)

### Right card — "For Squads"
- Badge: `"For Squads"` teal pill
- H2: `"Stop Competing On Price"` (clamp 22–32px)
- 5 benefit rows with teal Check icons:
  1. Pre-vetted clients come to you with clear, Kaizen-generated briefs → "No vetting, no guessing, just work."
  2. You set your rate. We guarantee it → "No race to the bottom."
  3. ZenitRank shows your reputation based on real project outcomes → "Better clients find you. Better projects follow."
  4. Seña model means clients are as committed as you are → "No ghosting. Real partnerships."
  5. Elite tier unlocks higher rates, mentorship, and premium projects → "Clear path to growth."
- CTA link: `"Pre-register — see your first opportunities →"` → `/get-started?type=squad` (teal text)

### Animations
- `staggerContainer` + `scaleIn` on both cards via `whileInView`
- Viewport: `{ once: true, margin: "-80px" }`

---

## Section 3 — FlowSection
**File:** `components/sections/FlowSection.tsx`  
**Background:** teal glow right + teal blur orb left  
**Layout:** 2-column, mockup left / text right (reverses on mobile)

### Left: TimelineMockup (dark card `#050f0f`)
3-step timeline:
- **01 Discovery** — cyan — "1–2 weeks" — Kaizen interviews your CEO, CTO, PM…
  - Outcome: "You have a clear brief. No vague specifications."
- **02 Matching** — teal — "24–48 hours" — Zenit searches 500+ vetted squads…
  - Outcome: "You interview people who can actually do the job."
- **03 Deployment** — gold — "2 weeks onboarding" — Squad integrates with your workflow…
  - Outcome: "Project ships on time. Your risk is zero."
- Footer: "Time to first team" → `2 weeks` (cyan bold)

### Right: Text
- H2: `"From zero to production"` / `"in 3 steps."` (shimmer-gold)
- Body: "Kaizen discovers. Zenit matches. SafePay protects." / "No guessing. No surprises."
- Link: `"See Full Process"` → `/how-it-works` with ArrowRight icon

### Animations
- Mockup: `x: -50→0`, `whileInView`
- Text: `x: 50→0`, delay 0.1

---

## Section 4 — WhyZenitSection
**File:** `components/sections/WhyZenitSection.tsx`  
**Background:** gold glow left + gold blur orb right  
**Layout:** 2-column, text left / comparison matrix right

### Left: Text + alternatives
- H2: `"Not just faster."` / `"Better in every way."` (shimmer-gold)
- 3 alternative comparison cards:
  - **Hiring in-house** — pro: "Quality ✓" — con: "6 months + $300k+ equity. Headcount forever."
  - **Upwork** — pro: "Speed ✓" — con: "Quality is a gamble. You vet 50 candidates yourself."
  - **Toptal** — pro: "Quality + Speed ✓" — con: "30% commission. Matching takes 2–3 weeks."
- Zenit advantages box (teal border):
  - Quality: 4.8★ vetted squads, production-ready
  - Speed: 2 weeks, not 6 months
  - Cost: 15% commission, no equity, no long-term
  - Safety: SafePay escrow, GitHub proof, Squad B backup
  - Control: You interview 3–5 pre-filtered candidates
- Link: `"See Full Comparison"` → `/how-it-works`

### Right: ComparisonMatrix (dark card `#050f0f`)
4×3 grid — rows: Velocidad, Calidad, Costo, Flexibilidad — columns: Hiring, Upwork, Zenit
- ✓ (teal) / — (amber/yellow, "half") / ✕ (white/25)
- Zenit column highlighted with `bg-teal/10` per row
- Footer: "Basado en tiempo promedio de contratación en LATAM · 2025"

### Animations
- Text: `x: -50→0`, `whileInView`
- Matrix: `x: 50→0`, delay 0.1

---

## Section 5 — AITeamsSection
**File:** `components/sections/AITeamsSection.tsx`  
**Background:** cyan/teal glow center + gold blur bottom-left  
**Layout:** Text centered top, full-width mockup bottom

### Text (centered)
- Badge: `"For AI Teams"` gold pill with pulsing dot
- H2: `"Ship AI Features Fast."` / `"Not 9 Months Later."` (text-shimmer cyan)
- 3 alternative cards (red-bordered):
  - Hiring AI engineers: "$300k+ salary", "9 months", "Unproven fit. Equity commitment."
  - Consulting firm: "$200k delivery", "3 months", "They leave. You still don't know AI."
  - DIY with your team: "Lost time", "Slow", "Wrong architecture. High risk."
- Zenit AI-native path box (gold border):
  - Timeline: 3–4 months to live feature. Your team learns it.
  - Cost: $80–150k (15–18% on project cost)
  - ROI: Breaks even month 2–3. Capability stays with you.
- CTA: `"Explore AI Transformation"` → `/ai-migration` (gold, BROKEN — page doesn't exist)

### AITimelineMockup
4-column grid (Month 1–4): Assessment (cyan), Build (teal), Rollout (gold), Handoff (cyan)
- Each has icon, label, color-coded description
- Footer progress bar: teal→cyan→gold gradient

### Animations
- Text block: `y: 30→0`, `whileInView`
- Mockup: `y: 40→0`, delay 0.15

---

## Section 6 — TestimonialsSection
**File:** `components/sections/TestimonialsSection.tsx`  
**Background:** plain (`py-20`, no bg override)  
**Layout:** 3-column card grid

### Header
- Eyebrow: `"Testimonials"` (cyan monospace, uppercase)
- H2: `"Real teams."` / `"Measurable results."` (text-shimmer cyan)

### Cards (3 cards using SAR format: Situation / Action / Result)
**Card 1 — Matías Rodríguez (🇦🇷) — CEO, Series B SaaS — cyan**
- Situation: "We were running 3 parallel projects with no capacity to add engineers."
- Action: "Zenit matched 3 vetted squads in under 2 weeks. Each one fit our stack exactly."
- Result: "$450k in dev costs saved. 4.7★ quality across all three projects."

**Card 2 — Diego Fuentes (🇲🇽) — CTO, FinTech MX — gold**
- Situation: "We promised an AI feature for Q3. Our team had zero AI experience."
- Action: "Kaizen scoped it in a week. The squad shipped to production in 3 months."
- Result: "Feature live in Q3 — not 9 months later. Team owns it. No dependency."

**Card 3 — Carlos Mendes (🇧🇷) — Squad Lead, DevCraft — teal**
- Situation: "We were winning 3% of proposals. Clients didn't trust us — no proof, no ranking."
- Action: "Kaizen pre-qualified clients. ZenitRank surfaced our track record automatically."
- Result: "Win rate jumped to 65%. Rates doubled. Zero time wasted on bad-fit clients."

Avatar: 2-letter initials in colored circle border.

### Animations
- `staggerContainer` + `scaleIn` on cards

---

## Section 7 — FinalCTASection
**File:** `components/sections/FinalCTASection.tsx`  
**Background:** `#070b0b` + complex glow system (teal radial center, gold top-left, cyan bottom-right) + grid-pattern overlay + corner accent lines

### Content
- Eyebrow: `"Get Started"` (teal pill, pulsing cyan dot)
- H2: `"Ship Your Next Team"` / `"In 2 Weeks."` (shimmer-gold)
- Body: "Not 6 months. Not $300k in salaries. Vetted squads, proven work, SafePay protection — from day one."
- 3 audience cards:
  - **For Companies** (gold): "Vetted squads in 48h. SafePay on every milestone." → `"Start Discovery →"` → `/companies`
  - **For Squads** (teal): "Pre-vetted clients. Set your rate. ZenitRank grows it." → `"Pre-register →"` → `/squads/pre-registro`
  - **For AI Teams** (cyan): "Ship AI features in 3 months. Your team owns it after." → `"Explore AI Path →"` → `/ai-migration` (BROKEN)
- Social proof strip (4 stats): `500+` vetted squads · `4.8★` average quality score · `95%` project success rate · `2 wks` to first team

### Animations
- `staggerContainer` + `fadeInUp` on all elements
