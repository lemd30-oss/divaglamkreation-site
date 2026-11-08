/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lemdo8.gumroad.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Enable AVIF format for better compression
    formats: ['image/avif', 'image/webp'],
    // Cache images on Vercel CDN for 1 year (safe for product images)
    minimumCacheTTL: 31536000,
  },
  // Enable SWR (Stale-While-Revalidate) for static pages
  staticPageGenerationTimeout: 120,
  // Enable production source maps for better error tracking
  productionBrowserSourceMaps: false,
  // Keep existing Flodesk welcome-email download URLs working while showing the
  // approved customer-facing product name in the browser's share/download UI.
  async redirects() {
    return [
      {
        source: '/downloads/3-day-mini-reset-journal.pdf',
        destination: '/downloads/the-3-day-pause.pdf',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/downloads/the-3-day-pause.pdf',
        destination: '/downloads/3-day-mini-reset-journal.pdf',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/downloads/the-3-day-pause.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="The-3-Day-Pause.pdf"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
