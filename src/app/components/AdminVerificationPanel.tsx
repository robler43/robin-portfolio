import { X, Trash2, Zap, Clock } from 'lucide-react';
import { useState } from 'react';

interface AdminVerificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PendingClaim {
  id: string;
  user: {
    name: string;
    wallet: string;
    avatar: string;
  };
  role: {
    level: string;
    title: string;
    multiplier: number;
  };
  company: {
    name: string;
    tier: number;
    logo: string;
  };
  duration: {
    start: string;
    end: string;
    months: number;
  };
  estimatedXP: number;
  timestamp: string;
}

const mockClaims: PendingClaim[] = [
  {
    id: '1',
    user: {
      name: 'Alex Chen',
      wallet: '0x742d...a91f',
      avatar: '👨‍💻',
    },
    role: {
      level: 'L5',
      title: 'Principal Developer',
      multiplier: 3.0,
    },
    company: {
      name: 'Google',
      tier: 2.0,
      logo: '🔍',
    },
    duration: {
      start: 'Jan 2022',
      end: 'Present',
      months: 38,
    },
    estimatedXP: 3200,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: {
      name: 'Sarah Park',
      wallet: '0x8f3c...d24e',
      avatar: '👩‍🎨',
    },
    role: {
      level: 'L3',
      title: 'Senior Architect',
      multiplier: 1.7,
    },
    company: {
      name: 'Meta',
      tier: 2.0,
      logo: '👁️',
    },
    duration: {
      start: 'Mar 2021',
      end: 'Dec 2023',
      months: 33,
    },
    estimatedXP: 2822,
    timestamp: '5 hours ago',
  },
  {
    id: '3',
    user: {
      name: 'Marcus Johnson',
      wallet: '0x1a2b...c3d4',
      avatar: '🧑‍💼',
    },
    role: {
      level: 'L2',
      title: 'Mid-Level Operator',
      multiplier: 1.3,
    },
    company: {
      name: 'Coinbase',
      tier: 1.8,
      logo: '💰',
    },
    duration: {
      start: 'Jun 2022',
      end: 'Present',
      months: 30,
    },
    estimatedXP: 1755,
    timestamp: '1 day ago',
  },
];

