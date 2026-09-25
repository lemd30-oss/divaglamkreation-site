'use client';

import Image from 'next/image';

import { ProductCard } from './components/ProductCard';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { blogPosts, images, links, products } from './home-content';
import './home.css';
import './editorial-refresh.css';

export default function Home() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero hero-home presentation-hero" id="top">
        <div className="hero-copy hero-copy-home">
          <Image className="hero-owl" src="/images/brand/glow-owl.png" alt="" width={855} height={1186} sizes="64px" priority />
          <h1 className="statement-hero">Who are you<span className="gold-period">?</span></h1>
          <p className="hero-lede">
            You mattered before anyone was looking. DivaglamKreation makes journals and meaningful gifts to help you remember it.
          </p>
          <div className="hero-actions">
            <a className="button" href={links.gentleReset} target="_blank" rel="noopener noreferrer">
              Begin The 3-Day Pause
            </a>
            <a className="button secondary" href="#shop">Explore DGK</a>
          </div>
        </div>

        <div className="hero-image-wrap presentation-image-card">
          <Image
            src={images.hero}
            alt="A Faith. Flow. Flourish. mug of coffee, a lit candle, and an open journal that reads Be still, God is working"
            fill
            priority
            sizes="(max-width: 820px) 100vw, (max-width: 1120px) 50vw, 560px"
            className="cover-image hero-cover-image"
          />
          <div className="image-note">
            <strong className="script-accent">Faith. Flow. Flourish.</strong>
          </div>
        </div>
      </section>

      <section className="section start-section presentation-panel" id="start">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Begin Here</p>
            <h2>Start with three quiet days.</h2>
          </div>
          <p className="section-intro">Free. No pressure. Just you, your coffee, and God.</p>
        </div>
        <div className="journey-grid journey-grid-two">
          <article className="journey-card">
            <span className="journey-number">Step 1 · Free</span>
            <h3>The 3-Day Pause</h3>
            <p>Short daily prompts to slow down and hear yourself again.</p>
            <a className="text-link" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Begin The 3-Day Pause →</a>
          </article>
          <article className="journey-card">
            <span className="journey-number">Step 2 · Go deeper</span>
            <h3>The Gentle Reset</h3>
            <p>Seven days, when you’re ready for more room.</p>
            <a className="text-link" href="#glow-reset">Continue into 7 days →</a>
          </article>
        </div>
      </section>

      <section className="section story-section" id="about" aria-labelledby="story-question">
        <div className="story-question-wrap">
          <Image className="story-owl" src="/images/brand/glow-owl.png" alt="The Glow Owl" width={855} height={1186} sizes="(max-width: 820px) 150px, 200px" />
          <span className="story-rule" aria-hidden="true" />
          <p className="eyebrow">Behind the Glow</p>
          <h2 id="story-question">It started with an owl.</h2>
          <span className="story-rule" aria-hidden="true" />
        </div>
        <div className="story-copy">
          <p>An owl canvas asked me a question I couldn’t stop thinking about: Who are you?</p>
          <p>The Glow Owl became my companion to that question, and the answer became the heart of everything I make: every woman matters.</p>
          <a className="text-link" href="/about">Read the full DGK story →</a>
        </div>
      </section>

      <section className="section reset-feature-section" id="glow-reset" aria-labelledby="glow-reset-title">
        <div className="reset-feature-image-wrap">
          <Image
            src="/images/the-gentle-reset-book-cover.svg"
            alt="The Gentle Reset 7-day journal cover"
            width={760}
            height={980}
            className="reset-feature-image"
          />
        </div>
        <div className="reset-feature-copy">
          <h2 id="glow-reset-title">Three days helped you pause. Seven will help you listen.</h2>
          <p className="reset-feature-lede">Same rhythm, more room. A 7-day digital PDF journal for when three days opened something you want to keep exploring.</p>
          <p className="reset-feature-note">No rushing your becoming.</p>
          <div className="hero-actions">
            <a className="button" href={links.graceNotesDigital} target="_blank" rel="noopener noreferrer">Get the Digital Journal · $9</a>
          </div>
        </div>
      </section>

      <section className="section shop-section" id="shop">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The Collection</p>
            <h2>Tools for real-life pauses.</h2>
          </div>
          <p className="section-intro">Digital journals, the Reflections hardcover, and meaningful gifts.</p>
        </div>
        <p className="shop-trust">Instant digital delivery · Secure checkout · Thoughtfully created by DivaglamKreation</p>
        <div className="product-grid shop-grid">
          {products.filter((product) => product.title !== '7-Day Gentle Reset Journal').map((product) => <ProductCard product={product} key={product.title} />)}
        </div>
        <p style={{ marginTop: '1.75rem' }}>
          <a className="text-link" href="/sticker-archive">View the DGK Sticker Archive →</a>
        </p>
      </section>

      <section className="section blog-section" id="blog">
        <div className="section-heading-row">
          <div>
            <h2>Something quiet to read with your coffee.</h2>
          </div>
          <a className="text-link" href="/blog">Visit the full blog →</a>
        </div>
        <div className="blog-grid">
          {blogPosts.slice(0, 1).map((post, index) => (
            <article className="card editorial-card" key={post.href}>
              <span className="journey-number">0{index + 1}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a className="text-link" href={post.href}>Read the note →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section glowlist-section glowlist-band" id="glowlist">
        <div className="email-box presentation-glowlist glowlist-copy-only">
          <p className="script-accent">Stay close to the glow</p>
          <h2>Your reset doesn’t have to end here.</h2>
          <p>Letters from me, a prompt for the week, and first look at new journals.</p>
          <div className="hero-actions">
            <a className="button" href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
