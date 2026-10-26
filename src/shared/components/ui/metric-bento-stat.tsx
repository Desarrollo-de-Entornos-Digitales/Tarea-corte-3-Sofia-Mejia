interface Props {
  label: string;
  value: string;
  /** Máximo de la escala, ej. "5.0" */
  max?: string;
  /** Tendencia, ej. "+0.18" */
  trend?: string;
  trendLabel?: string;
}

export function MetricBentoStat({ label, value, max, trend, trendLabel }: Props) {
  return (
    <article className="flex w-full items-center justify-between gap-4 rounded-box border border-base-300 bg-base-100 p-5 shadow-sm sm:max-w-sm">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</p>
        <p className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-primary">{value}</span>
          {max && <span className="text-sm opacity-60">/ {max}</span>}
        </p>
        {trend && (
          <p className="text-xs">
            <span className="font-semibold text-success">↗ {trend}</span>{" "}
            {trendLabel && <span className="opacity-60">{trendLabel}</span>}
          </p>
        )}
      </div>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </article>
  );
}
