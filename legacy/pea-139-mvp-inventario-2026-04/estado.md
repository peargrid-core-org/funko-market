# Gestor Funkos — Estado del proyecto

## Info general

- **Repo**: Dentro del orquestador por ahora (`proyectos/gestor-funkos/`)
- **GitHub**: `peargrid-core-org/ORQUESTADOR` (subcarpeta)
- **Tipo**: Herramienta de gestión de inventario para venta de Funkos
- **Stack**: HTML + CSS + JS (localStorage) — sin backend
- **Plataformas objetivo**: Vinted, Wallapop

## Prioridades actuales

1. **PEA-139**: MVP prototipo funcional (URGENTE)

## Estado actual de lo construido

### MVP (PEA-139)
- [ ] App web funcional con gestión de inventario
- [ ] Generador de descripciones para Vinted/Wallapop
- [ ] Carga rápida de Funkos
- [ ] Copiar texto para publicar

## Decisiones tomadas

| Fecha | Decisión | Contexto |
|-------|----------|----------|
| 2026-04-12 | Proyecto independiente de FunkoMarket | Fer decidió que son cosas distintas: gestión interna vs marketplace público |
| 2026-04-12 | Prototipo HTML con localStorage | Para tener resultados inmediatos sin infra |

## Historial de operaciones

| Fecha | Operación | Resultado | Notas |
|-------|-----------|-----------|-------|
| 2026-04-12 | Creación proyecto (PEA-139) | En curso | Prototipo MVP (Fer) |

## Resúmenes — Tracking de entrega

| Socio | Último resumen recibido | Último mini-resumen diario visto |
|-------|------------------------|----------------------------------|
| Cristian | — | — |
| Miki | — | — |
| Fer | 2026-04-12 | 2026-04-12 |

## Mini-resúmenes diarios

### 2026-04-12
- Fer: Creado proyecto Gestor Funkos (independiente de FunkoMarket). MVP funcional con inventario, carga rapida, generador de descripciones para Vinted/Wallapop, estadisticas.
- Cambios en producción: no (PR pendiente de merge)

## Contexto última sesión — 2026-04-12 — Fer

DECISIONES TOMADAS Y POR QUÉ:
- Proyecto independiente de FunkoMarket: Fer decidió que son cosas distintas — gestor interno vs marketplace publico
- Prototipo HTML con localStorage: para tener resultados inmediatos sin infra
- Separador coma en carga rapida (en vez de pipe): feedback de Fer, mas comodo de escribir

EN PROGRESO:
- PR del orquestador con todo el proyecto (PEA-139): pendiente de merge
- Fer va a probar el prototipo y dar feedback

TRAMPAS / COSAS NO OBVIAS:
- La app guarda todo en localStorage del navegador — si Fer limpia datos del navegador, pierde el inventario
- Las fotos se comprimen a 400px y JPEG 70% para no reventar localStorage (~5MB limite)
- No hay backend ni IA real todavia — las descripciones se generan con plantillas

PRÓXIMOS PASOS:
- Fer valida el prototipo y da feedback
- Iterar segun feedback (posible: mejorar descripciones, anadir mas campos, importar datos)
- Cuando el prototipo este validado: decidir si mover a repo propio con backend + IA real
