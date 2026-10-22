"use client";

import { useState } from "react";
import { ActionButton } from "@/shared/components/ui/action-button";
import { SubmissionConfirmModal } from "@/shared/components/ui/submission-confirm-modal";
import { CourseCard } from "@/features/courses/components/course-card";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const confirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1200);
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-start gap-6 p-4">
      <h1 className="text-2xl font-bold">Biblioteca de componentes</h1>

      <section className="flex flex-wrap gap-3" aria-label="Botones">
        <ActionButton>Primario</ActionButton>
        <ActionButton variant="secondary">Secundario</ActionButton>
        <ActionButton variant="outline">Outline</ActionButton>
        <ActionButton isLoading>Cargando</ActionButton>
      </section>

      <CourseCard
        code="DISI-101"
        title="Diseño de Interfaces"
        description="Fundamentos de diseño atómico y sistemas de diseño."
        credits={3}
        professor="Prof. Gómez"
        href="/courses/disi-101"
      />

      <ActionButton onClick={() => setOpen(true)}>Abrir modal</ActionButton>

      <SubmissionConfirmModal
        open={open}
        message="Se enviará tu información."
        isLoading={loading}
        onConfirm={confirm}
        onCancel={() => setOpen(false)}
      />
    </main>
  );
}