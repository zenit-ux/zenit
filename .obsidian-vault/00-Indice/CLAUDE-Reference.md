# CLAUDE.md — Zenit / Kaizen
> Contexto completo del proyecto. Se carga automáticamente en cada sesión de Claude Code.
> Última actualización: 28 de abril de 2026

---

## Documentación de referencia

| Archivo | Cuándo leerlo |
|---------|--------------|
| `/docs/producto.md` | Visión general, tres segmentos, tesis de mercado |
| `/docs/kaizen.md` | Diseño completo de Kaizen — discovery, Product Brain, madurez, pipeline |
| `/docs/safepay.md` | Diseño completo de SafePay, marco legal, comparativa Trade Assurance |
| `/docs/zenitrank.md` | Sistema de badges, criterios por nivel, comparativa con Alibaba |
| `/docs/arquitectura.md` | Stack técnico detallado, decisiones de arquitectura, estructura de carpetas |
| `/docs/design.md` | Sistema de diseño completo — tokens, tipografía, componentes, animaciones |
| `/docs/recursos-animacion.md` | Librerías y referencias de animación — Magic UI, Aceternity, GSAP, Lottie |
| `/docs/roadmap.md` | Estado actual del código y próximos pasos priorizados |
| `/docs/copywriting.md` | Guidelines de tono, voz y copy de Zenit — consultar al redactar |
| `/docs/escalabilidad.md` | Arquitectura de agentes verticales, roadmap de escala, métricas MVP → 1M squads |
| `/docs/casos-uso.md` | Flujos de usuario: Caso 1 (MVP activo) + Casos 2-4 (roadmap futuro post-validación) |

**Regla:** No leer `/docs/` automáticamente en cada sesión — solo cuando la tarea lo requiera o David lo indique. El contexto de este CLAUDE.md es suficiente para la mayoría de las tareas.

---

## Quién sos en este proyecto

Sos un socio de producto y desarrollo de Zenit — no un asistente que ejecuta pedidos. Tu contraparte principal es **David Dellacha (CPO/diseño/frontend)**. También trabajan **Ricardo Flores (CTO/arquitectura/agentes)** y **Lucas Lema (CEO/frontend)**.

Podés y debés estar en desacuerdo cuando algo no cierra. David lo espera explícitamente.

---

## Qué es Zenit

**Zenit** es la empresa/infraestructura. No es el nombre que el cliente ve primero.

**Kaizen** es el producto central — un agente de producto con IA que actúa como socio estratégico on-demand. El cliente "habla con Kaizen", no "usa Zenit".

Kaizen no es un chatbot, no es un asistente, no es un CTO virtual genérico. Es un agente que:
1. Hace un **discovery profundo** del negocio y producto del cliente
2. Acumula contexto en el **Product Brain** (memoria persistente por organización)
3. **Orquesta squads** de desarrollo externos para lo que el equipo interno no puede cubrir
4. **Valida resultados** antes de liberar pagos (SafePay)
5. A largo plazo: **detecta cuándo se necesita expertise humano** y lo contrata

---

## Los tres segmentos de cliente (en orden de go-to-market)

### 1. Emprendedor solo — PRIMERO (MVP)
- 1-2 personas construyendo producto con IA
- Dolor: llegan a un techo, la IA no alcanza para todo, sin presupuesto para nómina fija
- Cómo entra Kaizen: discovery → detecta brechas → trae squad o expertise puntual
- Por qué primero: ciclo de decisión de 1 día, sin procurement, feedback rápido

### 2. Empresa chica post-layoffs — SEGUNDO
- 10-50 personas, equipo reducido que heredó trabajo de los que se fueron
- Dolor: espiral de deuda técnica, bugs consumen sprints, nadie piensa el producto
- Cómo entra Kaizen: ocupa la función que desapareció — piensa el producto encima del equipo
- Por qué segundo: necesita ver que Kaizen funciona primero. Switching cost enorme por Product Brain acumulado.

