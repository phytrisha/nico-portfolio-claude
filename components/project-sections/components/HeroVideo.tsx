import type { HeroVideoComponent } from '@/data/types';

interface HeroVideoProps {
  component: HeroVideoComponent;
}

export default function HeroVideo({ component }: HeroVideoProps) {
  const pyClass = component.py || 'my-0';

  return (
    <div className={`w-full ${pyClass}`}>
      <video
        src={component.src}
        controls={component.controls !== false}
        poster={component.thumb}
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
