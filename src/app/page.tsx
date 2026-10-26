"use client";

import { useState } from "react";
import { ActionButton } from "@/shared/components/ui/action-button";
import { StatusBadge } from "@/shared/components/ui/status-badge";
import { AlertBanner } from "@/shared/components/ui/alert-banner";
import { UserAvatarCard } from "@/shared/components/ui/user-avatar-card";
import { KbdShortcutPill } from "@/shared/components/ui/kbd-shortcut-pill";
import { StarRating } from "@/shared/components/ui/star-rating";
import { MetricBentoStat } from "@/shared/components/ui/metric-bento-stat";
import { MultiMetricPanel } from "@/shared/components/ui/multi-metric-panel";
import { ToastNotification } from "@/shared/components/ui/toast-notification";
import { StepProgressTracker } from "@/shared/components/ui/step-progress-tracker";
import { TagSelector } from "@/shared/components/ui/tag-selector";
import { AcademicAppNavbar } from "@/shared/components/ui/academic-app-navbar";
import { SubmissionConfirmModal } from "@/shared/components/ui/submission-confirm-modal";
import { CourseCard } from "@/features/courses/components/course-card";
import { AdvisoryChatBubble } from "@/features/tutoring/components/advisory-chat-bubble";
import { TutoringRequestForm } from "@/features/tutoring/components/tutoring-request-form";
import { StudentDirectoryRow } from "@/features/students/components/student-directory-row";
import { EventCard } from "@/features/events/components/event-card";
import { TeacherProfileCard } from "@/features/teachers/components/teacher-profile-card";
import { SprintAccordionPanel } from "@/features/projects/components/sprint-accordion-panel";

const downloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
    />
  </svg>
);

