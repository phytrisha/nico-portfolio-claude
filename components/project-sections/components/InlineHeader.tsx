import type { InlineHeaderComponent } from '@/data/types';

interface InlineHeaderProps {
  component: InlineHeaderComponent;
}

export default function InlineHeader({ component }: InlineHeaderProps) {
  const pyClass = component.py || 'py-8';

  return (
    <h3 className={`text-base font-bold my-0 px-8 ${pyClass}`}>
      {component.content}
    </h3>
  );
}
