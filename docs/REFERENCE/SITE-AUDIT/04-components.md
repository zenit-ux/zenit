# Components

## Global Layout Components

### `components/Navbar.tsx`
**Type:** Client component (`"use client"`)  
**Dependencies:** Framer Motion, Lucide (Menu, X, ArrowRight, Brain, ShieldCheck, Users, BarChart3, Zap, Star, ChevronDown, BookOpen, MessageSquare, HelpCircle, Award, TrendingUp, Route, Globe)

**Sub-components:**
- `LocaleSwitcher` — globe icon + dropdown with ES/PT/EN; detects locale from pathname, rewrites URL; `aria-expanded`, `aria-haspopup`, `aria-label="Cambiar idioma"`
- `FeaturedCard` — card in megamenu with icon, label, description, accent color variant (cyan/gold/teal)
- `MegaPanel` — 4-col dropdown: 2 featured cards + platform links + resource links + CTA bar; appears on hover; `AnimatePresence`
- `NavDropdown` — button with ChevronDown + MegaPanel; hover-open; `Escape` key closes
- `MobileAccordion` — accordion item for mobile; `AnimatePresence` height animation; `aria-expanded`

**Desktop nav items:**
- `"For Companies"` — dropdown → `companiesMenu` (Kaizen AI, SafePay, Browse Squads, Post a Project, Pricing, How It Works, Case Studies)
- `"For Squads"` — dropdown → `squadsMenu` (SkillBase, TalentPath, Register Squad, TalkFlow, TalentPath, Earnings, Squad Handbook)
- `"How It Works"` → `/how-it-works`
- `"Pricing"` → `/pricing`
- `"Blog"` → `/blog`

**Desktop CTAs:**
- `LocaleSwitcher`
- `"Log in"` → `/login` (BROKEN)
- `"Get started"` → `/get-started` (BROKEN) — white button with ArrowRight, hover shadow

**Mobile nav:**
- Hamburger toggle (Menu/X icon)
- Locale switcher (3 pills: Español / Português / English)
- `MobileAccordion` for Companies + Squads
- Links: How It Works / Pricing / Blog
- Bottom grid: Log in + Get started

**Scroll behavior:** Transparent at top → `bg-[#080c0c]/85 backdrop-blur-2xl border-b` after 24px scroll

**Animations:**
- Navbar entrance: `opacity: 0→1, y: -20→0`, duration 0.5
- Megamenu: `opacity: 0→1, y: 8→0, scale: 0.98→1`, duration 0.18
- Mobile menu: `height: 0→auto`, duration 0.22

---

### `components/Footer.tsx`
**Type:** Server component  
**Structure:** 4-col grid (1 brand col + 3 link cols) + bottom bar

**Brand column:**
- Logo (SVG)
- `"The marketplace for elite tech squads."` (muted)
- Live badge: `"500+ squads active"` (pulsing cyan dot, teal/cyan pill)

**Link columns:**
- **Product:** For Squads → `/squads`, For Companies → `/companies`, How It Works → `/how-it-works`, Pricing → `/pricing`
- **Company:** Blog → `/blog`, About → `/about` (BROKEN), Careers → `/careers` (BROKEN), Contact → `/contact` (BROKEN)
- **Legal:** Privacy → `/privacy` (BROKEN), Terms → `/terms` (BROKEN), SafePay → `/safepay`

**Bottom bar:**
- `"© 2026 Zenit Technologies, Inc. All rights reserved."`
- `"Built for the future of work."`

---

### `components/providers/SmoothScrollProvider.tsx`
**Type:** Client component  
**Library:** Lenis v1.3.23  
Wraps entire app, enables smooth scrolling globally.

### `components/providers/AOSProvider.tsx`
**Type:** Client component  
**Library:** AOS (installed but minimally active)  
Initializes AOS on mount, currently not used for any visible elements.

---

## Section Components (Homepage)

### `components/sections/HeroSection.tsx`
See `02-homepage.md` Section 1.

### `components/sections/ValuePropSection.tsx`
See `02-homepage.md` Section 2.

### `components/sections/FlowSection.tsx`
See `02-homepage.md` Section 3.  
Contains `TimelineMockup` (internal component).

### `components/sections/WhyZenitSection.tsx`
See `02-homepage.md` Section 4.  
Contains `ComparisonMatrix` (internal component).

### `components/sections/AITeamsSection.tsx`
See `02-homepage.md` Section 5.  
Contains `AITimelineMockup` (internal component).

### `components/sections/TestimonialsSection.tsx`
See `02-homepage.md` Section 6.

### `components/sections/FinalCTASection.tsx`
See `02-homepage.md` Section 7.

---

## Section Components (unused / partial)

The following section components exist but are **not imported in any page**:

### `components/sections/AIMaturitySection.tsx`
Not imported anywhere. Purpose: likely AI maturity assessment section.

