
"use client"; // Necesario: estado interno de visibilidad (useState)

import { useState } from "react";

interface Props {
  message: string;
  /** Identificador de transacción o commit (ej. "a3f9c21") */
  transactionId?: string;
  onDismiss?: () => void;
}

export function ToastNotification({ message, transactionId, onDismiss }: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="toast toast-bottom toast-end z-50 max-w-[calc(100vw-2rem)]">
      <div
        role="status"
        aria-live="polite"
        className="flex w-80 max-w-full items-start gap-3 rounded-box border border-base-300 bg-base-100 p-4 shadow-lg"
      >
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-success text-success-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">{message}</p>
          {transactionId && (
            <p className="mt-1 truncate font-mono text-xs opacity-70">ID: {transactionId}</p>
          )}
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
