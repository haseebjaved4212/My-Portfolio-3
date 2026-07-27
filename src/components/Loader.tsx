import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const greetings = [
  { text: 'السلام علیکم', lang: 'Urdu' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Hello', lang: 'English' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Привет', lang: 'Russian' },
];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {greetings[index].text}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}
