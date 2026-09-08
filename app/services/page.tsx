import Link from 'next/link';
import { engagements, included, process, notDoing } from '@/lib/data/services';
import { serviceFaqs } from '@/lib/data/faqs';
import { stripRich } from '@/lib/rich';
import { MaskedHeading } from '@/components/ui/MaskedHeading';
import { Progress } from '@/components/ui/Progress';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { RichText } from '@/components/ui/RichText';
import { SectionHead } from '@/components/ui/Section';

/** Deliverable list: a brass rule instead of a bullet glyph. */
function Deliverables({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 text-[.9375rem] leading-relaxed text-ash">
      {items.map((d) => (
        <li key={d} className="relative pl-[1.6rem]">
          <span className="absolute left-0 top-[.72em] w-[.7rem] h-px bg-brass" />
          {d}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripRich(f.a) },
    })),
  };

  return (
    <>
      <Progress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="shell pt-40 pb-16">
        <p className="meta mb-8">Services and engagement terms</p>
        <MaskedHeading
          lines={['THREE WAYS', 'TO HIRE ME.']}
          className="[--h:13vw] sm:[--h:9vw] lg:[--h:7.5vw]"
        />
        <p className="mt-12 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-ash">
          Every project is quoted after a short scoping call, because the honest number
          depends on your systems rather than on a price list. What you get is one fixed
          figure against a written scope, and it does not move unless the scope does.
        </p>
      </section>

      {/* TODO: every figure below is a placeholder. Replace with real rates. */}
      <section className="shell pb-24">
        {engagements.map((e, i) => (
          <Reveal
            key={e.key}
            className={`border-t border-line py-14 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 ${
              i === engagements.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="meta tnum text-brass">Option {e.key}</span>
                {e.badge ? (
                  <span className="meta !text-onbrass bg-brass px-2 py-0.5">{e.badge}</span>
                ) : null}
              </div>
              <h2 className="disp text-[2.2rem] sm:text-[2.8rem]">
                {e.title[0]}
                <br />
                {e.title[1]}
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ash max-w-[36ch]">{e.blurb}</p>

              <dl className="mt-8 gridline border border-line">
                {e.terms.map((t) => (
                  <div key={t.label} className="p-4 flex justify-between gap-4">
                    <dt className="meta">{t.label}</dt>
                    <dd className={`text-sm ${t.accent ? 'text-brass' : 'tnum'}`}>{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
              <div>
                <div className="meta mb-5">What you get</div>
                <Deliverables items={e.deliverables} />
              </div>
              <div>
                <div className="meta mb-5">Good fit when</div>
                <Deliverables items={e.goodFit} />
                {e.link ? (
                  <Link
                    href={e.link.href}
                    className="grp meta !text-brass inline-flex items-center gap-2 mt-7"
                  >
                    {e.link.label} <span className="arw">&rarr;</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-b border-line bg-deep">
        <div className="shell py-24">
          <SectionHead
            title={
              <>
                Included in
                <br />
                every engagement
              </>
            }
            note="Not upsells, the baseline"
            className="mb-14"
          />
          <div className="gridline gridline-deep sm:grid-cols-2 lg:grid-cols-4">
            {included.map((x, i) => (
              <Reveal key={x.title} delay={(i % 4) * 70} className="p-8">
                <h3 className="font-medium">{x.title}</h3>
                <p className="mt-3 text-[.9375rem] leading-relaxed text-ash">{x.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <h2 className="disp text-[2.2rem] sm:text-[3rem] mb-14">The process, in detail</h2>
        <div className="border-b border-line">
          {process.map((s) => (
            <Reveal
              key={s.n}
              className="border-t border-line py-9 grid grid-cols-1 sm:grid-cols-12 gap-x-10 gap-y-4"
            >
              <div className="sm:col-span-3">
                <div className="meta tnum text-brass mb-2">Step {s.n}</div>
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="meta mt-3">{s.when}</p>
              </div>
              <div className="sm:col-span-9 prose text-[.9375rem] max-w-[70ch]">
                {s.long.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
            <div className="lg:col-span-4">
              <h2 className="disp text-[2.2rem] sm:text-[3rem]">
                What I
                <br />
                don&rsquo;t do
              </h2>
              <p className="mt-6 text-[.9375rem] leading-relaxed text-ash max-w-[32ch]">
                Being clear about this saves us both a call. If you need one of these, I would
                rather point you elsewhere than do it badly.
              </p>
            </div>
            <div className="lg:col-span-8 gridline gridline-deep sm:grid-cols-2 border border-line">
              {notDoing.map((x) => (
                <div key={x.title} className="p-7">
                  <h3 className="font-medium">{x.title}</h3>
                  <p className="mt-3 text-[.9375rem] leading-relaxed text-ash">{x.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2.2rem] sm:text-[3rem]">
              Money &amp;
              <br />
              terms
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion
              items={serviceFaqs.map((f) => ({
                title: f.q,
                body: (
                  <p className="pb-7 px-2 pr-12 text-[.9375rem] leading-relaxed text-ash">
                    <RichText text={f.a} />
                  </p>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-deep">
        <div className="shell py-24 sm:py-32">
          <h2 className="disp text-[2.1rem] sm:text-[4rem]">
            Start with the
            <br />
            <span className="text-brass">cheapest step.</span>
          </h2>
          <p className="mt-8 max-w-[50ch] text-[1.0625rem] leading-[1.7] text-ash">
            Twenty minutes, no pitch, no obligation. If building it will not pay for itself,
            you will hear that on the call.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link href="/contact" className="btn grp">
              Book 20 minutes <span className="arw">&rarr;</span>
            </Link>
            <Link href="/work" className="btn-ghost grp">
              See the work first <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
