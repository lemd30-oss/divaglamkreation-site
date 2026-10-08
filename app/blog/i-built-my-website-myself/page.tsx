import { pageMetadata } from '../../metadata';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata = pageMetadata(
  'I Built My Website Myself — What Two Years Taught Me',
  'A personal story about building the DivaglamKreation website from scratch, what I learned along the way, and gentle first steps for anyone building their own.',
  '/blog/i-built-my-website-myself',
  '/images/brand/glow-owl.png',
);

export default function BuiltByMeFounderStoryPage() {
  return (
    <main className="blog-page-shell" id="main-content">
      <SiteHeader />
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>I Built This Website Myself</span>
              <em>And It Took Me Two Years</em>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>
              Two years. That is how long it took me to build this website.
            </p>
            <p>
              I built it myself. Little by little. I learned, rewrote, changed things, started over,
              and kept coming back to it until DivaglamKreation finally felt like it had a home that
              matched the story behind it.
            </p>
          </div>

          <aside className="blog-quote-card">
            Slow does not mean unsuccessful.
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <h2>I Didn&apos;t Wait Until I Knew Everything</h2>
            <p>
              I did not begin this website knowing exactly what I was doing. I learned by doing.
              Sometimes that meant changing a page I had already worked hard on. Sometimes it meant
              realizing an idea did not fit anymore. Sometimes it meant walking away for a while and
              coming back with clearer eyes.
            </p>
            <p>
              The important thing was that I kept returning. I did not need to know everything before
              I began. I only needed enough courage to take the next step.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Two Years Is Not a Small Thing</h2>
            <p>
              It is easy to look at someone else&apos;s finished website and forget how much time lives
              underneath it. Mine holds two years of learning, second-guessing, simplifying, changing,
              and becoming more certain about what DivaglamKreation is here to say.
            </p>
            <p>
              Somewhere in those two years, I realized I was not only building a website. I was
              growing alongside it.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>This Website Is More Than Pages</h2>
            <p>
              DivaglamKreation began with a question: <em>Who are you?</em>
            </p>
            <p>
              There was coffee. There was creativity. There was reflection. There was the Glow Owl,
              first as a quiet reminder long before it became part of the brand. And underneath all of
              it was a truth I came to understand more deeply over time: every woman matters.
            </p>
            <p>
              That is why this website matters to me. It is not simply a place where products sit. It
              holds the story, the journals, the gentle reminders, and the invitation to pause long
              enough to notice your own life.
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Quiet Truth</h3>
            <p>
              You mattered before anyone was looking. The things you are building quietly can matter
              before anyone applauds them, too.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>What I Wish I Knew Before Building My Own Website</h2>
            <ul>
              <li>Start before you know everything.</li>
              <li>Know what your website is supposed to do.</li>
              <li>Keep it simpler than you think.</li>
              <li>Do not keep rebuilding because of someone else&apos;s website.</li>
              <li>Save your decisions somewhere.</li>
              <li>Expect your website to grow with you.</li>
              <li>Do not wait for perfect.</li>
            </ul>
            <p>
              These are the lessons I will be sharing more deeply in this Behind the Glow series over
              the months ahead.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>If You Are Starting Your Own</h2>
            <p>
              Before you choose colors, templates, or another new tool, start with three questions:
            </p>
            <ul>
              <li>What is the main thing people should know about me or my brand?</li>
              <li>What is the one action I want a visitor to take?</li>
              <li>What are the three pages I absolutely need first?</li>
            </ul>
            <p>
              You can build from there. You do not have to solve the whole website in one sitting.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>If You Are Building Something Slowly</h2>
            <p>
              Please do not mistake slow progress for no progress. Sometimes the work takes longer
              because you are learning while you build it. Sometimes you are changing while the thing
              you are making changes, too.
            </p>
            <p>
              There is nothing wrong with that. Presence matters. Paying attention to what is becoming
              clearer matters. Returning matters.
            </p>
            <p>
              I made this website myself. It took me two years. And I am glad I stayed with it.
            </p>
          </div>

          <footer className="blog-soft-signature">
            <p>With grace,</p>
            <p>DivaglamKreation</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">Stay for More Behind the Glow</p>
          <h2>This is the beginning of the Built by Me series.</h2>
          <p>
            Each month I&apos;ll share one lesson from the two years I spent building this website — not
            as a web-development expert, but as a woman who learned by doing, changing, and staying
            with something until it finally felt like her own.
          </p>
          <a className="button" href="/blog">Read More Journal Notes</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
