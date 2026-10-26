type StepStatus = "completed" | "active" | "pending";

interface Step {
  label: string;
  status: StepStatus;
}

interface Props {
  steps: Step[];
}

export function StepProgressTracker({ steps }: Props) {
  return (
    <ol className="steps steps-vertical w-full sm:steps-horizontal" aria-label="Hitos de entrega">
      {steps.map((step) => (
        <li
          key={step.label}
          aria-current={step.status === "active" ? "step" : undefined}
          data-content={
            step.status === "completed" ? "✓" : step.status === "active" ? "●" : undefined
          }
          className={`step ${step.status !== "pending" ? "step-primary" : ""}`}
        >
          <span className="flex flex-col items-start gap-1 sm:items-center">
            <span className={step.status === "active" ? "font-bold" : ""}>{step.label}</span>
            {step.status === "active" && <span className="badge badge-accent badge-xs">Hoy</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
