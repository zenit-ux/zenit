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

## Copy

See `copy-es.md` / `copy-en.md` / `copy-pt.md`.

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
