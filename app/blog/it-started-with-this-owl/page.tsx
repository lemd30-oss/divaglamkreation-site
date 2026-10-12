import { pageMetadata } from '../../metadata';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { links } from '../../home-content';

export const metadata = pageMetadata("It Started With This Owl", "Before DivaglamKreation had a name, there was an owl canvas in Germany and four words: Know HOO You Are.", "/blog/it-started-with-this-owl", "/images/dgk-know-hoo-you-are-owl-plaque.jpg");

export default function ItStartedWithThisOwlBlogPage() {
  return (
    <main className="blog-page-shell" id="main-content">
      <SiteHeader />
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>It Started</span>
              <em>With This Owl</em>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>Pour a cup. This is where it began.</p>
            <p>
              Before DivaglamKreation had a name, a website, or a single journal, there was a
              canvas in Germany. Owls, and four words: <em>Know HOO You Are.</em>
            </p>
          </div>

          <aside className="blog-quote-card">
            You mattered before anyone was looking.
          </aside>
        </header>

        <section className="blog-reading-card">
          <figure className="blog-origin-photo">
            <img
              src="/images/dgk-know-hoo-you-are-owl-plaque.jpg"
              alt="The owl canvas that began the story: two owls on a paisley background above the words know HOO you are."
              width={800}
              height={800}
            />
            <figcaption>The canvas that asked the question.</figcaption>
          </figure>

          <div className="blog-section-block">
            <h2>The Canvas</h2>
            <p>
              I was in Germany because I had taken the first airplane flight of my life, to stay a
              month with my daughter. It was a hard season, and I had no plans beyond getting
              through it. I was not looking for a purpose. I was not looking for a business. The
              owls caught my attention first.
            </p>
            <p>Then I read the words.</p>
            <p>
              What stayed with me was not the owls alone. It was how directly the canvas asked. It
              did not say &ldquo;do more&rdquo; or &ldquo;be better.&rdquo; It asked me to know who
              I am, and it left the answer to me. For the first time in a long while, that felt like
              permission to put myself first.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>Keeping the Question</h2>
            <p>
              I came home with that question. I did not turn it into a plan. I kept it the way you
              keep a good cup of coffee in your hands on a quiet morning: slowly, and without
              hurrying to finish it.
            </p>
            <p>
              The idea of a business did not reach me until 2023. That is eight years of letting
              the question sit. If you have ever wondered whether you started too late, or whether
              what you are carrying matters because it has no plan around it yet, I hope those
              eight years give you some room to breathe.
            </p>
          </div>

          <aside className="blog-prayer-card">
            <h3>A Prayer for the Question</h3>
            <p>
              Lord, thank You for the quiet questions that stay with me long after the moment
              passes. Help me keep making room for myself, and for You. Let me answer slowly,
              honestly, and with peace. Amen.
            </p>
          </aside>

          <div className="blog-divider" aria-hidden="true" />

          <div className="blog-section-block">
            <h2>What Grew From It</h2>
            <ul>
              <li>The question: Who are you?</li>
              <li>The companion: the Glow Owl, who asks and then waits.</li>
              <li>The pages: journals made for gentle reflection, not pressure.</li>
              <li>
                The letters: The Glow Letter, where I sit across the table from you with coffee in
                hand.
              </li>
            </ul>
            <p>
              I have loved coffee and owls ever since. I have gathered about twenty owls from places
              I have been: candle holders, lamps, figures, and more than one owl mug. Each one
              reminds me that the question is still worth asking.
            </p>
          </div>

          <div className="blog-section-block">
            <h2>If You Have Stopped Making Room for Yourself</h2>
            <p>
              You do not have to answer it all today. Pour a cup. Start small. If you would like
              the personal side of this story, I share it in The Glow Letter, one cup at a time.
            </p>
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
            The 3-Day Pause is free: three gentle days of faith-rooted pages, with no answer
            required at the end.
          </p>
          <a className="button" href={links.gentleReset}>Get The 3-Day Pause, Free</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
