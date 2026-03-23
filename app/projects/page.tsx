import { projects } from '@/lib/data/portfolio-data';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

export default function Projects() {
  const spotlightVariants = [
    { bg: 'bg-gray-900', tagColor: 'text-gray-500', titleColor: 'text-white', descColor: 'text-gray-400', techBg: 'bg-gray-800 text-gray-300 border-gray-700', impactColor: 'text-gray-300', bulletColor: 'text-accent' },
    { bg: 'bg-accent', tagColor: 'text-white/60', titleColor: 'text-white', descColor: 'text-white/80', techBg: 'bg-white/20 text-white border-white/20', impactColor: 'text-white/80', bulletColor: 'text-white' },
    { bg: 'bg-white border border-gray-200', tagColor: 'text-muted', titleColor: 'text-foreground', descColor: 'text-secondary', techBg: 'bg-gray-100 text-muted border-gray-200', impactColor: 'text-secondary', bulletColor: 'text-accent' },
    { bg: 'bg-orange-50 border border-orange-200', tagColor: 'text-orange-400', titleColor: 'text-gray-900', descColor: 'text-gray-600', techBg: 'bg-orange-100 text-orange-700 border-orange-200', impactColor: 'text-gray-600', bulletColor: 'text-accent' },
  ];
  const order = [2, 0, 3, 1, 3, 0, 2, 1];

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-16 md:mb-20">
          <div className="font-mono text-xs md:text-sm text-accent mb-4">// ALL_PROJECTS</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Projects
          </h1>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            A collection of systems, tools, and products I&apos;ve built.
          </p>
        </div>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              const v = spotlightVariants[order[index % order.length]];
              return (
                <div key={index} className={`${v.bg} rounded-2xl p-6 md:p-8`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-4`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`text-lg font-bold ${v.titleColor} mb-3 leading-snug`}>{project.title}</h3>
                  <p className={`text-sm leading-relaxed ${v.descColor} mb-5`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 py-1 text-xs font-mono border rounded ${v.techBg}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`text-xs leading-relaxed pt-4 border-t ${v.titleColor === 'text-white' ? 'border-white/10' : 'border-gray-100'} ${v.impactColor}`}>
                    <span className={`font-bold ${v.bulletColor}`}>Impact: </span>{project.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gray-900 rounded-2xl p-10 md:p-16" style={{ textAlign: 'center' }}>
            <div className="font-mono text-xs text-accent mb-4">// MORE_WORK</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to See More?
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed" style={{ maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Check out my GitHub for more projects and open-source work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="https://github.com/moeezrhmn" variant="primary" external>
                <FaGithub />
                GitHub Profile
              </Button>
              <Button href="/contact" variant="dark-outline">Work Together</Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
