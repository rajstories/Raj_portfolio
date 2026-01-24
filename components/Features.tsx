import React from 'react';
import { Terminal, Cpu, Layout, Database, Cloud, Shield } from 'lucide-react';

const techStack = [
  { 
    icon: Layout, 
    title: "Frontend Development", 
    desc: "React, Next.js, Tailwind CSS", 
    tags: ["React", "Next.js", "Tailwind"] 
  },
  { 
    icon: Terminal, 
    title: "Backend Engineering", 
    desc: "Node.js, FastAPI, Python, Go", 
    tags: ["Node.js", "FastAPI", "Python"] 
  },
  { 
    icon: Cpu, 
    title: "AI & Automation", 
    desc: "LangChain, OpenAI, n8n, HuggingFace", 
    tags: ["LangChain", "OpenAI", "n8n"] 
  },
  { 
    icon: Database, 
    title: "Databases", 
    desc: "PostgreSQL, MongoDB, Redis", 
    tags: ["PostgreSQL", "MongoDB", "Redis"] 
  },
  { 
    icon: Cloud, 
    title: "DevOps & Cloud", 
    desc: "Docker, Azure, Firebase, Git", 
    tags: ["Docker", "Azure", "Firebase"] 
  },
  { 
    icon: Shield, 
    title: "Security", 
    desc: "Vulnerability Assessment, Analysis", 
    tags: ["Cybersecurity", "Auditing"] 
  },
];

const Features: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16">
                <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">My Arsenal</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Tech <span className="text-gray-500">Stack</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech, idx) => (
                    <div key={idx} className="group bg-[#0f0f0f] border border-white/5 hover:border-primary/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#2A1810] to-black border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <tech.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{tech.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{tech.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {tech.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-gray-400 px-2 py-1 rounded-md border border-white/5 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;