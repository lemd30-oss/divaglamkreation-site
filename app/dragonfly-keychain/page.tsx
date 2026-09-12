export const metadata = {
  title: 'Dragonfly Reminder Charm',
  description:
    'A sparkling gold-tone dragonfly reminder charm available in Pink or Blue. A giftable DGK symbol of growth, light, and gentle transformation.',
  alternates: { canonical: '/dragonfly-keychain' },
};

const orderUrl =
  'https://a85da190-df2c-44b8-9510-5fb19ca1b186.paylinks.godaddy.com/p/8ff7cff0-6da6-4ac1-a31b-c70fd941358e';
const pinkImageUrl =
  'https://raw.githubusercontent.com/lemd30-oss/divaglamkreation-site/main/dgk-dragonfly-pink-website.jpg';

export default function DragonflyKeychainPage() {
  return (
    <main className="site-shell" id="main-content">
      <header className="header">
        <a className="logo" href="/" aria-label="DivaglamKreation home">
          <span className="logo-mark">DK</span>
          <span>DivaglamKreation</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#shop">Shop</a>
          <a href="/#about">About</a>
          <a href="/glowlist">Glowlist</a>
        </nav>
      </header>

      <section className="hero" id="top" style={{ alignItems: 'center' }}>
        <div className="hero-copy">
          <h1 style={{ fontSize: 'clamp(2.75rem, 6vw, 4.75rem)', lineHeight: 0.98 }}>
            Dragonfly Reminder Charm
          </h1>
          <p style={{ maxWidth: '620px' }}>
            A sparkling little reminder to keep growing—gently and in your own time.
          </p>

          <p
            aria-label="Price: 9 dollars and 99 cents"
            style={{
              color: 'var(--ink, #4b382f)',
              fontFamily: 'Georgia, serif',
              fontSize: '1.65rem',
              fontWeight: 700,
              margin: '1.25rem 0 0',
            }}
          >
            $9.99
          </p>

          <p className="trust-note" style={{ marginTop: '0.65rem' }}>
            Available in Pink or Blue. Choose your color at checkout.
          </p>

          <div className="hero-actions" style={{ marginTop: '1.25rem' }}>
            <a className="button" href={orderUrl}>
              Choose Pink or Blue
            </a>
          </div>

          <p className="trust-note">Limited quantities available.</p>
        </div>

        <aside className="hero-card" aria-label="Pink Dragonfly Reminder Charm product photo">
          <img
            src={pinkImageUrl}
            alt="Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp"
            style={{
              display: 'block',
              width: '100%',
              maxHeight: '460px',
              objectFit: 'cover',
              borderRadius: 'inherit',
            }}
          />
        </aside>
      </section>

      <section className="section" aria-labelledby="dragonfly-details-title">
        <p className="eyebrow">A Meaningful Little Gift</p>
        <h2 id="dragonfly-details-title">A gentle reminder for the journey.</h2>
        <p style={{ maxWidth: '680px' }}>
          Carry it on your keys, purse, backpack, or journal pouch as a small symbol of growth,
          light, and transformation.
        </p>
        <ul style={{ lineHeight: 1.9, marginTop: '1rem', paddingLeft: '1.25rem' }}>
          <li>Sparkling dragonfly design</li>
          <li>Gold-tone keyring and lobster clasp</li>
          <li>Available in Pink or Blue</li>
          <li>Lightweight and giftable</li>
        </ul>
        <p style={{ fontStyle: 'italic', marginTop: '1.5rem' }}>
          You mattered before anyone was looking.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          <a href="/#shop">← Continue shopping</a>
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p>
          <a href="/">Home</a> · <a href="/#shop">Shop</a> · <a href="/glowlist">Glowlist</a> ·{' '}
          <a href="mailto:divaglamkreation@gmail.com">Email</a>
        </p>
      </footer>
    </main>
  );
}