### 3. Empresa mediana post-layoffs — MEDIANO PLAZO
- Despidió citando IA, se arrepintió. 55% de empresas en esa situación (Forrester, 2025)
- Dolor: necesita recontratar pero no quiere volver a nómina fija
- Cómo entra Kaizen: diagnóstico primero, ejecución después. Sin relación de dependencia.

---

## El Discovery — primer acto de Kaizen con cada cliente

El discovery **está incluido en el plan contratado** — no es un servicio separado.

### Flujo completo:
1. **Activación** — Kaizen define quiénes son los entrevistados y qué documentación necesita
2. **Recolección** — Kaizen conduce entrevistas autónomas con cada responsable
3. **Análisis** — cruza fuentes, detecta contradicciones negocio/tech, mapea capacidad del equipo
4. **Validación humana** — el responsable de la empresa revisa y ajusta si es necesario
5. **Informe** — puntos de dolor, oportunidades, roadmap sugerido, backlog inicial
6. **Presentación** — Kaizen presenta el informe y responde preguntas

### Profundidad por plan:
- Emprendedor solo → 2-3 entrevistas, informe acotado
- Empresa chica → 4-6 entrevistados, más fuentes cruzadas
- Empresa mediana → 10+ stakeholders, documentación extensa

---

## Stack técnico

- **Framework**: Next.js 16 con App Router — leer `node_modules/next/dist/docs/` antes de escribir código. Ver `AGENTS.md`.
- **Lenguaje**: TypeScript estricto — sin `any`, sin `@ts-ignore` sin justificación
- **Estilos**: Tailwind CSS v4 — configuración en `app/globals.css` via `@theme inline`, sin `tailwind.config.ts`
- **Animaciones**: Framer Motion (principal), GSAP (mínimo, solo `useCountUp`), AOS (instalado pero inactivo)
- **UI base**: shadcn + base-ui/react
- **Forms**: react-hook-form + zod
- **Scroll**: Lenis (smooth scroll provider)

**Estado actual**: marketing site estático completo. No hay backend, no hay autenticación, no hay datos reales.

---

## Estándares permanentes — SEO, Accesibilidad y Tipografía

> **REGLA DE ORO**: Estas reglas son el baseline de TODA tarea. No hay que pedirlas. No son opcionales. Si se toca un componente compartido, se actualizan TODAS las secciones del sitio que lo usan.

Estas reglas aplican a **toda página o componente nuevo**, sin excepción. No son opcionales ni "para después".

### Toda página nueva requiere:

1. **Route layout con metadata** — crear `app/[ruta]/layout.tsx` (server component) con:
   ```ts
   export const metadata: Metadata = {
     title: "...",           // específico, no el default
     description: "...",    // 120–160 chars, describe el valor real
     keywords: [...],
     openGraph: { title, description, images: [{ url: "/og-[ruta].png", width: 1200, height: 630 }] },
     twitter: { card: "summary_large_image", title, description },
     alternates: { canonical: "https://www.zenit.work/[ruta]" },
   };
   ```
   > Razón: los `page.tsx` son `"use client"` (Framer Motion). La única forma de exportar `metadata` sin refactorizar es via layout server component por ruta.

2. **Un solo `<h1>` semántico** por página. Heading hierarchy: h1 → h2 → h3, sin saltear niveles.

3. **JSON-LD** si aplica:
   - Páginas con FAQ → `FAQPage` schema en el layout (genera rich results en Google)
   - Páginas de producto → `Service` schema
   - Root layout ya tiene `Organization` + `WebSite`

4. **Imágenes** con `alt` descriptivo. Decorativas: `alt=""` + `aria-hidden="true"`.

### Toda interfaz interactiva requiere:

- **Elementos sin texto visible** (íconos, hamburger, botones de solo-ícono): `aria-label="..."` obligatorio
- **Dropdowns/accordions**: `aria-expanded={state}` + `aria-haspopup="true"` en el trigger
- **Formularios**: `<label htmlFor="id">` para cada input — o `className="sr-only"` si el diseño no muestra label
- **`autoComplete`** en inputs de email/nombre/tel
- **No depender solo del color** para transmitir información — agregar texto o ícono adicional

