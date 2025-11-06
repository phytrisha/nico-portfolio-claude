'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { renderDescription } from './utils/descriptionRenderer';

interface ProjectRowContentProps {
  project: Project;
  marginTop: number;
  animationDuration: number;
  ease: readonly number[];
}

export default function ProjectRowContent({
  project,
  marginTop,
  animationDuration,
  ease
}: ProjectRowContentProps) {
  return (
    <motion.div
      className="text-black"
      style={{
        marginTop,
        backgroundColor: project.color
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: animationDuration, ease }}
    >
      <div className="p-12 pb-12 grid grid-cols-2 gap-12">
        {/* Left column - Title and metadata */}
        <div>
          <h2 className="text-4xl font-bold mb-12 leading-tight">{project.title}</h2>

          <div style={{ border: '1px solid black' }}>
            <div className="p-6" style={{ borderBottom: '1px solid black' }}>
              <p className="text-sm font-medium">{project.metadata.type}</p>
            </div>
            <div className="p-6" style={{ borderBottom: '1px solid black' }}>
              <p className="text-sm font-medium">{project.metadata.topics}</p>
            </div>
            <div className="p-6">
              <p className="text-sm font-medium mb-4">Description</p>
              <div className="text-xs leading-normal">{renderDescription(project.description)}</div>
            </div>
          </div>
        </div>

        {/* Right column - Action button */}
        <div className="flex items-start justify-end">
          <Link
            href={project.externalUrl || `/project/${project.slug}`}
            target={project.externalUrl ? '_blank' : undefined}
            rel={project.externalUrl ? 'noopener noreferrer' : undefined}
          >
            <div className="bg-black p-8 cursor-pointer transition-transform hover:scale-105">
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
      </div>
    </motion.div>
  );
}
