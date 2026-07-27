import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun, Terminal as TerminalIcon } from 'lucide-react';
import { TerminalModal } from './TerminalModal';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-border py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <div className="font-mono text-xs tracking-tighter uppercase font-semibold text-mono-text cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            haseeb_javed_v1.0.js
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
            
          <div className="flex items-center gap-4 md:pl-4 md:border-l border-border md:ml-2">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="p-1.5 rounded bg-accent-soft text-accent hover:opacity-80 transition-opacity"
              aria-label="Open terminal"
            >
              <TerminalIcon size={16} />
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-4 bg-border rounded-full relative"
              aria-label="Toggle theme"
            >
              <span className={`absolute top-0.5 w-3 h-3 bg-surface rounded-full shadow-sm transition-all duration-300 ${theme === 'dark' ? 'left-4' : 'left-1'}`}></span>
            </button>
          </div>
        </div>
      </nav>
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
}
