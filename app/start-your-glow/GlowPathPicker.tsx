'use client';

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';

const STORAGE_KEY = 'dgk:glow-path:v1';

const glowPaths = [
  {
    id: 'reflect',
    number: '01',
    title: 'A quiet moment',
    preview: 'Space to listen to yourself',
    result: 'Begin with the Glow Owl and the question that started it all: “Who are you?” Your story matters, even in its quiet chapters.',
    href: '/blog/it-started-with-this-owl',
    cta: 'Read the Glow Owl story',
  },
  {
    id: 'faith',
    number: '02',
    title: 'Faith & encouragement',
    preview: 'A gentle reminder for today',
    result: 'Some days, all you need is permission to rest. This little letter offers encouragement rooted in faith and grace.',
    href: '/blog/why-you-dont-need-to-earn-rest',
    cta: 'Read a gentle letter',
  },
  {
    id: 'reset',
    number: '03',
    title: 'A gentle reset',
    preview: 'Begin again, one page at a time',
    result: 'Start with The 3-Day Pause, a free reflection journal. You can go deeper with The Gentle Reset whenever you feel ready.',
    href: '#begin',
    cta: 'Explore the free journal',
  },
  {
    id: 'create',
    number: '04',
    title: 'Creative inspiration',
    preview: 'Coffee, journaling & creative living',
    result: 'Come behind the scenes, where a quiet creative life and a simple reminder—that every woman matters—became DivaglamKreation.',
    href: '/studio',
    cta: 'Visit the DGK Studio',
  },
] as const;

type GlowPathId = (typeof glowPaths)[number]['id'];

export function GlowPathPicker() {
  const [selected, setSelected] = useState<GlowPathId | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (glowPaths.some((path) => path.id === saved)) {
        setSelected(saved as GlowPathId);
      }
    } catch {
      // Browser storage is optional.
    }
  }, []);

  function choose(id: GlowPathId) {
    setSelected(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Still usable when storage is blocked.
    }
    try {
      track('glow_path_selected', { path: id });
    } catch {
      // Never interrupt navigation for analytics.
    }
  }

  function clearChoice() {
    setSelected(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Still clears the current session's choice.
    }
  }

  return (
    <section className="glow-path" id="choose-your-glow" aria-labelledby="choose-glow-title">
      <div className="glow-path-intro">
        <p className="eyebrow">Choose Your Glow</p>
        <h2 id="choose-glow-title">A little space for what you need.</h2>
        <p>Choose what speaks to your season. We’ll help you find a gentle place to begin.</p>
      </div>

      <div className="glow-path-options" role="group" aria-label="Choose a Glow Path">
        {glowPaths.map((path) => {
          const isSelected = selected === path.id;
          return (
            <div className={isSelected ? 'glow-path-item glow-path-item-selected' : 'glow-path-item'} key={path.id}>
              <button
                type="button"
                className="glow-path-option"
                aria-expanded={isSelected}
                aria-pressed={isSelected}
                onClick={() => choose(path.id)}
              >
                <span className="glow-path-number" aria-hidden="true">{path.number}</span>
                <span className="glow-path-option-copy">
                  <strong>{path.title}</strong>
                  <span>{path.preview}</span>
                </span>
                <span className="glow-path-option-mark" aria-hidden="true">{isSelected ? '−' : '+'}</span>
              </button>

              {isSelected && (
                <div className="glow-path-detail">
                  <p>{path.result}</p>
                  <a
                    className="glow-path-link"
                    href={path.href}
                    onClick={() => {
                      try {
                        track('glow_path_continue', { path: path.id });
                      } catch {
                        // Navigating is always possible without analytics.
                      }
                    }}
                  >
                    {path.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="glow-path-footer">
        <p>Your choice stays in this browser. We measure selected topics to improve the experience, but collect no journal answers.</p>
        {selected && <button type="button" className="glow-path-clear" onClick={clearChoice}>Clear my choice</button>}
      </div>
    </section>
  );
}
