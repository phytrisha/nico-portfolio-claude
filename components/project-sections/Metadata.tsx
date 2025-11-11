import type { MetadataSection, MetadataLink } from '@/data/types';

interface MetadataProps {
  projectId: number;
  metadata: MetadataSection;
}

export default function Metadata({ metadata }: MetadataProps) {
  const row1: { label?: string; content: React.ReactNode }[] = [];
  const row2: { label?: string; content: React.ReactNode }[] = [];

  // Helper function to render items (strings or links)
  const renderItems = (items: string[] | MetadataLink[]) => {
    return items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      if (typeof item === 'string') {
        return (
          <span key={idx}>
            {item}
            {!isLast && ', '}
          </span>
        );
      } else {
        return (
          <span key={idx} className="inline-flex items-center gap-1">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-70"
            >
              {item.name}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {!isLast && <span>, </span>}
          </span>
        );
      }
    });
  };

  // Helper function to render a row of cells
  const renderRow = (cells: { label?: string; content: React.ReactNode }[]) => (
    <div className="flex items-center gap-0">
      {cells.map((cell, index) => (
        <div
          key={index}
          className="px-6 py-4"
          style={{
            borderRight: index < cells.length - 1 ? '1px solid black' : 'none'
          }}
        >
          {cell.label && (
            <span className="font-medium">{cell.label}: </span>
          )}
          <span className={cell.label ? '' : 'font-medium'}>{cell.content}</span>
        </div>
      ))}
    </div>
  );

  // Add topics if present
  if (metadata.topics) {
    const topicsValue = typeof metadata.topics === 'string'
      ? metadata.topics
      : metadata.topics.join(', ');
    if (topicsValue) {
      row1.push({ content: topicsValue });
    }
  }

  // Add collaborators if present
  if (metadata.collaborators && metadata.collaborators.length > 0) {
    row1.push({
      label: 'With',
      content: renderItems(metadata.collaborators)
    });
  }

  // Add supervision if present
  if (metadata.supervision && metadata.supervision.length > 0) {
    row1.push({
      label: 'Supervision',
      content: renderItems(metadata.supervision)
    });
  }


  // Add optional second row free text
  if (metadata.row2) {
    row2.push({ content: metadata.row2 });
  }

  return (
    <div
      className="flex flex-col gap-0 text-xs font-mono text-transform: uppercase"
      style={{ border: '1px solid black' }}
    >
      {row1.length > 0 && renderRow(row1)}
      {row1.length > 0 && row2.length > 0 && (
        <div style={{ borderTop: '1px solid black' }} />
      )}
      {row2.length > 0 && renderRow(row2)}
    </div>
  );
}
