import type { FullWidthVideoComponent } from '@/data/types';

interface FullWidthVideoProps {
  component: FullWidthVideoComponent;
}

export default function FullWidthVideo({ component }: FullWidthVideoProps) {
  return (
    <div className="w-full p-8">
      <video
        src={component.src}
        controls
        className="w-full h-auto"
      />
    </div>
  );
}
