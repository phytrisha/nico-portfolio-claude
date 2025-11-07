'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';
import ProjectRowHeader from './ProjectRowHeader';
import ProjectRowContent from './ProjectRowContent';

interface ProjectRowProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

const ANIMATION_DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1] as const;

export default function ProjectRow({ project, isExpanded, onClick }: ProjectRowProps) {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: isExpanded ? project.color : '#EEEFEB',
        borderBottom: '1px solid #000000',
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
