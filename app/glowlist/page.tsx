import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

const gumroadSubscribeUrl = 'https://lemdo8.gumroad.com/subscribe';
const gentleResetUrl = 'https://lemdo8.gumroad.com/l/dgk-gentle-pause';

export const metadata: Metadata = {
  title: 'Join the DGK Glowlist',
  description: 'Join the DGK Glowlist for faith-rooted notes, journaling prompts, product news, and gentle encouragement.',
  alternates: { canonical: '/glowlist' },
};

const glowlistNotes = [
  'Faith-rooted encouragement',
  'Journaling prompts',
  'Product and studio updates',
  'Simple reset reminders',
];

export default function GlowlistPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The DGK Glowlist</p>
          <h1>Gentle encouragement, delivered.</h1>
          <p>Receive faith-rooted notes, prompts, and product updates from DivaglamKreation.</p>
          <div className="hero-actions">
            <a className="button" href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
            <a className="button secondary" href={gentleResetUrl} target="_blank" rel="noopener noreferrer">Download the Free Journal</a>
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
          <a className="button" href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer">Subscribe on Gumroad</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
