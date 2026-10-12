import type { MetadataRoute } from 'next';

const baseUrl = 'https://divaglamkreation.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/shop',
    '/about',
    '/gift-guide',
    '/blog',
    '/blog/it-started-with-this-owl',
    '/blog/i-built-my-website-myself',
    '/blog/7-gentle-journal-prompts-for-releasing-what-no-longer-serves-you',
    '/blog/gentle-august-reset',
    '/blog/gentle-reset',
    '/blog/the-art-of-beginning-again',
    '/blog/why-you-dont-need-to-earn-rest',
    '/dragonfly-keychain',
    '/products/the-3-day-pause',
    '/products/gentle-morning-reset-pack',
    '/products/the-gentle-reset',
    '/products/reflections',
    '/glowlist',
    '/contact',
    '/policies',
    '/return-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/shop' || route === '/dragonfly-keychain' ? 0.9 : 0.7,
  }));
}
