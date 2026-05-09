# Design System — Zenit

Diseño dark-only. No hay modo claro. Paleta minimalista de tres colores de marca sobre un fondo casi negro.

---

## Paleta de colores

### Colores de marca (tokens de Tailwind — `app/globals.css @theme`)

| Token Tailwind | Valor hex | Contraste sobre `#080c0c` | Uso canónico |
|---|---|---|---|
| `teal` | `#0d9488` | **5.6:1** ✓ AA | Color primario, Kaizen, bordes de IA, elementos de brand |
| `cyan` | `#00b4d8` | **8.0:1** ✓ AAA | Acciones, badges "Agentic AI", interactive elements |
| `gold` | `#f59e0b` | **9.2:1** ✓ AAA | SafePay, highlights de headline, ZenitRank |
| `surface` | `#0d1313` | — | Cards, paneles elevados |
| `surface-2` | `#111919` | — | Segundo nivel de elevación |

> **Regla de contraste**: WCAG 2.1 AA requiere ≥ 4.5:1 para texto normal y ≥ 3:1 para texto grande (≥ 18px) o UI components. Todos los tokens de marca superan AA. No crear hex custom sin verificar primero en https://webaim.org/resources/contrastchecker/

### Colores semánticos (CSS variables → Tailwind)

| Variable CSS | Valor | Contraste sobre `#080c0c` | Clase Tailwind |
|---|---|---|---|
| `--background` | `#080c0c` | — | `bg-background` |
| `--foreground` | `#e8f4f4` | **15:1** ✓ AAA | `text-foreground` |
| `--card` | `#0d1313` | — | `bg-card` |
| `--muted` | `#111919` | — | `bg-muted` |
| `--muted-foreground` | `#94a3b8` | **7.8:1** ✓ AAA | `text-muted-foreground` |
| `--border` | `rgba(255,255,255,0.06)` | — | `border-border` |
| `--input` | `rgba(255,255,255,0.08)` | — | — |
| `--ring` | `#00b4d8` | **8.0:1** ✓ AAA | `ring-ring` (focus visible) |
| `--primary` | `#0d9488` | **5.6:1** ✓ AA | `bg-primary` |
| `--secondary` | `#00b4d8` | **8.0:1** ✓ AAA | `bg-secondary` |
| `--accent` | `#f59e0b` | **9.2:1** ✓ AAA | `bg-accent` |

### Colores de paneles de mockup (sin token — usar `style={}`)

```
#080c0c   → fondo de página
#0d1313   → megamenu
#040e0e   → panel chat Kaizen, Generated Brief
#050f0f   → panel chat alternativo
#030c0c   → terminal trace (AgenticPipelineSection)
#020c0b   → header de panel macOS chrome
```

### Patrón de opacidad

En lugar de tokens nuevos para variaciones, se usa modificador de opacidad de Tailwind:

```
border-cyan/20    → rgba(0,180,216, 0.20)
bg-teal/8         → rgba(15,118,110, 0.08)
text-white/60     → rgba(255,255,255, 0.60)
bg-cyan/5         → fondo sutil para cards con acento cyan
```

---

## Tipografía

### Familias

| Clase Tailwind | Font | Fuente | Peso |
|---|---|---|---|
| `font-display` | Plus Jakarta Sans | Local WOFF2 variable (`public/fonts/`) | 200–800 |
| `font-sans` | Inter | Google Fonts | variable |
| `font-mono` | JetBrains Mono | Google Fonts | 400, 500, 700 |

### Escala de headings — CANONICAL

**Regla:** todos los headings usan `style={{ fontSize: "clamp(...)" }}` — NUNCA `text-4xl md:text-5xl` ni breakpoints Tailwind responsivos para headings. Esto garantiza escala fluida y consistencia cross-página.

| Token | Valor clamp | Uso |
|---|---|---|
| `fs-h1` | `clamp(28px, 3.8vw, 54px)` | **Todos los H1 del sitio** — homepage hero Y product pages |
| `fs-h2` | `clamp(26px, 3vw, 42px)` | **Todos los H2 del sitio** — secciones, CTAs finales, cualquier sub-heading |

