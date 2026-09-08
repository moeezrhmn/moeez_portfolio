/** The toolkit. Home page grid and the About page both read this. */
export interface StackGroup {
  n: string;
  title: string;
  /** Home page prose form. */
  body: string;
  /** About page form, broken into lines. */
  lines: readonly string[];
}

export const stack: readonly StackGroup[] = [
  {
    n: '01',
    title: 'AI engineering',
    body: 'OpenAI, Retell AI, LLM integration, conversational voice agents, prompt engineering, and MCP servers built and deployed for agent tooling.',
    lines: [
      'OpenAI, Retell AI, LLM integration',
      'Conversational agents, prompt engineering',
      'MCP servers, built and deployed',
    ],
  },
  {
    n: '02',
    title: 'AI assisted development',
    body: 'Claude Code, Codex and Cursor are in my daily setup. They make the mechanical work faster. Judgement, architecture and review stay mine.',
    lines: ['Claude Code, Codex, Cursor', 'Daily, for the mechanical work', 'Review and architecture stay mine'],
  },
  {
    n: '03',
    title: 'Languages & frameworks',
    body: 'Python with FastAPI, Django and Flask. PHP with Laravel. TypeScript, React, Next.js and Tailwind on the front.',
    lines: [
      'Python, JavaScript, TypeScript, PHP, SQL',
      'FastAPI, Django, Flask, Laravel',
      'React, Next.js, Tailwind CSS',
    ],
  },
  {
    n: '04',
    title: 'Backend & APIs',
    body: 'REST API design, webhooks, microservices, queue workers. Twilio, Shopify, eBay and Royal Mail integrations in production.',
    lines: [
      'REST API design, webhooks, microservices',
      'Queue workers, retry and dead letter handling',
      'Twilio, Shopify, eBay, Royal Mail',
    ],
  },
  {
    n: '05',
    title: 'Databases',
    body: 'PostgreSQL, MySQL, MongoDB, Redis and Supabase, including the query tuning that keeps them fast under load.',
    lines: ['PostgreSQL, MySQL, MariaDB', 'MongoDB, Redis, Supabase'],
  },
  {
    n: '06',
    title: 'Cloud & DevOps',
    body: 'AWS across EC2, ECS, RDS, ElastiCache, VPC and Secrets Manager. Docker, Nginx, Linux VPS and Git.',
    lines: ['AWS: EC2, ECS, RDS, ElastiCache,', 'Secrets Manager, VPC', 'Docker, Nginx, Linux VPS, Git'],
  },
] as const;

/** What I actually do. Six capabilities, home page only. */
export const capabilities: readonly { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'AI agents in production',
    body: 'Voice and chat agents that do real work: conversation handling, intent routing, transcript capture, CRM write back. Built to survive live traffic, not a demo.',
  },
  {
    n: '02',
    title: 'MCP servers & agent tooling',
    body: 'Exposing your internal systems to LLM agents safely through Model Context Protocol servers. Built, integrated and deployed, with the permission boundaries thought through first.',
  },
  {
    n: '03',
    title: 'API design & integration',
    body: 'Two systems that were never meant to speak: storefront, ERP, courier, payments, CRM. Versioned, documented, idempotent.',
  },
  {
    n: '04',
    title: 'Automation workflows',
    body: 'The task someone does every morning at nine, replaced by a schedule, a queue and an alert for when it genuinely needs a human.',
  },
  {
    n: '05',
    title: 'Full stack product builds',
    body: 'Architecture through to interface: Python services, Next.js front ends, Postgres underneath, shipped as one coherent product rather than handed between people.',
  },
  {
    n: '06',
    title: 'Cloud deployment & hardening',
    body: 'AWS deployment done properly: ECS, RDS, ElastiCache, private networking, secrets kept out of the repository. Then made boring enough to forget about.',
  },
] as const;
