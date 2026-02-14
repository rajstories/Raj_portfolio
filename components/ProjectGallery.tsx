import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Globe, Play, Lightbulb, Target, Zap, Users, X } from 'lucide-react';
import { Project } from '../types';

const PROJECT_DATA: Project[] = [
  { 
    id: 1, 
    title: "Prolytic", 
    category: "AI Reasoning Engine", 
    description: "The future of content creation. An AI-native workspace that acts as a Synthetic Creative Team for creators and brands.",
    image: "/projects/prolytic.png",
    tags: ["Gemini 3.0", "React", "Node.js", "Framer Motion"],
    link: "https://github.com/rajstories/Prolytic",
    websiteLink: "https://prolytic.in",
    demoVideo: "https://youtu.be/dfAV6JnDUes?si=3KFah3rH4VsogYjA",
    longDescription: "Prolytic is an AI-native workspace that acts as a Synthetic Creative Team for creators and brands. It doesn't just 'edit' video; it reasons about it using Google Gemini 3 to solve problems across the entire lifecycle.",
    problem: "Creators struggle with 'Algorithm Anxiety,' spending days on content that fails. Existing AI tools are too generic and don't provide strategic reasoning.",
    solution: "A 'Reasoning Engine' that features an Audience Lab (Shadow Simulator) where AI personas watch and critique your video in real-time, predicting retention drop-offs before you post.",
    audience: "Content Creators, Marketing Agencies, Brands, YouTube Professionals."
  },
  { 
    id: 2, 
    title: "ThreatPilot", 
    category: "Agentic AI SOC", 
    description: "Autonomous multi-agent system that detects threats, correlates 10K+ historical attacks, and executes remediation without human intervention.",
    image: "/projects/threatpilot.png",
    tags: ["Node.js", "LangChain", "OpenAI", "Grafana Loki"],
    link: "https://github.com/rajstories/ThreatPIlot_Agentic_AI_Workflow",
    longDescription: "ThreatPilot is an autonomous Security Operations Center (SOC) system designed to revolutionize how organizations handle cybersecurity threats. By leveraging Agentic AI, it moves beyond simple alert logging to active investigation and remediation.",
    problem: "Traditional SOCs face 'alert fatigue' where analysts are bombarded with thousands of logs daily. Manual correlation of these logs with historical data is time-consuming, often leading to delayed responses to critical threats.",
    solution: "We built a multi-agent architecture using LangChain. A 'Commander Agent' parses logs and delegates tasks. A 'Vector DB Agent' correlates current threats with 10k+ historical records. Specialized agents then handle documentation and Jira ticketing automatically.",
    audience: "Enterprise Security Teams, SOC Analysts, CISOs."
  },
  { 
    id: 3, 
    title: "Deal Flow AI", 
    category: "AI Investment Analyst", 
    description: "Invest Smarter. Decide Faster. Transforms pitch deck analysis from a 20-hour grind into a 5-minute science.",
    image: "/projects/dealflow.png",
    tags: ["Gemini 3 Pro", "React", "Express", "Multimodal"],
    link: "https://github.com/rajstories/DealFlowAI",
    websiteLink: "http://deal-flow-iota.vercel.app/",
    demoVideo: "https://youtu.be/wnpV1f2TXT4?si=ofBGJ-7mcMcwn0YJ",
    longDescription: "DealFlow AI is an autonomous investment analyst powered by Gemini 3 that scores startups across 6 categories with institutional-grade rigor.",
    problem: "Angel investors drown in pitch decks (50+ monthly), spending 20+ hours on analysis and often missing red flags due to fatigue or human error.",
    solution: "Deep Pitch Deck Analysis with a 'Red Flag Detector' that fact-checks claims against LinkedIn and Crunchbase using Gemini 3's grounded search and function calling.",
    audience: "Angel Investors, VC Firms, Startup Accelerators."
  },
  { 
    id: 4, 
    title: "SAKSHAM", 
    category: "Disaster Mgmt (SIH'25)", 
    description: "Real-time monitoring system for NDMA to track disaster management trainings. Features PWA, Dashboard, and ML predictions.",
    image: "/assets/saksham.png", 
    tags: ["FastAPI", "React", "Mapbox", "Redis"],
    link: "https://github.com/rajstories/Saksham_SIH-Final",
    longDescription: "Project SAKSHAM is a comprehensive monitoring solution developed for the National Disaster Management Authority (NDMA). It streamlines the tracking and management of disaster response training programs across India.",
    problem: "The NDMA struggled with fragmented data regarding training sessions, relying on manual paper trails that delayed critical resource allocation decisions.",
    solution: "We adopted a mobile-first approach with an Offline-First PWA for field trainers to ensure data capture even in remote areas. This data syncs to a central React dashboard visualizing impact metrics in real-time.",
    audience: "Government Bodies (NDMA), Field Trainers, Emergency Response Coordinators."
  },
  { 
    id: 5, 
    title: "WardWatch AI", 
    category: "Precision Governance", 
    description: "Hyper-local pollution management ecosystem for Delhi. Connects citizens to the government command center for real-time intelligence.",
    image: "/assets/wardwatch.png",
    tags: ["React", "FastAPI", "Mapbox", "MLP"],
    link: "https://github.com/rajstories/Delhi_pollution_goverment_portal",
    websiteLink: "https://delhi-pollution-goverment-portal.vercel.app/",
    demoVideo: "https://www.youtube.com/watch?v=Z-mdqGnRBQA",
    longDescription: "WardWatch AI is a first-of-its-kind, hyper-local pollution management ecosystem designed for the Municipal Corporation of Delhi (MCD). It provides granular, real-time intelligence for all 272 wards of Delhi.",
    problem: "Delhi currently operates on a 'City Average' AQI model. This creates a dangerous data blind spot: Lack of Granularity, Reactive Governance, No Attribution, and Zero Accountability.",
    solution: "A Dual-Interface Ecosystem consisting of a Citizen Mobile App for 'The Eyes of the City' and a Government Command Center for 'Precision Governance', featuring a 272-Ward GIS Dashboard and AI-Verified Reporting.",
    audience: "MCD Officials, Citizens of Delhi, Environmental Policy Makers."
  },
  { 
    id: 6, 
    title: "Apna Thela", 
    category: "Social Impact", 
    description: "Multilingual, voice-driven business management app for street vendors with offline support and voice-first UI.",
    image: "/assets/apna-thela.png",
    tags: ["React", "Web Speech API", "PWA", "i18n"],
    link: "https://github.com/rajstories/Apna-Thela",
    websiteLink: "https://apna-thela-4.onrender.com/",
    longDescription: "Apna Thela is a voice-enabled digital assistant specifically designed to help street vendors manage their inventory, sales, and customer debts without needing complex financial literacy.",
    problem: "Street vendors often rely on memory or disorganized paper scraps for bookkeeping. Existing accounting apps are too complex and text-heavy for this demographic.",
    solution: "We utilized the Web Speech API to build a completely voice-navigable interface. The app supports multiple local languages and works offline to suit the connectivity constraints of the target user.",
    audience: "Street Vendors, Small-scale Hawkers, Micro-entrepreneurs."
  },
  { 
    id: 7, 
    title: "BuildDost", 
    category: "AI Tool", 
    description: "AI-powered platform that generates full-stack web apps from natural language descriptions using OpenAI.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["OpenAI", "React", "Typescript", "Express"],
    link: "https://github.com/rajstories/BuildDost",
    longDescription: "BuildDost acts as an intelligent coding companion that transforms natural language descriptions into deployable full-stack web applications.",
    problem: "The initial setup of web projects is repetitive and difficult for non-technical founders.",
    solution: "Using OpenAI's GPT models to generate component-based code structures ready to run.",
    audience: "Solo Developers, Hackathon Teams."
  },
  { 
    id: 8, 
    title: "Adhaar Intelligence System", 
    category: "AI Threat Detection", 
    description: "Enterprise-grade platform for Aadhaar data analysis, threat detection, and policy intelligence generation.",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop",
    tags: ["Node.js", "React", "FastAPI", "Prisma"],
    link: "https://github.com/rajstories/ThreatPIlot_Agentic_AI_Workflow",
    websiteLink: "https://geovision-uidai.vercel.app/",
    demoVideo: "https://geovision-adhaar-mobile.vercel.app/",
    longDescription: "The UIDAI Intelligence System is an enterprise-grade platform designed to analyze Aadhaar authentication data at scale using ML and threat detection.",
    problem: "Need for real-time analysis of authentication data to identify anomalies and potential threats at scale.",
    solution: "A multi-layer architecture combining React dashboards, Node.js APIs, and Python-based ML pipelines for anomaly detection.",
    audience: "UIDAI Decision Makers, Security Analysts."
  },
  { 
    id: 9, 
    title: "Pooja Academy", 
    category: "EdTech", 
    description: "Comprehensive Educational Management System for Science & Commerce coaching institutes.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Drizzle"],
    link: "https://github.com/rajstories/EducationPlatform",
    websiteLink: "https://poojaacademy.in",
    longDescription: "A cutting-edge web application designed for educational institutes, featuring CMS, student management, and real-time tracking.",
    problem: "Educational institutes often struggle with fragmented content management and student tracking.",
    solution: "A unified platform for study notes, video lectures, attendance monitoring, and automated notifications.",
    audience: "JEE & NEET Students, Institute Administrators."
  },
  { 
    id: 10, 
    title: "sunao.mp4", 
    category: "AI Audio Tool", 
    description: "Turn your 10-minute voice notes into 10-second insights. Turn noise into stories.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
    tags: ["Gemini 1.5 Flash", "Next.js", "Tailwind"],
    link: "https://github.com/rajstories/Sunao.mp4_V2",
    websiteLink: "https://sunao-mp4-v2.vercel.app/",
    longDescription: "sunao.mp4 transforms raw audio files like WhatsApp voice notes into readable, visual insights using multimodal AI.",
    problem: "Traditional transcription tools produce walls of text that are hard to digest quickly.",
    solution: "Multimodal 'Ears' that listen to audio and extract facts/action items into a Bento Grid layout.",
    audience: "Students, Professionals, Daily Voice Note Users."
  },
  { 
    id: 11, 
    title: "Nexus Hackathon Platform", 
    category: "Community Tool", 
    description: "AI-Powered Hackathon Management Platform for seamless competition hosting and submissions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    tags: ["Node.js", "React", "TypeScript", "PostgreSQL"],
    link: "https://github.com/rajstories/Nexus-hackathon-platform",
    longDescription: "A production-ready hackathon management platform featuring role-based dashboards and real-time collaboration.",
    problem: "Hosting and managing multi-round evaluations for large scale hackathons is complex.",
    solution: "Enterprise-grade system with judging portals, team management, and automated leaderboards.",
    audience: "Hackathon Organizers, Developers."
  }
];

