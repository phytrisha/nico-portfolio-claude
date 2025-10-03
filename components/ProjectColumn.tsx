'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';
import Link from 'next/link';
import ColoredAccentBar from './ColoredAccentBar';

interface ProjectColumnProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

const COLLAPSED_WIDTH = 64;
const ANIMATION_DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1] as const; // easeInOut

// Responsive expanded widths
const getExpandedWidth = () => {
  if (typeof window === 'undefined') return 600; // SSR fallback

  if (window.innerWidth >= 1536) return 900; // 2xl
  if (window.innerWidth >= 1280) return 800; // xl
  if (window.innerWidth >= 1024) return 700; // lg
  if (window.innerWidth >= 768) return 500;  // md
  return 400; // sm and below
};

export default function ProjectColumn({ project, isExpanded, onClick }: ProjectColumnProps) {
  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  const [expandedWidth, setExpandedWidth] = React.useState(getExpandedWidth());
  const [isScrollable, setIsScrollable] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setExpandedWidth(getExpandedWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [isExpanded, project]);

  return (
    <motion.div
      className="h-full relative flex-shrink-0 overflow-hidden"
      initial={false}
      animate={{
        width: isExpanded ? expandedWidth : COLLAPSED_WIDTH
      }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: EASE
      }}
    >
      {/* Collapsed vertical bar (always present) */}
      <motion.div
        className="absolute flex inset-0 cursor-pointer"
        style={{ width: COLLAPSED_WIDTH }}
        onClick={onClick}
        animate={{ backgroundColor: isExpanded ? project.color : 'black' }}
        transition={{ duration: ANIMATION_DURATION, ease: EASE }}
      >
        <ColoredAccentBar
          id={project.id}
          shortTitle={project.shortTitle}
          tags={project.tags}
          color={isExpanded ? project.color : 'black'}
        />
      </motion.div>

      {/* Expanded content area */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bg-nico-cream text-black"
            style={{
              left: COLLAPSED_WIDTH,
              top: 0,
              bottom: 0,
              width: expandedWidth - COLLAPSED_WIDTH
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION, ease: EASE }}
          >
            {/* Scrollable content area */}
            <div ref={scrollContainerRef} className="h-full overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
              <div className="p-8 md:p-12 pb-32 min-h-full flex flex-col" style={{ width: expandedWidth - COLLAPSED_WIDTH }}>
                <div className="flex-grow">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{project.title}</h2>

                  {/* Metadata table */}
                  <div className="border border-black mb-48">
                    <div className="border-b border-black p-4">
                      <p className="text-sm">{project.metadata.type}</p>
                    </div>
                    <div className="border-b border-black p-4">
                      <p className="text-sm">{project.metadata.topics}</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow button - pushed to bottom, hidden when content is scrollable */}
                {!isScrollable && (
                  <div className="flex justify-end mt-auto">
                    <Link href={`/project/${project.slug}`}>
                      <div className="bg-black p-8 cursor-pointer transition-transform">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 70L70 10M70 10H25M70 10V55"
                            stroke={project.color}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky overlay arrow - visible when content needs scrolling */}
            {isScrollable && (
              <div className="absolute right-8 md:right-12 bottom-12 pointer-events-none z-10">
                <Link href={`/project/${project.slug}`} className="pointer-events-auto block sticky bottom-12">
                  <div className="bg-black p-8 cursor-pointer transition-transform">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 70L70 10M70 10H25M70 10V55"
                        stroke={project.color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
