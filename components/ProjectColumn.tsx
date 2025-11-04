'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';
import Link from 'next/link';
import ColoredAccentBar from './ColoredAccentBar';
import type { DescriptionBlock } from '@/data/types';

interface ProjectColumnProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

const COLLAPSED_WIDTH = 64;
const COLLAPSED_HEIGHT_MOBILE = 80;
const ANIMATION_DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1] as const; // easeInOut


// Helper function to render a single description block
const renderDescriptionBlock = (block: DescriptionBlock, index: number) => {
  if (block.type === 'text') {
    return <p key={index} className="text-sm mb-4 last:mb-0">{block.content}</p>;
  }

  // Handle bullet or numbered lists
  const ListTag = block.type === 'numbered' ? 'ol' : 'ul';
  const listClassName = block.type === 'numbered'
    ? 'text-sm list-decimal list-inside space-y-2 mb-4 last:mb-0'
    : 'text-sm list-disc list-inside space-y-2 mb-4 last:mb-0';

  return (
    <ListTag key={index} className={listClassName}>
      {block.items.map((item: string, itemIndex: number) => (
        <li key={itemIndex} className="leading-relaxed">{item}</li>
      ))}
    </ListTag>
  );
};

// Helper function to render description (supports string or array of blocks)
const renderDescription = (description: string | DescriptionBlock[]) => {
  if (typeof description === 'string') {
    return <p className="text-sm">{description}</p>;
  }

  // Render array of mixed content blocks
  return (
    <div className="space-y-0">
      {description.map((block, index) => renderDescriptionBlock(block, index))}
    </div>
  );
};


// Responsive expanded widths
const getExpandedWidth = () => {
  if (typeof window === 'undefined') return 600; // SSR fallback

  if (window.innerWidth >= 1536) return 700; // 2xl
  if (window.innerWidth >= 1280) return 650; // xl
  if (window.innerWidth >= 1024) return 600; // lg
  if (window.innerWidth >= 768) return 500;  // md
  return 400; // sm and below
};

// Responsive expanded heights for mobile
const getExpandedHeight = () => {
  if (typeof window === 'undefined') return 400; // SSR fallback

  if (window.innerWidth >= 768) return 0; // md and above - not used
  return 600; // mobile
};

export default function ProjectColumn({ project, isExpanded, onClick }: ProjectColumnProps) {
  const [expandedWidth, setExpandedWidth] = React.useState(getExpandedWidth());
  const [expandedHeight, setExpandedHeight] = React.useState(getExpandedHeight());
  const [isMobile, setIsMobile] = React.useState(false);
  const [isScrollable, setIsScrollable] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setExpandedWidth(getExpandedWidth());
      setExpandedHeight(getExpandedHeight());
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
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
      className="relative flex-shrink-0 overflow-hidden md:h-full w-full"
      initial={false}
      animate={isMobile ? {
        height: isExpanded ? expandedHeight : COLLAPSED_HEIGHT_MOBILE,
        width: '100%'
      } : {
        width: isExpanded ? expandedWidth : COLLAPSED_WIDTH
      }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: EASE
      }}
    >
      {/* Collapsed bar (vertical on desktop, horizontal on mobile) */}
      <motion.div
        className="absolute flex inset-0 cursor-pointer md:w-auto md:h-full w-full"
        style={isMobile ? { height: COLLAPSED_HEIGHT_MOBILE, width: '100%' } : { width: COLLAPSED_WIDTH }}
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
            style={isMobile ? {
              left: 0,
              top: COLLAPSED_HEIGHT_MOBILE,
              right: 0,
              height: expandedHeight - COLLAPSED_HEIGHT_MOBILE
            } : {
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
            <div ref={scrollContainerRef} className="h-full overflow-y-auto md:overflow-x-hidden overflow-x-auto" style={{ scrollbarGutter: 'stable' }}>
              <div className="p-8 md:p-12 pb-32 min-h-full flex flex-col" style={isMobile ? { height: expandedHeight - COLLAPSED_HEIGHT_MOBILE } : { width: expandedWidth - COLLAPSED_WIDTH }}>
                <div className="flex-grow">
                  <h2 className="text3xl md:text-5xl font-bold mb-6 leading-tight mb-16 mt-6">{project.title}</h2>

                  {/* Metadata table */}
                  <div className="border border-black mb-64 lg:mb-48">
                    <div className="border-b border-black p-6">
                      <p className="text-sm font-medium">{project.metadata.type}</p>
                    </div>
                    <div className="border-b border-black p-6">
                      <p className="text-sm font-medium">{project.metadata.topics}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium mb-4">Description</p>
                      <div className="text-xs leading-normal">{renderDescription(project.description)}</div>
                    </div>
                  </div>
                </div>

                {/* Arrow button - pushed to bottom, hidden when content is scrollable */}
                {!isScrollable && (
                  <div className="flex justify-end mt-auto">
                    <Link
                      href={project.externalUrl || `/project/${project.slug}`}
                      target={project.externalUrl ? '_blank' : undefined}
                      rel={project.externalUrl ? 'noopener noreferrer' : undefined}
                    >
                      <div className="bg-black p-8 cursor-pointer transition-transform">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 70L70 10M73 10H25M70 10V55"
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
                <Link
                  href={project.externalUrl || `/project/${project.slug}`}
                  target={project.externalUrl ? '_blank' : undefined}
                  rel={project.externalUrl ? 'noopener noreferrer' : undefined}
                  className="pointer-events-auto block sticky bottom-12"
                >
                  <div className="bg-black p-8 cursor-pointer transition-transform">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 70L70 10M73 10H25M70 10V55"
                        stroke={project.color}
                        strokeWidth="6"
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
