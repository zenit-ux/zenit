# For Companies — Components Used

Route: `/companies`
File: `app/companies/page.tsx`

---

## UI Components

| Component | File | Props | Notes |
|-----------|------|-------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | `color: [245,158,11]`, `opacity: 0.32`, mixBlendMode: screen | Gold, lower opacity than homepage |

## Lucide Icons

| Icon | Section |
|------|---------|
| `ScanSearch` | Benefit card 1 — Discovery |
| `ShieldCheck` | Benefit card 2 — SafePay |
| `BadgeCheck` | Benefit card 3 — ZenitRank |
| `BrainCircuit` | Benefit card 4 — Product Brain |
| `UserCheck` | Benefit card 5 — You choose |
| `Layers3` | Benefit card 6 — Human in loop |
| `CheckCircle2` | SafePay callout checklist |
| `ArrowRight` | CTAs |

## Framer Motion

All sections use `whileInView` with `defaultViewport: { once: true, margin: "-80px" }`:
- Hero: `fadeInUp` on eyebrow, H1, body, CTAs (staggered delays)
- Benefits: `staggerContainer` + `scaleIn` on cards
- Pipeline: `fadeInUp` on each step
- Comparison: `fadeInUp`
- SafePay callout: `slideInLeft` (text) + `slideInRight` (checklist)

## Layout

- `<main>` with multiple `<section>` children
- `<header>` (Navbar) and `<footer>` (Footer) from root layout
