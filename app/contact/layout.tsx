import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Hire a Backend Engineer',
  description: 'Get in touch to discuss your backend project. Available for Python, Laravel, API development, automation workflows, and SaaS backend work.',
  openGraph: {
    title: 'Contact Moeez Rehman - Backend Engineer',
    description: 'Hire a backend engineer for Python, Laravel, API integrations, and automation. Let\'s discuss your project.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
