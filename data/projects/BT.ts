import type { Project } from '../types';

export const BT: Project = {
  id: 4,
  slug: 'BT',
  title: 'Case Study: Crafting a high fidelity design system for consistency & scaling',
  shortTitle: 'Case Study: Crafting a high fidelity design system for consistency & scaling',
  category: 'client work',
  tags: ['CLIENT WORK, CLIENT: CONFIDENTIAL, DESIGN SYSTEM & UX'],
  year: '2026',
  color: '#259918',
  protected: true,


  // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'CLIENT: Confidential (Banking Sector) · Client work · NOV 2025 - DEC 2025',
      'involvement: DESIGN SYSTEM BUILDING, ui design, PROTOTYPING · TEAM: External consulting, INTERNAL CLIENT '
    ]
  },



  description: 'A banking client was rebuilding their customer-facing digital customer experience from scratch. I was brought in as an external specialist to architect and build a scalable design system that would serve as the foundation for this new digital experience and scale across different products in their portfolio in the future. I was simultaneously contributing to the applications UI/UX design, testing and interating the design system through real-world application in a constantly evolving product.',






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
            src: '/images/projects/BT/BTcover.jpg',
            alt: 'cover',
            py: 'pb-0'
          },
          {
            type: 'intro-text',
            content: 'A banking client was rebuilding their customer-facing digital customer experience from scratch. I was brought in as an external specialist to architect and build a scalable design system that would serve as the foundation for this new digital experience and scale across different products in their portfolio in the future. I was simultaneously contributing to the applications UI/UX design, testing and interating the design system through real-world application in a constantly evolving product.',
            py: 'pt-12 pb-12',
          },
        ]
      },





      // ===== SECTION =====
      {
        header: 'Challenge & Role',
        number: '02',
        components: [
          {
            type: 'paragraph',
            content: 'Timeline: One month to deliver a production-ready, multi-platform design system that the internal team could maintain and extend independently in the future.',
            py: 'pt-8 pb-0',         
          },
          {
            type: 'paragraph',
            content: 'Core requirements:',
            py: 'pt-6 pb-0',         
          },
          {
            type: 'bullet-list',
            items: [
              'Enable consistency across iOS, Android, and web platforms',
              'Minimize component proliferation through intelligent, configurable architecture',
              'Provide clear guidance for the clients internal design team to maintain and extend the system independently',
              'Validate / iterate the system through real-world application in parallel UI design work',
            ],
            py: 'pt-2 pb-0',
          },



          {
            type: 'paragraph',
            content: 'I operated as a freelance contractor embedded within a layered project structure:',
            py: 'pt-8 pb-0',         
          },
          {
            type: 'bullet-list',
            items: [
              'Internal Design Team (Client): Feedback loops, handoff recipients',
              'External Consulting Team: Overseeing the strategic and visual direction of the reconceptualization and product strategy',
              'My Position: Specialist brought in for design systems expertise and structured UI/UX execution',
            ],
            py: 'pt-2 pb-10',
          },
        ]
      },


      // ===== SECTION =====
      {
        header: 'Approach',
        number: '03',
        components: [
          {
            type: 'inline-header',
            content: 'Token-First Foundation',
            py: 'pt-8 pb-0',
          },

          {
            type: 'paragraph',
            content: 'The system was built on a two-tier token architecture in Figma:',
            py: 'pt-2 pb-2',
          },
          {
            type: 'bullet-list',
            headline: 'Primitive tokens',
            copy: 'Raw values with no semantic meaning (blue.500, space.4, radius.2). Primitives include for example:',
            items: [
              'Color',
              'Typography scales and styles',
              'Spacing and sizing values',
              'Elevation and effects',
              'Border radii and stroke weights',
            ],
            py: 'pt-0 pb-0',
          },


          {
            type: 'bullet-list',
            headline: 'Semantic tokens',
            copy: 'Purpose-mapped references to primitives (color.text.primary, spacing.md). These change between themes/modes; primitives do not. Semantic tokens include for example clusters for different states of:',
            items: [
              'Surfaces',
              'Action items',
              'Status',
              'Data-visualizations',
              'Icons',
            ],
            py: 'pt-4 pb-6',
          },

           {
            type: 'full-width-image',
            src: '/images/projects/BT/BT1.jpg',
            darkSrc: '/images/projects/BT/BT1_dark.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          },  




          {
            type: 'inline-header',
            content: 'Component Philosophy: Configurability Over Quantity',
            py: 'pt-8 pb-0',
          },
           {
            type: 'paragraph',
            content: 'Figma variables enabled dynamic theming and platform-specific adjustments without component duplication. Rather than creating discrete components for each use case, I designed highly configurable base components with:',
            py: 'pt-2 pb-2',
          },

          {
            type: 'bullet-list',
            items: [
              'Boolean toggles for optional elements (icons, badges, secondary actions)',
              'Instance swapping for flexible content slots',
              'Variant properties mapping to semantic states and sizes',
              'Nested auto-layout ensuring responsiveness across contexts',
              'Border radii and stroke weights',
            ],
            py: 'pt-4 pb-0',
          },

          {
            type: 'paragraph',
            content: 'This approach reduced the total component count while expanding what designers could build—fewer components to maintain, more design possibilities.',
            py: 'pt-8 pb-6',
          },
          {
            type: 'full-width-image',
            src: '/images/projects/BT/BT2.jpg',
            darkSrc: '/images/projects/BT/BT2_dark.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          },  




          {
            type: 'inline-header',
            content: 'Validation Through Application',
            py: 'pt-8 pb-0',
          },
           {
            type: 'paragraph',
            content: 'The design system was not built in isolation. I used the components to design actual application screens in parallel, which served three purposes:',
            py: 'pt-2 pb-2',
          },

          {
            type: 'bullet-list',
            items: [
              'Stress-testing the system against real UI requirements',
              'Demonstrating correct component usage as reference for the internal team',
              'Supporting / moving along the need for a high quantity of screen designs and building prototypes',
            ],
            py: 'pt-4 pb-0',
          },

          {
            type: 'paragraph',
            content: 'This tight feedback loop between system and application ensured the library addressed actual needs rather than theoretical ones.',
            py: 'pt-8 pb-6',
          },

          {
            type: 'full-width-image',
            src: '/images/projects/BT/BT3.jpg',
            darkSrc: '/images/projects/BT/BT3_dark.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-8',
          },  




          {
            type: 'inline-header',
            content: 'Documentation as Deliverable',
            py: 'pt-8 pb-0',
          },
          {
            type: 'paragraph',
            content: 'The library included example for writing and structuring component documentations covering:',
            py: 'pt-2 pb-2',
          },

          {
            type: 'bullet-list',
            items: [
              'Intended use cases and when to select which variant',
              'Configuration options and their effects',
              'Do/dont guidance with visual examples',
              'Accessibility considerations',
            ],
            py: 'pt-2 pb-10',
          },
        ]
      },


      // ===== SECTION =====
      {
        header: 'Deliverables',
        number: '04',
        components: [
         {
            type: 'inline-header',
            content: 'Design System Library',
            py: 'pt-8 pb-0',
          },

          {
            type: 'bullet-list',
            items: [
              'Complete Figma component library built on variables and tokens',
              'Multi-platform support (iOS, Android, responsive web)',
              'Configurable components with comprehensive variant coverage',
              'Semantic token structure for theming and scalability',
            ],
            py: 'pt-1 pb-2',
          }, 


          {
            type: 'inline-header',
            content: 'UI/UX Screen Designs / Prototypes',
            py: 'pt-8 pb-0',
          },

          {
            type: 'bullet-list',
            items: [
              'Key application screens demonstrating system application',
              'Interaction patterns and flow documentation',
              'Reference implementations for internal team',
              'Figma prototypes of core user flows',
            ],
            py: 'pt-2 pb-2',
          }, 


           {
            type: 'inline-header',
            content: 'Documentation',
            py: 'pt-8 pb-0',
          },

          {
            type: 'bullet-list',
            items: [
              'Component-level usage guidelines',
              'System architecture overview',
            ],
            py: 'pt-2 pb-10',
          },
        ]
      },


      // ===== SECTION =====
      {
        header: 'Outcome',
        number: '05',
        components: [
           
          {
            type: 'paragraph',
            content: 'The project achieved its primary objectives:',
            py: 'pt-8 pb-0',
          },
          {
            type: 'paragraph',
            content: '1. Reduced Design Time: The configurable component architecture eliminated redundant design work, enabling faster screen production.',
            py: 'pt-6 pb-2',
          },
          {
            type: 'paragraph',
            content: '2. Structural Consistency: A single source of truth across platforms ensured visual and behavioral coherence throughout the application.',
            py: 'pt-2 pb-2',
          },
          {
            type: 'paragraph',
            content: '3. Team Enablement: The internal design team received a system they could understand, maintain, and extend – with documentation that anticipated their questions.',
            py: 'pt-2 pb-2',
          }, 
          {
            type: 'paragraph',
            content: '4. Positive Reception: The handoff was met with strong positive feedback from both the clients internal team and project stakeholders.',
            py: 'pt-2 pb-0',
          }, 
          {
            type: 'paragraph',
            content: 'Design systems succeed or fail based on adoption. The best architecture means nothing if the team cant use it. This project reinforced that documentation, clear naming, and intuitive structure matter as much as the components themselves. The one-month timeline forced hard prioritization: every component had to earn its place, every property had to justify its existence. The result was a lean system built for the people who would inherit it.',
            py: 'pt-6 pb-10',
          }, 
        ]
      },  
    ]
  },
};
