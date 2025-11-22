'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, skills, experience } from '@/lib/data/portfolio-data';
import Link from 'next/link';
import Script from 'next/script';

interface CommandLine {
  id: number;
  command: string;
  output?: React.ReactNode;
  isTyping?: boolean;
}

// Calculate dynamic stats
const calculateYearsOfExperience = () => {
  const startDate = new Date('2020-01-01'); // Adjust to your actual start date
  const today = new Date();
  const years = (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(years);
};

const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Moeez Rehman",
  "jobTitle": "Backend Engineer",
  "description": "Backend Engineer specializing in Python, Laravel, API Development, E-commerce Integrations, and SaaS Systems",
  "url": "https://moeezrehman.com",
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
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Your University Name" // Update this
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Codiux"
  }
};

export default function Home() {
  const [commandHistory, setCommandHistory] = useState<CommandLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [typingCommand, setTypingCommand] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Matrix rain characters
  const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';

  // Predefined command sequence to auto-run on load
  const autoCommands = [
    { cmd: 'whoami', delay: 1500 },
    { cmd: 'cat about.md', delay: 2500 },
    { cmd: 'ls skills/', delay: 3500 },
  ];

  // Mount detection for client-side only rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Boot sequence
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 1000);
    return () => clearTimeout(bootTimer);
  }, []);

  // Auto-run commands with typing effect
  useEffect(() => {
    if (isBooting || commandIndex >= autoCommands.length) return;

    const currentAutoCmd = autoCommands[commandIndex];
    const timer = setTimeout(() => {
      // Typing animation
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex <= currentAutoCmd.cmd.length) {
          setTypingCommand(currentAutoCmd.cmd.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          executeCommand(currentAutoCmd.cmd);
          setTypingCommand('');
          setCommandIndex(commandIndex + 1);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }, currentAutoCmd.delay);

    return () => clearTimeout(timer);
  }, [commandIndex, isBooting]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmedCmd) {
      case 'whoami':
        output = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 text-secondary"
          >
            <p className="text-accent font-bold text-sm md:text-lg glow-text-sm">{personalInfo.name}</p>
            <p className="text-foreground text-xs md:text-base">{personalInfo.title}</p>
            <p className="text-xs md:text-sm text-muted">{personalInfo.subtitle}</p>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-3 text-xs md:text-sm">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:glow-text-sm transition-all group">
                <span className="inline-flex items-center gap-1">
                  GitHub <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:glow-text-sm transition-all group">
                <span className="inline-flex items-center gap-1">
                  LinkedIn <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </a>
              <Link href="/contact" className="hover:text-accent hover:glow-text-sm transition-all group">
                <span className="inline-flex items-center gap-1">
                  Contact <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </motion.div>
        );
        break;

      case 'cat about.md':
        output = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 text-secondary text-xs md:text-sm leading-relaxed"
          >
            <p>I'm a Backend Engineer specializing in Python (FastAPI, Flask) and Laravel, focused on building reliable APIs, automation workflows, and backend systems for SaaS and AI-powered products.</p>
            <p className="text-muted">I'm not a generalist — I'm strongest where companies feel the most pain: systems that move data, integrate platforms, automate operations, and scale without breaking.</p>
          </motion.div>
        );
        break;

      case 'ls skills/':
        output = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs md:text-sm"
          >
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-1"
              >
                <p className="text-accent font-mono glow-text-sm text-xs md:text-sm">/{category}</p>
                <div className="text-secondary text-[10px] md:text-xs space-y-0.5 ml-3">
                  {items.map((skill, skillIdx) => (
                    <p key={skillIdx} className="hover:text-foreground hover:translate-x-1 transition-all cursor-default leading-relaxed">
                      → {skill}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
        break;

      case 'cat experience.log':
        output = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 md:space-y-4 text-xs md:text-sm"
          >
            {experience.slice(0, 2).map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="border-l-2 border-accent/30 pl-3 md:pl-4 hover:border-accent/60 transition-all"
              >
                <p className="text-accent font-bold glow-text-sm text-xs md:text-sm">{exp.company}</p>
                <p className="text-secondary text-[10px] md:text-xs">{exp.title} | {exp.period}</p>
                <p className="text-muted text-[10px] md:text-xs mt-1">{exp.description}</p>
              </motion.div>
            ))}
            <Link href="/work" className="text-accent hover:glow-text-sm text-[10px] md:text-xs inline-block mt-2 group">
              <span className="inline-flex items-center gap-1">
                View full experience <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </Link>
          </motion.div>
        );
        break;

      case 'help':
        output = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-sm space-y-1"
          >
            <p className="text-accent mb-2 glow-text-sm">Available commands:</p>
            <p><span className="text-foreground">whoami</span> - Display information about me</p>
            <p><span className="text-foreground">cat about.md</span> - Read my background</p>
            <p><span className="text-foreground">ls skills/</span> - List technical skills</p>
            <p><span className="text-foreground">cat experience.log</span> - View work history</p>
            <p><span className="text-foreground">clear</span> - Clear terminal</p>
          </motion.div>
        );
        break;

      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        return;

      default:
        output = (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm"
          >
            Command not found: {cmd}. Type 'help' for available commands.
          </motion.p>
        );
    }

    const newCommand: CommandLine = {
      id: Date.now(),
      command: cmd,
      output: output,
    };

    setCommandHistory([...commandHistory, newCommand]);
    setCurrentCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      executeCommand(currentCommand);
    }
  };

  return (
    <>
    {/* Structured Data for SEO */}
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 px-3 md:px-4">
      {/* Matrix rain background - Hidden on mobile for better performance */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#001a00] to-black">
        {isMounted && (
          <div className="absolute inset-0 opacity-20 hidden md:block">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-accent font-mono text-xs opacity-40"
                style={{
                  left: `${(i * 5)}%`,
                  top: `-10%`,
                }}
                animate={{
                  y: ['0vh', '110vh'],
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 5,
                }}
              >
                {matrixChars.split('').map((char, idx) => (
                  <div key={idx} className="leading-tight">
                    {Math.random() > 0.5 ? char : ''}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.1) 0px, transparent 2px, transparent 4px)',
        }}
        animate={{
          y: [0, 8],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Terminal window */}
      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        {/* Terminal header */}
        <motion.div
          className="glass-card rounded-t-2xl md:rounded-t-2xl border-b border-accent/20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-accent/5 to-transparent opacity-50"></div>
          <div className="relative flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3">
            <div className="flex items-center gap-1.5 md:gap-2">
              <motion.div
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"
                whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(239, 68, 68, 0.6)' }}
              />
              <motion.div
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"
                whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(234, 179, 8, 0.6)' }}
              />
              <motion.div
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 glow-element"
                whileHover={{ scale: 1.2 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="text-secondary text-[10px] md:text-xs font-mono">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                moeez@portfolio:~$
              </motion.span>
            </div>
            <div className="w-8 md:w-16"></div>
          </div>
        </motion.div>

        {/* Terminal body */}
        <motion.div
          className="glass-card rounded-b-2xl md:rounded-b-2xl p-4 md:p-6 lg:p-8 min-h-[400px] md:min-h-[500px] max-h-[70vh] md:max-h-[600px] overflow-y-auto font-mono relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Boot sequence */}
          <AnimatePresence>
            {isBooting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-accent text-sm space-y-1 mb-6"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  [OK] Starting Portfolio Terminal...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  [OK] Loading modules...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="glow-text-sm"
                >
                  [OK] System ready.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Welcome message */}
          <motion.div
            className="mb-4 md:mb-6 text-xs md:text-sm text-secondary space-y-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-accent glow-text-sm">Welcome to Moeez Rehman's Portfolio Terminal v1.0</p>
            <p className="hidden md:block">Type 'help' to see available commands.</p>
            <p className="md:hidden">Tap buttons below to explore.</p>
            <p className="text-muted text-[10px] md:text-xs mt-2">──────────────────────────────────────</p>
          </motion.div>

          {/* Command history */}
          <div className="space-y-4">
            <AnimatePresence>
              {commandHistory.map((cmd) => (
                <motion.div
                  key={cmd.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-xs md:text-sm">
                    <span className="text-accent glow-text-sm">$</span>
                    <span className="text-foreground">{cmd.command}</span>
                  </div>
                  {cmd.output && (
                    <div className="ml-4 mb-4">
                      {cmd.output}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing animation for auto commands */}
            {typingCommand && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-xs md:text-sm"
              >
                <span className="text-accent glow-text-sm">$</span>
                <span className="text-foreground">{typingCommand}</span>
                <motion.span
                  className="w-1.5 h-3 md:w-2 md:h-4 bg-accent inline-block"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            )}

            {/* Input prompt - Hidden on mobile for better UX */}
            {!isBooting && !typingCommand && (
              <motion.div
                className="hidden md:flex items-center gap-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-accent glow-text-sm">$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-foreground font-mono placeholder-muted focus:placeholder-accent/50 transition-all"
                  placeholder="Type a command... (try 'help')"
                  autoFocus
                />
                <motion.span
                  className="w-2 h-4 bg-accent"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            )}
          </div>

          {/* Quick action buttons */}
          <motion.div
            className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-accent/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-muted text-[10px] md:text-xs mb-3">Quick actions:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { cmd: 'whoami', color: 'accent' },
                { cmd: 'cat about.md', color: 'accent', label: 'about' },
                { cmd: 'ls skills/', color: 'accent', label: 'skills' },
                { cmd: 'cat experience.log', color: 'accent', label: 'experience' },
                { cmd: 'clear', color: 'red' }
              ].map((btn) => (
                <motion.button
                  key={btn.cmd}
                  onClick={() => executeCommand(btn.cmd)}
                  className={`text-[10px] md:text-xs px-3 md:px-3 py-2 md:py-1.5 rounded-lg ${
                    btn.color === 'red'
                      ? 'bg-red-500/10 hover:bg-red-500/20 active:bg-red-500/30 text-red-400 border border-red-400/20'
                      : 'bg-accent/10 hover:bg-accent/20 active:bg-accent/30 text-accent border border-accent/20'
                  } transition-all font-mono touch-manipulation`}
                  whileHover={{ scale: 1.05, boxShadow: btn.color === 'red' ? '0 0 10px rgba(248, 113, 113, 0.3)' : '0 0 10px rgba(0, 255, 65, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="md:hidden">{btn.label || btn.cmd}</span>
                  <span className="hidden md:inline">{btn.cmd}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

    {/* What I Build Section */}
    <div className="relative py-20 md:py-32 px-3 md:px-4 bg-black overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="font-mono text-xs md:text-sm text-accent mb-4">// WHAT_I_BUILD</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono mb-6">
            Systems That Actually Work
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-3xl leading-relaxed">
            I don't build everything. I build what companies need most: backend systems that move data, 
            connect platforms, automate operations, and scale without breaking.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Large Feature Card - API Integrations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 glass-card rounded-2xl p-8 md:p-10 border border-accent/20 hover:border-accent/40 transition-all group relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl mb-6 opacity-80">🔗</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-mono">
                <span className="text-accent">01.</span> API Integrations
              </h3>
              <p className="text-secondary text-sm md:text-base mb-6 leading-relaxed">
                Connected Shopify, eBay, Royal Mail, and custom systems. Synced 300k+ products 
                and automated 40+ daily orders with zero manual intervention.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  'Third-party API integrations',
                  'Webhook handling & event processing',
                  'Data synchronization at scale',
                  'Legacy system modernization'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-xs md:text-sm text-muted group-hover:text-secondary transition-colors"
                  >
                    <span className="text-accent">▸</span>
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent/60">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Production Ready
              </div>
            </div>
          </motion.div>

          {/* Automation Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all group"
          >
            <div className="text-5xl mb-4 opacity-80">⚡</div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-mono">
              <span className="text-accent">02.</span> Automation
            </h3>
            <p className="text-secondary text-sm mb-4 leading-relaxed">
              Built workflows that replaced hours of manual work. Background jobs, queue workers, 
              and scheduled tasks that just run.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Workers', 'Cron Jobs', 'Data Processing'].map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* SaaS Tools Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all group"
          >
            <div className="text-5xl mb-4 opacity-80">🛠️</div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-mono">
              <span className="text-accent">03.</span> Internal Tools
            </h3>
            <p className="text-secondary text-sm mb-4 leading-relaxed">
              SaaS-style internal systems for inventory, orders, and operations. 
              Clean interfaces backed by solid APIs.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Dashboards', 'Admin Panels', 'Analytics'].map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {[
            { number: '300K+', label: 'Products Synced' },
            { number: '40+', label: 'Daily Orders Automated' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Uptime Focused' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-subtle rounded-xl p-5 md:p-6 text-center border border-accent/10 hover:border-accent/30 transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2 font-mono">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-10 border border-accent/20"
        >
          <div className="text-center mb-8">
            <div className="font-mono text-xs text-muted mb-3">TECH_STACK</div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground font-mono">
              Built With
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Laravel', icon: '🔧' },
              { name: 'FastAPI', icon: '⚡' },
              { name: 'PostgreSQL', icon: '🗄️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' }
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl glass-subtle border border-accent/10 hover:border-accent/30 transition-all cursor-default"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-xs font-mono text-secondary">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-6 text-sm md:text-base">
            Want to see these systems in action?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-8 py-4 rounded-full border border-accent/30 hover:border-accent hover:glow-border transition-all font-mono text-sm text-accent"
              >
                View Projects →
              </motion.button>
            </Link>
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-subtle px-8 py-4 rounded-full border border-accent/20 hover:border-accent/40 transition-all font-mono text-sm text-secondary hover:text-accent"
              >
                Work Experience
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
