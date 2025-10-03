import type { ContentSection } from '@/data/types';

interface SubheadlineSectionProps {
  section: ContentSection;
}

export default function SubheadlineSection({ section }: SubheadlineSectionProps) {
  return (
    <div className="my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
      {section.content && (
        <p className="text-base leading-relaxed text-gray-700">{section.content}</p>
      )}
    </div>
  );
}
