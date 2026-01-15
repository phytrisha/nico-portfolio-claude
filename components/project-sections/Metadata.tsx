import type { MetadataSection } from '@/data/types';

interface MetadataProps {
  projectId: number;
  metadata: MetadataSection;
}

// Parse text with markdown-style links [text](url) into React elements
function parseTextWithLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the link with external link icon
    const linkText = match[1];
    const url = match[2];
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:opacity-70"
      >
        {linkText}
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
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default function Metadata({ metadata }: MetadataProps) {
  // Use the new simple entries array if available
  const entries = metadata.entries || [];

  // If no entries, return null (no metadata to display)
  if (entries.length === 0) {
    return null;
  }

  return (
    <div
      className="flex flex-col gap-0 text-xs font-mono text-transform: uppercase tracking-wide"
      style={{ border: '1px solid black' }}
    >
      {entries.map((entry, index) => (
        <div key={index}>
          {index > 0 && <div style={{ borderTop: '1px solid black' }} />}
          <div className="px-8 py-4 font-medium">
            {parseTextWithLinks(entry)}
          </div>
        </div>
      ))}
    </div>
  );
}
