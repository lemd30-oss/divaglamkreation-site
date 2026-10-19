import Image from 'next/image';
import { pageMetadata } from '../../metadata';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import '../../home.css';
import '../../editorial-refresh.css';

export const metadata = pageMetadata(
  'Create Your First Simple Journal in Canva — Behind the Glow Guide 01',
  'A gentle 13-page beginner guide from DivaglamKreation. Learn how to design a simple journal in Canva Free, with no hidden steps or unexpected upgrades.',
  '/behind-the-glow/guide-01'
);

// Add only the verified, published Gumroad product URL here.
// Do not link to a Drive PDF; that PDF is the paid customer delivery file.
const gumroadCheckoutUrl: string | null = null;

const lessons = [
  'Open Canva Free and make your first US Letter design.',
  'Create a simple cover and three writing pages.',
  'Use a six-page sample structure to organize your journal.',
  'Keep fonts, colors, and spacing calm and consistent.',
  'Download and check your journal as a PDF.',
  'Recognize optional paid tools and understand basic selling fees and licenses.',
];

export default function BehindTheGlowGuide01Page() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero" aria-labelledby="guide-title">
        <div className="hero-copy">
          <p className="eyebrow">Behind the Glow · Beginner Creative Guide 01</p>
          <h1 id="guide-title">Create Your First Simple Journal in Canva</h1>
          <p className="hero-lede">A gentle beginner’s guide to creating your first digital journal, one page at a time.</p>
          <p>
            I learned Canva by starting small, making mistakes, and figuring out the steps that
            other tutorials sometimes skipped. I created this guide so you can begin with more
            clarity, see what is free, and understand when a feature may cost extra.
          </p>
          <p className="trust-note"><strong>13-page teaching guide · Digital PDF · $7 · By DivaglamKreation</strong></p>
          <div className="hero-actions">
            {gumroadCheckoutUrl ? (
              <a className="button" href={gumroadCheckoutUrl} target="_blank" rel="noopener noreferrer">
                Buy the digital guide on Gumroad · $7
              </a>
            ) : (
              <span className="button secondary" role="status">Gumroad checkout being prepared</span>
            )}
            <a className="text-link" href="/glowlist">Explore the Glowlist →</a>
          </div>
          <p className="trust-note">
            This product is a guide that teaches you how to make a journal. It is not a ready-made
            journal or editable Canva template. No physical item is shipped.
            {gumroadCheckoutUrl ? ' The PDF is delivered after purchase through Gumroad.' : ' Purchasing will open after the Gumroad listing is published.'}
          </p>
        </div>
        <aside className="hero-card" aria-label="Behind the Glow Guide 01 cover preview">
          <Image
            src="/images/products/behind-the-glow-guide-01-cover.svg"
            width={700}
            height={900}
            alt="Cream, coffee-brown, and soft-gold Behind the Glow cover: Create Your First Simple Journal in Canva, by DivaglamKreation."
            style={{ display: 'block', width: '100%', height: 'auto', maxHeight: 620, objectFit: 'contain' }}
            priority
          />
        </aside>
      </section>

      <section className="section" aria-labelledby="learn-heading">
        <p className="eyebrow">What you’ll learn</p>
        <h2 id="learn-heading">One thoughtful page can become a journal.</h2>
        <p>
          These are the small practical steps I wish I had seen together when I first started creating.
          The guide follows a Canva Free path and explains premium tools rather than surprising you with them.
        </p>
        <ul>{lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul>
      </section>

      <section className="section presentation-panel" aria-labelledby="promise-heading">
        <p className="eyebrow">The Behind the Glow promise</p>
        <h2 id="promise-heading">No hidden steps. No unnecessary spending.</h2>
        <p>Just what I’ve learned, shared with care.</p>
        <p>You don’t need Canva Pro to complete the simple journal in this beginner guide.</p>
      </section>

      <section className="section" aria-labelledby="details-heading">
        <h2 id="details-heading">Before you begin</h2>
        <details className="details-card">
          <summary>Do I need a paid Canva plan?</summary>
          <p>No. The journal you make in this guide can be created using Canva Free. Some features and assets are optional paid extras; the guide explains how to keep going without them.</p>
        </details>
        <details className="details-card">
          <summary>What do I receive?</summary>
          <p>One 13-page US Letter instructional PDF with guided steps, a sample six-page journal outline, information about Free and paid tools, selling basics, and a final checklist. It is not a Canva template.</p>
        </details>
        <details className="details-card">
          <summary>How will I get my guide?</summary>
          <p>The digital PDF will be delivered through Gumroad after checkout is published. No file is delivered through this website page.</p>
        </details>
        <p style={{ marginTop: '2rem' }}>
          <a className="text-link" href="/shop">← Return to the DivaglamKreation Collection</a>
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
