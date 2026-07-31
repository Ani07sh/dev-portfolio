import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Terminal, ExternalLink, Code2, 
  Briefcase, GraduationCap, Cpu, Layers, CheckCircle2, 
  Send, Download, MapPin, Globe, Share2, User
} from 'lucide-react';

export default function App() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Frontend Developer",
    "Computer Science Undergraduate",
    "AI & Creative Technology Explorer",
    "Full Stack Developer"
  ];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Custom Cursor Position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Top Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[textIndex];
      setCurrentText(
        isDeleting 
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, titles]);

  // Featured Projects Data
  const projects = [
    {
      id: 1,
      title: "BB College Website",
      category: "web",
      subtitle: "Responsive Educational Platform",
      desc: "Comprehensive college portal for Banwarilal Bhalotia College featuring dynamic UI, smooth navigation, and responsive multi-page layouts.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      gradient: "from-blue-600/20 to-cyan-500/20",
      live: "https://ani07sh.github.io/bb-college-website/",
      github: "https://github.com/ani07sh",
      status: "Live"
    },
    {
      id: 2,
      title: "Restaurant Showcase",
      category: "web",
      subtitle: "Interactive Culinary Site",
      desc: "Modern restaurant landing page featuring interactive menus, visual highlights, and fluid responsive styling.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      gradient: "from-blue-600/20 to-indigo-500/20",
      live: "https://ani07sh.github.io/restaurant/",
      github: "https://github.com/ani07sh",
      status: "Live"
    },
    {
      id: 3,
      title: "Developer Portfolio",
      category: "web",
      subtitle: "Personal Workspace Showcase",
      desc: "High-performance developer workspace engineered with Vite, React, TypeScript, Framer Motion, and Tailwind CSS v4.",
      tags: ["Vite", "React", "TypeScript", "Tailwind"],
      gradient: "from-cyan-500/20 to-blue-600/20",
      live: "https://anishthakur.netlify.app/",
      github: "https://github.com/ani07sh/portfolio",
      status: "Live"
    },
    {
      id: 4,
      title: "AI Portfolio Builder",
      category: "ai",
      subtitle: "Internship Project @ InAmigos",
      desc: "AI-assisted web development environment showcasing automated component workflows and custom UI interfaces.",
      tags: ["AI APIs", "React", "Tailwind CSS"],
      gradient: "from-purple-600/20 to-blue-600/20",
      github: "https://github.com/ani07sh",
      status: "Currently Building"
    },
    {
      id: 5,
      title: "TouchDesigner + AI Visuals",
      category: "creative",
      subtitle: "Creative Tech & Generative Motion",
      desc: "Explorations combining AI generative pipelines, real-time node graphs, and audio-reactive digital experiments.",
      tags: ["TouchDesigner", "Creative Coding", "AI Visuals"],
      gradient: "from-blue-600/20 to-emerald-500/20",
      github: "https://github.com/ani07sh",
      status: "Currently Building"
    }
  ];

  // Skill Bars Data
  const skillBars = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Tailwind CSS & Responsive UI", level: 90 },
    { name: "React.js & Vite", level: 75 },
    { name: "Git & Version Control", level: 80 },
    { name: "AI Tools & Workflows", level: 85 },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#050816] text-white bg-grid-pattern relative selection:bg-blue-500/30 overflow-hidden">
      
      {/* 1. TOP SCROLL PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 2. AMBIENT MOUSE CURSOR GLOW */}
      <div 
        className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out rounded-full w-96 h-96 bg-blue-500/10 blur-[100px]"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#111827]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl">
        <a href="#" className="font-bold tracking-wider text-blue-400 flex items-center gap-2">
          <Terminal size={18} /> ANISH.
        </a>
        <div className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-300 text-xs font-semibold tracking-wide"
          >
            <Sparkles size={14} className="text-blue-400 animate-pulse" />
            <span>AI Web Development Intern @ InAmigos Foundation (Currently)</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Anish Thakur</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 text-xl md:text-2xl text-blue-300/90 font-mono flex items-center justify-center gap-1"
          >
            <span>{currentText}</span>
            <span className="w-2 h-6 bg-blue-400 animate-pulse inline-block" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            I build fast, modern, and user-focused web applications while exploring AI-powered experiences and creative technology. Based in Asansol, West Bengal, India.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-7 py-3.5 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500/50 text-gray-200 font-medium transition-all hover:scale-105 active:scale-95"
            >
              Let's Connect
            </a>
            <a 
            href="/Anish_Thakur_Resume.pdf" 
            download="Anish_Thakur_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 hover:border-blue-400 text-blue-300 font-medium flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Download size={16} /> Resume
          </a>
          </motion.div>

        </div>
      </section>

      {/* ABOUT & EXPERIENCE TIMELINE */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"><Code2 size={24} /></span>
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I'm Anish Thakur, a Computer Science undergraduate from Banwarilal Bhalotia College (Asansol) passionate about engineering modern web applications. My path spans frontend engineering, AI workflow integration, and creative tech.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I focus on crafting clean, performant user experiences while expanding into full-stack Java architecture and generative visual systems.
            </p>

            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-3">
              <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                <Cpu size={18} /> Core Focus
              </h3>
              <p className="text-sm text-gray-400">
                Building scalable web products, mastering modern JavaScript/TypeScript frameworks, and experimenting with TouchDesigner and creative coding.
              </p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-200 mb-4">Journey & Experience</h3>
            
            <div className="p-6 rounded-2xl bg-[#111827] border border-blue-500/30 hover:border-blue-500 transition-all relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Internship</span>
                  <h4 className="text-lg font-bold text-white mt-1">AI Web Development Intern</h4>
                  <p className="text-sm text-gray-400">InAmigos Foundation</p>
                </div>
                <Briefcase className="text-blue-400" size={24} />
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Developing web components, optimizing developer workflows, and building AI-assisted project demos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Education</span>
                  <h4 className="text-lg font-bold text-white mt-1">Bachelor of Computer Science</h4>
                  <p className="text-sm text-gray-400">Banwarilal Bhalotia College (BB College)</p>
                </div>
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Studying core CS fundamentals, discrete mathematics, digital electronics, and software engineering practices.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Interactive web apps, real-world sites, and ongoing creative tech explorations.
          </p>

          <div className="flex justify-center gap-2 pt-4">
            {['all', 'web', 'ai', 'creative'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-[#111827] text-gray-400 border border-white/5 hover:border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${project.gradient} bg-[#111827] border border-white/10 hover:border-blue-500/50 transition-all group flex flex-col justify-between space-y-6 hover:-translate-y-1 shadow-xl`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400">{project.subtitle}</span>
                  {project.status === "Currently Building" ? (
                    <span className="px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-[10px] font-semibold text-purple-300 animate-pulse">
                      Currently Building
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-semibold text-emerald-300">
                      Live
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-300 text-[11px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      GitHub Repo <Code2 size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS & ANIMATED BARS */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto bg-[#111827]/40 rounded-3xl border border-white/5 my-12 z-10 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Skills & Proficiency</h2>
          <p className="text-gray-400 text-sm">Technologies and dev tools in my daily workflow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {skillBars.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
              <Layers size={18} /> Frontend Stack
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["HTML5 & CSS3", "JavaScript (ES6+)", "Responsive Design", "Tailwind CSS v4"].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-500" /> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
              <Cpu size={18} /> Core & Emerging
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["React.js & Vite", "TypeScript", "TouchDesigner", "AI Integration"].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-500" /> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
              <Terminal size={18} /> Developer Tools
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["VS Code", "Git & GitHub", "Netlify & Vercel", "Figma"].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-purple-500" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT & SOCIAL DRAWER */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center space-y-12 z-10 relative">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Interested in collaboration, internship opportunities, or web development projects? Drop a message below!
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-xs text-blue-300">
            <MapPin size={14} className="text-blue-400" />
            <span>Asansol, West Bengal, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={(e) => e.preventDefault()} className="p-8 rounded-2xl bg-[#111827] border border-white/10 text-left space-y-6 max-w-xl mx-auto shadow-2xl">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Email</label>
            <input 
              type="email" 
              placeholder="email@domain.com" 
              className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Message</label>
            <textarea 
              rows={4} 
              placeholder="How can we work together?" 
              className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send size={16} /> Send Message
          </button>
        </form>

        {/* Social Icons Drawer */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="https://github.com/ani07sh" 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 transition-all hover:scale-110 flex items-center gap-2 text-xs font-medium"
          >
            <Code2 size={18} /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/your-linkedin-username/" 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 transition-all hover:scale-110 flex items-center gap-2 text-xs font-medium"
          >
            <User size={18} /> LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/its_thakur_074/" 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 transition-all hover:scale-110 flex items-center gap-2 text-xs font-medium"
          >
            <Share2 size={18} /> Instagram
          </a>
          <a 
            href="https://anishthakur.netlify.app/" 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 transition-all hover:scale-110 flex items-center gap-2 text-xs font-medium"
          >
            <Globe size={18} /> Netlify Live
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-gray-500 border-t border-white/5 relative z-10">
        <p>© 2026 Anish Thakur. Asansol, West Bengal, India.</p>
      </footer>

    </div>
  );
}