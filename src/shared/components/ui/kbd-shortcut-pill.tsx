interface Props {
  label: string;
  /** Teclas del atajo, ej. ["⌘ Cmd", "K"] */
  keys: string[];
}

export function KbdShortcutPill({ label, keys }: Props) {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-box border border-base-300 bg-base-100 px-4 py-3 shadow-sm sm:max-w-md">
      <span className="text-sm opacity-80">{label}</span>
      <span className="flex items-center gap-1">
        {keys.map((key, index) => (
          <span key={key} className="flex items-center gap-1">
            {index > 0 && <span className="text-xs opacity-60">+</span>}
            <kbd className="kbd kbd-sm">{key}</kbd>
          </span>
        ))}
      </span>
    </div>
  );
}
