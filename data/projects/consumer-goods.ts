import { ContentSection } from '../types';

export const consumerGoods = {
  id: 8,
  slug: 'consumer-goods',
  title: 'The [Domain] Project: A Scenario Based Analysis',
  shortTitle: 'THE [DOMAIN] PROJECT: A SCENARIO BASED ANALYSIS',
  category: 'strategic-design' as const,
  tags: ['#STRATEGIC-DESIGN'],
  color: '#FF6B00',
  metadata: {
    type: 'Strategic Design, 2018',
    topics: 'Scenario Design, Consumer Goods',
  },
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    },
    {
      type: 'image',
      image: '/images/projects/consumer-goods/hero.jpg',
    },
    {
      type: 'two-column',
      leftContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      rightImage: '/images/projects/consumer-goods/detail-1.jpg',
    },
  ] as ContentSection[],
};
