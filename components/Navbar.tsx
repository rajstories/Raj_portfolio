import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleNavigate = (id: SectionId) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`portfolio-header${scrolled ? ' portfolio-header--scrolled' : ''}`}>
      <div className="portfolio-navbar">
        <a href="#home" onClick={(event) => { event.preventDefault(); handleNavigate('home'); }} className="portfolio-logo" aria-label="Raj portfolio home">
          <svg viewBox="0 0 46 46" aria-hidden="true">
            <path d="M11 8h19c6.5 0 11 4.2 11 10.2 0 4.9-3 8.5-7.7 9.8L42 38h-9.8L21.5 25.4h8.1c2.7 0 4.4-1.6 4.4-4.2 0-2.5-1.8-4.1-4.5-4.1H11V8Z" fill="#315ef8" />
            <path d="M10 20h8v18h-8z" fill="#ff5a2a" />
            <path d="m18 28 9.2 10H18V28Z" fill="#ef4016" />
          </svg>
          <span>Raj</span>
        </a>

        <nav className="portfolio-nav" aria-label="Primary navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button className={activeSection === item.id ? 'is-active' : ''} type="button" onClick={() => handleNavigate(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="portfolio-navbar__actions">
          <a
            className="resume-button"
            href="/Raj_Resume_AI_Data_Engineer.pdf"
            download="Raj_Resume_AI_Data_Engineer.pdf"
            aria-label="Download Raj Shrivastav's AI Data Engineer resume"
          >
            <Download aria-hidden="true" />
            <span>Download Resume</span>
          </a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen((isOpen) => !isOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {NAV_ITEMS.map((item) => (
          <button key={item.id} className={activeSection === item.id ? 'is-active' : ''} type="button" onClick={() => handleNavigate(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
