import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import '../home.css';
import '../editorial-refresh.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story behind DivaglamKreation: faith, creativity, reflection, the Glow Owl, and the reminder that every woman matters.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero hero-home presentation-hero">
        <div className="hero-copy hero-copy-home">
          <p className="eyebrow">Behind the Glow</p>
          <h1 className="statement-hero">Who are you<span className="gold-period">?</span></h1>
          <p className="hero-lede">
            DivaglamKreation began in quiet moments with coffee nearby, something to sketch or write with,
            room to reflect, and one question that kept returning: Who are you when the noise gets quiet?
          </p>
          <div className="hero-proof" aria-label="DivaglamKreation foundations">
            <span>Every woman matters</span>
            <span>Faith-rooted reflection</span>
            <span>Creativity with purpose</span>
          </div>
        </div>

        <div className="presentation-panel" style={{ alignSelf: 'stretch' }}>
          <p className="eyebrow">A truth worth carrying</p>
          <h2>You mattered before anyone was looking.</h2>
          <p>
            Before the products, before the posts, and before anyone else could see what was growing,
            there was already value in the woman creating, reflecting, praying, and becoming.
          </p>
        </div>
      </section>

      <section className="section story-section" aria-labelledby="origin-title">
        <div className="story-question-wrap">
          <span className="story-rule" aria-hidden="true" />
          <p className="eyebrow">The Origin</p>
          <h2 id="origin-title">A quiet creative beginning.</h2>
          <span className="story-rule" aria-hidden="true" />
        </div>
        <div className="story-copy">
          <p>
            DGK grew from coffee, sketching, reflection, self-care, and faith — the kind of small, quiet moments
            that create room to listen inward. Those moments became a way of returning to creativity, identity,
            and God without rushing.
          </p>
          <p>
            The question <strong>“Who are you?”</strong> became part of that rhythm. Not who you are expected
            to be. Not who you think you should have become by now. Who are you underneath the noise?
          </p>
        </div>
      </section>

      <section className="section start-section presentation-panel" aria-labelledby="owl-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The Glow Owl</p>
            <h2 id="owl-title">A quiet companion to the question.</h2>
          </div>
          <p className="section-intro">A gentle reminder to know HOO you are.</p>
        </div>
        <div className="story-copy" style={{ marginBottom: '1.5rem' }}>
          <p>
            The Glow Owl grew alongside DGK as a reminder to pause, notice, and remember who you are beneath the noise.
            It carries the playful truth behind <strong>“know HOO you are”</strong> — that identity is worth tending to,
            even in quiet seasons when no one else is watching.
          </p>
        </div>
        <div className="journey-grid">
          <article className="journey-card">
            <span className="journey-number">01</span>
            <h3>Pause</h3>
            <p>Make space for coffee, prayer, reflection, and the thoughts you usually rush past.</p>
          </article>
          <article className="journey-card">
            <span className="journey-number">02</span>
            <h3>Remember</h3>
            <p>Return to the truth that your worth existed before recognition, productivity, or applause.</p>
          </article>
          <article className="journey-card">
            <span className="journey-number">03</span>
            <h3>Become</h3>
            <p>Keep growing gently through faith, creativity, reflection, and intentional care.</p>
          </article>
        </div>
      </section>

      <section className="section reset-feature-section" aria-labelledby="matters-title">
        <div className="reset-feature-copy" style={{ maxWidth: '760px' }}>
          <p className="eyebrow">The Heart of DGK</p>
          <h2 id="matters-title">Every woman matters.</h2>
          <p className="reset-feature-lede">
            That is the answer DivaglamKreation keeps returning to. Your value is not measured by how visible,
            productive, polished, or certain you feel. You are allowed to pause. You are allowed to begin again.
            You are allowed to become gently.
          </p>
          <p className="reset-feature-note">Faith. Flow. Flourish.</p>
          <div className="hero-actions">
            <a className="button" href="/#start">Begin the Free 3-Day Reset</a>
            <a className="button secondary" href="/glowlist">Join the Glowlist</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
