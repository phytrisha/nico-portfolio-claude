import { ContentSection } from '../types';

export const mentalHealth = {
  id: 9,
  slug: 'mental-health',
  title: 'SELFEPY - Mental Health',
  shortTitle: 'SELFEPY - MENTAL HEALTH',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#259918',
  metadata: {
    type: 'UX Design, 2021',
    topics: 'Mental Health, Wellbeing',
  },
  description: 'Selfapy is a provider of online therapy courses intended to treat phobia, stress and practice mindfulness. Selfapy’s depression course was the first ever digital application approved by German health insurance companies to become available on prescription. The product was upgraded in order to reflect changes in the business model, moving towards a higher rate of automation in the product using a more extensive content strategy while improving the usability for the end user and getting the application ready for changes in regulation. The user experience was refined over multiple rounds of in depth testing, ensuring streamlined, cohesive interaction patterns, as well as placing a heavy focus on building trust and user engagement with Selfapy’s therapy courses.',
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
