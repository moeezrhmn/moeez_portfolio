'use client';

import { motion } from 'framer-motion';
import { FaRss, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-12 md:p-16"
        >
          <FaRss className="text-6xl text-accent mx-auto mb-6 glow-text" />

          <div className="font-mono text-sm text-secondary mb-4">
            <span className="text-accent">$</span> cat blog/status.log
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-mono mb-6">
            <span className="text-accent">#</span> Blog
          </h1>

          <p className="text-secondary text-lg mb-8 font-mono">
            // Under construction...
          </p>

          <div className="glass-subtle rounded-xl p-6 mb-8 border border-accent/10">
            <p className="text-muted text-sm font-mono">
              <span className="text-accent">STATUS:</span> Currently setting up the blog infrastructure.
              Check back soon for articles on backend development, API design, and automation workflows.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-foreground px-8 py-4 rounded-full font-semibold border-2 border-accent/30 hover:border-accent hover:glow-element transition-all duration-300 font-mono"
          >
            <FaArrowLeft />
            $ cd ~/
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
