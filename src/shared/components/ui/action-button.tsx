import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Etiqueta descriptiva del botón */
  label: string;
  /** Icono vectorial opcional a la izquierda */
  icon?: ReactNode;
  /** Insignia tonal a la derecha (ej. "PDF") */
  badge?: string;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline btn-primary",
  ghost: "btn-ghost",
};

const badgeClass: Record<Variant, string> = {
  primary: "badge-accent",
  secondary: "badge-accent",
  outline: "badge-primary badge-soft",
  ghost: "badge-primary badge-soft",
};

const sizeClass: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export function ActionButton({
  label,
  icon,
  badge,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  disabled,
  type = "button",
  className = "",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`btn ${variantClass[variant]} ${sizeClass[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-sm" aria-hidden="true" />
      ) : (
        icon
      )}
      <span>{label}</span>
      {badge && <span className={`badge badge-sm ${badgeClass[variant]}`}>{badge}</span>}
    </button>
  );
}
