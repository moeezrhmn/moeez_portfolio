/** Section heading: display title left, mono note right, consistent spacing. */
export function SectionHead({
  title,
  note,
  action,
  className = '',
}: {
  title: React.ReactNode;
  note?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-6 ${className}`}>
      <h2 className="disp text-[2.2rem] sm:text-[3rem]">{title}</h2>
      {note ? <span className="meta pb-3 max-w-[28ch] leading-relaxed">{note}</span> : null}
      {action}
    </div>
  );
}

/** The four headline figures, with tabular numerals and a hairline under each. */
export function Figures({
  items,
}: {
  items: readonly { value: string; suffix?: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
      {items.map((m) => (
        <div key={m.label}>
          <div className="disp text-[3.4rem] sm:text-[4.2rem] tnum">
            {m.value}
            {m.suffix ? <span className="text-brass">{m.suffix}</span> : null}
          </div>
          <div className="meta mt-4 pt-4 hair">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * The same rhythm as Figures, but carrying words instead of numbers. The
 * brass full stop echoes the hero headline.
 */
export function Offers({
  items,
}: {
  items: readonly { word: string; note: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
      {items.map((o) => (
        <div key={o.word}>
          <div className="disp text-[1.9rem] sm:text-[2.2rem] lg:text-[2.6rem]">
            {o.word}
            <span className="text-brass">.</span>
          </div>
          <div className="meta mt-4 pt-4 hair">{o.note}</div>
        </div>
      ))}
    </div>
  );
}
