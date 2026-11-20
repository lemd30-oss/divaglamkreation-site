import { pageMetadata } from '../metadata';
import { ProductCard } from '../components/ProductCard';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { products } from '../home-content';
import '../home.css';
import '../editorial-refresh.css';

export const metadata = pageMetadata(
  'The Collection | DivaglamKreation',
  'Faith-rooted journals and thoughtful gifts that encourage rest, self-worth, and reflection.',
  '/shop'
);

const byTitle = (title: string) => products.find((product) => product.title === title)!;

export default function ShopPage() {
  const gentleReset = byTitle('The Gentle Reset');
  const reflections = byTitle('Reflections');
  const dragonfly = byTitle('Dragonfly Reminder Charm');

  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
        <div className="hero-copy">
          <p className="eyebrow">The Collection</p>
          <h1>Tools for real-life pauses.</h1>
          <p>
            The collection grew from one question: <em>Who are you beneath everything you carry?</em> Each piece is a reminder that you matter.
          </p>
        </div>
      </section>

      <section className="section shop-section" aria-labelledby="start-here-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The Gentle Reset</p>
            <h2 id="start-here-title">A little space to begin again.</h2>
          </div>
          <p className="section-intro">A printed companion for prayer and personal growth, with direct ordering planned through DivaglamKreation.</p>
        </div>
        <div className="product-grid shop-grid">
          <ProductCard product={gentleReset} />
        </div>
      </section>

      <section className="section shop-section" aria-labelledby="journals-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Journals</p>
            <h2 id="journals-title">Pages to revisit as you grow.</h2>
          </div>
        </div>
        <div className="product-grid shop-grid">
          <ProductCard product={reflections} />
        </div>
      </section>

      <section className="section shop-section" aria-labelledby="gifts-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Gifts</p>
            <h2 id="gifts-title">Small reminders that say: you matter.</h2>
          </div>
        </div>
        <div className="product-grid shop-grid">
          <ProductCard product={dragonfly} />
          <article className="card editorial-card">
            <p className="eyebrow">Gift Guide</p>
            <h3>Something thoughtful, just for her.</h3>
            <p>Explore keepsakes and reading gifts for the women you love.</p>
            <a className="button secondary" href="/gift-guide">Open the Gift Guide</a>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
