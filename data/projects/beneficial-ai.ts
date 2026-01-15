import type { Project } from '../types';

export const beneficialAI: Project = {
  id: 1,
  slug: 'beneficial-ai',
  title: 'Approaching Beneficial Artificial Intelligence in the Context of [...]',
  shortTitle: 'Approaching Beneficial Artificial Intelligence in the Context of [...]',
  category: 'strategic-design',
  tags: ['MA-THESIS · STRATEGIC-DESIGN · BENEFICIAL AI'],
  year: '2019',
  color: '#FF6D01',

  // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'Master Thesis (MA) · Strategic Design · Feb 2019 – July 2019 · HfG Schwäbisch Gmünd · With: [Mark F. Meyer](https://mark-gestaltung.de) · ',
      'Supervision: [Prof. David Osswald](https://www.hfg-gmuend.de/personen/david-oswald), [Prof. Dr. Ulrich Barnhöfer](https://www.hfg-gmuend.de/en/people/ulrich-barnh%C3%B6fer)',
    ]
  },


  description: 'This master thesis is concerned with the topic of beneficial artificial intelligence. Broadly “beneficial”, in this context, means that AI systems act in a way that is desired by humans. There are great chances for AI to positively influence many areas of our life, but also numerous risks with potentially extremely negative outcome. To approach beneficial behavior of such systems two models are outlined: the first suggests a classification for aspects of beneficiality in artificially intelligent systems. The second one explores methods to capture and counter ethical problem spaces. The defined models are explored in three speculative use cases to exemplify and refine them. Establishing ethics as an integral part of design, economics, engineering and development takes time and lots of dedicated work. Work that has to start long before artificial superintelligence has been attained.',





  // New project section structure demonstrating all components
  projectSection: {
    type: 'project-section',
    subSections: [
      // ===== INTRODUCTION SECTION =====
      {
        header: 'DESCRIPTION',
        number: '01',
        components: [
          {
            type: 'hero-image',
            src: '/images/projects/beneficial-ai/Model1.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-0'
          },
          {
            type: 'intro-text',
            content: 'This master thesis is concerned with the topic of beneficial artificial intelligence. Broadly "beneficial", in this context, means that AI systems act in a way that is desired by humans. There are great chances for AI to positively influence many areas of our life, but also numerous risks with potentially extremely negative outcome. It is therefore essential to design those systems to act in a beneficial way: now and looking forward. To approach beneficial behavior of such systems two models are outlined: the first suggests a classification for aspects of beneficiality in artificially intelligent systems. The second one explores methods to capture and counter ethical problem spaces. The defined models were explored in three speculative use cases to exemplify and refine them. Establishing ethics as an integral part of design, economics, engineering and development takes time and lots of dedicated work. Work that has to start long before artificial super-intelligence has been attained.',
            py: 'pt-12 pb-10',          
          },

        ]
      },

      // ===== SECTION =====
      {
        header: 'WE BELIEVE THAT',
        number: '02',
        components: [
          {
            type: 'paragraph',
            content: 'Technology & ethics have to be established as a singular vision to enable beneficial artificial outcomes. We believe, that future development of AI must serve an overall purpose. It must preserve and enhance human life, as well as preserve and enhance the planet and its eco-system. There are great chances for AI to do so, but there are also numerous risks where AI could lead to an extremely negative outcome. It is of utmost importance to focus our efforts on the positive chances AI can enable us and to specifically target the risks that might occur so that they can be avoided. We do not believe it is a viable option to consider reversing or degenerating the develop-ment of AI, as the pace of development is already fairly high. This unavoidable development strengthens our focus and the overall relevance on working towards the beneficial use of AI.',
          },
          
        ]
      },

      // ===== SECTION =====
      {
        header: 'FRAMING BENEFICIAL...',
        number: '03',
        components: [
          
        ]
      },
      {
        components: [
          {
            type: 'inline-header',
            content: 'Crafting around beneficiality is a transdiciplinary, iterative process',
            py: 'pt-8 pb-4',
          },
          {
            type: 'paragraph',
            content: 'Approaching beneficial AI requires approaching what is to be considered beneficial. Maximizing beneficiality in an artificial agent’s behaviour can be seen as a fundamental goal in ensuring its safe operation and the promotion of goals considered broadly beneficial. To structure different actions and cluster steps relevant in approaching a system’s beneficial behaviour, the diverse aspects that contribute to the process can be classified in a model. The layers represent key areas of focus when designing beneficial agents. This model is not a conclusive instruction to achieve beneficial behaviour, but rather is sup- posed to give guidance and establish beneficiality in the developer’s thinking.',
            py: 'py-0'
          },
        ]
      },
      // ===== FEATURE BLOCK EXAMPLE =====
      {
        //header: 'Key Features',
        number: '02',
        components: [
          {
            type: 'feature-block',
            skyline: 'FEATURE 01',
            description: 'Beneficiality depends on the use case, those affected by an agents operation and their values.'
          },
          {
            type: 'feature-block',
            skyline: 'FEATURE 02',
            description: 'Beneficial AI is a multidiciplinary endeavour that cannot be solved, only approached.',
            py: 'py-0'

          },
          {
            type: 'feature-block',
            skyline: 'FEATURE 03',
            description: 'Beneficial behaviour has to be established from the beginning as an integral part of the system.'
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        //header: 'Methodology',
        number: '04',
        components: [
          {
            type: 'full-width-image',
            src: '/images/projects/beneficial-ai/Model3.jpg',
            alt: 'Research methodology overview',
            py: 'pb-4'

          },
          {
            type: 'sublines',
            content: 'MODEL: THE PILLARS OF BENEFICIALITY',
            py: 'py-0'
          },
           {
             type: 'paragraph',
             content: 'The debate about how a “common beneficial” should be defined takes place on multiple layers across many disciplines and spans a long timeframe. Though general rough understanding of what is beneficial exists in many cases (e.g., no human should come to harm from an action), it is important to note that actions that are considered beneficial by an individual are not necessarily the most ethical actions. It can be assumed that there is no such thing as an “absolute perfect beneficial” for all affected parties in a situation, consequently a lot of consideration has to be placed on defining the agent’s value system to guide the process of finding a sufficient beneficial for its actions. Furthermore ensuring beneficial behaviour is a recursive endeavour, not a linear process. All of the pillars have to be regularly revisited as circumstances change (e.g. an agent’s level of intelligence increases). In order to successfully transition from the debate about super-intelligent agents to more concrete ethical questions, we suggest a model for beneficial AI. This model consists of a foundation and three pillars that must be satisfied in order to achieve “beneficial AI”. The foundation describes essential prerequisites that have to be addressed beforehand, whereas the pillars describe aspects of a system that must be approached in order for the system to be beneficial. These three pillars address defining, implementing and ensuring beneficiality in artificial agents.',            
            },
        ]
      },


      {
        header: 'APPROACHING PROBLEMSPACES',
        number: '04',
        components: [
        ]
      },
      {
        components: [
          {
            type: 'inline-header',
            content: 'Problem space are complex ethical issues in the way of beneficial AI', 
            py: 'pt-8 pb-4',
          },
          {
            type: 'paragraph',
            content: 'Concrete ethical issues in use cases often have underlying ethical problems. To frame these underlying problems, we suggest the concept of a “problem space”. We show that problem spaces can be described by analyzing use cases in detail and inducting from there to a higher-level issue. These higher-level issues are useful, because they allow transferring approaches from different situat-ions, in which the underlying ethical issues are similar. We present a model, in which the problem space is first framed by analyzing the effects on involved stakeholders over time in the use case that is being developed. Then an idealized goal is developed, which may not ever be reached, but serves as a guideline for what should be achieved under ideal circumstances. Next, concrete actions are formulated to approach the idealized goal. These concrete actions can be seen as countermeasures, meaning that they can be used to reduce the impact of the problem space. It is important to note, that problem spaces typically cannot be fully solved, therefore the actions that are developed during this process are used to reduce the impact of a problem space, rather than completely eliminate it. Because problem spaces cannot be entirely resolved, they will affect a system using AI over a longer period of time, which means the problem space must be regularly reevaluated. Lastly, we present several methods that can be used to frame and approach a problem space. These methods mostly originate from design-practices. We elaborate how they can be used in the context of working with AI.',
            py: 'py-0'
          },
        ]
      },
      // ===== FEATURE BLOCK EXAMPLE =====
      {
        //header: 'Key Features',
        number: '02',
        components: [
          {
            type: 'feature-block',
            skyline: 'FEATURE 01',
            description: 'Problem spaces can only be approached and their effects minimized, but not always solved.'
          },
          {
            type: 'feature-block',
            skyline: 'FEATURE 02',
            description: 'Problem spaces are often hidden patterns and have to be actively uncovered to be approached.',
            py: 'py-0'
          },
          {
            type: 'feature-block',
            skyline: 'FEATURE 03',
            description: 'Problem spaces have many causes and have to be approached by multiple measures.'
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        //header: 'Methodology',
        number: '04',
        components: [
          {
            type: 'full-width-image',
            src: '/images/projects/beneficial-ai/Model6.jpg',
            alt: 'Research methodology overview',
            py: 'pt-2 pb-2'
          },
          {
            type: 'sublines',
            content: 'ANATOMY OF A PROBLEMSPACE',
            py: 'pt-2 pb-2'
          },
          {
             type: 'paragraph',
             content: 'To refine the models and demonstrate how the process of framing and approaching problem spaces can be applied to the creation of artificially intelligent systems we created three rough use cases. Since the underlying objective is to design the applications in the use case in a beneficial way the ‘pillars of beneficiality’ were used as guidance in regard to what should be achieved. The three use cases are set in different scenarios, each taking one step further into the future. The “beneficial layer” in each use case explains the different counter measures that help countering the problem spaces.'
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        //header: 'Methodology',
        number: '04',
        components: [
          {
            type: 'full-width-image',
            src: '/images/projects/beneficial-ai/Model10.png',
            alt: 'Research methodology overview',
            py: 'py-0'

          },
        ]
      },
      // ===== SUBLINE =====
      {
        components: [
          {
            type: 'sublines',
            content: 'FOCUS PROBLEMSPACES IN THE CONTEXT OF TIME AND USECASES',
                        py: 'pt-4 pb-8'

          },
        ]
      },
  
    ]
  },

  // External links
  externalLinks: [
    {
      title: 'Read the thesis',
      url: 'https://drive.google.com/file/d/1dezxLIDqTM2B9iwmS5YTkooCg5VFaoFv/view?usp=share_link',
    },
    {
      title: 'Watch the keynote',
      url: 'https://vimeo.com/406880048?fl=pl&fe=ti',
    },
    {
      title: 'Notion board',
      url: 'https://www.notion.so/beneficialai/Approaching-Beneficial-AI-fd8feb8521624051a825aed94900081d',
    },
  ],
};
