'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectColumn from './ProjectColumn';
import { projects } from '@/data/projects';

interface ProjectsAccordionProps {
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
  onShowProjectsChange: (show: boolean) => void;
}

export default function ProjectsAccordion({ expandedId, setExpandedId, onShowProjectsChange }: ProjectsAccordionProps) {
  const [showProjects, setShowProjects] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleColumnClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable page scrolling when accordion is expanded
  useEffect(() => {
    if (expandedId !== null) {
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedId]);

  useEffect(() => {
    onShowProjectsChange(showProjects);
  }, [showProjects, onShowProjectsChange]);

  useEffect(() => {
    // On mobile, always show projects
    if (isMobile) {
      setShowProjects(true);
      return;
    }

    const handleScroll = () => {
      if (isAnimating) return; // Prevent scroll trigger during animation

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Check if user has scrolled to the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold

      if (isAtBottom && !showProjects) {
        // Wait 100 ms before showing projects
        timeoutRef.current = setTimeout(() => {
          setShowProjects(true);
          setIsAnimating(true);
        }, 100);
      } else if (!isAtBottom && showProjects) {
        setShowProjects(false);
        setIsAnimating(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile, showProjects, isAnimating]);

  return (
    <div
      ref={containerRef}
      className={`h-full flex md:flex-row flex-col w-full mt-32 lg:mt-0 ${
        expandedId !== null ? 'md:overflow-x-auto' : 'md:overflow-x-hidden'
      }`}
    >
      {/* Back button column - only visible when accordion is expanded */}
      {expandedId !== null && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative flex-shrink-0 md:h-full w-full md:w-[64px] flex flex-col"
          style={{ width: isMobile ? '100%' : '64px', height: isMobile ? '80px' : '100%' }}
        >
          {/* Close button at top */}
          <div className="flex items-center justify-center p-4">
            <button
              onClick={() => setExpandedId(null)}
              className="text-white/60 hover:text-white transition-colors group"
              aria-label="Close expanded project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Three icons at bottom */}
          <div className="mt-auto flex flex-col items-center justify-end gap-8 p-4 pb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </motion.div>
      )}

      {projects.map((project, index) => {
        // When showing: delay increases with index (0, 0.1, 0.2, ...)
        // When hiding: delay increases in reverse (0.8, 0.7, 0.6, ...)
        const reverseIndex = projects.length - 1 - index;
        const delay = showProjects ? index * 0.1 : reverseIndex * 0.1;

        return (
          <motion.div
            key={project.id}
            initial={isMobile ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            animate={isMobile ? {
              y: 0,
              opacity: 1
            } : {
              y: showProjects ? 0 : '100%',
              opacity: showProjects ? 1 : 0
            }}
            transition={isMobile ? {
              duration: 0
            } : {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: delay
            }}
            onAnimationComplete={() => {
              // Only set isAnimating to false after the last item completes
              if (index === (showProjects ? projects.length - 1 : 0)) {
                setIsAnimating(false);
              }
            }}
            className="md:h-full w-full md:w-auto"
          >
            <ProjectColumn
              project={project}
              isExpanded={expandedId === project.id}
              onClick={() => handleColumnClick(project.id)}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
