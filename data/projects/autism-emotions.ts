import { ContentSection } from '../types';

export const autismEmotions = {
  id: 4,
  slug: 'autism-emotions',
  title: 'æ:mote – Supporting People with Autism in Understanding Emotions',
  shortTitle: 'AEMOTE – SUPPORTING PEOPLE WITH AUTISM IN UNDERSTANDING EMOTIONS',
  category: 'strategic-design' as const,
  tags: ['#STRATEGIC-DESIGN'],
  color: '#FF6B00',
  metadata: {
    type: 'Strategic Design, 2019',
    topics: 'Social Design, Design Research, Autism, Emotions',
  },
  description: 'æ:mote is a concept, designed to train people on the autistic spectrum disorder (ASD) in recognizing and understanding emotions. Developed in cooperation with the Paulinenpflege Winnenden, an institution that prepares young adults on the ASD for work, æ:mote can be seen as a first step in order to enable parents, as well as professional therapists to better support people on the ASD and to simplify their everyday life a bit. æ:mote combines a smartphone application used in face to face training sessions with the participant on the ASD with analog communication cards that are supposed to trigger guided conversations around certain topics that likely evoke specific emotions. The digital component can be placed in a cardboard stand on the table so the phone does not become a distracting part of the conversation. As soon as the software detects a certain emotion in the face of the conversation partner the autistic student is promted to make a guess about type of emotion he just witnessed in his counterpart and is presented with additional information or hints in case he / she has trouble identifying the facial expression correctly.',
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      type: 'image',
      image: '/images/projects/autism-emotions/hero.jpg',
    },
    {
      type: 'two-column',
      leftContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      rightImage: '/images/projects/autism-emotions/detail-1.jpg',
    },
  ] as ContentSection[],
};
