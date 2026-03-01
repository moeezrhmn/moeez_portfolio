import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Me - Software Engineer | Backend & Infrastructure",
  description: "Software Engineer with 5+ years experience in Backend, APIs, Automation, VPS & Cloud Deployments. Building scalable systems with Python, Laravel, and React/Next.js.",
  alternates: {
    canonical: 'https://moeezrehman.quanter.dev/about',
  },
  openGraph: {
    title: "About Moeez Rehman - Software Engineer",
    description: "Software Engineer specializing in Backend & Infrastructure — Python, Laravel, APIs, Automation, and Cloud Deployments.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
