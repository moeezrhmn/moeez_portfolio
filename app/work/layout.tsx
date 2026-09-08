import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Files',
  description:
    'Production AI agents, MCP servers, integration systems and full stack platforms delivered between 2021 and 2026.',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
