# For Squads — Components Used

Route: `/squads`
File: `app/squads/page.tsx`

---

| Component | File | Props | Notes |
|-----------|------|-------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | `color: [15,118,110]`, `opacity: 0.40` | Teal |
| `SquadDashboardMockup` | Inline or `components/` | — | 3 squad cards, hidden on mobile (`hidden lg:block`) |
| Lucide: `TrendingUp` | `lucide-react` | — | Benefit #1 |
| Lucide: `Shield` | `lucide-react` | — | Benefit #2 |
| Lucide: `BrainCircuit` | `lucide-react` | — | Benefit #3 |
| Lucide: `Globe` | `lucide-react` | — | Benefit #4 |
| Lucide: `Zap` | `lucide-react` | — | Benefit #5 |
| Lucide: `GraduationCap` | `lucide-react` | — | Benefit #6 |
| Lucide: `CheckCircle2` | `lucide-react` | — | Criteria checklist |

**Animations:** `staggerContainer` + `scaleIn` on benefit cards; `fadeInUp` on text blocks; hero: `slideInRight` on mockup.
