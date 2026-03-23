import { about, skills, services } from '@/lib/data/portfolio-data';
import { FaPython, FaDatabase, FaDocker, FaGitAlt, FaCode } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

export default function About() {
  const skillCategories = [
    { title: 'Backend', icon: <FaPython />, skills: skills.backend },
    { title: 'Integrations', icon: <FaGitAlt />, skills: skills.integrations },
    { title: 'Automation', icon: <FaCode />, skills: skills.automation },
    { title: 'Databases', icon: <FaDatabase />, skills: skills.databases },
    { title: 'DevOps', icon: <FaDocker />, skills: skills.devops },
  ];

  const spotlightVariants = [
    { bg: 'bg-gray-900', tagColor: 'text-gray-500', titleColor: 'text-white', descColor: 'text-gray-400' },
    { bg: 'bg-accent', tagColor: 'text-white/60', titleColor: 'text-white', descColor: 'text-white/80' },
    { bg: 'bg-white border border-gray-200', tagColor: 'text-muted', titleColor: 'text-foreground', descColor: 'text-secondary' },
    { bg: 'bg-orange-50 border border-orange-200', tagColor: 'text-orange-400', titleColor: 'text-gray-900', descColor: 'text-gray-600' },
  ];
  const shuffleOrder = [2, 0, 3, 1, 0, 3, 1, 2];

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-16 md:mb-20">
          <div className="font-mono text-xs md:text-sm text-accent mb-4">// ABOUT_ME</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Who I Am &amp; What I Do
          </h1>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            A Software Engineer who builds complete solutions — from the backend API to the server it runs on.
          </p>
        </div>

        {/* Summary */}
        <section className="mb-20 md:mb-24">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="space-y-5">
              {about.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-secondary text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="mb-20 md:mb-24">
          <div className="mb-10">
            <div className="font-mono text-xs text-accent mb-3">// CORE_STRENGTHS</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What I Do Best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {about.strengths.map((strength, index) => {
              const v = spotlightVariants[shuffleOrder[index % shuffleOrder.length]];
              return (
                <div key={index} className={`${v.bg} rounded-2xl p-6`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-3`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className={`text-sm leading-relaxed ${v.descColor}`}>{strength}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-20 md:mb-24">
          <div className="mb-10">
            <div className="font-mono text-xs text-accent mb-3">// TECHNICAL_STACK</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills &amp; Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-accent text-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-secondary text-sm flex items-center gap-2">
                      <span className="text-accent text-xs">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20 md:mb-24">
          <div className="mb-10">
            <div className="font-mono text-xs text-accent mb-3">// SERVICES</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What I Can Build For You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const order = [3, 0, 2, 1, 2, 0, 3, 1];
              const v = spotlightVariants[order[index % order.length]];
              return (
                <div key={index} className={`${v.bg} rounded-2xl p-6`}>
                  <div className={`text-xs font-bold uppercase tracking-widest ${v.tagColor} mb-4`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`text-base font-bold ${v.titleColor} mb-3 leading-snug`}>{service.title}</h3>
                  <p className={`text-xs leading-relaxed ${v.descColor} mb-4`}>{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.examples.map((example, i) => (
                      <li key={i} className={`text-xs flex items-start gap-1.5 ${v.descColor}`}>
                        <span className={`mt-0.5 shrink-0 ${v.titleColor === 'text-white' ? 'text-white/60' : 'text-accent'}`}>▸</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-20 md:mb-24">
          <div className="mb-10">
            <div className="font-mono text-xs text-accent mb-3">// KEY_ACHIEVEMENTS</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {about.achievements.map((achievement, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gray-900 rounded-2xl p-10 md:p-16" style={{ textAlign: 'center' }}>
            <div className="font-mono text-xs text-accent mb-4">// OPEN_TO_WORK</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed" style={{ maxWidth: '36rem', margin: '0 auto 2rem' }}>
              {about.lookingFor}
            </p>
            <Button href="/contact" variant="primary">Get in Touch</Button>
          </div>
        </section>

      </div>
    </div>
  );
}
