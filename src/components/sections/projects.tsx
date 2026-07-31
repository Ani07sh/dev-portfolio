import { FadeIn } from '../ui/animations';

export default function Projects() {
  const projects = [
    {
      title: 'BB College Website',
      description: 'Academic website project featuring responsive navigation, campus highlights, and planned PHP/MySQL database handling.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP/MySQL']
    },
    {
      title: 'Personal Portfolio',
      description: 'Interactive portfolio app built to showcase developer skills, academic projects, and contact forms with modern dark theme aesthetics.',
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Restaurant Website',
      description: 'Modern landing page UI for menu display and reservations, designed with mobile-first responsiveness.',
      tags: ['HTML5', 'CSS3', 'UI Design']
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="p-6 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs px-2.5 py-1 bg-slate-800 text-blue-400 rounded-md font-mono border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}