**Solo dos valores. Sin excepciones.** El contraste jerárquico entre H1 y H2 viene del contexto (tamaño de sección, peso, color) — no de inflar el número.

**Tracking:**
- H1 homepage hero: `tracking-[-0.02em]`
- Resto de headings: sin tracking extra (default)

**Leading:**
- Headings grandes (H1): `leading-[1.03]` a `leading-[1.06]`
- Section H2: `leading-tight`

### Escala de tipografía de cuerpo

| Uso | Clase Tailwind | Tamaño |
|---|---|---|
| Body principal (subtítulo hero, descripciones de sección) | `font-sans text-lg leading-relaxed` | 18px |
| Body secundario (cuerpo de cards, párrafos) | `font-sans text-sm leading-relaxed` | 14px |
| Labels de sección (eyebrows) | `font-sans text-sm font-semibold uppercase tracking-widest` | 14px |
| Mono / badge | `font-mono text-[11px]` | 11px |
| Card titles | `font-sans text-base font-semibold` | 16px |
| Feature titles (bullets) | `font-display text-[15px] font-bold` | 15px |
| Número grande de stats | `font-display text-4xl font-bold` | 36px |

---

## Sistema de colores por contexto de producto

Cada producto tiene un acento dominante que se usa en eyebrows, iconos de cards e highlights:

| Producto | Acento | Token | Clase de eyebrow |
|---|---|---|---|
| Kaizen / IA | cyan | `text-cyan border-cyan/20 bg-cyan/8` | `text-cyan` |
| SafePay | gold | `text-gold border-gold/20 bg-gold/8` | `text-gold` |
| Para Empresas | gold | — | `text-gold` |
| Para Squads | cyan/teal | — | `text-cyan` |
| ZenitRank | teal | `text-teal border-teal/20 bg-teal/8` | `text-teal` |
| SkillBase | teal | — | `text-teal` |
| TalentPath | cyan/gold | — | mixto |
| TalkFlow | cyan | — | `text-cyan` |

---

## Componentes de UI (`components/ui/`)

### `button.tsx`
Botón shadcn. Variantes: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`.

### `neural-noise.tsx`
Canvas WebGL con shader de ruido orgánico reactivo al mouse.
```tsx
<NeuralNoise
  color={[0.96, 0.62, 0.04]}  // RGB 0–1. Gold = [0.96, 0.62, 0.04]
  opacity={0.80}
  speed={0.0008}
  className="absolute inset-0 h-full w-full"
  style={{ mixBlendMode: "screen" }}
/>
```
Usado en el hero con `mixBlendMode: "screen"` sobre el fondo oscuro.

### `GBCard.tsx`
Card con gradient border animado (`.gb-spin`). Wrapper visual para destacar contenido premium.

### `GradientButton.tsx`
Botón con gradiente de fondo.

### `SpotlightCard.tsx`
Card con efecto de spotlight — luz que sigue el cursor.

---

## Componentes de sección activos en homepage (`app/page.tsx`)

| Orden | Componente | Descripción |
|---|---|---|
| 1 | `HeroSection` | Hero con NeuralNoise WebGL, glows, grid, H1 + CTAs |
| 2 | `TrustStrip` | Banda de logos/badges de confianza |
| 3 | `KaizenSection` | 2 cols: copy + mockup de chat de discovery |
| 4 | `AIMaturitySection` | Grid de 5 columnas — estadios de madurez |
| 5 | `GenUISection` | Split-view: chat + brief generándose |
| 6 | `AgenticPipelineSection` | Timeline de 6 pasos + terminal trace + stats |
| 7 | `PlatformFeatures` | Features de la plataforma agrupadas |
| 8 | `TestimonialsSection` | Testimonios |
| 9 | `FAQSection` | FAQ con accordion |
| 10 | `FinalCTASection` | CTA final de conversión |

---

## Patrones de sección

### Estructura base de una sección con heading centrado
```tsx
<section className="py-28">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mb-16 text-center">
      <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-[ACCENT]">
        Eyebrow
      </motion.p>
      <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
        Heading<br />
        <span className="text-shimmer">Highlight.</span>
      </motion.h2>
    </motion.div>
    {/* contenido */}
  </div>
