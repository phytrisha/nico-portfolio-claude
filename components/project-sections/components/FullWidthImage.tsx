import type { FullWidthImageComponent } from '@/data/types';
import Image from 'next/image';

interface FullWidthImageProps {
  component: FullWidthImageComponent;
}

export default function FullWidthImage({ component }: FullWidthImageProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`w-full px-8 ${pyClass}`}>
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
