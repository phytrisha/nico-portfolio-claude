'use client';

import { useState } from 'react';
import ProjectsIntro from './ProjectsIntro';
import ProjectsAccordion from './ProjectsAccordion';

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Left side - Intro (sticky) */}
      <div
        className={`lg:w-[60%] lg:h-screen lg:sticky lg:top-0 transition-transform duration-500 ease-in-out ${
          expandedId !== null ? 'lg:translate-x-[-50%]' : 'lg:translate-x-0'
        }`}
      >
        <ProjectsIntro />
      </div>

      {/* Right side - Horizontal accordion */}
      <div
        className={`lg:h-screen bg-black transition-all duration-500 ease-in-out lg:absolute lg:top-0 ${
          expandedId !== null ? 'lg:left-0 lg:w-full' : 'lg:left-[60%] lg:w-[40%]'
        }`}
        style={{ pointerEvents: showProjects ? 'auto' : 'none' }}
      >
        <ProjectsAccordion
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          onShowProjectsChange={setShowProjects}
        />
      </div>
    </section>
  );
}
