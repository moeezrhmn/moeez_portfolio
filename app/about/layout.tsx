import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full Stack AI Engineer in Lahore. Five years shipping production LLM and voice systems, and a preference for software nobody has to think about.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
