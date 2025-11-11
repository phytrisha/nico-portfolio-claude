import type { SublinesComponent } from '@/data/types';

interface SublinesProps {
  component: SublinesComponent;
}

export default function Sublines({ component }: SublinesProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`font-mono text-xs px-8 ${pyClass} my-0 whitespace-pre-wrap`}>
      {component.content}
    </div>
  );
}
