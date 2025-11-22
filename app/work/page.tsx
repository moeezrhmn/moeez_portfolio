'use client';

import { motion } from 'framer-motion';
import { experience, projects } from '@/lib/data/portfolio-data';
import { FaCalendar, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

export default function Work() {
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
            <span className="text-accent">$</span> cat experience.log
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-mono">
            <span className="text-accent">#</span> Work Experience
          </h1>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-accent/20 hidden sm:block"></div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] md:left-[23px] top-8 w-6 h-6 bg-accent rounded-full border-4 border-background hidden sm:block z-10 glow-element"></div>

                  {/* Content card */}
                  <div className="sm:ml-16 md:ml-24 glass-card rounded-2xl p-6 md:p-8 hover:border hover:border-accent/30 hover:glow-border transition-all duration-300 group">
                    <div className="flex flex-col gap-4 mb-4">
                      {/* Company & Title */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-accent font-mono mb-2 group-hover:glow-text-sm transition-all">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-foreground font-semibold">
                          {exp.title}
                        </p>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-secondary font-mono">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-accent" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-secondary mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-secondary text-sm flex items-start gap-3">
                          <span className="text-accent mt-1 font-mono">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="font-mono text-sm text-secondary mb-4">
              <span className="text-accent">$</span> ls projects/ --featured
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <span className="text-accent">##</span> Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 hover:border hover:border-accent/30 hover:glow-border transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-accent text-xs font-mono font-bold">
                    // PROJECT_{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-secondary mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-muted mb-3 font-mono uppercase">Stack:</h4>
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
                <div className="flex items-start gap-2 text-sm pt-4 border-t border-accent/10">
                  <FaCode className="text-accent mt-1 shrink-0" />
                  <p className="text-muted font-mono text-xs">
                    <span className="font-semibold text-accent">IMPACT:</span> {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all projects link */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-accent hover:glow-text-sm transition-all font-mono text-sm group"
            >
              <span>View all projects</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="glass-card border-2 border-accent/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="font-mono text-sm text-accent mb-4">// COLLABORATION</div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-mono">
                Let's Build Together
              </h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <motion.a
                href="/contact"
                className="inline-block bg-accent/10 hover:bg-accent/20 text-foreground px-8 py-4 rounded-full font-semibold border-2 border-accent/30 hover:border-accent hover:glow-element transition-all duration-300 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                $ contact --message
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
