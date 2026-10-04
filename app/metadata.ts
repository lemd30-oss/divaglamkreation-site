import type { Metadata } from 'next';

export function pageMetadata(title: string, description: string, path: string, image = '/images/brand/glow-owl.png'): Metadata {
  const shareTitle = title.includes('DivaglamKreation') ? title : `${title} | DivaglamKreation`;
  const shareImage = image === '/images/the-gentle-reset-book-cover.svg' ? '/images/the-gentle-reset-book-cover.png' : image;
  return {
    title: { absolute: shareTitle },
    description,
    alternates: { canonical: path },
    openGraph: { type: path.startsWith('/blog/') ? 'article' : 'website', title: shareTitle, description, url: path, siteName: 'DivaglamKreation', images: [{ url: shareImage, alt: title }] },
    twitter: { card: 'summary_large_image', title: shareTitle, description, images: [shareImage] },
  };
}
