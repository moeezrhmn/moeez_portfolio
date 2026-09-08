const TERMS = [
  'LLM Integration',
  'Voice AI Agents',
  'MCP Servers',
  'API Integration',
  'Workflow Automation',
  'AWS Deployment',
];

/** Two identical tracks; the second sits seamlessly behind the first. */
export function Marquee() {
  const track = (
    <div className="flex shrink-0">
      {TERMS.map((t) => (
        <span key={t} className="contents">
          <span className="px-7">{t}</span>
          <span className="px-7 text-brass">&#9670;</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-line py-5 overflow-hidden bg-deep" aria-hidden="true">
      <div className="marq meta !text-dim">
        {track}
        {track}
      </div>
    </section>
  );
}
