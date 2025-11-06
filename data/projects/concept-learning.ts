import { ContentSection } from '../types';

export const conceptLearning = {
  id: 7,
  slug: 'concept-learning',
  title: 'Approaching mechanisms of concept learning in the context of transforming ideologies',
  shortTitle: 'APPROACHING MECHANISMS OF CONCEPT LEARNING',
  category: 'philosophy' as const,
  tags: ['#PHILOSOPHY'],
  color: '#CF73CA',
  metadata: {
    type: 'Philosophy, End of term paper, 2024',
    topics: 'Theory of mind, Ideology, Structure theory',
  },
  description: [
    {
    type: 'numbered',
    items: [
    'Ideology is best understood as a cultural technē gone wrong.',
    'Cultural technēs are sets of social meanings.',
    'The brain constructs situated conceptualizations to predictively categorize inputs, prepare action-plans and anticipate their external and internal consequences based on past experiences in the service of maintaining allostasis.',
    'Concepts are carriers of culture and culture is embrained in the form of conceptual knowledge.',
    'Social meanings can be conceptualized as culturally supplied concepts.',
    'If dismantling ideologies can be understood as changing ideological technēs it might be partially framed as a matter of changing concepts.',
      ],
    },
    {
    type: 'text',
    content:'… So how do concepts change as concept learning takes place? The following will analyze and substantiate these premises and explore their implications with respect to concept learning under conditions of ideology. I will draw on Sally Haslanger’s account of ideology and Lisa Feldman Barrett’s work on how a predictive brain constructs mental phenomena. I will then explore relevant conceptual intersections between both frameworks with respect to the subject of interest: dismantling ideologies.',
    },
    { 
      type: 'image', 
      src: '/images/project-screenshot.jpg',
      alt: 'Project screenshot'
    },
  ] as DescriptionBlock[],

  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    },
    {
      type: 'image',
      image: '/images/projects/concept-learning/hero.jpg',
    },
  ] as ContentSection[],
  externalUrl: "https://drive.google.com/file/d/1MDstuuMDjgArHnJwq77oPWv7_h8SlH0Y/view?usp=share_link"
};