</section>
```

### Estructura de hero de página interna
```tsx
<section className="relative overflow-hidden pt-32 pb-24">
  {/* glows decorativos */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
      {/* eyebrow pill */}
      <motion.p variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[COLOR]/20 bg-[COLOR]/8 px-4 py-1.5 font-sans text-sm font-semibold text-[COLOR]">
        <span className="h-1.5 w-1.5 rounded-full bg-[COLOR] animate-pulse" />
        Label
      </motion.p>
      {/* H1 — SIEMPRE clamp(28px, 3.8vw, 54px) */}
      <motion.h1 variants={fadeInUp} className="font-display font-bold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}>
        Título de página<br />
        <span className="text-shimmer[-gold]">Highlight.</span>
      </motion.h1>
      {/* subtítulo */}
      <motion.p variants={fadeInUp} className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
        ...
      </motion.p>
      {/* CTAs */}
    </motion.div>
  </div>
</section>
```

### Estructura de stats strip
```tsx
<section className="border-y border-border bg-card/40">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-1 py-10 px-6 text-center">
          <span className="font-display text-4xl font-bold text-white md:text-5xl">{s.value}</span>
          <span className="font-sans text-sm text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```
Nota: `text-4xl md:text-5xl` es correcto SOLO para números de stats — no para headings.

### Estructura de grid de cards (beneficios, features)
```tsx
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <motion.div key={item.title} variants={scaleIn} className="group rounded-2xl border border-white/6 bg-card p-6 transition-all duration-300 hover:border-white/12">
      <div className={`mb-4 inline-flex rounded-xl border p-3 text-[ACCENT] border-[ACCENT]/20 bg-[ACCENT]/8`}>
        <Icon size={20} />
      </div>
      <h3 className="mb-2 font-sans text-base font-semibold text-white">{item.title}</h3>
      <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.body}</p>
    </motion.div>
  ))}
</motion.div>
```

### Estructura de CTA final de página
```tsx
<section className="py-28 bg-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-3xl bg-card border border-white/6">
      {/* glows de esquinas */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="relative flex flex-col items-center gap-6 px-8 py-20 text-center md:px-16 md:py-24">
        <motion.h2 variants={fadeInUp} className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
          Headline CTA<br />
          <span className="text-shimmer-gold">Highlight.</span>
        </motion.h2>
        {/* CTAs */}
      </motion.div>
    </div>
  </div>
</section>
```

---

## Botones

### Primario (blanco sólido — acción principal)
```tsx
<Link href="..." className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]">
  Label
  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
</Link>
```

### Secundario (borde translúcido — acción secundaria)
```tsx
<Link href="..." className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white">
  Label
</Link>
```

### Ghost link (texto con flecha — acción terciaria)
```tsx
<Link href="..." className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[ACCENT] transition-colors hover:text-[ACCENT]/80">
  Label
  <ArrowRight size={14} />
</Link>
```

### Botón hero secundario (borde cyan con glow — solo en hero del homepage)
```tsx
<Link href="..." className="inline-flex items-center gap-2 rounded-xl border border-cyan/35 px-7 py-3 font-sans text-sm font-medium text-cyan/90 backdrop-blur-sm transition-all duration-300 hover:border-cyan/60 hover:bg-cyan/6 hover:shadow-[0_0_32px_rgba(0,180,216,0.18)]">
  Label →
</Link>
```

---

## Clases de animación (`app/globals.css`)

### Texto
| Clase | Efecto |
|---|---|
| `.text-shimmer` | Gradiente cyan animado (`#00b4d8 → #7dd3fc → #0891b2`), 4s loop |
| `.text-shimmer-gold` | Gradiente gold animado (`#f59e0b → #fde68a → #d97706`), 4s loop |

**Regla de uso:** alternado por sección — gold / cyan / gold / cyan. Una sola frase clave por heading recibe el shimmer.

### Glows de cards
| Clase | Efecto |
|---|---|
| `.card-glow-cyan` | Box-shadow pulsante cyan, 4s |
| `.card-glow-teal` | Box-shadow pulsante teal, 4s |
| `.glow-card` | Box-shadow pulsante más intenso, 3s |

### Movimiento
| Clase | Efecto |
|---|---|
| `.animate-float` | Flotación vertical, 7s |
| `.animate-float-slow` | Flotación lenta con leve rotación, 12s |
| `.animate-orb-1/2/3` | Orbes de fondo en drift lento (22–38s) |
| `.animate-breathe` | Pulso de opacidad + escala, 5s |
| `.animate-breathe-slow` | Idem más lento, 8s |
| `.particle-drift` | Deriva XY en cuatro puntos, 8s |
| `.hero-scan` | Línea de escaneo vertical, 9s |
| `.ring-pulse` / `.ring-pulse-delay` | Anillo expansivo tipo radar, 2.5s |
| `.node-blink` | Parpadeo suave, 2s |

### Borders animados
| Clase | Efecto |
|---|---|
| `.gb-spin` | Conic-gradient rotando, 3.5s — teal/cyan/gold |
| `.gb-spin-slow` | Idem a 8s |
| `.gb-spin-hover` | Paused hasta hover |

### Fondos y utilidades
| Clase | Descripción |
|---|---|
| `.glass` | Glassmorphism: `rgba(10,16,16,0.75)` + `backdrop-filter: blur(20px)` |
| `.glass-light` | Glassmorphism claro: `rgba(255,255,255,0.03)` |
| `.dot-grid` | Grid de puntos con mask radial |
| `.grid-pattern` | Grid de líneas finas 48×48px |
| `.section-fade` | Separador entre secciones con gradient |
| `.gradient-border-teal` | Borde en gradiente teal/cyan |
| `.gradient-border-gold` | Borde en gradiente gold |
| `.hero-bg` | Radial gradient teal/cyan para fondos de hero |

---

## Modales

### Principios

- Todo modal abre con una animación tipo Apple Sheet: sube desde abajo, leve escala, spring natural.
- El overlay nunca es solo negro — lleva un efecto de luz que sube desde el fondo para dar contexto y profundidad.
- El color de la luz depende del acento dominante de la página donde vive el modal.

### Color de la luz por contexto

| Contexto | Color de luz | Centro | Medio | Borde |
|----------|-------------|--------|-------|-------|
| Squads / ZenitRank / Kaizen | teal + cyan | `rgba(13,148,136,0.80)` | `rgba(0,180,216,0.45)` | `rgba(0,180,216,0.15)` |
| SafePay / Empresas / Pricing | gold | `rgba(245,158,11,0.75)` | `rgba(251,191,36,0.40)` | `rgba(251,191,36,0.12)` |

### Animación del overlay

```tsx
<motion.div
  className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
  style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
>
```

### Efecto de luz de fondo (sube desde abajo)

```tsx
{/* Rising light — usar gradiente según contexto de página */}
<motion.div
  className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 60 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
  style={{
    width: "140vw",
    height: "90vh",
    /* Contexto squad/teal: */
    background: "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(13,148,136,0.80) 0%, rgba(0,180,216,0.45) 35%, rgba(0,180,216,0.15) 60%, transparent 80%)",
    /* Contexto gold: */
    /* background: "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(245,158,11,0.75) 0%, rgba(251,191,36,0.40) 35%, rgba(251,191,36,0.12) 60%, transparent 80%)", */
    filter: "blur(20px)",
  }}
  aria-hidden
/>
```

**Valores clave:**
- `width: 140vw` — sobrepasa el viewport para que la luz llegue a los bordes
- `height: 90vh` — ocupa casi toda la pantalla en vertical
- `blur(20px)` — suaviza sin disolver el color (no usar más de 30px)
- `y: 80 → 0` en entrada, `y: 60` en salida — recorrido visible

### Animación del panel del modal (Apple Sheet)

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.93, y: 56 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95, y: 36 }}
  transition={{ type: "spring", stiffness: 380, damping: 32 }}
