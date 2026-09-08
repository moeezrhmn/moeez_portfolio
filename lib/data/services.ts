/**
 * Engagements. The home teaser and /services both read this, so the terms can
 * never disagree between the two pages.
 *
 * Pricing is quoted privately after the scoping call rather than published.
 * If you ever want to show ranges again, add a term with `accent: true` and
 * both pages will pick it up.
 */
export interface Engagement {
  key: string;
  label: string;
  badge?: string;
  /** Two lines on the services page. */
  title: readonly [string, string];
  /** Short form for the home teaser. */
  teaser: string;
  blurb: string;
  terms: readonly { label: string; value: string; accent?: boolean }[];
  deliverables: readonly string[];
  goodFit: readonly string[];
  link?: { href: string; label: string };
}

export const engagements: readonly Engagement[] = [
  {
    key: 'A',
    label: 'A / AI build',
    badge: 'Most asked for',
    title: ['AI agent', 'build'],
    teaser:
      'A voice or LLM agent, or an MCP server exposing your systems to one. Taken from prototype to something that survives production.',
    blurb:
      'A voice or chat agent, or an MCP server that gives one safe access to your systems. Taken from idea or prototype to something that survives production.',
    terms: [
      { label: 'Duration', value: '4 to 8 weeks' },
      { label: 'Price', value: 'Quoted after scoping', accent: true },
      { label: 'Billing', value: '3 milestones' },
    ],
    deliverables: [
      'A working agent deployed on your infrastructure',
      'Telephony or chat surface wired up, Twilio and Retell AI where voice is involved',
      'MCP servers exposing your tools with scoped permissions',
      'Transcript and outcome capture written back to your CRM or database',
      'Fallbacks for provider outages, timeouts and refusals',
      'Prompt and behaviour documentation your team can edit',
      '30 days of post launch support',
    ],
    goodFit: [
      'A prototype works in a notebook and now needs real users',
      "A repetitive conversation eats a team's day, inbound or outbound",
      'You want agents acting on internal systems without hand written glue',
      'An existing AI feature is unreliable and nobody knows why',
    ],
    link: { href: '/work', label: 'See a build like this' },
  },
  {
    key: 'B',
    label: 'B / Integration build',
    title: ['Integration', '& automation'],
    teaser:
      'Two or more systems that need to talk. Fixed scope, fixed price, documentation at handover.',
    blurb:
      'Two or more systems that need to talk, or one expensive manual process that needs to stop being manual.',
    terms: [
      { label: 'Duration', value: '3 to 6 weeks' },
      { label: 'Price', value: 'Quoted after scoping', accent: true },
      { label: 'Billing', value: '2 to 3 milestones' },
    ],
    deliverables: [
      'A working integration deployed to your infrastructure',
      'Webhook or scheduled sync, whichever suits the data',
      'Retry, backoff and a dead letter path for failures',
      'An exception view so your team can triage without me',
      'Written architecture and runbook documentation',
      '30 days of post launch support',
    ],
    goodFit: [
      'Someone is copying data between two systems daily',
      'Stock, pricing or orders disagree across channels',
      'Reports are assembled by hand on a schedule',
      'An existing integration breaks often enough to hurt',
    ],
    link: { href: '/work/catalogue-sync', label: 'Read the full case study' },
  },
  {
    key: 'C',
    label: 'C / Retainer',
    title: ['Engineering', 'retainer'],
    teaser:
      'Standing capacity for teams without a backend or AI hire, and someone on call when things break.',
    blurb:
      'Standing capacity for teams that need backend or AI work continuously but not a full time hire.',
    terms: [
      { label: 'Term', value: 'Monthly, rolling' },
      { label: 'Price', value: 'Quoted after scoping', accent: true },
      { label: 'Notice', value: '30 days, either side' },
    ],
    deliverables: [
      'An agreed block of days each month, planned with you',
      'New endpoints, jobs, dashboards, agents and integrations',
      'Maintenance on anything I have already built for you',
      'A named person to call when something breaks',
      'A short written summary of what shipped each month',
    ],
    goodFit: [
      'Frontend is covered but backend work keeps queueing up',
      'You have agents or integrations running that need someone watching',
      'Hiring is months away and the roadmap cannot wait',
      'You are an agency needing backend and AI depth per project',
    ],
  },
] as const;

