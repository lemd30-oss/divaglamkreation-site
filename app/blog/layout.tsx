import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/blog',
    siteName: 'DivaglamKreation',
    title: 'Journal Notes | DivaglamKreation',
    description: 'Faith-rooted reflections, journaling encouragement, and quiet reminders from DivaglamKreation.',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
