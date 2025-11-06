import { ContentSection, ExternalLink } from '../types';

export const beneficialAI = {
  id: 1,
  slug: 'beneficial-ai',
  title: 'Approaching Beneficial Artificial Intelligence in the Context of [...]',
  shortTitle: 'APPROACHING BENEFICIAL AI IN THE CONTEXT OF [...]',
  category: 'strategic-design' as const,
  tags: ['#MA-THESIS', '#STRATEGIC-DESIGN'],
  year: '2019',
  color: '#FF6D01',
  metadata: {
    type: 'Strategic Design, Master Thesis, M.A., 2019',
    topics: 'Artificial Intelligence, Ethics, Scenario Design',
  },
  description: 'This master thesis is concerned with the topic of beneficial artificial intelligence. Broadly “beneficial”, in this context, means that AI systems act in a way that is desired by humans. There are great chances for AI to positively influence many areas of our life, but also numerous risks with potentially extremely negative outcome. To approach beneficial behavior of such systems two models are outlined: the first suggests a classification for aspects of beneficiality in artificially intelligent systems. The second one explores methods to capture and counter ethical problem spaces. The defined models were explored in three speculative use cases to exemplify and refine them. Establishing ethics as an integral part of design, economics, engineering and development takes time and lots of dedicated work. Work that has to start long before artificial superintelligence has been attained.',
  externalLinks: [
    {
      title: 'Read the thesis',
      url: 'https://drive.google.com/file/d/1dezxLIDqTM2B9iwmS5YTkooCg5VFaoFv/view?usp=share_link',
    },
    {
      title: 'Watch the keynote',
      url: 'https://example.com/research',
    },
    {
      title: 'Notion board',
      url: 'https://www.notion.so/beneficialai/Approaching-Beneficial-AI-fd8feb8521624051a825aed94900081d',
    },
  ] as ExternalLink[],
  contentSections: [
    {
      type: 'two-thirds-layout',
      leftContent: 
      [
        'The following is concerned with the topic of beneficial artificial intelligence. “Beneficial”, in this context, means that systems that use AI act in a way that is desired by humans. Therefore two models will be suggested: the first approaches a classification for aspects of beneficiality in artificially intelligent systems. The second one explores methods to capture and counter ethical problem spaces. The defined models will be explored in three speculative use cases to exemplify and refine them. The impact areas of AI are growing constantly as agents advance in capabilities.',
        'As soon as AI systems influence our daily life – and in many ways they already do – it becomes essential to design them to act in a beneficial way: now and looking forward. Establishing ethics as an integral part of design, economics, engineering and development will take time and lots of dedicated work. The constant increase in intelligence makes work on ethical systems a relevant issue long before artificial superintelligence has been attained. A system does not need to be superintelligent to cause serious issues. For example, as the autonomy in the operation of those agents increases, entirely new questions, for example, in the area of accountability for action, will arise.',
      ],
      rightContent: 'With: Mark F. Meyer, Supervision: Prof. David Osswald, Prof. Dr. Ulrich Barnhöfer',
    },
    {
      type: 'image',
      image: '/images/projects/beneficial-ai/Model9.jpg',
    },
    {
      type: 'text',
      content: 'WE BELIEVE THAT',
    },
    {
      type: 'subheadline',
      title: 'Technology & ethics have to be established as a singular vision to enable beneficial artificial outcomes. We believe, that future development of AI must serve an overall purpose. It must preserve and enhance human life, as well as preserve and enhance the planet and its eco-system. There are great chances for AI to do so, but there are also numer-ous risks where AI could lead to an extremely negative outcome. It is of utmost importance to focus our efforts on the positive chances AI can enable us and to specifi- cally target the risks that might occur so that they can be avoided. We do not believe it is a viable option to consider reversing or degenerating the develop-ment of AI, as the pace of development is already fairly high. This unavoidable development strengthens our focus and the overall relevance on working towards the beneficial use of AI.',
    },
    {
      type: 'text',
      content: 'FRAMING BENEFICIAL...',
    },
    {
      type: 'subheadline',
      title: 'Crafting around beneficiality is a transdiciplinary, iterative process involving many stakeholders',
    },
    {
      type: 'two-column',
      layout: 'text-text',
      leftContent: 'Approaching beneficial AI requires approaching what is to be considered beneficial. Maximizing beneficiality in an artificial agent’s behaviour can be seen as a funda-mental goal in ensuring its safe operation and the promotion of goals considered broadly beneficial. To structure different actions and cluster steps relevant in approaching a system’s ben- eficial behaviour, the diverse aspects that contribute to the process can be classified in a model. The layers represent key areas of focus when designing beneficial agents. This model is not a conclusive instruction to achieve beneficial beha-viour, but rather is sup- posed to give guidance and establish beneficiality in the developer’s thinking.',
      rightContent: 
      [
        'FEATURE 1: Beneficiality depends on the use case, those affected by an agents operation and their values',
        'FEATURE 2: Beneficial AI is a multidiciplinary endeavour that cannot be solved, only approached', 
        'FEATURE 3: Beneficial behaviour has to be established from the beginning as an integral part of the system',
      ]
    },
    {
      type: 'image',
      image: '/images/projects/beneficial-ai/Model3.jpg',
    },
    {
      type: 'text',
      content: 'The debate about how a “common beneficial” should be defined takes place on multiple layers across many disciplines and spans a long timeframe. Though general rough understanding of what is beneficial exists in many cases (e.g., no human should come to harm from an action), it is important to note that actions that are considered beneficial by an individual are not necessarily the most ethical actions. It can be assumed that there is no such thing as an “absolute perfect beneficial” for all affected parties in a situation, consequently a lot of consideration has to be placed on defining the agent’s value system to guide the process of finding a sufficient beneficial for its actions. Furthermore ensuring beneficial behaviour is a recursive endeavour, not a linear process. All of the pillars have to be regularly revisited as circumstances change (e.g. an agent’s level of intelligence increases). In order to successfully transition from the debate about super-intelligent agents to more concrete ethical questions, we suggest a model for beneficial AI. This model consists of a foundation and three pillars that must be satisfied in order to achieve “beneficial AI”. The foundation describes essential prerequisites that have to be addressed beforehand, whereas the pillars describe aspects of a system that must be approached in order for the system to be beneficial. These three pillars address defining, implementing and ensuring beneficiality in artificial agents.',
    },
     {
      type: 'text',
      content: 'APPROACHING PROBLEMSPACES',
    },
    {
      type: 'subheadline',
      title: 'Problem space are complex ethical issues in the way of beneficial AI',
    },
    {
      type: 'image',
      image: '/images/projects/beneficial-ai/Model6.jpg',
    },
    {
      type: 'two-column',
      layout: 'text-text',
      leftContent: 'Concrete ethical issues in use cases often have underlying ethical problems. To frame these underlying problems, we suggest the concept of a “problem space”. We show that problem spaces can be described by analyzing use cases in detail and inducting from there to a higher-level issue. These higher-level issues are useful, because they allow transferring approaches from different situat-ions, in which the underlying ethical issues are similar. We present a model, in which the problem space is first framed by analyzing the effects on involved stakeholders over time in the use case that is being developed. Then an ideal- ized goal is developed, which may not ever be reached, but serves as a guideline for what should be achieved under ideal circumstances. Next, concrete actions are formulated to approach the idealized goal. These concrete actions can be seen as countermeasures, meaning that they can be used to reduce the impact of the problem space. It is important to note, that problem spaces typically cannot be fully solved, therefore the actions that are developed during this process are used to reduce the impact of a problem space, rather than completely eliminate it. Because problem spaces cannot be entirely resolved, they will affect a system using AI over a longer period of time, which means the problem space must be regularly reevaluated. Lastly, we present several methods that can be used to frame and approach a problem space. These methods mostly originate from design-practices. We elaborate how they can be used in the context of working with AI.',
      rightContent: 
      [
        'FEATURE 1: Problem spaces can only be approached and their effects minimized, but not always solved.',
        'FEATURE 2: Problem spaces are often hidden patterns and have to be actively uncovered to be approached.', 
        'FEATURE 3: Problem spaces have many causes and have to be approached by multiple measures.',
      ]
    },
    {
      type: 'subheadline',
      title: 'Our standing: Ethical questions must be addressed, long before superintelligent artificial agents become a reality. From Problemspaces to Beneficial Goals – in the Context of […]',
    },
    {
      type: 'text',
      content: 'To refine the models and demonstrate how the process of framing and approaching problem spaces can be applied to the creation of artificially intelligent systems we created three rough use cases. Since the underlying objective is to design the applications in the use case in a beneficial way the ‘pillars of beneficiality’ were used as guidance in regard to what should be achieved. The three use cases are set in different scenarios, each taking one step further into the future. The “beneficial layer” in each use case explains the different counter measures that help countering the problem spaces.  ',
    },
    {
      type: 'image',
      image: '/images/projects/beneficial-ai/Model8.jpg',
    },


   
  ] as ContentSection[],
};
