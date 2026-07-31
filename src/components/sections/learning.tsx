import { FadeIn } from '../ui/animations';

export default function Learning() {
  return (
    <section id="learning" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">Currently Learning</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Actively diving deeper into modern full-stack web development frameworks, backend APIs with PHP/MySQL, and interactive UI animations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}