/** Included in every engagement. Not upsells, the baseline. */
export const included: readonly { title: string; body: string }[] = [
  { title: 'Your code, your repo', body: 'Everything ships to your repository and your infrastructure. No wrapper, no lock in, no dependency on me.' },
  { title: 'Documentation', body: 'Architecture notes and a runbook written for the next engineer, not as a formality.' },
  { title: 'Weekly demos', body: 'Staging you can click through every week. You always know what state the work is in.' },
  { title: '30 days support', body: 'If something I wrote misbehaves after launch, I fix it. No hourly clock, no argument.' },
] as const;

/** Four steps. Short form on the home page, long form on /services. */
export const process: readonly {
  n: string;
  title: string;
  when: string;
  short: string;
  long: readonly string[];
}[] = [
  {
    n: '01',
    title: 'Map the process',
    when: 'Day 1, free',
    short: 'A call where you walk me through the manual work. I write down each step and what it costs you per week.',
    long: [
      'A twenty minute call where you walk me through the work as it happens today. I am listening for how often it runs, who does it, how long it takes and what goes wrong when it is skipped.',
      'You leave that call with an honest read on whether this is worth building. Sometimes it is not. A process that runs twice a month rarely justifies the spend, and I will say so rather than sell you one.',
    ],
  },
  {
    n: '02',
    title: 'Scope in writing',
    when: 'Within 3 days',
    short: 'What gets built, what does not, the price and the date. You approve it before any code exists.',
    long: [
      'You get a short document: what gets built, what explicitly does not, the fixed price, the milestones and the delivery date. The exclusions list matters more than the inclusions, because it is where projects usually go wrong.',
      'Nothing starts until you have approved it. If you want to change scope later, that is fine. It becomes a written change with its own price, rather than a quiet argument at the end.',
    ],
  },
  {
    n: '03',
    title: 'Build in the open',
    when: 'The bulk of the work',
    short: 'Weekly demo on a staging environment you can click through. No month of silence ending in a surprise.',
    long: [
      'Work lands on a staging environment continuously, and once a week we look at it together. Fifteen minutes, screen shared, showing what moved.',
      'Anything risky goes behind a read only mode first, where the system logs what it would have done so we can check it against reality before it is allowed to write. That is how the catalogue sync was rolled out without downtime.',
    ],
  },
  {
    n: '04',
    title: 'Hand over properly',
    when: 'Final week, plus 30 days',
    short: 'Deployed, documented, alerting wired up, plus 30 days of support so it survives contact with reality.',
    long: [
      'Deployed to your infrastructure, documented, with alerting wired to wherever your team already looks. We walk through the runbook together so somebody on your side can operate it.',
      'Then thirty days where I am on hand for anything that surfaces. Most systems reveal their real edge cases in the first fortnight of live traffic, and that period is included rather than billed.',
    ],
  },
] as const;

/** Naming what you refuse reads as senior, but only if you actually refuse it. */
export const notDoing: readonly { title: string; body: string }[] = [
  { title: 'Model training', body: 'I integrate and deploy models, and I build the systems around them. Training or fine tuning your own is a different specialism.' },
  { title: 'Brand & visual design', body: 'I build interfaces to a design, and I build functional internal tools. Identity and marketing design is not my discipline.' },
  { title: 'Mobile apps', body: "I will build and document the API your app consumes. Native iOS and Android work is somebody else's job." },
  { title: 'WordPress & page builders', body: 'Theme and plugin work is not what I am good at or interested in, even though it happens to be PHP.' },
] as const;

/** Who the work is for. Home page. */
export const audiences: readonly { title: string; body: string }[] = [
  { title: 'Teams shipping AI features', body: 'A prototype that works in a notebook and now has to survive real users, real latency and real error handling.' },
  { title: 'Online retailers', body: 'Selling on more than one channel and reconciling stock by hand. Shopify, eBay, Amazon, WooCommerce.' },
  { title: 'Funded startups', body: 'Frontend covered, no backend hire yet, and an integration or pipeline blocking the roadmap.' },
  { title: 'Ops heavy SMBs', body: "A team of two to twenty where somebody's whole morning is copy and paste between systems." },
] as const;

/**
 * The headline strip on the home page. Leads with what I build rather than
 * one project's numbers: the metrics are all from a single 2024-25 commerce
 * engagement, and leading with them miscasts the AI positioning.
 */
export const offers: readonly { word: string; note: string }[] = [
  { word: 'AI Agents', note: 'Voice, chat and MCP servers' },
  { word: 'Integrations', note: 'Systems that stop disagreeing' },
  { word: 'Automation', note: 'The work nobody should be doing' },
  { word: 'Cloud', note: 'AWS, deployed and kept up' },
] as const;
