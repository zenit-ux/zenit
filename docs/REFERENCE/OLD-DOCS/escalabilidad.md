# Escalabilidad — Del MVP a Millones

> Cómo Zenit pasa de 1 empresa/1 squad a 1M squads sin romper.
> Última actualización: 29 de abril de 2026

---

## El problema de escala

**MVP actual:**
- 1 empresa, 1 squad, Kaizen hace discovery manual
- Kaizen puede hacer 8-10 descubrimientos/día — bottleneck humano

**Realidad a escalar:**
- 1.000+ empresas, 1M+ squads simultáneos
- Kaizen como único agente no da abasto

---

## La solución: arquitectura de agentes verticales

No es "un Kaizen para todo". Es **Kaizen orquestador → 5 sub-agentes especializados**, cada uno experto en su dominio.

```
KAIZEN ORQUESTADOR
(Entiende quién sos, rutea al agente correcto)
         ↓
┌──────────────────────────────────────────────────┐
│            AGENTES VERTICALES                    │
├──────────────────────────────────────────────────┤
│  1. Discovery Agent    → Brief técnico           │
│  2. Matching Agent     → Top 5 squads ranked     │
│  3. Validation Agent   → Riesgo score            │
│  4. SafePay Agent      → Contrato + escrow       │
│  5. Monitoring Agent   → Alertas de milestone    │
└──────────────────────────────────────────────────┘
```

### Los 5 agentes

| Agente | Input | Output | Cómo escala |
|--------|-------|--------|------------|
| **Discovery** | Empresa/Squad sin mapeo | Brief técnico (30 min → 5 min) | N briefings en paralelo |
| **Matching** | Brief empresa + DB squads | Top 5 squads rankeados | Vector search (no brute force) |
| **Validation** | Match propuesto | Score de riesgo + capacidad | Checks automáticos (ZenitRank, skills) |
| **SafePay** | Squad + Empresa + Brief | Contrato + escrow setup | API con payment provider |
| **Monitoring** | Proyecto en ejecución | Alertas de riesgo, validación de milestones | Background jobs, webhooks |

---

## Comparativa de latencia: MVP vs escala

**Antes (MVP):**
```
Empresa → Kaizen (espera humano) → 30 min → Match → SafePay
```

**Después (escala):**
```
Empresa → Kaizen Orquestador (routing instantáneo)
    ↓
Discovery Agent  → Brief en 5 min    (IA analiza stack, pre-llena campos)
    ↓
Matching Agent   → Top 5 en 2 seg   (vector search en 1M squads)
    ↓
Validation Agent → Risk score 10 seg (checks automáticos)
    ↓
SafePay Agent    → Contrato listo    (setup instantáneo)
    ↓
Monitoring Agent → Background        (alertas automáticas)

Total: 2-3 minutos vs 30 minutos en MVP
```

---

## Escalabilidad por capa

### 1. Discovery (Brief)

| Etapa | Implementación | Throughput |
|-------|---------------|-----------|
| MVP | Kaizen con Claude API directa | ~1 req/min |
| Escala media | Discovery Agent + caching por industria (fintech → template reutilizable) | ~100 req/min |
| 1M squads | Briefs pre-generados al registrarse (auto-brief en onboarding) | Asíncrono |

### 2. Matching (Búsqueda)

| Etapa | Implementación | Complejidad |
|-------|---------------|------------|
| MVP | Loop sobre 100 squads, Claude ranquea | O(n) |
| Escala media | Vector embeddings (stack, experiencia, industria) | O(log n) |
| 1M squads | Búsqueda vectorial en <100ms (Pinecone/Weaviate) | O(1) efectivo |

### 3. Validation (Checks)

| Etapa | Implementación |
|-------|---------------|
| MVP | Manual (¿es realmente SSR? ¿tiene capacidad?) |
| Escala media | Reglas automáticas (ZenitRank score > X, skills match > Y%) |
| 1M squads | Validation en tiempo real, sin humanos |

### 4. SafePay (Contrato)

| Etapa | Implementación |
|-------|---------------|
| MVP | Form + firma manual |
| Escala media | Contrato auto-generado (template por industria) |
| 1M transacciones | API automática, webhooks para cambios de estado |

