import { pageMetadata } from '../metadata';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata = pageMetadata("Return & Refund Policy", "Read the DivaglamKreation return and refund policy for free journal downloads, direct physical orders, Amazon and Lulu purchases, damaged items, and cancellations.", "/return-policy", "/images/brand/glow-owl.png");

export default function ReturnPolicyPage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="section policy-page">
        <p className="eyebrow">Customer Care</p>
        <h1>Return &amp; Refund Policy</h1>
        <p className="trust-note">Last updated October 29, 2026.</p>
        <p>
          At DivaglamKreation, each product is created with care and intention. This policy explains how returns,
          refunds, replacements, cancellations, and access to the free Glowlist journal are handled.
        </p>

        <div className="policy-stack">
          <article className="details-card" id="digital-products">
            <h2>Free Glowlist journal</h2>
            <p>
              The 3-Day Pause is a free printable journal delivered by email after joining the Glowlist.
              There is no charge to refund. If the download does not arrive or the file will not open,
              please <a href="/contact">contact us</a> so we can help.
            </p>
          </article>

          <article className="details-card" id="physical-products">
            <h2>Physical products</h2>
            <p>
              For physical items purchased directly from DivaglamKreation, we accept return requests within 14 days of delivery for eligible products. To be eligible,
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
              If your order arrives damaged, defective, or incorrect, contact us within seven days of delivery.
              We may ask for photographs of the item and packaging so we can review the issue.
            </p>
            <p>
              When appropriate, we may offer a replacement, store credit, or refund.
            </p>
          </article>

          <article className="details-card" id="non-returnable">
            <h2>Non-returnable items</h2>
            <p>
              Personalized or custom-made items, items marked final sale, and items used or damaged after
              delivery may not be eligible for return. The free journal does not involve a purchase.
              Any exceptions required by applicable law still apply.
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
              For orders placed directly with DivaglamKreation, contact us as soon as possible if you need to
              cancel. Orders already in production, shipped, or personalized may not be eligible for cancellation.
              For orders placed through Amazon or Lulu, follow the applicable retailer&apos;s cancellation process.
            </p>
          </article>

          <article className="details-card" id="retailer-orders">
            <h2>Orders placed through Amazon or Lulu</h2>
            <p>
              Paperback and hardcover orders placed through Amazon or Lulu are processed and fulfilled by those
              retailers. Their applicable return, refund, damage, and cancellation policies govern those orders.
              Please use the retailer&apos;s order history or customer support to request assistance.
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

      <SiteFooter />
    </main>
  );
}
