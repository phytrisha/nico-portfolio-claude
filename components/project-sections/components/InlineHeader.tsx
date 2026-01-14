import type { InlineHeaderComponent } from '@/data/types';

interface InlineHeaderProps {
  component: InlineHeaderComponent;
}

export default function InlineHeader({ component }: InlineHeaderProps) {
  const pyClass = component.py || 'py-8';

  return (
    <h3 className={`text-xl font-medium mb-3 px-8 leading-normal ${pyClass}`}>
      {component.content}
    </h3>
  );
}
