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
  // Optimize for performance
  swcMinify: true,
  // Enable production source maps for better error tracking
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
