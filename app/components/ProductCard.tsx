import Image from 'next/image';

import type { Product } from '../home-content';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={product.featured ? 'card featured-card' : 'card'}>
      <div className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 820px) 100vw, (max-width: 1120px) 50vw, 33vw"
          className="cover-image"
        />
      </div>
      <p className="eyebrow">{product.priceLabel}</p>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <a
        className="button secondary"
        href={product.href}
        target={product.external ? '_blank' : undefined}
        rel={product.external ? 'noopener noreferrer' : undefined}
      >
        {product.buttonLabel}
      </a>
    </article>
  );
}
