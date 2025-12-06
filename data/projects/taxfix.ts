import type { Project } from '../types';

export const taxfix: Project = {
  id: 14,
  slug: 'taxfix',
  title: 'Taxfix project workhorse',
  shortTitle: 'Taxfix project workhorse',
  category: 'freelance',
  tags: ['FREELANCE WORK · TAX LOGIC · NO-CODE INTERFACES ·  REASEARCH, CONCEPT & TESTING'],
  year: '2021',
  color: '#259918',



   // New metadata structure
  metadata: {
    topics: ['FREELANCE WORK · TAX LOGIC · NO-CODE INTERFACES ·  REASEARCH, CONCEPT & TESTING · 2021 · CLIENT: TAXFIX'],
  },


  description: 'Taxfix offers an online tax assistance platform designed to simplify tax declarations to end users via a dynamic questionnaire to fully automate communication with the user and accommodate fiscal differences across countries, enabling private individuals to get back their tax refunds. In order for the user-facing application to work internal tooling needed to be devised to enable Taxfix`s tax experts to define tax logic independently from developers and without the need to code themselves. Based on an extensive research and synthesis phase, understanding tax experts workflows and needs, a no-code editor was conceptualized, wireframed, and tested across multiple ideation rounds. For this functional outline a design language was crafted, focussed on bringing visual structure and clarity to a tool that enables high-complexity workflows within dense information structures.',






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
            src: '/images/projects/taxfix/cover.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-0'
          },
          {
            type: 'paragraph',
            content: 'Taxfix offers an online tax assistance platform designed to simplify tax declarations to end users via a dynamic questionnaire to fully automate communication with the user and accommodate fiscal differences across countries, enabling private individuals to get back their tax refunds. In order for the user-facing application to work internal tooling needed to be devised to enable Taxfix`s tax experts to define tax logic independently from developers and without the need to code themselves. Based on an extensive research and synthesis phase, understanding tax experts workflows and needs, a no-code editor was conceptualized, wireframed, and tested across multiple ideation rounds. For this functional outline a design language was crafted, focussed on bringing visual structure and clarity to a tool that enables high-complexity workflows within dense information structures.',
          },
          
        ]
      },
      



      // ===== SECTION =====
      {
        header: 'USER RESEARCH: OUTLINING PROBLEM-SPACES THROUGH IN-DEPTH ANALYSIS',
        number: '02',
        components: [
          {
            type: 'paragraph',
            content: 'Based on the initial research conducted major pain points were identified that made the current code based solution both inefficient and unnecessarily complicated. Those pain points (alongside other problems identified) served as the foundation for ideation, wireframing and testing.',
            py: 'pt-8 pb-0',
          
          },
           {
            type: 'full-width-image',
            src: '/images/projects/taxfix/P1.jpg',
            alt: 'Research methodology overview',
           py: 'pt-6 pb-8',
          },  
        ]
      },


      // ===== SECTION =====
      {
        header: 'PAIN POINTS AND OPPORTUNITY AREAS',
        number: '03',
        components: [
          {
            type: 'paragraph',
            content: 'Based on the initial research conducted major pain points were identified that made the current code based solution both inefficient and unnecessarily complicated. Those pain points (alongside other problems identified) served as the foundation for ideation, wireframing and testing.',
            py: 'pt-8 pb-2',
          },
           {
            type: 'full-width-image',
            src: '/images/projects/taxfix/P2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          },  
        ]
      },


      // ===== SECTION =====
      {
        header: 'INTERVENTIONS, CAPABILITIES, AND FEATURES',
        number: '04',
        components: [
          {
            type: 'paragraph',
            content: 'From Translating insights into software features, to conceptualizing & testing UX solutions. Building the non-code editor was a highly iterative process that strechted over multiple months to traslate the vast amount of insights into tangbile product solutions. Due to the complexity and interdependence of tax-law, conceptualizing the no-code editor that enables tax experts to build tax logic which is then presented to end users in the form of questions in the consumer facing side of the product, proved to be both a highly challenging and a super interesting process...',
            py: 'pt-8 pb-0',
          },
           {
            type: 'full-width-image',
            src: '/images/projects/taxfix/P3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          },  
        ]
      },


      // ===== SECTION =====
      {
        header: 'OUTCOME',
        number: '05',
        components: [
           {
            type: 'full-width-image',
            src: '/images/projects/taxfix/S1.jpg',
            alt: 'RELEASE PACKAGE OVERVIEW & SCHEDULING',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'RELEASE PACKAGE OVERVIEW & SCHEDULING (DATA ANONYMIZED)',
            py: 'pt-0 pb-2',
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/taxfix/S2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'NO-CODE TAX LOGIC BUILDER FOR INCOMES AND DEDUCTIONS FOR BUILDING CALCULATION LOGIC (DATA ANONYMIZED)',
            py: 'pt-0 pb-2',

          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/taxfix/S3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'QUESTION EDITOR WHERE TAX EXPERTS DEFINE THE CONTENT AND ORDER OF QUESTIONS END USERS WILL SEE (DATA ANONYMIZED)',
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