import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { caseMetrics } from '@/lib/data/metrics';
import { MaskedHeading } from '@/components/ui/MaskedHeading';
import { Progress } from '@/components/ui/Progress';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { SyncDiagram } from '@/components/work/SyncDiagram';

export const metadata: Metadata = {
  title: 'Catalogue Sync · Case Study',
  description:
    'How 300,000+ listings were kept in sync between Shopify and eBay, cutting manual updates by 80% and returning 20 hours a week.',
};

const facts = [
  { label: 'Client', value: 'UK e-commerce retailer', sub: 'via Maxenius Solutions' },
  { label: 'Engagement', value: '2024 to 2025', sub: 'Backend engineer, team lead', tnum: true },
  { label: 'Stack', value: 'Laravel, then Python', sub: 'MySQL · AWS · Queue workers' },
  { label: 'Surfaces', value: 'Shopify · eBay', sub: 'REST and webhooks' },
];

const constraints = [
  { n: '01', title: 'Rate limits', body: 'Both APIs cap calls per second. A full catalogue pass at 300k items is days of API budget, not minutes.' },
  { n: '02', title: 'Different data models', body: 'Shopify variants and eBay listings do not map one to one. Categories, attributes and shipping profiles all needed translation.' },
  { n: '03', title: 'Partial failure', body: 'A sync that dies halfway must not leave the two systems in a worse state than it found them.' },
  { n: '04', title: 'No downtime', body: 'The shop kept trading throughout. Nothing could be rebuilt from scratch behind a maintenance page.' },
];

const decisions = [
  {
    n: '01',
    title: 'Deltas, not full passes',
    paras: [
      'A nightly full catalogue sweep would have burned the entire API budget and still left up to 24 hours of drift. Instead the engine subscribes to Shopify webhooks and only ever touches what actually changed.',
      'A reconciliation sweep still runs, but weekly and in small batches, purely as a safety net for webhooks that never arrived. **Typical sync latency went from a day to under a minute.**',
    ],
  },
  {
    n: '02',
    title: 'Every write is idempotent',
    paras: [
      'Webhooks arrive more than once. Retries replay work. If applying the same update twice produced a different result, the catalogue would slowly corrupt itself.',
      'Each job carries the target state rather than an instruction to change something, so **running it once and running it five times land in exactly the same place**. That is what makes aggressive retrying safe.',
    ],
  },
  {
    n: '03',
    title: "Failures queue, they don't vanish",
    paras: [
      'Some updates genuinely cannot be applied: a category eBay rejects, an attribute that fails validation. Silently dropping those is how sync systems lose trust.',
      "After three attempts with backoff, a job moves to a dead letter queue with its payload and the API's actual error message. **Someone reviews a short list each morning instead of auditing 300,000 products.** That list is the only manual work left in the system.",
    ],
  },
  {
    n: '04',
    title: 'Rolled out one category at a time',
    paras: [
      'The shop was trading the whole time, so nothing was cut over at once. The engine ran in read only mode first, logging what it would have changed, and we compared that against reality for a week.',
      'Then writes were enabled for a single low risk category, then a few more, then the rest. **By the time it owned the full catalogue, it had already been proven correct on a real subset of it**, and the team trusted it, which mattered as much as the code did.',
    ],
  },
  {
    n: '05',
    title: 'Migrated the core to Python, in slices',
    paras: [
      "The first version was Laravel, which shipped fast and proved the model. As the system grew, the data handling and concurrency work fit Python better than PHP did, and the team's centre of gravity was moving that way too.",
      'So we moved roughly **80% of the system to Python** a slice at a time, keeping both running against the same database while each piece was cut across. Nothing was rewritten wholesale and the shop never stopped trading. I led that migration and reviewed the work as the junior developers on the team took pieces of it.',
    ],
  },
];

const table = [
  ['Catalogue update path', 'Edited by hand in both systems', 'Edited once in Shopify, propagated automatically'],
  ['Time to propagate', 'Hours to days, if remembered', 'Under a minute'],
  ['Weekly reconciliation', 'About 20 hours of one person', 'A short exception list, minutes'],
  ['Overselling', 'Recurring, absorbed by a stock buffer', 'Buffer no longer needed'],
  ['Failure visibility', 'Noticed when a customer complained', 'Dead letter queue, reviewed daily'],
  ['Listings covered', 'Whatever fit in the week', '300,000+, continuously'],
];

