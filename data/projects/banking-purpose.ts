import { ContentSection } from '../types';

export const bankingPurpose = {
  id: 6,
  slug: 'banking-purpose',
  title: 'Remagine - Banking Meets Purpose',
  shortTitle: 'REMAGINE - BANKING MEETS PURPOSE',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#259918',
  metadata: {
    type: 'UX Design, Freelance, 2020',
    topics: 'Role: Wireframing, UI / UX concept & design',
  },
  description: 'Remagine is a financial platform that provides banking services to high-growth enterprises, distinguished by its explicit commitment to impact-driven business models. Specializing in revenue-based financing, the company offers an alternative to conventional equity or debt instruments—one that is typically more favorable to founders—enabling rapid access to capital while preserving entrepreneurial autonomy. Remagine’s Financing & Online Banking Application serves as primary touchpoint to apply for and manage financing applications, repayment processes, bank account access and credit card control. A plattform wide responsive reconcept was devised, rethinking all major navigation flows from the ground up and and extending the existing design language to accommodate newly introduced features, while maintaining the brand’s distinctive and assertive visual identity.',
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
