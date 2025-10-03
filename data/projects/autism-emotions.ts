import { ContentSection } from '../types';

export const autismEmotions = {
  id: 4,
  slug: 'autism-emotions',
  title: 'AEMOTE: Supporting People with Autism in Understanding Emotions',
  shortTitle: 'AEMOTE: SUPPORTING PEOPLE WITH AUTISM IN UNDERSTANDING EMOTIONS',
  category: 'strategic-design' as const,
  tags: ['#STRATEGIC-DESIGN'],
  color: '#FF6B00',
  metadata: {
    type: 'Strategic Design, 2019',
    topics: 'Autism, Emotions, Design Research',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      type: 'image',
      image: '/images/projects/autism-emotions/hero.jpg',
    },
    {
      type: 'two-column',
      leftContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      rightImage: '/images/projects/autism-emotions/detail-1.jpg',
    },
  ] as ContentSection[],
};
