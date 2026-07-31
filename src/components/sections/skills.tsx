import { FadeIn } from '../ui/animations';

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend Web', skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'Tailwind CSS'] },
    { title: 'Core CS & DB', skills: ['C Programming', 'Basic MySQL', 'Data Structures', 'Discrete Mathematics'] },
    { title: 'Tools & Content', skills: ['Git & GitHub', 'Content Writing', 'MS Excel & Office', 'Technical Documentation'] }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-6 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}