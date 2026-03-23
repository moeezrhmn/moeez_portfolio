import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/lib/data/portfolio-data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: personalInfo.github, icon: FaGithub, handle: '@moeezrhmn' },
    { name: 'LinkedIn', url: personalInfo.linkedin, icon: FaLinkedin, handle: 'in/moeezrhmn' },
    { name: 'Email', url: `mailto:${personalInfo.email}`, icon: FaEnvelope, handle: personalInfo.email },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              Moeez Rehman
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Software Engineer building complete solutions — from backend APIs to frontend dashboards to the server they run on.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Navigation</h4>
            <nav className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-secondary hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-secondary hover:text-accent transition-colors group"
                >
                  <social.icon className="text-base text-muted group-hover:text-accent transition-colors shrink-0" />
                  <span className="text-sm">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
