import { ContentSection } from '../types';

export const conceptLearning = {
  id: 7,
  slug: 'concept-learning',
  title: 'Approaching Mechanisms of Concept Learning',
  shortTitle: 'APPROACHING MECHANISMS OF CONCEPT LEARNING',
  category: 'philosophy' as const,
  tags: ['#PHILOSOPHY'],
  color: '#FF66CC',
  metadata: {
    type: 'Philosophy, End of term paper',
    topics: 'Concept learning, Ideologies',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    },
    {
      type: 'image',
      image: '/images/projects/concept-learning/hero.jpg',
    },
  ] as ContentSection[],
};
