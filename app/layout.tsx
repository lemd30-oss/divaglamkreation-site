import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import './accessibility.css';
import './hero-image-fix.css';
import './components/site-chrome.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://divaglamkreation.com'),
  title: {
    default: 'DivaglamKreation | Faith-rooted journals and gentle resets',
    template: '%s | DivaglamKreation',
  },
  description:
    'Faith-rooted journals, gentle gifts, and seasonal encouragement made to help women pause, reflect, and begin softly.',
  applicationName: 'DivaglamKreation',
  keywords: ['faith journal', 'printable journal', 'gentle reset', 'self-care journal', 'DivaglamKreation'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'DivaglamKreation',
    title: 'DivaglamKreation | Faith-rooted journals and gentle resets',
    description: 'Journals, gentle gifts, and quiet encouragement for women learning to pause and begin softly.',
    images: [
      {
        url: '/images/gentle-morning-reset-pack.jpg',
        alt: 'DivaglamKreation gentle reset journal and encouragement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DivaglamKreation',
    description: 'Faith-rooted journals, gentle gifts, and quiet encouragement.',
    images: ['/images/gentle-morning-reset-pack.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://lemdo8.gumroad.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://lemdo8.gumroad.com" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