### `components/sections/AgenticPipelineSection.tsx`
Not imported anywhere. The agentic pipeline content is inline in `how-it-works/page.tsx`.

### `components/sections/BenefitsSection.tsx`
Not imported anywhere. Benefits are inline in page files.

### `components/sections/DualAudienceSection.tsx`
Not imported anywhere.

### `components/sections/FAQSection.tsx`
Not imported anywhere. FAQ content is inline in `how-it-works/page.tsx` and `pricing/page.tsx`.

### `components/sections/FeaturedSquadsSection.tsx`
Not imported anywhere.

### `components/sections/GenUISection.tsx`
Not imported anywhere. The Gen UI content is inline in `how-it-works/page.tsx`.

### `components/sections/HeroCanvas.tsx`
Not imported anywhere. The canvas/neural effect is handled by `neural-noise.tsx`.

### `components/sections/HeroVisuals.tsx`
Not imported anywhere.

### `components/sections/HowItWorksSection.tsx`
Not imported anywhere. How It Works content is a full page.

### `components/sections/KaizenSection.tsx`
Not imported anywhere. Kaizen content is a full page.

### `components/sections/PlatformFeatures.tsx`
Not imported anywhere.

### `components/sections/PlatformShowcase.tsx`
Not imported anywhere.

### `components/sections/PlatformWireframes.tsx`
Not imported anywhere.

### `components/sections/PreRegCTA.tsx`
Not imported anywhere.

### `components/sections/ProblemSolutionSection.tsx`
Not imported anywhere.

### `components/sections/SafePaySection.tsx`
Not imported anywhere. SafePay is a full page.

### `components/sections/StatsSection.tsx`
Not imported anywhere. Stats are inline in page files.

### `components/sections/TheSolutionSection.tsx`
Not imported anywhere.

### `components/sections/TrustSignals.tsx`
Not imported anywhere. Trust signals are inline in HeroSection.

### `components/sections/TrustStrip.tsx`
Not imported anywhere.

---

## Squad Components

### `components/squads/PreRegistroPage.tsx`
**Type:** Client component  
Used by `/es/squads/pre-registro`, `/en/squads/pre-registro`, `/pt/squads/pre-registro`  
Props: `{ locale: Locale }` (es | en | pt)  
Uses `t(locale)` from `lib/i18n/preregistro.ts` for all strings  
Opens `RegistroModal` on CTA click

### `components/squads/KaizenChat.tsx`
Exists. Not confirmed whether used in any current page.

### `components/squads/RegistroModal.tsx`
**Type:** Client component  
Used by `PreRegistroPage` (localized version)  
Modal flow for squad registration.

---

## UI Components

### `components/ui/neural-noise.tsx`
**Type:** Client component (WebGL)  
**Props:** `color: [R, G, B]` (0-255 or 0-1 scale), `opacity: number`, `speed: number`, `intensity: number`, `className`, `style`  
**Implementation:** Custom WebGL shader (`NeuralNoise` vertex + fragment shaders), mouse-reactive, renders to canvas  
Uses a `neuro_shape` GLSL function with 15-iteration loop for organic noise pattern  
Used on: Hero (`gold [0.96, 0.62, 0.04]`), Companies hero (`gold [245,158,11]`), Squads hero (`teal [15,118,110]`), Kaizen hero, How It Works, SafePay, Blog, TalentPath, TalkFlow, Pricing

### `components/ui/GradientButton.tsx`
Gradient border button with spinning animation (`.gb-spin`).

### `components/ui/GBCard.tsx`
Gradient border card component.

### `components/ui/SpotlightCard.tsx`
Card with spotlight/hover glow effect.

### `components/ui/button.tsx`
shadcn button primitive.

---

## Shared Component

### `components/SectionHeader.tsx`
Reusable section header with eyebrow, H2, and optional sub. Not confirmed to be used in current pages (most pages define headings inline).

---

## i18n

### `lib/i18n/preregistro.ts`
Provides `t(locale: Locale)` returning all UI strings for the localized pre-registro page in ES/EN/PT.

---

## Motion Variants (`lib/motionVariants.ts`)

All variants use ease `[0.22, 1, 0.36, 1]` (custom cubic bezier, close to spring-out).

| Variant | Effect | Use case |
|---------|--------|----------|
| `fadeInUp` | y: 32→0, opacity 0→1, 0.6s | Text blocks, cards |
| `staggerContainer` | Staggers children 0.12s, delay 0.08s | Parent wrapper |
| `scaleIn` | scale: 0.92→1, opacity 0→1, 0.5s | Cards, modals, badges |
| `slideInRight` | x: 48→0, opacity 0→1, 0.6s | Hero right panel |
| `slideInLeft` | x: -48→0, opacity 0→1, 0.6s | Hero left panel |
| `fadeIn` | opacity 0→1, 0.4s | Overlays, dividers |
| `defaultViewport` | `{ once: true, margin: "-80px" }` | All whileInView triggers |
