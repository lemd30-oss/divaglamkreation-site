import type { Product } from '../home-content';
import './product-trust.css';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const title = product.title.toLowerCase();
  const isPaperback = title.includes('paperback');
  const isDigital = product.priceLabel.toLowerCase().includes('digital');
  const isFree = product.priceLabel.toLowerCase().includes('free');
  const isPhysical = !isDigital && !isFree;

  const fulfillmentNote = isDigital
    ? 'Instant digital delivery after checkout.'
    : isPaperback
      ? 'Printed and shipped by Amazon; Amazon policies apply.'
      : 'Physical item shipping details are shown before purchase.';

  return (
    <article className={product.featured ? 'card product-card featured-card' : 'card product-card'}>
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="cover-image"
          style={
            isPaperback
              ? {
                  objectFit: 'contain',
                  objectPosition: 'center',
                  padding: '1rem',
                  background: '#f6efe6',
                }
              : undefined
          }
        />
      </div>
      <div className="product-card-content">
        <p className="eyebrow">{product.priceLabel}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <a
          className="button secondary product-card-button"
          href={product.href}
          target={product.external ? '_blank' : undefined}
          rel={product.external ? 'noopener noreferrer' : undefined}
        >
          {product.buttonLabel}
        </a>

        <div className="product-checkout-proof" aria-label="Purchase and delivery information">
          <span className="security-note">🔒 {isFree ? 'Secure download' : 'Secure checkout'}</span>
          {!isFree && (
            <div className="payment-methods" aria-label="Common payment methods available through checkout partners">
              <span>Visa</span>
              <span>MC</span>
              <span>Amex</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          )}
          <p className="fulfillment-note">{fulfillmentNote}</p>
          {isPhysical && <p className="fulfillment-note">Shipping and return terms are confirmed by the checkout partner before payment.</p>}
          <small>Payment options vary by Gumroad, Amazon, or the active checkout partner.</small>
        </div>

        <div className="review-note" aria-label="Customer review information">
          <span aria-hidden="true">★★★★★</span>
          <p>Customer reviews will be added as DGK receives verified feedback.</p>
        </div>
      </div>
    </article>
  );
}
