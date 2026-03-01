import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Experience - Software Engineer | Backend & Infrastructure',
  description: '5+ years as a Software Engineer across Backend, Infrastructure, APIs, Automation, and Cloud Deployments. Explore my professional journey with Python, Laravel, and React/Next.js.',
  alternates: {
    canonical: 'https://moeezrehman.quanter.dev/work',
  },
  openGraph: {
    title: 'Work & Experience - Moeez Rehman',
    description: 'Software engineering experience in Backend, Infrastructure, APIs, Automation, and Cloud Deployments.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
