/**
 * The résumé is the one asset that changes often, so it should never require a
 * code change. The site always links to `/resume`; that route serves whatever
 * `RESUME_URL` points at, falling back to the copy in `public/`.
 *
 * Google Drive is the intended host because "Manage versions" lets a new file
 * replace the old one under the same ID, so the link stays valid forever.
 */

/** Local copy, served when RESUME_URL is unset or unreachable. */
export const RESUME_FALLBACK = '/Moeez-Rehman-Resume.pdf';

/** What the browser saves the file as. */
export const RESUME_FILENAME = 'Moeez-Rehman-CV.pdf';

/**
 * Accepts any of the URLs Google Drive hands you and returns one that responds
 * with the file itself rather than a viewer page. Non-Drive URLs pass through
 * untouched, so Dropbox, S3 or a plain link all work too.
 *
 *   https://drive.google.com/file/d/<id>/view?usp=sharing
 *   https://drive.google.com/open?id=<id>
 *   https://drive.google.com/uc?export=download&id=<id>
 */
export function normaliseResumeUrl(raw: string): string {
  const url = raw.trim();
  if (!url) return '';

  // Parse rather than pattern-match the host: a regex against the whole string
  // is easy to get subtly wrong, and a wrong match here silently serves the
  // stale local copy instead of the file that was just uploaded.
  let host: string;
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    return url;
  }

  if (host !== 'drive.google.com' && !host.endsWith('.drive.google.com')) return url;

  const id =
    url.match(/\/file\/d\/([A-Za-z0-9_-]{10,})/)?.[1] ??
    url.match(/[?&]id=([A-Za-z0-9_-]{10,})/)?.[1];

  return id ? `https://drive.google.com/uc?export=download&id=${id}` : url;
}
