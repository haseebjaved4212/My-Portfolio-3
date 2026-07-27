import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'Redux Toolkit', 'TailwindCSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'FastAPI', 'Flask', 'Nest.js', 'Firebase', 'Supabase'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Other',
    items: ['DevOps fundamentals', 'Computer Networking', 'AI Automation', 'currently learning AI/ML'],
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const typedEyebrow = useTypewriter('// skills', 50, isInView);

  return (
    <section id="skills" className="py-24 bg-surface" ref={ref}>
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
          <h2 className="mb-12 font-display text-3xl md:text-4xl text-text-primary tracking-tight">
            Capabilities
          </h2>
          
          <div className="space-y-10">
            {skills.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-4 md:gap-8"
              >
                <div className="md:w-32 font-mono text-sm text-text-primary shrink-0 py-1">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span 
                      key={item}
                      className="px-3 py-1 rounded-full border border-border text-text-secondary text-sm hover:bg-accent-soft hover:text-accent hover:border-accent transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
