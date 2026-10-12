import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    url: '/blog/it-started-with-this-owl',
    siteName: 'DivaglamKreation',
    title: 'It Started With This Owl',
    description: 'Before DivaglamKreation had a name, there was an owl canvas in Germany and four words: Know HOO You Are.',
    images: [{ url: '/images/dgk-know-hoo-you-are-owl-plaque.jpg', alt: 'An owl canvas that reads know HOO you are' }],
  },
};

export default function ItStartedWithThisOwlLayout({ children }: { children: ReactNode }) {
  return children;
}
