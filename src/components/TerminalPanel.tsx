import { useEffect, useState } from 'react';

const sequence = `> whoami
Haseeb Javed — Full-stack Developer
> stack
React · Next.js · Django · FastAPI · AI Automation
> status
Building. Shipping. Learning AI/ML.`;

export function TerminalPanel() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedText(sequence);
      setIsTyping(false);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(sequence.slice(0, i));
      i++;
      if (i > sequence.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#13161A] rounded-lg shadow-2xl border border-[#21252B] overflow-hidden flex flex-col min-h-[256px]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2128] border-b border-[#21252B]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        <span className="ml-4 font-mono text-[10px] text-[#6B7280]">bash — 80x24</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-[#F2F2F0] whitespace-pre-wrap flex-1">
        {displayedText}
        {isTyping && <span className="inline-block w-2 h-4 bg-[#27c93f] ml-1 animate-pulse align-middle" />}
      </div>
    </div>
  );
}
