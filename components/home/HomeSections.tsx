import { services, whyWorkWithMe, results, cta, publicTools } from '@/lib/data/portfolio-data';
import { Button } from '@/components/ui/Button';

export default function HomeSections() {
  return (
    <>
      {/* What I Do Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-16 md:mb-20" style={{ textAlign: 'center' }}
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// WHAT_I_DO</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Services That Solve Real Problems
            </h2>
            <p className="text-secondary text-base md:text-lg mx-auto leading-relaxed" style={{ textAlign: 'center' }}>
              I specialize in building systems that save time, eliminate manual work, and connect your business tools together.
            </p>
          </div>

          {/* Style 5 — Feature Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const variants = [
                { bg: 'bg-gray-900', tagColor: 'text-gray-500', titleColor: 'text-white', descColor: 'text-gray-400', numColor: 'text-accent' },
                { bg: 'bg-accent', tagColor: 'text-white/60', titleColor: 'text-white', descColor: 'text-white/80', numColor: 'text-white' },
                { bg: 'bg-white border border-gray-200', tagColor: 'text-muted', titleColor: 'text-foreground', descColor: 'text-secondary', numColor: 'text-accent' },
                { bg: 'bg-orange-50 border border-orange-200', tagColor: 'text-orange-400', titleColor: 'text-gray-900', descColor: 'text-gray-600', numColor: 'text-accent' },
              ];
              const order = [2, 0, 3, 1, 3, 0, 1, 2];
              const v = variants[order[index % order.length]];
              return (
                <div key={index} className={`relative ${v.bg} rounded-2xl p-6 overflow-hidden`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-4`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`text-base font-bold ${v.titleColor} mb-3 leading-snug`}>{service.title}</h3>
                  <p className={`text-xs leading-relaxed ${v.descColor}`}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-16" style={{ textAlign: 'center' }}
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// PROVEN_RESULTS</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real Impact, Real Numbers
            </h2>
          </div>

          {/* Style 5 — Feature Spotlight mixed cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, idx) => {
              const variants = [
                { bg: 'bg-gray-900', text: 'text-white', tagColor: 'text-gray-400', metricColor: 'text-accent', descColor: 'text-gray-400' },
                { bg: 'bg-accent', text: 'text-white', tagColor: 'text-white/70', metricColor: 'text-white', descColor: 'text-white/80' },
                { bg: 'bg-white border border-gray-200', text: 'text-foreground', tagColor: 'text-muted', metricColor: 'text-accent', descColor: 'text-secondary' },
                { bg: 'bg-orange-50 border border-orange-200', text: 'text-foreground', tagColor: 'text-orange-400', metricColor: 'text-accent', descColor: 'text-secondary' },
              ];
              const order = [3, 0, 1, 2, 0, 3, 2, 1];
              const v = variants[order[idx % order.length]];
              return (
                <div key={idx} className={`relative ${v.bg} rounded-2xl p-7 overflow-hidden`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-3`}>Proven Result</div>
                  <div className={`text-2xl md:text-3xl font-black ${v.metricColor} mb-3 leading-tight font-mono`}>{result.metric}</div>
                  <p className={`text-xs leading-relaxed ${v.descColor}`}>{result.impact}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-16 md:mb-20" style={{ textAlign: 'center' }}
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// CASE_STUDIES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Problems Solved, Systems Built
            </h2>
            <p className="text-secondary text-base md:text-lg mx-auto leading-relaxed text-center">
              Real projects, real challenges — here&apos;s how I approached them.
            </p>
          </div>

          {/* Style 1 — Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Case Study 1 — E-commerce Automation — spans 2 cols */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 md:p-10 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-bold bg-orange-100 text-accent border border-orange-200 rounded-full">
                  E-commerce &amp; Automation
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">@ Maxenius Solutions</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Multi-Channel Inventory Sync &amp; Order Automation
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// THE PROBLEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A UK-based e-commerce business was manually updating 300,000+ product listings across Shopify and eBay and hand-processing 40+ orders daily — taking hours every day with constant human error.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// WHAT I BUILT</div>
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

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {['Laravel', 'PHP', 'Shopify API', 'eBay API', 'Queue Workers', 'MySQL', 'Royal Mail API'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-100 text-muted border border-gray-200 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study 2 — GPU Investor Portal — 1 col */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-bold bg-orange-100 text-accent border border-orange-200 rounded-full">
                  FinTech &amp; Infrastructure
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">@ Codiux</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                GPU Investor Portal with Real-Time Analytics
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// THE PROBLEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A GPU infrastructure company had no centralized system to manage investor accounts, track GPU resource allocation, or generate financial reports — everything was being handled through spreadsheets and manual emails.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// WHAT I BUILT</div>
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

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {['Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Real-time Analytics'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-100 text-muted border border-gray-200 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study 3 — AI Sales Caller — 1 col */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-bold bg-orange-100 text-accent border border-orange-200 rounded-full">
                  AI &amp; Automation
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">@ Codiux</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                AI Sales Calling Platform — Backend Services
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// THE SYSTEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A large-scale AI-powered sales calling platform handling automated outbound calls, lead management, and compliance — built across multiple microservices in Node.js.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// MY CONTRIBUTION</div>
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

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {['Node.js', 'Microservices', 'Twilio', 'PostgreSQL', 'Lead Management', 'Multi-tenant'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-100 text-muted border border-gray-200 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study 4 — Hagoods Freight System — spans 2 cols */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 md:p-10 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-bold bg-orange-100 text-accent border border-orange-200 rounded-full">
                  Logistics &amp; Transport
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted font-mono">Confidential Client</div>
                  <div className="text-xs text-accent/60 font-mono">Freelance Project</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Freight &amp; Bilty Management System
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// THE PROBLEM</div>
                  <p className="text-secondary text-sm leading-relaxed">
                    A transport business was managing hundreds of freight contracts (bilties) manually — tracking payments from customers, costs to drivers, and company settlements using paper records with no visibility into profits or outstanding balances.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">// WHAT I BUILT</div>
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

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {['Laravel 11', 'Vue 3', 'PHP', 'MySQL', 'DomPDF', 'Laravel Sanctum'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-100 text-muted border border-gray-200 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat tile — 1 col */}
            <div className="bg-accent rounded-2xl p-7 flex flex-col justify-center">
              <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">Freelance</div>
              <div className="text-white text-4xl font-black mb-2">Full Stack</div>
              <p className="text-white/80 text-sm">Built end-to-end — backend, frontend, and PDF reporting</p>
            </div>

          </div>
        </div>
      </div>

      {/* Why Work With Me Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-16" style={{ textAlign: 'center' }}
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// WHY_WORK_WITH_ME</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Outcomes That Matter
            </h2>
          </div>

          {/* Style 5 — Feature Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyWorkWithMe.map((item, idx) => {
              const variants = [
                { bg: 'bg-gray-900', tagColor: 'text-gray-500', titleColor: 'text-white', descColor: 'text-gray-400', numColor: 'text-accent' },
                { bg: 'bg-accent', tagColor: 'text-white/60', titleColor: 'text-white', descColor: 'text-white/80', numColor: 'text-white' },
                { bg: 'bg-white border border-gray-200', tagColor: 'text-muted', titleColor: 'text-foreground', descColor: 'text-secondary', numColor: 'text-accent' },
                { bg: 'bg-orange-50 border border-orange-200', tagColor: 'text-orange-400', titleColor: 'text-gray-900', descColor: 'text-gray-600', numColor: 'text-accent' },
              ];
              const order = [1, 3, 0, 2, 0, 3, 1, 2];
              const v = variants[order[idx % order.length]];
              return (
                <div key={idx} className={`relative ${v.bg} rounded-2xl p-6 overflow-hidden`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-4`}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`text-base font-bold ${v.titleColor} mb-3 leading-snug`}>{item.outcome}</h3>
                  <p className={`text-xs leading-relaxed ${v.descColor}`}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* Public Tools Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-gray-50 border-t border-accent/10">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-16" style={{ textAlign: 'center' }}
          >
            <div className="font-mono text-xs md:text-sm text-accent mb-4">// PUBLIC_TOOLS</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Free Tools &amp; Services
            </h2>
            <p className="text-secondary text-base md:text-lg mx-auto text-center">
              Check out the public tools I&apos;ve built and shared for everyone to use — completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {publicTools.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-8 border border-accent/20 hover:border-accent/60 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500" />

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
                      <span key={techIdx} className="px-2 py-1 text-xs font-mono bg-gray-100 text-muted border border-gray-200 rounded">
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
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto" style={{ textAlign: 'center' }}>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{cta.heading}</h2>
            <p className="text-secondary text-base md:text-lg mb-10" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>{cta.subheading}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-8">
              <Button href="/contact" variant="primary">{cta.primaryCTA.text}</Button>
              <Button href={`mailto:${cta.secondaryCTA.email}`} variant="secondary" external>{cta.secondaryCTA.text}</Button>
            </div>

            <p className="text-muted text-sm" style={{ textAlign: 'center' }}>{cta.availability}</p>
          </div>
        </div>
      </div>
    </>
  );
}
