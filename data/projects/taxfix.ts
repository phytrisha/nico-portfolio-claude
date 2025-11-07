import { ContentSection } from '../types';

export const taxfix = {
  id: 12,
  slug: 'taxfix',
  title: 'Taxfix Project Workhorse',
  shortTitle: 'Taxfix Project Workhorse',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  year: '2020',
  color: '#259918',
  metadata: {
    type: 'UX Design, Freelance, 2020',
    topics: 'Role: Wireframing, UI / UX concept & design',
  },
  description: 'Taxfix offers an online tax assistance platform designed to simplify tax declarations. The companys platform leverages a smart, dynamic questionnaire to fully automate communication with the user and accommodate fiscal differences across countries, enabling private individuals to get back their tax refunds. The app asks simple questions to maximize users’ refunds. As they start answering questions, Taxfix selects the next relevant questions and hides questions that don’t apply to the individual situation. In order for the user-facing application to work internal tooling needed to be devised to enable internal tax experts to define tax logic independently from developers and without the need to code themselves.',
  contentSections: [
    {
      type: 'text',
      content: 'Taxfix offers an online tax assistance platform designed to simplify tax declarations to end users via a dynamic questionnaire to fully automate communication with the user and accommodate fiscal differences across countries, enabling private individuals to get back their tax refunds. In order for the user-facing application to work internal tooling needed to be devised to enable internal tax experts to define tax logic independently from developers and without the need to code themselves.',
    },
    {
      type: 'image',
      image: '/images/projects/taxfix/cover.jpg',
    },
    {
      type: 'subheadline',
      title: 'User research – Outlining problem-space through in-depth analysis',
    },
    {
      type: 'text',
      content: 'Based on the initial research conducted major pain points were identified that made the current code based solution both inefficient and unnecessarily complicated. Those pain points (alongside other problems identified) served as the foundation for ideation, wireframing and testing.',
    },
    {
      type: 'image',
      image: '/images/projects/taxfix/P1.jpg',
    },
    {
      type: 'subheadline',
      title: 'Pain Points & Opportunities',
    },
    {
      type: 'two-column',
      leftContent: 'Based on the initial research conducted major pain points were identified that made the current code based solution both inefficient and unnecessarily complicated. Those pain points (alongside other problems identified) served as the foundation for ideation, wireframing and testing.',
      rightImage: '/images/projects/taxfix/P2.jpg',
    },
    {
      type: 'subheadline',
      title: 'Interventions, capabilites, and features',
    },
    {
      type: 'text',
      content: 'From Translating insights into software features, to conceptualizing & testing UX solutions. Building the non-code editor was a highly iterative process that strechted over multiple months to traslate the vast amount of insights into tangbile product solutions. Due to the complexity and interdependence of tax-law, conceptualizing the no-code editor that enables tax experts to build tax logic which is then presented to end users in the form of questions in the consumer facing side of the product, proved to be both a highly challenging and a super interesting process...',
    },
    {
      type: 'image',
      image: '/images/projects/taxfix/P3.jpg',
    },
    {
      type: 'subheadline',
      title: 'Outcome',
    },
    {
      type: 'image',
      image: '/images/projects/taxfix/S1.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
    {
      type: 'image',
      image: '/images/projects/taxfix/S2.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
    {
      type: 'image',
      image: '/images/projects/taxfix/S3.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },

   
  ] as ContentSection[],
};
