'use client';

import type { SideBySideComponent } from '@/data/types';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface SideBySideProps {
  component: SideBySideComponent;
}

export default function SideBySide({ component }: SideBySideProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const leftSrc = isDark && component.left.darkSrc ? component.left.darkSrc : component.left.src;
  const rightSrc = isDark && component.right.darkSrc ? component.right.darkSrc : component.right.src;
  const pyClass = component.py || 'py-8';

  return (
    <div className={`w-full flex gap-4 px-8 ${pyClass}`}>
      {/* Left Block */}
      <div className="w-1/2">
        {component.left.type === 'image' ? (
          <Image
            src={leftSrc}
            alt={component.left.alt || ''}
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        ) : (
          <video
            src={leftSrc}
            controls
            className="w-full h-auto"
          />
        )}
      </div>

      {/* Right Block */}
      <div className="w-1/2">
        {component.right.type === 'image' ? (
          <Image
            src={rightSrc}
            alt={component.right.alt || ''}
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        ) : (
          <video
            src={rightSrc}
            controls
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}
