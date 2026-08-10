const freeResetUrl = 'https://lemdo8.gumroad.com/';

export const metadata = {
  title: '7 Gentle Journal Prompts for Releasing What No Longer Serves You | DivaglamKreation',
  description:
    'Feeling weighed down by things that were never yours to carry? These seven gentle, faith-rooted journal prompts help you release guilt and pressure one small letting-go at a time.',
};

const prompts = [
  {
    title: '1. What am I still carrying that was never mine to hold?',
    body: "Not everything heavy belongs to you. Some of it was handed to you — expectations, other people's moods, a role you slipped into without ever really choosing it. Start by just naming what's in your hands. You can't set down what you haven't noticed you're holding.",
  },
  {
    title: '2. If I gave myself permission to rest today, what would I do first?',
    body: "Notice the answer — really notice it. It usually points straight to what you're most starved for, whether that's silence, sleep, or simply not being needed for twenty minutes.",
  },
  {
    title: '3. What am I holding onto out of guilt, not love?',
    body: "Obligation and devotion feel almost identical from the inside. They aren't the same thing. One fills you. The other quietly empties you while you keep smiling and saying yes.",
  },
  {
    title: "4. Whose voice do I hear when I tell myself I haven't done enough?",
    body: "Sometimes it isn't even your own voice. A parent's. A former boss's. A culture that told you rest had to be earned. It's worth pausing long enough to name whose standard you're actually measuring yourself against.",
  },
  {
    title: '5. What would it feel like to stop explaining myself?',
    body: "Don't answer this one with a plan. Just sit with the feeling for a moment — the relief, or maybe the fear, of not owing anyone a justification for how you spend your time, your rest, or your “no.”",
  },
  {
    title: "6. What's one small thing I can set down today — just today?",
    body: 'Not everything. Not forever. Just one thing, just today. Small is allowed. Small still counts, and small is usually where release actually starts.',
  },
  {
    title: '7. If I fully believed I was already enough, what would change?',
    body: "Let yourself answer this one honestly — even if it's only for you and God to see. Not what you'd do differently to prove it. What would simply feel different.",
  },
];

export default function GentleReleasePromptsBlogPage() {
  return (
    <main className="blog-page-shell">
      <article className="dgk-blog-paper">
        <header className="blog-hero-paper">
          <p className="blog-brand">DIVAGLAMKREATION</p>
          <p className="blog-tagline">Faith. Flow. Flourish.</p>

          <div className="blog-hero-title">
            <h1>
              <span>7 Gentle Journal Prompts</span>
              <em>for Releasing What No Longer Serves You</em>
            </h1>
            <div className="blog-gold-line" aria-hidden="true" />
          </div>

          <div className="blog-intro-copy">
            <p>Some things aren&apos;t meant to be carried forever.</p>
            <p>
              The tight schedule you never actually agreed to keep this tight. The guilt over
              resting. The version of &quot;fine&quot; you perform so no one worries about you.
            </p>
          </div>

          <aside className="blog-quote-card">
            “Cast all your anxiety on him because he cares for you.” — 1 Peter 5:7
          </aside>
        </header>

        <section className="blog-reading-card">
          <div className="blog-section-block">
            <p>
              Release isn&apos;t dramatic. It&apos;s not a breakdown or a big dramatic goodbye. It&apos;s quiet,
              deliberate — one small letting-go at a time, usually somewhere between a cup of coffee
              and a closed journal.
            </p>
            <p>
              If you&apos;re carrying more than you were ever meant to, here are seven gentle prompts to
              help you start setting it down.
            </p>
          </div>

          {prompts.map((prompt) => (
            <div className="blog-section-block" key={prompt.title}>
              <h2>{prompt.title}</h2>
              <p>{prompt.body}</p>
            </div>
          ))}

          <footer className="blog-soft-signature">
            <p>Pause. Reset. Glow. 🤍</p>
            <p>— DK</p>
          </footer>
        </section>

        <section className="blog-soft-cta">
          <p className="eyebrow">A Gentle Place to Start</p>
          <h2>Begin with the free 3-Day Mini Reset.</h2>
          <p>
            Every one of these prompts lives inside the Glow Collection Reset: 7-Day Gentle Reset
            Journal, coming soon. Until then, the free 3-Day Mini Reset is a gentle place to start —
            one grounding thought, one reflection, one small step a day.
          </p>
          <a className="button" href={freeResetUrl}>Grab the Free 3-Day Mini Reset</a>
        </section>
      </article>
    </main>
  );
}
