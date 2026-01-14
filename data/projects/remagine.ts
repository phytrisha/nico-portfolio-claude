import type { Project } from '../types';

export const remagine: Project = {
  id: 4,
  slug: 'remagine',
  title: 'Remagine - Banking meets purpose',
  shortTitle: 'Remagine - Banking meets purpose',
  category: 'strategic-design',
  tags: ['FREELANCE WORK · FINTECH · UI / UX CONCEPT'],
  year: '2021',
  color: '#259918',

    // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'Client work · Feb - July 2022, BERLIN · CLIENT: Remagine',
      'involvement: UX CONCEPT, UI Design'
    ]
  },



  description: 'Remagine is a financial platform that provides banking services to high-growth enterprises, distinguished by its explicit commitment to impact-driven business models. Specializing in revenue-based financing, the company offers an alternative to conventional equity or debt instruments, that is typically more favorable to founders, enabling rapid access to capital while preserving entrepreneurial autonomy. Remagine’s Financing & Online Banking Application serves as primary touchpoint to apply for and manage financing applications, repayment processes, bank account access and credit card control. A plattform wide responsive reconcept was devised, rethinking major navigation flows from the ground up, and extending the existing design language to accommodate newly introduced features, while maintaining the brand’s distinctive and assertive visual identity.',

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
            src: '/images/projects/remagine/cover.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-0'
          },
          {
            type: 'paragraph',
           content: 'Remagine, a financing platform offering banking services to high-growth companies with an ‘impact’ twist, has raised €20 million ($24M) in a Seed funding round. Its backers include former Global Head of Google Payment Jonathan Weiner and former COO of Venmo Michael Vaughn. The fintech specialises in offering revenue-based financing for high-growth and impact-led businesses, which tends to be more founder-friendly than equity or debt products, allowing them to quickly secure funding while staying in control of their business. Remagine’s Financing & Online Banking Application serves as primary touchpoint for their startup founder clientele of customers to apply for and manage their financing applications & repayment processes. Remagine’s clients also manage bank account access and credit card control for their employees through the application.',
          },
          
        ]
      },


      // ===== SECTION =====
      {
        header: 'ORIGINAL PROBLEMSTATEMENT',
        number: '01',
        components: [
          {
            type: 'paragraph',
            content: 'How might we design a unified financial platform that demystifies revenue-based financing for impact-driven companies while seamlessly integrating the complexity of loan applications, repayment tracking, and team banking operations into a single, intuitive interface? High-growth companies seeking alternatives to traditional financing faced a fragmented financial landscape: separate systems for loan management and corporate banking, opaque application processes, and disconnected tools for managing employee financial access. Remagine`s design challenge centered on consolidating two financial workflows, financing operations and corporate banking, into one cohesive experience. The platform needed to transform complex revenue-based financing applications into clear, trackable processes while simultaneously functioning as a daily banking hub where companies control employee card access and account permissions. This required balancing variable repayment structures with the operational simplicity needed for routine banking tasks, ensuring clients could manage both their funding lifecycle and team finances without switching between multiple platforms or losing visibility into their financial position.',
          },
          
        ]
      },


      // ===== SECTION =====
      {
        header: 'OUTCOME',
        number: '02',
        components: [
           {
            type: 'full-width-image',
            src: '/images/projects/remagine/S1.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'spending analytics overview (all data anonymized)',
            py: 'pt-0 pb-2',
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/remagine/S2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'financing overview with repayment details (all data anonymized)',
            py: 'pt-0 pb-2',
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/remagine/S3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'transaction overview (all data anonymized)',
            py: 'pt-0 pb-8',
          }, 
        ]
      },  
    ]
  },

  // External links
  externalLinks: [],
};

