'use client';

import type { HeroVideoComponent } from '@/data/types';
import { useTheme } from 'next-themes';

interface HeroVideoProps {
  component: HeroVideoComponent;
}

export default function HeroVideo({ component }: HeroVideoProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const src = isDark && component.darkSrc ? component.darkSrc : component.src;
  const thumb = isDark && component.darkThumb ? component.darkThumb : component.thumb;
  const pyClass = component.py || 'my-0';

  return (
    <div className={`w-auto ${pyClass}`} style={{ marginLeft: 'calc(-1 * var(--detail-px))', marginRight: 'calc(-1 * var(--detail-px))' }}>
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
        style={{ padding: 0 }}
      />
    </div>
  );
}
