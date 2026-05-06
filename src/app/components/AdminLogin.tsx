import { Shield, Lock, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AdminLoginProps {
  onLogin: (company: { name: string; tier: number; logo: string }) => void;
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

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  
  // Demo admin password - in production this would be handled by backend auth
  const ADMIN_PASSWORD = 'admin123';
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCompany) {
      setError('Please select an organization');
      setTimeout(() => setError(''), 3000);
      return;
    }
    if (password === ADMIN_PASSWORD) {
      onLogin(selectedCompany);
    } else {
      setError('Invalid admin credentials');
      setTimeout(() => setError(''), 3000);
    }
  };
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Dot Grid Background Pattern */}
      <div 
        className="fixed inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle, #71717a 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative w-full max-w-md px-4">
        {/* Admin Login Card */}
        <div className="bg-black border-2 border-[rgb(37,208,171)] rounded-xl p-8 shadow-[0_0_50px_rgba(37,208,171,0.3)]">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-zinc-900 border border-[rgb(37,208,171)] rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-[rgb(37,208,171)]" />
            </div>
            <h1 className="text-white text-2xl mb-2">Admin Access</h1>
            <p className="text-zinc-500 text-sm text-center">
              Restricted Area - Authorized Personnel Only
            </p>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Admin Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[rgb(37,208,171)] transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Organization</label>
              
              {selectedCompany ? (
                <div className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedCompany.logo}</span>
                    <div>
                      <div className="text-white">{selectedCompany.name}</div>
                      <div className="text-zinc-500 text-xs">Tier Multiplier: {selectedCompany.tier}x</div>
                    </div>
                  </div>
                  <button
                    type="button"
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
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[rgb(37,208,171)] transition-colors"
                  />
                  
                  {/* Dropdown */}
                  {showCompanyDropdown && filteredCompanies.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden z-10 max-h-48 overflow-y-auto">
                      {filteredCompanies.map((company) => (
                        <button
                          key={company.name}
                          type="button"
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
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-[rgb(37,208,171)] text-black py-3 rounded-lg hover:bg-[rgb(45,220,183)] transition-colors"
            >
              Access Admin Panel
            </button>
          </form>
          
          {/* Demo Info */}
          <div className="mt-6 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <p className="text-zinc-500 text-xs mb-2">Demo Credentials:</p>
            <p className="text-zinc-400 text-sm">Password: <code className="text-[rgb(37,208,171)]">admin123</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}