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

  // Calculate total animation duration
  const totalAnimationDuration = (projects.length - 1) * 0.1 + 0.6; // Last delay + animation duration

  return (
    <div
      ref={containerRef}
      className="h-full flex md:flex-row flex-col md:overflow-x-auto w-full"
    >
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
