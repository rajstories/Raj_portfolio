import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, X, Target, Zap, Users, Lightbulb, Play, Globe, ExternalLink } from 'lucide-react';
import { Project } from '../types';

// Expanded Project Data
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
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Portfolio</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Featured <span className="text-gray-500">Work</span></h2>
            </div>
            <a href="https://github.com/rajstories" target="_blank" rel="noopener noreferrer" className="text-white border-b border-primary pb-1 hover:text-primary transition-colors flex items-center gap-2">
                View GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
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

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          />
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#111] border border-white/10 rounded-3xl shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300 custom-scrollbar"
            style={{ scrollbarWidth: 'thin' }}
          >
            {/* Modal Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header Image */}
            <div className="relative h-48 sm:h-64 w-full">
               <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
               <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
                  <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">{selectedProject.title}</h2>
               </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 space-y-10">
              
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                   <Lightbulb className="w-5 h-5 text-yellow-500" /> 
                   What is it?
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" /> The Problem
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {selectedProject.problem || "Information pending."}
                    </p>
                </div>
                
                <div className="bg-green-500/5 border border-green-500/10 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" /> Our Solution
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {selectedProject.solution || "Information pending."}
                    </p>
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                   <Users className="w-5 h-5 text-blue-400" /> Target Audience
                </h3>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-gray-300">
                    {selectedProject.audience || "General Public"}
                </div>
              </div>

              {/* Tech Stack & Links */}
              <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                 <div className="space-y-3">
                    <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Technologies Used</span>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-gray-300 text-sm hover:border-primary/50 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                   {selectedProject.link && (
                       <a 
                         href={selectedProject.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-white/5 text-white hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl font-bold transition-all duration-300 group"
                       >
                         <Github className="w-5 h-5" />
                         Repo
                         <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                       </a>
                   )}

                   {selectedProject.websiteLink && (
                       <a 
                         href={selectedProject.websiteLink} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-xl font-bold transition-all duration-300 group shadow-lg shadow-primary/20"
                       >
                         <Globe className="w-5 h-5" />
                         Live Site
                         <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                       </a>
                   )}

                   {selectedProject.demoVideo && (
                       <a 
                         href={selectedProject.demoVideo} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 group shadow-lg shadow-red-600/20"
                       >
                         <Play className="w-5 h-5 fill-current" />
                         Demo
                         <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                       </a>
                   )}
                 </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;