import Link from "next/link";

interface Props {
  code: string;
  title: string;
  credits: number;
  professor: string;
  group: string;
  room: string;
  /** Avance del semestre, de 0 a 100 */
  progress?: number;
  href: string;
  syllabusHref?: string;
}

export function CourseCard({
  code,
  title,
  credits,
  professor,
  group,
  room,
  progress = 0,
  href,
  syllabusHref,
}: Props) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <article className="card w-full overflow-hidden bg-base-100 shadow-sm card-border sm:max-w-sm">
      <header className="bg-linear-to-r from-primary to-secondary p-4 text-primary-content">
        <div className="flex items-center justify-between gap-2">
          <span className="badge badge-outline border-primary-content/60 font-mono text-primary-content">
            {code}
          </span>
          <span className="badge badge-accent badge-sm font-bold">{credits} Créditos</span>
        </div>
      </header>

      <div className="card-body gap-4 p-4">
        <div>
          <h2 className="text-lg font-bold leading-tight">{title}</h2>
          <p className="text-xs opacity-70">
            {professor} • Grupo {group} • Salón {room}
          </p>
        </div>

        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span>Avance de Semestre</span>
            <span className="font-semibold">{safeProgress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={safeProgress}
            max={100}
            aria-label="Avance del semestre"
          />
        </div>

        <div className="card-actions items-center justify-end">
          {syllabusHref && (
            <Link href={syllabusHref} className="btn btn-ghost btn-sm">
              Sílabo
            </Link>
          )}
          <Link href={href} className="btn btn-primary btn-sm">
            Entrar al Aula
          </Link>
        </div>
      </div>
    </article>
  );
}
