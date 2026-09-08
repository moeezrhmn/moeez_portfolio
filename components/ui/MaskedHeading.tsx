'use client';

import { useEffect, useState } from 'react';
import { fitHeading } from '@/lib/typography';

/**
 * The one theatrical moment per page: each line slides up from an
 * overflow-hidden box on mount. Everything after this is calm.
 * Reduced-motion users get the finished state immediately, via CSS.
 *
 * Sizing: a plain `vw` font-size overflows as soon as a line is long, because
 * viewport width says nothing about character count. So the caller supplies
 * the intended scale as `--h` (responsive, via Tailwind arbitrary properties)
 * and this caps it at the largest size the *longest* line can occupy without
 * crossing the gutter. On wide screens `--h` wins; on narrow ones the cap does.
 */

export function MaskedHeading({
  lines,
  className = '',
  as: Tag = 'h1',
}: {
  /** Last line is rendered in brass. */
  lines: readonly string[];
  className?: string;
  as?: React.ElementType;
}) {
  const [lit, setLit] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setLit(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Tag
      className={`disp ${lit ? 'lit' : ''} ${className}`.trim()}
      style={fitHeading(lines)}
    >
      {lines.map((line, i) => (
        <span className="mask" key={i}>
          <span className={i === lines.length - 1 ? 'text-brass' : undefined}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
