import type { Project } from '@/data/projects';

interface ProjectMetadataProps {
  project: Project;
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <div className="border-1 border-black mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-1 border-black">
        <div className="p-4 border-b md:border-b-0 md:border-r-1 border-black">
          <p className="text-sm">Strategic Design, 2019</p>
        </div>
        <div className="p-4">
          <p className="text-sm">{project.metadata.topics}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-0 border-black">
        <div className="p-4 border-b md:border-b-0 md:border-r-1 border-black">
          <p className="text-sm">Master Thesis, M.A.</p>
        </div>
        <div className="p-4">
          <p className="text-sm">HfG Schwäbisch Gmünd</p>
        </div>
      </div>
    </div>
  );
}
