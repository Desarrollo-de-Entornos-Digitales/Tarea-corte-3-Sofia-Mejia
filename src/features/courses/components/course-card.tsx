import Link from "next/link";

type Level = "Pregrado" | "Posgrado" | "Electiva";

interface Props {
  code: string;
  title: string;
  description: string;
  credits: number;
  level?: Level;
  professor: string;
  href: string;
}

const levelBadge: Record<Level, string> = {
  Pregrado: "badge-primary",
  Posgrado: "badge-secondary",
  Electiva: "badge-success",
};

export function CourseCard({ code, title, description, credits, level = "Pregrado", professor, href }: Props) {
  return (
    <article className="card card-border bg-base-100 w-full shadow-sm sm:max-w-sm">
      <div className="card-body">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium opacity-70">{code}</span>
          <span className={`badge ${levelBadge[level]}`}>{level}</span>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>
        <p className="text-sm">
          <span className="font-semibold">Docente:</span> {professor}
        </p>
        <div className="card-actions mt-2 items-center justify-between">
          <span className="badge badge-outline">{credits} créditos</span>
          <Link href={href} className="btn btn-primary btn-sm">
            Ver curso
          </Link>
        </div>
      </div>
    </article>
  );
}