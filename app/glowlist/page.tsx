import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

const gumroadSubscribeUrl = 'https://divaglamkreation.myflodesk.com';
const gentleResetUrl = 'https://lemdo8.gumroad.com/l/dgk-gentle-pause';

export const metadata: Metadata = {
  title: 'Join the DGK Glowlist',
  description: 'Join the DGK Glowlist for gentle reflection prompts, faith-rooted encouragement, behind-the-glow notes, and quiet reminders for your becoming.',
  alternates: { canonical: '/glowlist' },
};

const glowlistNotes = [
  'Gentle reflection prompts',
  'Faith-rooted encouragement',
  'Behind-the-glow notes',
  'Quiet reset reminders',
];

export default function GlowlistPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Stay close to the glow</p>
          <h1>Your reset doesn’t have to end here.</h1>
          <p>Join the DGK Glowlist for gentle reflection prompts, faith-rooted encouragement, behind-the-glow notes, and quiet reminders to keep making space for who you are becoming.</p>
          <div className="hero-actions">
            <a className="button" href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
            <a className="button secondary" href={gentleResetUrl} target="_blank" rel="noopener noreferrer">Begin the Free 3-Day Reset</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Glowlist welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">A gentle place to return</p>
            <h2>One note. One prompt. One quiet reminder.</h2>
            <p>A simple way to stay connected to faith, reflection, creativity, and the woman you are becoming.</p>
          </div>
        </aside>
      </section>

      <section className="section start-section">
        <p className="eyebrow">What You’ll Receive</p>
        <h2>Encouragement with room to breathe.</h2>
        <div className="product-grid">
          {glowlistNotes.map((note) => (
            <article className="card" key={note}><p>{note}</p></article>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button" href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
