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
        controls
        poster={component.thumb}
        className="w-full h-auto"
      />
    </div>
  );
}
