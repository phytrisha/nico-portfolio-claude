import type { SublinesComponent } from '@/data/types';

interface SublinesProps {
  component: SublinesComponent;
}

export default function Sublines({ component }: SublinesProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`font-mono text-xs ${pyClass} my-0 whitespace-pre-wrap tracking-wider text-transform: uppercase max-w-4xl mx-auto`}>
      {component.content}
    </div>
  );
}
