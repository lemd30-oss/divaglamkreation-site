const gumroadShopUrl = 'https://lemdo8.gumroad.com/';
const contactEmail = 'mailto:divaglamkreation@gmail.com';
const facebookUrl = 'https://www.facebook.com/share/1G9VQrJnaZ/';

const products = [
  {
    title: '3-Day Mini Reset Journal',
    description: 'A gentle printable journal for a quiet pause, a fresh breath, and a simple reset.',
    icon: '03',
    href: gumroadShopUrl,
  },
  {
    title: '7-Day Gentle Reset Journal',
    description: 'A soft weekly companion for reflection, faith, planning, and becoming with intention.',
    icon: '07',
    href: gumroadShopUrl,
    featured: true,
  },
  {
    title: 'Gentle Morning Reset Pack',
    description: 'Soft morning pages created to help you begin the day with faith, calm, and care.',
    icon: 'AM',
    href: gumroadShopUrl,
  },
];

const blogPosts = [
  'How to Begin a Gentle Reset Routine',
  'Journal Prompts for a Softer Season',
  'Faith, Creativity, and Becoming Again',
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
          <a href="#blog">Blog</a>
          <a href="#glowlist">Glowlist</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Faith • Flow • Flourish</p>
          <h1>Faith-rooted journals and creative pieces for your gentle reset.</h1>
          <p>
            DivaglamKreation is where faith, creativity, and gentle encouragement meet — through
            journals, stickers, and seasonal pieces made to help you feel grounded, inspired, and
            softly reminded of who you are becoming.
          </p>
          <div className="hero-actions">
            <a className="button" href="#start">Start Here</a>
            <a className="button secondary" href={gumroadShopUrl}>Shop on Gumroad</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Featured DivaglamKreation message">
          <div className="hero-card-inner">
            <p className="eyebrow">7-Day Reset Journal</p>
            <h2>Pause. Reflect. Begin again.</h2>
            <p>
              A calm printable companion for the woman who is learning to move with grace,
              intention, and quiet confidence.
            </p>
          </div>
        </aside>
      </section>

      <section className="section start-section" id="start">
        <p className="eyebrow">Start Here</p>
        <h2>Choose your gentle beginning.</h2>
        <p>
          DivaglamKreation creates soft, faith-rooted digital journals and reset tools to help you
          pause, reflect, and return to yourself with peace and intention.
        </p>
        <p>
          Whether you need a quiet morning reset, a fresh start for the week, or a small reminder
          of grace, these printable pieces were made to meet you gently where you are.
        </p>
        <div className="hero-actions">
          <a className="button" href={gumroadShopUrl}>Shop the 7-Day Reset Journal</a>
          <a className="button secondary" href="#glowlist">Join the Glowlist</a>
        </div>
      </section>

      <section className="section featured-product" id="shop">
        <div>
          <p className="eyebrow">Featured Reset Journal</p>
          <h2>7-Day Gentle Reset Journal</h2>
          <p>
            The 7-Day Gentle Reset Journal is a soft printable journal created to help you slow
            down, reflect, and begin again with intention.
          </p>
          <p>
            Inside, you’ll find guided pages for gentle reflection, morning focus, emotional
            grounding, and faith-centered encouragement. Use it during your quiet time, morning
            routine, Sunday reset, or whenever your heart needs a calmer rhythm.
          </p>
          <a className="button" href={gumroadShopUrl}>Get the 7-Day Reset Journal</a>
          <p className="trust-note">
            Digital product. No physical item will be shipped. Your printable PDF will be available
            through Gumroad after checkout.
          </p>
        </div>
        <div className="details-card">
          <p className="eyebrow">What’s Included</p>
          <ul>
            <li>7 days of guided reset pages</li>
            <li>Gentle reflection prompts</li>
            <li>Morning intention space</li>
            <li>Evening check-in space</li>
            <li>Faith-rooted encouragement</li>
            <li>Printable PDF format</li>
            <li>Instant digital download through Gumroad</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Featured Collection</p>
        <h2>Gentle tools for your next soft reset.</h2>
        <p>
          Start with the core DGK pieces and let each product lead you into reflection,
          encouragement, and peaceful daily rhythm.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <article className={product.featured ? 'card featured-card' : 'card'} key={product.title}>
              <div className="card-image">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a className="button secondary" href={product.href}>View Details</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section how-it-works">
        <p className="eyebrow">How It Works</p>
        <h2>From checkout to quiet time in a few simple steps.</h2>
        <div className="steps-grid">
          <div className="step-card"><span>1</span><p>Choose your reset tool.</p></div>
          <div className="step-card"><span>2</span><p>Checkout securely through Gumroad.</p></div>
          <div className="step-card"><span>3</span><p>Download your printable PDF.</p></div>
          <div className="step-card"><span>4</span><p>Print it at home or use it digitally.</p></div>
          <div className="step-card"><span>5</span><p>Begin your reset at your own pace.</p></div>
        </div>
      </section>

      <section className="section split" id="about">
        <div>
          <p className="eyebrow">Behind the Glow</p>
          <h2>A brand built with heart, faith, and creative purpose.</h2>
          <p>
            DivaglamKreation creates meaningful paper goods and digital pieces for women who want
            to feel encouraged in everyday moments. Each collection is designed to feel warm,
            timeless, reflective, and easy to return to.
          </p>
          <p>
            The heart of DGK is simple: make room for grace, honor the quiet work of becoming, and
            create beauty that helps people feel gently seen.
          </p>
        </div>
        <div className="quote-panel">
          <p className="eyebrow">Gentle Reminder</p>
          <h2>You are allowed to begin softly.</h2>
          <p>
            Growth does not always have to be loud. Sometimes it starts with a prayer, a page, and
            one faithful next step.
          </p>
        </div>
      </section>

      <section className="section" id="blog">
        <p className="eyebrow">Journal Notes</p>
        <h2>Fresh reflections for faith, creativity, and gentle routines.</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="card" key={post}>
              <p className="eyebrow">Blog Preview</p>
              <h3>{post}</h3>
              <p>A thoughtful DGK note designed for Pinterest traffic, brand trust, and quiet encouragement.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="glowlist">
        <div className="email-box">
          <p className="eyebrow">Join the Glowlist</p>
          <h2>Receive soft resets, journal prompts, and seasonal updates.</h2>
          <p>
            A simple email space for new products, printable gifts, behind-the-glow notes, and
            gentle reminders for your week.
          </p>
          <form className="email-form">
            <input aria-label="Email address" placeholder="Your email address" type="email" />
            <button type="submit">Join the Glowlist</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p>
          <a href={gumroadShopUrl}>Gumroad</a> · <a href={facebookUrl}>Facebook</a> · <a href={contactEmail}>Email</a>
        </p>
      </footer>
    </main>
  );
}
