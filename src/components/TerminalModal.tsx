import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [history, setHistory] = useState<string[]>(['> type "help" for a list of commands']);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, `> ${trimmed}`]);
    const lowerCmd = trimmed.toLowerCase();

    let output = '';
    switch (lowerCmd) {
      case 'help':
        output = `Available commands:
  help     - lists available commands
  about    - short bio
  skills   - lists tech stack
  projects - lists projects with links
  contact  - shows contact info
  resume   - triggers the resume download
  clear    - clears the terminal output
  whoami   - one-liner`;
        setHistory((prev) => [...prev, ...output.split('\n')]);
        break;
      case 'about':
        output = 'Haseeb Javed is a full-stack developer based in Karachi...';
        setHistory((prev) => [...prev, output]);
        break;
      case 'skills':
        output = 'React, Next.js, Django, FastAPI, TailwindCSS, TypeScript...';
        setHistory((prev) => [...prev, output]);
        break;
      case 'projects':
        output = `1. Social App (Twitter-inspired)
2. LinguaApp (AI Language Learning)
3. Real-Time Chat App
4. CoolBraze AI
5. AI-Powered REST API Service
6. Jarvis (Personal AI Assistant)`;
        setHistory((prev) => [...prev, ...output.split('\n')]);
        break;
      case 'contact':
        output = 'Email: contactimhaseeb@gmail.com\nGitHub: haseebjaved4212';
        setHistory((prev) => [...prev, ...output.split('\n')]);
        break;
      case 'resume':
        output = 'Downloading resume...';
        setHistory((prev) => [...prev, output]);
        // Trigger download
        const a = document.createElement('a');
        a.href = '/Haseeb_Javed_Resume.pdf';
        a.download = 'Haseeb_Javed_Resume.pdf';
        a.click();
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'whoami':
        output = 'Haseeb Javed — Full-stack Developer';
        setHistory((prev) => [...prev, output]);
        break;
      default:
        output = `Command not found: ${trimmed}. Type "help" for a list of commands.`;
        setHistory((prev) => [...prev, output]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="flex h-[60vh] flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
              <div className="flex items-center justify-between border-b border-border bg-bg px-4 py-3">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={16} className="text-text-secondary" />
                  <span className="font-mono text-sm text-text-secondary">haseeb@portfolio ~</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-text-primary"
                  aria-label="Close terminal"
                >
                  <X size={16} />
                </button>
              </div>
              <div
                className="flex-1 overflow-y-auto p-4 font-mono text-sm text-mono-text"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap py-0.5">
                    {line}
                  </div>
                ))}
                <div className="flex items-center gap-2 py-0.5 text-text-primary">
                  <span>&gt;</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                <div ref={bottomRef} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
