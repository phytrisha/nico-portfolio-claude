'use client';

import React, { useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';
import ProjectRowHeader from './ProjectRowHeader';
import ProjectRowContent from './ProjectRowContent';

interface ProjectRowProps {
  project: Project;
  isExpanded: boolean;
  isLast?: boolean;
  onClick: () => void;
}

const ANIMATION_DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1];

export default function ProjectRow({ project, isExpanded, isLast, onClick }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && isLast && rowRef.current) {
      rowRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isExpanded, isLast]);

  return (
    <div
      ref={rowRef}
      className="w-full"
      style={{
        backgroundColor: isExpanded ? project.color : 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-colorunderlinepreview)',
        overflow: 'hidden'
      }}
    >
      <div className='max-w-[80%] m-auto'>
        <ProjectRowHeader
          project={project}
          isExpanded={isExpanded}
          onClick={onClick}
        />

        <AnimatePresence>
          {isExpanded && (
            <ProjectRowContent
              project={project}
              animationDuration={ANIMATION_DURATION}
              ease={EASE}
            />
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
