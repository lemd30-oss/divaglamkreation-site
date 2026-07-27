import { links } from '../home-content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-mark">DK</div>
          <div>
            <p className="footer-name">DivaglamKreation</p>
            <p className="footer-tagline">Faith. Flow. Flourish.</p>
            <p className="footer-copy">
              Faith-rooted journals, gentle gifts, and quiet encouragement for women learning to pause and begin softly.
            </p>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Explore</p>
          <a href="/">Home</a>
          <a href="/#shop">Shop</a>
          <a href="/#about">About</a>
          <a href="/blog">Blog</a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Shop</p>
          <a href={links.gentleReset} target="_blank" rel="noopener noreferrer">Free Reset</a>
          <a href={links.sevenDayReset} target="_blank" rel="noopener noreferrer">7-Day Journal</a>
          <a href={links.theGentleResetBook} target="_blank" rel="noopener noreferrer">Paperback</a>
          <a href={links.dragonflyKeychain}>Dragonfly Charm</a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Connect</p>
          <a href="/glowlist">Glowlist</a>
          <a href="/contact">Contact</a>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={links.contactEmail}>Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DivaglamKreation</p>
        <div>
          <a href="/policies">Policies</a>
          <span aria-hidden="true">·</span>
          <a href={links.gumroadShop} target="_blank" rel="noopener noreferrer">Gumroad</a>
        </div>
      </div>
    </footer>
  );
}
