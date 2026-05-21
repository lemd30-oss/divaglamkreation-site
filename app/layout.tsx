import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DivaglamKreation | Faith-rooted journals and creative pieces',
  description:
    'Faith-rooted journals, stickers, and seasonal pieces made to help you feel grounded, inspired, and softly reminded of who you are becoming.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
