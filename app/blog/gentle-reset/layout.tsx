import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    url: '/blog/gentle-reset',
    siteName: 'DivaglamKreation',
    title: "When You've Lost Your Rhythm: A Gentle Sunday Reset",
    description: 'A gentle Sunday reset for women who feel tired, depleted, and ready to return to rest, reflection, and faith-rooted renewal.',
    images: [{ url: '/images/gentle-morning-reset-pack.jpg', alt: 'A gentle Sunday reset from DivaglamKreation' }],
  },
};

export default function GentleResetLayout({ children }: { children: ReactNode }) {
  return children;
}
