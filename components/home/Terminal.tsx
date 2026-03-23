const TERMINAL_LINES = [
  '$ whoami',
  '',
  '>> Moeez Rehman',
  '> Software Engineer | Backend & Infrastructure',
  '> APIs · Automation · VPS & Cloud · Python · Laravel · React/Next',
  '',
  '> GitHub →  LinkedIn →  Contact →',
  '',
  '$ cat about.md',
  '',
  "> I'm a Backend Engineer specializing in Python (FastAPI, Flask)",
  '> and Laravel, focused on building reliable APIs, automation workflows,',
  '> and backend systems for SaaS and AI-powered products.',
  '',
  '$ ls skills/',
  '',
  '> /backend     Python • Laravel • FastAPI',
  '> /frontend    React • Next.js • TypeScript',
  '> /integrations  Shopify API • eBay API • Webhooks',
  '> /databases    PostgreSQL • MySQL • MongoDB',
  '> /devops       Docker • AWS • Linux',
  '',
  '$ status',
  '> ✓ Available for projects',
];

export default function Terminal() {
  return (
    <div>
      <div className="glass-card rounded-xl overflow-hidden border border-accent/20 shadow-2xl">
        {/* Terminal header */}
        <div className="bg-linear-to-r from-accent/10 to-transparent px-4 py-3 border-b border-accent/20 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-muted font-mono">terminal.sh</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 md:p-6 font-mono text-xs md:text-sm min-h-[300px] md:min-h-[400px] bg-[#1a1a1a]">
          {TERMINAL_LINES.map((line, idx) => (
            <div
              key={idx}
              className={`mb-1 ${
                line.startsWith('$')
                  ? 'text-accent'
                  : line.startsWith('>>')
                  ? 'text-accent font-bold text-base md:text-lg glow-text-sm'
                  : line.startsWith('>')
                  ? 'text-secondary'
                  : 'text-muted'
              }`}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
