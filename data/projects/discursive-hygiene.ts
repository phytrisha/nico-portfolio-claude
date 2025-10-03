import { ContentSection } from '../types';

export const discursiveHygiene = {
  id: 5,
  slug: 'discursive-hygiene',
  title: 'On the Efficacy of Discursive Hygiene',
  shortTitle: 'ON THE EFFICACY OF DISCURSIVE HYGIENE',
  category: 'philosophy' as const,
  tags: ['#PHILOSOPHY'],
  color: '#FF66CC',
  metadata: {
    type: 'Philosophy, End of term paper',
    topics: 'Discourse analysis, Language',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    },
    {
      type: 'image',
      image: '/images/projects/discursive-hygiene/hero.jpg',
    },
  ] as ContentSection[],
};
