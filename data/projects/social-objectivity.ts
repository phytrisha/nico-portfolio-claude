import { ContentSection } from '../types';

export const socialObjectivity = {
  id: 2,
  slug: 'social-objectivity',
  title: 'Supporting social objectivity with an interactionist model of reason',
  shortTitle: 'SUPPORTING SOCIAL OBJECTIVITY WITH AN INTERACTIONIST MODEL OF REASON',
  category: 'philosophy' as const,
  tags: ['#PHILOSOPHY'],
  color: '#FF66CC',
  metadata: {
    type: 'Philosophy, HU Berlin, End of term paper',
    topics: 'Social epistemology, feminist philosophy',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    },
    {
      type: 'image',
      image: '/images/projects/social-objectivity/hero.jpg',
    },
    {
      type: 'two-column',
      leftContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      rightImage: '/images/projects/social-objectivity/detail-1.jpg',
    },
  ] as ContentSection[],
};
