import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Hire a Software Engineer',
  description: 'Get in touch to discuss your project. Available for Backend, Infrastructure, API development, Automation, VPS & Cloud Deployments using Python, Laravel, and React/Next.js.',
  alternates: {
    canonical: 'https://moeezrehman.quanter.dev/contact',
  },
  openGraph: {
    title: 'Contact Moeez Rehman - Software Engineer',
    description: 'Hire a Software Engineer for Backend, APIs, Automation, and Cloud Infrastructure. Python · Laravel · React/Next.js.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
