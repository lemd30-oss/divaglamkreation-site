'use client';

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';

const STORAGE_KEY = 'dgk:glow-path:v1';

const glowPaths = [
  {
    id: 'reflect',
    number: '01',
    title: 'A quiet moment',
    preview: 'Space to listen to yourself.',
    result: 'Your story matters, including the quiet chapters. Start with the owl and the question that began DivaglamKreation: Who are you?',
    href: '/blog/it-started-with-this-owl',
    cta: 'Read the Glow Owl story',
  },
  {
    id: 'faith',
    number: '02',
    title: 'Faith & encouragement',
    preview: 'A gentle reminder to keep close.',
    result: 'You do not have to earn your rest. Find a faith-rooted letter for the days when a little grace is what you need.',
    href: '/blog/why-you-dont-need-to-earn-rest',
    cta: 'Read a gentle letter',
  },
  {
    id: 'reset',
    number: '03',
    title: 'A gentle reset',
    preview: 'One small step to begin again.',
    result: 'Begin with The 3-Day Pause, a free guided reflection, and continue into The Gentle Reset whenever you are ready.',
    href: '#begin',
    cta: 'Explore your first step',
  },
  {
    id: 'create',
    number: '04',
    title: 'Creative inspiration',
    preview: 'A little room to make and become.',
    result: 'Come behind the scenes of a creative life shaped by coffee, reflection, journaling, and the simple truth that every woman matters.',
    href: '/studio',
    cta: 'Visit the DGK Studio',
  },
] as const;

type GlowPathId = (typeof glowPaths)[number]['id'];

export function GlowPathPicker() {
  const [selected, setSelected] = useState<GlowPathId | null>(null);

  useEffect(() => {
    try {
      const remembered = window.localStorage.getItem(STORAGE_KEY);
      const saved = glowPaths.find((path) => path.id === remembered);
      if (saved) setSelected(saved.id);
    } catch {
      // The experience still works when browser storage is unavailable.
    }
  }, []);

  function selectPath(id: GlowPathId) {
    setSelected(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Persisting a choice is optional.
    }
    try {
      track('glow_path_selected', { path: id });
    } catch {
      // Tracking must never prevent someone from using the page.
    }
  }

  function clearChoice() {
    setSelected(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Selection can always be cleared for the current visit.
    }
  }

  const active = glowPaths.find((path) => path.id === selected);

  return (
    <section className="glow-path" id="choose-your-glow" aria-labelledby="choose-glow-title">
      <div className="glow-path-intro">
        <p className="eyebrow">Choose Your Glow</p>
        <h2 id="choose-glow-title">What does your heart need today?</h2>
        <p>There is no wrong place to begin. Choose what speaks to you, and we will point you to a thoughtful first step.</p>
      </div>

      <div className="glow-path-options" role="group" aria-label="Choose a Glow Path">
        {glowPaths.map((path) => (
          <button
            type="button"
            className="glow-path-option"
            aria-pressed={selected === path.id}
            key={path.id}
            onClick={() => selectPath(path.id)}
          >
            <span className="glow-path-option-number" aria-hidden="true">{path.number}</span>
            <span className="glow-path-option-copy">
              <strong>{path.title}</strong>
              <span>{path.preview}</span>
            </span>
            <span className="glow-path-option-mark" aria-hidden="true">{selected === path.id ? '✓' : '→'}</span>
          </button>
        ))}
      </div>

      <div className="glow-path-result" aria-live="polite" aria-atomic="true">
        {active ? (
          <>
            <p className="glow-path-result-label">Your Glow Path</p>
            <h3>{active.title}</h3>
            <p>{active.result}</p>
            <div className="glow-path-actions">
              <a
                className="button"
                href={active.href}
                onClick={() => {
                  try {
                    track('glow_path_continue', { path: active.id });
                  } catch {
                    // A blocked analytics request never blocks navigation.
                  }
                }}
              >
                {active.cta} →
              </a>
              <button type="button" className="glow-path-clear" onClick={clearChoice}>Forget my choice</button>
            </div>
          </>
        ) : (
          <p className="glow-path-empty">Choose one of the four paths above to find a gentle next step.</p>
        )}
      </div>

      <p className="glow-path-privacy">Your choice is kept in this browser so you can return to it, and you can forget it any time. We record only the chosen topic in site analytics—not your name or any personal journal answers.</p>
    </section>
  );
}
