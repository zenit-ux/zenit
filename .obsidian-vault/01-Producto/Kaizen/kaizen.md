# Kaizen — Diseño completo del agente de producto

## Qué es Kaizen

Kaizen es el agente de producto de Zenit. Es el producto central — el cliente habla con Kaizen, no con Zenit.

No es un chatbot. No es un asistente. No es un CTO virtual genérico. Es un agente que acumula contexto del negocio y del producto, detecta las brechas que la IA interna no puede cubrir, y conecta a la empresa con el expertise humano externo exacto que necesita, en el momento que lo necesita.

**La promesa:** Kaizen libera al equipo de la carga de decisión de producto para que pueda focalizarse en construcción.

---

## El Discovery — primer acto obligatorio

El discovery está **incluido en el plan contratado**. No es un servicio separado ni un onboarding genérico. Es el primer acto de Kaizen con cada cliente — sin él, Kaizen no tiene el contexto necesario para ser útil.

### Por qué el discovery es el producto

El discovery resuelve el problema del bootstrapping de contexto: ¿cómo puede Kaizen recomendar si no conoce el producto? La respuesta es que el discovery convierte ese problema en el primer entregable de valor. La empresa recibe un informe concreto. Kaizen construye el Product Brain que le permite ser útil para todo lo que sigue.

### Flujo completo del discovery

**Fase 1 — Activación**
Kaizen define con el responsable quiénes son los entrevistados y qué documentación necesita. No empieza sin acceso real al producto y al equipo. Sin esto, SafePay no se activa.

**Fase 2 — Recolección**
Kaizen conduce entrevistas estructuradas de forma autónoma con cada responsable. La guía de preguntas varía según el rol:
- CTO/tech lead → stack, deuda técnica, decisiones de arquitectura, capacidad del equipo
- Product Manager → roadmap, prioridades, dolores de producto, métricas
- Negocio/CEO → visión, OKRs, restricciones de presupuesto, timeline
Recibe documentación técnica, funcional, de visión, roadmaps existentes, métricas.

**Fase 3 — Análisis**
Kaizen cruza todas las fuentes. Detecta:
- Contradicciones entre lo que dice negocio y lo que dice tech
- Deuda técnica no documentada
- Capacidad real del equipo vs demanda
- Multiplicidad de tareas que matan el foco
- Brechas que la IA interna no puede cubrir

**Fase 4 — Validación humana**
El responsable de la empresa revisa el análisis de Kaizen. Si hay ajustes, los indica. Kaizen los incorpora y continúa. Si está bien, Kaizen arma los action items.
El humano valida — no construye. Esto permite escalar.

**Fase 5 — Informe**
Entrega estructurada con:
- Puntos de dolor priorizados
- Oportunidades de mejora
- Roadmap sugerido
- Backlog inicial
- Evaluación de capacidad del equipo
- Brechas que requieren expertise externo

**Fase 6 — Presentación**
Kaizen presenta el informe. No lo manda por email. Lo presenta, responde preguntas, y en esa conversación aparece naturalmente qué puede hacer Zenit para ejecutar lo que el informe recomienda.

### Profundidad del discovery por plan

| Segmento | Entrevistados | Profundidad |
|----------|--------------|-------------|
| Emprendedor solo | 1-2 personas | Discovery liviano, docs escasos, informe acotado |
| Empresa chica | 4-6 personas | Más fuentes cruzadas, análisis de equipo |
| Empresa mediana | 10+ stakeholders | Documentación extensa, múltiples capas de negocio |

Esta diferencia justifica naturalmente la diferencia de precio entre planes.

---

## El Product Brain

El Product Brain es la memoria persistente de Kaizen por organización. Acumula contexto en cada interacción — cada conversación, cada milestone cerrado, cada decisión documentada.

**Propiedades:**
- Es del cliente — exportable siempre, sin excepción
- Aislado por `key data` emitida por el core de Zenit (cross-tenant leakage arquitectónicamente imposible)
- El `agentId` aísla conversaciones y sesiones
- La `key data` aísla el Product Brain y las búsquedas vectoriales
- Sin `key data` válida = sin acceso, sin importar el `agentId`

**Por qué es el moat real de Zenit:**
El switching cost no es la plataforma — es el contexto acumulado del propio producto del cliente. A medida que el Product Brain crece, Kaizen puede anticipar necesidades antes de que el cliente las vea. Ese contexto no se puede transferir a un competidor.

