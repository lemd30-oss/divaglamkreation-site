const products = [
  {
    title: '3-Day Mini Reset Journal',
    description: 'A gentle printable journal for a quiet pause, a fresh breath, and a simple reset.',
    icon: '03',
  },
  {
    title: '7-Day Reset Journal',
    description: 'A soft weekly companion for reflection, faith, planning, and becoming with intention.',
    icon: '07',
  },
  {
    title: 'Seasonal Sticker Pieces',
    description: 'Cozy creative accents made for journals, planners, care gifts, and gentle reminders.',
    icon: 'DGK',
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
            <a className="button" href="#shop">Shop the Collection</a>
            <a className="button secondary" href="#about">Read the Story</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Featured DivaglamKreation message">
          <div className="hero-card-inner">
            <p className="eyebrow">Summer Glow</p>
            <h2>Pause. Reflect. Begin again.</h2>
            <p>
              A calm creative space for the woman who is learning to move with grace, intention,
              and quiet confidence.
            </p>
          </div>
        </aside>
      </section>

      <section className="section" id="shop">
        <p className="eyebrow">Featured Collection</p>
        <h2>Gentle tools for your next soft reset.</h2>
        <p>
          Start with the core DGK pieces and let each product lead your audience into reflection,
          encouragement, and peaceful daily rhythm.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <article className="card" key={product.title}>
              <div className="card-image">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a className="button secondary" href="#glowlist">View Details</a>
            </article>
          ))}
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
      </footer>
    </main>
  );
}
