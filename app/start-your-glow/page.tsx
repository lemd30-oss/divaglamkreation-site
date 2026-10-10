import Image from 'next/image';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { links, products, images } from '../home-content';
import { pageMetadata } from '../metadata';
import '../home.css';
import '../editorial-refresh.css';
import './start-your-glow.css';

export const metadata = pageMetadata(
  'Start Your Glow | DivaglamKreation',
  'Begin with a free 3-Day Mini Reset Journal and discover a gentle, faith-rooted path to reflection.',
  '/start-your-glow'
);

export default function StartYourGlow() {
  const free = products.find((product) => product.title === '3-Day Mini Reset Journal');
  const seven = products.find((product) => product.title === 'The Gentle Reset');
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />
      <div className="start-glow-page">
        <section className="start-glow-hero" aria-labelledby="glow-heading">
          <Image src="/images/brand/glow-owl.png" alt="The original DivaglamKreation Glow Owl" width={855} height={1186} className="start-glow-owl" priority />
          <p className="eyebrow">Faith · Reflection · Creativity</p>
          <h1 id="glow-heading">Your Glow Begins Here</h1>
          <p>A quiet place to reconnect with yourself, one gentle moment at a time.</p>
          <a className="button" href="#begin">Begin with three quiet days</a>
        </section>
        <section className="start-glow-story" aria-labelledby="glow-story-heading">
          <Image src={images.hero} alt="DivaglamKreation coffee, candle, and journaling scene" width={1000} height={720} className="start-glow-photo" />
          <div>
            <p className="eyebrow">Behind the Glow</p>
            <h2 id="glow-story-heading">It started with a question: Who are you?</h2>
            <p>An owl canvas asked a question I couldn't stop thinking about. The Glow Owl became my companion in quiet moments of coffee, creativity, and reflection.</p>
            <p>And the answer became the heart of DivaglamKreation: every woman matters.</p>
            <a className="text-link" href="/about">Read our story →</a>
          </div>
        </section>
        <section id="begin" className="start-glow-products" aria-labelledby="glow-products-heading">
          <p className="eyebrow">Your gentle first step</p>
          <h2 id="glow-products-heading">Start with three quiet days.</h2>
          <p>No pressure. Just a little space to pause, pray, and reflect.</p>
          <div className="start-glow-product-grid">
            {free && <article className="start-glow-product">
              <Image src={free.image} alt={free.imageAlt} width={520} height={650} className="start-glow-product-image" />
              <p className="eyebrow">Step 1 · Free</p>
              <h3>{free.title}</h3><p>{free.description}</p>
              <a className="button" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Get the Free Journal</a>
            </article>}
            {seven && <article className="start-glow-product">
              <Image src={seven.image} alt={seven.imageAlt} width={520} height={650} className="start-glow-product-image" />
              <p className="eyebrow">Step 2 · Go deeper</p>
              <h3>{seven.title}</h3><p>{seven.description}</p>
              <a className="button secondary" href={links.graceNotesDigital} target="_blank" rel="noopener noreferrer">Explore the 7-Day Journal · $9</a>
            </article>}
          </div>
        </section>
        <section className="start-glow-closing"><p>You mattered before anyone was looking.</p><a className="text-link" href="/glowlist">Stay connected with the Glowlist →</a></section>
      </div>
      <SiteFooter />
    </main>
  );
}
