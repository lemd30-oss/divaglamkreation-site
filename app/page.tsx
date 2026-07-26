'use client';

import Image from 'next/image';

const gumroadShopUrl = 'https://lemdo8.gumroad.com/';
const gumroadSubscribeUrl = 'https://lemdo8.gumroad.com/subscribe';
const gentleResetUrl = 'https://lemdo8.gumroad.com/l/dgk-gentle-pause';
const sevenDayResetUrl = 'https://lemdo8.gumroad.com/l/dgk-7-day-reset-journal';
const morningResetUrl = 'https://lemdo8.gumroad.com/l/Divaglamkreation';
const resetChallengeImageUrl = '/images/file_000000006878822f9afa6bda9bae9f6d.png';
const heroImageUrl = '/images/file_00000000bbfc822fb379f73bd8a3c064.png';
const contactEmail = 'mailto:divaglamkreation@gmail.com';
const dragonflyKeychainUrl = '/dragonfly-keychain';
const facebookUrl = 'https://www.facebook.com/share/1G9VQrJnaZ/';

const products = [
  {
    title: 'The Gentle Reset',
    description: 'A free 3-day guided faith reset journal with reflection pages, prayer space, and gratitude prompts.',
    icon: 'FREE',
    image: '/images/file_000000007a0481f59f22529a564a90af.png',
    imageAlt: 'Woman journaling with a warm drink in a calm, faith-rooted setting',
    href: gentleResetUrl,
    priceLabel: 'Free · Digital PDF',
    buttonLabel: 'Download the Free Reset',
    external: true,
  },
  {
    title: '7-Day Gentle Reset Journal',
    description: 'A soft weekly companion for reflection, faith, planning, and becoming with intention.',
    icon: '07',
    image: '/images/file_00000000d7fc81f5ab22d6bd2ddeec33.png',
    imageAlt: '7-Day Gentle Reset Journal clarity reflection page',
    href: sevenDayResetUrl,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'View Journal on Gumroad',
    external: true,
    featured: true,
  },
  {
    title: 'Dragonfly Reminder Charm',
    description: 'A pink or blue rhinestone dragonfly charm with gold-tone hardware — a giftable reminder of growth, light, and gentle transformation.',
    icon: 'DF',
    image: '/dgk-dragonfly-pink-website.jpg',
    imageAlt: 'Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp',
    href: dragonflyKeychainUrl,
    priceLabel: '$9.99 · Physical item',
    buttonLabel: 'See Colors & Details',
    external: false,
  },
  {
    title: 'Gentle Morning Reset Pack',
    description: 'Soft morning pages created to help you begin the day with faith, calm, and care.',
    icon: 'AM',
    image: '/images/file_00000000340c81f580fa4e9e6704ebf2.png',
    imageAlt: 'Gentle Morning Reset Pack with five printable reflection pages',
    href: morningResetUrl,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'View Reset Pack on Gumroad',
    external: true,
  },
];

