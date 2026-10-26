"use client"; 

import { useState } from "react";

interface Props {
  title: string;
  /** Descripción o identificador de commit/transacción */
  description?: string;
  onDismiss?: () => void;
}

export function ToastNotification({ title, description, onDismiss }: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="toast toast-bottom toast-center z-50 max-w-[calc(100vw-2rem)] sm:toast-end">
      <div
        role="status"
        aria-live="polite"
        className="flex w-80 max-w-full items-center gap-3 rounded-box border border-success bg-base-100 p-3 shadow-lg"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-success text-success-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold">{title}</p>
          {description && <p className="text-xs opacity-70">{description}</p>}
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="btn btn-ghost btn-circle btn-xs"
          aria-label="Descartar notificación"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
