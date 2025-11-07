'use client';

import React from 'react';
import type { Project } from '@/data/projects';

interface ProjectRowHeaderProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
  height: number;
}

export default function ProjectRowHeader({
  project,
  isExpanded,
  onClick,
  height
}: ProjectRowHeaderProps) {
  return (
    <div
      className="absolute left-0 right-0 top-0 cursor-pointer w-full"
      style={{
        height,
        backgroundColor: isExpanded ? project.color : '#EEEFEB'
      }}
      onClick={onClick}
    >
      <div className="h-full flex flex-col justify-center font-sans text-black px-12">

        {/* First line - Title and expand button */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-[28px] font-medium">{project.shortTitle}</div>
          <div className="text-2xl">{isExpanded ? '−' : '+'}</div>
        </div>

        {/* Second line - Table format with ID, Tags, and Year */}
        <div
          className="flex items-center gap-0 text-xs font-mono mb-2"
          style={{ border: '1px solid black' }}
        >
          <div
            className="px-4 py-2 font-medium"
            style={{ borderRight: '1px solid black' }}
          >
            {project.id.toString().padStart(2, '0')}
          </div>
          {project.year && (
            <div 
              className="px-4 py-2 font-medium"
              style={{ borderRight: '1px solid black' }}>
              {project.year}
            </div>
          )}
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="px-4 py-2"
              //style={{ borderRight: '1px solid black' }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
