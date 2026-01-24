import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { NavItem, SectionId } from '../types';
import { jsPDF } from 'jspdf';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'content', label: 'Stories' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Connect' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const doc = new jsPDF();
    
    // Resume Settings
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let yPos = 20;
    const lineHeight = 6;
    
    // Helper to add text and update cursor
    const addText = (text: string, size: number, isBold: boolean = false, align: 'left' | 'center' | 'right' = 'left', color: [number, number, number] = [0, 0, 0]) => {
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      doc.text(text, align === 'center' ? pageWidth / 2 : (align === 'right' ? pageWidth - margin : margin), yPos, { align });
    };

    const addSectionHeader = (title: string) => {
        yPos += 4;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(255, 107, 53); // Primary Orange Color
        doc.text(title.toUpperCase(), margin, yPos);
        
        yPos += 2;
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 6;
    };

    // --- HEADER ---
    addText("RAJ SHRIVASTAV", 22, true, 'center');
    yPos += 7;
    addText("Full-Stack Developer & AI/ML Enthusiast", 11, false, 'center', [80, 80, 80]);
    yPos += 7;
    addText("+91-9958262272  |  rajshrivastav283815@gmail.com  |  linkedin.com/in/rajhub", 9, false, 'center', [50, 50, 50]);
    yPos += 5;
    addText("github.com/rajstories  |  New Delhi, India", 9, false, 'center', [50, 50, 50]);
    yPos += 10;

    // --- SUMMARY ---
    addSectionHeader("Professional Summary");
    const summary = "Full-Stack Developer and AI/ML Enthusiast pursuing B.Tech in CSE at DTU. SIH 2025 Runner-up with expertise in building Agentic AI systems and scalable web applications. Passionate about automating complex workflows through intelligent agents and secure software architecture.";
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const splitSummary = doc.splitTextToSize(summary, contentWidth);
    doc.text(splitSummary, margin, yPos);
    yPos += (splitSummary.length * 5) + 4;

    // --- SKILLS ---
    addSectionHeader("Technical Skills");
    const skills = [
        { label: "Languages:", val: "Python, TypeScript, JavaScript, C++, SQL" },
        { label: "AI/ML & Agents:", val: "LangChain, OpenAI API, HuggingFace, n8n, RAG Pipelines" },
        { label: "Full Stack:", val: "React.js, Next.js, Node.js, FastAPI, PostgreSQL, MongoDB, Redis" },
        { label: "DevOps & Tools:", val: "Docker, Git, Azure, Firebase, Web Speech API" }
    ];
    
    skills.forEach(skill => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(skill.label, margin, yPos);
        const labelWidth = doc.getTextWidth(skill.label);
        
        doc.setFont("helvetica", "normal");
        doc.text(skill.val, margin + labelWidth + 2, yPos);
        yPos += 5;
    });
    yPos += 3;

    // --- EXPERIENCE ---
    addSectionHeader("Experience");
    
    // Role 1
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Cybersecurity Intern", margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text("2024", pageWidth - margin, yPos, { align: "right" });
    yPos += 5;
    
    doc.setFont("helvetica", "italic"); // Company
    doc.text("Centre for Development of Advanced Computing (CDAC), New Delhi", margin, yPos);
    yPos += 6;

    const expPoints = [
        "Conducted security analysis and vulnerability assessments on critical software systems.",
        "Utilized industry-standard security tools to detect threats and improve system hardening.",
        "Collaborated with senior engineers to implement secure coding practices."
    ];
    
    doc.setFont("helvetica", "normal");
    expPoints.forEach(point => {
        doc.text("• " + point, margin + 2, yPos);
        yPos += 5;
    });
    yPos += 3;

    // --- PROJECTS ---
    addSectionHeader("Key Projects");
    
    const projects = [
        {
            title: "ThreatPilot - Agentic AI SOC System",
            tech: "Python, LangChain, AI Agents",
            desc: "Built an autonomous SOC system that detects threats and executes remediation. Automated workflows to minimize human response time."
        },
        {
            title: "SAKSHAM - Disaster Management System (SIH'25 Runner Up)",
            tech: "FastAPI, React, PWA, Mapbox",
            desc: "Real-time monitoring system for NDMA. Built an offline-first PWA for field trainers and integrated ML predictions for impact analysis."
        },
        {
            title: "Apna Thela - Voice-First Vendor App",
            tech: "React, Web Speech API, TypeScript",
            desc: "Developed a multilingual, voice-driven business management app for street vendors with full offline support."
        }
    ];

    projects.forEach(proj => {
        doc.setFont("helvetica", "bold");
        doc.text(proj.title, margin, yPos);
        yPos += 5;
        
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.text(proj.tech, margin, yPos);
        yPos += 5;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        const splitDesc = doc.splitTextToSize("• " + proj.desc, contentWidth - 2);
        doc.text(splitDesc, margin + 2, yPos);
        yPos += (splitDesc.length * 5) + 3;
    });

    // --- EDUCATION ---
    addSectionHeader("Education");
    doc.setFont("helvetica", "bold");
    doc.text("Bachelor of Technology in Computer Science and Engineering", margin, yPos);
    yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Delhi Technological University (DTU), New Delhi", margin, yPos);
    doc.text("2023 – 2027 (Expected)", pageWidth - margin, yPos, { align: "right" });
    yPos += 8;

    // --- ACHIEVEMENTS ---
    addSectionHeader("Achievements & Certifications");
    const achievements = [
        "Smart India Hackathon 2025: Grand Finale Runner Up.",
        "Smart India Hackathon 2024: Internal Round Winner.",
        "5x Hackathon Finalist (SynapHack, StartUp SpotLight, etc).",
        "Active Contributor to Open Source AI Agent frameworks."
    ];
    
    achievements.forEach(ach => {
        doc.text("• " + ach, margin + 2, yPos);
        yPos += 5;
    });

    // Save
    doc.save("Raj_Shrivastav_Resume.pdf");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 py-6 md:px-12 ${scrolled ? 'pt-4 pb-4' : 'pt-8 pb-4'}`}>
      {/* Logo */}
      <div className="flex-shrink-0 z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-3xl font-bold tracking-tight text-white hover:text-primary transition-colors">
          Raj
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 shadow-lg shadow-black/20">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary bg-white/10 shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="flex-shrink-0 flex items-center gap-4 z-50">
        <button 
          onClick={handleDownloadResume}
          className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#252525] border border-white/10 text-white px-6 py-3 rounded-full transition-all duration-300 group cursor-pointer"
        >
          <Download className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">Download Resume</span>
        </button>
        
        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
             {/* Placeholder for mobile menu trigger - keeping it simple for the desktop-focused design requirement */}
             <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
             </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;