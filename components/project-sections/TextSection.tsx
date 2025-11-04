import type { ContentSection } from '@/data/types';

interface TextSectionProps {
  section: ContentSection;
}

export default function TextSection({ section }: TextSectionProps) {
    // If list type and items are provided, render a list
  if (section.listType && section.items && section.items.length > 0) {
    const ListTag = section.listType === 'numbered' ? 'ol' : 'ul';
    const listClassName = section.listType === 'numbered'
      ? 'list-decimal list-inside space-y-2 text-base leading-relaxed'
      : 'list-disc list-inside space-y-2 text-base leading-relaxed';

    return (
      <div>
        <ListTag className={listClassName}>
          {section.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ListTag>
      </div>
    );
  }

  //Default text rendering
  return (
    <div>
      <p className="text-base leading-relaxed">{section.content}</p>
    </div>
  );
}
