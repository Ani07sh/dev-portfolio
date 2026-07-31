import { FadeIn } from '../ui/animations';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-grid-pattern">
      <div className="max-w-3xl text-center z-10">
        <FadeIn>
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
            COMPUTER SCIENCE UNDERGRADUATE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Anish Thakur</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Frontend developer and content creator focused on building clean, user-friendly web applications and creative digital experiences.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all">
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}