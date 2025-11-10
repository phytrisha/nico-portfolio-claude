import type { HeroVideoComponent } from '@/data/types';

interface HeroVideoProps {
  component: HeroVideoComponent;
}

export default function HeroVideo({ component }: HeroVideoProps) {
  return (
    <div className="w-full my-0">
      <video
        src={component.src}
        controls
        className="w-full h-auto"
        style={{ padding: 0 }}
      />
    </div>
  );
}
