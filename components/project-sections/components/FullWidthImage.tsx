'use client';

import type { FullWidthImageComponent } from '@/data/types';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface FullWidthImageProps {
  component: FullWidthImageComponent;
}

export default function FullWidthImage({ component }: FullWidthImageProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const src = isDark && component.darkSrc ? component.darkSrc : component.src;
  const pyClass = component.py || 'py-8';

  return (
    <div className={`w-full max-w-4xl mx-auto ${pyClass}`}>
      <Image
        src={src}
        alt={component.alt || ''}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
