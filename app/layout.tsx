import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DivaglamKreation | Faith-rooted journals and creative pieces',
  description:
    'Faith-rooted journals, stickers, and seasonal pieces made to help you feel grounded, inspired, and softly reminded of who you are becoming.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
