import React, { useEffect, useState } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Instagram, Atom, Figma } from 'lucide-react';

// -----------------------------------------------------------------------------
// ✨ CUSTOMIZE YOUR CHARACTER
// -----------------------------------------------------------------------------
// Updated to a reliable 3D Avatar URL (Microsoft Fluent 3D Emoji)
// This is a stable, high-quality 3D render of a technologist.
const USER_IMAGE_URL = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"; 
// -----------------------------------------------------------------------------

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallax = (factor: number) => ({
    transform: `translate(${mousePos.x * factor * 20}px, ${mousePos.y * factor * 20}px)`,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black selection:bg-primary selection:text-white perspective-[1200px]">
      
      {/* 1. Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Large Glowing Number/Text */}
      <div 
        className="absolute top-[20%] left-[-2%] text-[300px] lg:text-[400px] font-bold text-transparent pointer-events-none opacity-20 select-none hidden lg:block"
        style={{ 
          WebkitTextStroke: '2px #FF6B35',
          filter: 'drop-shadow(0 0 50px rgba(255,107,53,0.2))',
          fontFamily: 'sans-serif',
          zIndex: 0,
          ...parallax(-0.5)
        }}
      >
        SIH
      </div>

      {/* Lighting */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Geometric Triangles */}
      <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-primary/20 rotate-45 animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white/10 -rotate-12 animate-float-delayed" />


      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 max-w-2xl relative z-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">SIH'25 Runner Up</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
              Hey there, I'm <span className="text-primary font-bold">Raj</span>
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Full-Stack & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-300 to-white">AI/ML Enthusiast</span>
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
            B.Tech CSE @ DTU. Building intelligent solutions that solve real-world problems. 
            <span className="block mt-2 text-white/80 font-medium">15+ Hackathons • 5x Finalist • Cybersecurity Intern</span>
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-[#e55a2b] text-white text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_4px_30px_rgba(255,107,53,0.5)] active:scale-95 flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4 pl-4">
                <SocialLink icon={Github} href="https://github.com/rajstories" />
                <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/rajhub/" />
                <SocialLink icon={Instagram} href="https://www.instagram.com/the_rajstories" />
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL: 3D Character & Icons */}
        <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
            
            {/* Orbital Paths (Visual Guides) */}
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[350px] h-[350px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* 3D CHARACTER */}
            <div 
              className="relative z-20 w-[450px] h-[450px] transition-transform duration-100 ease-out flex items-center justify-center"
              style={{
                ...parallax(0.5), // Subtle movement
              }}
            >
                <div className="relative w-full h-full animate-float-character flex items-center justify-center">
                    {/* Back Glow - Ambient */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[80px] rounded-full -z-10" />

                    {/* Character Image */}
                    <img 
                        src={USER_IMAGE_URL} 
                        alt="3D Developer Avatar" 
                        className="max-w-[100%] max-h-[100%] w-auto h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,107,53,0.25)]"
                        style={{
                            filter: 'contrast(1.1) brightness(1.05)',
                            transform: 'scale(1.1) translateY(10px)' 
                        }}
                    />
                </div>
            </div>

            {/* FLOATING ICONS - Positioned relative to center */}
            
            {/* 1. TypeScript (Orange Shield) */}
            <FloatingIcon 
              className="absolute top-[15%] right-[15%]" 
              delay="0s" 
              parallaxX={mousePos.x * 2.5} 
              parallaxY={mousePos.y * 2}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#3178C6] to-[#235a96] rounded-[30%] flex items-center justify-center shadow-lg shadow-blue-500/30 relative overflow-hidden" style={{ clipPath: 'polygon(50% 0, 100% 15%, 100% 85%, 50% 100%, 0 85%, 0 15%)' }}>
                <span className="text-white font-black text-xl z-10">TS</span>
                <div className="absolute inset-0 bg-white/10 skew-x-12 -translate-x-4"></div>
              </div>
            </FloatingIcon>

            {/* 2. Python (Blue/Yellow) */}
            <FloatingIcon 
              className="absolute top-[45%] left-[5%]" 
              delay="1.2s" 
              parallaxX={mousePos.x * -2} 
              parallaxY={mousePos.y * -1.5}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#3776AB] to-[#26537a] rounded-[30%] flex items-center justify-center shadow-lg shadow-blue-500/30 relative overflow-hidden">
                 <span className="text-white font-black text-lg z-10">Py</span>
              </div>
            </FloatingIcon>

            {/* 3. JavaScript (Yellow Square) */}
            <FloatingIcon 
              className="absolute bottom-[15%] left-[30%]" 
              delay="2.5s" 
              parallaxX={mousePos.x * 1.5} 
              parallaxY={mousePos.y * 3}
            >
              <div className="w-14 h-14 bg-[#F7DF1E] rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20 transform -rotate-6">
                 <span className="text-black font-black text-xl">JS</span>
              </div>
            </FloatingIcon>

            {/* 4. React (Atom) */}
            <FloatingIcon 
              className="absolute top-[20%] left-[20%]" 
              delay="1.8s" 
              parallaxX={mousePos.x * -1.2} 
              parallaxY={mousePos.y * -1.2}
            >
              <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#61DAFB]/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(97,218,251,0.3)] group hover:bg-[#61DAFB]/10 transition-colors">
                 <Atom className="w-10 h-10 text-[#61DAFB] animate-[spin_10s_linear_infinite]" />
              </div>
            </FloatingIcon>

            {/* 5. Node.js (Green Hex) */}
            <FloatingIcon 
              className="absolute bottom-[20%] right-[10%]" 
              delay="3.2s" 
              parallaxX={mousePos.x * 3} 
              parallaxY={mousePos.y * 2}
            >
               <div className="w-16 h-16 bg-[#339933] flex items-center justify-center shadow-lg shadow-green-500/20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                 <span className="text-white font-bold text-sm tracking-tighter">NODE</span>
              </div>
            </FloatingIcon>

            {/* 6. Figma */}
            <FloatingIcon 
              className="absolute top-[10%] right-[35%]" 
              delay="0.5s" 
              parallaxX={mousePos.x * 2} 
              parallaxY={mousePos.y * 1}
            >
              <div className="w-12 h-12 bg-[#1e1e1e] border border-white/10 rounded-2xl flex items-center justify-center shadow-lg">
                 <Figma className="w-6 h-6 text-purple-400" />
              </div>
            </FloatingIcon>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 animate-pulse">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>

      <style>{`
        @keyframes float-character {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-character {
          animation: float-character 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

// Helper Components

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
    <Icon className="w-4 h-4" />
  </a>
);

interface FloatingIconProps {
  children: React.ReactNode;
  className: string;
  delay: string;
  parallaxX: number;
  parallaxY: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ children, className, delay, parallaxX, parallaxY }) => (
  <div 
    className={`${className} z-30 transition-transform duration-200 ease-out`}
    style={{ 
        transform: `translate(${parallaxX * 10}px, ${parallaxY * 10}px)`,
    }}
  >
    <div 
        className="animate-float-slow hover:scale-110 transition-transform duration-300" 
        style={{ animationDelay: delay }}
    >
        {children}
    </div>
  </div>
);

export default Hero;