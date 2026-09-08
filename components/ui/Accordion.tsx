'use client';

import { useState } from 'react';

export interface AccordionItem {
  /** Rendered inside the row button. Plain string or markup. */
  title: React.ReactNode;
  /** Optional two-digit index shown before the title. */
  index?: string;
  /** Optional line under the title, in mono. */
  sub?: string;
  body: React.ReactNode;
}

/**
 * One open at a time. Height animates via the 0fr to 1fr grid trick, so no
 * pixel measurement is needed and it stays correct when content reflows.
 */
export function Accordion({
  items,
  size = 'sm',
}: {
  items: AccordionItem[];
  size?: 'sm' | 'lg';
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-b border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <article key={i} className={`idx ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`w-full text-left flex items-center gap-6 px-2 ${
                size === 'lg' ? 'py-8 sm:py-10 sm:px-4 sm:gap-10' : 'py-7'
              }`}
            >
              {item.index ? (
                <span className="idx-n meta tnum !text-dim shrink-0">{item.index}</span>
              ) : null}

              <span className="flex-1 min-w-0">
                <span
                  className={
                    size === 'lg'
                      ? 'idx-t disp block text-[1.7rem] sm:text-[2.6rem] leading-none'
                      : 'flex-1 text-[1.0625rem] font-medium'
                  }
                >
                  {item.title}
                </span>
                {item.sub ? <span className="meta block mt-3">{item.sub}</span> : null}
              </span>

              <span
                className={`plus text-dim shrink-0 ${size === 'lg' ? 'text-2xl' : 'text-xl'}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div className="panel" aria-hidden={!isOpen}>
              <div>{item.body}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
