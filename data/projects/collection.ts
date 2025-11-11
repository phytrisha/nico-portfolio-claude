import type { Project } from '../types';

export const collection: Project = {
  id: 15,
  slug: 'collection',
  title: 'More Projects',
  shortTitle: 'More Projects',
  category: 'freelance',
  tags: ['E-COMMERCE', 'UX'],
  year: '2021',
  color: '#FFC533',
  metadata: {
    topics: 'E-commerce, User Experience',
  },
  description: 'A loose collection of some more projects from the past years...',
  externalLinks: [],
  // New metadata structure
  metadata: {
    degree: 'Master Thesis (MA)',
    program: 'Strategic Design',
    year: '2019',
    institution: 'HfG Schwäbisch Gmünd',
    supervision: [
      { name: 'Prof. David Osswald', url: 'https://www.hfg-gmuend.de/david-osswald' },
      { name: 'Prof. Dr. Ulrich Barnhöfer', url: 'https://www.hfg-gmuend.de/ulrich-barnhoefer' }
    ],
    collaborators: [
      { name: 'Mark F. Meyer', url: 'https://markfmeyer.com' }
    ],
    topics: ['Artificial Intelligence', 'Ethics', 'Scenario Design'],
  },

  description: 'This master thesis is concerned with the topic of beneficial artificial intelligence. Broadly “beneficial”, in this context, means that AI systems act in a way that is desired by humans. There are great chances for AI to positively influence many areas of our life, but also numerous risks with potentially extremely negative outcome. To approach beneficial behavior of such systems two models are outlined: the first suggests a classification for aspects of beneficiality in artificially intelligent systems. The second one explores methods to capture and counter ethical problem spaces. The defined models were explored in three speculative use cases to exemplify and refine them. Establishing ethics as an integral part of design, economics, engineering and development takes time and lots of dedicated work. Work that has to start long before artificial superintelligence has been attained.',

  // New project section structure demonstrating all components
  projectSection: {
    type: 'project-section',
    subSections: [
      // ===== INTRODUCTION SECTION =====
      {
        header: 'Introduction',
        number: '01',
        components: [
          {
            type: 'paragraph',
            content: 'The following is concerned with the topic of beneficial artificial intelligence. "Beneficial", in this context, means that systems that use AI act in a way that is desired by humans. Therefore two models will be suggested: the first approaches a classification for aspects of beneficiality in artificially intelligent systems.'
          },
          {
            type: 'paragraph',
            content: 'As soon as AI systems influence our daily life – and in many ways they already do – it becomes essential to design them to act in a beneficial way: now and looking forward. Establishing ethics as an integral part of design, economics, engineering and development will take time and lots of dedicated work.'
          },
        ]
      },

      // ===== INLINE HEADER EXAMPLE =====
      {
        components: [
          {
            type: 'inline-header',
            content: 'Research Question'
          },
          {
            type: 'paragraph',
            content: 'How can we approach the design of beneficial artificial intelligence systems that respect human values and ethical principles?'
          },
        ]
      },

      // ===== FEATURE BLOCK EXAMPLE =====
      {
        header: 'Key Features',
        number: '02',
        components: [
          {
            type: 'feature-block',
            skyline: '> CLASSIFICATION MODEL',
            description: 'A comprehensive framework for evaluating aspects of beneficiality in AI systems, considering technical, ethical, and social dimensions.'
          },
          {
            type: 'divider'
          },
          {
            type: 'feature-block',
            skyline: '> ETHICAL PROBLEM SPACES',
            description: 'Methods to identify, analyze, and address ethical challenges in AI development through structured design thinking approaches.'
          },
          {
            type: 'divider'
          },
          {
            type: 'feature-block',
            skyline: '> SPECULATIVE USE CASES',
            description: 'Three carefully crafted scenarios that explore the practical implications of beneficial AI principles in real-world contexts.'
          },
        ]
      },

      // ===== HERO IMAGE EXAMPLE =====
      {
        header: 'Visual Documentation',
        number: '03',
        components: [
          {
            type: 'hero-image',
            src: '/images/projects/beneficial-ai/Model9.jpg',
            alt: 'Beneficial AI Framework Model'
          },
        ]
      },

      // ===== SUBLINES EXAMPLE =====
      {
        components: [
          {
            type: 'sublines',
            content: 'CLASSIFICATION FRAMEWORK\nEthical Dimensions × Technical Capabilities\nVersion 2.0 — Published 2019'
          },
        ]
      },

      // ===== FULL WIDTH MEDIA EXAMPLE =====
      {
        header: 'Methodology',
        number: '04',
        components: [
          {
            type: 'paragraph',
            content: 'The research methodology combines theoretical frameworks with practical design exploration. Through an iterative process, two key models were developed and tested across multiple scenarios.'
          },
          {
            type: 'full-width-image',
            src: '/images/projects/beneficial-ai/methodology.jpg',
            alt: 'Research methodology overview'
          },
        ]
      },

      // ===== SIDE-BY-SIDE EXAMPLE =====
      {
        header: 'Case Studies',
        number: '05',
        components: [
          {
            type: 'paragraph',
            content: 'Three speculative use cases were developed to test and refine the proposed models. Each case study explores different aspects of beneficial AI implementation.'
          },
          {
            type: 'side-by-side',
            left: {
              type: 'image',
              src: '/images/projects/beneficial-ai/case-study-1.jpg',
              alt: 'Case Study 1: Healthcare AI'
            },
            right: {
              type: 'image',
              src: '/images/projects/beneficial-ai/case-study-2.jpg',
              alt: 'Case Study 2: Autonomous Systems'
            }
          },
          {
            type: 'paragraph',
            content: 'The case studies revealed critical insights about the practical challenges of implementing ethical AI principles in real-world scenarios.'
          },
        ]
      },

      // ===== MIXED CONTENT SECTION =====
      {
        header: 'Key Findings',
        number: '06',
        components: [
          {
            type: 'inline-header',
            content: 'Technical Insights'
          },
          {
            type: 'paragraph',
            content: 'The classification model provides a structured approach to evaluating AI systems across multiple dimensions of beneficiality. It enables designers and developers to identify potential ethical issues early in the development process.'
          },
          {
            type: 'divider'
          },
          {
            type: 'inline-header',
            content: 'Design Implications'
          },
          {
            type: 'paragraph',
            content: 'Integrating ethical considerations into the design process requires new tools, methods, and mindsets. The research demonstrates that beneficial AI is not just a technical challenge but fundamentally a design challenge.'
          },
          {
            type: 'full-width-image',
            src: '/images/projects/beneficial-ai/findings.jpg',
            alt: 'Key research findings visualization'
          },
        ]
      },

      // ===== CONCLUSION =====
      {
        header: 'Conclusion',
        number: '07',
        components: [
          {
            type: 'paragraph',
            content: 'The constant increase in intelligence makes work on ethical systems a relevant issue long before artificial superintelligence has been attained. A system does not need to be superintelligent to cause serious issues.'
          },
          {
            type: 'sublines',
            content: 'FUTURE WORK\n• Expanded case studies\n• Practical implementation guidelines\n• Collaborative framework development'
          },
          {
            type: 'paragraph',
            content: 'Establishing ethics as an integral part of design, economics, engineering and development takes time and lots of dedicated work. Work that has to start long before artificial superintelligence has been attained.'
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
      url: 'https://example.com/research',
    },
    {
      title: 'Notion board',
      url: 'https://www.notion.so/beneficialai/Approaching-Beneficial-AI-fd8feb8521624051a825aed94900081d',
    },
  ],
};
