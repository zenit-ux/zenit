# Typography

Source: `05-design-system.md` (SITE-AUDIT) + CLAUDE.md canonical rules.

---

## Font Families

| CSS Variable | Font | Tailwind Class | Source |
|-------------|------|----------------|--------|
| `--font-space-grotesk` | Plus Jakarta Sans (variable, 200–800) | `font-display` | Local file `public/fonts/` |
| `--font-inter` | Inter | `font-sans` | Google Fonts |
| `--font-jetbrains-mono` | JetBrains Mono (400, 500, 700) | `font-mono` | Google Fonts |

**Mapped in `globals.css @theme`:**
```css
--font-sans:    var(--font-inter);
--font-display: var(--font-space-grotesk);
--font-mono:    var(--font-jetbrains-mono);
```

---

## Heading Scale — Canonical Rules (CLAUDE.md)

**RULE: Never use `text-4xl` or similar Tailwind classes for H1/H2. Always use `clamp()` inline style.**

| Element | Rule | Range |
|---------|------|-------|
| H1 | `style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}` | 28px → 54px |
| H2 | `style={{ fontSize: "clamp(26px, 3vw, 42px)" }}` | 26px → 42px |
| H3 | `text-base` to `text-xl` (Tailwind OK) | 14px → 20px |

**Why clamp:** Prevents text overflow on small screens while scaling proportionally on large displays. Avoids breakpoint-based size jumps.

**Actual values in use (may vary per section):**

| Page/Section | H1 max | H2 max |
|-------------|--------|--------|
| Homepage hero | 54px | 42px (Flow/Why) |
| /companies | 48px | 36px |
| /squads | 48px | 36px |
| /pricing | 48px | 32px |
| Most inner pages | 48–54px | 32–42px |

---

## Heading Font Family

All H1, H2, H3: `font-display` (Plus Jakarta Sans). Applied via:
```tsx
className="font-display"
// or via heading element default in globals
```

---

## Body Text Scale

| Level | Classes | Size | Color |
|-------|---------|------|-------|
| Primary body | `font-sans text-base leading-relaxed text-muted-foreground` | 16px | `#94a3b8` |
| Secondary body | `font-sans text-sm leading-relaxed` | 14px | varies |
| Large body | `font-sans text-lg` | 18px | `#e8f4f4` |
| Captions / metadata | `font-mono text-[9px]` to `font-mono text-[11px]` | 9–11px | muted |

---

## Monospace Usage

`font-mono` (JetBrains Mono) used for:
- Eyebrow labels: `font-mono text-xs uppercase tracking-widest`
- Badge text: `font-mono text-[11px]`
- Code references in mockups
- Stat numbers in mockup UIs
- "Testimonials" eyebrow text

---

## Text Effects (CSS Animations)

### `.text-shimmer` (cyan gradient)
```css
background: linear-gradient(90deg, #00b4d8, #ffffff, #00b4d8)
background-size: 200%
animation: shimmer 4s linear infinite
```
Used for: TestimonialsSection H2, AITeamsSection H2, squads pages H1/H2, how-it-works H1, pricing H1, kaizen H1

**Reduced motion fallback:** plain `color: #00b4d8` (no animation)

### `.text-shimmer-gold` (gold gradient)
```css
background: linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b)
background-size: 200%
animation: shimmer 4s linear infinite
```
Used for: Homepage H1 "scale engineering teams.", FlowSection H2 "in 3 steps.", WhyZenitSection H2, FinalCTA H2, TalentPath H3, SafePay H2

**Reduced motion fallback:** plain `color: #f59e0b` (no animation)

---

## Local Font Files

Located at `public/fonts/`:
- `PlusJakartaSans-variable.woff2` — weight range 200–800
- `PlusJakartaSans-Italic-variable.woff2`

Loaded via `next/font/local` in `app/layout.tsx`.

---

## Spacing & Leading

| Usage | Classes |
|-------|---------|
| Tight heading leading | `leading-tight` (1.25) |
| Relaxed body | `leading-relaxed` (1.625) |
| Loose/spacious | `leading-loose` (2) |
| Letter spacing (eyebrows) | `tracking-widest` (0.1em) or `tracking-wider` (0.05em) |

---

## Max Widths for Readability

| Context | Class | Width |
|---------|-------|-------|
| Body paragraphs | `max-w-xl` | 576px |
| Centered headings | `max-w-3xl` | 768px |
| Forms | `max-w-2xl` | 672px |
| Content columns | `max-w-4xl` | 896px |
| Standard sections | `max-w-7xl` | 1280px |
