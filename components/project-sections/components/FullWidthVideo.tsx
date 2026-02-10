'use client';

import type { FullWidthVideoComponent } from '@/data/types';
import { useTheme } from 'next-themes';

interface FullWidthVideoProps {
  component: FullWidthVideoComponent;
}

export default function FullWidthVideo({ component }: FullWidthVideoProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const src = isDark && component.darkSrc ? component.darkSrc : component.src;
  const thumb = isDark && component.darkThumb ? component.darkThumb : component.thumb;
  const pyClass = component.py || 'py-8';

  return (
    <div className={`w-full px-8 ${pyClass}`}>
      <video
        src={src}
        controls={component.controls !== false}
        poster={thumb}
        autoPlay={component.autoplay}
        loop={component.loop}
        muted={component.muted}
        playsInline={component.playsinline}
        aria-label={component.alt}
        className="w-full h-auto"
      />
    </div>
  );
}
