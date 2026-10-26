import { Fragment, type ReactNode } from "react";
import Link from "next/link";

interface Tab {
  label: string;
  content: ReactNode;
}

interface Props {
  name: string;
  role: string;
  department: string;
  tabs: Tab[];
  contactHref: string;
}

export function TeacherProfileCard({ name, role, department, tabs, contactHref }: Props) {
  const groupName = `teacher-tabs-${name.replace(/\W+/g, "-").toLowerCase()}`;
  const initials = name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <article className="card w-full bg-base-100 shadow-sm card-border sm:max-w-md">
      <div className="card-body gap-4">
        <div className="flex items-center gap-4">
          <div className="avatar avatar-placeholder">
            <div className="w-16 rounded-full bg-primary text-primary-content ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <span className="text-lg font-bold">{initials}</span>
            </div>
          </div>
          <div>
            <h2 className="font-bold leading-tight">{name}</h2>
            <p className="text-sm font-semibold text-primary">{role}</p>
            <p className="text-xs opacity-70">{department}</p>
          </div>
        </div>

        <div role="tablist" className="tabs tabs-box">
          {tabs.map((tab, index) => (
            <Fragment key={tab.label}>
              <input
                type="radio"
                name={groupName}
                className="tab"
                aria-label={tab.label}
                defaultChecked={index === 0}
              />
              <div
                role="tabpanel"
                className="tab-content rounded-box border border-base-300 bg-base-100 p-4 text-sm"
              >
                {tab.content}
              </div>
            </Fragment>
          ))}
        </div>

        <Link href={contactHref} className="btn btn-outline btn-primary btn-sm self-end">
          Contactar Docente
        </Link>
      </div>
    </article>
  );
}
