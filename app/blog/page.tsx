import { FaRss } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-24 pb-24">
      <div className="max-w-xl w-full text-center">

        <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto mb-6">
          <FaRss className="text-accent text-2xl" />
        </div>

        <div className="font-mono text-xs text-accent mb-3">// BLOG</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Coming Soon
        </h1>
        <p className="text-secondary text-base leading-relaxed mb-8">
          I&apos;m setting up the blog. Soon I&apos;ll be writing about backend development, API design, automation workflows, and building systems that scale.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-8 text-left">
          <div className="flex items-start gap-3">
            <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <p className="text-sm text-secondary leading-relaxed">
              Currently setting up the blog infrastructure. Articles on backend engineering, API design, and automation workflows coming soon.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">Back to Home</Button>
          <Button href="/contact" variant="secondary">Get Notified</Button>
        </div>

      </div>
    </div>
  );
}
