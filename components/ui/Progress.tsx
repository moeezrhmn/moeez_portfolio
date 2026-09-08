'use client';

import { useEffect, useState } from 'react';

/** A hairline of brass across the top, tracking scroll depth. */
export function Progress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const paint = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    paint();
    window.addEventListener('scroll', paint, { passive: true });
    window.addEventListener('resize', paint);
    return () => {
      window.removeEventListener('scroll', paint);
      window.removeEventListener('resize', paint);
    };
  }, []);

  return <div className="prog" style={{ width: `${pct}%` }} aria-hidden="true" />;
}
