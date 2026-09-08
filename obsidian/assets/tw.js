/* Tailwind theme. Loaded after the CDN script, before render.
   Colours resolve to CSS variables so the light/dark switch is a single
   attribute change on <html> rather than two sets of utility classes. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        void:   'var(--void)',    // page ground
        deep:   'var(--deep)',    // alternating band
        raised: 'var(--raised)',  // cards, inputs
        bone:   'var(--bone)',    // primary text
        ash:    'var(--ash)',     // secondary text
        dim:    'var(--dim)',     // tertiary
        line:   'var(--line)',    // hairlines
        brass:  'var(--brass)',   // the single accent, used sparingly
        onbrass:'var(--onbrass)', // text that sits on brass
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { shell: '88rem' },
    },
  },
};
