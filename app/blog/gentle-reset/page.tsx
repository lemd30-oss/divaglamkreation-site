const gumroadShopUrl = 'https://lemdo8.gumroad.com/';

export const metadata = {
  title: 'A Gentle Sunday Reset',
  description:
    'A gentle Sunday reset for women who feel tired, depleted, and ready to return to rest, reflection, and faith-rooted renewal.',
  alternates: { canonical: '/blog/gentle-reset' },
};

export default function GentleResetBlogPage() {
  return (
    <main className="blog-page-shell">
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>When You've Lost Your Rhythm:</span>
              <em>A Gentle Sunday Reset</em>
              <span>for Women Who Are Tired</span>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>
              There are seasons when you don’t realize how far you’ve drifted until stillness
              finally finds you.
            </p>
            <p>
              You’ve been doing what needed to be done. Showing up. Handling the list. Carrying
              the quiet weight of everyone and everything.
            </p>
          </div>

          <aside className="blog-quote-card">
            A Sunday reset is not another task to perform. It is a sacred pause — a small return
            to peace, prayer, and grace.
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <h2>When You Feel Like You’ve Drifted</h2>
            <p>
              Maybe your mornings have felt rushed, your prayers have felt short, your thoughts
              have felt scattered, and somewhere along the way, you stopped feeling like yourself.
            </p>
            <p>Not lost forever.</p>
            <p>Just tired.</p>
            <p>Just stretched thin.</p>
            <p>Just quietly longing to come home to the woman you are beneath the noise.</p>
          </div>

          <div className="blog-section-block">
            <h2>A Sunday Reset Is a Sacred Pause</h2>
            <p>
              A Sunday reset is not another task to perform. It is not a polished routine, a
              perfect planner spread, or a long list of things to fix before Monday comes.
            </p>
            <p>It can be something much gentler than that.</p>
            <p>A sacred pause.</p>
            <p>A small return.</p>
            <p>
              A quiet moment to breathe, pray, reflect, and ask, “What do I need to release before
              I begin again?”
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Prayer for Your Reset</h3>
            <p>
              Lord, help me come back to what matters. Help me release what is heavy. Help me
              return to peace. Teach me to begin again with grace. Amen.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>Let Your Reset Be Gentle</h2>
            <p>
              Maybe your reset looks like lighting a candle and opening your journal. Maybe it
              looks like clearing one small space on your desk. Maybe it is washing your face
              slowly, making tea, reading one verse, or sitting in silence before the week begins.
            </p>
            <p>The point is not to become someone new overnight.</p>
            <p>The point is to remember that you are allowed to begin again with grace.</p>
            <p>You are allowed to move slowly.</p>
            <p>You are allowed to rebuild your rhythm without shame.</p>
            <p>You are allowed to pause before you pour.</p>
          </div>

          <div className="blog-section-block">
            <h2>Before the Week Asks Anything From You</h2>
            <p>
              This kind of reset is less about control and more about care. It is a way of saying,
              “Lord, help me come back to what matters. Help me release what is heavy. Help me
              return to peace.”
            </p>
            <p>
              So this Sunday, before the week asks anything from you, give yourself a quiet place
              to land.
            </p>
            <p>Not to prove.</p>
            <p>Not to perform.</p>
            <p>Just to breathe, reflect, and begin again gently.</p>
          </div>

          <footer className="blog-soft-signature">
            <p>With grace,</p>
            <p>DivaglamKreation</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">Start with a Soft Place to Land</p>
          <h2>Download the free 3-Day Reset Journal.</h2>
          <p>
            If your heart has been needing a gentle place to begin, I created the free 3-Day Reset
            Journal for you. It is a simple faith-rooted printable journal designed for rest,
            reflection, and renewal — one quiet page at a time.
          </p>
          <a className="button" href={gumroadShopUrl}>Download the Free 3-Day Reset Journal</a>
        </section>
      </article>
    </main>
  );
}
