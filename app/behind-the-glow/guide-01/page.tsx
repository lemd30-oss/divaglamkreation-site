import { pageMetadata } from '../../metadata';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import '../../home.css';
import '../../editorial-refresh.css';

export const metadata = {
  ...pageMetadata(
    'Create Your First Simple Journal in Canva — Behind the Glow Guide 01',
    'A gentle, beginner-friendly 13-page PDF guide to creating your first simple journal with Canva Free. By DivaglamKreation.',
    '/behind-the-glow/guide-01'
  ),
  robots: { index: false, follow: false }, // Remove only when the verified purchase link is wired and the launch is approved.
};

const lessons = [
  'Start with Canva Free and recognize optional paid features',
  'Design a simple journal cover and three writing pages',
  'Use a six-page starter outline to keep your design consistent',
  'Download, proof, and save your finished journal as a PDF',
  'Learn the basics of Canva licensing and Gumroad fees',
];

export default function BehindTheGlowGuide01Page() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />
      <section className="hero" aria-labelledby="guide-title">
        <div className="hero-copy">
          <p className="eyebrow">Behind the Glow · Beginner Creative Guide 01</p>
          <h1 id="guide-title">Create Your First Simple Journal in Canva</h1>
          <p className="hero-lede">A gentle beginner’s guide to making your first digital journal, one page at a time.</p>
          <p>I learned to make journals by starting small, making mistakes, and finding my way through Canva. This is the practical starting point I wanted when I began building DivaglamKreation: clear steps, honest notes about optional costs, and room to learn at your own pace.</p>
          <p className="trust-note"><strong>13-page instructional PDF · Planned price $7 · Created by DivaglamKreation</strong></p>
          <div className="hero-actions">
            <span className="button secondary" role="status">Purchase link being finalized</span>
            <a className="text-link" href="/glowlist">Join the Glowlist for updates →</a>
          </div>
          <p className="trust-note">This is a learning guide, not an editable Canva template or a ready-made journal. Nothing physical is shipped.</p>
        </div>
        <aside className="hero-card" aria-label="Guide cover typography preview">
          <div className="hero-card-inner" style={{ background: '#faf6ef', borderColor: '#cfab60', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', textAlign: 'center', padding: 'clamp(1.4rem, 4vw, 3rem)' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Behind the Glow</p>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', margin: 0 }}>BEGINNER CREATIVE GUIDE 01</p>
            <span style={{ width: 64, height: 2, background: '#c9a15c', display: 'block', margin: '0.6rem auto' }} aria-hidden="true" />
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.8rem)', lineHeight: 1.16, maxWidth: 330, margin: 0 }}>Create Your First Simple Journal in Canva</h2>
            <p style={{ maxWidth: 250, margin: 0 }}>A gentle, step-by-step guide</p>
            <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>DivaglamKreation</p>
            <p style={{ fontSize: '0.9rem', color: '#88672e', margin: 0 }}>Faith. Flow. Flourish.</p>
          </div>
        </aside>
      </section>
      <section className="section" aria-labelledby="inside-title">
        <p className="eyebrow">What you’ll learn</p>
        <h2 id="inside-title">One simple page becomes a journal.</h2>
        <p>Designed for beginners who want to make something useful without paying for features they don’t need.</p>
        <ul>{lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul>
      </section>
      <section className="section presentation-panel" aria-labelledby="before-title">
        <h2 id="before-title">Before you begin</h2>
        <p>Bring your ideas, a quiet moment, and a free Canva account. The instructions explain when a feature costs extra and how to keep going without it.</p>
        <p>Good things can begin with a single thoughtful page. You mattered before anyone was looking.</p>
      </section>
      <section className="section" aria-labelledby="faq-title">
        <h2 id="faq-title">A few helpful details</h2>
        <details className="details-card">
          <summary>Do I need Canva Pro?</summary>
          <p>No. The beginner project can be completed with Canva Free. The guide explains optional paid features.</p>
        </details>
        <details className="details-card">
          <summary>Will I receive a journal template?</summary>
          <p>No. This is a 13-page instructional PDF that teaches you to make a simple journal in Canva.</p>
        </details>
        <details className="details-card">
          <summary>How will I receive the guide?</summary>
          <p>When the checkout is available, the PDF will be delivered digitally through Gumroad after purchase.</p>
        </details>
        <p style={{ marginTop: '2rem' }}><a className="text-link" href="/shop">← Explore the DGK Collection</a></p>
      </section>
      <SiteFooter />
    </main>
  );
}
