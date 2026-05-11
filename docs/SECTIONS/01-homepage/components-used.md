# Homepage — Components Used

Route: `/`
File: `app/page.tsx`

---

## Section Components (imported in page.tsx)

| Component | File | Type | Notes |
|-----------|------|------|-------|
| `HeroSection` | `components/sections/HeroSection.tsx` | Client | WebGL NeuralNoise, badge row, H1, subheadline, CTAs, trust strip |
| `ValuePropSection` | `components/sections/ValuePropSection.tsx` | Client | 2-col grid, stagger animation |
| `FlowSection` | `components/sections/FlowSection.tsx` | Client | Contains internal `TimelineMockup` |
| `WhyZenitSection` | `components/sections/WhyZenitSection.tsx` | Client | Contains internal `ComparisonMatrix` |
| `AITeamsSection` | `components/sections/AITeamsSection.tsx` | Client | Contains internal `AITimelineMockup` |
| `TestimonialsSection` | `components/sections/TestimonialsSection.tsx` | Client | staggerContainer + scaleIn |
| `FinalCTASection` | `components/sections/FinalCTASection.tsx` | Client | Complex glow system |

---

## UI Components (used within section components)

| Component | File | Props | Where used |
|-----------|------|-------|------------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | `color: [R,G,B]`, `opacity`, `speed`, `intensity` | HeroSection — gold `[0.96, 0.62, 0.04]`, opacity 0.80 |
| `Button` | `components/ui/button.tsx` | shadcn primitive | CTA buttons across all sections |

---

## Internal Sub-components (defined within section files, not exported)

| Component | Defined in | Purpose |
|-----------|-----------|---------|
| `BackgroundGlows` | `HeroSection.tsx` | Teal/cyan/gold radial gradient overlays |
| `GridOverlay` | `HeroSection.tsx` | Static SVG cyan grid at 6% opacity |
| `TimelineMockup` | `FlowSection.tsx` | 3-step dark card with outcomes + footer stat |
| `ComparisonMatrix` | `WhyZenitSection.tsx` | 4×3 grid (Velocidad/Calidad/Costo/Flexibilidad × Hiring/Upwork/Zenit) |
| `AITimelineMockup` | `AITeamsSection.tsx` | 4-column Month 1–4 grid with progress bar |

---

## Global Layout Components (from RootLayout)

| Component | File | Notes |
|-----------|------|-------|
| `Navbar` | `components/Navbar.tsx` | Client — LocaleSwitcher, MegaPanel, MobileAccordion |
| `Footer` | `components/Footer.tsx` | Server — 4-col grid |
| `SmoothScrollProvider` | `components/providers/SmoothScrollProvider.tsx` | Client — Lenis v1.3.23 |
| `AOSProvider` | `components/providers/AOSProvider.tsx` | Client — initialized but NOT active on homepage |

---

## Motion Variants (from lib/motionVariants.ts)

| Variant | Used by | Effect |
|---------|---------|--------|
| `fadeInUp` | HeroSection (badges, H1, subheadline, CTAs) | y: 32→0, opacity 0→1, 0.6s |
| `staggerContainer` | ValuePropSection, TestimonialsSection, FinalCTASection | children delay 0.12s |
| `scaleIn` | ValuePropSection cards, TestimonialsSection cards | scale: 0.92→1, opacity 0→1 |
| `slideInLeft` | FlowSection (TimelineMockup), WhyZenitSection (text) | x: -50→0 |
| `slideInRight` | FlowSection (text), WhyZenitSection (ComparisonMatrix) | x: 50→0 |

All variants use `ease: [0.22, 1, 0.36, 1]` and `whileInView` with `defaultViewport: { once: true, margin: "-80px" }`.

---

## Unused Section Components (exist in /components/sections but NOT used on homepage)

The following components exist but are NOT imported by any page:
`AIMaturitySection`, `AgenticPipelineSection`, `BenefitsSection`, `DualAudienceSection`,
`FAQSection`, `FeaturedSquadsSection`, `GenUISection`, `HeroCanvas`, `HeroVisuals`,
`HowItWorksSection`, `KaizenSection`, `PlatformFeatures`, `PlatformShowcase`,
`PlatformWireframes`, `PreRegCTA`, `ProblemSolutionSection`, `SafePaySection`,
`StatsSection`, `TheSolutionSection`, `TrustSignals`, `TrustStrip`

See `docs/COMPONENTS/COMPONENTS.md` for full catalog including unused components.
