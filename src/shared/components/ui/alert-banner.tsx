import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "info" | "success" | "error";

interface Props {
  tone?: Tone;
  title: string;
  children: ReactNode;
  /** Botón de acción secundaria (opcional). Requiere ambas props. */
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

const toneClass: Record<Tone, string> = {
  info: "alert-info",
  success: "alert-success",
  error: "alert-error",
};

const iconPath: Record<Tone, string> = {
  info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  success: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  error: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
};

export function AlertBanner({
  tone = "info",
  title,
  children,
  actionLabel,
  actionHref,
  className = "",
}: Props) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`alert alert-soft ${toneClass[tone]} alert-vertical sm:alert-horizontal ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath[tone]} />
      </svg>
      <div className="text-left">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{children}</p>
      </div>
      {actionLabel && actionHref && (
        <Link href={actionHref} className="btn btn-sm btn-outline">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}