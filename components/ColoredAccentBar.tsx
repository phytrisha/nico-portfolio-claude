interface ColoredAccentBarProps {
  id: number;
  shortTitle: string;
  tags: string[];
  color: string;
}

export default function ColoredAccentBar({ id, shortTitle, tags, color }: ColoredAccentBarProps) {
  return (
    <div
      className="md:w-16 w-full md:h-full h-20 flex-shrink-0 text-white relative font-mono"
      style={{ backgroundColor: color }}
    >
      {/* Desktop: vertical layout */}
      <div className="h-full hidden md:flex flex-col grow items-center justify-start py-4 px-4">
        <div className="text-sm mb-4 font-medium text-center">{id.toString().padStart(2, '0')}</div>
        {/* Rotated content - reads bottom to top */}
        <div
          className="flex flex-row grow py-4 items-center gap-6"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          <div className="text-xs grow font-medium mt-4 text-left whitespace-nowrap">
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

      {/* Mobile: horizontal layout */}
      <div className="w-full flex md:hidden flex-row items-center justify-start px-10 pr-20 py-4 h-20">
        <div className="flex flex-col gap-1 flex-grow justify-center">
          <div className="text-xs font-medium lg:whitespace-nowrap">
            {shortTitle}
          </div>
          <div className="flex flex-row gap-2 items-center">
            {tags.map((tag, i) => (
              <span key={i} className="text-[10px] lg:text-xs opacity-80 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
