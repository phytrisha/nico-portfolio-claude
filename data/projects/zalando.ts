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


  // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'Client work · Sept 2018 - July 2019, BERLIN · CLIENT: zalando',
      'involvement: RESEARCH, concept, ui design & TESTING · TEAM: Internal zalando team, henri thomee'
    ]
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
            type: 'intro-text',
            content: 'Zalando SE is one of Europe`s leading online fashion platforms. The company operates multiple cross-platform stores selling shoes, fashion, and beauty products. The client sought to build a custom in-house HR tool where evaluations, promotions, salary adjustments, and developmental feedback, both peer-to-peer and from leadership, as well as mentoring relationships could be managed and maintained through a single internal portal. Used by over 15,000 employees, team leads, and management, this tool serves as the digital backbone of Zalando`s workforce operations. Given the sensitive nature of the relationships maintained on this platform, an extensive user-research-driven UX strategy and a carefully crafted UI design approach were essential to the tools conception and development.',
            py: 'pt-12 pb-12',
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
            content: 'Our research process began with an onboarding workshop to align on scope, success metrics, and early challenges with key stakeholders inside Zalando. This was followed by weeks of inquiry, mapping existing HR processes and workflows, to understand how evaluations and feedback move through the organization. Multiple rounds of stakeholder interviews captured perspectives from employees at all levels, team leads, and management, revealing needs and friction points across different roles.',
            py: 'pt-8 pb-0',         
          },
          {
            type: 'paragraph',
            content: 'These inputs fed into synthesis and ideation: Affinity mapping organized findings into goals, pain points, and actionable opportunities, while 8 distinct personas were developed to represent the full spectrum of users from individual contributors to development managers. Two research and concept workshops with internal Zalando stakeholders validated hypotheses and shaped platform requirements, with iterative refinements and additional interviews ensuring the design addressed real organizational complexity.',
            py: 'pt-6 pb-0',         
          },
           {
            type: 'full-width-image',
            src: '/images/projects/zalando/P4.png',
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
            content: 'User research across Zalandos workforce revealed four interconnected pain points: A review process that felt opaque and arbitrary, feedback that lacked actionable direction, personal development that was difficult to track over time, and a cumbersome feedback system that placed unequal burden on a few ‘unicorn’ contributors. These insights were translated into high level design opportunities: Transparent communication of process stages and reasoning, structured feedback categories that motivate action, visual metrics for tracking growth across review cycles, and a lightweight mechanism for distributing feedback responsibilities equitably. This framework guided design decisions for a tool now serving over 15,000 employees at Zalando.',
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
            content: 'We translated our research insights and opportunity areas into feature requirements, capturing all capabilities the platform needed to serve its diverse stakeholders. These requirements informed Zonar’s information architecture, organizing functionality into navigable structures. From there, an iterative design cycle began: Low-fidelity wireframes were tested with users, findings were analyzed and incorporated, then refined into high-fidelity wireframes for further validation. This progressive refinement resulted in final UI concepts, which were delivered to the development team as detailed specifications including a Sketch asset library and style guide.',
            py: 'pt-8 pb-0',
          },
           {
            type: 'full-width-image',
            src: '/images/projects/zalando/P5.png',
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
            type: 'feature-block',
            skyline: 'User Dashboard',
            description: 'On login users are provided with a personalized dashboard that gives them an at-a-glance overview of their development journey. Users can see their self-identified strengths and growth areas, upcoming key dates in the review cycle, pending feedback requests from colleagues, and in-progress evaluations. This creates transparency around process stages and outstanding actions.',
            py: 'pt-3 pb-6',
          },  
          {
            type: 'full-width-image',
            src: '/images/projects/zalando/S2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'feature-block',
            skyline: 'Performance Evaluation & Nomination List',
            description: 'Users get an overview over their current feedback nomination list and can invite colleagues, stakeholders, and directs to provide feedback on their performance, with guidance encouraging diverse perspectives. Progress indicators and status labels (accepted, declined, completed) make the current state of each nomination immediately visible, addressing the need for transparency.',
            py: 'pt-3 pb-6',
          },  
          {
            type: 'full-width-image',
            src: '/images/projects/zalando/S3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'feature-block',
            skyline: 'Team member profile  with Performance Insights',
            description: 'A manager-facing view consolidating an employees evaluation feedback into actionable visualizations. A radar chart maps performance across capability dimensions (analytical thinking, innovation, execution, etc.), while a rating distribution panel shows how evaluators scored specific competencies. This makes development trackable over time and across review cycles, transforming a previously scattered feedback process into more structured, comparable metrics.',
            py: 'pt-3 pb-12',
          }, 
        ]
      },  
    ]
  },
};
