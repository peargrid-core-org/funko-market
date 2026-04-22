# Rescate PEA-139 — MVP gestor inventario Funkos (2026-04-22)

> Carpeta de **rescate** con el trabajo local que Fer tenía en la rama `PEA-139-gestor-inventario-funkos` del repo ORQUESTADOR. Se migra aquí para no perderlo cuando la rama del orquestador se borre.

## Origen

- **Repo origen**: `peargrid-core-org/ORQUESTADOR`
- **Rama origen**: `PEA-139-gestor-inventario-funkos` (local en el Mac de Fer, no pusheada)
- **Ticket Linear**: [PEA-139](https://linear.app/peargrid/issue/PEA-139) — *MVP gestor de inventario Funkos — prototipo funcional* (status: Canceled).
- **Commits rescatados** (2):
  - `49ee054` — PEA-139: MVP gestor inventario Funkos — prototipo funcional
  - `a9c1e61` — merge origin/main — resolver conflictos con theirs
- **Fecha de rescate**: 2026-04-22 — sesión Fer, ejecución protocolo [PEA-297](https://linear.app/peargrid/issue/PEA-297).

## Por qué aquí y no en el orquestador

- Funko es **proyecto personal de Fer**, no producto PearGrid (decisión 2026-04-21, [PEA-305](https://linear.app/peargrid/issue/PEA-305)).
- Su sitio natural es este repo (`funko-market`), no el orquestador.
- La rama del orquestador se va a borrar en el mismo commit que PEA-297 para limpiar el working tree de Fer.

## Qué contiene

| Archivo | Qué es |
|---|---|
| `app.html` (42 KB) | Prototipo funcional del gestor de inventario: añadir Funkos con foto/nombre/número/estado/precio, generar descripciones para Vinted y Wallapop, gestionar inventario (en venta / vendido), stats. HTML + CSS + JS con `localStorage` (sin backend). |
| `estado.md` | Estado del proyecto: qué está hecho, qué falta, decisiones tomadas, contexto. |
| `rama-PEA-139-commits.bundle` | **Bundle git** con los 2 commits originales. Permite recuperar la rama completa con historia si Fer quiere retomar el desarrollo sobre la misma base. |

## Cómo recuperar los commits originales (si Fer retoma el proyecto)

```bash
# Desde el repo funko-market
git fetch legacy/pea-139-mvp-inventario-2026-04/rama-PEA-139-commits.bundle
# O importar a una rama nueva para seguir trabajando:
git bundle unbundle legacy/pea-139-mvp-inventario-2026-04/rama-PEA-139-commits.bundle
git checkout -b retomar-gestor-funkos FETCH_HEAD
```

## Cómo probar el prototipo YA (sin recuperar historia)

```bash
cd legacy/pea-139-mvp-inventario-2026-04
open app.html
```

Abre el prototipo directamente en el navegador. Todo vive en `localStorage` — los datos quedan en el navegador hasta que limpies caché o los exportes.

## Estado del ticket

- [PEA-139](https://linear.app/peargrid/issue/PEA-139) está en **Canceled** en Linear (decisión Fer durante triage 2026-04-19). Este rescate NO lo reabre — solo preserva el código por si Fer retoma la idea algún día.
- Si Fer decide retomar Funko en serio, puede crear un ticket nuevo basado en esta base (no reutilizar PEA-139).

## Para retomar (Fer, cuando quiera)

1. Leer este README.
2. Abrir `app.html` en el navegador para ver el estado del prototipo.
3. Leer `estado.md` para saber qué estaba hecho y qué faltaba.
4. Decidir: ¿retomar sobre este prototipo, rehacer desde cero, o archivar?
