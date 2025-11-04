import { ContentSection } from '../types';

export const flows = {
  id: 11,
  slug: 'flows',
  title: 'Flows – rethinking the development of user interfaces',
  shortTitle: 'FLOWS',
  category: 'strategic design' as const,
  tags: ['#INTERACTION DESIGN'],
  color: '#FF6B00',
  metadata: {
    type: 'Interaction Design, HfG Schwäbisch Gmünd, B.A. Thesis, 2017',
    topics: 'User Experience Design, Prototyping, Design Tools',
  },
  description: 'Flows is a concept for a new design tool, conceptualized to enable a more structured design workflow, while at the same time offering the user better ways to create and iterate over variations. Flows applies the idea of classes, originating from code and development to a design tool, helping to create complex design systems with ease. Flows was built to allow designers to do a large part of their daily design processes in one tool. Therefore the concept combines early process steps like the creation of information architectures, the translation into asset based wireframes and their refinement in visuals while supporting interactive prototyping from the start. This approach gives each of those steps connection and purpose even as a project evolves.',
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