---

## Los 5 estadios de madurez tecnológica

Kaizen evalúa en qué estadio está la empresa y hace routing de squads en consecuencia.

| # | Perfil | Síntomas | Routing de Kaizen |
|---|---|---|---|
| 01 | Sin equipo tech | No tienen devs. Tienen idea o producto manual. | Full squad deployment |
| 02 | Sistemas legacy | Tech obsoleta, deuda enorme, migración pendiente. | Migration squad |
| 03 | Tiene equipo, sin IA | Equipo funcional pero sin adopción de IA. Velocidad baja. | AI implementation squad |
| 04 | Construyendo IA | Incorporando IA pero sin expertise específico. | Targeted expertise |
| 05 | AI-native | IA en el centro del producto. Necesitan squads senior on-demand. | Senior squads on demand |

---

## El pipeline de 6 pasos (flujo de producto completo)

Implementado en `AgenticPipelineSection.tsx` como timeline vertical.

| Paso | Nombre | Qué hace Kaizen |
|------|--------|-----------------|
| 1 | Discover | Conversación natural sin formularios (~4 min). Construye contexto. |
| 2 | Assess Maturity | Evalúa el estadio de madurez con las respuestas de la conversación. |
| 3 | Generate Brief | Genera el brief completo: stack inferido, milestones, presupuesto, perfil del squad. |
| 4 | Match Squads | Solo si se necesita coordinación humana. Ranking por fit exacto. |
| 5 | Setup SafePay | Auto-estructura los pagos en escrow desde el brief. Sin negociación manual. |
| 6 | Monitor Delivery | Oversight continuo. Detecta scope creep. Escala cuando se requiere decisión humana. |

---

## Gen UI — el brief que se construye solo

Cuando Kaizen genera el brief, la interfaz se construye dinámicamente desde la conversación. El usuario no llena ningún campo.

El brief incluye:
- Nombre del proyecto
- Stack inferido (con justificación de por qué ese stack)
- Milestones con fechas
- Rango de presupuesto estimado
- Perfil del squad recomendado
- Decisión de routing (IA autónoma vs squad humano)

Implementado como mockup estático en `GenUISection.tsx`. El ejemplo actual usa un Logistics SaaS MVP de $72,000 en 4 milestones.

---

## Kaizen y el modelo de comunicación

**Regla central:** Kaizen solo cubre trabajo gestionado dentro de la plataforma. Si la empresa y el squad acuerdan algo por fuera (WhatsApp, email), ese acuerdo no tiene cobertura de SafePay.

Esto no es una restricción — es un incentivo de diseño. Toda la comunicación dentro de Kaizen queda registrada automáticamente en el Product Brain. Esos registros son la base para resolver cualquier disputa y para que Kaizen mejore sus recomendaciones con el tiempo.

---

## La tesis de largo plazo de Kaizen

Hoy Kaizen orquesta squads que la empresa ya sabe que necesita. El norte es que Kaizen sea quien detecte cuándo la empresa necesita expertise humano externo — y lo contrate.

**El flujo futuro:**
1. Kaizen detecta la brecha desde el Product Brain
2. Expone el caso y los motivos a la empresa
3. La empresa aprueba
4. Kaizen contrata el squad, define el milestone, activa SafePay

El humano siempre está en el proceso de creación. Kaizen define cuándo y para qué se necesita.

---

## Estado actual del código

### Lo que está construido (UI/marketing)
- `app/kaizen/page.tsx` — página de producto completa con tres mockups: discovery chat, squad matching, delivery dashboard
- `components/sections/KaizenSection.tsx` — sección de homepage con mockup de chat de discovery y panel de análisis de madurez
- `components/sections/AIMaturitySection.tsx` — grid de 5 columnas con los estadios de madurez
- `components/sections/GenUISection.tsx` — split-view: chat a la izquierda, brief generándose a la derecha
- `components/sections/AgenticPipelineSection.tsx` — timeline de 6 pasos + terminal trace + stat strip

### [PENDIENTE] Lo que no existe
- Backend de Kaizen — todo es mockup estático
- Integración con LLM (Anthropic API)
- Persistencia de conversaciones / Product Brain real
- Lógica de evaluación de madurez
- Algoritmo de matching de squads
- API de discovery
- Flujo de entrevistas autónomas
- Generador de informe real
