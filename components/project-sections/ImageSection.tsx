import Image from 'next/image';
import type { ContentSection } from '@/data/types';

interface ImageSectionProps {
  section: ContentSection;
}

export default function ImageSection({ section }: ImageSectionProps) {
  return (
    <div className="bg-[#EEEFEB] h-220 flex items-center justify-center">
      {section.image ? (
        <Image
          src={section.image}
          alt="Project image"
          width={1200}
          height={100}
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-gray-500 text-lg">Project Image Placeholder</p>
      )}
    </div>
  );
}
