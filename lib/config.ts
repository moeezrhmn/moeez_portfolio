/**
 * Site configuration.
 *
 * Everything here appears in more than one place: the header, every footer,
 * the contact page, the hero spec block, the JSON-LD, the OG tags. Anything
 * that is written once belongs in the page that says it, not in here.
 */

export const siteConfig = {
  /**
   * Base URL. Set NEXT_PUBLIC_SITE_URL in the host's environment for
   * production; VERCEL_URL covers preview deployments automatically.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
    'http://localhost:3000',

  name: 'Moeez Rehman',
  author: 'Moeez Rehman',
  title: 'Full Stack AI Engineer',

  /** One sentence, reused for meta description and the JSON-LD. */
  description:
    'Full Stack AI Engineer. Production LLM and voice agents, MCP servers, and integration systems that move data unattended.',

  location: {
    city: 'Lahore',
    country: 'Pakistan',
    timezone: 'UTC+5',
    /** IANA zone, used by the live clock in the header. */
    tz: 'Asia/Karachi',
  },

  contact: {
    email: 'contact@moeezrehman.com',
    /** Business line. Digits only in `tel`, formatted for display. */
    phone: '+923126622545',
    phoneDisplay: '+92 312 662 2545',
    booking: 'https://cal.com/moeezrhmn',
    responseTime: 'Under 24 hours',
  },

  social: {
    github: 'https://github.com/moeezrhmn',
    linkedin: 'https://linkedin.com/in/moeezrhmn',
    multsaver: 'https://multsaver.com',
  },

  /** Drives the availability dot and the hero's status row. */
  availability: {
    open: true,
    label: 'Open for work',
    detail: 'Available now for freelance builds and full time roles.',
  },

  /** Stable path. app/resume/route.ts serves whatever RESUME_URL points at,
   *  so replacing the PDF never needs a code change. */
  resume: '/resume',
} as const;

/** Convenience: absolute URL for a path, for OG tags and JSON-LD. */
export const absoluteUrl = (path = '') =>
  `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
