'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/config';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/** Live local time. Small, useless, and unmistakably hand-built. */
function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: siteConfig.location.tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="meta tnum hidden lg:flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-brass" />
      {/* Rendered empty on the server; the client fills it after mount. */}
      <span suppressHydrationWarning>{time || '--:--:--'}</span>
      <span className="text-dim">LHE</span>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Lock the page behind the drawer, and let Escape close it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Any navigation closes it.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="site-head">
        <div className="shell h-16 flex items-center justify-between gap-6">
          <Link href="/" className="meta !text-bone shrink-0">
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8 meta">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-a"
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Clock />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`burger md:hidden w-6 h-4 flex flex-col justify-between ${open ? 'on' : ''}`}
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="drawer"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div id="drawer" className={`drawer md:hidden ${open ? 'open' : ''}`}>
        <nav className="px-6 py-10 flex flex-col">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`disp text-4xl py-4 border-b border-line ${
                isActive(item.href) ? 'text-brass' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.contact.booking} className="btn grp mt-10 self-start">
            Book 20 minutes <span className="arw">&rarr;</span>
          </a>
        </nav>
      </div>
    </>
  );
}
