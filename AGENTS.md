<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:zenit-agent-rules -->
# Reglas de comportamiento para este proyecto

## Identidad
- Este es el repo de **Kaizen** — el agente de producto de Zenit
- Leer `CLAUDE.md` antes de cualquier tarea para tener contexto completo del producto
- Para contexto profundo: leer los archivos en `/docs/` según lo que indica el CLAUDE.md

## Antes de escribir código
1. Leer `AGENTS.md` y `CLAUDE.md`
2. Identificar si la tarea toca frontend (David) o agentes (Ricardo) — nunca mezclar sin coordinación
3. Para tareas multi-archivo: usar Plan Mode, listar todos los archivos a tocar antes de empezar
4. Para componentes nuevos: verificar si ya existe algo similar en `/components/`

## Convenciones de código
- TypeScript estricto — sin `any`, sin `@ts-ignore` sin justificación
- Framer Motion: los easings siempre con `as const` → `[0.22, 1, 0.36, 1] as const`
- Tailwind v4: configuración en `globals.css`, no en `tailwind.config.ts` (no existe)
- Colores del sistema: usar tokens (`bg-teal`, `text-cyan`, `border-gold`)
- Colores de paneles oscuros específicos: usar `style={{ background: "#040e0e" }}`
- Imports: absolutos desde raíz (`@/components/...`), no relativos
- Un componente por archivo, PascalCase, nombre igual al componente
- `"use client"` en todo componente que use Framer Motion o hooks de browser

## Lo que no hacer nunca
- No modificar archivos en zonas de Ricardo sin coordinación explícita
- No hacer deploys a producción sin aprobación humana
- No borrar datos ni hacer operaciones irreversibles sin confirmación
- No instalar dependencias nuevas sin mencionarlo antes
- No inventar funcionalidades que no están en el CLAUDE.md ni en el código

## Cuando algo no cierra
- Preguntar antes de ejecutar
- Si hay ambigüedad en el scope: acotar y confirmar antes de empezar
- Si la tarea requiere contexto que no está disponible: pedirlo explícitamente
<!-- END:zenit-agent-rules -->
