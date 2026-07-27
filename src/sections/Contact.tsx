import { motion, useInView } from 'motion/react';
import { Mail, Github, Twitter, Linkedin, MessageCircle, Check } from 'lucide-react';
import { useState, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const typedEyebrow = useTypewriter('// contact', 50, isInView);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contactimhaseeb@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-surface border-t border-border" ref={ref}>
      <div className="mx-auto w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 font-mono text-sm text-mono-text min-h-[20px]">
            {typedEyebrow}
          </div>
          <h2 className="mb-10 font-display text-3xl md:text-4xl text-text-primary tracking-tight">
            Get in Touch
          </h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors w-full sm:w-auto text-left"
              >
                <div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  {copied ? <Check size={18} /> : <Mail size={18} />}
                </div>
                <div>
                  <div className="font-medium text-text-primary">Email</div>
                  <div className="text-sm text-text-secondary font-mono">contactimhaseeb@gmail.com</div>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <a 
                href="https://github.com/haseebjaved4212"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <Github size={18} />
                </div>
                <div className="font-medium text-text-primary">GitHub</div>
              </a>

              <a 
                href="https://x.com/Haseebjaved4212"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <Twitter size={18} />
                </div>
                <div className="font-medium text-text-primary">X (Twitter)</div>
              </a>

              <a 
                href="https://www.linkedin.com/in/haseeb-javed-0332b3341/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </div>
                <div className="font-medium text-text-primary">LinkedIn</div>
              </a>

              <a 
                href="https://wa.me/+923272119600" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <MessageCircle size={18} />
                </div>
                <div className="font-medium text-text-primary">WhatsApp</div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
