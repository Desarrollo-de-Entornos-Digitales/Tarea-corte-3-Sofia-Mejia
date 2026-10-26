interface Props {
  legend: string;
  options: string[];
  defaultSelected?: string[];
  /** Nombre del campo para envío en formularios */
  name?: string;
}

export function TagSelector({ legend, options, defaultSelected = [], name = "tags" }: Props) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="group badge badge-outline h-7 cursor-pointer gap-1 border-base-300 px-3 text-xs font-semibold has-checked:border-primary has-checked:bg-primary has-checked:text-primary-content has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              defaultChecked={defaultSelected.includes(option)}
              className="sr-only"
            />
            <span aria-hidden="true" className="group-has-checked:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden group-has-checked:inline">
              ✓
            </span>
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
