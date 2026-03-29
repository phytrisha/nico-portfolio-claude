'use client';

import type { HeroImageComponent } from '@/data/types';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface HeroImageProps {
  component: HeroImageComponent;
}

export default function HeroImage({ component }: HeroImageProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const src = isDark && component.darkSrc ? component.darkSrc : component.src;
  const pyClass = component.py || 'my-0';

  return (
    <div className={`w-auto ${pyClass}`} style={{ marginLeft: 'calc(-1 * var(--detail-px))', marginRight: 'calc(-1 * var(--detail-px))' }}>
      <Image
        src={src}
        alt={component.alt || ''}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        style={{ padding: 0 }}
      />
    </div>
  );
}
