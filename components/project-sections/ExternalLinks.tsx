import type { Project, ExternalLink } from '@/data/projects';

interface ExternalLinksProps {
  links: ExternalLink[];
  projectColor: string;
}

export default function ExternalLinks({ links, projectColor }: ExternalLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="border-t-2 border-black pt-12">
      <h3 className="text-2xl font-bold mb-8">External Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-black p-6 transition-transform">
              <div className="flex items-end justify-between mb-4">
                <h4 className="text-white text-sm font-medium flex-1">
                  {link.title}
                </h4>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 ml-2"
                >
                  <path
                    d="M10 70L70 10M70 10H25M70 10V55"
                    stroke={projectColor}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-xs">
                External Link
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
