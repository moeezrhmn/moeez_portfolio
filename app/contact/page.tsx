'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCalendarAlt } from 'react-icons/fa';
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-foreground placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all';

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-14" style={{ textAlign: 'center' }}>
          <div className="font-mono text-xs md:text-sm text-accent mb-4">// CONTACT</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-secondary text-lg max-w-xl leading-relaxed" style={{ margin: '0 auto' }}>
            Have a project in mind? Let&apos;s talk about how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left column — info */}
          <div className="space-y-5">

            {/* Contact details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Contact Info</h2>
              <div className="space-y-5">
                {[
                  { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: null },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-accent shrink-0 text-sm">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-secondary hover:text-accent transition-colors break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-secondary">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a Call */}
            <a
              href="https://cal.com/moeezrhmn"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 rounded-2xl p-7 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Book a Call</h2>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Prefer to talk? Schedule a free 30-minute call — pick a time that works for you.
              </p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl shadow-[0_2px_10px_rgba(234,88,12,0.3)] group-hover:bg-orange-600 transition-all">
                <FaCalendarAlt className="text-xs" />
                Schedule on cal.com
              </span>
            </a>

            {/* Social */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">Find Me Online</h2>
              <div className="flex gap-3">
                {[
                  { icon: <FaGithub />, label: 'GitHub', href: personalInfo.github },
                  { icon: <FaLinkedin />, label: 'LinkedIn', href: personalInfo.linkedin },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all text-base"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-accent mb-1">Available for Projects</p>
                  <p className="text-xs text-secondary leading-relaxed">Usually responds within 24 hours.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right column — form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-lg font-bold text-foreground mb-8">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl text-sm transition-all duration-200 active:scale-95 ${
                      isSubmitting || submitStatus === 'success'
                        ? 'bg-gray-100 text-muted cursor-not-allowed'
                        : 'bg-accent text-white shadow-[0_2px_12px_rgba(234,88,12,0.35)] hover:bg-orange-600 hover:shadow-[0_4px_20px_rgba(234,88,12,0.5)]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <span>✓</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-700 text-sm font-medium">
                        Message sent! I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-red-600 text-sm font-medium">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
