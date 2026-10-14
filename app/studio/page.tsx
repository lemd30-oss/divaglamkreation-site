import type { Metadata } from 'next';
import './studio.css';

export const metadata: Metadata = {
  title: 'DGK Daily Studio',
  description: 'DivaglamKreation daily studio dashboard.',
  robots: { index: false, follow: false },
};

const links = {
  notion:
    'https://coordinated-chipmunk-2d2.notion.site/DGK-Complete-Operating-System-3d435eb3816c81c89cf7d6db952ac4ea?pvs=149',
  notionAi: 'https://www.notion.so/',
  chatgpt: 'https://chatgpt.com/',
  claude: 'https://claude.ai/',
  museai: 'https://museai.im/',
  canva: 'https://www.canva.com/',
  metricool: 'https://app.metricool.com/',
  pinterest: 'https://www.pinterest.com/',
  gumroad: 'https://gumroad.com/',
  writingInbox: 'https://app.notion.com/p/9ba08bd130be479782894c2e8ddce164?pvs=204',
  substack: 'https://substack.com/@divaglamkreation',
  substackNotes: 'https://app.notion.com/p/3f935eb3816c81459236d5b7deedd169?pvs=204',
  substackTemplate: 'https://app.notion.com/p/3f935eb3816c81d8aaf3cef08129ebe2?pvs=204',
  flodesk: 'https://app.flodesk.com/email/6aaab6defb611c7dba3a7353/build',
  flodeskNotes: 'https://app.notion.com/p/3f935eb3816c8102a13cff6a58c02cec?pvs=204',
  flodeskTemplate: 'https://app.notion.com/p/3f935eb3816c8122b2b5ca0301682b56?pvs=204',
  drive: 'https://drive.google.com/',
  gmail: 'https://mail.google.com/',
  website: 'https://lemd30-oss-divaglamkreation-site.vercel.app',
  vercel: 'https://vercel.com/dashboard',
  github: 'https://github.com/lemd30-oss/divaglamkreation-site',
};

type StudioLinkProps = {
  href: string;
  icon: string;
  children: React.ReactNode;
};

function StudioLink({ href, icon, children }: StudioLinkProps) {
  return (
    <a className="studio-nav-link" href={href} target="_blank" rel="noreferrer">
      <span className="studio-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{children}</span>
    </a>
  );
}

