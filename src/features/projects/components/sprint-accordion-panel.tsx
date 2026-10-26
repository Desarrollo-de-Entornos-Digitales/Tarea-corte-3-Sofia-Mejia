type SprintStatus = "completed" | "in-progress";

interface ChecklistItem {
  text: string;
  done?: boolean;
}

interface Sprint {
  label: string;
  title: string;
  status: SprintStatus;
  items: ChecklistItem[];
}

interface Props {
  sprints: Sprint[];
  /** Nombre del grupo: solo un sprint abierto a la vez */
  groupName?: string;
}

const statusStyle: Record<SprintStatus, { text: string; badge: string }> = {
  completed: { text: "Completado", badge: "badge-success" },
  "in-progress": { text: "En Progreso", badge: "badge-warning" },
};

export function SprintAccordionPanel({ sprints, groupName = "sprint-accordion" }: Props) {
  return (
    <div className="join join-vertical w-full sm:max-w-2xl">
      {sprints.map((sprint, index) => {
        const status = statusStyle[sprint.status];
        return (
          <div
            key={sprint.label}
            className="collapse collapse-arrow join-item border border-base-300 bg-base-100"
          >
            <input
              type="radio"
              name={groupName}
              defaultChecked={index === 0}
              aria-label={`${sprint.label}: ${sprint.title}`}
            />
            <div className="collapse-title flex flex-wrap items-center gap-2 pr-10 font-semibold">
              <span className="badge badge-outline badge-sm font-bold">{sprint.label}</span>
              <span className="text-sm">{sprint.title}</span>
              <span className={`badge badge-sm ${status.badge}`}>{status.text}</span>
            </div>
            <div className="collapse-content">
              <ul className="space-y-1 text-sm">
                {sprint.items.map((item) => (
                  <li key={item.text} className="flex gap-2">
                    <span
                      className={item.done === false ? "opacity-40" : "text-success"}
                      aria-hidden="true"
                    >
                      {item.done === false ? "○" : "✓"}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
