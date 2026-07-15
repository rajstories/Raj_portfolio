import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContentCreation from './components/ContentCreation';
import ProjectGallery from './components/ProjectGallery';
import Connect from './components/Connect';
import { SectionId } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const sectionIds: SectionId[] = ['home', 'skills', 'experience', 'content', 'projects', 'connect'];

    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(220, window.innerHeight * 0.3);
      let current: SectionId = 'home';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);

    if (showGallery) {
      setShowGallery(false);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
      });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showGallery) {
    return <ProjectGallery onBack={() => setShowGallery(false)} onNavigate={handleNavigate} />;
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-primary selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <Hero />
        <Features />
        <Experience />
        <ContentCreation />
        <Projects onViewAll={() => setShowGallery(true)} />
        
        <Connect />
      </main>
    </div>
  );
}

export default App;
