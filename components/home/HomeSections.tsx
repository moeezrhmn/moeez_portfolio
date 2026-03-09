'use client';

import { motion } from 'framer-motion';
import { services, whyWorkWithMe, results, cta, publicTools, testimonials } from '@/lib/data/portfolio-data';
import Link from 'next/link';

export default function HomeSections() {
  return (
    <>
      {/* What I Do Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-secondary text-base md:text-lg mx-auto leading-relaxed" style={{ textAlign: 'center' }}>
              I specialize in building systems that save time, eliminate manual work, and connect your business tools together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative glass-card rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300" />
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/0 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
                    >
                      <span className="text-accent text-sm font-mono font-bold">0{index + 1}</span>
                    </motion.div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300 delay-75" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300 delay-150" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-secondary mb-4 text-sm leading-relaxed">{service.description}</p>

                  <div className="mb-4 p-3 rounded-lg bg-black/30 border border-accent/10 group-hover:border-accent/30 transition-colors duration-300">
                    <p className="text-muted text-xs italic flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">⚡</span>
                      <span>{service.technicalDetail}</span>
                    </p>
                  </div>

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
                <div className="text-2xl md:text-3xl font-bold text-accent mb-4 font-mono">{result.metric}</div>
                <p className="text-secondary mb-4 text-sm leading-relaxed">{result.description}</p>
                <div className="text-xs text-muted border-l-2 border-accent/30 pl-3 italic">{result.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// CASE_STUDIES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Problems Solved, Systems Built
            </h2>
            <p className="text-secondary text-base md:text-lg mx-auto leading-relaxed">
              Real projects, real challenges — here&apos;s how I approached them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Case Study 1 — E-commerce Automation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-accent/20 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                  E-commerce & Automation
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">@ Maxenius Solutions</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                Multi-Channel Inventory Sync & Order Automation
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// THE PROBLEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A UK-based e-commerce business was manually updating 300,000+ product listings across Shopify and eBay and hand-processing 40+ orders daily — taking hours every day with constant human error.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// WHAT I BUILT</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A Laravel-based sync engine using Shopify and eBay APIs with queue workers for real-time inventory updates, plus an automated order pipeline integrated with UK Royal Mail for instant shipping label generation.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  '300,000+ products synced automatically across platforms',
                  '40+ daily orders processed with zero manual work',
                  '80% reduction in manual updates — hours saved every day',
                ].map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
                {['Laravel', 'PHP', 'Shopify API', 'eBay API', 'Queue Workers', 'MySQL', 'Royal Mail API'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-black/50 text-muted border border-accent/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Case Study 2 — GPU Investor Portal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-accent/20 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                  FinTech & Infrastructure
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">@ Codiux</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                GPU Investor Portal with Real-Time Analytics
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// THE PROBLEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A GPU infrastructure company had no centralized system to manage investor accounts, track GPU resource allocation, or generate financial reports — everything was being handled through spreadsheets and manual emails.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// WHAT I BUILT</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A full-stack investor portal with secure authentication, real-time analytics dashboards, GPU resource tracking, and financial reporting — built to handle multiple concurrent investors at scale.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Real-time dashboards for investor tracking and resource analytics',
                  'Secure multi-user portal replacing manual spreadsheet workflows',
                  'Scalable architecture built for financial operations at scale',
                ].map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
                {['Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Real-time Analytics'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-black/50 text-muted border border-accent/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Case Study 3 — AI Sales Caller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-accent/20 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                  AI & Automation
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">@ Codiux</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                AI Sales Calling Platform — Backend Services
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// THE SYSTEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A large-scale AI-powered sales calling platform handling automated outbound calls, lead management, and compliance — built across multiple microservices in Node.js.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// MY CONTRIBUTION</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    Developed core backend services within the platform — including DNC (Do Not Call) compliance, tenant management, and lead intake — ensuring reliable data flow across the system.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'DNC service — enforcing do-not-call compliance across all outbound calls',
                  'Tenant service — multi-tenant architecture for isolated client accounts',
                  'Lead receive service — ingesting and routing incoming leads to the right queues',
                ].map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
                {['Node.js', 'Microservices', 'Twilio', 'PostgreSQL', 'Lead Management', 'Multi-tenant'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-black/50 text-muted border border-accent/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Case Study 4 — Hagoods Freight System */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-accent/20 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                  Logistics & Transport
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">Freelance Project</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                Freight & Bilty Management System
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// THE PROBLEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A transport business was managing hundreds of freight contracts (bilties) manually — tracking payments from customers, costs to drivers, and company settlements using paper records with no visibility into profits or outstanding balances.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent mb-1">// WHAT I BUILT</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A full-stack freight management system with complete bilty lifecycle tracking, multi-party financial transactions (sale, purchase, expense, credit), ledger batch processing for company settlements, and PDF financial reports with profit analysis.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Bilty tracking from booking to delivery with proof-of-delivery image attachments',
                  'Ledger system for batch company settlements — replacing manual reconciliation',
                  'Real-time dashboard with profit analysis, pending payments, and delay tracking',
                ].map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
                {['Laravel 11', 'Vue 3', 'PHP', 'MySQL', 'DomPDF', 'Laravel Sanctum'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-black/50 text-muted border border-accent/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

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
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 255, 65, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// CLIENT_FEEDBACK</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Clients Say
            </h2>
            <p className="text-secondary text-base md:text-lg mx-auto">
              Real feedback from businesses I&apos;ve helped automate and scale their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6 md:p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6 text-6xl text-accent/10 font-serif group-hover:text-accent/20 transition-colors duration-300">&quot;</div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.1 }}
                        className="text-accent text-lg"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center gap-4 border-t border-accent/10 pt-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:border-accent/60 transition-colors duration-300">
                      <span className="text-accent font-bold text-sm">
                        {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-foreground font-bold text-sm md:text-base truncate">{testimonial.name}</h4>
                      <p className="text-muted text-xs md:text-sm truncate">{testimonial.role}</p>
                      <p className="text-accent/70 text-xs font-mono truncate">{testimonial.company}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-secondary text-sm mb-4">Want to share your experience working with me?</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-subtle border border-accent/30 rounded-lg font-mono text-accent text-sm hover:border-accent hover:glow-border transition-all"
              >
                Get in Touch →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Public Tools Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-black border-t border-accent/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// PUBLIC_TOOLS</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Free Tools & Services
            </h2>
            <p className="text-secondary text-base md:text-lg mx-auto">
              Check out the public tools I&apos;ve built and shared for everyone to use — completely free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {publicTools.map((tool, idx) => (
              <motion.a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-xl p-8 border border-accent/20 hover:border-accent/60 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{tool.icon}</div>
                    <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-secondary text-sm mb-4 leading-relaxed">{tool.description}</p>

                  <ul className="space-y-2 mb-4">
                    {tool.features.slice(0, 3).map((feature: string, featureIdx: number) => (
                      <li key={featureIdx} className="text-muted text-xs flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.technologies.map((tech: string, techIdx: number) => (
                      <span key={techIdx} className="px-2 py-1 text-xs font-mono bg-black/50 text-muted border border-accent/10 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-accent text-sm font-mono group-hover:gap-3 transition-all">
                    <span>Try it now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/40 transition-colors duration-300" />
              </motion.a>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{cta.heading}</h2>
            <p className="text-secondary text-base md:text-lg mb-10 mx-auto">{cta.subheading}</p>

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