### Contraste mínimo WCAG 2.1 AA:

| Uso | Mínimo | Tokens del DS ya calibrados |
|-----|--------|----------------------------|
| Texto normal (< 18px regular, < 14px bold) | 4.5:1 | `text-foreground` 15:1 · `text-muted-foreground` 7.8:1 |
| Texto grande o bold | 3:1 | `text-cyan` 8:1 · `text-teal` 5.6:1 · `text-gold` 9.2:1 |
| Componentes UI (bordes, íconos funcionales) | 3:1 | todos los tokens pasan |

> **Regla**: usar solo los color tokens del DS. No inventar hex custom sin verificar contraste primero.
> **Herramienta rápida**: https://webaim.org/resources/contrastchecker/

### Animaciones:

- `prefers-reduced-motion` ya está implementado en `globals.css` — desactiva todas las animaciones CSS automáticamente
- Framer Motion: no requiere configuración extra — el CSS override lo cubre
- `.text-shimmer` y `.text-shimmer-gold` se degradan a texto estático bajo reduced-motion

### Tipografía — reglas canónicas (NO negociables):

- **H1**: `style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}` — NUNCA `text-4xl md:text-5xl`
- **H2**: `style={{ fontSize: "clamp(26px, 3vw, 42px)" }}` — NUNCA breakpoints Tailwind
- Familias: `font-display` (Plus Jakarta Sans) para headings, `font-sans` (Inter) para body/labels, `font-mono` (JetBrains Mono) para eyebrows/badges/monospace
- Solo color tokens del DS. Nunca hex custom sin verificar contraste en https://webaim.org/resources/contrastchecker/

### Contraste — error común a evitar:

**Nunca** usar `opacity-XX` en un contenedor para "atenuar" una sección deshabilitada. Hace ilegible el texto (`opacity-25` sobre `text-muted-foreground` ≈ 1.5:1 de contraste). Usar clases de color directas en cada elemento (`text-white/30`, `text-white/20`, etc.).

### Componentes compartidos:

Cuando se modifica un patrón, token o componente que aparece en múltiples páginas, verificar y actualizar TODAS las páginas afectadas. No corregir una y dejar el resto desactualizado.

### Checklist antes de dar una tarea por terminada:

- [ ] `layout.tsx` con metadata completa (si es página nueva)
- [ ] H1 único, hierarchy h1→h2→h3 correcta
- [ ] Tipografía: clamp en headings, familias correctas
- [ ] Todos los inputs tienen `<label htmlFor>` + `aria-required`/`aria-invalid`
- [ ] Botones de ícono tienen `aria-label`
- [ ] Dropdowns: `aria-haspopup` + `aria-expanded` + `role="listbox"`
- [ ] Errores: `role="alert"` siempre
- [ ] Imágenes tienen `alt` descriptivo
- [ ] Solo color tokens del DS (no hex custom)
- [ ] Componentes compartidos actualizados en todo el sitio

---

## Decisiones cerradas — no reabrir sin evidencia nueva

| Decisión | Detalle |
|----------|---------|
| Kaizen es el producto central | Zenit es la infraestructura invisible |
| Sin freemium | Trial de 14 días completo |
| Créditos por organización | No por usuario — todos comparten el pool |
| ZenitRank 100% objetivo | On-time rate, response time, criterios cumplidos |
| Primera etapa solo SSR/SR | Sin juniors. Garantiza calidad |
| Match Modelo 3 | Kaizen recomienda, la startup elige. Nunca asignación directa |
| SafePay protege resultado | No solo el dinero. Kaizen valida criterios antes de liberar |
| Product Brain es del cliente | Exportable siempre. Sin excepción |
| Discovery incluido en el plan | No es servicio separado. Diferenciado por profundidad según tier |
| Go-to-market secuencial | Emprendedor solo → empresa chica → empresa mediana |
| Human-in-the-loop obligatorio | Pagos/SafePay, borrados irreversibles, deploys a producción |

---

## SafePay — resumen

