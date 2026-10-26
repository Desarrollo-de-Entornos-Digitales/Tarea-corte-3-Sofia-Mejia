type Tone = "success" | "secondary";
type IconName = "book" | "bolt";

interface Metric {
  label: string;
  value: string;
  total: string;
  caption: string;
  tone: Tone;
  icon: IconName;
}

interface Props {
  metrics: Metric[];
}

const toneClass: Record<Tone, { value: string; caption: string; icon: string }> = {
  success: { value: "", caption: "text-success", icon: "text-primary" },
  secondary: { value: "text-secondary", caption: "opacity-60", icon: "text-secondary" },
};

const iconPath: Record<IconName, string> = {
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
};

export function MultiMetricPanel({ metrics }: Props) {
  return (
    <section className="grid w-full grid-cols-1 divide-y divide-base-300 rounded-box border border-base-300 bg-base-100 shadow-sm sm:max-w-xl sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      {metrics.map((metric) => {
        const tone = toneClass[metric.tone];
        return (
          <article key={metric.label} className="flex items-start justify-between gap-3 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                {metric.label}
              </p>
              <p className="flex items-baseline gap-1">
                <span className={`text-3xl font-bold ${tone.value}`}>{metric.value}</span>
                <span className="text-sm opacity-60">/{metric.total}</span>
              </p>
              <p className={`text-xs ${tone.caption}`}>{metric.caption}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`size-5 shrink-0 ${tone.icon}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={iconPath[metric.icon]}
              />
            </svg>
          </article>
        );
      })}
    </section>
  );
}
