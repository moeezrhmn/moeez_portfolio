import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Experience - Backend Engineer',
  description: '5+ years of backend engineering experience. Explore my professional journey, roles, and projects across Python, Laravel, API development, and SaaS systems.',
  openGraph: {
    title: 'Work & Experience - Moeez Rehman',
    description: 'Backend engineering experience across Python, Laravel, API integrations, and scalable SaaS systems.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
