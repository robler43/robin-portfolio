import { X, ArrowUp, Zap, Trophy, Users, Briefcase, Target } from 'lucide-react';
import { motion } from 'motion/react';

interface XPDetailViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function XPDetailView({ isOpen, onClose }: XPDetailViewProps) {
  const activities = [
    {
      id: 1,
      timestamp: '2024.11.28 // 14:42:05 PST',
      title: 'Neural Link Established',
      subtitle: 'Source: Senior Developer @ TechCorp',
      xp: 2500,
      tier: 'high',
      icon: Briefcase,
    },
    {
      id: 2,
      timestamp: '2024.11.25 // 09:15:22 PST',
      title: 'Hackathon Victory: Tier 1',
      subtitle: 'Source: ETHGlobal NYC 2024',
      xp: 1500,
      tier: 'high',
      icon: Trophy,
    },
    {
      id: 3,
      timestamp: '2024.11.24 // 16:30:45 PST',
      title: 'Event Check-In Confirmed',
      subtitle: 'Source: Devcon Southeast Asia',
      xp: 500,
      tier: 'medium',
      icon: Users,
    },
    {
      id: 4,
      timestamp: '2024.11.22 // 11:20:18 PST',
      title: 'Career Anchor Minted',
      subtitle: 'Source: Lead Engineer @ StartupXYZ',
      xp: 3000,
      tier: 'high',
      icon: Zap,
    },
    {
      id: 5,
      timestamp: '2024.11.20 // 19:45:33 PST',
      title: 'Hackathon Completion',
      subtitle: 'Source: Solana Breakpoint',
      xp: 1200,
      tier: 'medium',
      icon: Trophy,
    },
    {
      id: 6,
      timestamp: '2024.11.18 // 13:10:55 PST',
      title: 'Quest Milestone Reached',
      subtitle: 'Source: Sector 4 Questline',
      xp: 800,
      tier: 'medium',
      icon: Target,
    },
    {
      id: 7,
      timestamp: '2024.11.15 // 10:05:12 PST',
      title: 'Skill Verification',
      subtitle: 'Source: Web3 Developer Track',
      xp: 600,
      tier: 'low',
      icon: Zap,
    },
    {
      id: 8,
      timestamp: '2024.11.12 // 15:30:40 PST',
      title: 'Network Sync Complete',
      subtitle: 'Source: Community Engagement',
      xp: 300,
      tier: 'low',
      icon: Users,
    }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Clean Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black"
      >
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-5xl mx-4 h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-white mb-2 tracking-wider">XP History</h1>
          <p className="text-zinc-500 font-mono">Total Accumulated: 8,200 XP</p>
          <div className="h-px bg-zinc-800 mt-4" />
        </div>

        {/* Activity Stream Container */}
        <div className="flex-1 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
          <div className="h-full overflow-y-auto p-6 space-y-3 custom-scrollbar">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * index, duration: 0.3 }}
                  className="relative border border-zinc-800 rounded-lg p-4 bg-black hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    {/* Left: Timestamp */}
                    <div className="flex-shrink-0 w-48">
                      <div className="font-mono text-sm text-zinc-600 leading-tight">
                        {activity.timestamp.split(' // ').map((part, i) => (
                          <div key={i}>{part}</div>
                        ))}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Icon className="w-5 h-5 text-zinc-400" />
                    </div>

                    {/* Center: Activity Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white mb-0.5">
                        {activity.title}
                      </h3>
                      <p className="text-zinc-500 font-mono text-sm">
                        {activity.subtitle}
                      </p>
                    </div>

                    {/* Right: XP Gain */}
                    <div className="flex-shrink-0 text-right">
                      <div className="flex items-center gap-2">
                        <div className="font-mono text-[rgb(37,208,171)]">
                          +{activity.xp}
                        </div>
                        <ArrowUp className="w-4 h-4 text-[rgb(37,208,171)]" />
                      </div>
                      <div className="text-zinc-600 font-mono text-sm mt-0.5">XP</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer - Close Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg font-mono text-zinc-400 hover:border-zinc-700 hover:text-white transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <X className="w-4 h-4" />
              Close
            </span>
          </button>
        </div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(63, 63, 70, 0.5);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(63, 63, 70, 0.8);
        }
      `}</style>
    </motion.div>
  );
}
