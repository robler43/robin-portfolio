import { QrCode, Briefcase, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ScanEventModal } from './ScanEventModal';
import { MintCareerModal } from './MintCareerModal';

export function ActionDock() {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [isMintCareerModalOpen, setIsMintCareerModalOpen] = useState(false);
  
  const actions = [
    {
      title: 'Check In',
      description: 'Verify attendance and earn XP',
      icon: QrCode,
      onClick: () => setIsScanModalOpen(true),
    },
    {
      title: 'Mint Career',
      description: 'Add your work history',
      icon: Briefcase,
      onClick: () => setIsMintCareerModalOpen(true),
    },
    {
      title: 'Find Opportunities',
      description: 'Discover hackathons and events',
      icon: TrendingUp,
    }
  ];

  return (
    <>
      <section className="flex-shrink-0">
        <h3 className="text-white mb-3">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.title}
                onClick={action.onClick}
                className="group relative bg-black rounded-xl p-4 text-left transition-all duration-200 hover:scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)]"
              >
                {/* Solid Border */}
                <div className="absolute inset-0 rounded-xl bg-[rgb(37,208,171)] opacity-100 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] rounded-[10px] bg-black" />
                
                {/* Content */}
                <div className="relative flex items-start gap-3">
                  <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg group-hover:border-zinc-700 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1">{action.title}</h4>
                    <p className="text-zinc-500 text-sm">{action.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
      
      <ScanEventModal 
        isOpen={isScanModalOpen}
        onClose={() => setIsScanModalOpen(false)}
      />
      
      <MintCareerModal 
        isOpen={isMintCareerModalOpen}
        onClose={() => setIsMintCareerModalOpen(false)}
      />
    </>
  );
}