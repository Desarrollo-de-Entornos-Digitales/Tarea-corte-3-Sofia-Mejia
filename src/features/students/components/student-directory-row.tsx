import Link from "next/link";

interface Props {
  name: string;
  code: string;
  program: string;
  status?: string;
  href: string;
  actionLabel?: string;
}

export function StudentDirectoryRow({
  name,
  code,
  program,
  status = "Activo",
  href,
  actionLabel = "Ver Notas",
}: Props) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <article className="flex w-full flex-wrap items-center gap-x-4 gap-y-3 rounded-box border border-base-300 bg-base-100 p-3 shadow-sm sm:max-w-2xl">
      <div className="avatar avatar-placeholder">
        <div className="mask mask-squircle size-12 bg-secondary text-secondary-content">
          <span className="font-bold">{initials}</span>
        </div>
      </div>

      <div className="min-w-0 flex-1 basis-40">
        <h3 className="font-bold leading-tight">{name}</h3>
        <p className="text-xs opacity-60">Código: {code}</p>
      </div>

      <p className="basis-28 text-sm">{program}</p>

      <span className="badge badge-success badge-soft badge-sm">{status}</span>

      <Link href={href} className="btn btn-ghost btn-sm text-primary">
        {actionLabel}
      </Link>
    </article>
  );
}
