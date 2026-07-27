import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { Project } from '../types';
import { Github } from 'lucide-react';

const projects: Project[] = [
  {
    title: 'Social App (Twitter-inspired)',
    description: 'A Twitter-style social platform built with Django. Users can register, log in, post tweets, upload photos, and search through posts.',
    tags: ['Django', 'Python', 'SQL'],
    githubUrl: 'https://github.com/haseebjaved4212/Twiter.git'
  },
  {
    title: 'LinguaApp (AI Language Learning)',
    description: 'An AI-powered language learning app built with React Native and Expo, offering bite-sized lessons, quizzes, and real-time AI feedback.',
    tags: ['React Native', 'Expo', 'AI'],
    githubUrl: 'https://github.com/haseebjaved4212/Language-Lessons.git'
  },
  {
    title: 'Real-Time Chat App',
    description: 'A real-time chat application built with Django Channels and React, supporting live messaging between users.',
    tags: ['Django Channels', 'React', 'WebSockets'],
    githubUrl: 'https://github.com/haseebjaved4212/Chat-App.git'
  },
  {
    title: 'CoolBraze AI',
    description: 'An AI customer support system with Django, Claude API, and RAG. Three autonomous agents collaborate to handle queries, refunds, and fraud detection.',
    tags: ['Django', 'Claude API', 'RAG'],
    githubUrl: 'https://github.com/haseebjaved4212/CoolBraze-Ai.git'
  },
  {
    title: 'AI-Powered REST API Service',
    description: 'A full-stack application providing AI capabilities through a Django backend and React frontend.',
    tags: ['Django', 'React', 'REST API'],
    githubUrl: 'https://github.com/haseebjaved4212/AI-Powered-RESTAPI-Service.git'
  },
  {
    title: 'Jarvis (Personal AI Assistant)',
    description: 'Desktop voice assistant with Flask backend and glassmorphism frontend, featuring OS integration and conversational intelligence via Gemini API.',
    tags: ['Flask', 'Gemini API', 'Voice'],
    githubUrl: 'https://github.com/haseebjaved4212/Jarvis.git'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const typedEyebrow = useTypewriter('// projects', 50, isInView);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 font-mono text-sm text-mono-text min-h-[20px]">
          {typedEyebrow}
        </div>
        <h2 className="mb-12 font-display text-3xl md:text-4xl text-text-primary tracking-tight">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-6 rounded-lg border border-border bg-surface hover:border-accent hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] transition-all duration-300"
            >
              <div>
                <div className="font-mono text-[10px] text-mono-text mb-2 uppercase tracking-widest">// project_{idx + 1}</div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display italic mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <Github className="text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-1" size={18} />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] text-mono-text bg-bg px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/haseebjaved4212"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-text-primary rounded-md font-medium hover:bg-surface hover:border-accent hover:text-accent hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Explore More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
