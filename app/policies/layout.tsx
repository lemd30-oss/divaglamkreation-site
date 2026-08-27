import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/policies' },
};

export default function PoliciesLayout({ children }: { children: ReactNode }) {
  return children;
}
