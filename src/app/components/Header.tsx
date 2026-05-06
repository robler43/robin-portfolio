import { Bell, Wallet, Home, Settings, User, Briefcase, Trophy, Activity, LogOut, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout?: () => void;
}

export function Header({ activeTab, onTabChange, onLogout }: HeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const tabs = [
    { name: 'Dashboard', icon: Home },
    { name: 'Activity', icon: Activity },
    { name: 'Opportunities', icon: Briefcase },
    { name: 'Leaderboard', icon: Trophy },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <>
      <header className="border-b border-zinc-800 bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center">
                <span className="text-white">🔐</span>
              </div>
              <div>
                <h1 className="text-white">passport.xyz</h1>
                <p className="text-zinc-500 text-sm hidden sm:block">Building your reputation on-chain</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-zinc-900 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-zinc-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              
              {/* Wallet Status - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2">
                <Wallet className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300">robin.eth</span>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              
              {/* User Menu */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 md:px-4 py-2 hover:bg-zinc-800 transition-colors"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <User className="w-4 h-4 text-zinc-400" />
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isUserMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-56 bg-zinc-950 border-2 border-zinc-800 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.8)] z-50 overflow-hidden">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-zinc-800">
                        <p className="text-zinc-400 text-xs mb-1">Signed in as</p>
                        <p className="text-white">robin.eth</p>
                        <p className="text-zinc-500 text-xs mt-1">0x742d...a91f</p>
                      </div>
                      
                      {/* Logout Button */}
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          onLogout?.();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-zinc-300 hover:bg-zinc-900 transition-colors text-left group"
                      >
                        <LogOut className="w-4 h-4 text-zinc-400 group-hover:text-red-400 transition-colors" />
                        <span className="group-hover:text-red-400 transition-colors">Logout</span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-zinc-900 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-zinc-400" />
                ) : (
                  <Menu className="w-5 h-5 text-zinc-400" />
                )}
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex gap-8 -mb-px justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                    tab.name === activeTab
                      ? 'border-[rgb(37,208,171)] text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                  onClick={() => onTabChange(tab.name)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/80 z-40 md:hidden" 
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed inset-x-0 top-[73px] bg-zinc-950 border-t border-zinc-800 z-50 md:hidden">
              <nav className="container mx-auto px-4 py-4 max-w-7xl">
                {/* Wallet Status on Mobile */}
                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 mb-3">
                  <Wallet className="w-4 h-4 text-zinc-400" />
                  <span className="text-zinc-300">robin.eth</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full ml-auto" />
                </div>

                {/* Mobile Navigation Items */}
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.name}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        tab.name === activeTab
                          ? 'bg-zinc-900 text-[rgb(37,208,171)] border-l-2 border-[rgb(37,208,171)]'
                          : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300'
                      }`}
                      onClick={() => {
                        onTabChange(tab.name);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}