export function AdminVerificationPanel({ isOpen, onClose }: AdminVerificationPanelProps) {
  const [claims, setClaims] = useState<PendingClaim[]>(mockClaims);
  const [selectedClaimId, setSelectedClaimId] = useState<string>(mockClaims[0]?.id || '1');
  
  const selectedClaim = claims.find(c => c.id === selectedClaimId) || claims[0];
  const baseRate = 50;
  
  const handleApprove = (id: string) => {
    setClaims(claims.filter(claim => claim.id !== id));
  };
  
  const handleReject = (id: string) => {
    setClaims(claims.filter(claim => claim.id !== id));
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Panel Content */}
      <div className="bg-black border border-zinc-800 rounded-xl flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 flex-shrink-0">
          <div>
            <h2 className="text-white mb-1">ADMIN VERIFICATION TERMINAL</h2>
            <p className="text-zinc-500 text-sm">Oracle Mode: Organization Validator</p>
          </div>
        </div>
        
        {/* Main Content - 2 Column Layout */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Sidebar - Incoming Signals Queue (30%) */}
          <div className="w-[30%] border-r border-zinc-800 flex flex-col">
            <div className="p-3 border-b border-zinc-800 flex-shrink-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[rgb(37,208,171)]">PENDING VERIFICATIONS</h3>
                <div className="bg-[rgb(37,208,171)] text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {claims.length}
                </div>
              </div>
              <p className="text-zinc-500 text-xs">Select claim to review</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {claims.map((claim) => (
                <button
                  key={claim.id}
                  onClick={() => setSelectedClaimId(claim.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedClaimId === claim.id
                      ? 'border-[rgb(37,208,171)] bg-[rgb(37,208,171)]/10 shadow-[0_0_20px_rgba(37,208,171,0.3)]'
                      : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{claim.user.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-white truncate">{claim.user.name}</div>
                        <Clock className="w-3 h-3 text-zinc-500 flex-shrink-0" />
                      </div>
                      <div className="text-zinc-400 text-sm mb-1">{claim.user.wallet}</div>
                      <div className="text-zinc-500 text-xs mb-2">{claim.role.title}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-[rgb(37,208,171)] text-xs">+{claim.estimatedXP.toLocaleString()} XP</span>
                        <span className="text-zinc-600 text-xs">{claim.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Panel - Verification Terminal (70%) */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* XP Header */}
              <div className="text-center py-4 border-b border-zinc-800">
                <div className="text-4xl text-[rgb(37,208,171)] mb-2 font-mono">
                  +{selectedClaim.estimatedXP.toLocaleString()} XP
                </div>
                <div className="text-zinc-400">CLAIM ESTIMATE</div>
                <div className="text-zinc-600 text-sm mt-2">Status: Awaiting Organization Signature</div>
              </div>
              
              {/* Bento Grid - Data Panels */}
              <div className="grid grid-cols-2 gap-3">
                
                {/* Panel 1 - User Info */}
                <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-950/50 backdrop-blur">
                  <div className="text-zinc-500 text-sm mb-3">&gt;&gt; CLAIMANT</div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{selectedClaim.user.avatar}</div>
                    <div>
                      <div className="text-white mb-1">{selectedClaim.user.name}</div>
                      <div className="text-zinc-400 text-sm font-mono">{selectedClaim.user.wallet}</div>
                    </div>
                  </div>
                </div>
                
                {/* Panel 2 - Role Spec */}
                <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-950/50 backdrop-blur">
                  <div className="text-zinc-500 text-sm mb-3">&gt;&gt; ROLE_SPEC</div>
                  <div className="text-white text-xl mb-2">{selectedClaim.role.title}</div>
                  <div className="text-zinc-400 text-sm">
                    Level: <span className="text-[rgb(37,208,171)]">{selectedClaim.role.level}</span>
                  </div>
                  <div className="text-zinc-400 text-sm">
                    Multiplier: <span className="text-[rgb(37,208,171)]">{selectedClaim.role.multiplier}x</span>
                  </div>
                </div>
                
                {/* Panel 3 - Organization */}
                <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-950/50 backdrop-blur">
                  <div className="text-zinc-500 text-sm mb-3">&gt;&gt; ORGANIZATION</div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{selectedClaim.company.logo}</div>
                    <div className="text-white text-xl">{selectedClaim.company.name}</div>
                  </div>
                  <div className="text-zinc-400 text-sm">
                    Tier Multiplier: <span className="text-[rgb(37,208,171)]">{selectedClaim.company.tier}x</span>
                  </div>
                </div>
                
                {/* Panel 4 - Duration */}
                <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-950/50 backdrop-blur">
                  <div className="text-zinc-500 text-sm mb-3">&gt;&gt; TIMEFRAME</div>
                  <div className="text-white mb-2">
                    {selectedClaim.duration.start} — {selectedClaim.duration.end}
                  </div>
                  <div className="text-[rgb(37,208,171)]">
                    {selectedClaim.duration.months} Months
                  </div>
                </div>
                
              </div>
              
              {/* Multiplier Effect Breakdown */}
              <div className="border-2 border-dashed border-zinc-800 rounded-lg p-4 bg-zinc-950">
                <div className="text-[rgb(37,208,171)] mb-3">&gt;&gt; MULTIPLIER EFFECT</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Base Rate:</span>
                    <span className="text-white font-mono">{baseRate} XP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">× Role Multiplier ({selectedClaim.role.level}):</span>
                    <span className="text-white font-mono">{selectedClaim.role.multiplier}x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">× Company Tier ({selectedClaim.company.name}):</span>
                    <span className="text-white font-mono">{selectedClaim.company.tier}x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">× Time Factor:</span>
                    <span className="text-white font-mono">{selectedClaim.duration.months}m</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-2 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(37,208,171)]">= Total XP Output:</span>
                      <span className="text-[rgb(37,208,171)] font-mono text-lg">
                        {selectedClaim.estimatedXP.toLocaleString()} XP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Action Footer */}
            <div className="border-t border-zinc-800 p-4 flex-shrink-0 bg-black">
              <div className="flex gap-4">
                
                {/* Reject Button */}
                <button className="flex-1 border-2 border-red-500/50 text-red-500 py-3 rounded-lg hover:bg-red-500/10 transition-all flex items-center justify-center gap-2 group">
                  <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>REJECT CLAIM</span>
                </button>
                
                {/* Approve Button */}
                <div className="flex-[2]">
                  <button className="w-full bg-[rgb(37,208,171)] text-black py-3 rounded-lg hover:bg-[rgb(45,220,183)] transition-all shadow-[0_0_30px_rgba(37,208,171,0.4)] flex items-center justify-center gap-2 group">
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>SIGN & MINT SBT</span>
                  </button>
                  <p className="text-zinc-500 text-xs text-center mt-2">
                    Requires wallet signature. Network fee approx 0.00005 SOL
                  </p>
                </div>
                
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}