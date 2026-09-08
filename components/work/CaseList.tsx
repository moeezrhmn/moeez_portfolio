'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cases, caseFilters, caseCount, type CaseCategory } from '@/lib/data/cases';
import { RichText } from '@/components/ui/RichText';

export function CaseList() {
  const [filter, setFilter] = useState<string>('all');

  const shown = cases.filter(
    (c) => filter === 'all' || (c.categories as readonly string[]).includes(filter)
  );

  return (
    <>
      <section className="shell pb-12">
        <div className="hair pt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="meta !text-dim">Filter</span>
          {caseFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className="meta pb-[.35rem] border-b transition-colors"
              style={{
                color: filter === f.key ? 'var(--brass)' : 'var(--dim)',
                borderBottomColor: filter === f.key ? 'var(--brass)' : 'transparent',
              }}
            >
              {f.label} <span className="tnum">({caseCount(f.key)})</span>
            </button>
          ))}
        </div>
      </section>

      <section className="shell pb-24">
        <div className="border-t border-line">
          {shown.map((c) => (
            <article key={c.n}>
              <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 border-b border-line">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="meta tnum !text-dim">Case {c.n}</span>
                    {c.badge ? (
                      <span className="meta !text-onbrass bg-brass px-2 py-0.5">{c.badge}</span>
                    ) : null}
                  </div>
                  <h2 className="disp text-[2rem] sm:text-[2.6rem] leading-none">{c.title}</h2>

                  <dl className="mt-7 gridline border border-line">
                    {c.facts.map((f) => (
                      <div key={f.label} className="p-4 flex justify-between gap-4">
                        <dt className="meta">{f.label}</dt>
                        <dd className="text-sm text-right">{f.value}</dd>
                      </div>
                    ))}
                  </dl>

                  {c.href ? (
                    <Link href={c.href} className="btn grp mt-7">
                      Full case study <span className="arw">&rarr;</span>
                    </Link>
                  ) : null}
                  {c.external ? (
                    <a
                      href={c.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn grp mt-7"
                    >
                      Open multsaver.com <span className="arw arw-d">&#8599;</span>
                    </a>
                  ) : null}
                </div>

                <div className="lg:col-span-8">
                  <div className="grid sm:grid-cols-3 gap-x-10 gap-y-8">
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
                  <div className="mt-10 pt-6 hair meta">{c.stack}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="py-14 sm:py-20 text-center meta">No case files in that category.</p>
        ) : null}
      </section>
    </>
  );
}

export type { CaseCategory };
