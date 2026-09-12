import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import './sticker-archive.css';

export const metadata: Metadata = {
  title: 'Sticker Archive | DivaglamKreation',
  description:
    'Explore archived DivaglamKreation sticker designs from earlier collections and color palettes. These designs are preserved as part of the DGK creative story and are not part of the current collection.',
};

const archivedCollections = [
  {
    name: 'Gentle Reminders',
    note: 'Earlier collection',
    description:
      'Encouraging sticker designs created during an earlier DGK season, before the current soft neutral palette took shape.',
  },
  {
    name: 'Faith · Pray · Hope · Trust',
    note: 'Earlier palette',
    description:
      'Faith-rooted words designed for journals, planners, prayer pages, and everyday reminders in a previous DGK color story.',
  },
  {
    name: 'Seasonal Sticker Sheets',
    note: 'Past collections',
    description:
      'Seasonal sticker sheets from earlier DivaglamKreation collections, preserved here as part of the brand’s creative history.',
  },
];

export default function StickerArchivePage() {
  return (
    <main className="archive-shell" id="main-content">
      <SiteHeader />

      <section className="archive-hero">
        <p className="archive-eyebrow">From the DGK Archive</p>
        <h1>Sticker Archive</h1>
        <p className="archive-intro">
          These sticker designs are part of DivaglamKreation’s earlier creative journey. They reflect previous seasonal styles and color palettes and are preserved here as part of the story—not as the current DGK collection.
        </p>
        <a className="archive-back-link" href="/#shop">← Return to the current collection</a>
      </section>

      <section className="archive-section" aria-labelledby="archive-collection-title">
        <div className="archive-heading">
          <p className="archive-eyebrow">Past Sticker Collections</p>
          <h2 id="archive-collection-title">A look back at where the glow has been.</h2>
        </div>

        <div className="archive-grid">
          {archivedCollections.map((item) => (
            <article className="archive-card" key={item.name}>
              <div className="archive-card-art" aria-hidden="true">
                <span className="archive-dot archive-dot-one" />
                <span className="archive-dot archive-dot-two" />
                <span className="archive-dot archive-dot-three" />
                <span className="archive-wordmark">DK</span>
              </div>
              <div className="archive-card-copy">
                <span className="archive-status">Archived · {item.note}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="archive-note">
          <strong>Archive note:</strong> Some of these designs may still appear in older social posts, search results, or saved product references. That does not mean they are part of the current DGK product line.
        </div>
      </section>

      <section className="archive-story">
        <p className="archive-eyebrow">The Story Continues</p>
        <h2>Past work can be honored without defining what comes next.</h2>
        <p>
          DivaglamKreation continues to evolve while keeping its heart rooted in faith, reflection, creativity, and gentle encouragement. The archive holds earlier chapters while the current collection carries the brand forward.
        </p>
        <a className="archive-button" href="/#shop">Explore current DGK products</a>
      </section>

      <SiteFooter />
    </main>
  );
}
