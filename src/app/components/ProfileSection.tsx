import { Trophy, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileSectionProps {
  onXPClick?: () => void;
}

export function ProfileSection({ onXPClick }: ProfileSectionProps) {
  const currentXP = 8200;
  const nextLevelXP = 9400;
  const currentLevel = 5;
  const nextLevel = 6;
  const xpToNext = nextLevelXP - currentXP;
  const progressPercentage = (currentXP / nextLevelXP) * 100;

  return (
    <section className="flex-shrink-0">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)]">
        
        <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-zinc-900 border-2 border-zinc-700 overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1660644808219-1f103401bc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZnQlMjBjcnlwdG8lMjBhcnR8ZW58MXx8fHwxNzY0NjQzMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile NFT"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Level Badge */}
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              <div className="bg-black rounded-full px-3 py-1 flex items-center gap-1 border border-zinc-700">
                <Trophy className="w-4 h-4 text-white" />
                <span className="text-white">{currentLevel}</span>
              </div>
            </div>
          </div>
          
          {/* Identity Summary */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1 mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                <Zap className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300">Principal Engineer</span>
              </div>
              
              {/* Level - Highly Prominent */}
              <div className="flex items-baseline gap-3 mb-2">
                <h1 className="text-white">
                  Level
                </h1>
                <span className="text-white">
                  {currentLevel}
                </span>
              </div>
              
              {/* Current XP - Highly Prominent */}
              <button 
                onClick={onXPClick}
                className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 mb-3 inline-block shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-[rgb(37,208,171)] hover:bg-zinc-900/80 transition-all cursor-pointer group"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-zinc-400">Total XP:</span>
                  <span className="text-white group-hover:text-[rgb(37,208,171)] transition-colors">{currentXP.toLocaleString()}</span>
                </div>
              </button>
            </div>
            
            {/* XP Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Progress to Level {nextLevel}</span>
                <span className="text-zinc-300">{currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
              </div>
              <div className="h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
                <div 
                  className="h-full bg-[rgb(37,208,171)] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-zinc-500">{xpToNext.toLocaleString()} XP to Level {nextLevel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}