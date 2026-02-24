'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TERMINAL_LINES = [
  '$ whoami',
  '',
  '>> Moeez Rehman',
  '> Backend Engineer (Python / Laravel)',
  '> APIs, Integrations, Automations | SaaS & AI-powered Workflows',
  '',
  '> GitHub →  LinkedIn →  Contact →',
  '',
  '$ cat about.md',
  '',
  "> I'm a Backend Engineer specializing in Python (FastAPI, Flask)",
  '> and Laravel, focused on building reliable APIs, automation workflows,',
  '> and backend systems for SaaS and AI-powered products.',
  '',
  '$ ls skills/',
  '',
  '> /backend     Python • Laravel • FastAPI',
  '> /frontend    React • Next.js • TypeScript',
  '> /integrations  Shopify API • eBay API • Webhooks',
  '> /databases    PostgreSQL • MySQL • MongoDB',
  '> /devops       Docker • AWS • Linux',
  '',
  '$ status',
  '> ✓ Available for projects',
];

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) return;
    const timer = setTimeout(() => {
      setLines(prev => [...prev, TERMINAL_LINES[lineIndex]]);
      setLineIndex(i => i + 1);
    }, 200);
    return () => clearTimeout(timer);
  }, [lineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="glass-card rounded-xl overflow-hidden border border-accent/20 shadow-2xl">
        {/* Terminal header */}
        <div className="bg-gradient-to-r from-accent/10 to-transparent px-4 py-3 border-b border-accent/20 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-muted font-mono">terminal.sh</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 md:p-6 font-mono text-xs md:text-sm min-h-[300px] md:min-h-[400px] bg-black/50">
          <AnimatePresence>
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-1 ${
                  line.startsWith('$')
                    ? 'text-accent'
                    : line.startsWith('>>')
                    ? 'text-accent font-bold text-base md:text-lg glow-text-sm'
                    : line.startsWith('>')
                    ? 'text-secondary'
                    : 'text-muted'
                }`}
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>

          {lineIndex >= TERMINAL_LINES.length && (
            <motion.span
              className="inline-block w-2 h-4 bg-accent ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