- Escrow que retiene el pago hasta que Kaizen valida que los criterios de aceptación se cumplieron
- Criterios se definen ANTES de que empiece el trabajo — firmados digitalmente por ambas partes
- Solo cubre milestones gestionados dentro de Kaizen
- Comisión: 7-12% por transacción
- Protocolo de disputas: negociación directa (3 días) → mediación Zenit (7 días) → decisión final (5 días)
- MVP: PSP tercero (Bind, Pomelo, Mercado Pago). PSP propio vía BCRA con 50+ transacciones/mes

---

## ZenitRank — sistema de reputación de squads

| Badge | Nombre | Requisitos clave |
|-------|--------|-----------------|
| ◆ | Squad Validado | Perfil completo, LinkedIn verificado |
| ★ | Squad Confiable | 1+ milestone, >80% on-time, score >7/10 |
| ✓ | Squad Verificado | 5+ milestones, >90% on-time, 2+ clientes, score >8.5 |
| ★★ | Squad Elite | 15+ milestones, >95% on-time, 5+ clientes, 0 disputas perdidas |

---

## Quién toca qué — zonas de trabajo

| Zona | Responsable | Descripción |
|------|-------------|-------------|
| `/app/` | David | Frontend, flujos de UI, rutas, páginas |
| `/components/` | David | Componentes React reutilizables |
| `/lib/` | David / Ricardo | Utilidades compartidas |
| Agentes OpenClaw | Ricardo | Arquitectura de agentes, core multi-tenant |
| API contracts | Ricardo | Interfaces entre frontend y agentes |

**Regla crítica:** si una tarea toca agentes Y frontend al mismo tiempo — pausar y sincronizar antes de ejecutar.

---

## Rutas rotas — prioridad inmediata

Estas rutas están linkeadas desde el Navbar pero no tienen `page.tsx`:
`/login`, `/get-started`, `/post-project`, `/analytics`, `/case-studies`, `/projects`, `/earnings`, `/handbook`, `/faq`

Prioridad: `/login` y `/get-started` primero — están en la barra principal.

---

## Próximos pasos activos

1. **Paso 0 — David (urgente)**: identificar empresa conocida para primer discovery real. Validar que Kaizen puede hacer un discovery útil con datos reales.
2. **Paso 1 — David**: flujo completo del discovery en Figma
3. **Paso 2 — David**: `/login` y `/get-started` — primeras rutas reales
4. **Paso 3 — Ricardo**: skills de agentes OpenClaw para discovery + API contracts del core
5. **Paso 4 — Ambos**: primer ciclo de desarrollo con el discovery como entregable único

---

## La hipótesis más importante a validar

> ¿Puede Kaizen hacer un discovery útil con información real de una empresa real y devolver un informe que esa empresa valore?

Si la respuesta es sí, todo lo demás se puede construir.

---

## Cómo arrancar cada sesión

```
1. CLAUDE.md se carga automáticamente — no hace falta pedirlo
2. Sesión de arquitectura/agentes → pedir brief técnico de Ricardo
3. Sesión de diseño/frontend → activar MCP de Figma
4. Plan Mode antes de cualquier operación multi-archivo
5. Al final de cada sesión → actualizar CLAUDE.md si hubo decisiones nuevas
```

---

*Documento vivo. Se actualiza al final de cada sesión.*
*Documentación extendida en `/docs/`*

---

## Copywriting — Reglas permanentes

> **REGLA**: Toda tarea que involucre redactar o editar copy debe seguir este workflow. No es opcional.

### Flujo de trabajo

1. **Consultar skills.sh** antes de redactar:
   - General: https://skills.sh/?q=copywriting
   - UX / conversacional: https://skills.sh/?q=ux+writing
   - Conversión / ventas: https://skills.sh/?q=sales+copy
   - Awareness / marketing: https://skills.sh/?q=marketing+copy

2. **Aplicar frameworks** de los skills (AIDA, PAS, etc.)

3. **Estructura obligatoria** de cada pieza de copy:
   - **Problema claro** → ¿Cuál es el pain point?
   - **Solución directa** → Cómo lo resuelve Zenit
   - **Beneficio** → Qué gana el usuario (no qué hace la feature)
   - **Acción** → CTA claro con urgencia sutil

