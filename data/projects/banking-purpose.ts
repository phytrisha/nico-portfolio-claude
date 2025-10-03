import { ContentSection } from '../types';

export const bankingPurpose = {
  id: 6,
  slug: 'banking-purpose',
  title: 'REMAKNE - Banking Meets Purpose',
  shortTitle: 'REMAKNE - BANKING MEETS PURPOSE',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#00E676',
  metadata: {
    type: 'UX Design, 2020',
    topics: 'Banking, Purpose-driven design',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    },
    {
      type: 'image',
      image: '/images/projects/banking-purpose/hero.jpg',
    },
    {
      type: 'two-column',
      leftContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      rightImage: '/images/projects/banking-purpose/detail-1.jpg',
    },
  ] as ContentSection[],
};
