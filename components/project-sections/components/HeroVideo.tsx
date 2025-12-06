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
        controls
        poster={component.thumb}
        className="w-full h-auto"
        style={{ padding: 0 }}
      />
    </div>
  );
}
