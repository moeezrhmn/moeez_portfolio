import { siteConfig } from '@/lib/config';
import { contactFaqs } from '@/lib/data/faqs';
import { stripRich } from '@/lib/rich';
import { MaskedHeading } from '@/components/ui/MaskedHeading';
import { Progress } from '@/components/ui/Progress';
import { Portrait } from '@/components/ui/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { RichText } from '@/components/ui/RichText';
import { ContactForm } from '@/components/ui/ContactForm';
import { SectionHead } from '@/components/ui/Section';

const next = [
  {
    when: 'Within 24h',
    title: 'A real reply',
    body: 'Written by me, addressing what you actually described, usually with one or two questions I need answered before I can be useful.',
  },
  {
    when: 'The call',
    title: 'Twenty minutes',
    body: 'You walk me through the process as it works today. I ask about frequency, volume and what breaks. No slides, nothing to prepare.',
  },
  {
    when: 'Within 3 days',
    title: 'Scope and price',
    body: 'A short written proposal covering inclusions, exclusions, fixed price and date. Or an honest note saying this is not worth building, which happens.',
  },
];

export default function ContactPage() {
  const { contact, social } = siteConfig;

  const channels = [
    { label: 'Preferred', value: 'Book 20 minutes', href: contact.booking, note: 'Pick a slot that suits your timezone', external: true },
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, breakAll: true },
    { label: 'Phone / WhatsApp', value: contact.phoneDisplay, href: `tel:${contact.phone}`, tnum: true },
    { label: 'LinkedIn', value: 'in/moeezrhmn', href: social.linkedin, external: true },
    { label: 'GitHub', value: 'moeezrhmn', href: social.github, external: true },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contactFaqs.map((f) => ({
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

      <section className="shell pt-40 pb-14">
        <p className="meta mb-8">Contact &middot; replies within 24 hours</p>
        <MaskedHeading
          lines={['NAME THE TASK', 'YOU KEEP DOING', 'BY HAND.']}
          className="[--h:12vw] sm:[--h:8.5vw] lg:[--h:7vw]"
        />
        <p className="mt-12 max-w-[54ch] text-[1.0625rem] leading-[1.7] text-ash">
          Twenty minutes, no pitch. If building it will not pay for itself, you will hear that
          on the call. That answer costs you nothing and saves us both a month.
        </p>
      </section>

      <section className="shell pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 border-t border-line pt-14">
          <div className="lg:col-span-7">
            <h2 className="disp text-[1.8rem] sm:text-[2.2rem] mb-9">Send a message</h2>
            <ContactForm email={contact.email} />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            {/* A face on the contact page: people write more readily to a person
                than to a form. */}
            <figure className="mb-12">
              <Portrait variant="plain" />
              <figcaption className="border border-line border-t-0 p-6">
                <div className="font-display text-[1.125rem] font-medium tracking-tight">
                  {siteConfig.name}
                </div>
                <div className="meta mt-2">{siteConfig.title}</div>
                <div className="meta mt-5 pt-5 hair flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                  Replies within 24 hours
                </div>
              </figcaption>
            </figure>

            <h2 className="disp text-[1.8rem] sm:text-[2.2rem] mb-9">Or go direct</h2>
            <div className="gridline border border-line">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="grp block p-6 hover:text-brass transition-colors"
                >
                  <div className="meta mb-2">{c.label}</div>
                  <div
                    className={`flex items-start gap-2 ${c.breakAll ? 'text-[.9375rem] break-all' : 'text-[1.0625rem]'} ${
                      c.tnum ? 'tnum' : ''
                    }`}
                  >
                    {c.value} <span className="arw arw-d shrink-0">&#8599;</span>
                  </div>
                  {c.note ? <p className="text-sm text-ash mt-2">{c.note}</p> : null}
                </a>
              ))}
            </div>

            <dl className="mt-8 gridline border border-line">
              <div className="p-5 flex justify-between gap-4">
                <dt className="meta">Timezone</dt>
                <dd className="text-sm tnum">UTC+5, Lahore</dd>
              </div>
              <div className="p-5 flex justify-between gap-4">
                <dt className="meta">Overlap</dt>
                <dd className="text-sm text-right">UK and EU day, US morning</dd>
              </div>
              <div className="p-5 flex justify-between gap-4">
                <dt className="meta">Reply within</dt>
                <dd className="text-sm tnum">24 hours</dd>
              </div>
              <div className="p-5 flex justify-between gap-4">
                <dt className="meta">Availability</dt>
                <dd className="text-sm text-brass">Open now</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-deep">
        <div className="shell py-24">
          <SectionHead
            title={
              <>
                What happens
                <br />
                after you send it
              </>
            }
            note="No sales sequence"
            className="mb-14"
          />
          <div className="gridline gridline-deep sm:grid-cols-3">
            {next.map((n, i) => (
              <Reveal key={n.when} delay={i * 70} className="p-8 lg:p-10">
                <div className="meta tnum text-brass mb-6">{n.when}</div>
                <h3 className="text-lg font-medium">{n.title}</h3>
                <p className="mt-4 text-[.9375rem] leading-relaxed text-ash">{n.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 className="disp text-[2.2rem] sm:text-[3rem]">
              Before you
              <br />
              write
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion
              items={contactFaqs.map((f) => ({
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
    </>
  );
}
