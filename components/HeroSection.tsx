'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const fullText = 'Hi, I am Nico,';

  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100); // Adjust speed here (milliseconds per character)
      return () => clearTimeout(timeout);
    } else {
      setIsTypewriterComplete(true);
    }
  }, [displayedText]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if first section should be visible
      if (firstSectionRef.current) {
        const rect = firstSectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + scrollY; // Absolute position of section top
        const triggerPoint = sectionTop - 400; // Trigger 200px before section top
        setShowFirstSection(scrollY >= triggerPoint);
      }

      // Check if second section should be visible
      if (secondSectionRef.current) {
        const rect = secondSectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + scrollY; // Absolute position of section top
        const triggerPoint = sectionTop - 400; // Trigger 200px before section top
        setShowSecondSection(scrollY >= triggerPoint);
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTypewriterComplete]);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-[80%] mt-64">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <div className="text-white mb-24 min-h-[1.2em]">{displayedText}</div>

          <motion.div
            ref={firstSectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: showFirstSection ? 1 : 0,
              y: showFirstSection ? 0 : 40
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <span className="text-white">a </span>
              <span className="text-nico-orange">Strategic Designer</span>
              <span className="text-white">,</span>
            </div>
            <div className="mb-8">
              <span className="text-white">studying </span>
              <span className="text-nico-purple">Philosophy</span>
              <span className="text-white">,</span>
            </div>
            <div className="mb-8">
              <span className="text-white">while </span>
              <span className="text-nico-green">UX freelancing</span>
              <span className="text-white">.</span>
            </div>
          </motion.div>

          <motion.div
            ref={secondSectionRef}
            className="text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: showSecondSection ? 1 : 0,
              y: showSecondSection ? 0 : 40
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-32 leading-relaxed">
              With a polyoriginal lens informed by design & philosophy I specialize in translating abstract ideas into tangible product designs.
            </div>
          </motion.div>
        </h1>
      </div>
    </section>
  );
}
