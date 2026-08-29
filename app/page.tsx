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
          <h1>Pause gently. Begin again with purpose.</h1>
          <p className="hero-lede">
            Faith-rooted journals, meaningful gifts, and encouragement created to help you pause, reflect, and move forward.
          </p>
          <div className="hero-actions">
            <a className="button" href={links.gentleReset} target="_blank" rel="noopener noreferrer">
              Begin the Free 3-Day Reset
            </a>
            <a className="button secondary" href="#shop">Explore Journals &amp; Gifts</a>
          </div>
          <div className="hero-proof" aria-label="Customer benefits">
            <span>Instant digital delivery</span>
            <span>Faith-rooted reflection</span>
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
            <p className="eyebrow">Start Here</p>
            <h2>Choose what fits today.</h2>
          </div>
        </div>
        <div className="journey-grid">
          <article className="journey-card">
            <span className="journey-number">01</span>
            <h3>Begin with three quiet days.</h3>
            <p>Short prompts for reflection, prayer, and gratitude.</p>
            <a className="text-link" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Get the free reset →</a>
          </article>
          <article className="journey-card featured-journey">
            <span className="journey-number">02</span>
            <h3>Move through a full week.</h3>
            <p>Seven days of guided reflection, faith, and planning.</p>
            <a className="text-link" href={links.sevenDayReset} target="_blank" rel="noopener noreferrer">Explore the journal →</a>
          </article>
          <article className="journey-card">
            <span className="journey-number">03</span>
            <h3>Read a quiet reminder.</h3>
            <p>Faith-rooted notes for fuller weeks and slower mornings.</p>
            <a className="text-link" href="/blog">Read the journal notes →</a>
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

      <section className="section split about-section" id="about">
        <div>
          <p className="eyebrow">Behind the Glow</p>
          <h2>Made with heart, faith, and purpose.</h2>
        </div>
        <div className="about-copy">
          <p>DivaglamKreation was created for women who need a simple place to pause, reflect, and reconnect.</p>
          <p>Each product is designed to feel warm, useful, and easy to return to.</p>
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

      <section className="section glowlist-section" id="glowlist">
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
