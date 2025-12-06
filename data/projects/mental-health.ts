import type { Project } from '../types';

export const mentalHealth: Project = {
  id: 8,
  slug: 'mental-health',
  title: 'Selfapy - Prescription-based online therapy',
  shortTitle: 'Selfapy - Prescription-based online therapy',
  category: 'strategic-design',
  tags: ['FREELANCE WORK · MINDFULNESS · ONLINE THERAPY · UI / UX OPTIMIZATION'],
  year: '2021',
  color: '#259918',
  metadata: {
    topics: 'FREELANCE WORK · MINDFULNESS · ONLINE THERAPY · UI / UX OPTIMIZATION · 2021 · CLIENT: SELFAPY',
  },
  description: 'Selfapy is a provider of online therapy courses intended to treat phobia, stress and practice mindfulness. Selfapy’s depression course was the first ever digital application approved by German health insurance companies to become available on prescription. The product was upgraded in order to reflect changes in the business model, moving towards a higher rate of automation in the product using a more extensive content strategy while improving the usability for the end user and getting the application ready for changes in regulation. The user experience was refined over multiple rounds of in depth testing, ensuring streamlined, cohesive interaction patterns, as well as placing a heavy focus on building trust and user engagement with Selfapy’s therapy courses.',


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
            src: '/images/projects/selfapy/cover6.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-0'
          },
          {
            type: 'paragraph',
            content: 'Selfapy is a provider of online therapy courses intended to treat psychological stress. The company offers courses to treat phobia, stress and mindfulness. Patients may schedule a personal consultation over the phone or via chat, enabling people to fight against depression and other mental health issues. Selfapy’s depression course was the first ever digital application approved by German health insurance companies to become available on prescription. The product was upgraded in order to reflect slight changes in the business model, moving towards a higher rate of automation in the product using a more extensive content strategy while improving the usability for the end user and getting the application ready for changes in regulation.',
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
            content: 'As Germany`s first prescription-eligible digital therapy platform, Selfapy faced a critical design challenge: How might we evolve from a high-touch, consultation-heavy mental health service to a more scalable, automated therapeutic experience—while maintaining the clinical efficacy required for insurance reimbursement and the human connection essential to mental health care? The platform needed to reconcile seemingly opposing forces: increasing automation to serve more patients cost-effectively, while preserving the personalized support that makes therapy effective. This tension was compounded by stringent regulatory requirements for prescription digital therapeutics (DiGA) and the inherent vulnerability of users seeking mental health support. The design solution needed to transform complex therapeutic content into self-guided journeys that felt supportive rather than isolating, met evolving healthcare regulations, and maintained the clinical standards that justified insurance coverage—all while improving overall usability for people experiencing psychological distress.',
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
            src: '/images/projects/selfapy/S1.jpg',
            alt: 'Research methodology overview',
                        py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'course overview',
            py: 'pt-0 pb-2',
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/selfapy/S2.jpg',
            alt: 'Research methodology overview',
                        py: 'pt-8 pb-6',
          }, 
          {
            type: 'sublines',
            content: 'chapter details',
            py: 'pt-0 pb-2',

          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/selfapy/S3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-2 pb-2',
          }, 
          {
            type: 'sublines',
            content: 'mobile application for you, details and activities',
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


