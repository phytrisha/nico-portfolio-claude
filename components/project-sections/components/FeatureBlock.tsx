import type { FeatureBlockComponent } from '@/data/types';

interface FeatureBlockProps {
  component: FeatureBlockComponent;
}

export default function FeatureBlock({ component }: FeatureBlockProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`px-8 ${pyClass} my-0`}>
      <div className="font-mono text-sm whitespace-pre-wrap">
        {component.skyline}
      </div>
      <p className="text-sm leading-relaxed sm:text-base md:text-base lg:text-[17px]">
        {component.description}
      </p>
    </div>
  );
}
