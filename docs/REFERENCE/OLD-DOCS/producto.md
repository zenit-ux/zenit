# Producto — Zenit & Kaizen

## Qué es Zenit

Zenit es un marketplace de squads de tecnología con un agente de IA en el centro del flujo. **Zenit es la infraestructura invisible** — el cliente ve y habla con Kaizen.

El modelo tiene dos lados:
- **Empresas** — encuentran squads sin armar un equipo interno. Pagan cuando el milestone es aprobado por Kaizen.
- **Squads / devs** — se registran, califican en SkillBase, acceden a proyectos, cobran con SafePay garantizado.

---

## La tesis de mercado

El mundo del trabajo tecnológico atraviesa una transformación estructural. Las empresas están adoptando IA en sus productos, lo que lleva a reducción de equipos. El 55% de las empresas que despidieron citando IA se arrepienten (Forrester, 2025). Un tercio ya gastó más recontrando que lo que ahorró despidiendo.

La brecha que Zenit resuelve: el expertise humano se necesita de forma diferente — más puntual, más especializado, más orientado a lo que la IA no puede hacer. Kaizen detecta esa brecha y conecta con el expertise correcto.

---

## Los tres segmentos de cliente

### 1. Emprendedor solo (MVP — primer cliente)
- 1-2 personas construyendo producto con IA
- Dolor: llegan al techo. La IA no alcanza para todo. Sin presupuesto para nómina fija.
- Cómo entra Kaizen: discovery → detecta brechas → trae squad puntual
- Por qué primero: ciclo de decisión de 1 día, feedback rápido, sin procurement

### 2. Empresa chica post-layoffs (segundo paso)
- 10-50 personas, equipo reducido que heredó el trabajo de los que se fueron
- Dolor: espiral de deuda técnica. Bugs consumen sprints. Nadie piensa el producto.
- Cómo entra Kaizen: ocupa la función que desapareció. Piensa el producto encima del equipo.

### 3. Empresa mediana post-layoffs (mediano plazo)
- Despidió, se arrepintió, necesita recontratar sin volver a nómina fija
- Cómo entra Kaizen: diagnóstico primero, ejecución después. Sin relación de dependencia.

---

## Kaizen — el producto core

### Qué es
Agente de IA que actúa como primer punto de contacto y socio estratégico de producto. No es un chatbot ni un formulario. Opera en modo agentic: hace preguntas, construye contexto, evalúa madurez, toma decisiones de routing.

### El Discovery — primer acto obligatorio
El discovery está **incluido en el plan contratado**. No es un servicio separado.

Flujo de 6 fases:
1. **Activación** — Kaizen define entrevistados y documentación necesaria
2. **Recolección** — entrevistas autónomas por rol (CTO ≠ PM ≠ negocio). Recibe docs técnicos, funcionales, de visión, roadmaps, métricas
3. **Análisis** — cruza fuentes, detecta contradicciones negocio/tech, mapea capacidad del equipo vs demanda
4. **Validación humana** — el responsable revisa. Si hay ajustes, Kaizen los incorpora y continúa
5. **Informe** — puntos de dolor priorizados, oportunidades, roadmap sugerido, backlog inicial
6. **Presentación** — Kaizen presenta (no manda por email), responde preguntas

### Los 5 estadios de madurez (implementados en `AIMaturitySection.tsx`)
| # | Perfil | Routing de Kaizen |
|---|---|---|
| 01 | Sin equipo tech | Full squad deployment |
| 02 | Sistemas legacy | Migration squad |
| 03 | Tiene equipo, sin IA | AI implementation squad |
| 04 | Construyendo IA | Targeted expertise |
| 05 | AI-native | Senior squads on demand |

### El flujo de producto completo (6 pasos — `AgenticPipelineSection.tsx`)
1. **Discover** — conversación natural, sin formularios (~4 min)
2. **Assess Maturity** — evalúa el estadio de madurez
3. **Generate Brief** — brief completo con stack inferido, milestones y presupuesto
4. **Match Squads** — solo si se necesita coordinación humana; ranking por fit exacto
5. **Setup SafePay** — estructura los pagos en escrow automáticamente desde el brief
6. **Monitor Delivery** — oversight continuo, detecta scope creep, escala cuando se requiere decisión humana

### Product Brain
Memoria persistente por organización. Acumula contexto en cada interacción. Es del cliente — exportable siempre. Aislado por `key data` emitida por el core (cross-tenant leakage arquitectónicamente imposible).

### Lo que está construido (UI/marketing)
- `components/sections/KaizenSection.tsx` — mockup de chat de discovery + análisis de madurez
- `components/sections/AIMaturitySection.tsx` — grid de 5 estadios
- `components/sections/GenUISection.tsx` — chat + brief generándose progresivamente
- `components/sections/AgenticPipelineSection.tsx` — timeline de 6 pasos + terminal trace
- `app/kaizen/page.tsx` — página de producto completa

### [PENDIENTE] Lo que no existe
- Backend de Kaizen — todo es mockup estático
- Integración con LLM (Anthropic API)
- Persistencia de conversaciones / Product Brain real
- Lógica de evaluación de madurez
- Algoritmo de matching de squads
- API de discovery

---

## SafePay

Ver `/docs/safepay.md` para el diseño completo.

Resumen: escrow por milestone. Los fondos se retienen hasta que Kaizen valida que los criterios de aceptación se cumplieron. Comisión 7-12%. Solo cubre milestones gestionados dentro de Kaizen.

**Estado:** UI completa en `app/safepay/page.tsx`. Sin backend.

---

## ZenitRank

Sistema de reputación de squads basado en resultados reales — no en declaraciones.

| Badge | Nombre | Requisitos |
|-------|--------|-----------|
| ◆ | Squad Validado | Perfil completo, LinkedIn verificado |
| ★ | Squad Confiable | 1+ milestone, >80% on-time, score >7/10 |
| ✓ | Squad Verificado | 5+ milestones, >90% on-time, 2+ clientes, score >8.5 |
| ★★ | Squad Elite | 15+ milestones, >95% on-time, 5+ clientes, 0 disputas perdidas |

---

## Otros productos

| Producto | Descripción | Estado |
|----------|-------------|--------|
| SkillBase | Comunidad de talento. Empresas pagan por asientos para acceder al directorio. | UI completa, sin backend |
| TalentPath | Programa de juniors, $49/mes. Proyectos reales con squads senior. | UI completa, sin backend |
| TalkFlow | Traducción de voz en tiempo real ES/PT ↔ EN. Add-on +$29/mes. | UI completa, sin backend |

---

## La tesis de largo plazo

En algún momento, las empresas van a tener un responsable supervisando múltiples procesos. Ese responsable no va a contratar equipos internos — va a delegar en Kaizen la detección de cuándo se necesita expertise humano externo. Kaizen contrata, orquesta y valida el resultado. El humano aprueba y sigue.

**El cliente que alimenta bien a Kaizen hoy es el que llega antes a ese futuro.**
