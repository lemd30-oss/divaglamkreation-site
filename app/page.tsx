const gumroadShopUrl = 'https://lemdo8.gumroad.com/';
const gumroadSubscribeUrl = 'https://lemdo8.gumroad.com/subscribe';
const gentleResetUrl = 'https://lemdo8.gumroad.com/l/dgk-gentle-pause';
const sevenDayResetUrl = 'https://lemdo8.gumroad.com/l/dgk-7-day-reset-journal';
const morningResetUrl = 'https://lemdo8.gumroad.com/l/Divaglamkreation';
const contactEmail = 'mailto:divaglamkreation@gmail.com';
const dragonflyKeychainUrl = '/dragonfly-keychain';
const facebookUrl = 'https://www.facebook.com/share/1G9VQrJnaZ/';

const products = [
  {
    title: 'The Gentle Reset',
    description: 'A free 3-day guided faith reset journal with reflection pages, prayer space, and gratitude prompts.',
    icon: 'FREE',
    href: gentleResetUrl,
    priceLabel: 'Free · Digital PDF',
    buttonLabel: 'Download Free on Gumroad',
    external: true,
  },
  {
    title: '7-Day Gentle Reset Journal',
    description: 'A soft weekly companion for reflection, faith, planning, and becoming with intention.',
    icon: '07',
    href: sevenDayResetUrl,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'View Journal on Gumroad',
    external: true,
    featured: true,
  },
  {
    title: 'Beautiful Dragonfly Rhinestone Keychain',
    description: 'A sparkling Pink or Blue dragonfly charm with gold-tone hardware — a giftable reminder of growth, light, and gentle transformation.',
    icon: 'DF',
    href: dragonflyKeychainUrl,
    priceLabel: '$9.99 · Physical item',
    buttonLabel: 'See Colors & Details',
    external: false,
  },
  {
    title: 'Gentle Morning Reset Pack',
    description: 'Soft morning pages created to help you begin the day with faith, calm, and care.',
    icon: 'AM',
    image: '/images/gentle-morning-reset-pack.jpg',
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
    title: 'Why You Don’t Need to Earn Rest',
    description: 'A faith-rooted reminder that rest is not a reward for finishing everything.',
    href: '/blog/why-you-dont-need-to-earn-rest',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
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

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Faith • Flow • Flourish</p>
          <h1>Journals and little resets for women who take care of everyone but themselves.</h1>
          <p>
            I make faith-rooted journals, gentle gifts, and seasonal encouragement — the kind of things
            that sit on your nightstand and quietly remind you it&apos;s okay to stop for a minute.
          </p>
          <div className="hero-actions">
            <a className="button" href="#start">Start Here</a>
            <a className="button secondary" href="#shop">Browse the DGK Shop</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Featured DivaglamKreation message">
          <div className="hero-card-inner">
            <p className="eyebrow">The Gentle Reset</p>
            <h2>Free 3-Day Faith Reset</h2>
            <p>
              Three days. A few pages each. Reflection prompts, a little prayer space, room to put
              down what&apos;s been heavy. Print it, grab a pen, and begin softly.
            </p>
            <a className="button" href={gentleResetUrl} target="_blank" rel="noopener noreferrer">
              Download Free on Gumroad
            </a>
          </div>
        </aside>
      </section>

      <section className="section start-section" id="start">
        <p className="eyebrow">Start Here</p>
        <h2>Not sure where to begin?</h2>
        <p>Start small. Try the free 3-day reset, browse the shop, or read a quiet note with your coffee.</p>
        <p>There&apos;s no right order — choose what fits this week.</p>
        <div className="hero-actions">
          <a className="button" href="#shop">Browse the Shop</a>
          <a className="button secondary" href="/blog">Read the Blog</a>
        </div>
      </section>

      <section className="section" id="shop">
        <p className="eyebrow">Shop</p>
        <h2>Small tools for real-life pauses.</h2>
        <p>Digital journals are delivered through Gumroad. The physical charm uses secure GoDaddy checkout.</p>
        <div className="product-grid">
          {products.map((product) => (
            <article className={product.featured ? 'card featured-card' : 'card'} key={product.title}>
              {product.image ? (
                <img className="card-product-image" src={product.image} alt={product.imageAlt} />
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
          <h2 id="dragonfly-keychain-title">Beautiful Dragonfly Rhinestone Keychain</h2>
          <p>A sparkling little symbol of growth and transformation for your keys, purse, backpack, or journal pouch.</p>
          <div className="hero-actions">
            <a className="button" href={dragonflyKeychainUrl}>View Keychain Details</a>
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
            DivaglamKreation creates paper goods and digital pieces for women who need encouragement
            in ordinary moments. The goal is simple: make useful things that feel warm, thoughtful,
            and easy to return to.
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
          <p className="eyebrow">Join the DGK Glowlist</p>
          <h2>A gentle note for your inbox.</h2>
          <p>Receive new journal prompts, product updates, and behind-the-glow notes.</p>
          <div className="email-form" aria-label="Glowlist subscription actions">
            <a className="button" href={gumroadSubscribeUrl} target="_blank" rel="noopener noreferrer">Join on Gumroad</a>
            <a className="button secondary" href="/glowlist">Learn More</a>
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
