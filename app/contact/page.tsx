export const metadata = {
  title: 'Contact',
  description: 'Contact DivaglamKreation for help with digital downloads, physical orders, or general questions.',
};

export default function ContactPage() {
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
          <a href="/blog">Blog</a>
          <a href="/policies">Policies</a>
        </nav>
      </header>

      <section className="section policy-page">
        <p className="eyebrow">Customer Care</p>
        <h1>How can I help?</h1>
        <p>
          For digital-download help, physical-order questions, or anything else related to DivaglamKreation,
          email <a className="text-link" href="mailto:divaglamkreation@gmail.com">divaglamkreation@gmail.com</a>.
        </p>

        <div className="policy-grid">
          <article className="details-card">
            <h2>Digital downloads</h2>
            <p>Include the email address used at Gumroad, the product name, and a short description of the problem.</p>
          </article>
          <article className="details-card">
            <h2>Physical orders</h2>
            <p>Include the name used at checkout, the order date, and the item or color you selected.</p>
          </article>
        </div>

        <div className="details-card contact-note">
          <h2>Response time</h2>
          <p>Please allow up to two business days for a reply. Messages are answered with care in the order received.</p>
          <a className="button" href="mailto:divaglamkreation@gmail.com">Email DivaglamKreation</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p><a href="/">Home</a> · <a href="/policies">Policies</a> · <a href="/blog">Blog</a></p>
      </footer>
    </main>
  );
}