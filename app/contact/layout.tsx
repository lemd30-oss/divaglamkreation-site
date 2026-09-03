import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/contact',
    siteName: 'DivaglamKreation',
    title: 'Contact | DivaglamKreation',
    description: 'Contact DivaglamKreation for help with digital downloads, physical orders, or general questions.',
    images: [{ url: '/images/gentle-morning-reset-pack.jpg', alt: 'DivaglamKreation gentle reset journal and encouragement' }],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
