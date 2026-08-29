'use client';

import Image from 'next/image';

import { ProductCard } from './components/ProductCard';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { blogPosts, images, links, products } from './home-content';
import './home.css';

export default function Home() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero hero-home presentation-hero" id="top">
        <div className="hero-copy hero-copy-home">
          <p className="eyebrow">Faith-rooted tools for softer days</p>
          <h1 className="statement-hero">You matter<span className="gold-period">.</span></h1>
          <p className="hero-lede">
            You do not have to rush your becoming. DivaglamKreation creates gentle journals, meaningful gifts, and quiet encouragement to help you pause, reflect, and begin again with purpose.
          </p>
          <div className="hero-actions">
            <a className="button" href={links.gentleReset} target="_blank" rel="noopener noreferrer">
              Begin the Free 3-Day Reset
            </a>
            <a className="button secondary" href="#shop">Explore Journals &amp; Gifts</a>
          </div>
          <div className="hero-proof" aria-label="Customer benefits">
            <span>Faith-rooted reflection</span>
            <span>Gentle guidance</span>
            <span>Made with intention</span>
          </div>
        </div>

        <div className="hero-image-wrap presentation-image-card">
          <Image
            src={images.hero}
            alt="Cozy journaling scene with a vase, warm drink, candle, and journal"
            fill
            priority
            sizes="(max-width: 820px) 100vw, (max-width: 1120px) 50vw, 560px"
            className="cover-image hero-cover-image"
          />
          <div className="image-note">
            <p className="eyebrow">A gentle reminder</p>
            <strong>You are allowed to begin softly.</strong>
          </div>
        </div>
      </section>

      <section className="section start-section presentation-panel" id="start">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Choose Your Path</p>
            <h2>Start with what you need today.</h2>
          </div>
          <p className="section-intro">A free first step, a guided week, or a quiet note to return to.</p>
        </div>
        <div className="journey-grid">
          <article className="journey-card">
            <span className="journey-number">01</span>
            <h3>3-Day Mini Reset</h3>
            <p>A free, gentle beginning with reflection, prayer, and gratitude prompts.</p>
            <a className="text-link" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Begin free →</a>
          </article>
          <article className="journey-card featured-journey">
            <span className="journey-number">02</span>
            <p className="bridge-label">Go a little deeper</p>
            <h3>7-Day Guided Journal</h3>
            <p>Seven days of guided reflection, faith, and planning for a steadier reset.</p>
            <a className="text-link" href={links.sevenDayReset} target="_blank" rel="noopener noreferrer">Explore the journal →</a>
          </article>
          <article className="journey-card">
            <span className="journey-number">03</span>
            <h3>Journal Notes</h3>
            <p>Faith-rooted reminders for fuller weeks, slower mornings, and everyday becoming.</p>
            <a className="text-link" href="/blog">Read a quiet note →</a>
          </article>
        </div>
      </section>

      <section className="section shop-section" id="shop">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The Collection</p>
            <h2>Tools for real-life pauses.</h2>
          </div>
          <p className="section-intro">Digital journals, a printed companion, and meaningful gifts.</p>
        </div>
        <p className="shop-trust">Instant digital delivery · Secure checkout · Thoughtfully created by DivaglamKreation</p>
        <div className="product-grid shop-grid">
          {products.map((product) => <ProductCard product={product} key={product.title} />)}
        </div>
      </section>

      <section className="section dragonfly-story presentation-feature" aria-labelledby="dragonfly-keychain-title">
        <div className="feature-copy">
          <p className="eyebrow">The Meaning Behind the Charm</p>
          <h2 id="dragonfly-keychain-title">Carry a little light with you.</h2>
          <p>The dragonfly is a symbol of growth, renewal, and becoming.</p>
          <div className="hero-actions"><a className="button" href={links.dragonflyKeychain}>Discover the Dragonfly Charm</a></div>
        </div>
      </section>

      <section className="section story-section" id="about" aria-labelledby="story-question">
        <div className="story-question-wrap">
          <span className="story-rule" aria-hidden="true" />
          <p className="eyebrow">Behind the Glow</p>
          <h2 id="story-question">Who are you becoming?</h2>
          <span className="story-rule" aria-hidden="true" />
        </div>
        <div className="story-copy">
          <p>DivaglamKreation was created for women who need a simple place to pause, reflect, and reconnect.</p>
          <p>You do not need to have everything figured out. You only need a little room to hear yourself again and move forward with faith.</p>
          <a className="text-link" href="/contact">Connect with DivaglamKreation →</a>
        </div>
      </section>

      <section className="section blog-section" id="blog">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Journal Notes</p>
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
        <div className="email-box presentation-glowlist">
          <div className="glowlist-grid">
            <a href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer" aria-label="Join the DGK Glowlist">
              <div className="glowlist-image-wrap">
                <Image src={images.glowlist} alt="A calm journaling scene inviting readers to join the DGK Glowlist" fill loading="lazy" sizes="(max-width: 820px) 100vw, 350px" className="cover-image" />
              </div>
            </a>
            <div>
              <p className="eyebrow">Join the DGK Glowlist</p>
              <h2>Gentle encouragement, delivered.</h2>
              <p>Receive gentle reflection prompts, seasonal product updates, and behind-the-glow notes from DivaglamKreation.</p>
              <div className="hero-actions">
                <a className="button" href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
