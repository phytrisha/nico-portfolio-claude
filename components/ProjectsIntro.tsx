'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ProjectsIntro() {
  const [showText, setShowText] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const sectionTop = rect.top + scrollY;
        const triggerPoint = sectionTop - 800; // Trigger 800px before section top (earlier)
        setShowText(scrollY >= triggerPoint);
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white h-full flex items-center justify-center lg:justify-end  top-0 left-0 right-0">
      <div className="w-full max-w-[80%] lg:max-w-[85%] lg:pl-[0.5%] lg:pr-[5%]">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: showText ? 1 : 0,
            y: showText ? 0 : 40
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-12xl md:text-6xl lg:text-[86px] font-bold leading-relaxed">
            Explore some<br /><span className="bg-gradient-to-r from-[#683D20] via-[#A278A7] to-[#285122] bg-clip-text text-transparent">projects & writings</span><br />dear to my heart...
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
