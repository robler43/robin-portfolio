import { Terminal, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/home', isExternal: false },
    { name: 'About', path: '/about', isExternal: false },
    { name: 'Work', path: '/work', isExternal: false },
    { name: 'Resume', path: './resume.exe', isExternal: true, url: 'https://rhoesli.xyz/pdf/cv.pdf' }
  ];

  return (
    <nav className="border-b border-[rgb(37,208,171)] bg-zinc-950/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 font-mono text-sm">
          {/* Terminal Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[rgb(37,208,171)]" />
            <span className="text-[rgb(37,208,171)] hidden sm:inline">root@rhoesli:~$</span>
            <span className="text-[rgb(37,208,171)] sm:hidden">root</span>
          </div>

          {/* Desktop Navigation Links and Social Icons */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-wide transition-colors text-zinc-400 hover:text-white"
                >
                  {item.path}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => onSectionChange(item.name)}
                  className={`tracking-wide transition-colors ${
                    activeSection === item.name
                      ? 'text-[rgb(37,208,171)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.path}
                </button>
              )
            ))}
            
            {/* Social Links */}
            <div className="flex items-center gap-4 ml-4 border-l border-zinc-800 pl-4">
              <a
                href="https://github.com/robler43"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[rgb(37,208,171)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/robinn_ho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[rgb(37,208,171)] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-zinc-900 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[rgb(37,208,171)]" />
            ) : (
              <Menu className="w-5 h-5 text-[rgb(37,208,171)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 z-40 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="absolute top-16 inset-x-0 bg-zinc-950 border-b border-zinc-800 z-50 md:hidden">
            <div className="container mx-auto px-4 py-4 max-w-7xl">
              {/* Navigation Items */}
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 px-4 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.path}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      onSectionChange(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left py-3 px-4 rounded transition-colors ${
                      activeSection === item.name
                        ? 'text-[rgb(37,208,171)] bg-zinc-900 border-l-2 border-[rgb(37,208,171)]'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    {item.path}
                  </button>
                )
              ))}

              {/* Social Links */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-zinc-800 px-4">
                <a
                  href="https://github.com/robler43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[rgb(37,208,171)] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/robinn_ho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[rgb(37,208,171)] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}