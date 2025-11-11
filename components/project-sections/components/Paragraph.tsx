import type { ParagraphComponent } from '@/data/types';

interface ParagraphProps {
  component: ParagraphComponent;
}

export default function Paragraph({ component }: ParagraphProps) {
  return (
    <p className="text-sm leading-relaxed p-8 pb-0 my-0 sm:text-base md:text-base lg:text-[17px]">
      {component.content}
    </p>
  );
}
