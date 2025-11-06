'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';
import ProjectRowHeader from './ProjectRowHeader';
import ProjectRowContent from './ProjectRowContent';

interface ProjectRowProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

const COLLAPSED_HEIGHT = 100;
const ANIMATION_DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1] as const;

export default function ProjectRow({ project, isExpanded, onClick }: ProjectRowProps) {
  return (
    <motion.div
      className="w-full"
      style={{
        backgroundColor: isExpanded ? project.color : '#EEEFEB',
        borderBottom: '1px solid #000000',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={false}
      animate={{
        height: isExpanded ? 'auto' : COLLAPSED_HEIGHT
      }}
      transition={{
        height: {
          duration: ANIMATION_DURATION,
          ease: EASE
        }
      }}
    >
      <ProjectRowHeader
        project={project}
        isExpanded={isExpanded}
        onClick={onClick}
        height={COLLAPSED_HEIGHT}
      />

      <AnimatePresence>
        {isExpanded && (
          <ProjectRowContent
            project={project}
            marginTop={COLLAPSED_HEIGHT}
            animationDuration={ANIMATION_DURATION}
            ease={EASE}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
