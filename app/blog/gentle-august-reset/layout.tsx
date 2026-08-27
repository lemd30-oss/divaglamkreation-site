import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/blog/gentle-august-reset' },
};

export default function GentleAugustResetLayout({ children }: { children: ReactNode }) {
  return children;
}
