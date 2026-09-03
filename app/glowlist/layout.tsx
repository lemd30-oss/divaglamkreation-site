import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/glowlist',
    siteName: 'DivaglamKreation',
    title: 'Join the DGK Glowlist | DivaglamKreation',
    description: 'Join the DGK Glowlist for faith-rooted notes, journaling prompts, product news, and gentle encouragement.',
    images: [{ url: '/images/gentle-morning-reset-pack.jpg', alt: 'DivaglamKreation gentle reset journal and encouragement' }],
  },
};

export default function GlowlistLayout({ children }: { children: ReactNode }) {
  return children;
}
