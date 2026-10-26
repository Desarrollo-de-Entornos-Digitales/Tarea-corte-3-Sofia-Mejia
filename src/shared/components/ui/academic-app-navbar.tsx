
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

interface Props {
  portalName?: string;
  period: string;
  notifications?: number;
  userName: string;
  userMenu?: MenuItem[];
}

export function AcademicAppNavbar({
  portalName = "Portal Académico",
  period,
  notifications = 0,
  userName,
  userMenu = [],
}: Props) {
  return (
    <header className="navbar border-b border-base-300 bg-base-100 px-4">
      <div className="flex flex-1 items-center gap-3">
        <Link href="/" aria-label="Ir al inicio" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-box bg-primary font-bold text-primary-content">
            i
          </span>
          <span className="leading-tight">
            <span className="block font-bold">{portalName}</span>
            <span className="hidden text-xs opacity-70 sm:block">{period}</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="btn btn-ghost btn-circle"
          aria-label={`Notificaciones: ${notifications} sin leer`}
        >
          <div className="indicator">
            {notifications > 0 && (
              <span className="indicator-item badge badge-secondary badge-xs">{notifications}</span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar avatar-placeholder"
            aria-label={`Menú de ${userName}`}
          >
            <div className="w-10 rounded-full bg-base-200 text-primary ring-2 ring-primary">
              <span className="font-bold">{userName.charAt(0).toUpperCase()}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li className="menu-title">{userName}</li>
            {userMenu.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
