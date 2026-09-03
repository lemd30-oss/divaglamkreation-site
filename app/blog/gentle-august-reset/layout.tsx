import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    url: '/blog/gentle-august-reset',
    siteName: 'DivaglamKreation',
    title: 'A Gentle August Reset for the Woman Who Needs Room to Breathe',
    description: 'A soft, faith-rooted August reflection for slowing down, making room to breathe, and returning to peace one gentle step at a time.',
    images: [{ url: '/images/gentle-morning-reset-pack.jpg', alt: 'A gentle August reset from DivaglamKreation' }],
  },
};

export default function GentleAugustResetLayout({ children }: { children: ReactNode }) {
  return children;
}
