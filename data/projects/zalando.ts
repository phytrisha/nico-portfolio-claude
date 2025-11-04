import { ContentSection } from '../types';

export const zalando = {
  id: 13,
  slug: 'zalando',
  title: 'Zalando-Zonar: Internal HR Performance & Feedback tooling',
  shortTitle: 'ZALANDO ZONAR',
  category: 'freelance' as const,
  tags: ['#FREELANCE'],
  color: '#259918',
  metadata: {
    type: 'UX Design, Freelance, 2020',
    topics: 'Role: User research, Wireframing, UI / UX concept',
  },
  description: 'Zalando SE is one of Europes leading online fashion portal. The company runs multiple cross-platform online stores selling shoes, fashion and beauty items. The client was looking to build a custom in-house HR tool, where evaluations, promotions, wage raises, professional and developmental feedback between employees and from leads, as well as mentoring relationships can be managed, exchanged and maintained using this internal portal. Used by over 15k employees, team leads and management this tool is the digital representation of Zalando’s workforce. Due to the sensitive nature of relationships maintained on this platform, an extensively user research and testing based UX strategy as well as a carefully crafted UI design approach needed to be devised when conceptualizing and building this internal tool.',
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
