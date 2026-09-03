const freeResetUrl = 'https://lemdo8.gumroad.com/';

export const metadata = {
  title: "Why You Don't Need to Earn Rest",
  description:
    'A gentle, faith-rooted reminder that rest is not a reward for exhaustion. Pause, release guilt, and begin again with grace.',
  alternates: { canonical: '/blog/why-you-dont-need-to-earn-rest' },
};

export default function EarnRestBlogPage() {
  return (
    <main className="blog-page-shell">
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>Why You Don&apos;t Need</span>
              <em>to Earn Rest</em>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>
              Rest is not a prize waiting for you at the end of exhaustion. It is not something you
              must deserve by carrying too much, finishing every task, or proving how strong you are.
            </p>
            <p>
              Sometimes the most faithful thing you can do is pause before your body and spirit are
              forced to do it for you.
            </p>
          </div>

          <aside className="blog-quote-card">
            You do not have to prove your exhaustion before choosing rest.
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <h2>Rest Is Not a Reward</h2>
            <p>
              Many of us learned to treat rest like something that comes only after everything else
              is handled. We tell ourselves we can slow down when the house is finished, the work is
              complete, everyone else is cared for, and nothing more is being asked of us.
            </p>
            <p>But that moment rarely arrives.</p>
            <p>
              There will always be another responsibility, another need, or another reason to keep
              going. When rest depends on a perfectly finished life, rest keeps moving farther away.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Your Worth Is Not Measured by Your Exhaustion</h2>
            <p>
              Being tired does not make your effort more valuable. Being overwhelmed does not make
              you more faithful. And pushing past every limit does not prove that you care more.
            </p>
            <p>
              Your worth was never meant to be measured by how much you can carry without stopping.
              You are already loved. You already matter. You are allowed to receive care too.
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Prayer for Permission to Pause</h3>
            <p>
              Lord, quiet the part of me that believes I must earn what You freely give. Help me
              release guilt, honor my limits, and receive rest as grace. Teach me to pause without
              shame and begin again with peace. Amen.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>What a Gentle Pause Can Look Like</h2>
            <p>
              Rest does not have to be dramatic. It can be ten quiet minutes before answering the
              next request. It can be closing the laptop, putting down the phone, making tea, opening
              your journal, or sitting in prayer without trying to solve anything.
            </p>
            <p>It can be saying, “This is enough for today.”</p>
            <p>It can be trusting that pausing will not undo your progress.</p>
            <p>It can be choosing peace before pressure has the final word.</p>
          </div>

          <div className="blog-section-block">
            <h2>You Are Allowed to Begin Again Slowly</h2>
            <p>
              A pause is not failure. It is not laziness, weakness, or falling behind. A pause can be
              the place where clarity returns, where your breathing softens, and where you remember
              what truly matters.
            </p>
            <p>
              You do not have to wait until you are completely depleted. You do not have to justify
              your need for rest. You can choose it now, gently and without guilt.
            </p>
            <p>Pause. Receive. Begin again.</p>
          </div>

          <footer className="blog-soft-signature">
            <p>With grace,</p>
            <p>DivaglamKreation</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">A Gentle Place to Begin</p>
          <h2>Take a quiet reset with DivaglamKreation.</h2>
          <p>
            The free 3-Day Reset Journal offers a soft, faith-rooted space to pause, reflect, and
            return to what matters—one gentle page at a time.
          </p>
          <a className="button" href={freeResetUrl}>Get the Free 3-Day Reset Journal</a>
        </section>
      </article>
    </main>
  );
}
