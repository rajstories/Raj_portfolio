import React from 'react';
import { Instagram, Video, Heart, TrendingUp, Camera, Clapperboard, Sparkles } from 'lucide-react';

const ContentCreation: React.FC = () => {
  return (
    <section id="content" className="py-24 bg-black relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left: Text Content */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Beyond the Code</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Engineering Solutions, <br /><span className="text-gray-500">Curating Narratives.</span></h2>
                        <p className="text-xl text-white font-medium italic">"Code builds the product, but stories build the connection."</p>
                    </div>

                    <div className="prose prose-invert text-gray-400 leading-relaxed">
                        <p>
                            Over the past 2.5 years, I've cultivated a community on Instagram (@the_rajstories), blending the precision of software engineering with the art of visual storytelling. 
                        </p>
                        <p>
                            My content isn't just about documenting life; it's about exploring the human side of technology, student growth, and the creative process. This dual-focus allows me to approach technical problems with a user-centric, empathetic mindset—translating complex logic into compelling experiences.
                        </p>
                    </div>

                    {/* Content Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {[
                            { icon: Camera, label: "Cinematic Vlogs", desc: "Capturing life's aesthetic moments" },
                            { icon: Clapperboard, label: "Tech Lifestyle", desc: "The reality of a developer's journey" },
                            { icon: Sparkles, label: "Personal Growth", desc: "Mindset & productivity insights" },
                            { icon: Video, label: "Visual Storytelling", desc: "Editing & narrative composition" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10">
                                <item.icon className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{item.label}</h4>
                                    <p className="text-gray-500 text-xs">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a 
                        href="https://www.instagram.com/the_rajstories/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors mt-4"
                    >
                        Visit Instagram Profile <Instagram className="w-4 h-4" />
                    </a>
                </div>

                {/* Right: Visual Stats / Phone Mockup */}
                <div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center perspective-[1000px]">
                    <div className="relative w-[320px] bg-black border-[8px] border-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20"></div>

                        {/* Screen Content */}
                        <div className="h-full bg-gradient-to-b from-[#111] to-black p-6 flex flex-col relative z-10">
                            
                            {/* Profile Header */}
                            <div className="flex items-center justify-between mt-8 mb-6">
                                <span className="text-white font-bold text-lg">the_rajstories</span>
                                <Instagram className="w-6 h-6 text-white" />
                            </div>

                            {/* Profile Stats */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500">
                                    <div className="w-full h-full rounded-full bg-black overflow-hidden p-0.5">
                                         {/* Placeholder for IG Profile Pic */}
                                        <div className="w-full h-full bg-[#222] flex items-center justify-center text-xs text-gray-500">
                                            RAJ
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex justify-around text-center">
                                    <div>
                                        <div className="text-white font-bold">2.5+</div>
                                        <div className="text-[10px] text-gray-400">Years</div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">500K+</div>
                                        <div className="text-[10px] text-gray-400">Views</div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">High</div>
                                        <div className="text-[10px] text-gray-400">Impact</div>
                                    </div>
                                </div>
                            </div>

                            {/* Bio Area */}
                            <div className="space-y-1 mb-6">
                                <h3 className="text-white font-bold text-sm">Raj | Storyteller</h3>
                                <p className="text-gray-300 text-xs">
                                    🎥 Creating stories that matter<br/>
                                    💻 Dev by day, Creator by night<br/>
                                    🚀 Documenting the journey
                                </p>
                                <div className="text-primary text-xs font-medium mt-1">linktr.ee/rajstories</div>
                            </div>

                            {/* Highlights/Grid Mockup */}
                            <div className="flex gap-2 mb-4 overflow-x-hidden">
                                <div className="w-14 h-14 rounded-full border border-gray-800 bg-[#222]"></div>
                                <div className="w-14 h-14 rounded-full border border-gray-800 bg-[#222]"></div>
                                <div className="w-14 h-14 rounded-full border border-gray-800 bg-[#222]"></div>
                                <div className="w-14 h-14 rounded-full border border-gray-800 bg-[#222]"></div>
                            </div>

                            {/* Posts Grid Mockup */}
                            <div className="grid grid-cols-3 gap-1 flex-1">
                                <div className="aspect-square bg-[#222] relative group">
                                    <Video className="w-4 h-4 text-white absolute top-1 right-1 opacity-50" />
                                </div>
                                <div className="aspect-square bg-[#222] relative">
                                    <Video className="w-4 h-4 text-white absolute top-1 right-1 opacity-50" />
                                </div>
                                <div className="aspect-square bg-[#222] relative">
                                    <TrendingUp className="w-4 h-4 text-white absolute top-1 right-1 opacity-50" />
                                </div>
                                <div className="aspect-square bg-[#222]"></div>
                                <div className="aspect-square bg-[#222]"></div>
                                <div className="aspect-square bg-[#222]"></div>
                            </div>

                            {/* Floating Stats Badge */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                <span className="text-xs font-bold text-white">Consistent Engagement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContentCreation;