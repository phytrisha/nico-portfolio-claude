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



  // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'Client work · Feb - OCT 2022, BERLIN · CLIENT: TAXFIX',
      'Role / involvement: USER RESEARCH, UX CONCEPT & TESTING · TEAM: Internal taxfix team, henri thomee'
    ]
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
            content: 'Our research process combined multiple methods to build a comprehensive understanding of user needs and business context. Qualitative interviews, competitor analysis, stakeholder workshops, and workflow testing provided diverse perspectives on current challenges and opportunities. These inputs were then synthesized through affinity mapping, user journey visualization, and persona development, translating raw data into actionable insights that defined the problem space and established clear goals for the design phase of the no-code editor.',
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
            content: 'For example user research revealed three core pain points in the existing workflow: Rigid hard-coded tax logic that resisted change, error-prone communication between tax experts and developers, and the absence of release management infrastructure. These insights were translated into actionable opportunity areas: Flexibility through visual logic building, empowerment by giving tax experts direct control over implementation, and structured release planning across markets and tax years. This problem-to-opportunity mapping provided a clear roadmap for design decisions throughout the project.',
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
            content: 'Translating research insights into software features and testable interfaces required an iterative process that stretched over multiple months. The no-code editor, designed to enable tax experts to build tax logic that surfaces as guided questions on the consumer-facing side, demanded careful conceptualization and continuous testing. Given the complexity and interdependent logic of tax law, designing an interface that makes this logic accessible to non-developers proved both exceptionally challenging and deeply rewarding (and sometimes really frustrating...).',
            py: 'pt-8 pb-0',
          },
          {
            type: 'full-width-image',
            src: '/images/projects/taxfix/P3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          }, 
          {
            type: 'hero-image',
            src: '/images/projects/taxfix/wireframe.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-0'
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
            type: 'feature-block',
            skyline: 'Release Package Overview & Scheduling',
            description: 'The release package dashboard provides tax experts with a high-level view of release packages across multiple markets and tax years. Users can manage production and staging environments, track version history, and schedule deployments, ensuring tax logic updates are coordinated across countries and aligned with annual regulatory changes.',
            py: 'pt-3 pb-6',
          },  
          {
            type: 'full-width-image',
            src: '/images/projects/taxfix/S2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'feature-block',
            skyline: 'No-Code Tax Logic Builder',
            description: 'The no-code visual rule editor enables tax experts to construct complex calculation logic without writing code. The interface maps entities to conditional rules that determine eligibility, thresholds, and applicable deductions. Branching logic and attribute relation-ships are displayed spatially, making interdependen-cies between tax rules transparent and editable across different layers.',
            py: 'pt-3 pb-6',
          },  
          {
            type: 'full-width-image',
            src: '/images/projects/taxfix/S3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'feature-block',
            skyline: 'Question Flow Editor',
            description: 'To define the questions end-users will be shown in the Taxfix app, we build a dedicated authoring environment where tax experts define the questions end users encounter in different languages. Each question is linked to underlying data entities and attributes, with support for conditional display logic, multilingual content, and answer type configuration. The hierarchical sidebar reveals how questions relate to one another.',
            py: 'pt-3 pb-12',
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