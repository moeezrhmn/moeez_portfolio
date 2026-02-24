import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Backend Engineering Portfolio',
  description: 'A collection of backend projects built with Python, Laravel, FastAPI, and more. Includes API integrations, automation systems, SaaS backends, and e-commerce solutions.',
  openGraph: {
    title: 'Projects - Moeez Rehman',
    description: 'Backend projects: API integrations, automation workflows, SaaS backends, and e-commerce systems built with Python and Laravel.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
