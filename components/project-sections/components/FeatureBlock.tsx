import type { FeatureBlockComponent } from '@/data/types';

interface FeatureBlockProps {
  component: FeatureBlockComponent;
}

export default function FeatureBlock({ component }: FeatureBlockProps) {
  return (
    <div className="p-8 my-0">
      <div className="font-mono text-sm whitespace-pre-wrap">
        {component.skyline}
      </div>
      <p className="text-base leading-relaxed">
        {component.description}
      </p>
    </div>
  );
}
