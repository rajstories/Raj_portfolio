import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContentCreation from './components/ContentCreation';
import { SectionId } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-primary selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <Hero />
        <Features />
        <Experience />
        <ContentCreation />
        <Projects />
        
        {/* Connect section */}
        <section id="connect" className="py-32 bg-gradient-to-t from-[#2A1810] to-black flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's work together.</h2>
            <p className="text-gray-400 max-w-xl mb-10 text-lg">
                I'm currently available for freelance projects and full-time opportunities in AI/ML and Full-Stack Development.
            </p>
            <a href="mailto:rajshrivastav283815@gmail.com" className="bg-white text-black hover:bg-primary hover:text-white px-10 py-4 rounded-full text-xl font-bold transition-colors duration-300">
                Get In Touch
            </a>
            
            <footer className="mt-24 text-gray-600 text-sm flex flex-col items-center gap-2">
                <span>&copy; {new Date().getFullYear()} Raj. Built with React & Tailwind.</span>
                <span className="text-xs opacity-50">Images from Unsplash</span>
            </footer>
        </section>
      </main>
    </div>
  );
}

export default App;