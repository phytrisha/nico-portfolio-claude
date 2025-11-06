interface ColoredAccentBarProps {
  id: number;
  shortTitle: string;
  tags: string[];
  color: string;
}

export default function ColoredAccentBar({ id, shortTitle, tags, color }: ColoredAccentBarProps) {
  return (
    <div
      className="w-19 h-full flex-shrink-0 text-white relative font-mono"
      style={{ backgroundColor: color }}
    >
      {/* Vertical layout */}
      <div className="h-full flex flex-col grow items-center justify-start py-6 px-5">
        <div className="text-sm mb-5 font-medium text-center">{id.toString().padStart(2, '0')}</div>
        {/* Rotated content - reads bottom to top */}
        <div
          className="flex flex-row grow py-4 items-center gap-6"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          <div className="text-xs grow font-medium mt-2 text-left whitespace-nowrap">
            {shortTitle}
          </div>
          <div className="flex flex-row gap-2 items-center">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
          <div className="h-px w-8 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
