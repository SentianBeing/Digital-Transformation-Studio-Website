
"use client";

import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['next big thing', 'custom software', 'mobile app'];
  const longestPhrase = 'custom software';

  useEffect(() => {
    let timer: number;
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="pt-40 md:pt-56 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-12 tracking-tight">
            <span className="block lg:inline">
              Build your{' '}
            </span>
            <span className="relative inline-block">
              <span className="hidden lg:inline-block invisible select-none pointer-events-none" aria-hidden="true">
                {longestPhrase}
              </span>
              <span className="lg:absolute lg:left-0 lg:top-0 inline-block border-r-[4px] md:border-r-[8px] border-[#FF005E] pr-2 md:pr-4 animate-cursor-blink bg-clip-text text-transparent bg-gradient-to-r from-[#FF005E] via-[#FF3B81] to-[#FF7EAE] whitespace-nowrap align-top">
                {displayText || "\u00A0"}
              </span>
            </span>
            <span className="w-full block mt-4 lg:mt-0 lg:inline text-left">
              with flawless tech, design, and execution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-14 tracking-wide max-w-2xl">
            Premier Software Engineering & Consulting powerhouse driving digital transformation.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-12 py-5 rounded-full border border-white/20 text-white text-sm font-black tracking-[0.15em] uppercase hover:bg-white/5 transition-all duration-300">
              Book a call
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { border-color: #FF005E; }
          50% { border-color: transparent; }
        }
        .animate-cursor-blink {
          animation: cursor-blink 0.8s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
