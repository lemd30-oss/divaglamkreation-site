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
  const threeDay = byTitle('3-Day Mini Reset Journal');
  const gentleReset = byTitle('The Gentle Reset');
  const morningReset = byTitle('Gentle Morning Reset Pack');
  const reflections = byTitle('Reflections');
  const dragonfly = byTitle('Dragonfly Reminder Charm');

  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">The Collection</p>
          <h1>Tools for real-life pauses.</h1>
          <p>
            Every journal here began with one question: <em>Who are you beneath everything you carry?</em> Start free,
            go deeper when you're ready, or give one to a woman who needs to hear she matters.
          </p>
        </div>
        <aside className="hero-card" aria-label="Collection welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">Begin Gently</p>
            <h2>You don't have to choose everything at once.</h2>
            <p>Start with the free journal, then follow the season you're in.</p>
          </div>
        </aside>
      </section>

      <section className="section shop-section" aria-labelledby="start-here-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Start Here</p>
            <h2 id="start-here-title">A simple place to begin.</h2>
          </div>
          <p className="section-intro">Three quiet days first. Seven when you're ready for more room.</p>
        </div>
        <div className="product-grid shop-grid">
          <ProductCard product={threeDay} />
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
          <ProductCard product={morningReset} />
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

      <section className="section shop-section" aria-labelledby="guides-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Behind the Glow · Creative Guides</p>
            <h2 id="guides-title">Learn a little of what I’ve learned.</h2>
          </div>
          <p className="section-intro">Gentle tutorials that tell you which steps are free and where paid tools may appear.</p>
        </div>
        <div className="product-grid shop-grid">
          <article className="card editorial-card">
            <p className="eyebrow">Beginner Creative Guide 01</p>
            <h3>Create Your First Simple Journal in Canva</h3>
            <p>
              A 13-page step-by-step PDF guide to making a simple journal with Canva Free.
              Learn covers, writing pages, exporting, and what to do if Canva asks you to pay.
            </p>
            <p className="trust-note"><strong>$7 · Digital learning guide · Gumroad checkout being prepared</strong></p>
            <a className="button secondary" href="/behind-the-glow/guide-01">Explore the beginner guide</a>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
