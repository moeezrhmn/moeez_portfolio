/**
 * A deliberately tiny markup convention for content strings, so the data
 * files stay plain `.ts` (no JSX) while still carrying emphasis and links.
 *
 *   **300,000+**        emphasised figure
 *   [text](/href)       link
 *
 * `RichText` renders it; `stripRich` flattens it for JSON-LD and meta tags,
 * which must be plain text.
 */
export function stripRich(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1');
}
