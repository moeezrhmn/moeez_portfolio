'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '@/lib/data/portfolio-data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form data:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaPhone />,
      label: 'phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'location',
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: personalInfo.github,
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
    },
  ];

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
          className="mb-12 text-center"
        >
          <div className="font-mono text-sm text-secondary mb-4">
            <span className="text-accent">$</span> contact --init
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-mono mb-4">
            <span className="text-accent">#</span> Let's Connect
          </h1>
          <p className="text-secondary max-w-2xl mx-auto font-mono text-sm">
            // Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Details */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-accent mb-6 font-mono">// Contact Info</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <div className="text-xl text-accent mt-1 group-hover:glow-text-sm transition-all">{info.icon}</div>
                    <div className="flex-1">
                      <p className="text-xs text-muted mb-1 font-mono uppercase">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-secondary hover:text-accent transition-colors text-sm break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary text-sm">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-accent mb-6 font-mono">// Social</h2>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-subtle rounded-lg flex items-center justify-center text-xl text-secondary hover:text-accent hover:glow-text-sm transition-all duration-300 border border-accent/10 hover:border-accent/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick response note */}
            <motion.div
              variants={itemVariants}
              className="glass-subtle rounded-xl p-6 border border-accent/10"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-xs text-accent font-mono mb-1">// STATUS</p>
                  <p className="text-sm text-secondary">Usually responds within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-xl font-bold text-accent mb-8 font-mono">// Send Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-xs font-medium text-muted mb-2 font-mono uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:glow-border transition-all font-mono text-sm"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-xs font-medium text-muted mb-2 font-mono uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:glow-border transition-all font-mono text-sm"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-xs font-medium text-muted mb-2 font-mono uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:glow-border transition-all font-mono text-sm"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-xs font-medium text-muted mb-2 font-mono uppercase">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:glow-border transition-all resize-none font-mono text-sm"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-4 bg-accent/10 border-2 border-accent/30 text-foreground rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 font-mono ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/20 hover:border-accent hover:glow-element'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        $ sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <span>✓</span>
                        $ message sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        $ send --message
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 glass-subtle rounded-lg p-4 border border-accent/20"
                    >
                      <p className="text-accent text-sm font-mono">
                        ✓ Thank you! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
