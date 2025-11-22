'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';
import { personalInfo } from '@/lib/data/portfolio-data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: FaGithub,
      handle: '@moeezrhmn'
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: FaLinkedin,
      handle: 'in/moeezrhmn'
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: FaEnvelope,
      handle: personalInfo.email
    },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative border-t border-accent/10 bg-background mt-32">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaTerminal className="text-accent text-xl" />
              <h3 className="text-xl font-bold text-foreground font-mono">
                {personalInfo.name.split(' ')[0]} $
              </h3>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Backend Engineer specializing in APIs, integrations, and automation workflows.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted font-mono">
              <span className="text-accent">$</span>
              <span>echo "Building reliable systems"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-accent font-mono uppercase tracking-wider">
              // Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-secondary hover:text-accent transition-colors text-sm font-mono group"
                >
                  <span className="text-muted group-hover:text-accent">→</span> {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-accent font-mono uppercase tracking-wider">
              // Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-secondary hover:text-accent transition-colors group"
                >
                  <social.icon className="text-lg group-hover:glow-text-sm transition-all" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{social.name}</span>
                    <span className="text-xs text-muted font-mono">{social.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted font-mono">
              <span className="text-accent">©</span> {currentYear} {personalInfo.name}.
              <span className="text-secondary ml-1">All rights reserved.</span>
            </div>

            {/* System Info */}
            <div className="flex items-center gap-4 text-xs text-muted font-mono">
              <div className="flex items-center gap-2">
                <span className="text-accent">►</span>
                <span>Built with Next.js 16</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span>System Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Command Easter Egg */}
        <motion.div
          className="mt-8 pt-6 border-t border-accent/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-xs text-muted/50 font-mono justify-center">
            <span className="text-accent/50">$</span>
            <span>cat /dev/random | hexdump | grep "00ff41"</span>
            <span className="w-1 h-3 bg-accent/50 animate-pulse ml-1"></span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
