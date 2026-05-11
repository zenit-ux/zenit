# Animations

All animations defined in `app/globals.css` and `lib/motionVariants.ts`.
Source: `05-design-system.md` (SITE-AUDIT)

---

## Framer Motion Variants (`lib/motionVariants.ts`)

All variants use ease `[0.22, 1, 0.36, 1]` — custom cubic bezier, close to spring-out.
All `whileInView` use `defaultViewport: { once: true, margin: "-80px" }`.

| Variant | Transform | Duration | Primary use |
|---------|-----------|----------|-------------|
| `fadeInUp` | y: 32→0, opacity: 0→1 | 0.6s | Text blocks, hero content, cards |
| `staggerContainer` | children delay: 0.12s, self delay: 0.08s | — | Grid parents |
| `scaleIn` | scale: 0.92→1, opacity: 0→1 | 0.5s | Cards, modals, badges |
| `slideInRight` | x: 48→0, opacity: 0→1 | 0.6s | Hero right panels |
| `slideInLeft` | x: -48→0, opacity: 0→1 | 0.6s | Hero left panels |
| `fadeIn` | opacity: 0→1 | 0.4s | Overlays, dividers |
| `defaultViewport` | `{ once: true, margin: "-80px" }` | — | All whileInView triggers |

---

## Micro-interactions (Framer Motion)

| Element | Behavior |
|---------|----------|
| CTA hover | `hover:scale-[1.03]`, `hover:shadow-[...]` |
| Card hover | `whileHover={{ y: -4 }}`, spring `stiffness: 400, damping: 25` |
| Navbar CTA | `hover:translate-x-0.5` on ArrowRight icon |
| Megamenu | `scale: 0.98→1, opacity: 0→1, y: 8→0`, 0.18s |
| Mobile menu | `height: 0→auto`, 0.22s, AnimatePresence |
| LocaleSwitcher dropdown | `y: 6→0, scale: 0.97→1` |
| Form member add/remove | `height: 0→auto`, AnimatePresence |
| SuccessView | fadeInUp on entry |

---

## CSS Animations (defined in `globals.css`)

### Float
```css
/* Keyframe: translateY 0 → -12px → 0, ease-in-out */
.animate-float      /* 7s — cards, preview panels */
.animate-float-slow /* 12s — background elements */
```

### Glow Pulses
```css
/* box-shadow pulse between low and high opacity */
.card-glow-cyan /* 4s — rgba(0,180,216,0.08) → 0.22 */
.card-glow-teal /* 4s — rgba(15,118,110,0.1) → 0.24 */
```

### Gradient Border Spin (`--gb-angle` @property)
```css
/* conic-gradient(teal, cyan, gold) rotating via @property */
.gb-spin       /* 3.5s linear infinite */
.gb-spin-hover /* 5s, paused until :hover */
.gb-spin-slow  /* 8s */
```
Used by `GradientButton.tsx`.

### Text Effects
```css
/* .text-shimmer — cyan gradient, 4s linear */
/* .text-shimmer-gold — gold gradient, 4s linear */
/* See TYPOGRAPHY.md for full details */
```

### Background Utilities
```css
.dot-grid        /* radial-gradient dots 32px grid, masked ellipse 80% at 50% 0% */
.glass           /* rgba(10,16,16,0.75), blur(20px), border rgba(255,255,255,0.07) */
.glass-light     /* rgba(255,255,255,0.03), blur(12px) */
.hero-bg         /* radial-gradient circle at 28% 55%, teal 0%, cyan 40% */
.grid-pattern    /* 48px grid lines rgba(255,255,255,0.025) */
.section-fade    /* vertical teal tint separator */
.gradient-border-teal /* border with teal gradient */
.gradient-border-gold /* border with gold gradient */
```

### Ambient Orbs
```css
/* 3 ambient orb animations — used for background depth */
.animate-orb-1  /* translate + scale drift, 30s */
.animate-orb-2  /* 38s */
.animate-orb-3  /* 22s + opacity pulse */
```

### Breathe
```css
/* Slow opacity + scale pulse */
.animate-breathe      /* opacity 0.35↔0.80, scale 1↔1.08, 5s */
.animate-breathe-slow /* opacity 0.25↔0.65, scale 1↔1.12, 8s */
```
Used for pulsing dots on live badges.

### Hero-specific
```css
.particle-drift /* translate XY drift, 8s — decorative particles */
.hero-scan      /* vertical scan line moving top→bottom, 9s linear */
```

### UI Glows (Mockup elements)
```css
.glow-card      /* box-shadow pulse, 3s — squad cards */
.ring-pulse     /* scale 1→2.4, opacity 0.6→0, 2.5s — AI network rings */
.ring-pulse-delay /* same + 1.25s offset */
.node-blink     /* opacity 1↔0.4, 2s — agent network nodes */
```

---

## Reduced Motion

Full `@media (prefers-reduced-motion: reduce)` block:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
  .text-shimmer, .text-shimmer-gold { animation: none; color: <static-color>; }
}
```
All Framer Motion variants also respect this via `useReducedMotion()` where implemented.

---

## Animation Decision Guide

| Use case | Tool |
|----------|------|
| Text/card entrance on scroll | Framer Motion `whileInView` + `fadeInUp` |
| Grid section reveal | Framer Motion `staggerContainer` + `scaleIn` |
| 2-col panel slide in | Framer Motion `slideInLeft`/`slideInRight` |
| Button/card hover | Framer Motion `whileHover` |
| Dropdown/modal | Framer Motion `AnimatePresence` |
| Background ambience | CSS `animate-orb-*`, `animate-float` |
| Scroll-based timeline | GSAP + ScrollTrigger |
| Pulsing indicators | CSS `animate-breathe` |
| Neural noise background | WebGL shader (NeuralNoise component) |
