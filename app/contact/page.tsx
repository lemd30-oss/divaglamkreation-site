import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact DivaglamKreation for friendly help with digital downloads, physical orders, product questions, order concerns, and general customer support.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="section policy-page">
        <p className="eyebrow">Customer Care</p>
        <h1>How can I help?</h1>
        <p>
          For help with an order or product, email{' '}
          <a className="text-link" href="mailto:divaglamkreation@gmail.com">divaglamkreation@gmail.com</a>.
        </p>

        <div className="policy-grid">
          <article className="details-card">
            <h2>Digital downloads</h2>
            <p>Include the Gumroad email, product name, and a short description of the issue.</p>
          </article>
          <article className="details-card">
            <h2>Physical orders</h2>
            <p>Include the checkout name, order date, and item selected.</p>
          </article>
        </div>

        <div className="details-card contact-note">
          <h2>Response time</h2>
          <p>Please allow up to two business days for a reply.</p>
          <a className="button" href="mailto:divaglamkreation@gmail.com">Email DivaglamKreation</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
