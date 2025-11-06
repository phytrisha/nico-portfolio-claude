import { ContentSection } from '../types';

export const zasta = {
  id: 14,
  slug: 'zasta',
  title: 'Zasta',
  shortTitle: 'ZASTA',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  year: '2020',
  color: '#259918',
  metadata: {
    type: 'UX Design, Freelance, 2020',
    topics: 'Role: User research, Wireframing, UI / UX concept',
  },
  description: 'Zasta is a digital tax platform that enables users to fully delegate the preparation and submission of their tax returns with minimal effort. By leveraging a user’s tax identification number, the platform can retrieve tax-relevant data directly from the tax authority. This automated feature is currently unique within the German tax system. Zasta connects users with certified tax consultants who are responsible for reviewing and finalizing the tax filings. The project focused on designing a back-end filing system tailored to the needs of Zasta’s tax consultants. The goal was to translate the complex workflow into a modular structure, allowing tasks to be distributed across multiple internal stakeholders. A central challenge lay in developing a software solution that optimizes efficiency and enables comprehensive troubleshooting, while adhering to the constraints imposed by legacy processes and tax forms originally designed for analog workflows.',
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
