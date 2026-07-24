import type { MetadataRoute } from 'next';

const baseUrl = 'https://divaglamkreation.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/blog',
    '/blog/gentle-reset',
    '/blog/why-you-dont-need-to-earn-rest',
    '/dragonfly-keychain',
    '/glowlist',
    '/contact',
    '/policies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/dragonfly-keychain' ? 0.9 : 0.7,
  }));
}