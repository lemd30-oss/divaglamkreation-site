import { pageMetadata } from '../metadata';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata = pageMetadata('Letters from the Glow', 'Faith-rooted reflections, encouragement, and gentle prompts from DivaglamKreation.', '/blog', '/images/brand/glow-owl.png');

const posts = [
  {
    title: 'It Started With This Owl',
    description: 'Before DivaglamKreation had a name, an owl canvas in Germany asked a question that became part of the brand: Know HOO You Are.',
    href: '/blog/it-started-with-this-owl',
  },
  {
    title: 'I Built This Website Myself — And It Took Me Two Years',
    description: 'A personal Behind the Glow story about learning by doing, building slowly, and growing alongside DivaglamKreation.',
    href: '/blog/i-built-my-website-myself',
  },
  {
    title: 'The Art of Beginning Again',
    description: 'Beginning again does not require a dramatic overhaul—only one small, faithful turn toward what matters.',
    href: '/blog/the-art-of-beginning-again',
  },
  {
    title: '7 Gentle Journal Prompts for Releasing What No Longer Serves You',
    description: 'Seven gentle, faith-rooted prompts for setting down guilt, pressure, and what was never yours to carry.',
    href: '/blog/7-gentle-journal-prompts-for-releasing-what-no-longer-serves-you',
  },
  {
    title: 'A Gentle August Reset for the Woman Who Needs Room to Breathe',
    description: 'A soft August reflection for slowing down, making room to breathe, and beginning again with grace.',
    href: '/blog/gentle-august-reset',
  },
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
    <main className="site-shell" id="main-content">
      <SiteHeader />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Letters from the Glow</p>
          <h1>Stories, encouragement, and a quiet place to reflect.</h1>
          <p>Each Letter begins with something real, leaves you with one gentle prompt, and points you toward a journal when you want to go deeper.</p>
        </div>
        <aside className="hero-card" aria-label="Letters from the Glow welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">Read Slowly</p>
            <h2>Bring your coffee. Stay for the reminder.</h2>
            <p>Choose the Letter that meets you today.</p>
          </div>
        </aside>
      </section>
      <section className="section">
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="card editorial-card" key={post.href}>
              <p className="eyebrow">A Letter from the Glow</p>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a className="button secondary" href={post.href} aria-label={`Read the Letter: ${post.title}`}>Read the Letter</a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
