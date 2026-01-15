import type { IntroTextComponent } from '@/data/types';

interface IntroTextProps {
  component: IntroTextComponent;
}

export default function IntroText({ component }: IntroTextProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`text-lg leading-[1.75] px-8 ${pyClass} my-0 font-medium xs:text-lg sm:text-lg md:text-xl lg:text-xl`}>
      {component.content}
    </div>
  );
}
