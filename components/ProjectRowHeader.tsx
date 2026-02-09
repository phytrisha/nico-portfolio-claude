'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import type { Project } from '@/data/projects';

interface ProjectRowHeaderProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

export default function ProjectRowHeader({
  project,
  isExpanded,
  onClick
}: ProjectRowHeaderProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      className="cursor-pointer w-full"
      style={{
        backgroundColor: isExpanded ? project.color : 'var(--bg-primary)'
      }}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center font-sans px-0 py-8" style={{ color: isExpanded && isDark ? '#000000' : 'var(--text-primary)' }}>

        {/* First line - Title and expand button */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-[22px] md:text-[28px] lg:text-[28px] font-medium">{project.shortTitle}</div>
          <div className="text-3xl font-extralight pl-3">{isExpanded ? '−' : '+'}</div>
        </div>

        {/* Second line - Table format with ID, Tags, and Year */}
        <div
          className="flex items-center gap-0 text-xs font-mono mb-2 leading-[1.5]"
          style={{ border: `1px solid ${isExpanded && isDark ? '#000000' : 'var(--border-color)'}` }}
        >
          <div
            className="px-4 py-2 font-medium"
            style={{ borderRight: `1px solid ${isExpanded && isDark ? '#000000' : 'var(--border-color)'}` }}
          >
            {project.id.toString().padStart(2, '0')}
          </div>
          {project.year && (
            <div 
              className="px-4 py-2 font-medium"
              style={{ borderRight: `1px solid ${isExpanded && isDark ? '#000000' : 'var(--border-color)'}` }}>
              {project.year}
            </div>
          )}
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="px-4 py-2"
              //style={{ borderRight: '1px solid var(--border-color)' }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
