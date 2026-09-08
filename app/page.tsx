import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { metrics } from '@/lib/data/metrics';
import { stack, capabilities } from '@/lib/data/stack';
import { featuredCases } from '@/lib/data/cases';
import { engagements, process, audiences, offers } from '@/lib/data/services';
import { homeFaqs } from '@/lib/data/faqs';
import { experience } from '@/lib/data/experience';
import { testimonials } from '@/lib/data/testimonials';
import { stripRich } from '@/lib/rich';
import { MaskedHeading } from '@/components/ui/MaskedHeading';
import { fitHeading } from '@/lib/typography';
import { Marquee } from '@/components/ui/Marquee';
import { Progress } from '@/components/ui/Progress';
import { Portrait } from '@/components/ui/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { RichText } from '@/components/ui/RichText';
import { SectionHead, Figures, Offers } from '@/components/ui/Section';

const employers = experience.filter((r) => !r.education);

const spec = [
  { label: 'Discipline', value: 'Full Stack AI Engineer' },
  { label: 'Experience', value: '5+ years in production', tnum: true },
  { label: 'Core stack', value: 'Python, Next.js, PostgreSQL, AWS' },
  { label: 'AI', value: 'OpenAI, Retell AI, MCP servers' },
  { label: 'Based', value: 'Lahore, PK · UTC+5', tnum: true },
  { label: 'Replies in', value: siteConfig.contact.responseTime, tnum: true },
  { label: 'Status', value: siteConfig.availability.label, accent: true },
];

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((f) => ({
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

      {/* ══ HERO ═══════════════════════════════════════════════════════
          Statement left, spec block right. The spec answers a recruiter's
          filter questions before they scroll once. */}
      <section className="shell pt-24 pb-14 sm:pt-32 sm:pb-20">
        <Reveal as="p" className="meta mb-10">
          Full Stack AI Engineer &middot; {siteConfig.location.city}, {siteConfig.location.country}
        </Reveal>

        <MaskedHeading
          lines={['SYSTEMS', 'THAT RUN', 'THEMSELVES.']}
          className="[--h:15vw] sm:[--h:12vw] lg:[--h:9.4vw]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 mt-10 pt-8 sm:gap-y-12 sm:mt-16 sm:pt-12 hair">
          <div className="lg:col-span-6">
            <Reveal as="p" className="text-[1.125rem] leading-[1.7] text-ash max-w-[46ch]">
              Five years building full stack products and production AI systems. I ship
              voice and LLM agents, MCP servers, and the integration plumbing underneath
              them, then deploy the whole thing on AWS and keep it standing.
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn grp">
                Start a project <span className="arw">&rarr;</span>
              </Link>
              <Link href="/work" className="btn-ghost grp">
                See the work <span className="arw">&rarr;</span>
              </Link>
            </Reveal>

            <Reveal as="p" className="meta mt-10 leading-relaxed max-w-[38ch]">
              {siteConfig.availability.detail} Last engagement ended August 2026.
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-8">
            <div className="meta mb-5">Specification</div>
            <dl className="gridline border border-line">
              {spec.map((row) => (
                <div key={row.label} className="p-4 flex justify-between gap-4">
                  <dt className="meta">{row.label}</dt>
                  <dd
                    className={`text-sm text-right ${row.tnum ? 'tnum' : ''} ${
                      row.accent ? 'text-brass' : ''
                    }`}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* ══ WHAT I BUILD ═══════════════════════════════════════════════
          Leads with capability. The proof numbers sit further down, after
          the work that produced them. */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <Offers items={offers} />
      </section>

      {/* ══ TOOLKIT ════════════════════════════════════════════════════ */}
      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <SectionHead
            title="The toolkit"
            note="Things I use in production, not a list of everything I have read about"
            className="mb-10 sm:mb-14"
          />
          <div className="gridline gridline-deep sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((g, i) => (
              <Reveal key={g.n} delay={(i % 3) * 70} className="p-8 lg:p-10">
                <div className="meta tnum text-brass mb-6">{g.n}</div>
                <h3 className="text-lg font-medium">{g.title}</h3>
                <p className="mt-4 text-[.9375rem] leading-relaxed text-ash">{g.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ═══════════════════════════════════════════════ */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <SectionHead
          title="What I actually do"
          note="Six things done properly, rather than twenty listed"
          className="mb-10 sm:mb-14"
        />
        <div className="gridline sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.n} delay={(i % 3) * 70} className="p-8 lg:p-10">
              <div className="meta tnum text-brass mb-6">{c.n}</div>
              <h3 className="text-xl font-medium tracking-tight">{c.title}</h3>
              <p className="mt-4 text-[.9375rem] leading-relaxed text-ash">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ SELECTED WORK ══════════════════════════════════════════════ */}
      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <SectionHead title="Selected work" note="Tap to expand" className="mb-12" />
          <Accordion
            size="lg"
            items={featuredCases.map((c) => ({
              index: c.n,
              title: c.title,
              sub: c.sub,
              body: (
                <>
                  <div className="pb-8 px-2 sm:px-4 grid sm:grid-cols-3 gap-x-10 gap-y-7">
                    <div>
                      <div className="meta mb-3">Problem</div>
                      <p className="text-[.9375rem] leading-relaxed text-ash">{c.problem}</p>
                    </div>
                    <div>
                      <div className="meta mb-3">Approach</div>
                      <p className="text-[.9375rem] leading-relaxed text-ash">{c.approach}</p>
                    </div>
                    <div>
                      <div className="meta mb-3">Result</div>
                      <p className="text-[.9375rem] leading-relaxed text-ash">
                        <RichText text={c.result} />
                      </p>
                    </div>
                  </div>
                  <div className="pb-10 px-2 sm:px-4 flex flex-wrap items-center justify-between gap-4">
                    <span className="meta">{c.stack}</span>
                    {c.href ? (
                      <Link href={c.href} className="grp meta !text-brass inline-flex items-center gap-2">
                        Read the full case study <span className="arw">&rarr;</span>
                      </Link>
                    ) : null}
                  </div>
                </>
              ),
            }))}
          />
          <div className="mt-10">
            <Link href="/work" className="btn-ghost grp">
              All case files <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TRACK RECORD ═══════════════════════════════════════════════
          Numbers earn their place here, after the systems that produced
          them, rather than as the first thing a visitor reads. */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <SectionHead
          title="Measured outcomes"
          note="Taken from delivered systems, not estimates"
          className="mb-10 sm:mb-14"
        />
        <Figures items={metrics} />
      </section>

      {/* ══ FEATURED PRODUCT ═══════════════════════════════════════════ */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-5">
            <div className="meta text-brass mb-6">Live and public</div>
            <Reveal as="h2" className="disp text-[2.6rem] sm:text-[3.6rem]">
              MultSaver
            </Reveal>
            <Reveal as="p" className="mt-6 text-[1.0625rem] leading-[1.7] text-ash max-w-[42ch]">
              The only thing on this site you can click and use right now. A free media
              downloader I run myself, with no signup and no upsell. It exists because the
              alternatives break constantly, and keeping it alive is a standing test of the
              reliability work I sell.
            </Reveal>
            <a
              href={siteConfig.social.multsaver}
              target="_blank"
              rel="noopener noreferrer"
              className="btn grp mt-9"
            >
              Open multsaver.com <span className="arw arw-d">&#8599;</span>
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="gridline grid-cols-2">
              <div className="p-7">
                <div className="meta mb-3">Platforms</div>
                <p className="text-[.9375rem] text-ash">Instagram, TikTok, Facebook, X</p>
              </div>
              <div className="p-7">
                <div className="meta mb-3">Cost to user</div>
                <p className="text-[.9375rem] text-ash">Free, no account</p>
              </div>
              <div className="p-7">
                <div className="meta mb-3">Stack</div>
                <p className="text-[.9375rem] text-ash">FastAPI, Redis, FFmpeg</p>
              </div>
              <div className="p-7">
                <div className="meta mb-3">Uptime work</div>
                <p className="text-[.9375rem] text-ash">Extractors isolated per platform</p>
              </div>
            </div>
            <p className="meta mt-6 leading-relaxed">
              Each platform extractor is isolated, so one breaking never takes the service
              down. It is the same pattern I use in client integrations.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHO THIS IS FOR ════════════════════════════════════════════ */}
      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
            <div className="lg:col-span-4">
              <h2 className="disp text-[2.2rem] sm:text-[3rem]">
                Who this
                <br />
                is for
              </h2>
            </div>
            <div className="lg:col-span-8 gridline gridline-deep sm:grid-cols-2">
              {audiences.map((a, i) => (
                <Reveal key={a.title} delay={(i % 2) * 70} className="p-7 sm:pl-8">
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <p className="mt-3 text-[.9375rem] leading-relaxed text-ash">{a.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE PERSON ═════════════════════════════════════════════════ */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16 items-start">
          <Reveal as="figure" className="lg:col-span-4">
            <Portrait />
            <figcaption className="meta mt-10">
              {siteConfig.name} &middot; {siteConfig.location.city}, {siteConfig.location.country}
            </figcaption>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="meta mb-6">Who you would actually be working with</div>
            <h2 className="disp text-[2.2rem] sm:text-[3rem]">
              No account manager,
              <br />
              no handover.
            </h2>
            <div className="prose mt-9 text-[1.0625rem] max-w-[52ch]">
              <p>
                You talk to me, and I write the code. There is nobody in between translating
                your problem into a ticket, and nobody junior quietly inheriting the work once
                the contract is signed.
              </p>
              <p>
                Five years of it, including a stretch leading the developers who built a
                sync engine holding <strong>300,000 listings</strong> in agreement. Most of that
                time has been spent inside other people&rsquo;s systems, which is a good
                school for writing things the next person can actually maintain.
              </p>
            </div>
            <Link href="/about" className="btn-ghost grp mt-10">
              More about how I work <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════════════ */}
      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <SectionHead title="How I work" note="Four steps, no surprises" className="mb-10 sm:mb-14" />
          <div className="gridline gridline-deep sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 70} className="p-8 lg:p-10">
                <div className="meta tnum text-brass mb-6">Step {s.n}</div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-4 text-[.9375rem] leading-relaxed text-ash">{s.short}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENTS ════════════════════════════════════════════════ */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <SectionHead
          title="Engagements"
          className="mb-10 sm:mb-14"
          action={
            <Link href="/services" className="grp meta !text-brass inline-flex items-center gap-2 pb-3">
              Full detail <span className="arw">&rarr;</span>
            </Link>
          }
        />
        <div className="gridline lg:grid-cols-3">
          {engagements.map((e, i) => {
            const price = e.terms.find((t) => t.accent);
            const term = e.terms[0];
            return (
              <Reveal key={e.key} delay={(i % 3) * 70} className="p-9 lg:p-11">
                <div className="meta tnum">{e.label}</div>
                <p className="mt-7 text-[1.0625rem] leading-[1.65]">{e.teaser}</p>
                <div className="mt-9 pt-5 hair flex justify-between meta">
                  <span>{term.value}</span>
                  <span className="!text-brass">{price?.value}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════════════════════
          Real Upwork reviews, quoted verbatim and trimmed only at sentence
          boundaries. The tags are the client's own endorsements. */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <SectionHead
          title="In their words"
          note="Client reviews, quoted as written"
          className="mb-10 sm:mb-14"
        />

        <div className="gridline lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.project} as="figure" delay={i * 70} className="p-9 lg:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-brass tracking-[.2em] text-sm" aria-hidden="true">
                  {'\u2605'.repeat(t.rating)}
                </span>
                <span className="meta tnum">{t.rating.toFixed(1)}</span>
              </div>

              <blockquote className="text-[1.25rem] leading-[1.6] tracking-tight flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 pt-6 hair">
                <p className="text-[.9375rem] text-ash leading-relaxed">{t.project}</p>
                <p className="meta mt-3">
                  {t.source} client &middot; {t.date}
                </p>
                <p className="meta !text-dim mt-4 leading-relaxed">{t.tags.join('  \u00b7  ')}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ WHERE I HAVE WORKED ════════════════════════════════════════
          Stands in for testimonials until real, attributable quotes exist.
          Every name here is a role actually held, sourced from the same data
          the About timeline renders, so it cannot drift out of sync. */}
      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <SectionHead
            title={
              <>
                Teams I have
                <br />
                built for
              </>
            }
            note="Recent engagements, one of them as team lead"
            className="mb-10 sm:mb-14"
          />

          <div className="gridline gridline-deep sm:grid-cols-2 lg:grid-cols-3">
            {employers.map((r, i) => (
              <Reveal key={r.org} delay={(i % 3) * 70} className="p-8">
                <div className="meta tnum mb-4">{r.period}</div>
                <h3 className="disp text-[1.5rem] leading-tight">{r.org}</h3>
                <p className="mt-3 text-[.9375rem] text-ash">
                  {r.title}
                  {r.note ? <span className="text-brass"> &middot; {r.note.replace('Also ', '')}</span> : null}
                </p>
                <p className="meta mt-4 pt-4 hair">{r.location}</p>
              </Reveal>
            ))}
          </div>

          <p className="meta mt-10 leading-relaxed max-w-[52ch]">
            References available on request.
          </p>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════ */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2.2rem] sm:text-[3rem]">
              Common
              <br />
              questions
            </h2>
            <p className="mt-6 text-[.9375rem] leading-relaxed text-ash max-w-[30ch]">
              Anything not covered here, ask on the call. It costs nothing.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion
              items={homeFaqs.map((f) => ({
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

      {/* ══ CTA ════════════════════════════════════════════════════════ */}
      <section className="border-t border-line">
        <div className="shell py-20 sm:py-28 lg:py-40">
          <p className="meta mb-10">Next step</p>
          <h2
            className="disp [--h:13vw] sm:[--h:10vw] lg:[--h:8vw]"
            style={fitHeading(["LET'S BUILD", 'SOMETHING DULL.'])}
          >
            LET&rsquo;S BUILD
            <br />
            <span className="text-brass">SOMETHING</span> DULL.
          </h2>
          <p className="mt-10 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-ash">
            The best engineering is boring. It runs, nobody thinks about it, and it pays for
            itself in returned hours. Tell me what you keep doing by hand.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
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
