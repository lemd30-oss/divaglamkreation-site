import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/blog/gentle-reset' },
};

export default function GentleResetLayout({ children }: { children: ReactNode }) {
  return children;
}
