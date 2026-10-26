import Image from "next/image";

interface Props {
  name: string;
  role: string;
  /** Programa y semestre, ej. "Ingeniería Telemática • 7mo Semestre" */
  detail: string;
  /** Ubicación actual, ej. "Disponible en Sala C-201" */
  location: string;
  /** Ruta de imagen local (carpeta public). Si falta, se muestran las iniciales. */
  imageSrc?: string;
  isOnline?: boolean;
}

export function UserAvatarCard({
  name,
  role,
  detail,
  location,
  imageSrc,
  isOnline = true,
}: Props) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <article className="flex w-full items-center gap-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm sm:max-w-md">
      <div
        className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"} ${
          imageSrc ? "" : "avatar-placeholder"
        }`}
      >
        <div
          className={`w-14 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 ${
            imageSrc ? "" : "bg-primary text-primary-content"
          }`}
        >
          {imageSrc ? (
            <Image src={imageSrc} alt={name} width={56} height={56} />
          ) : (
            <span className="font-bold">{initials}</span>
          )}
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold">{name}</h3>
          <span className="badge badge-primary badge-xs font-bold uppercase">{role}</span>
        </div>
        <p className="text-xs opacity-70">{detail}</p>
        <p className="text-xs font-medium text-success">● {location}</p>
      </div>
    </article>
  );
}