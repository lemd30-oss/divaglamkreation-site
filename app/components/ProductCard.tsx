import type { Product } from '../home-content';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isPaperback = product.title.toLowerCase().includes('paperback');
  const isFree = product.priceLabel.toLowerCase().includes('free');

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
        <div className="product-checkout-proof" aria-label="Secure purchase information">
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
          <small>Payment options may vary by Gumroad, Amazon, or the checkout partner.</small>
        </div>
      </div>
    </article>
  );
}
