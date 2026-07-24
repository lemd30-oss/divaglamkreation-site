export const metadata = {
  title: 'Policies',
  description: 'DivaglamKreation policies for digital downloads, physical orders, privacy, refunds, and customer support.',
};

export default function PoliciesPage() {
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
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>

      <section className="section policy-page">
        <p className="eyebrow">Customer Information</p>
        <h1>Shop policies</h1>
        <p className="trust-note">Last updated July 24, 2026.</p>
        <p>
          DivaglamKreation offers digital products delivered through Gumroad and limited-batch physical products
          paid for through GoDaddy Payments. These policies explain what customers can expect.
        </p>

        <div className="policy-stack">
          <article className="details-card" id="digital-downloads">
            <h2>Digital downloads</h2>
            <p>
              Digital journals and reset packs are delivered by Gumroad to the email address used at checkout.
              Customers are responsible for entering a working email address and saving their downloaded files.
            </p>
            <p>
              Digital files are for the purchaser&apos;s personal use only. They may be printed for personal use,
              but may not be resold, shared, redistributed, or used commercially without written permission.
            </p>
          </article>

          <article className="details-card" id="refunds">
            <h2>Refunds and order concerns</h2>
            <p>
              Because digital products are delivered immediately, digital purchases are generally final.
              Please contact DivaglamKreation if you experience a duplicate charge, receive the wrong file,
              or cannot access your purchase so the issue can be reviewed.
            </p>
            <p>
              For a physical item that arrives damaged or incorrect, email within seven days of delivery with
              the order details and clear photographs of the item and packaging. Eligible concerns will be
              reviewed for a replacement or other appropriate resolution.
            </p>
          </article>

          <article className="details-card" id="shipping">
            <h2>Shipping and fulfillment</h2>
            <p>
              Physical products are limited-batch items fulfilled by DivaglamKreation. Shipping details and
              any applicable charges are shown during checkout or communicated with the order confirmation.
              Delivery estimates are not guarantees and may be affected by the carrier, weather, or holidays.
            </p>
            <p>
              Customers are responsible for providing a complete and accurate shipping address. Contact us as
              soon as possible if an address needs correction; changes cannot be guaranteed after fulfillment begins.
            </p>
          </article>

          <article className="details-card" id="privacy">
            <h2>Privacy</h2>
            <p>
              DivaglamKreation uses customer information only as needed to provide products, fulfill orders,
              answer support requests, and send requested Glowlist updates. Checkout providers such as Gumroad
              and GoDaddy Payments process payment and order information under their own privacy practices.
            </p>
            <p>
              DivaglamKreation does not sell customer contact information. Customers may unsubscribe from
              marketing messages using the link included in those messages.
            </p>
          </article>

          <article className="details-card" id="terms">
            <h2>Website and product terms</h2>
            <p>
              Website content, product designs, writing, graphics, and the DivaglamKreation brand are protected
              creative work. Visitors may browse and purchase for personal use but may not copy, republish,
              scrape, reproduce, or commercially exploit the content without written permission.
            </p>
            <p>
              Product colors may appear slightly different across screens and printed materials. DivaglamKreation
              may update products, prices, availability, and these policies as the shop grows.
            </p>
          </article>
        </div>

        <div className="email-box policy-contact">
          <p className="eyebrow">Questions?</p>
          <h2>We&apos;re here to help.</h2>
          <p>Email order and policy questions to divaglamkreation@gmail.com.</p>
          <a className="button" href="mailto:divaglamkreation@gmail.com">Contact Customer Care</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p><a href="/">Home</a> · <a href="/contact">Contact</a> · <a href="/blog">Blog</a></p>
      </footer>
    </main>
  );
}