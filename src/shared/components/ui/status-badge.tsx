type Status = "active" | "review" | "pending";

interface Props {
  status?: Status;
  label: string;
}

const styles: Record<Status, { badge: string; dot: string }> = {
  active: { badge: "badge-success", dot: "bg-success" },
  review: { badge: "badge-secondary", dot: "bg-secondary" },
  pending: { badge: "badge-error", dot: "bg-error" },
};

export function StatusBadge({ status = "active", label }: Props) {
  const { badge, dot } = styles[status];

  return (
    <span className={`badge badge-soft ${badge} h-7 gap-2 px-3 font-medium`}>
      <span className="relative flex size-2" aria-hidden="true">
        <span className={`absolute inline-flex size-full animate-ping rounded-full opacity-75 ${dot}`} />
        <span className={`relative inline-flex size-2 rounded-full ${dot}`} />
      </span>
      {label}
    </span>
  );
}
