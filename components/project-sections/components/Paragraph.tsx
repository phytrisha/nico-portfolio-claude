import type { ParagraphComponent } from '@/data/types';

interface ParagraphProps {
  component: ParagraphComponent;
}

export default function Paragraph({ component }: ParagraphProps) {
  const pyClass = component.py || 'py-8';

  return (
    <p className={`text-base lg:text-[17px] leading-relaxed ${pyClass} my-0 max-w-4xl mx-auto`} style={{ textWrap: 'pretty' }}>
      {component.content}
    </p>
  );
}
