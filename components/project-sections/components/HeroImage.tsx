import type { HeroImageComponent } from '@/data/types';
import Image from 'next/image';

interface HeroImageProps {
  component: HeroImageComponent;
}

export default function HeroImage({ component }: HeroImageProps) {
  const pyClass = component.py || 'my-0';

  return (
    <div className={`w-full ${pyClass}`}>
      <Image
        src={component.src}
        alt={component.alt || ''}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        style={{ padding: 0 }}
      />
    </div>
  );
}
