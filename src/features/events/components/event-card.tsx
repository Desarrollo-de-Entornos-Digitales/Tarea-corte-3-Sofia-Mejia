import { Fragment } from "react";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

interface Props {
  badge: string;
  seatsLeft: number;
  title: string;
  venue: string;
  date: string;
  schedule: string;
  timeLeft: TimeLeft;
  registerHref: string;
}

export function EventCard({
  badge,
  seatsLeft,
  title,
  venue,
  date,
  schedule,
  timeLeft,
  registerHref,
}: Props) {
  const units = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
  ];

  return (
    <article className="card w-full bg-base-100 shadow-sm card-border sm:max-w-md">
      <div className="card-body gap-4">
        <div className="flex items-center justify-between gap-2">
          <span className="badge badge-primary badge-sm font-bold uppercase">{badge}</span>
          <span className="text-xs font-semibold text-error">• {seatsLeft} cupos restantes</span>
        </div>

        <div>
          <h2 className="card-title">{title}</h2>
          <p className="text-sm opacity-70">
            {venue} • {date} • {schedule}
          </p>
        </div>

        <div
          role="timer"
          aria-label="Cuenta regresiva del evento"
          className="flex items-start justify-center gap-3 rounded-box border border-base-300 bg-base-200 p-3"
        >
          {units.map((unit, index) => (
            <Fragment key={unit.label}>
              {index > 0 && <span className="pt-1 font-mono text-2xl opacity-40">:</span>}
              <div className="flex flex-col items-center">
                <span className="font-mono text-3xl font-bold text-primary">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase opacity-60">{unit.label}</span>
              </div>
            </Fragment>
          ))}
        </div>

        <Link href={registerHref} className="btn btn-primary w-full">
          Inscribir mi Equipo
        </Link>
      </div>
    </article>
  );
}
