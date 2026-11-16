import Script from 'next/script';

import { pageMetadata } from '../metadata';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import '../home.css';
import '../editorial-refresh.css';

export const metadata = pageMetadata(
  'Letters from the Glow | Join the Glowlist',
  'Join the Glowlist for The 3-Day Pause, a free three-day reflection journal, and letters from DivaglamKreation.',
  '/glowlist',
  '/images/the-3-day-pause-owl-cover-20261107.webp'
);

const glowlistNotes = [
  'One short story or encouragement',
  'One gentle reflection prompt',
  'One journal link that fits the Letter',
];

export default function GlowlistPage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero" id="top" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
        <div className="hero-copy">
          <p className="eyebrow">Letters from the Glow</p>
          <h1>A gentle letter for the season you're in.</h1>
          <p>Join the Glowlist for The 3-Day Pause, a free three-day reflection journal, and letters from DivaglamKreation.</p>
        </div>
      </section>

      <section className="section glowlist-section glowlist-band" id="join" aria-labelledby="join-title">
        <div className="email-box presentation-glowlist glowlist-copy-only">
          <p className="script-accent">Join the Glowlist</p>
          <h2 id="join-title">Your free 3-Day Pause starts here.</h2>
          <div className="flodesk-inline-wrap">
            <div id="fd-form-6abe85f729e2cfa7a04f5774" />
            <Script
              id="flodesk-glowlist-page-form"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html:
                  "window.fd('form', { formId: '6abe85f729e2cfa7a04f5774', containerEl: '#fd-form-6abe85f729e2cfa7a04f5774' });",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section start-section">
        <p className="eyebrow">Inside Each Letter</p>
        <h2>Simple enough to keep showing up.</h2>
        <div className="product-grid">
          {glowlistNotes.map((note) => (
            <article className="card" key={note}><p>{note}</p></article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
