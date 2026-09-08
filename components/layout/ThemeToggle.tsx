'use client';

import { useEffect, useState } from 'react';

/**
 * Light is the default. An explicit choice persists in localStorage; the OS
 * preference is deliberately ignored so a first visit is always light.
 * The pre-paint script in layout.tsx has already set the attribute by the
 * time this mounts, so this only has to stay in sync with it.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
    setReady(true);
  }, []);

  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode, or storage blocked: the toggle still works for this page */
    }
    setDark(!dark);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-btn"
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
    >
      {/* Placeholder keeps the button width stable before hydration. */}
      <span suppressHydrationWarning>{ready ? (dark ? 'Light' : 'Dark') : '    '}</span>
    </button>
  );
}
