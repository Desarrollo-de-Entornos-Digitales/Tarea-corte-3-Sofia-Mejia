
"use client";

import { useState } from "react";
import { ActionButton } from "@/shared/components/ui/action-button";
import { AlertBanner } from "@/shared/components/ui/alert-banner";
import { ToastNotification } from "@/shared/components/ui/toast-notification";
import { StepProgressTracker } from "@/shared/components/ui/step-progress-tracker";
import { AcademicAppNavbar } from "@/shared/components/ui/academic-app-navbar";
import { SubmissionConfirmModal } from "@/shared/components/ui/submission-confirm-modal";
import { CourseCard } from "@/features/courses/components/course-card";

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
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const handleConfirm = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setModalOpen(false);
      setShowToast(true);
    }, 1200);
  };

  return (
    <>
      <AcademicAppNavbar
        period="Período 2026-2"
        notifications={3}
        userName="Sofía Mejía"
        userMenu={[
          { label: "Mi perfil", href: "/profile" },
          { label: "Cerrar sesión", href: "/login" },
        ]}
      />

      <main className="mx-auto flex max-w-3xl flex-col gap-8 p-4">
        <h1 className="text-2xl font-bold">Biblioteca de componentes</h1>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">01 · Botón de acción</h2>
          <div className="flex flex-wrap gap-3">
            <ActionButton label="Descargar guía" icon={downloadIcon} badge="PDF" />
            <ActionButton
              label="Descargar guía"
              icon={downloadIcon}
              badge="PDF"
              isLoading={downloading}
              onClick={handleDownload}
              variant="outline"
            />
            <ActionButton label="Secundario" variant="secondary" />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">03 · Banner de alerta</h2>
          <AlertBanner
            title="Nueva convocatoria disponible"
            actionLabel="Ver detalles"
            actionHref="/courses"
          >
            Ya puedes inscribir tus asignaturas del próximo período.
          </AlertBanner>
          <AlertBanner tone="error" title="Credenciales inválidas">
            Revisa tu correo y contraseña e inténtalo de nuevo.
          </AlertBanner>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">08 · Tarjeta de asignatura</h2>
          <CourseCard
            code="DISI-101"
            title="Desarrollo de Entornos Digitales"
            credits={3}
            professor="Prof. Gómez"
            room="Aula 402"
            progress={65}
            href="/courses/disi-101"
            programHref="/courses/disi-101/program"
          />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">13 · Rastreador de hitos</h2>
          <StepProgressTracker
            steps={[
              { label: "Sprint 1", status: "completed" },
              { label: "Sprint 2", status: "completed" },
              { label: "Sprint 3", status: "active" },
              { label: "Sprint 4", status: "pending" },
            ]}
          />
        </section>

        <section className="flex flex-col items-start gap-3">
          <h2 className="text-lg font-semibold">10 y 18 · Modal y toast</h2>
          <ActionButton label="Enviar entrega" onClick={() => setModalOpen(true)} />
        </section>
      </main>

      <SubmissionConfirmModal
        open={modalOpen}
        fileName="entrega-final.zip"
        isLoading={sending}
        onConfirm={handleConfirm}
        onCancel={() => setModalOpen(false)}
      />

      {showToast && (
        <ToastNotification
          message="Entrega enviada correctamente"
          transactionId="a3f9c21"
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}
