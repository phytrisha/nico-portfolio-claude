import type { SublinesComponent } from '@/data/types';

interface SublinesProps {
  component: SublinesComponent;
}

export default function Sublines({ component }: SublinesProps) {
  return (
    <div className="font-mono text-sm p-8 my-0 whitespace-pre-wrap">
      {component.content}
    </div>
  );
}
