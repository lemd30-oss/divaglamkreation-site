import type { Metadata } from 'next';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import './sticker-archive.css';

export const metadata: Metadata = {
  title: 'Sticker Archive | DivaglamKreation',
  description:
    'Explore archived DivaglamKreation sticker designs from earlier collections and color palettes. These designs are preserved as part of the DGK creative story and are separate from the current collection.',
};

const archivedCollections = [
  {
    name: 'Coffee First. Then Soul Work.',
    note: 'Archived design · previous DGK palette',
    status: 'Physical sticker on hand',
    description:
      'A gentle reminder for slow mornings and meaningful reflection. This earlier DGK design pairs coffee with the deeper work of pausing, listening, and tending to your inner life.',
  },
  {
    name: 'Sip. Create. Inspire.',
    note: 'Archived design · previous DGK palette',
    status: 'Physical sticker on hand',
    description:
      'Coffee, creativity, and encouragement came together in this cheerful DGK design—an early reminder to make space for the ideas and inspiration already within you.',
  },
  {
    name: 'Owl Always Choose Me',
    note: 'Archived design · previous DGK palette',
    status: 'Physical sticker on hand',
    description:
      'A bright, playful piece from an earlier DGK season centered on self-worth and choosing yourself. The owl wording also connects naturally to the early identity language that became part of the DivaglamKreation story.',
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
          Earlier pieces from the DivaglamKreation creative journey. These designs come from previous DGK seasons and color palettes. They are preserved here as part of the brand story and are separate from the current product collection.
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
                <span className="archive-status">{item.note}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="archive-availability">{item.status}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="archive-note">
          <strong>From the DGK Archive:</strong> These pieces are shown as part of DivaglamKreation’s creative history. Colors, typography, and styling may differ from the current DGK collection as the brand has continued to grow and evolve.
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
