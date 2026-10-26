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
    <ol className="steps w-full text-xs sm:text-sm" aria-label="Hitos de entrega">
      {steps.map((step, index) => (
        <li
          key={step.label}
          aria-current={step.status === "active" ? "step" : undefined}
          data-content={step.status === "completed" ? "✓" : index + 1}
          className={`step ${step.status !== "pending" ? "step-primary" : ""}`}
        >
          <span className={step.status === "active" ? "font-bold" : "opacity-70"}>
            {step.label}
            {step.status === "active" && " (Hoy)"}
          </span>
        </li>
      ))}
    </ol>
  );
}
