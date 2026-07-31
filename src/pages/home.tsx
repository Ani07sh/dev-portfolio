import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Projects from '../components/sections/projects';
import Learning from '../components/sections/learning';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}