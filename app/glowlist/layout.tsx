import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/glowlist' },
};

export default function GlowlistLayout({ children }: { children: ReactNode }) {
  return children;
}