>
  {/* contenido del modal */}
</motion.div>
```

**Regla:** `scale: 0.93` en entrada (no `0.96`) para que el recorrido sea perceptible. Spring `stiffness: 380 / damping: 32` da el feeling Apple — snappy sin rebotar. No bajar stiffness de 300 ni subir damping de 40.

---

### Accesibilidad en modales — tokens de contraste

Las opacidades bajas sobre fondo negro son el problema más común. Valores mínimos validados contra `#080f0e` (fondo del modal):

| Elemento | Token mínimo | Ratio aprox. | Uso |
|----------|-------------|-------------|-----|
| Bordes de inputs | `border-white/18` | 2.7:1 | Mínimo para UI components (WCAG 3:1 — ajustar a `/22` si el fondo es más oscuro) |
| Separadores de panel | `border-white/12` | — | Decorativo, estructura visual |
| Bordes de cards con acento | `border-teal/30` | — | Cards dentro del modal |
| Labels de formulario | `text-white/75` | ~11:1 | Labels encima de inputs |
| Helper text / hints | `text-white/55` | ~7:1 | Texto de ayuda debajo del input |
| Labels de stepper inactivos | `rgba(255,255,255,0.50)` | ~6:1 | Pasos no activos en sidebar |
| Íconos de stepper inactivos | `rgba(255,255,255,0.45)` | — | Íconos de pasos pendientes |
| Headers de grupos de dropdown | `text-white/50` | ~6:1 | Categorías dentro de listbox |
| Línea conectora del stepper | `rgba(255,255,255,0.14)` | — | Decorativo |

