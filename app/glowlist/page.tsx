import { pageMetadata } from '../metadata';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { links } from '../home-content';

const glowlistSignupUrl = links.gumroadSubscribe;
const freeResetUrl = links.gentleReset;

export const metadata = pageMetadata("Join the DGK Glowlist", "Join the DGK Glowlist for faith-rooted notes, journaling prompts, product news, and gentle encouragement.", "/glowlist", "/images/brand/glow-owl.png");

const glowlistNotes = [
  'Faith-rooted encouragement',
  'Journaling prompts',
  'Product and studio updates',
  'Simple reset reminders',
];

export default function GlowlistPage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The DGK Glowlist</p>
          <h1>Gentle encouragement, delivered.</h1>
          <p>Receive faith-rooted notes, prompts, and product updates from DivaglamKreation.</p>
          <div className="hero-actions">
            <a className="button" href={glowlistSignupUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
            <a className="button secondary" href={freeResetUrl} target="_blank" rel="noopener noreferrer">Get the Free 3-Day Mini Reset Journal</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Glowlist welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">Begin Softly</p>
            <h2>One note. One prompt. One next step.</h2>
            <p>A simple way to stay connected to encouragement and new DGK releases.</p>
          </div>
        </aside>
      </section>

      <section className="section start-section">
        <p className="eyebrow">What You’ll Receive</p>
        <h2>A quieter inbox.</h2>
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
