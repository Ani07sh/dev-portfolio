export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 bg-slate-950 text-center text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Anish Thakur. All rights reserved.</p>
        <p className="text-xs text-slate-600">Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}