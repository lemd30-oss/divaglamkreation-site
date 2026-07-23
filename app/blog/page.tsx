const posts = [
  {
    title: 'How to Begin a Gentle Reset Routine',
    description: 'A soft, practical place to begin when life feels full and you need a quieter rhythm.',
    href: '/blog/gentle-reset',
  },
  {
    title: 'Why You Don’t Need to Earn Rest',
    description: 'A faith-rooted reminder that rest is not a reward for finishing everything.',
    href: '/blog/why-you-dont-need-to-earn-rest',
  },
];

export default function BlogPage() {
  return (
    <main className="site-shell">
      <header className="header">
        <a className="logo" href="/" aria-label="DivaglamKreation home">
          <span className="logo-mark">DK</span>
          <span>DivaglamKreation</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#shop">Shop</a>
          <a href="/blog">Blog</a>
          <a href="/glowlist">Glowlist</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Journal Notes</p>
          <h1>Gentle words for the weeks when you need room to breathe.</h1>
          <p>
            Faith-rooted reflections, journaling encouragement, and quiet reminders for women who
            spend so much time caring for everyone else.
          </p>
        </div>
        <aside className="hero-card" aria-label="Blog welcome message">
          <div className="hero-card-inner">
            <p className="eyebrow">Read Slowly</p>
            <h2>Bring your coffee. Stay for the reminder you needed.</h2>
            <p>Choose the note that meets you where you are today.</p>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="card" key={post.href}>
              <p className="eyebrow">From the Blog</p>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a className="button secondary" href={post.href}>Read the Note</a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DivaglamKreation. Faith. Flow. Flourish.</p>
        <p><a href="/">Home</a> · <a href="/glowlist">Glowlist</a></p>
      </footer>
    </main>
  );
}
