import type { ContentSection } from '@/data/types';

interface TextSectionProps {
  section: ContentSection;
}

export default function TextSection({ section }: TextSectionProps) {
  return (
    <div>
      <p className="text-base leading-relaxed">{section.content}</p>
    </div>
  );
}
