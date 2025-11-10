import type { ProjectSection as ProjectSectionType } from '@/data/types';
import SubSection from './SubSection';

interface ProjectSectionProps {
  projectSection: ProjectSectionType;
}

export default function ProjectSection({ projectSection }: ProjectSectionProps) {
  return (
    <div>
      {projectSection.subSections.map((subSection, index) => (
        <SubSection key={index} subSection={subSection} />
      ))}
    </div>
  );
}
