export const metadata = {
  title: 'Return & Refund Policy',
  description: 'Read the DivaglamKreation return and refund policy for digital downloads, eligible physical products, damaged orders, cancellations, and replacements.',
  alternates: { canonical: '/return-policy' },
  openGraph: {
    type: 'website',
    url: '/return-policy',
    siteName: 'DivaglamKreation',
    title: 'Return & Refund Policy | DivaglamKreation',
    description: 'Return and refund guidance for DivaglamKreation digital downloads, physical products, damaged orders, cancellations, and replacements.',
    images: [{ url: '/images/gentle-morning-reset-pack.jpg', alt: 'DivaglamKreation customer care and product support' }],
  },
};

export default function ReturnPolicyPage() {
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
        <p className="eyebrow">Customer Care</p>
        <h1>Return &amp; Refund Policy</h1>
        <p className="trust-note">Last updated August 6, 2026.</p>
        <p>
          At DivaglamKreation, each product is created with care and intention. This policy explains how returns,
          refunds, replacements, cancellations, and digital purchases are handled.
        </p>

        <div className="policy-stack">
          <article className="details-card" id="digital-products">
            <h2>Digital products</h2>
            <p>
              Because digital products are delivered electronically and cannot be physically returned, digital
              downloads are generally non-refundable once the files have been accessed or downloaded.
            </p>
            <p>
              If you experience a technical issue, receive the wrong file, or are unable to access your purchase,
              please contact us so we can help resolve the issue. Refunds will also be provided where required by
              applicable law.
            </p>
          </article>

          <article className="details-card" id="physical-products">
            <h2>Physical products</h2>
            <p>
              We accept return requests for eligible physical products within 14 days of delivery. To be eligible,
              the item should be unused, in its original condition, and returned with its original packaging when
              reasonably possible. Proof of purchase may be required.
            </p>
            <p>
              Please contact us before sending an item back so we can provide return instructions.
            </p>
          </article>

          <article className="details-card" id="damaged-items">
            <h2>Damaged, defective, or incorrect items</h2>
            <p>
              If your order arrives damaged, defective, or incorrect, contact us as soon as possible. We may ask
              for photographs of the item and packaging so we can review the issue.
            </p>
            <p>
              When appropriate, we may offer a replacement, store credit, or refund.
            </p>
          </article>

          <article className="details-card" id="non-returnable">
            <h2>Non-returnable items</h2>
            <p>
              Certain products may not be eligible for return, including downloaded digital products, personalized
              or custom-made items, items marked final sale, and products that have been used or damaged after
              delivery. Any exceptions required by applicable law still apply.
            </p>
          </article>

          <article className="details-card" id="return-shipping">
            <h2>Return shipping</h2>
            <p>
              Unless a product arrived damaged, defective, or incorrect, customers are generally responsible for
              return shipping costs. Original shipping charges are generally non-refundable.
            </p>
            <p>
              If a return is due to an error by DivaglamKreation, we will provide appropriate return instructions.
            </p>
          </article>

          <article className="details-card" id="refunds">
            <h2>Refunds</h2>
            <p>
              Once an eligible return is received and reviewed, we will notify you regarding approval of the refund.
              Approved refunds are generally issued to the original payment method. Processing times may vary by
              bank or payment provider.
            </p>
          </article>

          <article className="details-card" id="exchanges">
            <h2>Exchanges</h2>
            <p>
              We do not guarantee direct exchanges. If you would like a different product, contact us. Depending on
              the situation, we may recommend returning the eligible item and placing a new order.
            </p>
          </article>

          <article className="details-card" id="cancellations">
            <h2>Order cancellations</h2>
            <p>
              If you need to cancel an order, contact us as soon as possible. Orders that have already entered
              production, been shipped, personalized, or digitally delivered may not be eligible for cancellation.
            </p>
          </article>
        </div>

        <div className="email-box policy-contact">
          <p className="eyebrow">Questions?</p>
          <h2>We&apos;re here to help.</h2>
          <p>
            Email return and refund questions to divaglamkreation@gmail.com. Please include your name, order number,
            and a short description of the issue.
          </p>
          <a className="button" href="mailto:divaglamkreation@gmail.com">Contact Customer Care</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p>
          <a href="/">Home</a> · <a href="/contact">Contact</a> · <a href="/blog">Blog</a> ·{' '}
          <a href="/policies">Policies</a>
        </p>
      </footer>
    </main>
  );
}
