'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { renderDescription } from './utils/descriptionRenderer';

interface ProjectRowContentProps {
  project: Project;
  animationDuration: number;
  ease: number[];
  scrollIntoView?: boolean;
}

export default function ProjectRowContent({
  project,
  animationDuration,
  ease,
  scrollIntoView,
}: ProjectRowContentProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      style={{ color: 'var(--text-projectpreview)' }}
      initial={{ height: 0, backgroundColor: 'transparent' }}
      animate={{ height: 'auto', backgroundColor: project.color }}
      exit={{ height: 0, backgroundColor: 'transparent' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
      onUpdate={() => {
        if (scrollIntoView && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const overshoot = rect.bottom - window.innerHeight;
          if (overshoot > 0) {
            window.scrollBy({ top: overshoot, behavior: 'auto' });
          }
        }
      }}
    >
      <div className="pl-0 pt-0 grid grid-cols-3 gap-12">
        {/* Left column - Title and metadata */}
        <div className='col-span-3 lg:col-span-2 pb-2 lg:pb-12'>
            <div className="text-5xl leading-normal">{renderDescription(project.description)}</div>
        </div>

        {/* Right column - Action button */}
        <div className="mx-[calc(50%-50vw)] lg:mx-0 w-screen lg:w-auto flex items-end justify-center lg:justify-end col-span-3 lg:col-span-1">
          <Link
            href={project.externalUrl || `/project/${project.slug}`}
            target={project.externalUrl ? '_blank' : undefined}
            rel={project.externalUrl ? 'noopener noreferrer' : undefined}
            className="block w-full lg:w-auto"
          >
            <div className="p-10 lg:p-8 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              <svg
                className="w-12 h-12 lg:w-[100px] lg:h-[100px]"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 70L70 10M73 10H25M70 10V55"
                  stroke="#EDEBE3"
                  strokeWidth="6"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
