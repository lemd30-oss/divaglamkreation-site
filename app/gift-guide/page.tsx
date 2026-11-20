import Script from 'next/script';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { pageMetadata } from '../metadata';
import '../home.css';
import '../editorial-refresh.css';

const giftGuideDescription =
  "A gentle holiday gift guide for the women you love: faith-rooted journals and small gifts under $10. Faith. Flow. Flourish.";

export const metadata = pageMetadata(
  'Faith. Flow. Flourish. — A Gentle Guide to Giving | DivaglamKreation',
  giftGuideDescription,
  '/gift-guide',
);

export default function GiftGuidePage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero hero-home presentation-hero">
        <div className="hero-copy hero-copy-home">
          <h1 className="statement-hero">A Gentle Guide to Giving</h1>
          <p className="script-accent">Faith. Flow. Flourish.</p>
          <p className="hero-lede">For the women who deserve to feel seen, appreciated, and remembered.</p>
        </div>

        <div className="presentation-panel" style={{ alignSelf: 'stretch' }}>
          <p>
            These pieces carry a truth from the Glow Owl story: every woman matters. Choose something meaningful for your sister, friend, mother, or yourself.
          </p>
        </div>
      </section>

      <section className="section start-section presentation-panel" aria-labelledby="under-ten-title">
        <div className="section-heading-row">
          <div>
            <h2 id="under-ten-title">Under $10</h2>
            <p className="section-intro"><em>Thoughtful gestures, lasting meaning.</em></p>
          </div>
        </div>

        <div className="journey-grid journey-grid-two">
          <article className="journey-card">
            <h3>Dragonfly Reminder Charm — $9.99</h3>
            <p>A pink rhinestone dragonfly with a gold-tone keyring and clasp — a giftable symbol of growth, light, and transformation. Clips to keys, handbags, planners, or journal pouches. For the woman spreading her wings.</p>
            <a className="text-link" href="https://divaglamkreation.com/dragonfly-keychain">Shop the Dragonfly Reminder Charm</a>
          </article>
        </div>
      </section>

      <section className="section reset-feature-section" aria-labelledby="paperback-gift-title">
        <div className="reset-feature-copy" style={{ maxWidth: '860px' }}>
          <p className="eyebrow">Prefer a book you can hold?</p>
          <h2 id="paperback-gift-title">The Gentle Reset — 7-Day Guided Paperback</h2>
          <p className="section-intro">A seven-day paperback for prayer and reflection. DivaglamKreation is preparing it for direct orders.</p>
          <div className="hero-actions">
            <span className="button secondary" role="status">Coming Soon</span>
            <a className="text-link" href="/products/the-gentle-reset">View journal details →</a>
          </div>
        </div>
      </section>

      <section className="section glowlist-section glowlist-band" aria-labelledby="closing-title">
        <div className="email-box presentation-glowlist glowlist-copy-only">
          <h2 id="closing-title">For the woman on your heart.</h2>
          <p>Receive the free 3-Day Pause and Letters from the Glow twice a month when you join the Glowlist.</p>
          <div className="flodesk-inline-wrap">
            <div id="fd-form-6abe85f729e2cfa7a04f5774" />
            <Script
              id="flodesk-gift-guide-form"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html:
                  "window.fd('form', { formId: '6abe85f729e2cfa7a04f5774', containerEl: '#fd-form-6abe85f729e2cfa7a04f5774' });",
              }}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
