export const metadata = {
  title: 'Dragonfly Keychain | DivaglamKreation',
  description:
    'A gentle carry-with-you reminder that transformation does not need hustle. A limited-batch physical keychain from DivaglamKreation.',
};

const orderUrl =
  'mailto:divaglamkreation@gmail.com?subject=Dragonfly%20Keychain%20Order&body=Hello%20DGK%2C%20I%20would%20like%20to%20order%20a%20Dragonfly%20Keychain.';

export default function DragonflyKeychainPage() {
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
          <a href="/#about">About</a>
          <a href="/glowlist">Glowlist</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Limited-Batch Physical Keepsake</p>
          <h1>The Dragonfly Keychain</h1>
          <p>
            The dragonfly doesn’t rush. She rests, she moves, she rests again — and she still gets
            where she’s going.
          </p>
          <p>
            This small carry-with-you reminder was created for the road you are already walking:
            transformation does not need hustle.
          </p>
          <div className="hero-actions">
            <a className="button" href={orderUrl}>Claim Yours</a>
            <a className="button secondary" href="/#shop">Return to the Collection</a>
          </div>
          <p className="trust-note">Only a few are available in this batch.</p>
        </div>

        <aside className="hero-card" aria-label="Dragonfly keychain message">
          <div className="hero-card-inner">
            <p className="eyebrow">Carry a Little Permission</p>
            <h2>Move at your own pace.</h2>
            <p>
              Clip it to your keys, your bag, or your journal pouch — a little touch of Faith. Flow.
              Flourish. for the road.
            </p>
          </div>
        </aside>
      </section>

      <section className="section featured-product">
        <div>
          <p className="eyebrow">A Gentle Companion</p>
          <h2>A reminder for wherever your hands go.</h2>
          <p>
            Some reminders belong on the page. Others need to travel with you. The Dragonfly
            Keychain is a small, pretty nudge that you are allowed to rest, move, and begin again
            without forcing the process.
          </p>
          <p>
            Carry it as a symbol of quiet transformation — the kind that unfolds with faith,
            patience, and one gentle next step at a time.
          </p>
          <a className="button" href={orderUrl}>Order the Dragonfly Keychain</a>
        </div>

        <div className="details-card">
          <p className="eyebrow">Product Details</p>
          <ul>
            <li>Physical dragonfly keychain</li>
            <li>Made to clip onto keys, bags, or planner pouches</li>
            <li>DGK symbol of transformation without hustle</li>
            <li>Giftable encouragement for yourself or someone you love</li>
            <li>Part of a small limited batch</li>
          </ul>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">The Meaning</p>
          <h2>Rest. Move. Rest again.</h2>
          <p>
            Growth does not always arrive in a straight line. The dragonfly reminds us that pausing
            is not falling behind, and gentle movement still carries us forward.
          </p>
        </div>
        <div className="quote-panel">
          <p className="eyebrow">Faith • Flow • Flourish</p>
          <h2>Carry a little permission with you.</h2>
          <p>Transformation can be quiet, faithful, and beautifully unhurried.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="dragonfly-order-title">
        <div className="email-box">
          <p className="eyebrow">Limited Batch</p>
          <h2 id="dragonfly-order-title">Ready to carry yours?</h2>
          <p>
            Send your order request and DGK will follow up with availability, price, and purchase
            details.
          </p>
          <div className="email-form">
            <a className="button" href={orderUrl}>Start Your Order</a>
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
