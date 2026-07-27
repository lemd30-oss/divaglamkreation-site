'use client';

import { useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="header presentation-header">
        <a className="logo" href="/" aria-label="DivaglamKreation home" onClick={closeMenu}>
          <span className="logo-mark">DK</span>
          <span className="logo-copy">
            <strong>DivaglamKreation</strong>
            <small>Faith. Flow. Flourish.</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>

        <nav id="site-navigation" className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/#shop" onClick={closeMenu}>Shop</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="/glowlist" onClick={closeMenu}>Join the Glowlist</a>
        </nav>
      </header>
    </>
  );
}
