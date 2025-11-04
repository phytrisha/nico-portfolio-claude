import { ContentSection } from '../types';

export const taxfix = {
  id: 12,
  slug: 'taxfix',
  title: 'Taxfix Workbench',
  shortTitle: 'TAXFIX WORKBENCH',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#259918',
  metadata: {
    type: 'UX Design, Freelance, 2020',
    topics: 'Role: Wireframing, UI / UX concept & design',
  },
  description: 'Taxfix offers an online tax assistance platform designed to simplify tax declarations. The companys platform leverages a smart, dynamic questionnaire to fully automate communication with the user and accommodate fiscal differences across countries, enabling private individuals to get back their tax refunds. The app asks simple questions to maximize users’ refunds. As they start answering questions, Taxfix selects the next relevant questions and hides questions that don’t apply to the individual situation. In order for the user-facing application to work internal tooling needed to be devised to enable internal tax experts to define tax logic independently from developers and without the need to code themselves.',
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
