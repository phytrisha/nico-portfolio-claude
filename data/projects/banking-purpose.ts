import { ContentSection } from '../types';

export const bankingPurpose = {
  id: 6,
  slug: 'banking-purpose',
  title: 'Remagine - Banking Meets Purpose',
  shortTitle: 'REMAGINE - BANKING MEETS PURPOSE',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  year: '2020',
  color: '#259918',
  metadata: {
    type: 'UX Design, Freelance, 2020',
    topics: 'Role: Wireframing, UI / UX concept & design',
  },
  description: 'Remagine is a financial platform that provides banking services to high-growth enterprises, distinguished by its explicit commitment to impact-driven business models. Specializing in revenue-based financing, the company offers an alternative to conventional equity or debt instruments—one that is typically more favorable to founders—enabling rapid access to capital while preserving entrepreneurial autonomy. Remagine’s Financing & Online Banking Application serves as primary touchpoint to apply for and manage financing applications, repayment processes, bank account access and credit card control. A plattform wide responsive reconcept was devised, rethinking all major navigation flows from the ground up and and extending the existing design language to accommodate newly introduced features, while maintaining the brand’s distinctive and assertive visual identity.',
  contentSections: [
    {
      type: 'image',
      image: '/images/projects/remagine/cover.jpg',
    },
    {
      type: 'text',
      content: 'Remagine, a financing platform offering banking services to high-growth companies with an ‘impact’ twist, has raised €20 million ($24M) in a Seed funding round. Its backers include former Global Head of Google Payment Jonathan Weiner and former COO of Venmo Michael Vaughn. The fintech specialises in offering revenue-based financing for high-growth and impact-led businesses, which tends to be more founder-friendly than equity or debt products, allowing them to quickly secure funding while staying in control of their business. Remagine’s Financing & Online Banking Application serves as primary touchpoint for their startup founder clientele of customers to apply for and manage their financing applications & repayment processes. Remagine’s clients also manage bank account access and credit card control for their employees through the application.',
    },
    {
      type: 'image',
      image: '/images/projects/remagine/S1.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
    {
      type: 'image',
      image: '/images/projects/remagine/S2.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
    {
      type: 'image',
      image: '/images/projects/remagine/S3.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },

  ] as ContentSection[],
};
