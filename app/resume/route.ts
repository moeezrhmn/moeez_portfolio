import { NextResponse } from 'next/server';
import { normaliseResumeUrl, RESUME_FALLBACK, RESUME_FILENAME } from '@/lib/resume';

/**
 * Serves the résumé from wherever RESUME_URL points, proxied rather than
 * redirected so the visitor stays on the domain and never sees a Drive link.
 * Cached for an hour, so replacing the file in Drive shows up shortly after
 * without a deploy.
 *
 * Falls back to the copy in public/ whenever the remote is unset, unreachable,
 * or is not actually a PDF.
 */
const CACHE_SECONDS = 3600;

/** Google Drive labels PDFs `application/octet-stream`, and serves an HTML
 *  warning page for large or restricted files under a perfectly innocent
 *  content-type. The only trustworthy signal is the file's own header. */
const isPdf = (bytes: ArrayBuffer) =>
  new TextDecoder().decode(bytes.slice(0, 5)) === '%PDF-';

export async function GET(request: Request) {
  const src = normaliseResumeUrl(process.env.RESUME_URL ?? '');

  if (src) {
    try {
      const upstream = await fetch(src, {
        redirect: 'follow',
        next: { revalidate: CACHE_SECONDS },
      });

      if (upstream.ok) {
        // ~100 KB, so buffering to verify the header costs nothing.
        const body = await upstream.arrayBuffer();

        if (isPdf(body)) {
          return new NextResponse(body, {
            headers: {
              'Content-Type': 'application/pdf',
              // `inline` so it previews in the browser; recruiters rarely want
              // a download they then have to go and find.
              'Content-Disposition': `inline; filename="${RESUME_FILENAME}"`,
              'Content-Length': String(body.byteLength),
              'Cache-Control': `public, max-age=0, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`,
            },
          });
        }

        console.warn('resume: upstream is not a PDF, using local copy. Check the file is shared publicly.');
      } else {
        console.warn(`resume: upstream returned ${upstream.status}, using local copy`);
      }
    } catch (err) {
      console.warn(
        'resume: upstream fetch failed, using local copy:',
        err instanceof Error ? err.message : err
      );
    }
  }

  // Resolved against the incoming request, so this is correct on localhost,
  // on a preview host and in production without depending on an env var.
  return NextResponse.redirect(new URL(RESUME_FALLBACK, request.url));
}
