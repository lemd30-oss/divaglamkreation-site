import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: { url: '/blog/7-gentle-journal-prompts-for-releasing-what-no-longer-serves-you' },
};

export default function GentleReleasePromptsLayout({ children }: { children: ReactNode }) {
  return children;
}
