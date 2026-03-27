'use client';

import React, { useState } from 'react';
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
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    onClick();
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: isExpanded ? project.color : 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-colorunderlinepreview)',
        overflow: animating || !isExpanded ? 'hidden' : 'visible',
      }}
    >
      <div className='max-w-[88%] md:max-w-[88%] lg:max-w-[80%] m-auto'>
        <ProjectRowHeader
          project={project}
          isExpanded={isExpanded}
          onClick={handleClick}
        />

        <AnimatePresence onExitComplete={() => setAnimating(false)}>
          {isExpanded && (
            <ProjectRowContent
              project={project}
              animationDuration={ANIMATION_DURATION}
              ease={EASE}
              scrollIntoView={isLast}
              onAnimationComplete={() => setAnimating(false)}
            />
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
