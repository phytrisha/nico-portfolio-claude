import Image from 'next/image';
import type { ContentSection } from '@/data/types';

interface ImageSectionProps {
  section: ContentSection;
}

export default function ImageSection({ section }: ImageSectionProps) {
  return (
    <div className="bg-[#EEEFEB] w-full relative">
      {section.image ? (
        <Image
          src={section.image}
          alt="Project image"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      ) : (
        <div className="flex items-center justify-center min-h-[220px]">
          <p className="text-gray-500 text-lg">Project Image Placeholder</p>
        </div>
      )}
    </div>
  );
}
