import type { FullWidthImageComponent } from '@/data/types';
import Image from 'next/image';

interface FullWidthImageProps {
  component: FullWidthImageComponent;
}

export default function FullWidthImage({ component }: FullWidthImageProps) {
  return (
    <div className="w-full p-8">
      <Image
        src={component.src}
        alt={component.alt || ''}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
