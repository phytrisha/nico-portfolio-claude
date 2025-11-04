import { ContentSection } from '../types';

export const darwinProject = {
  id: 10,
  slug: 'darwin-project',
  title: 'The [Darwin] Project: A scenario based analysis of individualising consumer goods',
  shortTitle: 'THE [DARWIN] PROJECT',
  category: 'strategic design' as const,
  tags: ['#STRATEGIC DESIGN'],
  color: '#FF6B00',
  metadata: {
    type: 'Strategic Design, HfG Schwäbisch Gmünd, 2018',
    topics: 'Scenario Design, Consumer Goods',
  },
  description: 'People are individual, should products be as well? The [darwin] project explores a sustainable product lifecycle and tries to rethink the relationship between consumer and artifact through functional and aesthetical individualization. The scenario based project explores the world of future consumer goods not from a inherently pejorative perspective, but rather develops a vision for how smart material sciences, advanced analytics and thoughtful interaction design can work in tandem to approach solutions for some of the issues with the way we consume today. Consumption on tick, ruthless exploitation of human and natural resources and societal developments where the connection between artifact and user becomes increasingly short-lived have dire consequences that become increasingly visible. The [darwin] project develops a scenario to analyze whether individualization can be an alternative pathway to increase the emotional attachment of user and product.',
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
