import { LandingHeader } from "./LandingHeader";
import { Shield } from "lucide-react";

interface LandingPageProps {
  onSignUp: () => void;
}

export function LandingPage({ onSignUp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <LandingHeader />
      
      {/* Dot Grid Background */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(37, 208, 171) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center px-4 max-w-4xl mx-auto relative">
            {/* Main Heading */}
            <h1 className="text-white mb-6 relative z-10">
              Building your reputation on-chain
            </h1>
            
            {/* Subtitle */}
            <p className="text-zinc-400 mb-12 max-w-2xl mx-auto relative z-10">
              Trusted on-chain careerspace for developer & recruiter
            </p>
            
            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 relative z-10">
              <button 
                onClick={onSignUp}
                className="bg-white text-black px-8 py-4 rounded-xl hover:bg-zinc-200 transition-colors shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
              >
                Sign Up
              </button>
              <button 
                onClick={onSignUp}
                className="bg-zinc-900 text-white border border-zinc-700 px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              >
                Log In
              </button>
            </div>
            
            {/* Temporary Admin Access - Demo Only */}
            <div className="mt-12 relative z-10">
              <div className="inline-block">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/50" />
                  <span className="text-yellow-500 text-xs tracking-widest animate-pulse">
                    DEMO ACCESS
                  </span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/50" />
                </div>
                <button
                  onClick={() => window.location.href = '/admin'}
                  className="group relative bg-zinc-950 border-2 border-dashed border-yellow-500/50 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500/10 transition-all flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Admin Panel</span>
                  <span className="text-xs opacity-60">(Temporary)</span>
                </button>
                <p className="text-zinc-600 text-xs mt-2">
                  Password: <code className="text-yellow-500/70">admin123</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}