> **Regla**: nunca usar `border-white/8` ni `text-white/30` dentro de un modal — son invisibles sobre `#080f0e`. El mínimo para texto es `/45`, para bordes funcionales `/18`.

---

## Variantes de Framer Motion (`lib/motionVariants.ts`)

| Export | Comportamiento | Uso típico |
|---|---|---|
| `fadeInUp` | Fade + `y: 32→0`, duration 0.6s | Textos, cards, entries de sección |
| `staggerContainer` | Wrapper: delay entre hijos 0.12s, `delayChildren: 0.08s` | Contenedor de cualquier lista animada |
| `scaleIn` | Scale `0.92→1`, duration 0.5s | Cards individuales, badges |
| `slideInRight` | `x: 48→0`, duration 0.6s | Panel derecho del hero |
| `slideInLeft` | `x: -48→0`, duration 0.6s | Panel izquierdo |
| `fadeIn` | Opacity `0→1`, duration 0.4s | Overlays, dividers |
| `defaultViewport` | `{ once: true, margin: "-80px" }` | Viewport para todos los `whileInView` |

**Regla crítica Framer Motion v12:** los arrays de easing DEBEN usar `as const`:
```tsx
transition={{ ease: [0.22, 1, 0.36, 1] as const }}
```

---

## Navbar (`components/Navbar.tsx`)

- Fixed, `z-50`
- Transparente en top → `bg-[#080c0c]/85 backdrop-blur-2xl` al hacer scroll
- Altura: `68px` → usar `pt-[68px]` en el hero de cada página para compensar
- Logo: `public/logos/zenit-horizontal-dark-color.svg`
- Mobile: accordion con `AnimatePresence`
- Dos megamenus: "For Companies" (acento gold) y "For Squads" (acento cyan)

---

## Secciones huérfanas

Estos componentes existen en `/components/sections/` pero NO están en ninguna página activa. No eliminar sin revisar si tienen valor reutilizable:

`BenefitsSection`, `DualAudienceSection`, `FeaturedSquadsSection`, `HeroCanvas`, `HowItWorksSection`, `PlatformShowcase`, `PlatformWireframes`, `PreRegCTA`, `SafePaySection`, `StatsSection`, `TheSolutionSection`, `WhyZenitSection`

---

## Reglas que NO romper

1. **Nunca usar `text-4xl md:text-5xl` para headings H1/H2** — siempre `style={{ fontSize: "clamp(...)" }}`.  
   Excepción permitida: números de stats (`font-display text-4xl font-bold text-white md:text-5xl`).

2. **Nunca usar `any` ni `@ts-ignore`** — TypeScript estricto.

3. **Nunca aplicar colores del sistema con valores arbitrarios `[]`** — usar tokens Tailwind (`bg-teal`, `text-cyan`) o `style={}` para los colores de panel oscuro.

4. **`"use client"` en todo componente que use Framer Motion** — sin excepción.

5. **Easings de Framer Motion v12 siempre con `as const`.**

6. **Colores oscuros de panel** (`#040e0e`, `#050f0f`, etc.) solo con `style={{ background: "..." }}` — no crear tokens para estos.
