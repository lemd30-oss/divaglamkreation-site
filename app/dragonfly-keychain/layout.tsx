import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/dragonfly-keychain' },
};

export default function DragonflyKeychainLayout({ children }: { children: ReactNode }) {
  return children;
}
