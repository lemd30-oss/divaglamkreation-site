import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    url: '/blog/7-gentle-journal-prompts-for-releasing-what-no-longer-serves-you',
    siteName: 'DivaglamKreation',
    title: '7 Gentle Journal Prompts for Releasing What No Longer Serves You',
    description: 'Seven gentle, faith-rooted prompts for setting down guilt, pressure, and what was never yours to carry.',
    images: [{ url: '/images/gentle-morning-reset-pack.jpg', alt: 'Gentle journal prompts from DivaglamKreation' }],
  },
};

export default function GentleReleasePromptsLayout({ children }: { children: ReactNode }) {
  return children;
}
