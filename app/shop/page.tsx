import { pageMetadata } from '../metadata';
import { ProductCard } from '../components/ProductCard';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { products } from '../home-content';
import '../home.css';
import '../editorial-refresh.css';

export const metadata = pageMetadata(
  'The Collection | DivaglamKreation',
  'Faith-rooted journals and meaningful gifts for real-life pauses, reflection, rest, reset, and renewal.',
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
            Every journal here began with one question: <em>Who are you beneath everything you carry?</em> Explore guided journals and meaningful gifts created to remind her she matters.
          </p>
        </div>
      </section>

      <section className="section shop-section" aria-labelledby="start-here-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The Gentle Reset</p>
            <h2 id="start-here-title">A quiet journal, coming soon.</h2>
          </div>
          <p className="section-intro">Seven guided days of reflection and renewal in a printed journal, being prepared for direct ordering through DivaglamKreation.</p>
        </div>
        <div className="product-grid shop-grid">
          <ProductCard product={gentleReset} />
        </div>
      </section>

      <section className="section shop-section" aria-labelledby="journals-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Journals</p>
            <h2 id="journals-title">For mornings, reflection, and becoming.</h2>
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
            <h3>Choose a gentle gift with meaning.</h3>
            <p>Browse journal-and-gift ideas for the woman who needs rest, encouragement, or a quiet reminder that she matters.</p>
            <a className="button secondary" href="/gift-guide">Open the Gift Guide</a>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
