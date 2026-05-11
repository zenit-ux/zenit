# 09 — TalentPath

**File:** `app/talentpath/page.tsx`
**Route:** `/talentpath`
**Language:** Spanish (H1/hero body) + English (all sections, pricing)
**Status:** ✅ Built (partially audited)
**Layout:** Hero + 5 sections + pricing

---

## Current State

Three-sided platform page for juniors, senior squads, and companies. H1 in Spanish, rest in English. `JuniorDashboardMockup` shows a mentor dashboard. Pricing: juniors $49/mo, seniors free (earn $340–600/mo/junior), companies via Zenit plan.

---

## Sub-sections

### 1 — Hero
- NeuralNoise (color not confirmed)
- Eyebrow: "TalentPath · For Juniors"
- H1: "Crecé como / profesional." *(Spanish, shimmer-gold)*
- Body: "Trabajá en proyectos reales. Ganancia escalable. Feedback constante de seniors." *(Spanish)*
- CTA primary: "Apply to TalentPath →" *(English)*
- CTA secondary: "For squads: become a mentor"
- Trust: "$49/mo · 3-month program · Real projects from day one"

### 2 — For Juniors
- Eyebrow: "For Juniors"
- H3: "Real projects. Real career. Not another bootcamp."
- Bullets: $49/month / Real projects not sandbox / Graduate with verifiable track record

### 3 — The Journey (4 steps)
- Apply & Challenge (34% pass rate)
- Get Matched (Kaizen matches to senior squad)
- Ship Real Work (daily feedback)
- Graduate Ready (SkillBase profile + references)

### 4 — For Senior Squads
- H3: "Earn more. Grow the ecosystem. Shape the next generation."
- Earn $340–600/month per junior / Real project help / First pick to hire graduates

### 5 — For Companies
- H3: "A talent pipeline that builds itself."
- Graduates trained on real projects / First-access hiring / Kaizen flags top graduates

### 6 — Pricing (3 cards)
- Juniors (cyan): $49/month, 3-month program, real work, mentor feedback
- Senior Squads (gold): Free to mentor, earn $340–600/mo per junior
- Companies (teal): Via Zenit plan, access graduates, first-hire

### 7 — AI Callout
- H2: "Kaizen matches juniors to squads the same way it matches projects."
- Stats: 34% challenge pass rate / $49/mo / 3× more hires vs. bootcamp

### 8 — Final CTA
- H2: "Your career starts with real work." *(shimmer-gold)*
- Body: "Apply to TalentPath. The next cohort starts soon."
- CTA 1: "Apply now — $49/month →"
- CTA 2: "For squads: interested in mentoring? Contact us →"

---

## Copy

See `copy-en.md` / `copy-es.md` / `copy-pt.md`.

---

## Components Used

| Component | Notes |
|-----------|-------|
| `NeuralNoise` | Color not confirmed |
| `JuniorDashboardMockup` | Inline — "Welcome back, Martín · Week 3 of 12", mentor + tasks |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P1 | H1 in Spanish, all content in English — mixed without i18n |
| P1 | No OG image |
| P2 | JuniorDashboardMockup buttons need `aria-disabled` or `role="presentation"` |

---

## Next Steps

- [ ] Migrate to i18n dictionaries
- [ ] Generate OG image
- [ ] Add accessibility attrs to mockup
