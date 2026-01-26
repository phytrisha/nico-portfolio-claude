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
}

export default function ProjectRowContent({
  project,
  animationDuration,
  ease
}: ProjectRowContentProps) {
  return (
    <motion.div
      className="text-black"
      initial={{ height: 0, backgroundColor: 'transparent' }}
      animate={{ height: 'auto', backgroundColor: project.color }}
      exit={{ height: 0, backgroundColor: 'transparent' }}
      transition={{ duration: animationDuration, ease: ease as [number, number, number, number] }}
    >
      <div className="pl-0 pt-0 grid grid-cols-3 gap-12">
        {/* Left column - Title and metadata */}
        <div className='col-span-3 md:col-span-2 pb-12'>
            <div className="text-xs leading-normal">{renderDescription(project.description)}</div>

          {/*<div style={{ border: '0px solid black' }}>
           <div className="p-6" style={{ borderBottom: '1px solid black' }}>
              <p className="text-sm font-medium">{project.metadata.type}</p>
            </div>
            <div className="p-6" style={{ borderBottom: '1px solid black' }}>
              <p className="text-sm font-medium">{project.metadata.topics}</p>
            </div>
          </div>*/}
        </div>

        {/* Right column - Action button */}
        <div className="flex items-end justify-end col-span-3 md:col-span-1">
          <Link
            href={project.externalUrl || `/project/${project.slug}`}
            target={project.externalUrl ? '_blank' : undefined}
            rel={project.externalUrl ? 'noopener noreferrer' : undefined}
          >
            <div className="bg-black p-8 cursor-pointer">
              <svg
                width="100"
                height="100"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 70L70 10M73 10H25M70 10V55"
                  stroke="#ffffff"
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
