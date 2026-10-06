import { pageMetadata } from '../metadata';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { ProductCard } from '../components/ProductCard';
import { products } from '../home-content';
import '../home.css';
import '../editorial-refresh.css';

const description = "A gentle holiday gift guide for the women you love: faith-rooted journals and small gifts under $10, plus one keepsake hardcover she'll write in all year. Faith. Flow. Flourish.";

export const metadata = pageMetadata(
  'Faith. Flow. Flourish. — A Gentle Guide to Giving | DivaglamKreation',
  description,
  '/gift-guide',
);

const thoughtfulGifts = products.filter((product) =>
  ['3-Day Mini Reset Journal', 'Gentle Morning Reset Pack', 'Dragonfly Reminder Charm'].includes(product.title),
);
const keepsakeJournal = products.find((product) => product.title === 'Reflections');

export default function GiftGuidePage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero hero-home presentation-hero">
        <div className="hero-copy hero-copy-home">
          <p className="eyebrow">Faith. Flow. Flourish.</p>
          <h1 className="statement-hero">A Gentle Guide to Giving</h1>
          <p className="hero-lede">
            Some gifts say &quot;I love you.&quot; These say something quieter: I see you. Slow down with me.
          </p>
          <p className="hero-lede">
            Every gift below was created to help a woman pause, breathe, and remember she matters —
            with faith-rooted pages and meaningful keepsakes made for the life she is living.
          </p>
        </div>
        <aside className="presentation-panel" style={{ alignSelf: 'stretch', padding: '2rem' }}>
          <p className="eyebrow">A thoughtful place to begin</p>
          <h2>Give her a little room to breathe.</h2>
          <p>
            Whether she needs a quiet starting point, a small reminder she can carry, or a journal
            to return to all year, choose the gift that meets her where she is.
          </p>
        </aside>
      </section>

      <section className="section shop-section" aria-labelledby="small-gifts-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Small gifts, meaningful beginnings</p>
            <h2 id="small-gifts-title">A gentle reminder under $10.</h2>
          </div>
          <p className="section-intro">
            Thoughtful, faith-rooted gifts for a friend, sister, mother, or the woman who could use
            a quiet moment for herself.
          </p>
        </div>
        <div className="product-grid shop-grid">
          {thoughtfulGifts.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
      </section>

      {keepsakeJournal ? (
        <section className="section reset-feature-section" aria-labelledby="keepsake-title">
          <div className="reset-feature-copy">
            <p className="eyebrow">A keepsake for the year ahead</p>
            <h2 id="keepsake-title">A hardcover she can write in all year.</h2>
            <p className="reset-feature-lede">{keepsakeJournal.description}</p>
            <p className="trust-note">A 144-page hardcover journal · From $29.99 on Amazon</p>
            <div className="hero-actions">
              <a className="button" href={keepsakeJournal.href} target="_blank" rel="noopener noreferrer">
                Explore Reflections on Amazon
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img
              src={keepsakeJournal.image}
              alt={keepsakeJournal.imageAlt}
              style={{ display: 'block', width: '100%', maxHeight: '460px', objectFit: 'contain' }}
            />
          </div>
        </section>
      ) : null}

      <section className="section start-section presentation-panel">
        <p className="eyebrow">A note from DivaglamKreation</p>
        <h2>Every woman matters.</h2>
        <p>
          May this gift give her a little space to hear herself, tend to her faith, and remember
          the woman she is becoming.
        </p>
        <a className="button secondary" href="/#shop">Explore the DGK collection</a>
      </section>

      <SiteFooter />
    </main>
  );
}
