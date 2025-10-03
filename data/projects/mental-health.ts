import { ContentSection } from '../types';

export const mentalHealth = {
  id: 9,
  slug: 'mental-health',
  title: 'SELFEPY - Mental Health',
  shortTitle: 'SELFEPY - MENTAL HEALTH',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#00E676',
  metadata: {
    type: 'UX Design, 2021',
    topics: 'Mental Health, Wellbeing',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    },
    {
      type: 'image',
      image: '/images/projects/mental-health/hero.jpg',
    },
    {
      type: 'two-column',
      leftContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      rightImage: '/images/projects/mental-health/detail-1.jpg',
    },
  ] as ContentSection[],
};
