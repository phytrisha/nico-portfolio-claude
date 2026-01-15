import type { FullWidthVideoComponent } from '@/data/types';

interface FullWidthVideoProps {
  component: FullWidthVideoComponent;
}

export default function FullWidthVideo({ component }: FullWidthVideoProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`w-full px-8 ${pyClass}`}>
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
      />
    </div>
  );
}
