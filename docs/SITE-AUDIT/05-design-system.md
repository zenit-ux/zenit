# Design System

## Typography

### Font Families
| Variable | Font | Usage | Source |
|----------|------|-------|--------|
| `--font-space-grotesk` | Plus Jakarta Sans (variable, 200–800) | `font-display` headings | Local file (`public/fonts/`) |
| `--font-inter` | Inter | `font-sans` body text | Google Fonts |
| `--font-jetbrains-mono` | JetBrains Mono (400, 500, 700) | `font-mono` badges, labels, code | Google Fonts |

Mapped in `globals.css @theme`:
```css
--font-sans:    var(--font-inter);
--font-display: var(--font-space-grotesk);
--font-mono:    var(--font-jetbrains-mono);
```

### Heading Scale (from CLAUDE.md rules, applied in code)
| Element | Rule | Example value |
|---------|------|---------------|
| H1 | `style={{ fontSize: "clamp(28px, 3.8vw, 48–54px)" }}` | Min 28px, max 48–54px |
| H2 | `style={{ fontSize: "clamp(22–26px, 2.5–3vw, 32–42px)" }}` | Min 22px, max 32–42px |
| H3 | `text-base` to `text-xl` (Tailwind) | 14–20px |

**Rule:** Never `text-4xl`, always `clamp()` inline style for H1/H2.

### Body Text
- Paragraph body: `font-sans text-base leading-relaxed text-muted-foreground` (16px, `#94a3b8`)
- Secondary body: `font-sans text-sm leading-relaxed` (14px)
- Captions / metadata: `font-mono text-[9px]` to `font-mono text-[11px]`

---

## Color Tokens

### CSS Custom Properties (`:root`)

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `#080c0c` | Page background |
| `--foreground` | `#e8f4f4` | Default text |
| `--card` | `#0d1313` | Card backgrounds |
| `--card-foreground` | `#e8f4f4` | Card text |
| `--popover` | `#0d1313` | Popover background |
| `--primary` | `#0d9488` | Primary (teal) |
| `--primary-foreground` | `#e8f4f4` | Text on primary |
| `--secondary` | `#00b4d8` | Secondary (cyan) |
| `--secondary-foreground` | `#080c0c` | Text on secondary |
| `--accent` | `#f59e0b` | Accent (gold) |
| `--accent-foreground` | `#080c0c` | Text on accent |
| `--muted` | `#111919` | Muted backgrounds |
| `--muted-foreground` | `#94a3b8` | Muted text (7.8:1 contrast) |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/destructive |
| `--border` | `rgba(255,255,255,0.06)` | Default border |
| `--input` | `rgba(255,255,255,0.08)` | Input border |
| `--ring` | `#00b4d8` | Focus ring |
| `--radius` | `0.625rem` | Base border radius |

### Brand Direct Utilities (`@theme inline`)

| Class | Value | WCAG contrast vs `#080c0c` |
|-------|-------|---------------------------|
| `text-teal` / `bg-teal` | `#0d9488` | 5.6:1 (AA normal text ✅) |
| `text-cyan` / `bg-cyan` | `#00b4d8` | ~3.5:1 (AA large text, borderline) |
| `text-gold` / `bg-gold` | `#f59e0b` | ~4.2:1 (close to AA) |
| `bg-surface` | `#0d1313` | — |
| `bg-surface-2` | `#111919` | — |

Note: teal was upgraded from `#0f766e` (3.6:1) to `#0d9488` (5.6:1) explicitly for WCAG AA.

### Radius Scale
| Token | Value |
|-------|-------|
| `--radius-sm` | `0.3125rem` (~5px) |
| `--radius-md` | `0.469rem` (~7.5px) |
| `--radius-lg` | `0.625rem` (10px, base) |
| `--radius-xl` | `0.9375rem` (~15px) |
| `--radius-2xl` | `1.25rem` (20px) |

---

## CSS Animations (defined in `globals.css`)

### Float
```css
/* float: 7s ease-in-out infinite — for cards, preview panels */
/* float-slow: 12s ease-in-out infinite — background elements */
```

### Glow Pulses
```css
/* glow-cyan: 4s — box-shadow from rgba(0,180,216,0.08) to 0.22 */
/* glow-teal: 4s — box-shadow from rgba(15,118,110,0.1) to 0.24 */
/* Usage: .card-glow-cyan, .card-glow-teal */
```

### Gradient Border Spin (`--gb-angle` @property)
```css
/* gb-spin: conic-gradient rotates 360° in 3.5s — teal/cyan/gold */
/* gb-spin-hover: 5s, paused until :hover */
/* gb-spin-slow: 8s */
```

### Text Effects
```css
/* text-shimmer: cyan gradient text, 4s linear — used in H2 accents */
/* text-shimmer-gold: gold gradient text, 4s linear */
```

