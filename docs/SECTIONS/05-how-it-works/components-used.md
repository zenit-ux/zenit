# How It Works — Components Used

Route: `/how-it-works`
File: `app/how-it-works/page.tsx`

---

| Component | File | Notes |
|-----------|------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | Teal, opacity 0.30 |
| `KaizenBriefMockup` | Inline in page | Chat UI, fintech example |
| `SafePayTimelineMockup` | Inline in page | 5 milestones, $80k |
| `AgentNetworkMockup` | Inline in page | BETA CONCEPT badge |
| `GenUIMockup` | Inline in page | BETA badge, Fleet Management |
| Lucide: `Shield` | `lucide-react` | SafePay section |
| Lucide: `CheckCircle` | `lucide-react` | Step completion states |

**Note:** `AgenticPipelineSection.tsx`, `GenUISection.tsx`, `FAQSection.tsx`, `HowItWorksSection.tsx` all exist in `components/sections/` but are NOT used here — content is implemented inline in the page file.

**Animations:** `fadeInUp` on all text blocks; `slideInLeft`/`slideInRight` on 2-col layouts; `staggerContainer` + `scaleIn` on step cards.
