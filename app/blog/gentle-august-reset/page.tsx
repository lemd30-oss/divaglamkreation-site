const freeResetUrl = 'https://lemdo8.gumroad.com/';

export const metadata = {
  title: 'A Gentle August Reset',
  description:
    'A soft, faith-rooted August reflection for slowing down, making room to breathe, and returning to peace one gentle step at a time.',
  alternates: { canonical: '/blog/gentle-august-reset' },
};

export default function GentleAugustResetBlogPage() {
  return (
    <main className="blog-page-shell">
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>A Gentle August Reset</span>
              <em>for the Woman Who Needs</em>
              <span>Room to Breathe</span>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>
              August can arrive quietly, yet still feel full. The summer has stretched on, the days
              have carried their own weight, and somewhere between routines, responsibilities, and
              trying to keep going, your spirit may be asking for a softer pace.
            </p>
            <p>
              This is not a call to start over perfectly. It is an invitation to make room to
              breathe again.
            </p>
          </div>

          <aside className="blog-quote-card">
            You do not have to rush into the next season. You can pause, breathe, and begin again
            with grace.
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <h2>August Can Be a Soft Turning Point</h2>
            <p>
              Sometimes a new month does not need a long list of goals. Sometimes it only needs one
              honest moment with God, one quiet page in your journal, and one small decision to stop
              carrying everything alone.
            </p>
            <p>
              A gentle August reset can become a place to notice what has been heavy, what has been
              helpful, and what your heart is ready to release before the next season begins.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Begin With What Feels Heavy</h2>
            <p>
              Before you plan what comes next, give yourself permission to name what has been
              weighing on you. You do not have to dress it up or explain it away.
            </p>
            <p>
              Write down the scattered thoughts. Write down the quiet worries. Write down the small
              places where you feel tired, stretched, or disconnected from peace.
            </p>
            <p>
              Naming what is heavy is not complaining. Sometimes it is the first step toward handing
              it back to God.
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Prayer for August</h3>
            <p>
              Lord, help me enter this month with a softer heart and a quieter spirit. Show me what
              to release, what to carry with care, and where You are inviting me to rest. Let this
              month be guided by grace, not pressure. Amen.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>Choose One Gentle Reset Step</h2>
            <p>
              You do not need to rebuild your whole life in one afternoon. Choose one small reset
              step that helps your body, mind, and spirit feel cared for.
            </p>
            <p>Maybe that looks like clearing one corner of your desk.</p>
            <p>Maybe it looks like opening your journal before checking your phone.</p>
            <p>Maybe it looks like drinking water, taking a slow walk, lighting a candle, or praying
              before the day begins.</p>
            <p>
              Small faithful steps still matter. Quiet progress still counts.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Let This Month Be Gentle</h2>
            <p>
              There is still room for beauty in a month that feels full. There is still room for
              prayer, reflection, creativity, and slow mornings. There is still room for you to come
              back to yourself with kindness.
            </p>
            <p>
              Let August be less about forcing a perfect routine and more about creating a peaceful
              rhythm you can actually return to.
            </p>
            <p>
              One page. One prayer. One quiet reset at a time.
            </p>
          </div>

          <footer className="blog-soft-signature">
            <p>With grace,</p>
            <p>DivaglamKreation</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">Begin with a Gentle Page</p>
          <h2>Download the free 3-Day Reset Journal.</h2>
          <p>
            If August is asking you to slow down and return to peace, the free 3-Day Reset Journal
            gives you a soft place to begin with reflection, prayer, and gentle prompts.
          </p>
          <a className="button" href={freeResetUrl}>Get the Free 3-Day Reset Journal</a>
        </section>
      </article>
    </main>
  );
}
