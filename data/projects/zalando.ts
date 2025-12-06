import type { Project } from '../types';

export const zalando: Project = {
  id: 13,
  slug: 'zalando',
  title: 'Zalando-Zonar: Internal HR-performance & feedback tooling',
  shortTitle: 'Zalando-Zonar: Internal HR-performance & feedback tooling',
  category: 'freelance',
  tags: ['FREELANCE WORK · HR-TOOLING · PROFESSIONAL DEVELOPMENT · RESEARCH & CONCEPT'],
  year: '2018',
  color: '#259918',


    // New metadata structure
  metadata: {
    topics: ['FREELANCE WORK · HR-TOOLING · PROFESSIONAL DEVELOPMENT · RESEARCH & CONCEPT · 2018 · CLIENT: ZALANDO'],
  },


  description: 'Zalando SE is one of Europe`s leading online fashion platforms. The company operates multiple cross-platform stores selling shoes, fashion, and beauty products. The client sought to build a custom in-house HR tool where evaluations, promotions, salary adjustments, and developmental feedback, both peer-to-peer and from leadership, as well as mentoring relationships could be managed and maintained through a single internal portal. Used by over 15,000 employees, team leads, and management, this tool serves as the digital backbone of Zalando`s workforce operations. Given the sensitive nature of the relationships maintained on this platform, an extensive user-research-driven UX strategy and a carefully crafted UI design approach were essential to the tools conception and development.',






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
            src: '/images/projects/zalando/cover.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-0'
          },
          {
            type: 'paragraph',
            content: 'Zalando SE is one of Europe`s leading online fashion platforms. The company operates multiple cross-platform stores selling shoes, fashion, and beauty products. The client sought to build a custom in-house HR tool where evaluations, promotions, salary adjustments, and developmental feedback, both peer-to-peer and from leadership, as well as mentoring relationships could be managed and maintained through a single internal portal. Used by over 15,000 employees, team leads, and management, this tool serves as the digital backbone of Zalando`s workforce operations. Given the sensitive nature of the relationships maintained on this platform, an extensive user-research-driven UX strategy and a carefully crafted UI design approach were essential to the tools conception and development.',
          },
          
        ]
      },





      // ===== SECTION =====
      {
        header: 'Research, Synthesis, & Ideation',
        number: '02',
        components: [
          {
            type: 'paragraph',
           content: 'Based on the initial research conducted major pain points were identified that made the current code based solution both inefficient and unnecessarily complicated. Those pain points (alongside other problems identified) served as the foundation for ideation, wireframing and testing.',
            py: 'pt-8 pb-0',
          
          },
           {
            type: 'full-width-image',
            src: '/images/projects/zalando/P1.jpg',
            alt: 'Research methodology overview'
          },  
        ]
      },


      // ===== SECTION =====
      {
        header: 'Pain Points & Opportunities',
        number: '03',
        components: [
          {
            type: 'paragraph',
            content: 'User research insights were translated into pain points and actionable opportunity areas, providing a clear roadmap for future design decisions.',
                        py: 'pt-8 pb-2',
          },
           {
            type: 'full-width-image',
            src: '/images/projects/zalando/P2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          },  
        ]
      },


      // ===== SECTION =====
      {
        header: 'Interventions, capabilites, and features',
        number: '04',
        components: [
          {
            type: 'paragraph',
            content: 'From Translating insights into software features, to conceptualizing & testing UX solutions. Building the non-code editor was a highly iterative process that strechted over multiple months to traslate the vast amount of insights into tangbile product solutions. Due to the complexity and interdependence of tax-law, conceptualizing the no-code editor that enables tax experts to build tax logic which is then presented to end users in the form of questions in the consumer facing side of the product, proved to be both a highly challenging and a super interesting process...',
                      py: 'pt-8 pb-0',
          },
           {
            type: 'full-width-image',
            src: '/images/projects/zalando/P3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          },  
        ]
      },


      // ===== SECTION =====
      {
        header: 'Outcome',
        number: '05',
        components: [
           {
            type: 'full-width-image',
            src: '/images/projects/zalando/S1.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'User dashboard (data anonymized)',
            py: 'pt-0 pb-2',
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/zalando/S2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'Performance evaluation with nomination list (data anonymized)',
            py: 'pt-0 pb-2',

          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/zalando/S3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'personal profile with performance evaluation insights (data anonymized)',
            py: 'pt-0 pb-8',
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
