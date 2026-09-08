/**
 * Delivered systems. Rendered in three places, so it lives in one:
 * the home index (featured only), /work (all), and the case study header.
 */

export type CaseCategory = 'ai' | 'commerce' | 'platform' | 'automation' | 'live';

export interface CaseRecord {
  n: string;
  title: string;
  /** Line under the title on the home index. */
  sub: string;
  categories: readonly CaseCategory[];
  badge?: 'AI' | 'Live';
  /** Fact table shown on /work. */
  facts: readonly { label: string; value: string }[];
  problem: string;
  approach: string;
  /** Supports the **emphasis** convention from lib/rich.ts. */
  result: string;
  stack: string;
  /** Internal deep case study, if one exists. */
  href?: string;
  /** Live product link. */
  external?: string;
  featured: boolean;
}

export const cases: readonly CaseRecord[] = [
  {
    n: '01',
    title: 'Voice AI Sales Agent',
    sub: 'Sales org · 2025 · Retell AI + OpenAI',
    categories: ['ai', 'automation'],
    badge: 'AI',
    facts: [
      { label: 'Client', value: 'Sales org, via Codiux' },
      { label: 'Year', value: '2025-26' },
      { label: 'Role', value: 'Full stack engineer' },
      { label: 'Status', value: 'Live in production' },
    ],
    problem:
      'Reps spent the first half of every day on outbound calls that mostly did not connect. Qualification was the bottleneck, not closing.',
    approach:
      'A production voice agent on Twilio, Retell AI and OpenAI. Real time conversation handling, intent based routing, transcript capture, and CRM write back on every call outcome. Owned from architecture through live deployment.',
    result:
      'First touch qualification runs without a person in the loop. Reps pick up warm conversations only.',
    stack: 'Python · FastAPI · Twilio · Retell AI · OpenAI · PostgreSQL',
    featured: true,
  },
  {
    n: '02',
    title: 'Catalogue Sync',
    sub: 'UK retailer · 2024-25 · Team lead',
    categories: ['commerce', 'automation'],
    facts: [
      { label: 'Client', value: 'UK retailer' },
      { label: 'Year', value: '2024-25' },
      { label: 'Role', value: 'Backend eng. & team lead' },
      { label: 'Scale', value: '300k+ listings' },
    ],
    problem:
      'Catalogue and stock maintained by hand across two storefronts. Drift caused oversells, and updates ate a full working day each week.',
    approach:
      'A sync engine over both REST APIs with webhook driven deltas, queued reconciliation batches, idempotent writes and a replayable failure log. I led the team building it, then led an 80% migration from Laravel to Python.',
    result:
      '**300,000+** listings held in sync. Manual updates down **80%**, roughly **20** hours a week returned to the team.',
    stack: 'Laravel · Python · MySQL · Shopify API · eBay API · Webhooks · AWS',
    href: '/work/catalogue-sync',
    featured: true,
  },
  {
    n: '03',
    title: 'SnowVue',
    sub: 'Healthcare platform · 2025-26 · AWS',
    categories: ['platform'],
    facts: [
      { label: 'Sector', value: 'Healthcare' },
      { label: 'Year', value: '2025-26' },
      { label: 'Role', value: 'Full stack & infra' },
      { label: 'Cloud', value: 'AWS, private VPC' },
    ],
    problem:
      'A healthcare platform needed infrastructure that could hold sensitive data without a later security review turning into a rewrite.',
    approach:
      'Built and deployed on AWS ECS with RDS PostgreSQL and ElastiCache Redis, inside a private VPC reached through a bastion host, with every credential held in Secrets Manager rather than the repository.',
    result:
      'A live platform on infrastructure designed for the compliance conversation up front instead of retrofitted for it afterwards.',
    stack: 'Python · React / Next.js · PostgreSQL · AWS ECS · RDS · ElastiCache · Secrets Manager',
    featured: true,
  },
  {
    n: '04',
    title: 'Order Dispatch',
    sub: 'UK retailer · 2024-25 · Royal Mail',
    categories: ['commerce', 'automation'],
    facts: [
      { label: 'Client', value: 'UK retailer' },
      { label: 'Year', value: '2024-25' },
      { label: 'Role', value: 'Backend engineer' },
      { label: 'Throughput', value: '40+ / day' },
    ],
    problem:
      'Every order re-keyed into the courier portal by hand. Address typos became returned parcels, refunds and support time.',
    approach:
      'An event driven pipeline running order webhook, address validation, Royal Mail label generation and tracking write back, with retries and a dead letter queue.',
    result:
      '**40+** orders a day dispatched with no human in the loop. Ops now touch only the exception queue.',
    stack: 'Laravel · Queue workers · Royal Mail API · MySQL',
    featured: true,
  },
  {
    n: '05',
    title: 'MCP Servers',
    sub: 'Agent tooling · 2026 · Model Context Protocol',
    categories: ['ai', 'platform'],
    badge: 'AI',
    facts: [
      { label: 'Type', value: 'Agent tooling' },
      { label: 'Year', value: '2026' },
      { label: 'Role', value: 'Build, integrate, deploy' },
      { label: 'Protocol', value: 'Model Context Protocol' },
    ],
    problem:
      'LLM agents are only as useful as the systems they can reach. Wiring each one in by hand produces bespoke glue that nobody wants to maintain.',
    approach:
      'Built MCP servers exposing internal tools and data sources to agents through one standard interface, with scoped permissions on every action, then integrated and deployed them into working agent workflows.',
    result:
      'Agents given real capability against real systems, without a separate integration written for every model or client.',
    stack: 'Python · MCP · OpenAI · REST integrations · Docker',
    featured: false,
  },
  {
    n: '06',
    title: 'GPU Investor Portal',
    sub: 'Infrastructure fund · 2025 · Next.js',
    categories: ['platform'],
    facts: [
      { label: 'Client', value: 'Infrastructure fund' },
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Full stack engineer' },
      { label: 'Domain', value: 'GPU compute' },
    ],
    problem:
      'Investor positions and hardware utilisation tracked in spreadsheets. Reporting was monthly, manual and already stale on arrival.',
    approach:
      'A Python service aggregating utilisation and financial events into Postgres, behind a Next.js portal with per investor scoping and live dashboards.',
    result:
      'The monthly spreadsheet cycle replaced by self serve reporting investors read themselves.',
    stack: 'Python · Next.js · React · PostgreSQL',
    featured: true,
  },
  {
    n: '07',
    title: 'MultSaver',
    sub: 'Live product · Self operated · Python',
    categories: ['live', 'platform'],
    badge: 'Live',
    facts: [
      { label: 'Client', value: 'Self operated' },
      { label: 'Status', value: 'In production' },
      { label: 'Role', value: 'Everything' },
      { label: 'Cost', value: 'Free, no signup' },
    ],
    problem:
      'Media downloaders rot fast. Platforms change markup and endpoints without notice, and most tools break within weeks.',
    approach:
      'A FastAPI service with isolated per platform extractors, Redis cached resolution and an FFmpeg transcode queue. One platform breaking never takes the service down.',
    result:
      'Free, no signup, running in production and serving thousands of users. The one project here you can click and test yourself.',
    stack: 'Python · FastAPI · Redis · FFmpeg',
    external: 'https://multsaver.com',
    featured: false,
  },
  {
    n: '08',
    title: 'Social Posting Engine',
    sub: 'Media brand · 2023 · Laravel',
    categories: ['automation'],
    facts: [
      { label: 'Client', value: 'Media brand' },
      { label: 'Year', value: '2023' },
      { label: 'Role', value: 'Backend engineer' },
      { label: 'Output', value: 'Scheduled daily' },
    ],
    problem:
      'Branded daily posts were designed by hand, one at a time, with live data pasted in from a weather site.',
    approach:
      'A Laravel service composing branded imagery with ImageMagick from live AccuWeather data, merging YouTube footage and scheduling the output automatically.',
    result: 'A daily design task removed entirely, with output volume and consistency both up.',
    stack: 'Laravel · PHP · ImageMagick · AccuWeather API · YouTube API',
    featured: false,
  },
  {
    n: '09',
    title: 'Discogs Monitor',
    sub: 'Collector community · 2023 · Playwright',
    categories: ['automation'],
    facts: [
      { label: 'Client', value: 'Collector community' },
      { label: 'Year', value: '2023' },
      { label: 'Role', value: 'Backend engineer' },
      { label: 'Mode', value: 'Continuous polling' },
    ],
    problem:
      'Rare records sell within minutes of listing. Collectors were refreshing wishlist pages by hand and still missing them.',
    approach:
      'A Playwright scraper against Discogs with MongoDB state, diffing each pass and notifying only on genuinely new matches.',
    result: 'Users alerted within minutes of a matching listing appearing, with no manual checking.',
    stack: 'Python · Playwright · MongoDB',
    featured: false,
  },
] as const;

export const featuredCases = cases.filter((c) => c.featured);

/** Filter chips on /work, with counts derived rather than hand-maintained. */
export const caseFilters = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI' },
  { key: 'platform', label: 'Platform' },
  { key: 'automation', label: 'Automation' },
  { key: 'commerce', label: 'Commerce' },
  { key: 'live', label: 'Live' },
] as const;

export const caseCount = (key: string) =>
  key === 'all' ? cases.length : cases.filter((c) => (c.categories as readonly string[]).includes(key)).length;
