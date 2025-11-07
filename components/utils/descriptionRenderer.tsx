import React from 'react';
import Image from 'next/image';
import type { DescriptionBlock } from '@/data/types';

// Helper function to render a single description block
export const renderDescriptionBlock = (block: DescriptionBlock, index: number) => {
  if (block.type === 'text') {
    return <p key={index} className="text-sm mb-4 last:mb-0">{block.content}</p>;
  }

  if (block.type === 'image') {
    return (
      <div key={index} className="mb-4 last:mb-0">
        <div className="relative w-full aspect-video">
          <Image
            src={block.src}
            alt={block.alt || ''}
            fill
            className="object-cover"
          />
        </div>
        {block.caption && (
          <p className="text-xs mt-2 text-gray-600 italic">{block.caption}</p>
        )}
      </div>
    );
  }

  const ListTag = block.type === 'numbered' ? 'ol' : 'ul';
  const listClassName = block.type === 'numbered'
    ? 'text-sm list-decimal list-inside space-y-2 mb-4 last:mb-0'
    : 'text-sm list-disc list-inside space-y-2 mb-4 last:mb-0';

  return (
    <ListTag key={index} className={listClassName}>
      {block.items.map((item: string, itemIndex: number) => (
        <li key={itemIndex} className="leading-relaxed">{item}</li>
      ))}
    </ListTag>
  );
};

// Helper function to render description
export const renderDescription = (description: string | DescriptionBlock[]) => {
  if (typeof description === 'string') {
    return <p className="text-[26px]">{description}</p>;
  }

  return (
    <div className="space-y-0">
      {description.map((block, index) => renderDescriptionBlock(block, index))}
    </div>
  );
};
