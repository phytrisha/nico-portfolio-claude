import { ContentSection } from '../types';

export const socialAccountObjectivity = {
  id: 3,
  slug: 'social-account-objectivity',
  title: 'An Argument in Support of a Social Account of Objectivity',
  shortTitle: 'AN ARGUMENT IN SUPPORT OF A SOCIAL ACCOUNT OF OBJECTIVITY',
  category: 'philosophy' as const,
  tags: ['#PHILOSOPHY'],
  color: '#FF66CC',
  metadata: {
    type: 'Philosophy, End of term paper',
    topics: 'Social epistemology, objectivity',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      type: 'image',
      image: '/images/projects/social-account-objectivity/hero.jpg',
    },
  ] as ContentSection[],
};
