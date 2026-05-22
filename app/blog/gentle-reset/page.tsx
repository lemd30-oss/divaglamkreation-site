const gumroadShopUrl = 'https://lemdo8.gumroad.com/';

export const metadata = {
  title: 'How to Start a Gentle Reset When You Feel Overwhelmed | DivaglamKreation',
  description:
    'Feeling overwhelmed? Learn how to start a gentle reset routine with faith-based reflection, calming journaling prompts, and simple steps to feel grounded again.',
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
              <span>How to Start a</span>
              <em>Gentle Reset</em>
              <span>When You Feel Overwhelmed</span>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>
              There are seasons when life feels full before the day even begins. Your thoughts may
              feel scattered. Your heart may feel heavy. Your peace may feel distant.
            </p>
            <p>
              I’ve learned that some of my most honest resets begin with something small — only
              stillness, a prayer, and choosing to listen.
            </p>
          </div>

          <aside className="blog-quote-card">
            You do not have to rush your becoming. You can return to peace one prayer, one page,
            and one faithful step at a time.
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <h2>1. Pause Before You Plan</h2>
            <p>
              Before you reach for your phone or your to-do list, give yourself permission to
              simply be. Sit with your coffee. Breathe. Let the morning find you before you chase
              it.
            </p>
            <p>
              A gentle reset doesn’t require a complete life overhaul. It begins with one
              intentional breath — one moment where you choose presence over productivity.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>2. Return to What Grounds You</h2>
            <p>
              Open your Bible. Write one line in your journal. Whisper a prayer that doesn’t need
              to be perfect. Faith isn’t about having all the answers — it’s about showing up, even
              when your heart feels quiet.
            </p>
            <p>
              Sometimes the most powerful thing you can do is simply say: “Lord, I’m here. Meet me
              in this mess.”
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Prayer for Your Reset</h3>
            <p>
              Father, quiet the noise within me. Help me release what I cannot carry and receive
              the grace You freely give. Remind me that I don’t have to earn my rest — it is
              already mine in You. Amen.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>3. Choose One Small, Kind Thing</h2>
            <p>
              Your reset doesn’t need to look like anyone else’s. Maybe it’s a slow walk. A warm
              bath. Writing three things you’re grateful for. Lighting a candle and sitting in the
              silence.
            </p>
            <p>
              The goal isn’t perfection — it’s peace. And peace often arrives in the smallest,
              most ordinary moments when we finally stop long enough to notice.
            </p>
          </div>

          <footer className="blog-soft-signature">
            <p>With grace,</p>
            <p>Lisa at DivaglamKreation</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">Ready for a Gentle Reset?</p>
          <h2>Begin with one quiet page.</h2>
          <p>
            If your heart has been craving a soft place to pause, reflect, and breathe again, the
            DivaglamKreation Reset Journals were created with that tender space in mind.
          </p>
          <a className="button" href={gumroadShopUrl}>Explore the Reset Journals</a>
        </section>
      </article>
    </main>
  );
}
