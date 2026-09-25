'use client';

import Image from 'next/image';
import { useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="header presentation-header">
        <a className="logo" href="/" aria-label="DivaglamKreation home" onClick={closeMenu}>
          <Image
            className="logo-img logo-img-full"
            src="/images/brand/logo-horizontal.png"
            alt=""
            width={799}
            height={213}
            priority
          />
          <Image
            className="logo-img logo-img-mono"
            src="/images/brand/logo-monogram.png"
            alt=""
            width={607}
            height={506}
            priority
          />
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
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="/glowlist" onClick={closeMenu}>Join the Glowlist</a>
        </nav>
      </header>
    </>
  );
}
