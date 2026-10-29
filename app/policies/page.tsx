import { pageMetadata } from '../metadata';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata = pageMetadata("Policies", "Read DivaglamKreation policies for free printable journals, physical orders, shipping, returns, privacy, customer support, and personal-use product terms.", "/policies", "/images/brand/glow-owl.png");

export default function PoliciesPage() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />

      <section className="section policy-page">
        <p className="eyebrow">Customer Information</p>
        <h1>Shop policies</h1>
        <p className="trust-note">Last updated October 29, 2026.</p>
        <p>
          DivaglamKreation offers The 3-Day Pause as a free printable resource through the Glowlist, printed journals sold through Amazon
          and Lulu, and limited-batch physical products paid for through GoDaddy Payments. No paid downloadable journals are offered. These policies explain what customers can expect.
        </p>

        <div className="policy-stack">
          <article className="details-card" id="digital-downloads">
            <h2>Free Glowlist resource</h2>
            <p>
              The 3-Day Pause is a free journal PDF sent by email when you join the Glowlist.
              Please use a working email address and save your downloaded files.
            </p>
            <p>
              The free journal file is for the recipient&apos;s personal use only. They may be printed for personal use,
              but may not be resold, shared, redistributed, or used commercially without written permission.
            </p>
          </article>

          <article className="details-card" id="refunds">
            <h2>Refunds and order concerns</h2>
            <p>
              The 3-Day Pause is free and delivered by email through the Glowlist, so no purchase or refund
              is required. If you do not receive the journal or have trouble opening it, please contact us
              so we can help with access.
            </p>
            <p>
              For physical items purchased directly from DivaglamKreation, contact us within seven days
              of delivery if your item arrives damaged, defective, or incorrect, with your order details
              and photographs if available. Eligible concerns will be reviewed for an appropriate resolution.
              Return requests for eligible direct orders may be made within 14 days of delivery.
              Orders placed through Amazon or Lulu follow those retailers&apos; return and refund processes.
            </p>
            <p>
              Full details on returns, cancellations, and refunds are in our{' '}
              <a className="text-link" href="/return-policy">Return &amp; Refund Policy</a>.
            </p>
          </article>

          <article className="details-card" id="shipping">
            <h2>Shipping and fulfillment</h2>
            <p>
              Limited-batch physical products purchased directly from DivaglamKreation are fulfilled by us.
              Books ordered through Amazon or Lulu are fulfilled by those retailers. Shipping charges and
              delivery details are provided by the checkout provider for each order.
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
              answer support requests, and send requested Glowlist updates. Checkout providers such as Amazon, Lulu,
              and GoDaddy Payments process payment and order information under their own privacy practices, and
              Flodesk manages Glowlist email signups.
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

      <SiteFooter />
    </main>
  );
}