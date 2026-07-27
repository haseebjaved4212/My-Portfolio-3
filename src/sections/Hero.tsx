import { motion } from 'motion/react';
import { TerminalPanel } from '../components/TerminalPanel';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const typedDescription = useTypewriter(
    'Building autonomous AI systems and high-performance web applications with a focus on precision and scale.',
    20
  );

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20">
      <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-start gap-6 lg:col-span-7"
        >
          <div className="mb-2 font-mono text-[10px] md:text-xs text-accent uppercase tracking-widest">
            // 01. full-stack developer
          </div>
          <h1 className="font-display text-[80px] md:text-[100px] leading-[0.85] tracking-tighter italic">
            Haseeb<br/>Javed
          </h1>
          <p className="text-xl text-text-secondary max-w-md leading-relaxed min-h-[60px]">
            {typedDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-accent text-white rounded-sm font-medium shadow-lg shadow-accent/20 hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              View Projects
            </button>
            <a
              href="/Haseeb_Javed_Resume.pdf"
              download
              className="px-8 py-4 border border-border text-text-primary rounded-sm font-medium hover:bg-surface hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:col-span-5"
        >
          <TerminalPanel />
        </motion.div>

      </div>
    </section>
  );
}
