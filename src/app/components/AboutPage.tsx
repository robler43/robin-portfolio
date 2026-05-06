import { ImageWithFallback } from './figma/ImageWithFallback';
import soccerImage from 'figma:asset/09f18757b56b611a453d55b416f7a82fec9c7551.png';
import swissDesignImage from 'figma:asset/d76ccfee70bb0cb99cb6d3ea4a0e88e9f8eae7f8.png';

interface AboutPageProps {
  onSectionChange: (section: string) => void;
}

export function AboutPage({ onSectionChange }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Journey Line - runs through entire page */}
      <div className="fixed left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-zinc-800 via-[rgb(37,208,171)] to-zinc-800 opacity-20 hidden lg:block" 
           style={{ transform: 'translateX(-50%)' }} 
      />

      {/* 1. HERO SECTION: The Current Chapter */}
      <section className="min-h-screen relative flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Soccer Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[rgb(37,208,171)] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-[4/5] overflow-hidden border-4 border-white/10 hover:border-[rgb(37,208,171)] transition-colors">
                <ImageWithFallback
                  src={soccerImage}
                  alt="Soccer player in action"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Image Note */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 border-l-2 border-[rgb(37,208,171)]">
                  <span className="text-[rgb(37,208,171)] font-mono text-xs tracking-wider">// ATHLETE</span>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 border border-[rgb(37,208,171)] text-[rgb(37,208,171)] text-xs tracking-widest mb-6 font-mono">
                  AUGUST 2023 – PRESENT
                </div>
                <h1 className="text-5xl lg:text-7xl mb-6 tracking-tight">
                  From the Alps <br />
                  <span className="text-white">to the Plains:</span> <br />
                  <span className="font-mono text-3xl lg:text-4xl text-[rgb(37,208,171)]">
                    Athlete, Designer, Coder.
                  </span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                  I'm a Computer Science student and collegiate athlete at Texas Tech University. 
                  My journey spans continents, connecting the user-focused precision of Swiss design 
                  with the competitive drive of American collegiate sports.
                </p>
              </div>

              {/* Code Visual */}
              <div className="relative aspect-video overflow-hidden border-2 border-[rgb(37,208,171)]/30 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY0NjAzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer coding"
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                {/* Image Note */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 border-l-2 border-[rgb(37,208,171)]">
                  <span className="text-[rgb(37,208,171)] font-mono text-xs tracking-wider">// CODER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDATION CHAPTER: Swiss Precision */}
      <section className="min-h-screen relative flex items-center bg-gradient-to-b from-black via-zinc-950 to-black py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Journey Node */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-16 rounded-full border-4 border-white bg-black flex items-center justify-center relative z-10">
              <div className="w-8 h-8 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl mb-4 tracking-tight">
              The <span className="text-[rgb(37,208,171)]">Foundation</span>
            </h2>
            <p className="text-xl text-zinc-400 font-mono">Designing for a Nation on the Move</p>
            <div className="mt-4 text-sm text-zinc-600 font-mono tracking-widest">PRIOR TO AUGUST 2023</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Swiss Railway Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[3/2] overflow-hidden">
                <ImageWithFallback
                  src={swissDesignImage}
                  alt="Swiss Design Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/10" />
              </div>
              
              {/* Swiss Design Elements */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-zinc-900 border-2 border-zinc-800 p-4 text-center">
                  <div className="text-3xl text-[rgb(37,208,171)] mb-2">+</div>
                  <div className="text-xs text-zinc-500 font-mono">PRECISION</div>
                </div>
                <div className="bg-zinc-900 border-2 border-zinc-800 p-4 text-center">
                  <div className="text-3xl text-white mb-2">=</div>
                  <div className="text-xs text-zinc-500 font-mono">CLARITY</div>
                </div>
                <div className="bg-zinc-900 border-2 border-zinc-800 p-4 text-center">
                  <div className="text-3xl text-[rgb(37,208,171)] mb-2">×</div>
                  <div className="text-xs text-zinc-500 font-mono">FUNCTION</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="border-l-4 border-[rgb(37,208,171)] pl-8 py-4">
                <h3 className="text-2xl mb-4">
                  UX Designer Apprentice @ <span className="text-[rgb(37,208,171)]">Swiss Federal Railways</span>
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Honed my skills in a world-renowned environment for precision and user-centricity. 
                  Learned that great design, like a punctual train, is about reliability and intuitive service.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[rgb(37,208,171)] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">User-Centered Design</div>
                    <div className="text-xs text-zinc-600 font-mono">Every pixel serves the passenger</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[rgb(37,208,171)] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Swiss Precision</div>
                    <div className="text-xs text-zinc-600 font-mono">Clean, minimal, purposeful interfaces</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[rgb(37,208,171)] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">System Thinking</div>
                    <div className="text-xs text-zinc-600 font-mono">Designing at scale for millions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ENGINE CHAPTER: The Athlete's Mindset */}
      <section className="min-h-screen relative flex items-center py-20 overflow-hidden">
        {/* Soccer Field Background */}
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641029185333-7ed62a19d5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ3MDA1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Soccer field"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Journey Node */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-16 rounded-full border-4 border-white bg-black flex items-center justify-center relative">
              <div className="w-8 h-8 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl mb-4 tracking-tight">
              The <span className="text-[rgb(37,208,171)]">Engine</span>
            </h2>
            <p className="text-xl text-zinc-400 font-mono">The Athlete's Mindset</p>
            <div className="mt-4 text-sm text-zinc-600 font-mono tracking-widest">SINCE 2009</div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-950/80 border-4 border-white p-12 backdrop-blur-sm">
              <p className="text-2xl lg:text-3xl leading-relaxed text-center mb-12">
                Soccer isn't just a game; it's where I forged my character.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[rgb(37,208,171)] flex items-center justify-center text-3xl">
                    🎯
                  </div>
                  <h3 className="text-lg">Individual Sharpness</h3>
                  <p className="text-sm text-zinc-400">
                    Constant refinement of skills through deliberate practice
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[rgb(37,208,171)] flex items-center justify-center text-3xl">
                    🤝
                  </div>
                  <h3 className="text-lg">Team Spirit</h3>
                  <p className="text-sm text-zinc-400">
                    Understanding that collective success requires clear communication
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[rgb(37,208,171)] flex items-center justify-center text-3xl">
                    📈
                  </div>
                  <h3 className="text-lg">Relentless Drive</h3>
                  <p className="text-sm text-zinc-400">
                    Never settling, always pushing to the next level
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t-2 border-[rgb(37,208,171)] pt-8">
                <p className="text-center text-lg text-zinc-300 font-mono">
                  I bring this same energy to every coding project and design challenge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CONVERGENCE CHAPTER: The Future */}
      <section className="min-h-screen relative flex items-center bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Journey Convergence Node */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Converging lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                <div className="absolute inset-0 border-t-4 border-white rotate-[-30deg] origin-center" />
                <div className="absolute inset-0 border-t-4 border-zinc-600 rotate-[30deg] origin-center" />
                <div className="absolute inset-0 border-t-4 border-[rgb(37,208,171)] rotate-0 origin-center" />
              </div>
              
              {/* Central node */}
              <div className="w-20 h-20 rounded-full border-4 border-[rgb(37,208,171)] bg-black flex items-center justify-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white via-zinc-400 to-[rgb(37,208,171)] animate-pulse" />
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl mb-4 tracking-tight">
              The <span className="bg-gradient-to-r from-white via-zinc-400 to-[rgb(37,208,171)] bg-clip-text text-transparent">Convergence</span>
            </h2>
            <p className="text-xl text-zinc-400 font-mono">Where Design Meets Code</p>
            <div className="mt-4 text-sm text-zinc-600 font-mono tracking-widest">AUGUST 2019 – FUTURE</div>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Main Content */}
            <div className="bg-zinc-900/50 border-2 border-[rgb(37,208,171)] p-10">
              <p className="text-2xl leading-relaxed text-center mb-8">
                Started my journey in August 2019, and now, all paths converge.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed text-center">
                I'm combining my UX background with my Computer Science studies to build software 
                that is not only powerful on the backend but also incredibly intuitive on the frontend. 
                <span className="text-[rgb(37,208,171)]"> I don't just write code; I design experiences.</span>
              </p>
            </div>

            {/* Skill Integration */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-950 border border-zinc-800 p-6 text-center hover:border-white transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🇨🇭</div>
                <div className="text-sm text-zinc-500 font-mono">SWISS PRECISION</div>
                <div className="text-xs text-zinc-600 mt-2">Clean, Purposeful Design</div>
              </div>
              
              <div className="bg-zinc-950 border border-zinc-800 p-6 text-center hover:border-white transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚽</div>
                <div className="text-sm text-zinc-500 font-mono">ATHLETE'S DRIVE</div>
                <div className="text-xs text-zinc-600 mt-2">Team-Focused Excellence</div>
              </div>
              
              <div className="bg-zinc-950 border border-zinc-800 p-6 text-center hover:border-[rgb(37,208,171)] transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <div className="text-sm text-zinc-500 font-mono">TECHNICAL MASTERY</div>
                <div className="text-xs text-zinc-600 mt-2">Full-Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FOOTER */}
      <section className="relative py-24 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl">
              Ready to <span className="text-[rgb(37,208,171)]">Join Your Team</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onSectionChange('Work')}
                className="px-8 py-4 bg-[rgb(37,208,171)] hover:bg-white text-black transition-colors border-2 border-[rgb(37,208,171)] hover:border-white cursor-pointer"
              >
                <span className="font-mono tracking-widest">VIEW MY WORK</span>
              </button>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <p className="text-lg text-zinc-400">
                Let's build something great together.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-600 font-mono">
                <span className="w-2 h-2 bg-[rgb(37,208,171)] rounded-full animate-pulse" />
                <span>READY TO DEPLOY</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}