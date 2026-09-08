import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI agent builds, integration and automation work, and engineering retainers. Fixed scope, fixed price, documented handover.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
