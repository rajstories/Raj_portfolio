import React from 'react';
import { Briefcase, Trophy, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
            <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Journey So Far</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience & <span className="text-gray-500">Achievements</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Experience Column */}
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <span>Work Experience</span>
                </h3>

                <div className="relative border-l border-white/10 pl-8 ml-3 space-y-12">
                    <div className="relative group">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#050505] bg-primary transition-transform group-hover:scale-125"></span>
                        <div className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">Internship</span>
                            <h4 className="text-xl font-bold text-white">Cybersecurity Intern</h4>
                            <p className="text-gray-400 text-sm mb-4">Centre for Development of Advanced Computing (CDAC)</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Worked on security analysis and vulnerability assessment. Gained hands-on experience with industry-standard security tools and protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements Column */}
            <div className="space-y-8">
                 <h3 className="text-2xl font-semibold flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-primary" />
                    <span>Hackathon Glory</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] p-6 rounded-2xl border border-white/5 text-center group hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">15+</div>
                        <div className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Hackathons Participated</div>
                    </div>
                     <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] p-6 rounded-2xl border border-white/5 text-center group hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">5x</div>
                        <div className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Finalist</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-[#111] rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="p-3 bg-yellow-500/10 rounded-lg">
                            <Award className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">SIH 2025 Grand Finale Runner Up</h4>
                            <p className="text-gray-400 text-sm">Built SAKSHAM for NDMA - Real-time disaster management training monitoring system.</p>
                        </div>
                    </div>

                     <div className="flex items-start gap-4 p-4 bg-[#111] rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                            <Trophy className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">SynapHack Finalist (Nexus)</h4>
                            <p className="text-gray-400 text-sm">Created an enterprise-grade hackathon management platform.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;