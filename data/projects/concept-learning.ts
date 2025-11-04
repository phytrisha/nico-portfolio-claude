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
 
    '1. Ideology is best understood as a cultural technē gone wrong.',
    '2. Cultural technēs are sets of social meanings.',
    '3. The brain constructs situated conceptualizations to predictively categorize inputs, prepare action-plans and anticipate their external and internal consequences based on past experiences in the service of maintaining allostasis.',
    '4. Concepts are carriers of culture and culture is embrained in the form of conceptual knowledge.',
    '5. Social meanings can be conceptualized as culturally supplied concepts.',
    '6. If dismantling ideologies can be understood as changing ideological technēs it might be partially framed as a matter of changing concepts.',
    '– … So how do concepts change as *concept learning* takes place?',
    'The following will analyze and substantiate these premises and explore their implications with respect to concept learning under conditions of ideology. I will introduce and draw on Sally Haslanger’s account of ideology and Lisa Feldman Barrett’s work on how a predictive brain constructs mental phenomena, before pointing out what I consider to be interesting conceptual intersections, and their implications with respect to the subject of interest: dismantling ideologies. The empirical evidence and neuroscientific theories referred to will be taken as axiomatic presuppositions, though their truth value might change in the light of future discoveries and may even be controversial given the current state of the field. There will be no deductive proof of the intersections I seek, and what seems valid will only become conclusive in approximation by abduction. The goal is as much to point out interesting conceptual ramifications, as it is asking questions and identifying potential challenges, most of which will remain unaddressed. In short: I will proceed by linking an account of ideology to an account of the human brain as a generator of situated conceptualizations, and explore the implications of that intersection with respect to concept learning.',
     ],
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
};
