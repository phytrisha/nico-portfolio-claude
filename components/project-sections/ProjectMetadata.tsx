import type { Project } from '@/data/projects';

interface ProjectMetadataProps {
  project: Project;
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <div className="border-1 border-black mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-1 border-black">
        <div className="pl-4 p-2 border-b md:border-b-0 md:border-r-1 border-black">
          <p className="text-xs font-mono text-transform: uppercase">STRATEGIC DESIGN, 2019, Master Thesis, M.A., HfG Schwäbisch Gmünd</p>
        </div>
        <div className="pl-4 p-2">
          <p className="text-xs font-mono text-transform: uppercase">{project.metadata.topics}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-0 border-black">
        <div className="pl-4 p-2 border-b md:border-b-0 md:border-r-1 border-black">
          <p className="text-xs font-mono text-transform: uppercase">Supervision: Prof. David Osswald, Prof. Dr. Ulrich Barnhöfer</p>
        </div>
        <div className="pl-4 p-2">
          <p className="text-xs font-mono text-transform: uppercase">With: Mark F. Meyer</p>
        </div>
      </div>
    </div>
  );
}