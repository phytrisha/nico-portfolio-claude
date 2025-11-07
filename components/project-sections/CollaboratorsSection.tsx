interface Collaborator {
  name: string;
  url?: string;
  role?: 'with' | 'supervision';
}

interface CollaboratorsSectionProps {
  collaborators: Collaborator[];
}

export default function CollaboratorsSection({ collaborators }: CollaboratorsSectionProps) {
  if (!collaborators || collaborators.length === 0) return null;

  const withCollaborators = collaborators.filter(c => c.role === 'with' || !c.role);
  const supervisionCollaborators = collaborators.filter(c => c.role === 'supervision');

  return (
    <div>
      <div className="max-w-[350px]">
        {withCollaborators.length > 0 && (
          <div className="border-t-1 border-black mb-8 pt-4">
            <p className="text-sm mb-4">With:</p>
            <div className="space-y-2">
              {withCollaborators.map((collaborator, index) => (
                <div key={index}>
                  {collaborator.url ? (
                    <a
                      href={collaborator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base hover:opacity-70 transition-opacity"
                    >
                      <span>{collaborator.name}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
                      >
                        <path
                          d="M1.75 12.25L12.25 1.75M12.25 1.75H4.375M12.25 1.75V9.625"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-base">{collaborator.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {supervisionCollaborators.length > 0 && (
          <div className="border-t-1 border-black mb-8 pt-4">
            <p className="text-sm mb-4">Supervision:</p>
            <div className="space-y-2">
              {supervisionCollaborators.map((collaborator, index) => (
                <div key={index}>
                  {collaborator.url ? (
                    <a
                      href={collaborator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base hover:opacity-70 transition-opacity"
                    >
                      <span>{collaborator.name}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
                      >
                        <path
                          d="M1.75 12.25L12.25 1.75M12.25 1.75H4.375M12.25 1.75V9.625"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-base">{collaborator.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
