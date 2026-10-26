import { ActionButton } from "@/shared/components/ui/action-button";

interface Props {
  topics?: string[];
  /** Función que recibe los datos del formulario al enviar */
  action?: (formData: FormData) => void;
}

const defaultTopics = [
  "Next.js 15: Server vs Client Boundaries",
  "Tailwind CSS v4 y tokens de diseño",
  "daisyUI: temas y componentes",
  "TypeScript: contratos de props",
];

export function TutoringRequestForm({ topics = defaultTopics, action }: Props) {
  return (
    <form
      action={action}
      className="card w-full bg-base-100 shadow-sm card-border sm:max-w-md"
    >
      <div className="card-body gap-3">
        <div>
          <h2 className="card-title">Agendar Asesoría Técnica</h2>
          <p className="text-sm opacity-70">
            Selecciona el módulo y describe brevemente el bloqueo.
          </p>
        </div>

        <fieldset className="fieldset">
          <label htmlFor="tutoring-topic" className="fieldset-legend">
            Tema del Bloqueo
          </label>
          <select
            id="tutoring-topic"
            name="topic"
            className="select w-full"
            defaultValue={topics[0]}
            required
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="fieldset">
          <label htmlFor="tutoring-description" className="fieldset-legend">
            Descripción breve
          </label>
          <textarea
            id="tutoring-description"
            name="description"
            className="textarea h-24 w-full"
            placeholder="Ej. No carga el estado en el componente hijo..."
            required
          />
        </fieldset>

        <ActionButton type="submit" label="Enviar Solicitud" fullWidth />
      </div>
    </form>
  );
}
