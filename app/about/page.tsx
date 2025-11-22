
import { motion } from 'framer-motion';
import { about, skills, services } from '@/lib/data/portfolio-data';
import { FaPython, FaPhp, FaDatabase, FaDocker, FaGitAlt, FaCode } from 'react-icons/fa';

export const metadata = {
  title: "About Me - Backend Engineer | Python & Laravel Specialist",
  description: "Learn about my journey as a Backend Engineer. Expert in Python, Laravel, API Development, E-commerce Integrations, and building scalable SaaS systems. 5+ years of experience delivering solutions that process 300k+ products.",
  openGraph: {
    title: "About Moeez Rehman - Backend Engineer",
    description: "Backend Engineer specializing in Python, Laravel, and scalable backend systems",
  },
};

export default function About() {
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

  const skillCategories = [
    {
      title: "backend",
      icon: <FaPython />,
      skills: skills.backend,
      color: "accent"
    },
    {
      title: "integrations",
      icon: <FaGitAlt />,
      skills: skills.integrations,
      color: "accent"
    },
    {
      title: "automation",
      icon: <FaCode />,
      skills: skills.automation,
      color: "accent"
    },
    {
      title: "databases",
      icon: <FaDatabase />,
      skills: skills.databases,
      color: "accent"
    },
    {
      title: "devops",
      icon: <FaDocker />,
      skills: skills.devops,
      color: "accent"
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="font-mono text-sm text-secondary mb-4">
            <span className="text-accent">$</span> cat about.md
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono leading-tight">
            <span className="text-accent">#</span> About Me
          </h1>
        </motion.div>

        {/* Summary Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20 md:mb-24"
        >
          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-5 md:space-y-6">
              {about.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-secondary text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* What I Do Best */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 md:mb-24"
        >
          <motion.h2 variants={itemVariants} className=" text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 font-mono">
            <span className="text-accent">##</span> Core Strengths
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {about.strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-subtle rounded-xl p-5 md:p-6 hover:glass-card hover:border hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-accent text-xl font-mono font-bold group-hover:glow-text-sm">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <p className="text-secondary flex-1 leading-relaxed">{strength}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 md:mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 font-mono">
            <span className="text-accent">##</span> Technical Stack
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-5 md:p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl text-accent group-hover:glow-text-sm transition-all">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-accent font-mono">/{category.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-secondary text-sm flex items-center gap-2 font-mono">
                      <span className="text-accent">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 md:mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 font-mono">
            <span className="text-accent">##</span> Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 md:p-8 hover:border-accent/30 hover:glow-border transition-all duration-300 group"
              >
                <div className="mb-3">
                  <span className="text-accent text-xs font-mono font-bold">
                    // SERVICE_{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary mb-5 md:mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-muted text-xs flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 md:mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 font-mono">
            <span className="text-accent">##</span> Key Achievements
          </motion.h2>
          <div className="space-y-4 md:space-y-5">
            {about.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-subtle rounded-xl p-5 md:p-6 hover:glass-card hover:border hover:border-accent/20 transition-all duration-300 flex items-start gap-3 md:gap-4 group"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:glow-element"></div>
                <p className="text-secondary flex-1 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Looking For - CTA */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="glass-card border-2 border-accent/30 rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="font-mono text-xs md:text-sm text-accent mb-4 md:mb-5">// OPEN_TO_OPPORTUNITIES</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 font-mono leading-tight">
                Let's Build Something Great
              </h2>
              <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
                {about.lookingFor}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contact"
                  className="inline-block bg-accent/10 hover:bg-accent/20 text-foreground px-8 py-4 rounded-full font-semibold border-2 border-accent/30 hover:border-accent hover:glow-element transition-all duration-300 font-mono"
                >
                  $ contact --now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
