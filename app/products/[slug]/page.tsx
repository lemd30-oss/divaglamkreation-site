import { notFound } from 'next/navigation';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { products } from '../../home-content';
import { pageMetadata } from '../../metadata';

const entries = [
  { slug: 'the-3-day-pause', title: 'The 3-Day Pause', inside: ['Three days of faith-rooted reflection prompts', 'A printable journal for rest, reflection, prayer, and renewal'], format: 'Free digital printable journal', note: 'Free digital download, sent to your inbox when you join the Glowlist.' },
  { slug: 'gentle-morning-reset-pack', title: 'Gentle Morning Reset Pack', inside: ['Five printable reflection pages', 'Space to begin the day with faith, calm, clarity, and care'], format: 'Printable PDF · Returning soon', note: 'This printable pack is paused and is not available to purchase right now.' },
  { slug: 'the-gentle-reset', title: 'The Gentle Reset', inside: ['Seven guided days', 'Prompts for quiet reflection, prayer, and renewal'], format: 'Printed paperback · Amazon', note: 'A physical guided journal ordered through Amazon and shipped to you.' },
  { slug: 'reflections', title: 'Reflections', inside: ['144 pages', '63 prompts for rest, reset, and renewal', 'The Glow Owl beside you through each season'], format: 'Hardcover · 7 × 10 in · $42', note: 'A physical hardcover, printed to order and shipped to you. Ordering is through the Lulu Bookstore.' },
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
  const entry = entries.find(item => item.slug === slug);
  const product = products.find(item => item.title === entry?.title);
  if (!entry || !product) notFound();
  const physical = slug === 'reflections' || slug === 'the-gentle-reset';
  return <main className="site-shell" id="main-content">
    <SiteHeader />
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">The Collection</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="trust-note">{entry.format}</p>
        <div className="hero-actions">{product.comingSoon || product.paused ? <span className="button" role="status">{product.paused ? 'Returning soon' : 'Coming Soon'}</span> : <a className="button" href={product.href} target={product.external ? '_blank' : undefined} rel={product.external ? 'noopener noreferrer' : undefined}>{product.buttonLabel}</a>}</div>
        <p className="trust-note">{entry.note}</p>
      </div>
      <aside className="hero-card"><img src={product.image} alt={product.imageAlt} style={{ display: 'block', width: '100%', maxHeight: '460px', objectFit: 'contain' }} /></aside>
    </section>
    <section className="section">
      <h2>What’s inside</h2>
      <ul>{entry.inside.map(item => <li key={item}>{item}</li>)}</ul>
      <h2>Format and delivery</h2>
      <p>{entry.format}</p><p>{entry.note}</p>
      <h2>Before you begin</h2>
      <details className="details-card"><summary>Is this a physical item or a download?</summary><p>{physical ? 'This is a physical journal shipped to you. No digital file is included.' : 'This is a digital journal or printable pack. No physical item is shipped.'}</p></details>
      <details className="details-card"><summary>How do I get this item?</summary><p>{entry.note}</p></details>
      <details className="details-card"><summary>Where can I find help with my order?</summary><p>{physical ? <>For help with your journal, <a href="/contact">contact DivaglamKreation</a> with your product name and order details.</> : <>For download help, <a href="/contact">contact DivaglamKreation</a> with the product name and the email you used.</>}</p><a href="/return-policy">Read the return policy</a></details>
      <p><a href="/shop">← Continue shopping</a></p>
    </section>
    <SiteFooter />
  </main>;
}
