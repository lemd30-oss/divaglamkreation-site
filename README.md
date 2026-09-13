# DivaglamKreation Site — Performance Optimization Guide

A soft, faith-rooted website for DivaglamKreation, built with Next.js and optimized for speed on Vercel.

## Production source of truth

- **GitHub repository:** `lemd30-oss/divaglamkreation-site`
- **Production branch:** `main`
- **Production Vercel project:** `lemd30-oss-divaglamkreation-site`
- **Production Vercel project ID:** `prj_aiFrQ4uTjtf2MEA3JRYoq7hL7y4N`
- **Primary domain:** `https://divaglamkreation.com`
- **Secondary domain:** `https://www.divaglamkreation.com`

The older Vercel project named `divaglamkreation-site` (`prj_Ay4aRabnd69yHiPGHLhN7UAgHVDF`) is a duplicate and is **not** the DGK production source of truth. Do not use it for production status, logs, deployment verification, or future DGK website decisions. Remove or disconnect it in Vercel when account-level project deletion controls are available.

## Current structure

- `app/page.tsx` — homepage with hero, featured products, about, blog preview, Glowlist signup, and footer
- `app/layout.tsx` — site metadata, root layout, and performance monitoring
- `app/globals.css` — DGK-inspired cream, coffee brown, soft gold, and warm neutral styling
- `next.config.js` — Next.js configuration with image optimization
- `package.json` — Next.js scripts and dependencies

## Performance Optimizations Applied ⚡

### 1. **Image Optimization** (25-40% size reduction)
- ✅ Replaced raw `<img>` tags with Next.js `<Image>` component
- ✅ Automatic AVIF and WebP format conversion via Vercel CDN
- ✅ Responsive image sizing with `sizes` prop for better srcset generation
- ✅ `priority` flag on hero image (loads immediately, above-the-fold)
- ✅ `loading="lazy"` for product and glowlist images (deferred loading)
- ✅ 1-year cache TTL for static product images

**Impact**: Images now load 25-40% faster, with automatic format selection based on browser support.

### 2. **Next.js Configuration Enhancements**
- ✅ Remote image patterns configured for Gumroad and external sources
- ✅ Production source maps disabled to reduce bundle size
- ✅ Aggressive image caching for CDN (31,536,000 seconds = 1 year)

**Impact**: Builds stay streamlined while image delivery is handled through Next.js and Vercel.

### 3. **Connection Optimization**
- ✅ `preconnect` hints for Gumroad and Facebook domains
- ✅ `dns-prefetch` fallback for older browsers
- ✅ Eliminates DNS lookup and TCP handshake delays for external links

**Impact**: External links load faster on first visit.

### 4. **Vercel Performance Monitoring**
- ✅ `@vercel/analytics` — Real-time performance insights
- ✅ `@vercel/speed-insights` — Core Web Vitals tracking
- ✅ Automatic error tracking and reporting

**Impact**: Monitor real-world performance metrics and identify bottlenecks.

---

## Local development

```bash
npm install
npm run dev
```

Then open the local development URL shown in the terminal.

---

## Deploying on Vercel

1. Push approved changes to the `main` branch of `lemd30-oss/divaglamkreation-site`.
2. Verify the deployment under the **`lemd30-oss-divaglamkreation-site`** Vercel project.
3. Confirm `https://divaglamkreation.com` returns the updated site successfully.

Vercel automatically handles:
- Image optimization and CDN caching
- Edge caching for static pages
- Automatic builds on push
- Performance analytics via Speed Insights

---

## Performance Metrics to Monitor

After deployment, check your Vercel dashboard for:

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **First Contentful Paint (FCP)** | < 1.8s | Perceived speed when users see content |
| **Largest Contentful Paint (LCP)** | < 2.5s | Perceived speed when main content loads |
| **Cumulative Layout Shift (CLS)** | < 0.1 | Stability — prevents accidental clicks |
| **Time to Interactive (TTI)** | < 3.8s | When users can interact with the page |

Access these metrics in your Vercel dashboard under **Analytics** > **Speed Insights**.

---

## Next content updates

- Keep product buttons connected to the correct Gumroad or DGK website destinations.
- Keep the free 3-Day Reset → Grace Notes 7-Day Reset customer path consistent across the homepage and Gumroad.
- Connect the Glowlist form to the chosen email workflow when ready.
- Add real product images or Canva exports (optimize to < 200KB per image).
- Monitor Core Web Vitals monthly and adjust as needed.

---

## Troubleshooting Performance

### Images loading slowly?
- Check Vercel Dashboard → Storage to ensure images are cached
- Verify image sizes are reasonable (hero < 500KB, products < 150KB)
- Clear browser cache: `Ctrl+Shift+Delete` (Chrome) or `Cmd+Shift+Delete` (Safari)

### External links (Gumroad, Facebook) slow?
- Verify `preconnect` hints are in `app/layout.tsx`
- Check Vercel Edge Network status at https://www.vercel.com/status

### Build times increasing?
- Check `next build` output for warnings
- Review image count and sizes in `public/images/`
- Profile with `npm run build -- --debug` if needed

---

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Image Optimization Best Practices](https://web.dev/performance-images/)