### Background Utilities
```css
/* dot-grid: radial-gradient dots 32px grid, masked ellipse 80% at 50% 0% */
/* glass: rgba(10,16,16,0.75), blur(20px), border rgba(255,255,255,0.07) */
/* glass-light: rgba(255,255,255,0.03), blur(12px) */
/* hero-bg: radial-gradient circle at 28% 55%, teal 0%, cyan 40% */
/* grid-pattern: 48px grid lines rgba(255,255,255,0.025) */
/* section-fade: vertical teal tint separator */
/* gradient-border-teal, gradient-border-gold */
```

### Ambient Orbs
```css
/* animate-orb-1: translate + scale drift, 30s */
/* animate-orb-2: 38s */
/* animate-orb-3: 22s with opacity pulse */
```

### Breathe
```css
/* animate-breathe: opacity 0.35↔0.80, scale 1↔1.08, 5s */
/* animate-breathe-slow: opacity 0.25↔0.65, scale 1↔1.12, 8s */
```

### Hero-specific
```css
/* particle-drift: translate XY drift, 8s */
/* hero-scan: vertical scan line, 9s linear */
```

### UI Glows
```css
/* glow-card: box-shadow pulse, 3s (squad cards) */
/* ring-pulse: scale 1→2.4, opacity 0.6→0, 2.5s (AI network rings) */
/* ring-pulse-delay: same + 1.25s offset */
/* node-blink: opacity 1↔0.4, 2s */
```

---

## Framer Motion Patterns

### Entry animations (whileInView, `once: true`)
- `fadeInUp` — primary for text, used everywhere
- `scaleIn` — cards, badges
- `staggerContainer` — grid sections
- `slideInRight` / `slideInLeft` — hero panels

### Micro-interactions
- CTA hover: `hover:scale-[1.03]`, `hover:shadow-[...]`
- Card hover: `whileHover={{ y: -4 }}` with spring (`stiffness: 400, damping: 25`)
- Navbar CTA hover: `hover:translate-x-0.5` on ArrowRight icon
- Megamenu appearance: `scale: 0.98→1`
- Mobile menu: `height: 0→auto` (AnimatePresence)
- LocaleSwitcher dropdown: `y: 6→0, scale: 0.97→1`
- Form member add/remove: `height: 0→auto` (AnimatePresence)

---

## Responsive Behavior

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Key responsive patterns

| Element | Mobile | Desktop |
|---------|--------|---------|
| Navbar | Hamburger menu | Full horizontal nav |
| Hero sections | Single column, stacked | 2-column grid |
| Section cards | 1-col | 2-col (md) or 3-col (lg) |
| How-it-works steps | Stack | 5-col grid |
| Timeline mockup | Shows on mobile | Same |
| Squad dashboard mockup | Hidden (`hidden lg:block`) | Shows |
| Squad profile mockup | Hidden (`hidden lg:block`) | Shows |
| Footer | 2-col | 4-col |
| Container | `max-w-7xl`, `px-4 sm:px-6 lg:px-8` | Same, wider padding |

### Max widths used
- `max-w-7xl` — standard section container (1280px)
- `max-w-5xl` — pipeline/timeline sections
- `max-w-4xl` — comparison tables, CTA sections
- `max-w-3xl` — FAQ, centered headings
- `max-w-2xl` — newsletter form, pre-registro form
- `max-w-xl` — body text paragraphs

---

## Dark Mode

**Always dark.** The `html` element has `class="dark"` hardcoded in `RootLayout` and `style={{ colorScheme: "dark" }}`. No light mode exists anywhere in the codebase. The `@custom-variant dark` is defined but not toggled by user preference.

---

## Focus Styles

Keyboard-only focus ring (skip pointer clicks):
```css
a:focus-visible, button:focus-visible, input:focus-visible, ...
  outline: 2px solid #00b4d8;
  outline-offset: 2px;
  border-radius: 4px;
```

## Text Selection
```css
::selection {
  background: rgba(0,180,216,0.22);
  color: #fff;
}
```

## Reduced Motion
Full `prefers-reduced-motion: reduce` support: all animations set to 0.01ms, `.text-shimmer` and `.text-shimmer-gold` fall back to plain color.

---

## Assets

### Fonts (local, `public/fonts/`)
- `PlusJakartaSans-variable.woff2` (200–800 weight range)
- `PlusJakartaSans-Italic-variable.woff2`

### Logos (`public/logos/`)
Comprehensive logo system with variants:
- `zenit-horizontal-dark-color.svg` — **used in Navbar + Footer**
- `zenit-horizontal-light-color.svg`
- `zenit-iso-dark-color.svg`
- `zenit-iso-light-color.svg`
- Full set of design exports: horizontal + vertical + iso × dark/light × color/b&w (12 files)

### Missing assets
- `og-image.png` — referenced in root metadata but not found in `/public`
- Individual OG images per page (e.g., `og-companies.png`) — referenced in layouts, not found
