import { X, Mail, Wallet } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MintCareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const companies = [
  { name: 'Google', tier: 2.0, logo: '🔍' },
  { name: 'Meta', tier: 2.0, logo: '👁️' },
  { name: 'Apple', tier: 2.0, logo: '🍎' },
  { name: 'Amazon', tier: 2.0, logo: '📦' },
  { name: 'Microsoft', tier: 2.0, logo: '🪟' },
  { name: 'Coinbase', tier: 1.8, logo: '💰' },
  { name: 'OpenAI', tier: 1.9, logo: '🤖' },
  { name: 'Stripe', tier: 1.8, logo: '💳' },
];

const roles = [
  { level: 'L1', name: 'Intern / Junior', multiplier: 1.0 },
  { level: 'L2', name: 'Mid-Level Operator', multiplier: 1.3 },
  { level: 'L3', name: 'Senior Architect', multiplier: 1.7 },
  { level: 'L4', name: 'Lead / Principal', multiplier: 2.2 },
  { level: 'L5', name: 'Executive / Founder', multiplier: 3.0 },
];

export function MintCareerModal({ isOpen, onClose }: MintCareerModalProps) {
  const [validator, setValidator] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [role, setRole] = useState('');
  const [selectedRole, setSelectedRole] = useState<typeof roles[0] | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDeploying, setIsDeploying] = useState(false);
  const [progressBar, setProgressBar] = useState('■■■□□');
  
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);
  
  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setValidator('');
      setOrganization('');
      setSelectedCompany(null);
      setRole('');
      setSelectedRole(null);
      setStartDate('');
      setEndDate('');
      setShowCompanyDropdown(false);
      setIsDeploying(false);
      setProgressBar('■■■□□');
    }
  }, [isOpen]);
  
  // Filter companies
  useEffect(() => {
    if (organization) {
      setFilteredCompanies(
        companies.filter(c => c.name.toLowerCase().includes(organization.toLowerCase()))
      );
      setShowCompanyDropdown(true);
    } else {
      setShowCompanyDropdown(false);
    }
  }, [organization]);
  
  // Calculate duration in months
  const calculateDuration = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return months;
  };
  
  const duration = calculateDuration();
  
  // Calculate XP
  const baseRate = 50;
  const roleMult = selectedRole?.multiplier || 1.0;
  const orgTier = selectedCompany?.tier || 1.0;
  const timeMonths = duration;
  const estimatedXP = Math.round(baseRate * roleMult * orgTier * timeMonths);
  
  // Detect if validator is email or wallet
  const isEmail = validator.includes('@');
  const isWallet = validator.length > 32 && !validator.includes('@');
  
  // Handle deploy
  const handleDeploy = () => {
    setIsDeploying(true);
    
    // Animate progress bar
    const progressSteps = ['■■■□□', '■■■■□', '■■■■■'];
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < progressSteps.length) {
        setProgressBar(progressSteps[step]);
        step++;
      } else {
        clearInterval(interval);
        // Close modal after completion
        setTimeout(() => {
          onClose();
        }, 500);
      }
    }, 800);
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-black border-2 border-[rgb(37,208,171)] rounded-xl w-full max-w-3xl shadow-[0_0_50px_rgba(37,208,171,0.3)] max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800 flex-shrink-0">
            <div className="flex-1">
              <h2 className="text-white mb-1">INITIALIZE CAREER ANCHOR</h2>
              <p className="text-zinc-500 text-sm mb-2">Protocol: SPL-Token-2022 // Type: Soulbound</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-zinc-400">Status:</span>
                <span className="text-[rgb(37,208,171)]">
                  [ ● READY FOR INPUT{cursorVisible && ' _'} ]
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {/* Validator Section */}
            <div>
              <label className="block text-[rgb(37,208,171)] mb-2 text-sm">
                &gt;&gt; ASSIGN VALIDATOR (ORACLE)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={validator}
                  onChange={(e) => setValidator(e.target.value)}
                  placeholder="Enter Admin Email or Wallet Address"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-[rgb(37,208,171)] focus:outline-none pr-12"
                />
                {isEmail && (
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(37,208,171)]" />
                )}
                {isWallet && (
                  <Wallet className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(37,208,171)]" />
                )}
              </div>
              <p className="text-zinc-500 text-xs mt-2">
                This entity must cryptographically sign your claim to mint the asset.
              </p>
            </div>
            
            {/* Organization Section */}
            <div>
              <label className="block text-[rgb(37,208,171)] mb-2 text-sm">
                &gt;&gt; ORGANIZATION_ID
              </label>
              
              {selectedCompany ? (
                <div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedCompany.logo}</span>
                    <div>
                      <div className="text-white">{selectedCompany.name}</div>
                      <div className="text-zinc-500 text-xs">Tier Multiplier: {selectedCompany.tier}x</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCompany(null);
                      setOrganization('');
                    }}
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => {
                      setOrganization(e.target.value);
                      setSelectedCompany(null);
                    }}
                    placeholder="Search Company Database..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-[rgb(37,208,171)] focus:outline-none"
                  />
                  
                  {/* Dropdown */}
                  {showCompanyDropdown && filteredCompanies.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden z-10 max-h-48 overflow-y-auto">
                      {filteredCompanies.map((company) => (
                        <button
                          key={company.name}
                          onClick={() => {
                            setOrganization(company.name);
                            setSelectedCompany(company);
                            setShowCompanyDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-zinc-900 transition-colors flex items-center gap-3"
                        >
                          <span className="text-2xl">{company.logo}</span>
                          <div className="flex-1">
                            <div className="text-white">{company.name}</div>
                            <div className="text-zinc-500 text-xs">Tier Multiplier: {company.tier}x</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Role Section */}
            <div>
              <label className="block text-[rgb(37,208,171)] mb-2 text-sm">
                &gt;&gt; ROLE_SPEC
              </label>
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  const selected = roles.find(r => r.level === e.target.value);
                  setSelectedRole(selected || null);
                }}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-[rgb(37,208,171)] focus:outline-none"
              >
                <option value="">Select Class</option>
                {roles.map((r) => (
                  <option key={r.level} value={r.level}>
                    {r.level}: {r.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Timeframe Section */}
            <div>
              <label className="block text-[rgb(37,208,171)] mb-2 text-sm">
                &gt;&gt; TIMEFRAME (BLOCK HEIGHT)
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-[rgb(37,208,171)] focus:outline-none"
                />
                <span className="text-zinc-500">—</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-[rgb(37,208,171)] focus:outline-none"
                />
              </div>
              {duration > 0 && (
                <p className="text-zinc-400 text-sm mt-2">
                  Duration: <span className="text-[rgb(37,208,171)]">{duration} Months</span>
                </p>
              )}
            </div>
            
            {/* XP Oracle Preview */}
            <div className="border-2 border-dashed border-zinc-800 rounded-lg p-4 bg-zinc-950">
              <div className="text-sm space-y-1">
                <div className="text-zinc-400 mb-2">CALCULATING YIELD...</div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">&gt; Base Rate:</span>
                  <span className="text-white">{baseRate} XP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">&gt; Role Mult:</span>
                  <span className="text-white">
                    {roleMult.toFixed(1)}x {selectedRole && `(${selectedRole.name.split(' / ')[0]})`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">&gt; Org Tier:</span>
                  <span className="text-white">
                    {orgTier.toFixed(1)}x {selectedCompany && `(${selectedCompany.name})`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">&gt; Time Factor:</span>
                  <span className="text-white">{timeMonths}m</span>
                </div>
                <div className="border-t border-zinc-800 mt-2 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[rgb(37,208,171)]">&gt;&gt; ESTIMATED OUTPUT:</span>
                    <span className="text-[rgb(37,208,171)] text-lg">{estimatedXP.toLocaleString()} XP</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <div>
              <button
                disabled={!validator || !selectedCompany || !selectedRole || !startDate || !endDate || isDeploying}
                className={`w-full py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDeploying 
                    ? 'bg-white text-black cursor-not-allowed' 
                    : 'bg-[rgb(37,208,171)] text-black hover:bg-[rgb(45,220,183)]'
                }`}
                onClick={handleDeploy}
              >
                {isDeploying ? `>> CONFIRMING BLOCK... [ ${progressBar} ]` : '⚡ DEPLOY CLAIM REQUEST'}
              </button>
              <p className="text-zinc-500 text-xs text-center mt-2">
                Gas Fee: ~0.00005 SOL
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}