import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 30, start: boolean = true) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!start) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, start]);

  return displayedText;
}
