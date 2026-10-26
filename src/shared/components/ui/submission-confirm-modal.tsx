"use client"; 
import { useEffect, useRef } from "react";
import { ActionButton } from "./action-button";

interface Props {
  open: boolean;
  /** Nombre de la entrega, ej. "Taller 02: Componentes RSC" */
  itemName: string;
  title?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function SubmissionConfirmModal({
  open,
  itemName,
  title = "¿Confirmar entrega definitiva?",
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
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle"
      onClose={onCancel}
      aria-labelledby="confirm-modal-title"
    >
      <div className="modal-box">
        <div className="flex gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-error/15 text-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
          </span>
          <div>
            <h3 id="confirm-modal-title" className="text-lg font-bold">
              {title}
            </h3>
            <p className="py-2 text-sm opacity-80">
              Estás a punto de entregar el <span className="font-semibold">{itemName}</span>. Una
              vez confirmado no podrás modificar los archivos.
            </p>
          </div>
        </div>

        <div className="modal-action">
          <ActionButton label="Cancelar" variant="ghost" onClick={onCancel} disabled={isLoading} />
          <ActionButton
            label="Sí, Enviar Definitivamente"
            onClick={onConfirm}
            isLoading={isLoading}
          />
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button aria-label="Cerrar">cerrar</button>
      </form>
    </dialog>
  );
}
