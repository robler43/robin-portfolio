import profileImage from 'figma:asset/102e2325b1881d5e058b3c92a8bc29db3f878da4.png';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Player Stats */}
        <div>
          {/* System Status */}
          <div className="mb-6 md:mb-8">
            <div className="text-zinc-500 text-xs md:text-sm font-mono mb-2">$ system.status --check</div>
            <div className="text-[rgb(37,208,171)] font-mono mb-1 text-sm md:text-base">
              {'>'} CLASS_LOADED: <span className="text-white">[ATHLETE, DESIGNER, BUILDER]</span>
            </div>
            <div className="text-zinc-600 text-xs md:text-sm font-mono">✓ All systems operational</div>
          </div>
          
          {/* Mission Briefing Box */}
          <div className="border-2 border-zinc-800 bg-zinc-950/50 p-4 md:p-6 relative">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-[rgb(37,208,171)]" />
            <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-[rgb(37,208,171)]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-[rgb(37,208,171)]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-[rgb(37,208,171)]" />
            
            <div className="mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-[rgb(37,208,171)] rounded-full animate-pulse" />
              <span className="text-[rgb(37,208,171)] text-xs font-mono uppercase tracking-wider">Mission Briefing</span>
            </div>
            
            <div className="text-zinc-300 leading-relaxed font-mono text-xs md:text-sm">
              <span className="text-zinc-600">{'>> '}</span>
              Full Stack Developer. Blockchain Architect. UX Advocate. Building intelligent, decentralized systems without sacrificing usability.
              <span className="blinking-cursor text-[rgb(37,208,171)]">|</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
            <div className="border border-zinc-800 bg-zinc-950/30 p-3 md:p-4 text-center">
              <div className="text-[rgb(37,208,171)] text-xl md:text-2xl font-mono">4</div>
              <div className="text-zinc-500 text-xs font-mono mt-1">HACKATHONS</div>
            </div>
            <div className="border border-zinc-800 bg-zinc-950/30 p-3 md:p-4 text-center">
              <div className="text-[rgb(37,208,171)] text-xl md:text-2xl font-mono">100%</div>
              <div className="text-zinc-500 text-xs font-mono mt-1">WIN RATE</div>
            </div>
          </div>
        </div>

        {/* Right Side - Wireframe Avatar */}
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative">
            {/* Avatar Frame */}
            <div className="relative p-6 md:p-8 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center border-2 border-zinc-800 bg-zinc-950/50">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-[rgb(37,208,171)]" />
              <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-[rgb(37,208,171)]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-[rgb(37,208,171)]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-[rgb(37,208,171)]" />
              
              {/* Pixel Art Avatar Image */}
              <div className="text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 relative">
                  <img 
                    src={profileImage} 
                    alt="Pixel art avatar" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-mono text-[rgb(37,208,171)] text-xs md:text-sm">
                  <div>{'<DESIGNER_ID: RH_2026 />'}</div>
                  <div className="text-zinc-600 text-xs mt-2">STATUS: ACTIVE</div>
                </div>
              </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[rgb(37,208,171)] to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}