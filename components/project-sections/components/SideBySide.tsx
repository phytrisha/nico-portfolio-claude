import type { SideBySideComponent } from '@/data/types';
import Image from 'next/image';

interface SideBySideProps {
  component: SideBySideComponent;
}

export default function SideBySide({ component }: SideBySideProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`w-full flex gap-4 px-8 ${pyClass}`}>
      {/* Left Block */}
      <div className="w-1/2">
        {component.left.type === 'image' ? (
          <Image
            src={component.left.src}
            alt={component.left.alt || ''}
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        ) : (
          <video
            src={component.left.src}
            controls
            className="w-full h-auto"
          />
        )}
      </div>

      {/* Right Block */}
      <div className="w-1/2">
        {component.right.type === 'image' ? (
          <Image
            src={component.right.src}
            alt={component.right.alt || ''}
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        ) : (
          <video
            src={component.right.src}
            controls
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}
