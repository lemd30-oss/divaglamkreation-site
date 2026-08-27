import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/blog/why-you-dont-need-to-earn-rest' },
};

export default function EarnRestLayout({ children }: { children: ReactNode }) {
  return children;
}
