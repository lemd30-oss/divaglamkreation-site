import { pageMetadata } from './metadata';
import Image from 'next/image';
import Script from 'next/script';

import { ProductCard } from './components/ProductCard';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { blogPosts, images, links, products } from './home-content';
import './home.css';
import './editorial-refresh.css';

export const metadata = pageMetadata('DivaglamKreation | Faith-Rooted Journals for Rest, Reflection & Renewal', 'Faith-rooted journals and meaningful gifts for rest, reflection, and renewal. Begin with a quiet pause and remember that every woman matters.', '/');

export default function Home() {
  const featuredJournals = products.filter((product) => product.title !== 'Dragonfly Reminder Charm' && !product.paused);

  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="hero hero-home presentation-hero" id="top">
        <div className="hero-copy hero-copy-home">
          <Image className="hero-owl" src="/images/brand/glow-owl.png" alt="DivaglamKreation Glow Owl logo" width={855} height={1186} sizes="64px" priority />
          <h1 className="statement-hero">Who are you<span className="gold-period">?</span></h1>
          <p className="hero-lede">Faith-rooted journals for the woman you're becoming. Quiet tools for rest, reset, and renewal.</p>
          <div className="hero-actions">
            <a className="button" href="/shop">Shop the Collection</a>
            <a className="button secondary" href={links.gentleReset}>Start with The 3-Day Pause — Free</a>
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

      <section className="section shop-section" id="collection">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Featured Journals</p>
            <h2>Quiet tools for the season you're in.</h2>
          </div>
          <a className="text-link" href="/shop">Shop the full Collection →</a>
        </div>
        <div className="product-grid shop-grid">
          {featuredJournals.map((product) => <ProductCard product={product} key={product.title} />)}
        </div>
      </section>

      <section className="section start-section presentation-panel" id="start">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Start Here</p>
            <h2>Begin with a gentle pause.</h2>
          </div>
          <p className="section-intro">Start free. Go deeper when you're ready.</p>
        </div>
        <div className="journey-grid journey-grid-two">
          <article className="journey-card">
            <span className="journey-number">Step 1 · Free</span>
            <h3>The 3-Day Pause</h3>
            <p>Short daily prompts to slow down, reflect, and hear yourself again.</p>
            <a className="text-link" href={links.gentleReset}>Get The 3-Day Pause — Free →</a>
          </article>
          <article className="journey-card">
            <span className="journey-number">Step 2 · Go deeper</span>
            <h3>The Gentle Reset</h3>
            <p>Seven guided days for more room to reflect, pray, and renew.</p>
            <a className="text-link" href={links.theGentleResetBook} target="_blank" rel="noopener noreferrer">Continue into the 7-Day Gentle Reset →</a>
          </article>
        </div>
        <p className="section-intro">Not sure where to begin? <a className="text-link" href="/start-your-glow#choose-your-glow">Choose Your Glow →</a></p>
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
          <p>An owl canvas asked me a question I couldn't stop thinking about: Who are you?</p>
          <p>The Glow Owl became my companion to that question, and the answer became the heart of everything I make: every woman matters.</p>
          <a className="text-link" href="/blog/it-started-with-this-owl">Read the full owl story →</a>
        </div>
      </section>

      <section className="section glowlist-section glowlist-band" id="glowlist">
        <div className="email-box presentation-glowlist glowlist-copy-only">
          <p className="script-accent">Letters from the Glow</p>
          <h2>Your free 3-Day Pause starts here.</h2>
          <p>Sign up to receive The 3-Day Pause, a free faith-rooted reflection journal, along with gentle Letters from the Glow every two weeks.</p>
          <div className="flodesk-inline-wrap">
            <div id="fd-form-6abe85f729e2cfa7a04f5774" />
            <Script
              id="flodesk-glowlist-form"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html:
                  "window.fd('form', { formId: '6abe85f729e2cfa7a04f5774', containerEl: '#fd-form-6abe85f729e2cfa7a04f5774' });",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section blog-section" id="letters">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Letters from the Glow</p>
            <h2>Latest Letter</h2>
          </div>
          <a className="text-link" href="/blog">Read all Letters →</a>
        </div>
        <div className="blog-grid">
          {blogPosts.slice(0, 1).map((post) => (
            <article className="card editorial-card" key={post.href}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a className="text-link" href={post.href} aria-label={`Read the Letter: ${post.title}`}>Read the Letter →</a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
