import type { Product } from '../home-content';

type ProductCardProps = {
  product: Product;
  price?: string;
  amazonUrl?: string;
};

export function ProductCard({ product, price, amazonUrl }: ProductCardProps) {
  const external = Boolean(amazonUrl) || product.external;
  const detailPaths: Record<string, string> = { '3-Day Mini Reset Journal': '/products/the-3-day-pause', 'Gentle Morning Reset Pack': '/products/gentle-morning-reset-pack', 'The Gentle Reset': '/products/the-gentle-reset', 'Reflections': '/products/reflections' };
  const isBookCover = product.imageFit === 'contain' || product.title.toLowerCase().includes('paperback');

  return (
    <article className={product.featured ? 'card product-card featured-card' : 'card product-card'}>
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="cover-image"
          style={
            isBookCover
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
        {product.stepLabel ? <p className="eyebrow">{product.stepLabel}</p> : null}
        <p className={product.stepLabel ? 'trust-note' : 'eyebrow'}>{price ?? product.priceLabel}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-card-actions">
          <a
            className="button secondary product-card-button"
            href={amazonUrl ?? product.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            {amazonUrl ? 'Buy on Amazon' : product.buttonLabel}
          </a>
          {detailPaths[product.title] ? <a className="text-link" href={detailPaths[product.title]} aria-label={`View details: ${product.title}`}>View details →</a> : null}
          {product.secondaryAction ? (
            <a
              className="button secondary product-card-button"
              href={product.secondaryAction.href}
              target={product.external ? '_blank' : undefined}
              rel={product.external ? 'noopener noreferrer' : undefined}
            >
              {product.secondaryAction.buttonLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