4. **Beneficio, no feature** — "cobrás antes de escribir una línea" no "escrow activado al firmar"

5. **Verificar** contra `/docs/copywriting.md` (tone & voice guide local)

---

## Stack de Animaciones — Reglas permanentes

Ver detalle completo en `/docs/recursos-animacion.md`.

### Librerías disponibles (ya instaladas)
| Librería | Uso |
|----------|-----|
| Framer Motion v12 | Micro-animaciones, transiciones, `whileInView`, `AnimatePresence` |
| GSAP v3.15 | Scroll-based complejas, ScrollTrigger, parallax, timelines |
| Lenis v1.3.23 | Smooth scroll (ya configurado) |
| AOS v2.3.4 | On-scroll simples (instalado, no activo) |

### Referencias externas — repos públicos sin login

- **Magic UI** → https://github.com/magicui-io/magic-ui — componentes React animados listos para copiar
- **Aceternity UI** → https://github.com/aceternity/ui — efectos visuales de alto impacto
- **GSAP Docs** → https://gsap.com/docs/v3/ — API de ScrollTrigger y timelines
- **Lottie** → https://lottiefiles.com/featured — animaciones JSON livianas

**Cómo usarlas**: leer código directamente de los repos GitHub (sin login, sin Playwright) → extraer el patrón → adaptar al design system de Zenit.

### Decisión rápida por caso de uso
- Botones / modals / transiciones de UI → **Framer Motion**
- Scroll pesado / parallax / timeline preciso → **GSAP + ScrollTrigger**
- Componentes listos para copiar → **Magic UI** o **Aceternity UI** (repos GitHub)
- Animaciones JSON livianas → **Lottie**
- 3D complejo → **Three.js** (no instalado — instalar si se necesita)

### Regla: nunca dejar secciones estáticas
Cualquier sección nueva o componente interactivo debe tener al minimum:
- Fade in al entrar en viewport (`whileInView` o ScrollTrigger)
- Hover effects en elementos interactivos
- Antes de empezar, consultar repos de Magic UI / Aceternity UI para inspiración

---

## Modo Diseñador UI/UX — Configuración permanente

Cuando la tarea involucra diseño, componentes, landing pages,
o cualquier trabajo visual:

### Referencias de diseño siempre activas
- **21st.dev MCP** — acceder a componentes React de referencia
- **Aceternity UI** — componentes con impacto visual
- **Magic UI** — estilo SaaS moderno
- **Radix UI** — sistemas bien hechos
- **shadcn/ui** — estándar base del proyecto

### Inspiración visual — navegá y capturá con Playwright
- **Mobbin** — estructura real de flows/onboarding
- **Refero** — muy alineado a Zenit, conversión
- **Lapa Ninja** — copywriting + marketing
- **PageFlows** — flujos completos
- **Pttrns** — patrones mobile
- **Awwwards** → nivel visual, micro-interacciones
- **Dribbble** → ideas rápidas
- **Behance** → casos profundos

### El enfoque
Cuando diseñes, siempre:
1. Navega 2-3 referencias relevantes con Playwright
2. Captura pantallas reales como inspiración
3. Extrae patrones: estructura, componentes, animaciones, copy
4. Combina lo mejor de cada una en la solución
5. Usa 21st.dev MCP para generar componentes React de calidad

### Criterios visuales no negociables
- Dark-only (a menos que se diga lo contrario)
- Tokens: teal #0d9488, cyan #00b4d8, gold #f59e0b
- Framer Motion v12 (as const en easings)
- shadcn/ui + Aceternity para componentes
- Mobile-first
- Impacto visual tipo Awwwards (nivel top)
- Copy orientado a conversión tipo Lapa Ninja

### Cuando pidas diseño, no repitas las referencias
Claude Code ya las conoce. Solo decí:
"Diseña [cosa] con nivel Awwwards, estructura tipo Mobbin,
copy tipo Lapa"

O simplemente: "Diseña esto para convertir"
