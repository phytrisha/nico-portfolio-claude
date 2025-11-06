import { ContentSection } from '../types';

export const mentalHealth = {
  id: 9,
  slug: 'mental-health',
  title: 'Selfapy - Online therapy by prescription',
  shortTitle: 'SELFAPY',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#259918',
  metadata: {
    type: 'UX Concept & Design, 2021',
    topics: 'Mental Health, Wellbeing',
  },
  description: 'Selfapy is a provider of online therapy courses intended to treat phobia, stress and practice mindfulness. Selfapy’s depression course was the first ever digital application approved by German health insurance companies to become available on prescription. The product was upgraded in order to reflect changes in the business model, moving towards a higher rate of automation in the product using a more extensive content strategy while improving the usability for the end user and getting the application ready for changes in regulation. The user experience was refined over multiple rounds of in depth testing, ensuring streamlined, cohesive interaction patterns, as well as placing a heavy focus on building trust and user engagement with Selfapy’s therapy courses.',
  


  contentSections: [
    {
      type: 'image',
      image: '/images/projects/selfapy/cover.jpg',
    },
    {
      type: 'text',
      content: 'Selfapy is a provider of online therapy courses intended to treat psychological stress. The company offers courses to treat phobia, stress and mindfulness. Patients may schedule a personal consultation over the phone or via chat, enabling people to fight against depression and other mental health issues. Selfapy’s depression course was the first ever digital application approved by German health insurance companies to become available on prescription. The product was upgraded in order to reflect slight changes in the business model, moving towards a higher rate of automation in the product using a more extensive content strategy while improving the usability for the end user and getting the application ready for changes in regulation.',
    },
    {
      type: 'image',
      image: '/images/projects/selfapy/S1.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
    {
      type: 'image',
      image: '/images/projects/selfapy/S2.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
    {
      type: 'image',
      image: '/images/projects/selfapy/S3.jpg',
    },
    {
      type: 'text',
      content: 'Desc.',
    },
  ] as ContentSection[],
};
