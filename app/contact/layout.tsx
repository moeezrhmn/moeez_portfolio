import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 20 minute call or send a message. Replies within 24 hours.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
