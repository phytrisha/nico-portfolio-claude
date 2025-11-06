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
      <div className="h-full flex flex-col justify-center font-mono text-black px-8">
        {/* First line - Title and expand button */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-base font-medium">{project.shortTitle}</div>
          <div className="text-2xl">{isExpanded ? '−' : '+'}</div>
        </div>

        {/* Second line - Table format with ID, Tags, and Year */}
        <div
          className="flex items-center gap-0 text-xs"
          style={{ border: '1px solid black' }}
        >
          <div
            className="px-4 py-2 font-medium"
            style={{ borderRight: '1px solid black' }}
          >
            {project.id.toString().padStart(2, '0')}
          </div>
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="px-4 py-2"
              style={{ borderRight: '1px solid black' }}
            >
              {tag}
            </div>
          ))}
          {project.year && (
            <div className="px-4 py-2 font-medium">
              {project.year}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
