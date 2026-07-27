'use client';

import Image from 'next/image';

import { ProductCard } from './components/ProductCard';
import { SiteFooter } from './components/SiteFooter';
import { blogPosts, images, links, products } from './home-content';
import './home.css';

export default function Home() {
  return (
    <main className="site-shell" id="main-content">
      <header className="header presentation-header">
        <a className="logo" href="#top" aria-label="DivaglamKreation home">
          <span className="logo-mark">DK</span>
          <span className="logo-copy">
            <strong>DivaglamKreation</strong>
            <small>Faith. Flow. Flourish.</small>
          </span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#start">Start Here</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="/blog">Blog</a>
          <a className="nav-cta" href="/glowlist">Join the Glowlist</a>
        </nav>
      </header>

      <section className="hero hero-home presentation-hero" id="top">
        <div className="hero-copy hero-copy-home">
          <p className="eyebrow">Faith-rooted tools for softer days</p>
          <h1>Pause gently. Begin again with purpose.</h1>
          <p className="hero-lede">
            DivaglamKreation creates journals, gentle gifts, and seasonal encouragement for women who need a quiet place to breathe, reflect, and move forward with faith.
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
            <span>Created with gentle intention</span>
          </div>
        </div>

        <div className="hero-image-wrap presentation-image-card">
          <Image
            src={images.hero}
            alt="Cozy DivaglamKreation journaling scene with books, candle, warm drink, and faith-rooted encouragement"
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
            <h2>Choose the next step that fits today.</h2>
          </div>
          <p className="section-intro">No pressure. Just one clear place to begin.</p>
        </div>
        <div className="journey-grid">
          <article className="journey-card">
            <span className="journey-number">01</span>
            <p className="eyebrow">I need a small reset</p>
            <h3>Begin with three quiet days.</h3>
            <p>Use short reflection, prayer, and gratitude prompts to create a little breathing room.</p>
            <a className="text-link" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Get the free reset →</a>
          </article>
          <article className="journey-card featured-journey">
            <span className="journey-number">02</span>
            <p className="eyebrow">I want guided reflection</p>
            <h3>Move through a full week with intention.</h3>
            <p>Use seven gentle days of prompts for faith, clarity, planning, and becoming.</p>
            <a className="text-link" href={links.sevenDayReset} target="_blank" rel="noopener noreferrer">Explore the journal →</a>
          </article>
          <article className="journey-card">
            <span className="journey-number">03</span>
            <p className="eyebrow">I need encouragement</p>
            <h3>Read something quiet with your coffee.</h3>
            <p>Visit the DGK blog for gentle reminders and practical ways to begin softly.</p>
            <a className="text-link" href="/blog">Read the journal notes →</a>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="how-it-works-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 id="how-it-works-title">A simple path from overwhelmed to grounded.</h2>
          </div>
          <p className="section-intro">Choose one resource, make a little room, and return whenever you need another gentle reset.</p>
        </div>
        <div className="steps-grid">
          <article className="step-card"><span>1</span><h3>Choose</h3><p>Select the reset, journal, or reminder that fits your season.</p></article>
          <article className="step-card"><span>2</span><h3>Receive</h3><p>Digital products arrive instantly. Physical products open securely through their product page.</p></article>
          <article className="step-card"><span>3</span><h3>Pause</h3><p>Set aside a few quiet minutes for prayer, reflection, and honest check-in.</p></article>
          <article className="step-card"><span>4</span><h3>Return</h3><p>Come back to the prompts whenever life feels full or your rhythm needs care.</p></article>
          <article className="step-card"><span>5</span><h3>Grow</h3><p>Carry one faithful next step into the rest of your day.</p></article>
        </div>
      </section>

      <section className="section shop-section" id="shop">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The Collection</p>
            <h2>Small tools for real-life pauses.</h2>
          </div>
          <p className="section-intro">Digital journals, a printed companion, and meaningful gifts created to help you return to yourself.</p>
        </div>
        <p className="shop-trust">Instant digital delivery · Secure checkout · Thoughtfully created by DivaglamKreation</p>
        <div className="product-grid shop-grid">
          {products.map((product) => <ProductCard product={product} key={product.title} />)}
        </div>
      </section>

      <section className="section split dragonfly-story presentation-feature" aria-labelledby="dragonfly-keychain-title">
        <div className="feature-copy">
          <p className="eyebrow">The Meaning Behind the Charm</p>
          <h2 id="dragonfly-keychain-title">Carry a little light with you.</h2>
          <p>The dragonfly is a quiet symbol of growth, renewal, and becoming. Keep it close as a reminder that transformation can unfold without pressure.</p>
          <div className="hero-actions"><a className="button" href={links.dragonflyKeychain}>Discover the Dragonfly Charm</a></div>
        </div>
        <div className="quote-panel editorial-quote">
          <p className="eyebrow">Gentle movement still counts</p>
          <h2>Transformation does not need hustle.</h2>
          <p>Growth can be quiet, faithful, and beautifully your own.</p>
        </div>
      </section>

      <section className="section split about-section" id="about">
        <div>
          <p className="eyebrow">Behind the Glow</p>
          <h2>Made with heart, faith, and creative purpose.</h2>
        </div>
        <div className="about-copy">
          <p>I created DivaglamKreation for women who spend so much time caring for everyone else that they sometimes forget to pause for themselves.</p>
          <p>Every journal, reminder, and seasonal piece is designed to make that pause feel easier, warmer, and more meaningful.</p>
          <a className="text-link" href="/contact">Connect with DivaglamKreation →</a>
        </div>
      </section>

      <section className="section presentation-panel" aria-labelledby="why-dgk-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Why DivaglamKreation</p>
            <h2 id="why-dgk-title">Created for real life, not perfect routines.</h2>
          </div>
          <p className="section-intro">DGK resources are designed to feel supportive, usable, and easy to return to.</p>
        </div>
        <div className="journey-grid">
          <article className="journey-card"><span className="journey-number">01</span><h3>Faith-rooted</h3><p>Encouragement that makes space for prayer, reflection, and becoming.</p></article>
          <article className="journey-card featured-journey"><span className="journey-number">02</span><h3>Gentle and practical</h3><p>Simple prompts and tools that work even when your day feels full.</p></article>
          <article className="journey-card"><span className="journey-number">03</span><h3>Made with intention</h3><p>Every product is shaped with warmth, care, and meaningful purpose.</p></article>
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
          {blogPosts.map((post, index) => (
            <article className="card editorial-card" key={post.href}>
              <span className="journey-number">0{index + 1}</span>
              <p className="eyebrow">From the Blog</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a className="text-link" href={post.href}>Read the note →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title">A few helpful things to know.</h2>
          </div>
        </div>
        <div className="blog-grid">
          <article className="card editorial-card"><h3>How do digital products arrive?</h3><p>After checkout, Gumroad provides immediate access to the download and also sends a receipt by email.</p></article>
          <article className="card editorial-card"><h3>Where do I buy the paperback?</h3><p>The printed Gentle Reset journal is available through Amazon using the View the Paperback button.</p></article>
          <article className="card editorial-card"><h3>Can I begin for free?</h3><p>Yes. The 3-Day Gentle Reset is a free starting point designed to help you pause without pressure.</p></article>
        </div>
      </section>

      <section className="section glowlist-section" id="glowlist">
        <div className="email-box presentation-glowlist">
          <div className="glowlist-grid">
            <a href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer" aria-label="Join the DGK Glowlist and receive the free 7-day reset challenge">
              <div className="glowlist-image-wrap">
                <Image src={images.resetChallenge} alt="Ready to start your reset? Join the free 7-day challenge" fill loading="lazy" sizes="(max-width: 820px) 100vw, 350px" className="cover-image" />
              </div>
            </a>
            <div>
              <p className="eyebrow">Join the DGK Glowlist</p>
              <h2>Let gentle encouragement meet you in your inbox.</h2>
              <p>Receive the free 7-day reset challenge, faith-rooted prompts, product news, and behind-the-glow notes.</p>
              <div className="hero-actions">
                <a className="button" href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
                <a className="button secondary" href="/glowlist">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
