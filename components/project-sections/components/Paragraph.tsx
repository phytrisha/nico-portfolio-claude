import type { ParagraphComponent } from '@/data/types';

interface ParagraphProps {
  component: ParagraphComponent;
}

export default function Paragraph({ component }: ParagraphProps) {
  return (
    <p className="text-base leading-relaxed p-8 my-0">
      {component.content}
    </p>
  );
}
