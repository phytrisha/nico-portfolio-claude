import type { Project } from '../types';

export const BT: Project = {
  id: 20,
  slug: 'BT',
  title: 'Case Study: Crafting a high fidelity design system for consistency & scaling',
  shortTitle: 'Case Study: Crafting a high fidelity design system for consistency & scaling',
  category: 'CLIENT WORK',
  tags: ['CLIENT: CONFIDENTIAL, CLIENT WORK, RESEARCH & CONCEPT'],
  year: '2026',
  color: '#259918',


  // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'CLIENT: Confidential (Banking Sector) · Client work · DEC 2025 - JAN 2026',
      'involvement: DESIGN SYSTEM BUILDING, ui design, PROTOTYPING · TEAM: INTERNAL CLIENT team, henri thomee'
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
            type: 'paragraph',
            content: '- Enable consistency across iOS, Android, and web platforms',
            py: 'pt-2 pb-0',         
          },
            {
            type: 'paragraph',
            content: '- Minimize component proliferation through intelligent, configurable architecture',
            py: 'pt-2 pb-0',         
          },
            {
            type: 'paragraph',
            content: '- Provide clear guidance for the clients internal design team to maintain and extend the system independently',
            py: 'pt-2 pb-0',         
          },
            {
            type: 'paragraph',
            content: '- Validate / iterate the system through real-world application in parallel UI design work',
            py: 'pt-2 pb-0',         
          },



          {
            type: 'paragraph',
            content: 'I operated as a freelance contractor embedded within a layered project structure:',
            py: 'pt-8 pb-0',         
          },
          {
            type: 'paragraph',
            content: '- Internal Design Team (Client): Feedback loops, handoff recipients',
            py: 'pt-2 pb-0',         
          },
            {
            type: 'paragraph',
            content: '- External Consulting Team: Overseeing the strategic and visual direction of the reconceptualization and product strategy',
            py: 'pt-2 pb-0',         
          },
            {
            type: 'paragraph',
            content: '- My Position: Specialist brought in for design systems expertise and structured UI/UX execution',
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
            type: 'paragraph',
            content: 'Primitive tokens: Raw values with no semantic meaning (blue.500, space.4, radius.2). Primitives include for example:',
            py: 'pt-0 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Color',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Typography scales and styles',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Spacing and sizing values',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Elevation and effects',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Border radii and stroke weights',
            py: 'pt-2 pb-0',
          },


          {
            type: 'paragraph',
            content: 'Semantic tokens: Purpose-mapped references to primitives (color.text.primary, spacing.md). These change between themes/modes; primitives do not. Semantic tokes include for example clusters for different states of: ',
            py: 'pt-6 pb-0',
          },

          {
            type: 'paragraph',
            content: '- Surfaces',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Action items',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Status',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Data-visualizations',
            py: 'pt-2 pb-0',
          },
                    {
            type: 'paragraph',
            content: '- Icons',
            py: 'pt-2 pb-0',
          },

           {
            type: 'full-width-image',
            src: '/images/projects/BT/BT1.jpg',
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
            type: 'paragraph',
            content: '- Boolean toggles for optional elements (icons, badges, secondary actions)',
            py: 'pt-4 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Instance swapping for flexible content slots',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Variant properties mapping to semantic states and sizes',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Nested auto-layout ensuring responsiveness across contexts',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Border radii and stroke weights',
            py: 'pt-2 pb-0',
          },

          {
            type: 'paragraph',
            content: 'This approach reduced the total component count while expanding what designers could build—fewer components to maintain, more design possibilities.',
            py: 'pt-8 pb-8',
          },
          {
            type: 'full-width-image',
            src: '/images/projects/BT/BT2.jpg',
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
            type: 'paragraph',
            content: '- Stress-testing the system against real UI requirements',
            py: 'pt-4 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Demonstrating correct component usage as reference for the internal team',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Supporting / moving along the need for a high quantity of screen designs and building prototypes',
            py: 'pt-2 pb-0',
          },

          {
            type: 'paragraph',
            content: 'This tight feedback loop between system and application ensured the library addressed actual needs rather than theoretical ones.',
            py: 'pt-8 pb-8',
          },

          {
            type: 'full-width-image',
            src: '/images/projects/BT/BT3.jpg',
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
            type: 'paragraph',
            content: '- Intended use cases and when to select which variant',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Configuration options and their effects',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Do/dont guidance with visual examples',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Accessibility considerations',
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
            type: 'paragraph',
            content: '- Complete Figma component library built on variables and tokens',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Multi-platform support (iOS, Android, responsive web)',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Configurable components with comprehensive variant coverage',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Semantic token structure for theming and scalability',
            py: 'pt-2 pb-2',
          }, 


          {
            type: 'inline-header',
            content: 'UI/UX Screen Designs / Prototypes',
            py: 'pt-8 pb-0',
          },

          {
            type: 'paragraph',
            content: '- Key application screens demonstrating system application',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Interaction patterns and flow documentation',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Reference implementations for internal team',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- Figma prototypes of core user flows',
            py: 'pt-2 pb-2',
          }, 


           {
            type: 'inline-header',
            content: 'Documentation',
            py: 'pt-8 pb-0',
          },

          {
            type: 'paragraph',
            content: '- Component-level usage guidelines',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '- System architecture overview',
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
            py: 'pt-6 pb-0',
          },
          {
            type: 'paragraph',
            content: '2. Structural Consistency: A single source of truth across platforms ensured visual and behavioral coherence throughout the application.',
            py: 'pt-2 pb-0',
          },
          {
            type: 'paragraph',
            content: '3. Team Enablement: The internal design team received not just a library, but a system they could understand, maintain, and extend – with documentation that anticipated their questions.',
            py: 'pt-2 pb-0',
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
