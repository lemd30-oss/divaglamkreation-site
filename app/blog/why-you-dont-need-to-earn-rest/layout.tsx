import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    url: '/blog/why-you-dont-need-to-earn-rest',
    siteName: 'DivaglamKreation',
    title: "Why You Don't Need to Earn Rest",
    description: 'A gentle, faith-rooted reminder that rest is not a reward for exhaustion. Pause, release guilt, and begin again with grace.',
  },
};

export default function EarnRestLayout({ children }: { children: ReactNode }) {
  return children;
}
