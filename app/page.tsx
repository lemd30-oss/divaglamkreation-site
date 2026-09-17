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
          <p className="eyebrow">Faith · Creativity · Gentle encouragement</p>
          <h1 className="statement-hero">Who are you<span className="gold-period">?</span></h1>
          <p className="hero-lede">
            You mattered before anyone was looking. DivaglamKreation grew from quiet moments of coffee, creativity, reflection, and faith into journals, meaningful gifts, and gentle reminders made to help you remember who you are becoming.
          </p>
          <div className="hero-actions">
            <a className="button" href={links.gentleReset} target="_blank" rel="noopener noreferrer">
              Begin the Free 3-Day Reset
            </a>
            <a className="button secondary" href="#shop">Explore DGK</a>
          </div>
          <div className="hero-proof" aria-label="DivaglamKreation values">
            <span>Every woman matters</span>
            <span>Faith-rooted reflection</span>
            <span>Created with intention</span>
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
            <strong>You matter before the world notices.</strong>
          </div>
        </div>
      </section>

      <section className="section start-section presentation-panel" id="start">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Begin Here</p>
            <h2>Give yourself three quiet days to return to what matters.</h2>
          </div>
          <p className="section-intro">Start free with a faith-rooted pause for reflection, prayer, and gratitude.</p>
        </div>
        <div className="journey-grid">
          <article className="journey-card">
            <span className="journey-number">01</span>
            <h3>3-Day Mini Reset</h3>
            <p>A free digital journal for slowing down, listening inward, reconnecting with God, and beginning again with intention.</p>
            <a className="text-link" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Start your free reset →</a>
          </article>
          <article className="journey-card">
            <span className="journey-number">02</span>
            <h3>Ready to go deeper?</h3>
            <p>Continue the rhythm with Grace Notes, a full seven-day guided reset for prayer, reflection, gratitude, and gentle renewal.</p>
            <a className="text-link" href="#glow-reset">Continue into 7 days →</a>
          </article>
        </div>
      </section>

      <section className="section reset-feature-section" id="glow-reset" aria-labelledby="glow-reset-title">
        <div className="reset-feature-image-wrap">
          <Image
            src="/images/the-gentle-reset-book-cover.svg"
            alt="Grace Notes 7-Day Gentle Reset journal cover"
            width={760}
            height={980}
            className="reset-feature-image"
          />
        </div>
        <div className="reset-feature-copy">
          <p className="eyebrow">Your next gentle step</p>
          <h2 id="glow-reset-title">If three days helped you pause, give yourself seven days to listen more deeply.</h2>
          <p className="reset-feature-lede">Grace Notes: 7-Day Gentle Reset continues the same faith-rooted rhythm with more room for prayer, reflection, gratitude, and the question at the heart of DGK: Who are you becoming?</p>
          <p className="reset-feature-note">Begin free. Continue when you are ready. No rushing your becoming.</p>
          <div className="hero-actions">
            <a className="button" href={links.graceNotesDigital} target="_blank" rel="noopener noreferrer">Continue with the Digital Journal</a>
            <a className="button secondary" href={links.theGentleResetBook} target="_blank" rel="noopener noreferrer">Choose the Paperback</a>
          </div>
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
          {products.filter((product) => product.title !== '7-Day Gentle Reset Journal').map((product) => <ProductCard product={product} key={product.title} />)}
        </div>
        <p style={{ marginTop: '1.75rem' }}>
          <a className="text-link" href="/sticker-archive">View the DGK Sticker Archive →</a>
        </p>
      </section>

      <section className="section story-section" id="about" aria-labelledby="story-question">
        <div className="story-question-wrap">
          <span className="story-rule" aria-hidden="true" />
          <p className="eyebrow">Behind the Glow</p>
          <h2 id="story-question">Who are you?</h2>
          <span className="story-rule" aria-hidden="true" />
        </div>
        <div className="story-copy">
          <p>DivaglamKreation began with a quiet creative woman, a cup of coffee, room to sketch and reflect, and one enduring question: Who are you?</p>
          <p>The Glow Owl became a companion to that question, and the answer became a truth worth carrying forward: every woman matters.</p>
          <a className="text-link" href="/about">Read the full DGK story →</a>
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
        <div className="email-box presentation-glowlist glowlist-copy-only">
          <p className="eyebrow">Stay close to the glow</p>
          <h2>Your reset doesn’t have to end here.</h2>
          <p>Join the DGK Glowlist for gentle reflection prompts, faith-rooted encouragement, behind-the-glow notes, and quiet reminders to keep making space for who you are becoming.</p>
          <div className="hero-actions">
            <a className="button" href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer">Join the Glowlist</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
