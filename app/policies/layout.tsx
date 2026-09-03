import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/policies',
    siteName: 'DivaglamKreation',
    title: 'Policies | DivaglamKreation',
    description: 'DivaglamKreation policies for digital downloads, physical orders, privacy, refunds, and customer support.',
  },
};

export default function PoliciesLayout({ children }: { children: ReactNode }) {
  return children;
}
