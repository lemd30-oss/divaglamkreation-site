import { pageMetadata } from '../../metadata';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { links } from '../../home-content';

export const metadata = pageMetadata("Who Are You Now?", "Before there was a brand, there was a woman becoming. A quiet reflection on where you began, who you are now, and who you are still becoming.", "/blog/who-are-you-now", "/images/brand/glow-owl.png");

export default function WhoAreYouNowBlogPage() {
  return (
    <main className="blog-page-shell" id="main-content">
      <SiteHeader />
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>Who Are</span>
              <em>You Now?</em>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>
              Before there was a brand, there was a woman becoming. Before there was a plan, there
              was a quiet question that kept returning: <em>Who are you?</em>
            </p>
            <p>
              Some seasons ask it gently. Some ask it when everything feels unfinished. Either way,
              you are allowed to answer slowly.
            </p>
          </div>

          <aside className="blog-quote-card">
            You mattered before anyone was looking.
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <h2>Then: Where You Began</h2>
            <p>
              Think back to an early season of your life. Not the polished version, just the real
              one. What did you love before you knew how to explain it? What did you pray about
              when no one was listening?
            </p>
            <p>
              Maybe it was a cup of coffee at a quiet kitchen table, a notebook you filled without
              a plan, or a small creative idea you were afraid to say out loud. Those beginnings
              were not wasted. They were where you started becoming.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Now: Where You Are Standing</h2>
            <p>
              Some answers take time. You may not have every piece figured out, and you do not have
              to. A quiet season is not an empty season.
            </p>
            <p>
              Sit with what is true today. Who are you now, in this week, in this home, with the
              responsibilities you carry and the hopes you still hold? Write it down without
              editing it. Let it be honest before it is impressive.
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Prayer for Becoming</h3>
            <p>
              Lord, thank You for every season that shaped me, the early ones and the quiet ones.
              Help me be gentle with who I was, honest about who I am, and open to who You are still
              making me. Remind me that I mattered before anyone was looking. Amen.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>Becoming: Where You Are Headed</h2>
            <p>
              Becoming is not a race, and it does not erase what came before. Sometimes starting
              again simply means returning to what was true all along.
            </p>
            <p>
              You do not have to leave your earlier chapters behind to move forward. You can carry
              what was good, set down what was heavy, and take the next small step from exactly where
              you are.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Three Prompts for Your Journal</h2>
            <ul>
              <li>What did I love in an earlier season that I want to remember?</li>
              <li>What feels true about me today that I did not always know?</li>
              <li>What is one gentle step toward who I am still becoming?</li>
            </ul>
            <p>Every woman matters. You are one of them.</p>
          </div>

          <footer className="blog-soft-signature">
            <p>With grace,</p>
            <p>DivaglamKreation</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">A Gentle Place to Begin</p>
          <h2>Take three quiet days to answer it.</h2>
          <p>
            The free 3-Day Pause offers short, faith-rooted prompts to slow down, reflect, and
            begin again, one gentle page at a time.
          </p>
          <a className="button" href={links.gentleReset}>Begin The 3-Day Pause</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
