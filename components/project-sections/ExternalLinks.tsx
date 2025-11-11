import type { ExternalLink } from '@/data/types';

interface ExternalLinksProps {
  links: ExternalLink[];
  projectColor: string;
}

export default function ExternalLinks({ links, projectColor }: ExternalLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-16 mb-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Black square with colored arrow */}
              <div className="bg-black w-full relative" style={{ paddingBottom: '100%' }}>
                <div className="absolute inset-0 flex items-center justify-center sm:p-12 md:p-16 lg:p-24 xl:p-36 ">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 70L70 10M70 10H25M70 10V55"
                      stroke={projectColor}
                      strokeWidth="6"
                      strokeLinecap="square"
                      strokeLinejoin="square"
                    />
                  </svg>
                </div>
              </div>

              {/* Text label below */}
              <div className="mt-3">
                <p className="text-base font-regular">
                  {link.title}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
