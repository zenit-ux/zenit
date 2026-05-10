# Arquitectura — Stack técnico y estructura

## Stack

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| UI Library | React | 19.2.4 |
| Lenguaje | TypeScript | ^5 |
| Estilos | Tailwind CSS v4 | ^4 |
| Animación principal | Framer Motion | ^12.38.0 |
| Animación imperativa | GSAP | ^3.15.0 |
| Scroll suave | Lenis | ^1.3.23 |
| Animación on-scroll | AOS | ^2.3.4 |
| Iconos | lucide-react | ^1.11.0 |
| UI base | shadcn (base-ui/react) | ^1.4.1 |
| Forms | react-hook-form + zod | ^7.74.0 / ^4.3.6 |
| Utilidades CSS | clsx + tailwind-merge | ^2.1.1 / ^3.5.0 |

**No hay backend.** El proyecto es un sitio de marketing estático. No existen:
- API routes
- Base de datos
- Sistema de autenticación
- Servidor de WebSockets
- Variables de entorno (no hay `.env`)

---

## Configuración de Next.js

`next.config.ts` está vacío — configuración mínima sin customizaciones.

El dev server usa `next dev` sin flags adicionales. Next.js 16.x usa Turbopack por defecto en modo dev.

---

## Tailwind v4 — CSS-first

**No existe `tailwind.config.ts`.** La configuración completa vive en `app/globals.css` mediante `@theme inline`:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@theme inline {
  --color-teal: #0f766e;
  --color-cyan: #00b4d8;
  --color-gold: #f59e0b;
  /* ... */
}
```

Esto significa que:
- `bg-teal`, `text-cyan`, `border-gold` son clases de Tailwind válidas
- Los tokens se definen una sola vez en `globals.css`
- No se usan valores arbitrarios `[]` para colores del sistema — se usan inline `style={{ background: "#040e0e" }}` para paneles oscuros específicos

---

## Estructura de carpetas

```
/
├── app/
│   ├── layout.tsx          — root layout, fuentes, Navbar, Footer
│   ├── globals.css         — sistema de diseño completo, tokens, animaciones
│   ├── page.tsx            — homepage (10 secciones)
│   ├── blog/page.tsx
│   ├── companies/page.tsx
│   ├── how-it-works/page.tsx
│   ├── kaizen/page.tsx
│   ├── pricing/page.tsx
│   ├── safepay/page.tsx
│   ├── skillbase/page.tsx
│   ├── squads/page.tsx
│   ├── talentpath/page.tsx
│   └── talkflow/page.tsx
│
├── components/
│   ├── Navbar.tsx          — fixed header con megamenu y mobile accordion
│   ├── Footer.tsx
│   ├── SectionHeader.tsx
│   ├── providers/
│   │   ├── AOSProvider.tsx
│   │   └── SmoothScrollProvider.tsx   — Lenis
│   ├── sections/           — 22 componentes de sección
│   └── ui/
│       ├── button.tsx
│       ├── GBCard.tsx              — card con gradient border animado
│       ├── GradientButton.tsx
│       ├── SpotlightCard.tsx
│       └── neural-noise.tsx        — WebGL shader reactivo al mouse
│
├── lib/
│   ├── utils.ts            — cn() (clsx + tailwind-merge)
│   ├── motionVariants.ts   — variantes de Framer Motion compartidas
│   └── animations/
│       └── useCountUp.ts   — hook de conteo animado con GSAP ScrollTrigger
│
├── public/
│   ├── fonts/
│   │   ├── PlusJakartaSans-variable.woff2      — 59KB
│   │   └── PlusJakartaSans-Italic-variable.woff2  — 64KB
│   └── logos/
│       └── zenit-horizontal-dark-color.svg
│
├── docs/                   — este directorio
├── CLAUDE.md               — apunta a AGENTS.md
└── AGENTS.md               — instrucción: leer docs de Next.js antes de escribir código
```

---

## Decisiones de arquitectura existentes

### Fuentes locales, no Google Fonts para display
Plus Jakarta Sans se sirve desde `/public/fonts/` via `next/font/local`. La variable CSS usa el nombre `--font-space-grotesk` para no cambiar referencias existentes al migrar desde la fuente anterior.

Inter y JetBrains Mono sí usan `next/font/google`.

### `"use client"` en casi todos los componentes de sección
Todos los componentes que usan Framer Motion llevan `"use client"`. Las páginas de productos son archivos grandes y autocontenidos — no usan Server Components internamente.

### Framer Motion v12 — ease como `as const`
Los arrays de easing deben usar `as const` para satisfacer los tipos de v12:
```tsx
transition={{ ease: [0.22, 1, 0.36, 1] as const }}
```

### Colores oscuros en `style={}`, no en Tailwind
Los fondos de paneles específicos (`#040e0e`, `#050f0f`, `#030c0c`) no tienen tokens — se aplican con `style={{ background: "..." }}` directamente. Los tokens de Tailwind cubren los colores del sistema general.

### Variantes de Framer Motion centralizadas
`lib/motionVariants.ts` exporta las variantes reutilizables:
- `fadeInUp` — fade + subida desde abajo
- `staggerContainer` — wrapper que staggers a sus hijos (delay 0.12s)
- `scaleIn` — escala desde 0.92
- `slideInRight` / `slideInLeft`
- `fadeIn`
- `defaultViewport` — `{ once: true, margin: "-80px" }`

### GSAP instalado pero uso mínimo
GSAP 3.15 está instalado junto con `@gsap/react`. Solo se usa en `lib/animations/useCountUp.ts` (hook de contador animado). El hook fue removido del HeroSection cuando se eliminaron los stats. GSAP no se usa en ningún componente activo actualmente.

### AOS instalado pero uso mínimo
`AOSProvider.tsx` existe con el provider de AOS. La animación principal del sitio usa Framer Motion (`whileInView`). AOS no está siendo usado activamente en componentes de la landing.

### Secciones en homepage vs. componentes huérfanos
La homepage (`app/page.tsx`) renderiza 10 secciones. Los siguientes componentes existen en `/components/sections/` pero **no están en la homepage actualmente**:
- `BenefitsSection.tsx`
- `DualAudienceSection.tsx`
- `FeaturedSquadsSection.tsx`
- `HeroCanvas.tsx`
- `HowItWorksSection.tsx`
- `PlatformShowcase.tsx`
- `PlatformWireframes.tsx`
- `PreRegCTA.tsx`
- `SafePaySection.tsx`
- `StatsSection.tsx`
- `TheSolutionSection.tsx`
- `WhyZenitSection.tsx`

---

## Rutas existentes vs. rutas rotas en navegación

El Navbar apunta a estas rutas que **no tienen `page.tsx`**:
- `/post-project`
- `/analytics`
- `/case-studies`
- `/projects`
- `/earnings`
- `/handbook`
- `/faq` (standalone, distinto del FAQSection del homepage)
- `/login`
- `/get-started`
