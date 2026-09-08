import Link from 'next/link';
import React from 'react';

/**
 * Renders the mini-convention documented in lib/rich.ts:
 *   **bold**  and  [text](/href)
 * Anything else passes through untouched.
 */
export function RichText({ text, className = '' }: { text: string; className?: string }) {
  const parts: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));

    const token = m[0];
    if (token.startsWith('**')) {
      parts.push(
        <span key={key++} className="text-bone tnum">
          {token.slice(2, -2)}
        </span>
      );
    } else {
      const [, label, href] = /\[([^\]]+)\]\(([^)]+)\)/.exec(token)!;
      parts.push(
        href.startsWith('/') ? (
          <Link key={key++} href={href} className="ln">
            {label}
          </Link>
        ) : (
          <a key={key++} href={href} className="ln" target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      );
    }
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return className ? <span className={className}>{parts}</span> : <>{parts}</>;
}
