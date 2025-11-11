import type { InlineHeaderComponent } from '@/data/types';

interface InlineHeaderProps {
  component: InlineHeaderComponent;
}

export default function InlineHeader({ component }: InlineHeaderProps) {
  return (
    <h3 className="text-base font-bold my-0 p-8">
      {component.content}
    </h3>
  );
}
