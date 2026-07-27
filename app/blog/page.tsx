import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Journal Notes',
  description: 'Faith-rooted reflections, journaling encouragement, and quiet reminders from DivaglamKreation.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    title: 'How to Begin a Gentle Reset Routine',
    description: 'A soft, practical place to begin when life feels full and you need a quieter rhythm.',
    href: '/blog/gentle-reset',
  },
  {
    title: 'Why You Don’t Need to Earn Rest',
    description: 'A faith-rooted reminder that rest is not a reward for finishing everything.',
    href: '/blog/why-you-dont-need-to-earn-rest',
  },
];

export default function BlogPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Journal Notes</p>
          <h1>Gentle words for fuller weeks.</h1>
          <p>Faith-rooted reflections and practical reminders for slowing down and beginning again.</p>
        </div>
        <aside className="hero-card" aria-label="Blog welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">Read Slowly</p>
            <h2>Bring your coffee. Stay for the reminder.</h2>
            <p>Choose the note that meets you today.</p>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="card editorial-card" key={post.href}>
              <p className="eyebrow">From the Blog</p>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a className="button secondary" href={post.href}>Read the Note</a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
