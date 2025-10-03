import type { ContentSection } from '@/data/types';

interface LinksSectionProps {
  section: ContentSection;
}

export default function LinksSection({ section }: LinksSectionProps) {
  return (
    <div className="my-8">
      {section.title && (
        <h3 className="text-xl font-bold mb-4">{section.title}</h3>
      )}
      <div className="space-y-3">
        {section.links?.map((link, linkIndex) => (
          <a
            key={linkIndex}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:underline group"
          >
            <span className="text-base font-medium">{link.title}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 13L13 3M13 3H6M13 3V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
