import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/contact',
    siteName: 'DivaglamKreation',
    title: 'Contact | DivaglamKreation',
    description: 'Contact DivaglamKreation for help with digital downloads, physical orders, or general questions.',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
