'use client';

import ProjectRow from './ProjectRow';
import { projects } from '@/data/projects';

interface ProjectsAccordionProps {
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
}

export default function ProjectsAccordion({ expandedId, setExpandedId }: ProjectsAccordionProps) {
  const handleRowClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col bg-nico-cream">
      {projects.map((project, index) => (
        <ProjectRow
          key={project.id}
          project={project}
          isExpanded={expandedId === project.id}
          isLast={index === projects.length - 1}
          onClick={() => handleRowClick(project.id)}
        />
      ))}
    </div>
  );
}
