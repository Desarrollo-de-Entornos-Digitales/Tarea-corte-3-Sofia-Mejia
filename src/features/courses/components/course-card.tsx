import Link from "next/link";

interface Props {
  code: string;
  title: string;
  credits: number;
  professor: string;
  room: string;
  /** Avance del semestre, de 0 a 100 */
  progress?: number;
  href: string;
  programHref?: string;
}

export function CourseCard({
  code,
  title,
  credits,
  professor,
  room,
  progress = 0,
  href,
  programHref,
}: Props) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <article className="card w-full overflow-hidden bg-base-100 shadow-sm card-border sm:max-w-sm">
      <header className="bg-linear-to-r from-primary to-secondary p-4 text-primary-content">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium opacity-90">{code}</span>
          <span className="badge badge-accent">{credits} créditos</span>
        </div>
        <h2 className="mt-2 text-lg font-bold">{title}</h2>
      </header>

      <div className="card-body gap-4 p-4">
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="opacity-70">Docente</dt>
            <dd className="font-semibold">{professor}</dd>
          </div>
          <div>
            <dt className="opacity-70">Salón</dt>
            <dd className="font-semibold">{room}</dd>
          </div>
        </dl>

        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span>Progreso del semestre</span>
            <span className="font-semibold">{safeProgress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={safeProgress}
            max={100}
            aria-label="Progreso del semestre"
          />
        </div>

        <div className="card-actions justify-end">
          {programHref && (
            <Link href={programHref} className="btn btn-ghost btn-sm">
              Ver programa
            </Link>
          )}
          <Link href={href} className="btn btn-primary btn-sm">
            Ir al curso
          </Link>
        </div>
      </div>
    </article>
  );
}