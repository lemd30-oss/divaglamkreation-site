import Image from 'next/image';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { pageMetadata } from '../metadata';
import '../home.css';
import '../editorial-refresh.css';
import './start-your-glow.css';
import './glow-path.css';
import { GlowPathPicker } from './GlowPathPicker';

export const metadata = pageMetadata(
  'Start Your Glow | DivaglamKreation',
  'Begin with The 3-Day Pause, a free journal, and discover a gentle, faith-rooted path to reflection.',
  '/start-your-glow'
);

const reflectionPrompts = [
  'What would I put down if no one would be disappointed in me?',
  'Where did I say yes with my mouth and no in my chest?',
  'Name one thing I did today that nobody saw. Let it count anyway.',
  'What am I praying for that I am also running from?',
  'What have I survived that I have never once thanked myself for?',
];

export default function StartYourGlow() {
  return (
    <main className="site-shell" id="main-content">
      <SiteHeader />
      <div className="start-glow-page">
        <section className="start-glow-hero" aria-labelledby="glow-heading">
          <Image src="/images/brand/glow-owl.png" alt="The original DivaglamKreation Glow Owl" width={855} height={1186} className="start-glow-owl" priority />
          <p className="eyebrow">Faith · Reflection · Creativity</p>
          <h1 id="glow-heading">Your Glow Begins Here</h1>
          <p>A quiet place to reconnect with yourself, one gentle moment at a time.</p>
          <a className="button" href="#choose-your-glow">Choose Your Glow</a>
        </section>
        <section className="start-glow-prompts" aria-labelledby="glow-prompts-heading">
          <p className="eyebrow">Yours to keep</p>
          <h2 id="glow-prompts-heading">Five prompts, before anything else.</h2>
          <p className="start-glow-prompts-intro">No sign-up for these. Take them with you, and write to whichever one sits down next to you.</p>
          <ul className="start-glow-prompt-list">
            {reflectionPrompts.map((prompt) => (
              <li key={prompt} className="start-glow-prompt">{prompt}</li>
            ))}
          </ul>
        </section>
        <GlowPathPicker />
        <section className="start-glow-closing"><p>You mattered before anyone was looking.</p><a className="text-link" href="/glowlist">Stay connected with the Glowlist →</a></section>
      </div>
      <SiteFooter />
    </main>
  );
}
