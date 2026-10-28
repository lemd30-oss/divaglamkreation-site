import { pageMetadata } from '../metadata';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { links } from '../home-content';

const glowlistSignupUrl = links.gumroadSubscribe;
const freeResetUrl = links.gentleReset;

export const metadata = pageMetadata(
  'Letters from the Glow | Join the Glowlist',
  'Join the Glowlist for The 3-Day Pause, a free three-day reflection journal, and letters from DivaglamKreation.',
  '/glowlist',
  '/images/brand/glow-owl.png'
);

const glowlistNotes = [
  'One short story or encouragement',
  'One gentle reflection prompt',
  'One journal link that fits the Letter',
];

export default function GlowlistPage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader glowlistSignupUrl={glowlistSignupUrl} />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Letters from the Glow</p>
          <h1>A gentle letter for the season you're in.</h1>
          <p>Join the Glowlist for The 3-Day Pause, a free three-day reflection journal, and letters from DivaglamKreation.</p>
          <div className="hero-actions">
            <a className="button" href={glowlistSignupUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
            <a className="button secondary" href={freeResetUrl}>Get The 3-Day Pause — Free</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Letters from the Glow welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">About Five Minutes</p>
            <h2>One story. One prompt. One journal path.</h2>
            <p>A gentle rhythm that keeps the story personal and the next step gentle.</p>
          </div>
        </aside>
      </section>

      <section className="section start-section">
        <p className="eyebrow">Inside Each Letter</p>
        <h2>Simple enough to keep showing up.</h2>
        <div className="product-grid">
          {glowlistNotes.map((note) => (
            <article className="card" key={note}><p>{note}</p></article>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button" href={glowlistSignupUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
