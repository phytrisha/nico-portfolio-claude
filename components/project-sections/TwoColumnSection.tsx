import Image from 'next/image';
import type { ContentSection } from '@/data/types';

interface TwoColumnSectionProps {
  section: ContentSection;
}

export default function TwoColumnSection({ section }: TwoColumnSectionProps) {
  const layout = section.layout || 'text-image';

  const renderColumn = (position: 'left' | 'right') => {
    const isLeft = position === 'left';
    const layoutSide = isLeft ? layout.split('-')[0] : layout.split('-')[1];

    if (layoutSide === 'image') {
      const imageSrc = isLeft ? section.leftImage : section.rightImage;
      return (
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Project detail"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-gray-500">Image</p>
          )}
        </div>
      );
    } else {
      const textContent = isLeft ? section.leftContent : section.rightContent;
      return (
        <div>
          <p className="text-base leading-relaxed">{textContent}</p>
        </div>
      );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {renderColumn('left')}
      {renderColumn('right')}
    </div>
  );
}
