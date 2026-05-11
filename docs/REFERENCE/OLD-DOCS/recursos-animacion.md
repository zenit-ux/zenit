# Recursos de Animación — Referencia Externa

Estos son los recursos que Claude Code debe consultar para animaciones y componentes visuales.

---

## Librerías instaladas en el proyecto

| Librería | Versión | Uso principal |
|----------|---------|---------------|
| Framer Motion | v12 | Transiciones suaves, `whileInView`, `animate`, `AnimatePresence` |
| GSAP | v3.15 | Animaciones avanzadas, ScrollTrigger, timelines |
| Lenis | v1.3.23 | Smooth scroll provider |
| AOS | v2.3.4 | On-scroll animations simples (instalado, no activo) |

---

## Referencias externas — código sin login requerido

### Magic UI
- **GitHub**: https://github.com/magicui-io/magic-ui
- **Qué tiene**: Componentes React animados listos para copiar — hero sections, cards, botones, texto animado
- **Cuándo usar**: Componentes de hero, cards con efecto, elementos de UI con movimiento
- **Cómo acceder**: Leer directamente el repo, estudiar `/registry/default/ui/` para los componentes

### Aceternity UI
- **GitHub**: https://github.com/aceternity/ui
- **Qué tiene**: Componentes con impacto visual alto — bordes animados, glows, efectos spotlight, backgrounds
- **Cuándo usar**: Componentes con "efecto wow", elementos destacados, backgrounds vivos
- **Cómo acceder**: Leer el repo, los componentes están en `/components/ui/` con código completo

### GSAP Documentation
- **URL**: https://gsap.com/docs/v3/
- **Qué tiene**: API completa, ScrollTrigger, timelines, animaciones precisas
- **Cuándo usar**: Animaciones scroll-based complejas, sincronización precisa, parallax
- **Patrón base**:
  ```ts
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(".elemento",
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0,
      scrollTrigger: {
        trigger: ".elemento",
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
      },
      duration: 0.8,
      ease: "power2.out",
    }
  );
  ```

### Lottie Files
- **URL**: https://lottiefiles.com/featured
- **Qué tiene**: Miles de animaciones JSON descargables sin login
- **Cuándo usar**: Animaciones livianas, ilustraciones animadas, loaders, decoraciones
- **Cómo usar**:
  ```bash
  npm install react-lottie
  ```
  ```tsx
  import Lottie from "react-lottie";
  import animationData from "./animation.json";
  
  <Lottie options={{ animationData, loop: true, autoplay: true }} height={200} width={200} />
  ```

---

## Patrones de animación por contexto

### Header / Navbar
- **Fade in on load**: Framer Motion `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- **Hover effects en links**: Framer Motion `whileHover={{ color: "#00b4d8" }}`
- **Background en scroll**: detectar scroll con `useScroll` → cambiar `backdropFilter`
- **Inspiración**: Aceternity header examples, Magic UI navbar

### Secciones (Landing)
- **Fade in on scroll**: Framer Motion `whileInView={{ opacity: 1, y: 0 }}` con `viewport={{ once: true }}`
- **Cards**: `scale: 0.97 → 1` + fade en scroll
- **Stagger text**: `variants` con `staggerChildren: 0.08`
- **Scroll pesado**: GSAP ScrollTrigger con `scrub: true`
- **Inspiración**: Magic UI showcase sections

### CTAs / Botones
- **Glow hover**: `box-shadow` animado con CSS o GSAP
- **Scale**: Framer Motion `whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}`
- **Pulse**: GSAP timeline con `yoyo: true, repeat: -1`
- **Inspiración**: Aceternity button examples

### Texto
- **Shimmer**: ya existe `.text-shimmer` y `.text-shimmer-gold` en `globals.css`
- **Stagger por letra/palabra**: Framer Motion con `variants` y `staggerChildren`
- **Typewriter**: librería `react-type-animation` o implementación custom
- **Inspiración**: Magic UI text animations

### Backgrounds
- **Grid animado**: Aceternity `BackgroundGrid`
- **Dots/mesh**: Aceternity `DotBackground`
- **Gradient que se mueve**: GSAP timeline en `background-position`
- **Partículas**: Magic UI `Particles` component

---

## Regla de oro

**NUNCA dejar secciones totalmente estáticas.**
- Mínimo: fade in on scroll + hover effects
- Máximo: lo que encuentres en Magic UI / Aceternity UI

**Decisión por librería**:
- Micro-animaciones (botones, tooltips, modals) → **Framer Motion**
- Scroll-based complejas, parallax, timeline → **GSAP + ScrollTrigger**
- Smooth scroll → **Lenis** (ya está configurado)
- Animaciones JSON livianas → **Lottie**
- Componentes listos para copiar → **Magic UI**, **Aceternity UI**
- 3D complejo → **Three.js** (no instalado, instalar si se necesita)

**Cuando dudes**: consultá los repos de Magic UI o Aceternity antes de inventar.

---

## Checklist antes de entregar un componente con animaciones

- [ ] ¿Hay fade in al entrar en viewport? (`whileInView` o ScrollTrigger)
- [ ] ¿Los elementos interactivos tienen hover effect?
- [ ] ¿Las transiciones respetan `prefers-reduced-motion`? (ya cubierto por `globals.css`)
- [ ] ¿Los `ease` de Framer Motion usan `as const`? (requerido en v12)
- [ ] ¿GSAP tiene `ScrollTrigger.refresh()` si hay resize o contenido dinámico?
