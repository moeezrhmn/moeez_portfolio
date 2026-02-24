'use client';

import React from 'react';

// Fixed positions — no window.innerWidth reads, no forced reflow
const FLOATING_SNIPPETS = [
  { text: 'def automate()', top: '12%', left: '3%', delay: '0s' },
  { text: 'async def sync', top: '68%', left: '5%', delay: '2s' },
  { text: 'import fastapi', top: '28%', right: '4%', delay: '1s' },
  { text: 'Route::get', top: '75%', right: '6%', delay: '3s' },
  { text: 'docker run', top: '45%', left: '1%', delay: '1.5s' },
  { text: '@app.route', top: '8%', right: '12%', delay: '2.5s' },
  { text: 'SELECT * FROM', top: '55%', right: '2%', delay: '0.5s' },
  { text: 'await response', top: '88%', left: '18%', delay: '3.5s' },
] as const;

export default function BackgroundEffects() {
  return (
    <>
      {/* Animated orbs — CSS animations, zero JS per frame */}
      <div
        className="absolute top-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'orb-pulse 8s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'orb-pulse-reverse 10s ease-in-out infinite' }}
      />

      {/* Floating code snippets — 8 items, fixed CSS positions, no window reads */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOATING_SNIPPETS.map((snippet, i) => (
          <div
            key={i}
            className="absolute text-accent/20 font-mono text-xs"
            style={{
              top: snippet.top,
              left: 'left' in snippet ? snippet.left : undefined,
              right: 'right' in snippet ? snippet.right : undefined,
              animation: `snippet-float ${12 + i * 2}s ease-in-out ${snippet.delay} infinite`,
            }}
          >
            {snippet.text}
          </div>
        ))}
      </div>
    </>
  );
}