export default function Page() {
  const [downloading, setDownloading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const handleConfirm = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setModalOpen(false);
      setToastMessage("Entrega de Taller Confirmada");
    }, 1200);
  };

  return (
    <>
      <AcademicAppNavbar
        portalName="Portal DEDW"
        logoText="D"
        period="2026-2"
        notifications={3}
        userName="Sofía Mejía"
        userMenu={[
          { label: "Mi perfil", href: "/profile" },
          { label: "Cerrar sesión", href: "/login" },
        ]}
      />

      <main className="mx-auto flex max-w-4xl flex-col gap-10 p-4 pb-24">
        <h1 className="text-2xl font-bold">Biblioteca de componentes · Icesi 2026</h1>

        {/* ---------- NIVEL 1: ÁTOMOS ---------- */}
        <h2 className="border-b border-base-300 pb-2 text-xl font-bold text-primary">
          Nivel 1 · Átomos
        </h2>

        <section className="flex flex-col gap-3" aria-label="01 Botón de acción">
          <h3 className="font-semibold">01 · Botón de acción</h3>
          <div className="flex flex-wrap gap-3">
            <ActionButton label="Descargar guía" icon={downloadIcon} badge="PDF" />
            <ActionButton
              label="Descargar guía"
              icon={downloadIcon}
              badge="PDF"
              variant="outline"
              isLoading={downloading}
              onClick={handleDownload}
            />
          </div>
        </section>

        <section className="flex flex-col gap-3" aria-label="02 Insignia de estado">
          <h3 className="font-semibold">02 · Insignia de estado</h3>
          <div className="flex flex-wrap gap-3">
            <StatusBadge status="active" label="Matriculado Activo" />
            <StatusBadge status="review" label="En Revisión Previa" />
            <StatusBadge status="pending" label="Requisito Pendiente" />
          </div>
        </section>

        <section className="flex flex-col gap-3" aria-label="03 Banner de alerta">
          <h3 className="font-semibold">03 · Banner de alerta</h3>
          <AlertBanner
            title="Período de Adición y Cancelación"
            actionLabel="Ver Calendario"
            actionHref="/calendar"
          >
            Recuerda que el sistema Banner cerrará inscripciones el viernes a las 18:00 hrs.
          </AlertBanner>
          <AlertBanner tone="error" title="Credenciales inválidas">
            Revisa tu correo y contraseña e inténtalo de nuevo.
          </AlertBanner>
        </section>

        <section className="flex flex-col gap-3" aria-label="04 Avatar de usuario">
          <h3 className="font-semibold">04 · Avatar con anillo y rol</h3>
          <UserAvatarCard
            name="Valeria Cifuentes"
            role="Monitora"
            detail="Ingeniería Telemática • 7mo Semestre"
            location="Disponible en Sala C-201"
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="05 Atajo de teclado">
          <h3 className="font-semibold">05 · Píldora de atajo de teclado</h3>
          <KbdShortcutPill label="Abrir Paleta de Comandos Next.js" keys={["⌘ Cmd", "K"]} />
        </section>

        <section className="flex flex-col gap-3" aria-label="06 Calificación">
          <h3 className="font-semibold">06 · Calificación por estrellas</h3>
          <StarRating value={4.5} reviews={142} />
        </section>

        <section className="flex flex-col gap-3" aria-label="07 Métrica bento">
          <h3 className="font-semibold">07 · Caja bento de métrica</h3>
          <MetricBentoStat
            label="Promedio ponderado acumulado"
            value="4.62"
            max="5.0"
            trend="+0.18"
            trendLabel="respecto al semestre anterior"
          />
        </section>

        {/* ---------- NIVEL 2: MOLÉCULAS ---------- */}
        <h2 className="border-b border-base-300 pb-2 text-xl font-bold text-primary">
          Nivel 2 · Moléculas
        </h2>

        <section className="flex flex-col gap-3" aria-label="08 Tarjeta de asignatura">
          <h3 className="font-semibold">08 · Tarjeta de asignatura</h3>
          <CourseCard
            code="DEDW-301"
            title="Desarrollo de Entornos Digitales Web"
            credits={3}
            professor="Prof. Santiago Restrepo"
            group="01"
            room="304B"
            progress={68}
            href="/courses/dedw-301"
            syllabusHref="/courses/dedw-301/syllabus"
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="09 Panel multi-métrica">
          <h3 className="font-semibold">09 · Panel de analítica multi-métrica</h3>
          <MultiMetricPanel
            metrics={[
              {
                label: "Créditos aprobados",
                value: "118",
                total: "160",
                caption: "74% de carrera",
                tone: "success",
                icon: "book",
              },
              {
                label: "Sprints completados",
                value: "11",
                total: "14",
                caption: "Semana 11 en curso",
                tone: "secondary",
                icon: "bolt",
              },
            ]}
          />
        </section>

        <section className="flex flex-col items-start gap-3" aria-label="10 Toast">
          <h3 className="font-semibold">10 · Notificación toast</h3>
          <ActionButton
            label="Mostrar toast"
            variant="outline"
            onClick={() => setToastMessage("Entrega de Taller Confirmada")}
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="11 Globo de conversación">
          <h3 className="font-semibold">11 · Globo de conversación</h3>
          <div className="w-full max-w-lg rounded-box border border-base-300 p-4">
            <AdvisoryChatBubble
              author="Sara Lozano"
              time="10:42 AM"
              message="Profesor, ¿la directiva 'use client' es necesaria si solo uso Tailwind y no tengo hooks?"
            />
            <AdvisoryChatBubble
              side="teacher"
              author="Prof. Santiago Restrepo (Docente)"
              time="10:45 AM"
              message="¡No! Tailwind se procesa en tiempo de compilación. Mantén el componente en el servidor (RSC) para evitar JavaScript extra en el cliente."
              status="Entregado ✓✓"
            />
          </div>
        </section>

        <section className="flex flex-col gap-3" aria-label="12 Fila de directorio">
          <h3 className="font-semibold">12 · Fila de directorio estudiantil</h3>
          <StudentDirectoryRow
            name="Mateo Barona Gómez"
            code="A00389120"
            program="Ing. de Sistemas"
            href="/students/a00389120/grades"
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="13 Rastreador de hitos">
          <h3 className="font-semibold">13 · Rastreador de hitos por pasos</h3>
          <StepProgressTracker
            steps={[
              { label: "Propuesta", status: "completed" },
              { label: "Sprint 1", status: "completed" },
              { label: "Sprint 2", status: "active" },
              { label: "Demo Final", status: "pending" },
            ]}
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="14 Selector de etiquetas">
          <h3 className="font-semibold">14 · Selector de etiquetas</h3>
          <TagSelector
            legend="Filtros de Asignatura:"
            options={["Server Components", "Tailwind CSS", "DaisyUI Themes", "Server Actions"]}
            defaultSelected={["Server Components", "Tailwind CSS"]}
          />
        </section>

        {/* ---------- NIVEL 3: ORGANISMOS ---------- */}
        <h2 className="border-b border-base-300 pb-2 text-xl font-bold text-primary">
          Nivel 3 · Organismos
        </h2>

        <section className="flex flex-col gap-3" aria-label="15 Tarjeta de evento">
          <h3 className="font-semibold">15 · Tarjeta de evento con cuenta regresiva</h3>
          <EventCard
            badge="Hackathon Icesi 2026"
            seatsLeft={14}
            title="Next.js & DaisyUI Dev Challenge"
            venue="Auditorio Varela"
            date="Viernes 24 de Octubre"
            schedule="14:00 - 18:00 hrs"
            timeLeft={{ days: 4, hours: 12, minutes: 45 }}
            registerHref="/events/hackathon/register"
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="16 Barra de navegación">
          <h3 className="font-semibold">16 · Barra de navegación (ver parte superior de la página)</h3>
        </section>

        <section className="flex flex-col gap-3" aria-label="17 Formulario de tutoría">
          <h3 className="font-semibold">17 · Formulario de solicitud de tutoría</h3>
          <TutoringRequestForm
            action={() => setToastMessage("Solicitud de tutoría enviada")}
          />
        </section>

        <section className="flex flex-col items-start gap-3" aria-label="18 Modal de confirmación">
          <h3 className="font-semibold">18 · Modal de confirmación de entrega</h3>
          <ActionButton label="Entregar taller" onClick={() => setModalOpen(true)} />
        </section>

        <section className="flex flex-col gap-3" aria-label="19 Perfil docente">
          <h3 className="font-semibold">19 · Perfil docente con pestañas</h3>
          <TeacherProfileCard
            name="Dr. Carlos Alberto Domínguez"
            role="Profesor Titular • DEDW"
            department="Dpto. de Tecnologías de Información"
            contactHref="/teachers/carlos-dominguez/contact"
            tabs={[
              {
                label: "Asignaturas",
                content: "Desarrollo de Entornos Digitales Web • Arquitectura de Software.",
              },
              {
                label: "Horario Asesoría",
                content: "Martes y Jueves de 15:00 a 17:00 hrs en Laboratorio Ismb (Edificio L).",
              },
              {
                label: "Publicaciones",
                content: "Patrones de diseño en interfaces web académicas (2025).",
              },
            ]}
          />
        </section>

        <section className="flex flex-col gap-3" aria-label="20 Acordeón de sprints">
          <h3 className="font-semibold">20 · Tablero de entregables en acordeón</h3>
          <SprintAccordionPanel
            sprints={[
              {
                label: "Sprint 1",
                title: "Arquitectura Base y Componentes Atómicos",
                status: "completed",
                items: [
                  { text: "Configuración de Next.js 15 y App Router." },
                  { text: "Integración de Tailwind CSS v4 y temas de DaisyUI." },
                  { text: "Creación de componentes reutilizables (Botones, Badges, Kbd)." },
                ],
              },
              {
                label: "Sprint 2",
                title: "Integración de Server Actions y Formularios",
                status: "in-progress",
                items: [
                  { text: "Formulario de tutoría con Server Actions.", done: true },
                  { text: "Validación de campos en el servidor.", done: false },
                ],
              },
            ]}
          />
        </section>
      </main>

      <SubmissionConfirmModal
        open={modalOpen}
        itemName="Taller 02: Componentes RSC"
        isLoading={sending}
        onConfirm={handleConfirm}
        onCancel={() => setModalOpen(false)}
      />

      {toastMessage && (
        <ToastNotification
          key={toastMessage}
          title={toastMessage}
          description="Commit #7fa12 registrado en repositorio GitHub."
          onDismiss={() => setToastMessage(null)}
        />
      )}
    </>
  );
}
