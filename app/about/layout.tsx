import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Me - Backend Engineer | Python & Laravel Specialist",
  description: "Learn about my journey as a Backend Engineer. Expert in Python, Laravel, API Development, E-commerce Integrations, and building scalable SaaS systems. 5+ years of experience delivering solutions that process 300k+ products.",
  openGraph: {
    title: "About Moeez Rehman - Backend Engineer",
    description: "Backend Engineer specializing in Python, Laravel, and scalable backend systems",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