### 5. Monitoring (Vigilancia)

| Etapa | Implementación |
|-------|---------------|
| MVP | Manual (cliente reporta problema) |
| Escala media | Alertas automáticas (milestone vence, squad no deliverable) |
| 1M proyectos | Background jobs que monitorean en tiempo real |

---

## Arquitectura técnica

### Base de datos

```
Squads (1M registros)
  - id, nombre, skills, ZenitRank, brief
  - vector_embedding  ← para búsqueda semántica

Empresas (100k registros)
  - id, nombre, industria, brief, estado
  - vector_embedding  ← para búsqueda semántica

Matches (histórico)
  - empresa_id, squad_id, score, estado
  - feedback loop para ML reranking

Proyectos (en ejecución)
  - empresa_id, squad_id, milestone_status
  - SafePay escrow state
```

### Vector search (Matching)

```sql
SELECT squads.*
FROM squads
WHERE vector_similarity(
  brief_embedding,
  empresa_brief_embedding
) > 0.75
ORDER BY similarity DESC
LIMIT 5
```

### Definición de agentes (LLM + Tools)

```
Discovery Agent
  Tools:   LinkedIn API, GitHub API, ZenitRank rules
  Prompt:  "Mapea este squad, genera brief en JSON"

Matching Agent
  Tools:   Vector search, ranking rules
  Prompt:  "Dado este brief, devolvé top 5 squads"

Validation Agent
  Tools:   ZenitRank check, skill validation, capacity DB
  Prompt:  "¿Puede este squad hacer esto? Score de riesgo"

SafePay Agent
  Tools:   Contract generator, escrow API
  Prompt:  "Generá contrato para este match"

Monitoring Agent
  Tools:   Webhook listener, milestone DB, alert system
  Prompt:  "¿Hay riesgo en este proyecto? Alertá si hay desvío"
```

---

## Métricas de éxito

| Etapa | Matches/día | Latencia | Squads activos | Empresas activas |
|-------|------------|---------|---------------|-----------------|
| MVP (hoy) | 1 manual | 30 min | — | — |
| Mes 6 | 100 automáticos | 2 min | 10k | 1k |
| Año 1 | 1.000 automáticos | <1 min | 100k | 10k |

**Meta Año 1:** success rate > 90% (empresa acepta el match propuesto).

---

## Análisis de riesgos

### Lo que escala sin fricciones

- **Matching por vector search** — arquitectura estándar (Airbnb, Uber). Bien documentada.
- **Validation automática** — reglas + scoring. Escala con reglas simples primero.
- **SafePay Agent** — básicamente contract generation basada en templates.
- **Monitoring** — background jobs sin impacto en critical path.

### El riesgo real: calidad del matching

Si vector search no rankea bien, los matches son malos → el producto falla.

Solución: **feedback loop continuo**:
1. Empresa rechaza un match → motivo registrado
2. Ese dato retroalimenta el modelo de ranking
3. ML reranking mejora con cada rechazo
4. A 1k rechazos acumulados, el sistema se vuelve significativamente mejor

No es un riesgo que se resuelve de entrada — se resuelve iterando.

---

## Roadmap de implementación

| Período | Qué se construye |
|---------|-----------------|
| **MVP (ahora)** | 1 Kaizen, discovery manual, matching manual |
| **Mes 1-2** | Discovery Agent (auto-brief) + Matching Agent (vector search básico) |
| **Mes 3-4** | Validation Agent + SafePay Agent (contrato automático) |
| **Mes 5-6** | Monitoring Agent + ML reranking (feedback loop) |
| **Año 1** | Todos los agentes optimizados, escala a 1M squads |

---

## Decisiones de arquitectura relacionadas

Ver `/docs/arquitectura.md` para el stack técnico completo.

El diseño de agentes verticales es responsabilidad de **Ricardo (CTO)**. El frontend de Kaizen y los flujos de UX son responsabilidad de **David (CPO)**. Cualquier tarea que toque ambas capas simultáneamente requiere sincronización antes de ejecutar.
