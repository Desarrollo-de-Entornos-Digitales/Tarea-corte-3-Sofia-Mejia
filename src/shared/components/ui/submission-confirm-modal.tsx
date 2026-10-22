"use client"; 

import { useEffect, useRef } from "react";
import { ActionButton } from "./action-button";

interface Props {
  open: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function SubmissionConfirmModal({
  open,
  title = "¿Confirmar envío?",
  message,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  isLoading = false,
  onConfirm,
  onCancel,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={ref} className="modal modal-bottom sm:modal-middle" onClose={onCancel}>
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <ActionButton variant="ghost" onClick={onCancel} disabled={isLoading}>
            {cancelLabel}
          </ActionButton>
          <ActionButton onClick={onConfirm} isLoading={isLoading}>
            {confirmLabel}
          </ActionButton>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button aria-label="Cerrar">cerrar</button>
      </form>
    </dialog>
  );
}