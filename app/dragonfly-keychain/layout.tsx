import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: '/dragonfly-keychain',
    siteName: 'DivaglamKreation',
    title: 'Dragonfly Reminder Charm | DivaglamKreation',
    description: 'A sparkling gold-tone dragonfly reminder charm in Pink or Blue, created as a gentle DGK symbol of growth, light, and transformation.',
  },
};

export default function DragonflyKeychainLayout({ children }: { children: ReactNode }) {
  return children;
}
