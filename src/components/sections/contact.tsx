import { FadeIn } from '../ui/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-300">Name</label>
              <input type="text" required className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-300">Email</label>
              <input type="email" required className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-300">Message</label>
              <textarea rows={4} required className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg transition-all">
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}