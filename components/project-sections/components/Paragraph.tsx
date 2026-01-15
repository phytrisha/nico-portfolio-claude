import type { ParagraphComponent } from '@/data/types';

interface ParagraphProps {
  component: ParagraphComponent;
}

export default function Paragraph({ component }: ParagraphProps) {
  const pyClass = component.py || 'py-8';

  return (
    <p className={`text-base leading-relaxed px-8 ${pyClass} my-0 xs:text-base sm:text-base md:text-base lg:text-base`}>
      {component.content}
    </p>
  );
}
