'use client';

import Image from 'next/image';

import { ProductCard } from './components/ProductCard';
import { blogPosts, images, links, products } from './home-content';

export default function Home() {
  return (
    <main className="site-shell" id="main-content">
      <header className="header">
        <a className="logo" href="#top" aria-label="DivaglamKreation home">
          <span className="logo-mark">DK</span>
          <span>DivaglamKreation</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#start">Start Here</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="/blog">Blog</a>
          <a href="/glowlist">Glowlist</a>
        </nav>
      </header>

      <section className="hero hero-home" id="top">
        <div className="hero-copy hero-copy-home">
          <p className="eyebrow">Faith • Flow • Flourish</p>
          <h1>Journals and little resets for women who take care of everyone but themselves.</h1>
          <p>
            I make faith-rooted journals, gentle gifts, and seasonal encouragement — the kind of things
            that sit on your nightstand and quietly remind you it&apos;s okay to stop for a minute.
          </p>
          <div className="hero-actions">
            <a className="button" href={links.gentleReset} target="_blank" rel="noopener noreferrer">
              Download the Free 3-Day Reset
            </a>
            <a className="button secondary" href="#shop">Browse Journals &amp; Gifts</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <Image
            src={images.hero}
            alt="Cozy DivaglamKreation journaling scene with books, candle, warm drink, and faith-rooted encouragement"
            fill
            priority
            sizes="(max-width: 820px) 100vw, (max-width: 1120px) 50vw, 560px"
            className="cover-image hero-cover-image"
          />
        </div>
      </section>

      <section className="section start-section" id="start">
        <p className="eyebrow">Start Here</p>
        <h2>Choose the gentle next step that fits today.</h2>
        <div className="product-grid">
          <article className="card">
            <p className="eyebrow">I need a small reset today</p>
            <h3>Begin with the free 3-day reset.</h3>
            <p>Use three short days of reflection, prayer, and gratitude to create a little breathing room.</p>
            <a className="button secondary" href={links.gentleReset} target="_blank" rel="noopener noreferrer">Get the Free Reset</a>
          </article>
          <article className="card">
            <p className="eyebrow">I want guided reflection</p>
            <h3>Explore the 7-Day Reset Journal.</h3>
            <p>Move through a full week with calm prompts for faith, clarity, planning, and becoming.</p>
            <a className="button secondary" href={links.sevenDayReset} target="_blank" rel="noopener noreferrer">View the Journal</a>
          </article>
          <article className="card">
            <p className="eyebrow">I need encouragement</p>
            <h3>Read a quiet note with your coffee.</h3>
            <p>Visit the DGK blog for gentle reminders and practical ways to begin softly.</p>
            <a className="button secondary" href="/blog">Read the Blog</a>
          </article>
        </div>
      </section>

      <section className="section" id="shop">
        <p className="eyebrow">Shop</p>
        <h2>Small tools for real-life pauses.</h2>
        <p>Digital journals are delivered instantly through Gumroad. Physical gifts are available through our secure online shop.</p>
        <div className="product-grid">
          {products.map((product) => <ProductCard product={product} key={product.title} />)}
        </div>
      </section>

      <section className="section split" aria-labelledby="dragonfly-keychain-title">
        <div>
          <p className="eyebrow">$9.99 · Pink or Blue · Physical Item</p>
          <h2 id="dragonfly-keychain-title">Dragonfly Reminder Charm</h2>
          <p>A giftable reminder of growth, light, and gentle transformation for your keys, purse, backpack, or journal pouch.</p>
          <div className="hero-actions">
            <a className="button" href={links.dragonflyKeychain}>View Charm Details</a>
          </div>
        </div>
        <div className="quote-panel">
          <p className="eyebrow">Carry a Little Light</p>
          <h2>Transformation does not need hustle.</h2>
          <p>A small reminder that gentle movement still carries you forward.</p>
        </div>
      </section>

      <section className="section split" id="about">
        <div>
          <p className="eyebrow">Behind the Glow</p>
          <h2>Made with heart, faith, and creative purpose.</h2>
          <p>
            I created DivaglamKreation for women who spend so much time caring for everyone else that
            they sometimes forget to pause for themselves. Every journal, reminder, and seasonal piece
            is designed to make that pause feel a little easier.
          </p>
        </div>
        <div className="quote-panel">
          <p className="eyebrow">Gentle Reminder</p>
          <h2>You are allowed to begin softly.</h2>
          <p>Sometimes growth starts with a prayer, a page, and one faithful next step.</p>
        </div>
      </section>

      <section className="section" id="blog">
        <p className="eyebrow">Journal Notes</p>
        <h2>Something quiet to read with your coffee.</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="card" key={post.href}>
              <p className="eyebrow">From the Blog</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a className="button secondary" href={post.href}>Read the Note</a>
            </article>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button" href="/blog">Visit the Blog</a>
        </div>
      </section>

      <section className="section" id="glowlist">
        <div className="email-box">
          <div className="glowlist-grid">
            <a href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer" aria-label="Join the DGK Glowlist and receive the free 7-day reset challenge">
              <div className="glowlist-image-wrap">
                <Image
                  src={images.resetChallenge}
                  alt="Ready to start your reset? Join the free 7-day challenge"
                  fill
                  loading="lazy"
                  sizes="(max-width: 820px) 100vw, 350px"
                  className="cover-image"
                />
              </div>
            </a>
            <div>
              <p className="eyebrow">Join the DGK Glowlist</p>
              <h2>Begin with a free 7-day reset.</h2>
              <p>Join the Glowlist to receive the challenge, followed by occasional faith-rooted prompts, product news, and behind-the-glow notes.</p>
              <div className="hero-actions">
                <a className="button" href={links.gumroadSubscribe} target="_blank" rel="noopener noreferrer">Join the Glowlist + Get the Challenge</a>
                <a className="button secondary" href="/glowlist">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p>
          <a href="/contact">Contact</a> · <a href="/policies">Policies</a> · <a href="/blog">Blog</a> ·{' '}
          <a href="/glowlist">Glowlist</a> · <a href={links.gumroadShop} target="_blank" rel="noopener noreferrer">Gumroad</a> ·{' '}
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> · <a href={links.contactEmail}>Email</a>
        </p>
      </footer>
    </main>
  );
}
