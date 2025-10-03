import type { ContentSection } from '@/data/types';

interface QuoteSectionProps {
  section: ContentSection;
}

export default function QuoteSection({ section }: QuoteSectionProps) {
  return (
    <div>
      <p className="text-base leading-relaxed italic border-l-4 border-black pl-6 py-2">
        &ldquo;{section.content}&rdquo;
      </p>
    </div>
  );
}
