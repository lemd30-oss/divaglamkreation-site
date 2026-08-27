import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/blog' },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
