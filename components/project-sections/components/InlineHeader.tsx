import type { InlineHeaderComponent } from '@/data/types';

interface InlineHeaderProps {
  component: InlineHeaderComponent;
}

export default function InlineHeader({ component }: InlineHeaderProps) {
  const pyClass = component.py || 'py-8';

  return (
    <h3 className={`text-xl font-medium mb-3 leading-normal ${pyClass} max-w-4xl mx-auto`}>
      {component.content}
    </h3>
  );
}
