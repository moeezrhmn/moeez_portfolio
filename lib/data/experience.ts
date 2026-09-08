/**
 * Roles and education. Drives the About timeline, the "teams I have built for"
 * section, and the Person JSON-LD.
 *
 * Kept deliberately in step with the résumé: the three roles listed there, and
 * nothing earlier. A recruiter comparing the two should find them identical.
 */
export interface Role {
  period: string;
  /** ISO dates for structured data. */
  from: string;
  to: string;
  title: string;
  org: string;
  location: string;
  note?: string;
  summary?: string;
  bullets: readonly string[];
  link?: { href: string; label: string };
  education?: boolean;
}

export const experience: readonly Role[] = [
  {
    period: 'Jun 2025 - Aug 2026',
    from: '2025-06',
    to: '2026-08',
    title: 'Full Stack Engineer',
    org: 'Codiux',
    location: 'Lahore',
    summary:
      'Where the AI work started. Full stack product engineering across Python, React and Next.js, with end to end ownership through to AWS deployment.',
    bullets: [
      'Built and deployed a production AI sales call agent on Twilio, Retell AI and OpenAI',
      'Designed backend services and REST APIs in Python for AI and analytics workloads',
      'Built a GPU investor portal with real time analytics for financial operations',
      'Owned webhook driven automation pipelines from design through production',
    ],
  },
  {
    period: 'Mar 2024 - Jun 2025',
    from: '2024-03',
    to: '2025-06',
    title: 'Backend Engineer',
    org: 'Maxenius Solutions',
    location: 'Faisalabad',
    note: 'Also team lead',
    summary:
      'The engagement that shaped how I work. Large scale commerce integration, the operational automation around it, and my first time leading other engineers.',
    bullets: [
      'Shopify and eBay sync engine holding 300,000+ listings in agreement',
      'Led the junior team building it, mentoring on architecture and code review',
      'Led an 80% migration of the system from Laravel to Python',
      'Order to dispatch automation including UK Royal Mail label generation',
      'Throughput work through queue tuning, caching strategy and SQL optimisation',
    ],
    link: { href: '/work/catalogue-sync', label: 'Read the case study' },
  },
  {
    period: 'May 2023 - Feb 2024',
    from: '2023-05',
    to: '2024-02',
    title: 'Backend Engineer',
    org: 'XLogic Solution',
    location: 'Faisalabad',
    summary: "First role where I owned production services rather than features inside someone else's.",
    bullets: [
      'Custom automation workflows and REST APIs for e-commerce and internal systems',
      'Built and maintained several production Laravel and Python services',
    ],
  },
  {
    period: 'Aug 2021 - Jun 2025',
    from: '2021-08',
    to: '2025-06',
    title: 'BSc, Information Technology',
    org: 'University of Agriculture, Faisalabad',
    location: 'Faisalabad',
    education: true,
    summary:
      'Software engineering, web development, database systems, computer networks, data structures and algorithms, object oriented programming.',
    bullets: [
      'Studied alongside full time work for the whole degree, which is its own lesson in scheduling, prioritisation and knowing what to cut',
    ],
  },
] as const;

/** How I think about the work. About page. */
export const principles: readonly { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Boring is the goal', body: 'A system people talk about is usually a system misbehaving. Success is nobody mentioning it for six months.' },
  { n: '02', title: 'Failures must be visible', body: 'Anything that can fail will. The question is whether it lands in a queue somebody reviews, or disappears until a customer complains.' },
  { n: '03', title: 'One source of truth', body: 'Two systems that both believe they are authoritative will eventually disagree. Decide which one wins before writing any code.' },
  { n: '04', title: 'Idempotence over cleverness', body: 'If running something twice is safe, retries become free and most distributed systems pain quietly disappears.' },
  { n: '05', title: 'An agent is a system, not a prompt', body: 'The model is one component. Timeouts, retries, permissions and observability decide whether it is usable in production.' },
  { n: '06', title: 'Say when not to build', body: 'Some processes are too rare or too cheap to automate. Saying so costs one project and earns the next three.' },
] as const;
