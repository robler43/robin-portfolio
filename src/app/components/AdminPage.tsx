import { Shield, LogOut } from 'lucide-react';
import { AdminVerificationPanel } from './AdminVerificationPanel';

interface AdminPageProps {
  onLogout: () => void;
  company: { name: string; tier: number; logo: string };
}

export function AdminPage({ onLogout, company }: AdminPageProps) {
  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Dot Grid Background Pattern */}
      <div 
        className="fixed inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle, #71717a 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative flex flex-col h-full">
        {/* Admin Header - Consistent with User Interface */}
        <header className="border-b border-zinc-800 bg-black flex-shrink-0 z-50">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between py-4">
              {/* Left - Logo and Title (same as user interface) */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center">
                  <span className="text-white">🔐</span>
                </div>
                <div>
                  <h1 className="text-white">passport.xyz</h1>
                  <p className="text-zinc-500 text-sm">Building your reputation on-chain</p>
                </div>
              </div>
              
              {/* Right - Company Badge and Logout */}
              <div className="flex items-center gap-4">
                {/* Company Badge */}
                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2">
                  <span className="text-xl">{company.logo}</span>
                  <div>
                    <p className="text-white text-sm">{company.name}</p>
                    <p className="text-zinc-500 text-xs">Admin Access</p>
                  </div>
                </div>
                
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
            
            {/* Navigation Tabs - Center with Admin Panel */}
            <nav className="flex gap-8 -mb-px justify-center">
              <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[rgb(37,208,171)] text-white">
                <Shield className="w-4 h-4" />
                <span>Admin Panel</span>
              </div>
            </nav>
          </div>
        </header>
        
        {/* Admin Content */}
        <main className="container mx-auto px-4 py-4 max-w-7xl flex-1 overflow-hidden">
          <AdminVerificationPanel isOpen={true} onClose={() => {}} />
        </main>
      </div>
    </div>
  );
}