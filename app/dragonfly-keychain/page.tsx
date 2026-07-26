export const metadata = {
  title: 'Dragonfly Reminder Charm | DivaglamKreation',
  description:
    'A sparkling gold-tone dragonfly reminder charm available in Pink or Blue. A giftable DGK symbol of growth, light, and gentle transformation.',
};

const orderUrl =
  'https://a85da190-df2c-44b8-9510-5fb19ca1b186.paylinks.godaddy.com/p/8ff7cff0-6da6-4ac1-a31b-c70fd941358e';
const pinkImageUrl = '/dgk-dragonfly-pink-website.jpg';
const blueImageUrl = '/dgk-dragonfly-blue-website.jpg';

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

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Little Glow Gift · Limited Batch</p>
          <h1>Dragonfly Reminder Charm</h1>
          <p>
            A sparkling carry-with-you reminder of growth, light, and transformation — made for the
            woman learning to move forward without rushing herself.
          </p>
          <p>
            Clip this lightweight charm to your keys, purse, backpack, or journal pouch for a little
            touch of beauty and encouragement wherever you go.
          </p>
          <div className="hero-actions">
            <a className="button" href={orderUrl}>Buy Now for $9.99</a>
            <a className="button secondary" href="/#shop">Return to the Collection</a>
          </div>
          <p className="trust-note">Available in Pink or Blue while this limited batch lasts.</p>
        </div>

        <aside className="hero-card" aria-label="Pink Dragonfly Reminder Charm product photo">
          <img
            src={pinkImageUrl}
            alt="Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              maxHeight: '520px',
              objectFit: 'cover',
              borderRadius: 'inherit',
            }}
          />
        </aside>
      </section>

      <section className="section featured-product">
        <div>
          <p className="eyebrow">Choose Your Color</p>
          <h2>Pink or blue, with the same gentle meaning.</h2>
          <p>
            Both versions feature sparkling rhinestones, delicate wing details, a gold-tone keyring,
            and an easy-to-use lobster clasp.
          </p>
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              marginTop: '1.5rem',
            }}
          >
            <figure style={{ margin: 0 }}>
              <img
                src={pinkImageUrl}
                alt="Pink Dragonfly Reminder Charm"
                style={{ borderRadius: '1.25rem', display: 'block', width: '100%' }}
              />
              <figcaption className="trust-note">Pink</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <img
                src={blueImageUrl}
                alt="Blue Dragonfly Reminder Charm"
                style={{ borderRadius: '1.25rem', display: 'block', width: '100%' }}
              />
              <figcaption className="trust-note">Blue</figcaption>
            </figure>
          </div>
          <div className="hero-actions">
            <a className="button" href={orderUrl}>Choose Pink or Blue</a>
          </div>
        </div>

        <div className="details-card">
          <p className="eyebrow">Product Details</p>
          <ul>
            <li>Sparkling rhinestone dragonfly design</li>
            <li>Available in Pink or Blue</li>
            <li>Gold-tone keyring and lobster clasp</li>
            <li>Lightweight and easy to clip on</li>
            <li>Works as a keychain, purse charm, or backpack charm</li>
            <li>Giftable DGK “Little Glow Gift”</li>
            <li>Physical item · limited-batch availability</li>
          </ul>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">A Gentle Companion</p>
          <h2>More than a keychain — a small symbol of becoming.</h2>
          <p>
            The dragonfly is often connected with change, resilience, and light. This sparkling charm
            turns that meaning into a useful everyday keepsake you can carry on your keys, purse,
            backpack, or planner pouch.
          </p>
          <p>
            It is a thoughtful little gift for a friend, daughter, teen, coworker, or anyone who could
            use a beautiful reminder that growth can happen gently.
          </p>
        </div>
        <div className="quote-panel">
          <p className="eyebrow">Faith • Flow • Flourish</p>
          <h2>Carry a little light with you.</h2>
          <p>A small, sparkling reminder that becoming can be quiet, faithful, and beautifully your own.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="dragonfly-order-title">
        <div className="email-box">
          <p className="eyebrow">$9.99 · Limited Batch</p>
          <h2 id="dragonfly-order-title">Choose your color and check out.</h2>
          <p>
            Open the secure checkout, choose Pink or Blue, and complete your Dragonfly Reminder Charm order.
          </p>
          <div className="email-form">
            <a className="button" href={orderUrl}>Go to Secure Checkout</a>
          </div>
        </div>
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
