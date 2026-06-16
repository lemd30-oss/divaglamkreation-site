const gumroadSubscribeUrl = 'https://lemdo8.gumroad.com/subscribe';
const gumroadShopUrl = 'https://lemdo8.gumroad.com/';

const glowlistNotes = [
  'Faith-rooted encouragement for your reset season',
  'Gentle journaling prompts to help you pause and reflect',
  'Behind-the-glow updates from DivaglamKreation',
  'Soft reminders for becoming with grace',
];

export default function GlowlistPage() {
  return (
    <main className="site-shell">
      <header className="header">
        <a className="logo" href="/" aria-label="DivaglamKreation home">
          <span className="logo-mark">DK</span>
          <span>DivaglamKreation</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#shop">Shop</a>
          <a href="/#blog">Blog</a>
          <a href={gumroadSubscribeUrl}>Subscribe</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The DGK Glowlist</p>
          <h1>A gentle email space for faith, journaling, and soft reset reminders.</h1>
          <p>
            Join The DGK Glowlist for faith-rooted notes, journaling prompts, creative updates,
            and gentle reminders from DivaglamKreation. This space was created to help you pause,
            reset, and keep becoming with grace.
          </p>
          <div className="hero-actions">
            <a className="button" href={gumroadSubscribeUrl}>Join the Glowlist</a>
            <a className="button secondary" href={gumroadShopUrl}>Download the Free Journal</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="The DGK Glowlist welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">Begin Softly</p>
            <h2>You do not have to rush your growth.</h2>
            <p>
              Start with one quiet reminder, one journal prompt, and one faithful next step. The Glowlist
              is a simple way to stay connected to gentle encouragement and creative updates.
            </p>
          </div>
        </aside>
      </section>

      <section className="section start-section">
        <p className="eyebrow">What You’ll Receive</p>
        <h2>Gentle notes for your reset season.</h2>
        <div className="product-grid">
          {glowlistNotes.map((note) => (
            <article className="card" key={note}>
              <p>{note}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button" href={gumroadSubscribeUrl}>Subscribe on Gumroad</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p>
          <a href="/">Home</a> · <a href={gumroadShopUrl}>Gumroad</a> · <a href={gumroadSubscribeUrl}>Subscribe</a>
        </p>
      </footer>
    </main>
  );
}
