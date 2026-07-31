import { FadeIn } from '../ui/animations';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>
              I am a Computer Science undergraduate (3rd Year) with a strong interest in web development, interactive user interfaces, and technical content writing.
            </p>
            <p>
              Along with technical programming skills in HTML, CSS, JavaScript, C, and MySQL, I have formal experience as a Content Writing Intern at InAmigos Foundation (Project Udaan). I bridge code execution with clear communication.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}