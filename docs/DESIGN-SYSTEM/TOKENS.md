# Design Tokens

Spacing, radius, shadows, z-index, breakpoints, and max-widths.
Source: `05-design-system.md` (SITE-AUDIT) + codebase observation.

---

## Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `0.3125rem` (~5px) | Small badges, tight elements |
| `--radius-md` | `0.469rem` (~7.5px) | Inputs, small buttons |
| `--radius-lg` | `0.625rem` (10px) | Base radius — default for most components |
| `--radius-xl` | `0.9375rem` (~15px) | Cards, modals |
| `--radius-2xl` | `1.25rem` (20px) | Large card containers, hero sections |

Tailwind utility: `rounded-sm` / `rounded-md` / `rounded-lg` / `rounded-xl` / `rounded-2xl` map to these.

---

## Spacing System

Standard Tailwind spacing (1rem = 16px base). Key values in use:

| Class | Value | Used for |
|-------|-------|----------|
| `p-4` | 16px | Mobile container padding |
| `p-6` | 24px | Card internal padding |
| `p-8` | 32px | Section vertical padding (mobile) |
| `py-16` | 64px | Medium section spacing |
| `py-20` | 80px | Standard section padding |
| `py-24` | 96px | Large section spacing |
| `py-32` | 128px | Hero sections |
| `gap-4` | 16px | Tight grid gap |
| `gap-6` | 24px | Standard card gap |
| `gap-8` | 32px | Section gap |
| `gap-12` | 48px | Large section gap |

---

## Max Widths

| Token | Class | Value | Usage |
|-------|-------|-------|-------|
| Container | `max-w-7xl` | 1280px | Standard section container |
| Wide content | `max-w-5xl` | 1024px | Pipeline, timeline sections |
| Readable content | `max-w-4xl` | 896px | Comparison tables, CTA sections |
| Centered text | `max-w-3xl` | 768px | FAQ, centered headings |
| Forms | `max-w-2xl` | 672px | Pre-registro form, newsletter |
| Body text | `max-w-xl` | 576px | Body text paragraphs |

Container always paired with: `mx-auto px-4 sm:px-6 lg:px-8`

---

## Breakpoints (Tailwind defaults)

| Name | Min width | Usage |
|------|-----------|-------|
| `sm` | 640px | Small phone → tablet |
| `md` | 768px | Tablet — 2-col card grids |
| `lg` | 1024px | Desktop — hero 2-col, 3-col grids |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

---

## Responsive Patterns

| Element | Mobile | md | lg |
|---------|--------|----|----|
| Hero sections | 1-col | 1-col | 2-col |
| Benefit cards | 1-col | 2-col | 3-col |
| ZenitRank badges | 1-col | 2-col | 4-col |
| How-it-works steps | stack | stack | 5-col |
| Timeline mockup | visible | visible | visible |
| Squad dashboard mockup | `hidden` | `hidden` | `block` |
| Squad profile mockup | `hidden` | `hidden` | `block` |
| Footer | 2-col | 2-col | 4-col |
| Navbar | hamburger | hamburger | full horizontal |

---

## Z-Index Scale

No formal z-index tokens defined. Observed values:
- Navbar: `z-50`
- Megamenu dropdowns: `z-50`
- Mobile menu overlay: `z-40`
- Modal backdrops: `z-[100]` (RegistroModal)
- NeuralNoise canvas: `z-0` (behind content)
- Background glows: `z-0` (behind content)
- Content sections: `z-10` (above background elements)

---

## Shadows

No formal shadow tokens. Key patterns:
```css
/* CTA button hover glow */
hover:shadow-[0_0_20px_rgba(0,180,216,0.3)]   /* cyan glow */
hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]  /* gold glow */

/* Card glow (CSS animation) */
.card-glow-cyan /* cycles box-shadow 0.08 → 0.22 opacity */
.card-glow-teal /* cycles box-shadow 0.1 → 0.24 opacity */

/* Navbar glass effect */
backdrop-blur-2xl
```

---

## Glass / Blur Effects

| Class | Style |
|-------|-------|
| `.glass` | `rgba(10,16,16,0.75)` bg + `blur(20px)` + `border rgba(255,255,255,0.07)` |
| `.glass-light` | `rgba(255,255,255,0.03)` bg + `blur(12px)` |
| `backdrop-blur-2xl` | Navbar on scroll |

---

## Dark Mode Configuration

```css
html { class: "dark", style: "color-scheme: dark" }
```
Hardcoded in `app/layout.tsx`. No toggle exists. `@custom-variant dark` is defined but never conditionally applied. The site is dark-only.
