import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { experience, principles } from '@/lib/data/experience';
import { stack } from '@/lib/data/stack';
import { MaskedHeading } from '@/components/ui/MaskedHeading';
import { Progress } from '@/components/ui/Progress';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHead } from '@/components/ui/Section';

const glance = [
  { label: 'Title', value: 'Full Stack AI Engineer' },
  { label: 'Experience', value: '5+ years in production' },
  { label: 'Based', value: 'Lahore, Pakistan, UTC+5' },
  { label: 'Core', value: 'Python, Next.js, PostgreSQL, AWS' },
  { label: 'AI', value: 'OpenAI, Retell AI, MCP servers' },
  { label: 'Languages', value: 'English (fluent), Urdu, Punjabi' },
  { label: 'Open to', value: 'Freelance builds and full time roles' },
];

export default function AboutPage() {
  // Person schema, built from the same data the timeline renders.
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.contact.email}`,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: stack.flatMap((g) => g.lines),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Agriculture, Faisalabad',
    },
    worksFor: experience
      .filter((r) => !r.education)
      .map((r) => ({ '@type': 'Organization', name: r.org })),
  };

  return (
    <>
      <Progress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="shell pt-40 pb-16">
        <p className="meta mb-8">About &middot; {siteConfig.name}</p>
        <MaskedHeading
          lines={['I MAKE SOFTWARE', 'NOBODY HAS TO', 'THINK ABOUT.']}
          className="[--h:12vw] sm:[--h:8.5vw] lg:[--h:7vw]"
        />
      </section>

      <section className="shell pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <div className="meta mb-5">At a glance</div>
            <dl className="gridline border border-line">
              {glance.map((g) => (
                <div key={g.label} className="p-5">
                  <dt className="meta mb-2">{g.label}</dt>
                  <dd className="text-[.9375rem]">{g.value}</dd>
                </div>
              ))}
            </dl>
            <a href={siteConfig.resume} className="btn-ghost grp mt-6 w-full justify-between">
              Download résumé <span className="arw arw-d">&#8599;</span>
            </a>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 prose text-[1.0625rem]">
            <p>
              I started in PHP in 2021, writing backend modules for client projects nobody
              would call glamorous. CMS features, e-commerce plumbing, database queries that
              had grown slow because nothing had ever been measured.
            </p>
            <p>
              What I noticed early is that the interesting problem is almost never the code.
              It is that <strong>a person somewhere is doing something a computer should be
              doing</strong>, and everyone has stopped noticing because that is simply how it
              has always worked. Somebody exports a spreadsheet every Monday. Somebody
              re-types an address into a courier portal. Somebody keeps a private tally
              because the two systems disagree and they have learned not to trust either.
            </p>
            <p>
              That became the work I chose. Over five years I moved from
              backend modules to owning whole systems: the APIs, the queues, the schedulers,
              the sync engines, and eventually the infrastructure they run on. At Maxenius I
              led the team that built a catalogue sync holding{' '}
              <strong>300,000 listings in agreement across two storefronts</strong>, then led
              its migration from Laravel to Python.
            </p>
            <p>
              The last two years pushed me into AI engineering, and it turned out to be the
              same job wearing different clothes. At Codiux I built and deployed a{' '}
              <strong>production voice sales agent on Twilio, Retell AI and OpenAI</strong>:
              real outbound calls, real customers, real consequences when a provider times out
              mid sentence. Since then I have been building MCP servers so agents can reach
              internal systems safely instead of through hand written glue.
            </p>
            <p>
              I build with Claude Code, Codex and Cursor in the loop, and I would rather say
              so than pretend otherwise. They are very good at the mechanical half of the job.
              They are not a substitute for knowing why a queue is backing up at three in the
              morning, and everything that reaches a client is code I have read and can
              defend.
            </p>
            <p>
              Calling a model is the easy part. Everything that makes it trustworthy, the
              latency budgets, the fallbacks, the guardrails on what an agent may actually do,
              the write backs that make its output useful, is ordinary systems engineering.
              That is the part I am good at, and it is why I describe myself as a full stack
              engineer who does AI rather than the other way round.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-24">
          <SectionHead
            title={
              <>
                How I think
                <br />
                about the work
              </>
            }
            note="Opinions earned by getting these wrong first"
            className="mb-14"
          />
          <div className="gridline gridline-deep sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 70} className="p-8 lg:p-10">
                <div className="meta tnum text-brass mb-6">{p.n}</div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-4 text-[.9375rem] leading-relaxed text-ash">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <SectionHead title="Where I've worked" note="2021 to present" className="mb-12" />
        <div className="border-b border-line">
          {experience.map((r) => (
            <Reveal
              key={r.period}
              as="article"
              className="border-t border-line py-9 grid grid-cols-1 sm:grid-cols-12 gap-x-10 gap-y-5"
            >
              <div className="sm:col-span-3">
                <div className="meta tnum mb-3">{r.period}</div>
                <h3 className="text-lg font-medium">{r.title}</h3>
                <p className="text-sm text-ash mt-1">
                  {r.org} &middot; {r.location}
                </p>
                {r.note ? <p className="meta mt-3 !text-brass">{r.note}</p> : null}
              </div>
              <div className="sm:col-span-9">
                {r.summary ? (
                  <p className="text-[.9375rem] leading-relaxed text-ash mb-4">{r.summary}</p>
                ) : null}
                <ul className="space-y-2.5 text-[.9375rem] leading-relaxed text-ash">
                  {r.bullets.map((b) => (
                    <li key={b} className="pl-5 relative">
                      <span className="absolute left-0 top-[.7em] w-2 h-px bg-brass" />
                      {b}
                    </li>
                  ))}
                </ul>
                {r.link ? (
                  <Link
                    href={r.link.href}
                    className="grp meta !text-brass inline-flex items-center gap-2 mt-6"
                  >
                    {r.link.label} <span className="arw">&rarr;</span>
                  </Link>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-24">
          <SectionHead
            title={
              <>
                Tools I reach
                <br />
                for daily
              </>
            }
            note="No proficiency bars, they measure nothing"
            className="mb-14"
          />
          <div className="gridline gridline-deep sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((g, i) => (
              <Reveal key={g.n} delay={(i % 3) * 70} className="p-8">
                <div className="meta mb-4">{g.title}</div>
                <p className="text-[.9375rem] leading-relaxed">
                  {g.lines.map((l, j) => (
                    <span key={j}>
                      {l}
                      {j < g.lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2.2rem] sm:text-[3rem]">
              What I&rsquo;m
              <br />
              looking for
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 prose text-[1.0625rem]">
            <p>My last engagement ended in August 2026, so I have capacity now for both.</p>
            <p>
              Freelance work: AI agent and MCP builds, integration and automation projects
              where the outcome is measurable. Hours removed, errors eliminated, a process
              retired. Those are the projects I do best and enjoy most.
            </p>
            <p>
              Full time: full stack, backend or AI engineering, remote or onsite in Lahore. I
              am most useful on teams shipping AI features that have to hold up under real
              traffic, or where data has to move between systems reliably and somebody needs
              to own that end to end rather than treat it as glue nobody wants.
            </p>
            <p>
              Either way, what I care about is <strong>whether the work removes real friction
              for real people</strong>. That is a low bar to state and a surprisingly high one
              to clear consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-deep">
        <div className="shell py-24 sm:py-32">
          <h2 className="disp text-[2.1rem] sm:text-[4rem]">
            Hiring, or just
            <br />
            <span className="text-brass">stuck?</span>
          </h2>
          <p className="mt-8 max-w-[50ch] text-[1.0625rem] leading-[1.7] text-ash">
            Either is a good reason to get in touch. Twenty minutes, no pitch.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link href="/contact" className="btn grp">
              Get in touch <span className="arw">&rarr;</span>
            </Link>
            <Link href="/work" className="btn-ghost grp">
              See the work <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
