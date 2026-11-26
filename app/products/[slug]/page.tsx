import { notFound, redirect } from 'next/navigation';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { links, products } from '../../home-content';
import { pageMetadata } from '../../metadata';

const entries = [
  { slug: 'the-3-day-pause', title: 'The 3-Day Pause', inside: ['Three days of faith-rooted reflection prompts', 'A printable journal for rest, reflection, prayer, and renewal'], format: 'Free Glowlist printable journal', note: 'A free 10-page journal PDF sent to your inbox through the Glowlist. Nothing to purchase.' },
  { slug: 'gentle-morning-reset-pack', title: 'Gentle Morning Reset Pack', inside: ['Five printable reflection pages', 'Space to begin the day with faith, calm, clarity, and care'], format: 'Printable pages · On hold', note: 'No orders or downloads are available for this pack right now.' },
  { slug: 'the-gentle-reset', title: 'The Gentle Reset', inside: ['Seven guided days', 'Prompts for quiet reflection, prayer, and renewal'], format: 'Paperback · Direct from DivaglamKreation', note: 'Orders have not opened yet. After release, DivaglamKreation will pack and ship each copy.' },
  { slug: 'reflections', title: 'Reflections', inside: ['144 pages', '63 prompts for rest, reset, and renewal', 'The Glow Owl beside you through each season'], format: 'Hardcover · 7 × 10 in', note: 'Orders are not open while this hardcover is being finalized.' },
];
export function generateStaticParams() { return entries.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = entries.find(item => item.slug === slug);
  const product = products.find(item => item.title === entry?.title);
  if (!product) return {};
  return pageMetadata(product.title, product.description, `/products/${slug}`, product.image);
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'the-3-day-pause') redirect('/#glowlist');
  const entry = entries.find(item => item.slug === slug);
  const product = products.find(item => item.title === entry?.title);
  if (!entry || !product) notFound();
  const physical = slug === 'reflections' || slug === 'the-gentle-reset';
  const isPaperback = slug === 'the-gentle-reset';
  const testLink = process.env.GENTLE_RESET_TEST_PAYMENT_LINK ??
    'https://buy.stripe.com/test_3cI7sLdnf5550Bq6YC8Zq00';
  const previewCheckout = process.env.VERCEL_ENV === 'preview' &&
    testLink?.startsWith('https://buy.stripe.com/test_') ? testLink : undefined;
  return <main className="site-shell" id="main-content">
    <SiteHeader />
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">The Collection</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="trust-note">{entry.format}</p>
        {isPaperback && (
          <div>
            <p><strong>$14.00 per paperback</strong> · Estimated U.S. shipping $6.50 for one copy</p>
            <p>Estimated total before tax: $20.50.</p>
          </div>
        )}
        <div className="hero-actions">{product.comingSoon || product.paused ? <span className="button" role="status">{product.paused ? 'Returning soon' : 'Coming Soon'}</span> : <a className="button" href={product.href} target={product.external ? '_blank' : undefined} rel={product.external ? 'noopener noreferrer' : undefined}>{product.buttonLabel}</a>}</div>
        <p className="trust-note">{entry.note}</p>
        {isPaperback && (
          <div className="hero-actions">
            <a className="button" href={links.contactEmail + '?subject=The%20Gentle%20Reset%20paperback%20waitlist&body=Please%20add%20me%20to%20the%20paperback%20waitlist%20and%20email%20me%20when%20orders%20open.'}>
              Email me when orders open
            </a>
            {previewCheckout && <a href={previewCheckout}>Try test checkout</a>}
          </div>
        )}
      </div>
      <aside className="hero-card"><img src={product.image} alt={product.imageAlt} style={{ display: 'block', width: '100%', maxHeight: '460px', objectFit: 'contain' }} /></aside>
    </section>
    <section className="section product-details">
      <h2>What’s inside</h2>
      <ul>{entry.inside.map(item => <li key={item}>{item}</li>)}</ul>
      <h2>Common questions</h2>
      {slug === 'the-gentle-reset' ? <p className="trust-note">New to DGK? <a href="/#glowlist">Begin with the free 3-Day Pause</a>.</p> : null}
      <details className="details-card"><summary>Is this a physical item or a download?</summary><p>{physical ? slug === 'reflections' ? 'This will be a physical hardcover journal when released. No downloadable edition is sold.' : 'This is a physical journal shipped to you. No downloadable edition is sold.' : slug === 'the-3-day-pause' ? 'The 3-Day Pause is a free resource sent as a PDF by email. Nothing is purchased or shipped.' : 'This product is on hold and not available for purchase or delivery.'}</p></details>
      <details className="details-card"><summary>Where can I find help with my order?</summary><p>{physical ? <>For help with your journal, <a href="/contact">contact DivaglamKreation</a> with your product name and order details.</> : <>For download help, <a href="/contact">contact DivaglamKreation</a> with the product name and the email you used.</>}</p><a href="/return-policy">Read the return policy</a></details>
      <p><a href="/shop">← Continue shopping</a></p>
    </section>
    <SiteFooter />
  </main>;
}
