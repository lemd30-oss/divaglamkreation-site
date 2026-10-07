import Script from 'next/script';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { pageMetadata } from '../metadata';
import '../home.css';
import '../editorial-refresh.css';

const giftGuideDescription =
  "A gentle holiday gift guide for the women you love: faith-rooted journals and small gifts under $10, plus one keepsake hardcover she'll write in all year. Faith. Flow. Flourish.";

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
          <h1 className="statement-hero">Faith. Flow. Flourish.</h1>
          <p className="script-accent">A Gentle Guide to Giving</p>
          <p className="hero-lede">Some gifts say &quot;I love you.&quot; These say something quieter: I see you. Slow down with me.</p>
        </div>

        <div className="presentation-panel" style={{ alignSelf: 'stretch' }}>
          <p>
            Every gift below was created to help a woman pause, breathe, and remember she matters — whether she&apos;s your sister, your best friend, your mom, or the woman in the mirror. Give faith. Give a moment of calm. Give her permission to begin again.
          </p>
        </div>
      </section>

      <section className="section start-section presentation-panel" aria-labelledby="under-ten-title">
        <div className="section-heading-row">
          <div>
            <h2 id="under-ten-title">Under $10</h2>
            <p className="section-intro"><em>Small gifts, gently given.</em></p>
          </div>
        </div>

        <div className="journey-grid journey-grid-two">
          <article className="journey-card">
            <h3>3-Day Mini Reset Journal — Free</h3>
            <p>Three days of short, gentle prompts to slow down and begin again. Delivered instantly as a digital journal. Give it to her — or start it yourself first.</p>
            <a className="text-link" href="https://divaglamkreation.com/products/the-3-day-pause">Get the free journal</a>
          </article>

          <article className="journey-card">
            <h3>Gentle Morning Reset Pack — $7</h3>
            <p>Soft printable reflection pages to help her begin the day with faith, calm, clarity, and care. A small gift for the woman who does everything for everyone else.</p>
            <a className="text-link" href="https://divaglamkreation.com/products/gentle-morning-reset-pack">Shop the Gentle Morning Reset Pack</a>
          </article>

          <article className="journey-card">
            <h3>The Gentle Reset — $9</h3>
            <p>Seven guided days of quiet reflection, prayer, and renewal in an instant digital download. For when three days opened something she wants to keep exploring.</p>
            <a className="text-link" href="https://divaglamkreation.com/products/the-gentle-reset">Shop The Gentle Reset</a>
          </article>

          <article className="journey-card">
            <h3>Dragonfly Reminder Charm — $9.99</h3>
            <p>A pink rhinestone dragonfly with a gold-tone keyring and clasp — a giftable symbol of growth, light, and transformation. Clips to keys, handbags, planners, or journal pouches. For the woman spreading her wings.</p>
            <a className="text-link" href="https://divaglamkreation.com/dragonfly-keychain">Shop the Dragonfly Reminder Charm</a>
          </article>
        </div>
      </section>

      <section className="section reset-feature-section" aria-labelledby="keepsake-title">
        <div className="reset-feature-copy" style={{ maxWidth: '860px' }}>
          <h2 id="keepsake-title">From $29.99</h2>
          <p className="section-intro"><em>One keepsake, made to last past the season.</em></p>
          <h3>Reflections — Hardcover Journal — From $29.99 (hardcover, via Amazon)</h3>
          <p className="reset-feature-lede">A 144-page hardcover journal with 63 prompts for rest, reset, and renewal, with the Glow Owl beside her through each season. The keepsake gift — the one she&apos;ll still be writing in next year. Order by Amazon&apos;s holiday shipping cutoff; digital gifts above have no cutoff and arrive instantly.</p>
          <div className="hero-actions">
            <a className="button" href="https://divaglamkreation.com/products/reflections">Shop Reflections</a>
            <a className="button secondary" href="https://www.amazon.com/dp/B0HK1G42HF">Reflections on Amazon</a>
          </div>
        </div>
      </section>

      <section className="section glowlist-section glowlist-band" aria-labelledby="closing-title">
        <div className="email-box presentation-glowlist glowlist-copy-only">
          <h2 id="closing-title">Closing</h2>
          <p>Whatever she carries this season, she doesn&apos;t have to carry it alone. Faith. Flow. Flourish. — because every woman matters.</p>
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
          <p><em>P.S. Want the first look at new journals and a weekly prompt in your inbox? Join the list above.</em></p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
