import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 py-6 border-t border-border relative z-10 bg-bg">
      <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[10px] font-mono text-mono-text">
          © {new Date().getFullYear()} / karachi, pk
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/haseebjaved4212" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-mono-text hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/haseeb-javed-0332b3341/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-mono-text hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Haseebjaved4212" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-mono-text hover:text-accent transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
