import type { ParagraphComponent } from '@/data/types';

interface ParagraphProps {
  component: ParagraphComponent;
}

export default function Paragraph({ component }: ParagraphProps) {
  return (
    <p className="text-base leading-relaxed p-8 my-0 xs:text-base sm:text-base md:text-base lg:text-base">
      {component.content}
    </p>
  );
}
