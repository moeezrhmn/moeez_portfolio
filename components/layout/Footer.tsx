import Link from 'next/link';
import { siteConfig } from '@/lib/config';

const PAGES = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  const { contact, social, location, availability, resume } = siteConfig;

  return (
    <footer className="border-t border-line bg-deep relative z-10">
      <div className="shell py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="disp text-2xl">{siteConfig.name}</div>
            <p className="mt-4 text-sm leading-relaxed text-ash max-w-[28ch]">
              {siteConfig.title}. {location.city}, {location.country}, {location.timezone}.
            </p>
            {availability.open ? (
              <div className="meta mt-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                {availability.label}
              </div>
            ) : null}
          </div>

          <div>
            <div className="meta mb-5">Pages</div>
            <ul className="space-y-3 text-sm">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="ln">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="meta mb-5">Elsewhere</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="ln">
                  GitHub
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="ln">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={social.multsaver} target="_blank" rel="noopener noreferrer" className="ln">
                  MultSaver
                </a>
              </li>
              <li>
                <a href={resume} className="ln">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="meta mb-5">Direct</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="ln break-all">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="ln tnum">
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 hair flex flex-col sm:flex-row justify-between gap-3 meta">
          <span>
            &copy; <span className="tnum">2026</span> {siteConfig.author} &middot;{' '}
            {siteConfig.url.replace(/^https?:\/\//, '')}
          </span>
          <span>Set in Archivo &amp; Literata</span>
        </div>
      </div>
    </footer>
  );
}
