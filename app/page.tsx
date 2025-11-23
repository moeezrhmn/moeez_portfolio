'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, services, whyWorkWithMe, results, cta } from '@/lib/data/portfolio-data';
import Link from 'next/link';
import Script from 'next/script';
import { siteConfig } from '@/lib/config';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Moeez Rehman",
  "jobTitle": "Backend Engineer (Python & Laravel)",
  "description": "Backend Engineer specializing in Python, Laravel, API Development, E-commerce Integrations, and SaaS Systems",
  "url": siteConfig.url,
  "email": "moeezrhmn@gmail.com",
  "telephone": "+92-322-6622545",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore/Faisalabad",
    "addressCountry": "Pakistan"
  },
  "sameAs": [
    "https://github.com/moeezrhmn",
    "https://linkedin.com/in/moeezrhmn"
  ],
  "knowsAbout": [
    "Python",
    "Laravel",
    "FastAPI",
    "API Development",
    "Backend Engineering",
    "E-commerce Integration",
    "SaaS Development",
    "Database Design",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS"
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Terminal animation lines
  const terminalSequence = [
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
    '> I\'m a Backend Engineer specializing in Python (FastAPI, Flask)',
    '> and Laravel, focused on building reliable APIs, automation workflows,',
    '> and backend systems for SaaS and AI-powered products.',
    '',
    '$ ls skills/',
    '',
    '> /backend     Python • Laravel • FastAPI',
    '> /integrations  Shopify API • eBay API • Webhooks',
    '> /databases    PostgreSQL • MySQL • MongoDB',
    '> /devops       Docker • AWS • Linux',
    '',
    '$ status',
    '> ✓ Available for projects',
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (currentLineIndex < terminalSequence.length) {
      const timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, terminalSequence[currentLineIndex]]);
        setCurrentLineIndex(currentLineIndex + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  // Floating code snippets for background
  const codeSnippets = [
    'def automate()',
    'class API',
    'SELECT * FROM',
    'async def sync',
    '{...}',
    'import fastapi',
    'Route::get',
    'docker run',
    'function fetch()',
    'await response',
    'try { ... }',
    'const data =',
    'while True:',
    'if __name__',
    'composer install',
    'npm run build',
    '@app.route',
    'use App\\',
    'return view()',
    'pipeline.run()',
    'df.groupby()',
    'git commit -m',
    'python manage.py',
    'artisan migrate',
    'FROM ubuntu',
    'WHERE id IN',
    'JOIN users',
    'ORDER BY',
    'GROUP BY',
    'async function',
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero/Banner Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
          {/* Gradient orbs */}
          <motion.div
            className="absolute top-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating code snippets */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {codeSnippets.map((snippet, i) => (
              <motion.div
                key={i}
                className="absolute text-accent/20 font-mono text-xs"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  x: [null, Math.random() * window.innerWidth],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              >
                {snippet}
              </motion.div>
            ))}
          </div>
        )}

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-20">

            {/* Left side - Main headline and CTA */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left order-1 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Small intro tag */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle border border-accent/20 mb-6 mt-8 md:mt-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs md:text-sm text-accent font-mono">Available To Discuss Projects</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight"
              >
                I Build Backend Systems{' '}
                <span className="text-accent glow-text">That Run Your Business</span>{' '}
                on Autopilot
              </motion.h1>

              {/* Value proposition */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg lg:text-xl text-secondary mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                {personalInfo.valueProposition}
              </motion.p>

              {/* Quick stats */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 md:gap-6 mb-8 justify-center lg:justify-start"
              >
                {[
                  { label: '300K+ Products', sublabel: 'Synced' },
                  { label: '40+ Orders', sublabel: 'Daily Automation' },
                  { label: '5+ Years', sublabel: 'Experience' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-accent font-mono">{stat.label}</div>
                    <div className="text-xs text-muted">{stat.sublabel}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent text-black rounded-lg font-bold hover:glow-border transition-all text-sm md:text-base"
                  >
                    {cta.primaryCTA.text}
                  </motion.button>
                </Link>
                <Link href="/work">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 glass-card border border-accent/30 rounded-lg font-mono hover:border-accent hover:glow-border transition-all text-accent text-sm md:text-base"
                  >
                    View My Work →
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8 text-sm text-muted justify-center lg:justify-start"
              >
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  GitHub
                </a>
                <span className="text-accent/30">|</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <span className="text-accent/30">|</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
                  Email
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Terminal window */}
            <motion.div
              className="lg:col-span-5 order-2 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="glass-card rounded-xl overflow-hidden border border-accent/20 shadow-2xl">
                {/* Terminal header */}
                <div className="bg-gradient-to-r from-accent/10 to-transparent px-4 py-3 border-b border-accent/20 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-3 text-xs text-muted font-mono">terminal.sh</span>
                </div>

                {/* Terminal body */}
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm min-h-[300px] md:min-h-[400px] bg-black/50">
                  <AnimatePresence>
                    {terminalLines.map((line, idx) => (
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
                            : line.startsWith('✓')
                            ? 'text-green-400'
                            : 'text-muted'
                        }`}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Cursor */}
                  {currentLineIndex >= terminalSequence.length && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-accent ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs font-mono">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* What I Do Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// WHAT_I_DO</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Services That Solve Real Problems
            </h2>
            <p className="text-secondary text-base md:text-lg  mx-auto leading-relaxed" style={{ textAlign: 'center' }}>
              I specialize in building systems that save time, eliminate manual work, and connect your business tools together.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative glass-card rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300" />

                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/0 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
                    >
                      <span className="text-accent text-sm font-mono font-bold">
                        0{index + 1}
                      </span>
                    </motion.div>

                    {/* Decorative element */}
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300 delay-75" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300 delay-150" />
                    </div>
                  </div>

                  {/* Title with enhanced hover effect */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technical Detail with enhanced styling */}
                  <div className="mb-4 p-3 rounded-lg bg-black/30 border border-accent/10 group-hover:border-accent/30 transition-colors duration-300">
                    <p className="text-muted text-xs italic flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">⚡</span>
                      <span>{service.technicalDetail}</span>
                    </p>
                  </div>

                  {/* Examples with better styling */}
                  <ul className="space-y-2.5">
                    {service.examples.slice(0, 2).map((example, exampleIndex) => (
                      <motion.li
                        key={exampleIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + exampleIndex * 0.1 }}
                        className="text-muted text-xs flex items-start gap-2 group/item"
                      >
                        <span className="text-accent mt-1 group-hover/item:scale-125 transition-transform duration-200">▸</span>
                        <span className="group-hover/item:text-secondary transition-colors duration-200">{example}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Results Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// PROVEN_RESULTS</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real Impact, Real Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-xl p-8 border border-accent/20 hover:border-accent/40 transition-all"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent mb-4 font-mono">
                  {result.metric}
                </div>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  {result.description}
                </p>
                <div className="text-xs text-muted border-l-2 border-accent/30 pl-3 italic">
                  {result.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Work With Me Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// WHY_WORK_WITH_ME</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Outcomes That Matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithMe.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-subtle rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all"
              >
                <h3 className="text-lg font-bold text-accent mb-3">{item.outcome}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-t from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {cta.heading}
            </h2>
            <p className="text-secondary text-base md:text-lg mb-10 mx-auto">
              {cta.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-accent text-black rounded-lg font-bold hover:glow-border transition-all text-base"
                >
                  {cta.primaryCTA.text}
                </motion.button>
              </Link>
              <a href={`mailto:${cta.secondaryCTA.email}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 glass-card border border-accent/30 rounded-lg font-mono hover:border-accent hover:glow-border transition-all text-accent text-base"
                >
                  {cta.secondaryCTA.text}
                </motion.button>
              </a>
            </div>

            <p className="text-muted text-sm" style={{ textAlign: 'center' }}>{cta.availability}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
