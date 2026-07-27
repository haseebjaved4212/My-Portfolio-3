import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const typedEyebrow = useTypewriter('// about', 50, isInView);

  return (
    <section id="about" className="py-24" ref={ref}>
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
          <h2 className="mb-6 font-display text-3xl md:text-4xl text-text-primary tracking-tight">
            Bio
          </h2>
          <div className="text-lg md:text-xl text-text-secondary leading-relaxed space-y-6">
            <p>
              I'm a full-stack developer bridging the gap between rigorous frontend interfaces and complex backend systems. My core expertise lies in React, Next.js, and TypeScript on the frontend, paired with robust Python architectures using Django and FastAPI on the backend.
            </p>
            <p>
              Beyond traditional web development, my focus has shifted toward building AI-powered systems and process automation. I am actively expanding my knowledge in AI/ML, aiming to integrate autonomous agents and large language models seamlessly into production software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
