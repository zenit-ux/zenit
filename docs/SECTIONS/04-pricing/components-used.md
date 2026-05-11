# Pricing — Components Used

Route: `/pricing`
File: `app/pricing/page.tsx`

---

| Component | File | Notes |
|-----------|------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | Teal, opacity 0.32 |
| `Button` | `components/ui/button.tsx` | Featured plan (Companies) uses white/prominent variant |
| Lucide: `Shield` | `lucide-react` | SafePay callout section |
| Lucide: `Check` | `lucide-react` | Plan feature rows |

**Animations:** `staggerContainer` + `scaleIn` on plan cards; `fadeInUp` on sections.

**FAQ:** Accordion-style using Framer Motion height animation (AnimatePresence).

**Note:** `FAQSection.tsx` component exists in `components/sections/` but is NOT used here — FAQ is implemented inline in the page.