const ProjectGallery: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Complete <span className="text-gray-500">Archive</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            "A collection of experiments, solutions, and digital experiences I've built."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0f0f0f] border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] bg-gray-900 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  <div className="p-2 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-500 font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL (Reusing logic from Projects.tsx) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedProject(null)} />
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#111] border border-white/10 rounded-3xl shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300 custom-scrollbar">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10">
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-48 sm:h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
                <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md">{selectedProject.category}</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">{selectedProject.title}</h2>
              </div>
            </div>
            <div className="p-6 sm:p-10 space-y-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-500" /> What is it?</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.longDescription || selectedProject.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2"><Target className="w-5 h-5" /> The Problem</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.problem || "Information pending."}</p>
                </div>
                <div className="bg-green-500/5 border border-green-500/10 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2"><Zap className="w-5 h-5" /> Our Solution</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.solution || "Information pending."}</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="space-y-3">
                  <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-gray-300 text-sm hover:border-primary/50 transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-white/5 text-white hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl font-bold transition-all duration-300 group">
                      <Github className="w-5 h-5" /> Repo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {selectedProject.websiteLink && (
                    <a href={selectedProject.websiteLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-xl font-bold transition-all duration-300 group shadow-lg shadow-primary/20">
                      <Globe className="w-5 h-5" /> Live Site <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {selectedProject.demoVideo && (
                    <a href={selectedProject.demoVideo} target="_blank" rel="noopener noreferrer" className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 group shadow-lg shadow-red-600/20">
                      <Play className="w-5 h-5 fill-current" /> Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;