/** Renders the **emphasis** convention inside case-study prose. */
function P({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p>
      {parts.map((p, i) =>
        p.startsWith('**') ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </p>
  );
}

export default function CaseStudy() {
  return (
    <>
      <Progress />

      <section className="shell pt-36 pb-14">
        <Link href="/work" className="grp meta inline-flex items-center gap-2 mb-10 hover:text-bone transition-colors">
          <span className="arw inline-block rotate-180">&rarr;</span> All case files
        </Link>

        <p className="meta mb-7">Case 02 &middot; Commerce, Automation</p>

        <MaskedHeading
          lines={['THREE HUNDRED', 'THOUSAND LISTINGS,', 'ONE SOURCE OF TRUTH.']}
          className="[--h:11vw] sm:[--h:8vw] lg:[--h:6.6vw]"
        />

        <p className="mt-12 max-w-[58ch] text-[1.1875rem] leading-[1.65] text-ash">
          A UK retailer was maintaining the same catalogue by hand in two storefronts. This is
          what replaced that, and what it cost them not to have it sooner.
        </p>
      </section>

      <section className="shell pb-20">
        <div className="gridline border border-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="p-6">
              <div className="meta mb-3">{f.label}</div>
              <p className={`text-[.9375rem] ${f.tnum ? 'tnum' : ''}`}>
                {f.value}
                <br />
                <span className="text-ash">{f.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-14 sm:py-20">
          <div className="meta mb-12">Outcomes</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {caseMetrics.map((m) => (
              <div key={m.label}>
                <div className="disp text-[3rem] sm:text-[3.8rem] tnum">
                  {m.value}
                  {m.suffix ? <span className="text-brass">{m.suffix}</span> : null}
                </div>
                <div className="meta mt-4 pt-4 hair">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2rem] sm:text-[2.6rem]">The brief</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 prose text-[1.0625rem]">
            <p>
              The client sold the same catalogue through a Shopify storefront and an eBay shop.
              Both were maintained by hand. When a price changed, someone edited it twice. When
              stock moved, someone remembered to update the other channel, or did not.
            </p>
            <p>
              The cost of forgetting was not theoretical.{' '}
              <strong>Overselling on eBay meant cancelling orders</strong>, which meant refunds,
              seller rating damage and support time. The team&rsquo;s answer had been to keep a
              buffer of unsold stock on eBay, which quietly capped how much they could sell.
            </p>
            <p>
              One person spent roughly a full working day each week on reconciliation. The brief
              I was given was narrow: <strong>make the two catalogues agree, and stop the
              overselling</strong>. I later led the small team that built and extended it.
            </p>
          </div>
        </div>
      </section>

      <section className="shell pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2rem] sm:text-[2.6rem]">
              What made it
              <br />
              hard
            </h2>
            <p className="mt-6 text-[.9375rem] leading-relaxed text-ash max-w-[32ch]">
              The naive version of this, a script that loops every product and pushes it, fails
              on all four of these.
            </p>
          </div>
          <div className="lg:col-span-8 gridline sm:grid-cols-2 border border-line">
            {constraints.map((c, i) => (
              <Reveal key={c.n} delay={(i % 2) * 70} className="p-7">
                <div className="meta tnum text-brass mb-4">{c.n}</div>
                <h3 className="font-medium">{c.title}</h3>
                <p className="mt-3 text-[.9375rem] leading-relaxed text-ash">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="disp text-[2rem] sm:text-[2.6rem]">The system, as built</h2>
            <span className="meta pb-2">Fig. 1 &middot; data flow</span>
          </div>
          <SyncDiagram />
          <p className="meta mt-6 max-w-[70ch] leading-relaxed">
            Shopify is the single source of truth. Everything downstream is derived, which means
            recovery is always &ldquo;replay from Shopify&rdquo; rather than &ldquo;reconcile two
            opinions&rdquo;.
          </p>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <h2 className="disp text-[2rem] sm:text-[2.6rem] mb-12">
          Five decisions that
          <br />
          made it work
        </h2>
        <Accordion
          items={decisions.map((d) => ({
            index: d.n,
            title: d.title,
            body: (
              <div className="pb-8 px-2 sm:pl-16 pr-8 prose text-[.9375rem] max-w-[70ch]">
                {d.paras.map((p, i) => (
                  <P key={i} text={p} />
                ))}
              </div>
            ),
          }))}
        />
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-16 sm:py-24">
          <h2 className="disp text-[2rem] sm:text-[2.6rem] mb-12">Before and after</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="meta border-b border-line">
                  <th className="py-4 pr-8 font-normal w-1/3">Measure</th>
                  <th className="py-4 pr-8 font-normal w-1/3">Before</th>
                  <th className="py-4 font-normal w-1/3 !text-brass">After</th>
                </tr>
              </thead>
              <tbody className="text-[.9375rem]">
                {table.map(([measure, before, after], i) => (
                  <tr key={measure} className={i < table.length - 1 ? 'border-b border-line' : ''}>
                    <td className="py-5 pr-8 font-medium">{measure}</td>
                    <td className="py-5 pr-8 text-ash">{before}</td>
                    <td className="py-5">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2rem] sm:text-[2.6rem]">
              What I&rsquo;d do
              <br />
              differently
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 prose text-[1.0625rem]">
            <p>
              <strong>Build the exception dashboard first.</strong> For the first few weeks the
              dead letter queue was inspected through database queries, which meant only I could
              triage it. A simple screen would have handed that to the ops team a month earlier.
            </p>
            <p>
              <strong>Instrument sooner.</strong> Metrics on queue depth and sync lag were added
              after the first incident rather than before it. They should have shipped with the
              first write enabled category. They are cheap up front and expensive to retrofit
              under pressure.
            </p>
            <p>
              <strong>Push harder on the attribute mapping.</strong> A chunk of early dead letter
              volume came from category attributes that were guessable but not agreed. A day with
              the client&rsquo;s product lead at the start would have removed weeks of noise.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Link href="/work" className="grp card p-8">
              <div className="meta mb-4">Index</div>
              <div className="disp text-2xl flex items-center gap-3">
                All case files <span className="arw">&rarr;</span>
              </div>
            </Link>
            <Link href="/services" className="grp card p-8">
              <div className="meta mb-4">Next</div>
              <div className="disp text-2xl flex items-center gap-3">
                How I&rsquo;d scope yours <span className="arw">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <h2 className="disp text-[2.1rem] sm:text-[4rem]">
            Got two systems
            <br />
            that <span className="text-brass">disagree?</span>
          </h2>
          <p className="mt-8 max-w-[50ch] text-[1.0625rem] leading-[1.7] text-ash">
            Twenty minutes is usually enough for me to tell you whether the fix is a week or a
            quarter, and whether it is worth doing at all.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link href="/contact" className="btn grp">
              Book 20 minutes <span className="arw">&rarr;</span>
            </Link>
            <a href={`mailto:${siteConfig.contact.email}`} className="btn-ghost grp">
              Email instead <span className="arw arw-d">&#8599;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