const blogPosts = [
  {
    title: 'How to Begin a Gentle Reset Routine',
    description: 'A soft place to begin when life feels full and you need a quieter rhythm.',
    href: '/blog/gentle-reset',
  },
  {
    title: 'Why You Don't Need to Earn Rest',
    description: 'A faith-rooted reminder that rest is not a reward for finishing everything.',
    href: '/blog/why-you-dont-need-to-earn-rest',
  },
];

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

      <section
        className="hero"
        id="top"
        style={{
          alignItems: 'start',
          minHeight: 0,
          paddingBottom: '2rem',
          paddingTop: '0.5rem',
        }}
      >
        <div className="hero-copy" style={{ alignSelf: 'start', paddingTop: '1rem' }}>
          <p className="eyebrow">Faith • Flow • Flourish</p>
          <h1>Journals and little resets for women who take care of everyone but themselves.</h1>
          <p>
            I make faith-rooted journals, gentle gifts, and seasonal encouragement — the kind of things
            that sit on your nightstand and quietly remind you it&apos;s okay to stop for a minute.
          </p>
          <div className="hero-actions">
            <a className="button" href={gentleResetUrl} target="_blank" rel="noopener noreferrer">
              Download the Free 3-Day Reset
            </a>
            <a className="button secondary" href="#shop">Browse Journals &amp; Gifts</a>
          </div>
        </div>

        <div
          style={{
            alignSelf: 'start',
            borderRadius: '2rem',
            boxShadow: '0 24px 70px rgba(75, 58, 50, 0.12)',
            height: 'clamp(320px, 42vw, 520px)',
            overflow: 'hidden',
            width: '100%',
            position: 'relative',
          }}
        >
          <Image
            src={heroImageUrl}
            alt="Cozy DivaglamKreation journaling scene with books, candle, warm drink, and faith-rooted encouragement"
            fill
            priority
            sizes="(max-width: 820px) 100vw, (max-width: 1120px) 50vw, 560px"
            style={{
              objectFit: 'cover',
              objectPosition: '70% center',
            }}
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
            <a className="button secondary" href={gentleResetUrl} target="_blank" rel="noopener noreferrer">Get the Free Reset</a>
          </article>
          <article className="card">
            <p className="eyebrow">I want guided reflection</p>
            <h3>Explore the 7-Day Reset Journal.</h3>
            <p>Move through a full week with calm prompts for faith, clarity, planning, and becoming.</p>
            <a className="button secondary" href={sevenDayResetUrl} target="_blank" rel="noopener noreferrer">View the Journal</a>
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
          {products.map((product) => (
            <article className={product.featured ? 'card featured-card' : 'card'} key={product.title}>
              {product.image ? (
                <div
                  style={{
                    borderRadius: '1rem',
                    display: 'block',
                    height: '180px',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 820px) 100vw, (max-width: 1120px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ) : (
                <div className="card-image" aria-hidden="true">{product.icon}</div>
              )}
              <p className="eyebrow">{product.priceLabel}</p>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a
                className="button secondary"
                href={product.href}
                target={product.external ? '_blank' : undefined}
                rel={product.external ? 'noopener noreferrer' : undefined}
              >
                {product.buttonLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" aria-labelledby="dragonfly-keychain-title">
        <div>
          <p className="eyebrow">$9.99 · Pink or Blue · Physical Item</p>
          <h2 id="dragonfly-keychain-title">Dragonfly Reminder Charm</h2>
          <p>A giftable reminder of growth, light, and gentle transformation for your keys, purse, backpack, or journal pouch.</p>
          <div className="hero-actions">
            <a className="button" href={dragonflyKeychainUrl}>View Charm Details</a>
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
          <div
            style={{
              alignItems: 'center',
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              textAlign: 'left',
            }}
          >
            <a href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer" aria-label="Join the DGK Glowlist and receive the free 7-day reset challenge">
              <div
                style={{
                  borderRadius: '1.5rem',
                  display: 'block',
                  height: 'auto',
                  maxHeight: '680px',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.2',
                }}
              >
                <Image
                  src={resetChallengeImageUrl}
                  alt="Ready to start your reset? Join the free 7-day challenge"
                  fill
                  loading="lazy"
                  sizes="(max-width: 820px) 100vw, 350px"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </a>
            <div>
              <p className="eyebrow">Join the DGK Glowlist</p>
              <h2>Begin with a free 7-day reset.</h2>
              <p>Join the Glowlist to receive the challenge, followed by occasional faith-rooted prompts, product news, and behind-the-glow notes.</p>
              <div className="hero-actions">
                <a className="button" href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer">Join the Glowlist + Get the Challenge</a>
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
          <a href="/glowlist">Glowlist</a> · <a href={gumroadShopUrl} target="_blank" rel="noopener noreferrer">Gumroad</a> ·{' '}
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a> · <a href={contactEmail}>Email</a>
        </p>
      </footer>
    </main>
  );
}
