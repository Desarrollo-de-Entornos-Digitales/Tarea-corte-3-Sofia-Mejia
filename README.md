# Tarea corte 3: Componentes con daisyUI

Next.js (App Router) · Tailwind CSS v4 · daisyUI 5 · tema institucional Icesi (`src/app/globals.css`).

Autora: Sofía Mejía

## Componentes implementados (20 de 20)

### Nivel 1: Átomos

| N.º | Componente | Ruta |
|---|---|---|
| 01 | Botón de Acción | `src/shared/components/ui/action-button.tsx` |
| 02 | Insignia de Estado | `src/shared/components/ui/status-badge.tsx` |
| 03 | Banner de Alerta | `src/shared/components/ui/alert-banner.tsx` |
| 04 | Avatar con Anillo y Rol | `src/shared/components/ui/user-avatar-card.tsx` |
| 05 | Píldora Kbd | `src/shared/components/ui/kbd-shortcut-pill.tsx` |
| 06 | Calificación por Estrellas | `src/shared/components/ui/star-rating.tsx` |
| 07 | Métrica Bento Stat | `src/shared/components/ui/metric-bento-stat.tsx` |

### Nivel 2: Moléculas

| N.º | Componente | Ruta |
|---|---|---|
| 08 | Tarjeta de Asignatura | `src/features/courses/components/course-card.tsx` |
| 09 | Panel Bento Multi-Métrica | `src/shared/components/ui/multi-metric-panel.tsx` |
| 10 | Notificación Toast | `src/shared/components/ui/toast-notification.tsx` |
| 11 | Globo de Conversación | `src/features/tutoring/components/advisory-chat-bubble.tsx` |
| 12 | Fila de Directorio | `src/features/students/components/student-directory-row.tsx` |
| 13 | Rastreador de Hitos por Pasos | `src/shared/components/ui/step-progress-tracker.tsx` |
| 14 | Selector de Etiquetas | `src/shared/components/ui/tag-selector.tsx` |

### Nivel 3: Organismos

| N.º | Componente | Ruta |
|---|---|---|
| 15 | Tarjeta de Evento con Countdown | `src/features/events/components/event-card.tsx` |
| 16 | Barra de Navegación con Menú | `src/shared/components/ui/academic-app-navbar.tsx` |
| 17 | Formulario de Tutoría | `src/features/tutoring/components/tutoring-request-form.tsx` |
| 18 | Diálogo Modal de Confirmación | `src/shared/components/ui/submission-confirm-modal.tsx` |
| 19 | Perfil Docente con Tabs | `src/features/teachers/components/teacher-profile-card.tsx` |
| 20 | Backlog en Acordeón | `src/features/projects/components/sprint-accordion-panel.tsx` |

## Notas técnicas

- Solo usan `"use client"` los componentes con estado o efectos: `toast-notification.tsx` (useState) y `submission-confirm-modal.tsx` (useRef y useEffect). El resto son Server Components.
- Tabs, acordeón, selector de etiquetas y menú desplegable funcionan solo con CSS (daisyUI + variantes de Tailwind), sin JavaScript.
- Colores 100% semánticos del tema `icesi`, sin estilos inline ni hexadecimales arbitrarios.
- Diseño mobile-first, verificado desde 360 px.
- `src/app/page.tsx` muestra los 20 componentes en funcionamiento.

## Cómo ejecutar

    npm install
    npm run dev

Abrir http://localhost:3000

