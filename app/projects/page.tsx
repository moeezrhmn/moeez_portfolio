'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data/portfolio-data';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-secondary mb-4">
            <span className="text-accent">$</span> ls -la projects/
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-mono">
            <span className="text-accent">#</span> Projects
          </h1>
          <p className="text-secondary mt-4 font-mono text-sm">
            // A collection of noteworthy projects I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 hover:border hover:border-accent/30 hover:glow-border transition-all duration-300 group"
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-accent text-xs font-mono font-bold">
                    // PROJECT_{String(index + 1).padStart(2, '0')}
                  </div>
                  <FaCode className="text-2xl text-accent group-hover:glow-text-sm transition-all" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-secondary mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-muted mb-3 font-mono uppercase">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent hover:bg-accent/20 transition-colors font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-accent/10">
                  <div className="flex items-start gap-2">
                    <FaExternalLinkAlt className="text-accent mt-1 shrink-0 text-xs" />
                    <p className="text-muted font-mono text-xs">
                      <span className="font-semibold text-accent">IMPACT:</span> {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="glass-card border-2 border-accent/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="font-mono text-sm text-accent mb-4">// MORE_PROJECTS</div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-mono">
                Want to See More?
              </h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Check out my GitHub for more projects and open-source contributions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="https://github.com/moeezrhmn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-foreground px-8 py-4 rounded-full font-semibold border-2 border-accent/30 hover:border-accent hover:glow-element transition-all duration-300 font-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  $ view --github
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 glass-subtle hover:glass-card text-foreground px-8 py-4 rounded-full font-semibold border border-accent/20 hover:border-accent/30 transition-all duration-300 font-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  $ contact --collaborate
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
