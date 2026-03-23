import { experience, projects } from '@/lib/data/portfolio-data';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

export default function Work() {
  const spotlightVariants = [
    { bg: 'bg-gray-900', tagColor: 'text-gray-500', titleColor: 'text-white', descColor: 'text-gray-400', techBg: 'bg-gray-800 text-gray-300 border-gray-700', bulletColor: 'text-accent' },
    { bg: 'bg-accent', tagColor: 'text-white/60', titleColor: 'text-white', descColor: 'text-white/80', techBg: 'bg-white/20 text-white border-white/20', bulletColor: 'text-white' },
    { bg: 'bg-white border border-gray-200', tagColor: 'text-muted', titleColor: 'text-foreground', descColor: 'text-secondary', techBg: 'bg-gray-100 text-muted border-gray-200', bulletColor: 'text-accent' },
    { bg: 'bg-orange-50 border border-orange-200', tagColor: 'text-orange-400', titleColor: 'text-gray-900', descColor: 'text-gray-600', techBg: 'bg-orange-100 text-orange-700 border-orange-200', bulletColor: 'text-accent' },
  ];
  const projOrder = [2, 0, 3, 1, 0, 3];

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-16 md:mb-20">
          <div className="font-mono text-xs md:text-sm text-accent mb-4">// WORK_EXPERIENCE</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Experience &amp; Projects
          </h1>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            Where I&apos;ve worked, what I&apos;ve built, and the impact it made.
          </p>
        </div>

        {/* Experience Timeline */}
        <section className="mb-20 md:mb-24">
          <div className="mb-10">
            <div className="font-mono text-xs text-accent mb-3">// EMPLOYMENT</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Work History</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative sm:pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-[9px] md:left-[13px] top-8 w-4 h-4 bg-accent rounded-full border-4 border-white hidden sm:block z-10 shadow-sm" />

                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <div className="text-accent font-semibold text-sm">{exp.company}</div>
                      </div>
                      <div className="flex flex-col gap-1 text-xs text-muted shrink-0">
                        <div className="flex items-center gap-1.5">
                          <FaCalendar className="text-accent" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-secondary text-sm flex items-start gap-2">
                          <span className="text-accent mt-1 shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20 md:mb-24">
          <div className="mb-10">
            <div className="font-mono text-xs text-accent mb-3">// FEATURED_PROJECTS</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Selected Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              const v = spotlightVariants[projOrder[index % projOrder.length]];
              return (
                <div key={index} className={`${v.bg} rounded-2xl p-6 md:p-8`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-4`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`text-lg font-bold ${v.titleColor} mb-3 leading-snug`}>{project.title}</h3>
                  <p className={`text-sm leading-relaxed ${v.descColor} mb-5`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 py-1 text-xs font-mono border rounded ${v.techBg}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`text-xs leading-relaxed pt-4 border-t ${v.titleColor === 'text-white' ? 'border-white/10' : 'border-gray-100'} ${v.descColor}`}>
                    <span className={`font-bold ${v.bulletColor}`}>Impact: </span>{project.impact}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button href="/projects" variant="ghost">View all projects →</Button>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gray-900 rounded-2xl p-10 md:p-16" style={{ textAlign: 'center' }}>
            <div className="font-mono text-xs text-accent mb-4">// COLLABORATION</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let&apos;s Build Together
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed" style={{ maxWidth: '36rem', margin: '0 auto 2rem' }}>
              I&apos;m open to discussing new projects, freelance work, or full-time roles where I can build systems that matter.
            </p>
            <Button href="/contact" variant="primary">Get in Touch</Button>
          </div>
        </section>

      </div>
    </div>
  );
}
