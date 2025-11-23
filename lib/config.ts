/**
 * Site configuration
 * Centralizes environment-based URLs and settings
 */

export const siteConfig = {
  /**
   * Base URL of the site
   * Falls back to VERCEL_URL in production or localhost in development
   */
  url: process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')
    || 'http://localhost:3000',

  name: 'Moeez Rehman Portfolio',
  author: 'Moeez Rehman',
} as const;
