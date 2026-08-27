import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/contact' },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
