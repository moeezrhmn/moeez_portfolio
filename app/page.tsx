import { personalInfo, cta } from '@/lib/data/portfolio-data';
import { siteConfig } from '@/lib/config';
import Script from 'next/script';
import Link from 'next/link';
import HomeSections from '@/components/home/HomeSections';
import { Terminal, BackgroundEffects } from '@/components/home/HeroClient';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Moeez Rehman',
  jobTitle: 'Software Engineer | Backend & Infrastructure',
  description: 'Software Engineer specializing in Backend, Infrastructure, APIs, Automation, VPS & Cloud Deployments using Python, Laravel, and React/Next.js',
  url: siteConfig.url,
  email: 'contact@moeezrehman.quanter.dev',
  telephone: '+92-322-6622545',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore/Faisalabad',
    addressCountry: 'Pakistan',
  },
  sameAs: ['https://github.com/moeezrhmn', 'https://linkedin.com/in/moeezrhmn'],
  knowsAbout: ['Python', 'Laravel', 'FastAPI', 'API Development', 'Backend Engineering', 'E-commerce Integration', 'SaaS Development', 'Database Design', 'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'React', 'Next.js', 'JavaScript'],
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero / Banner Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Static background — server-rendered, visible immediately */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Decorative effects — lazy loaded, non-blocking */}
        <BackgroundEffects />

        {/* Main content — server-rendered HTML, paints immediately */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-20">

            {/* Left side — static hero content */}
            <div className="lg:col-span-7 text-center lg:text-left order-1">

              {/* Available badge — CSS animate-ping works without JS */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle border border-accent/20 mb-6 mt-8 md:mt-0 hero-fade-in"
                style={{ animationDelay: '0.05s' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs md:text-sm text-accent font-mono">Available To Discuss Projects</span>
              </div>

              {/* LCP element — server-rendered, no JS needed */}
              <h1
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight hero-slide-up"
                style={{ animationDelay: '0.15s' }}
              >
                I Build Backend Systems{' '}
                <span className="text-accent glow-text">That Run Your Business</span>{' '}
                on Autopilot
              </h1>

              <p
                className="text-base md:text-lg lg:text-xl text-secondary mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0 hero-slide-up"
                style={{ animationDelay: '0.25s' }}
              >
                {personalInfo.valueProposition}
              </p>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-4 md:gap-6 mb-8 justify-center lg:justify-start hero-fade-in"
                style={{ animationDelay: '0.35s' }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-xl md:text-2xl font-bold text-accent font-mono">5+ Years</div>
                  <div className="text-xs text-muted">Experience</div>
                </div>
              </div>

              {/* CTA buttons — CSS hover, no JS required for basic interaction */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-fade-in"
                style={{ animationDelay: '0.45s' }}
              >
                <Link href="/contact">
                  <button className="px-8 py-4 bg-accent text-black rounded-lg font-bold hover:glow-border hover:scale-105 active:scale-95 transition-all duration-200 text-sm md:text-base">
                    {cta.primaryCTA.text}
                  </button>
                </Link>
                <Link href="/work">
                  <button className="px-8 py-4 glass-card border border-accent/30 rounded-lg font-mono hover:border-accent hover:glow-border hover:scale-105 active:scale-95 transition-all duration-200 text-accent text-sm md:text-base">
                    View My Work →
                  </button>
                </Link>
              </div>

              {/* Social links */}
              <div
                className="flex flex-wrap gap-4 mt-8 text-sm text-muted justify-center lg:justify-start items-center hero-fade-in"
                style={{ animationDelay: '0.55s' }}
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
                <span className="text-accent/30">|</span>
                <a
                  href="/Moeez-Rehman-Resume.pdf"
                  download="Moeez-Rehman-Resume.pdf"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-md hover:bg-accent/20 hover:border-accent transition-all text-accent font-mono text-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>

            {/* Right side — Terminal (lazy loaded, non-blocking) */}
            <div className="lg:col-span-5 order-2">
              <Terminal />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex flex-col items-center gap-2 text-muted animate-bounce">
            <span className="text-xs font-mono">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Below-fold sections */}
      <HomeSections />
    </>
  );
}
