import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/glowlist',
    siteName: 'DivaglamKreation',
    title: 'Join the DGK Glowlist | DivaglamKreation',
    description: 'Join the DGK Glowlist for faith-rooted notes, journaling prompts, product news, and gentle encouragement.',
    images: [{ url: '/images/the-3-day-pause-owl-cover-20261107.webp', alt: 'The 3-Day Pause free journal with the Glow Owl' }],
  },
};

export default function GlowlistLayout({ children }: { children: ReactNode }) {
  return children;
}