export default function StudioPage() {
  return (
    <main className="studio-shell">
      <aside className="studio-sidebar" aria-label="DGK Daily Studio navigation">
        <div className="studio-brand">
          <p className="studio-kicker">DivaglamKreation</p>
          <h1>DGK Daily Studio</h1>
          <p>Your calm daily command center</p>
        </div>

        <section className="studio-nav-group">
          <h2>Daily</h2>
          <StudioLink href={links.notion} icon="🏠">
            DGK Operating System
          </StudioLink>
          <StudioLink href={links.notionAi} icon="✨">
            Notion AI
          </StudioLink>
          <StudioLink href={links.chatgpt} icon="✦">
            ChatGPT
          </StudioLink>
          <StudioLink href={links.claude} icon="◈">
            Claude AI
          </StudioLink>
          <StudioLink href={links.museai} icon="✧">
            Muse AI
          </StudioLink>
          <StudioLink href={links.canva} icon="🎨">
            Canva
          </StudioLink>
        </section>

        <section className="studio-nav-group">
          <h2>Content</h2>
          <StudioLink href={links.metricool} icon="🗓">
            Metricool
          </StudioLink>
          <StudioLink href={links.pinterest} icon="📌">
            Pinterest
          </StudioLink>
          <StudioLink href={links.gumroad} icon="🛍">
            Gumroad
          </StudioLink>
        </section>

        <section className="studio-nav-group">
          <h2>The Glow Letter</h2>
          <StudioLink href={links.writingInbox} icon="📥">
            DGK Writing Inbox
          </StudioLink>

          <details className="studio-folder" open>
            <summary>Substack Folder</summary>
            <div className="studio-folder-links">
              <StudioLink href={links.substackTemplate} icon="＋">
                New Substack Draft
              </StudioLink>
              <StudioLink href={links.substackNotes} icon="🗂">
                Notes + Articles
              </StudioLink>
              <StudioLink href={links.substack} icon="📝">
                Open Substack
              </StudioLink>
            </div>
          </details>

          <details className="studio-folder">
            <summary>Flodesk Folder</summary>
            <div className="studio-folder-links">
              <StudioLink href={links.flodeskTemplate} icon="＋">
                New Flodesk Draft
              </StudioLink>
              <StudioLink href={links.flodeskNotes} icon="🗂">
                Notes + Articles
              </StudioLink>
              <StudioLink href={links.flodesk} icon="✉">
                Open Flodesk Draft
              </StudioLink>
            </div>
          </details>
        </section>

        <section className="studio-nav-group">
          <h2>Business</h2>
          <StudioLink href={links.drive} icon="🗂">
            Google Drive
          </StudioLink>
          <StudioLink href={links.gmail} icon="📨">
            Gmail
          </StudioLink>
          <StudioLink href={links.website} icon="🌐">
            DGK Website
          </StudioLink>
        </section>

        <section className="studio-nav-group">
          <h2>Website</h2>
          <StudioLink href={links.vercel} icon="▲">
            Vercel
          </StudioLink>
          <StudioLink href={links.github} icon="⌘">
            GitHub
          </StudioLink>
        </section>
      </aside>

      <section className="studio-main">
        <div className="studio-heading-row">
          <div>
            <p className="studio-kicker">Start with what matters</p>
            <h2>Today at DGK</h2>
            <p className="studio-intro">
              Use the left sidebar to move through your studio without opening
              everything at once. Keep the day centered on one clear Create,
              one Manage, and one Publish action.
            </p>
          </div>

          <div className="studio-focus-card">
            <strong>Current Focus</strong>
            <span>Glow Collection</span>
            <span>Pinterest growth</span>
            <span>Product visibility</span>
          </div>
        </div>

        <div className="studio-priority-grid">
          <article className="studio-card">
            <span className="studio-card-label">1 Create</span>
            <h3>Create</h3>
            <p>
              Choose one piece to make today: a product page, visual, article,
              pin, or product asset.
            </p>
          </article>
          <article className="studio-card">
            <span className="studio-card-label">1 Manage</span>
            <h3>Manage</h3>
            <p>
              Handle one business task: organize files, update Notion, review
              products, or maintain the website.
            </p>
          </article>
          <article className="studio-card">
            <span className="studio-card-label">1 Publish</span>
            <h3>Publish</h3>
            <p>
              Move one finished piece into the world through Metricool,
              Pinterest, Substack, Flodesk, or Gumroad.
            </p>
          </article>
        </div>

        <section className="studio-section">
          <h2>Quick Start</h2>
          <div className="studio-quick-grid">
            <a href={links.notion} target="_blank" rel="noreferrer">
              Open DGK Operating System
            </a>
            <a href={links.chatgpt} target="_blank" rel="noreferrer">
              Open ChatGPT
            </a>
            <a href={links.website} target="_blank" rel="noreferrer">
              Open DGK Website
            </a>
          </div>
        </section>

        <section className="studio-section">
          <h2>The Glow Letter</h2>
          <div className="studio-letter-grid">
            <article>
              <h3>Substack</h3>
              <p>
                Keep Substack ideas, notes, article drafts, and published-piece
                references together in one dedicated folder.
              </p>
            </article>
            <article>
              <h3>Flodesk</h3>
              <p>
                Keep Glow Letter notes, email drafts, article-to-email ideas,
                and sent-email references together in a separate folder.
              </p>
            </article>
          </div>
        </section>

        <p className="studio-footer">
          DGK Daily Studio · One calm front door for your work.
        </p>
      </section>
    </main>
  );
}
