import type { IntroTextComponent } from '@/data/types';

interface IntroTextProps {
  component: IntroTextComponent;
}

export default function IntroText({ component }: IntroTextProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`text-2xl leading-relaxed px-8 ${pyClass} my-0 font-light xs:text-xl sm:text-xl md:text-2xl lg:text-2xl`}>
      {component.content}
    </div>
  );
}
