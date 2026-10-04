import { notFound } from 'next/navigation';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { products } from '../../home-content';
import { pageMetadata } from '../../metadata';

const entries = [
  { slug: 'the-3-day-pause', title: 'The 3-Day Pause', inside: ['Three days of short reflection prompts', 'A faith-rooted printable journal for rest, reflection, and renewal'], format: 'Free digital printable journal', note: 'Digital download via Gumroad. Delivered to the email used at checkout.' },
  { slug: 'gentle-morning-reset-pack', title: 'Gentle Morning Reset Pack', inside: ['Five printable reflection pages', 'Space to begin the day with faith, calm, clarity, and care'], format: 'Digital PDF · $7', note: 'Digital download via Gumroad. Delivered to the email used at checkout.' },
  { slug: 'the-gentle-reset', title: 'The Gentle Reset', inside: ['Seven guided days', 'Prompts for quiet reflection, prayer, and renewal'], format: 'Digital PDF · $9', note: 'Digital download via Gumroad. Delivered to the email used at checkout.' },
  { slug: 'reflections', title: 'Reflections', inside: ['144 pages', '63 prompts for rest, reset, and renewal', 'The Glow Owl beside you through each season'], format: 'Physical hardcover journal · See current price on Amazon', note: 'Physical hardcover purchased through Amazon. Amazon handles order delivery and returns.' },
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
  const physical = slug === 'reflections';
  return <main className="site-shell" id="main-content">
    <SiteHeader />
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">The Collection</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="trust-note">{entry.format}</p>
        <div className="hero-actions"><a className="button" href={product.href} target="_blank" rel="noopener noreferrer">{physical ? 'Buy on Amazon' : product.buttonLabel}</a></div>
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
      <details className="details-card"><summary>Is this a physical item or a download?</summary><p>{physical ? 'This is a physical hardcover journal ordered through Amazon.' : 'This is a digital journal or printable pack. No physical item is shipped.'}</p></details>
      <details className="details-card"><summary>Where do I complete my purchase?</summary><p>{entry.note} The purchase button opens {physical ? 'Amazon' : 'Gumroad'}.</p></details>
      <details className="details-card"><summary>Where can I find help with my order?</summary><p>{physical ? 'For delivery and returns, contact Amazon through your order.' : <>For download help, <a href="/contact">contact DivaglamKreation</a> with the product name and email used at checkout.</>}</p><a href="/return-policy">Read the return policy</a></details>
      <p><a href="/#shop">← Continue shopping</a></p>
    </section>
    <SiteFooter />
  </main>;
}
