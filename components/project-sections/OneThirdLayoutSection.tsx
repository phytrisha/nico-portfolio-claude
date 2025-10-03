import Image from 'next/image';
import type { ContentSection } from '@/data/types';

interface OneThirdLayoutSectionProps {
  section: ContentSection;
}

export default function OneThirdLayoutSection({ section }: OneThirdLayoutSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        {section.leftContent ? (
          <p className="text-base leading-relaxed">{section.leftContent}</p>
        ) : section.leftImage ? (
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <Image
              src={section.leftImage}
              alt="Project detail"
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
      </div>
      <div className="md:col-span-2">
        {section.rightContent ? (
          <p className="text-base leading-relaxed">{section.rightContent}</p>
        ) : section.rightImage ? (
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <Image
              src={section.rightImage}
              alt="Project detail"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
