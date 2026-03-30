import type { IntroTextComponent } from '@/data/types';

interface IntroTextProps {
  component: IntroTextComponent;
}

export default function IntroText({ component }: IntroTextProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`text-lg leading-[1.75] ${pyClass} my-0 font-normal md:text-2xl max-w-4xl mx-auto`} style={{ textWrap: 'pretty' }}>
      {component.content}
    </div>
  );
}
