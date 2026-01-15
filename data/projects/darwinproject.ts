import type { Project } from '../types';

export const darwinproject: Project = {
  id: 12,
  slug: 'darwinproject',
  title: 'The Darwin Project: A Speculative Design Vision for Sustainable, Individualized Consumption',
  shortTitle: 'The Darwin Project',
  category: 'strategic-design',
  tags: ['STRATEGIC DESIGN · SPECULATIVE DESIGN · CRITICAL CONSUMPTION'],
  year: '2019',
  color: '#FF6D01',

  // New metadata structure - each entry is one row
  // Use [text](url) syntax for inline links
  metadata: {
    entries: [
      'Strategic Design · MARCH – JULY 2018 · HfG Schwäbisch Gmünd · With: Robert Mayer, Jonathan Aichele, Jasmin Großer',
      // 'With: Robert Mayer, Jonathan Aichele, Jasmin Großer',
      'Supervision: Prof. Gabriele N. Reichert, Prof. Günther Biste, Thomas Schönweitz'
    ]
  },

 
  description: 'The Darwin Project is a speculative design thesis that confronts the environmental and social consequences of mass consumption by imagining alternative futures where products are deeply individualized, sustainably produced, and emotionally meaningful. Darwin project projects current technological developments and consumption trends across three progressive phases, culminating in a provocative lighthouse scenario that challenges fundamental assumptions about product ownership, brand identity, and material consumption.',





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
            src: '/images/projects/darwinproject/coverdarwin.jpg',
            alt: 'Research methodology overview',
          },
          {
            type: 'intro-text',
            content: 'The Darwin Project is a speculative design thesis that confronts the environmental and social consequences of mass consumption by imagining alternative futures where products are deeply individualized, sustainably produced, and emotionally meaningful. Developed in a course of the masters programs second semester at HfG Schwäbisch Gmünd, the work projects current technological developments and consumption trends across three progressive phases, culminating in a provocative "lighthouse scenario" that challenges fundamental assumptions about product ownership, brand identity, and material consumption.',
            py: 'pt-12 pb-10',
          },           
        ]
      },


      // ===== SECTION =====
      {
        header: 'Problem space: From Hyperconsumption to Conscious Consumption',
        number: '02',
        components: [

          {
            type: 'paragraph',
            content: 'The project opens with a critique of contemporary consumer society, drawing on Neil Gaimans observation that modern culture has spawned "new gods" of credit cards, internet, and plastic – symbols we worship with the same fervor as ancient deities. The designers argue that we live in an overflow society characterized by senseless hyper-consumption, where products are discarded long before their functional end-of-life, driven by planned obsolescence and manufactured desire. Key sustainability challenges identified include:',
            py: 'pt-8 pb-0',
          },
          {
            type: 'feature-block',
            skyline: 'Resource depletion',
            description: 'Germany exhausts its annual natural resources by May, requiring three planets if everyone lived this way. Household waste increased from 458 kg to 559 kg per person between 2000-2015.',
            py: 'pt-8 pb-0',
          },
           {
            type: 'feature-block',
            skyline: 'Exploitation',
            description: 'Both of workers in low-wage countries and of natural resources in developing nations.',
            py: 'pt-8 pb-0',
          },
           {
            type: 'feature-block',
            skyline: 'Emotional disconnect',
            description: 'Products are purchased but never truly valued, leading to cycles of dissatisfaction and replacement.'
          },
          {
            type: 'paragraph',
            content: 'The project proposes reorientation: away from hyperconsumption toward conscious, sustainable consumption, buying what one truly needs, meeting personal requirements without compromise.',
            py: 'pt-0 pb-8',
          },
        ]
      },

      // ===== SECTION =====
      {
        header: 'Individualization as Sustainability Strategy',
        number: '03',
        components: [          
        ]
      },
      {
        components: [

          {
            type: 'paragraph',
            content: 'The Darwin Project`s central thesis might seem counterintuitive: Radical individualization can serve sustainability. When products are precisely tailored to user needs, functionally, ergonomically, and aesthetically, they create emotional bonds that discourage disposal and replacement. The project draws biological inspiration from slime molds (Mycetozoa), organisms that demonstrate remarkable collective intelligence without central control. In 2010, researchers at Hokkaido University demonstrated that slime molds could replicate Tokyo`s rail network with equal or superior efficiency. This biological model informs the project`s vision of intelligent, adaptive material systems. Three levels of individualization are explored:',
            py: 'pt-8 pb-2',
          },
          {
            type: 'feature-block',
            skyline: 'Functional individualization',
            description: 'Products adapted to body measurements, movement patterns, and use contexts.',
            py: 'pt-8 pb-0',
          },
          {
            type: 'feature-block',
            skyline: 'Aesthetic individualization',
            description: 'Personal style expression without brand dependence.',
            py: 'pt-8 pb-0',
          },
          {
            type: 'feature-block',
            skyline: 'Evolutionary adaptation',
            description: 'Products that improve over successive generations based on usage data.',
            py: 'pt-8 pb-10',
          },
        ]
      },


      // ===== FEATURE BLOCK EXAMPLE =====
      {
        //header: 'Key Features',
        header: 'Phase Structure and Technological Roadmap',
        number: '04',
        components: [
          {
            type: 'feature-block',
            skyline: 'Phase 1 (2019-2025): Foundation Building',
            description: 'Establishes research capabilities across four areas: an Eco-Score app tracking sustainable purchasing behavior, additive manufacturing facilities, recyclable filament research, and sentient (sensor-embedded) filament development. This phase builds technological foundations while generating revenue to minimize risk.',
            py: 'pt-8 pb-12',          
          },       
        
          {
            type: 'feature-block',
            skyline: 'Phase 2 (2025-2034): Product X – Individualized Products',
            description: 'Introduces iwa ("I want..."), a conversational AI guiding users through product creation. The project includes extensive research into iwas communication architecture, developing detailed conversation flows, question typologies, and response frameworks. User personas with distinct characteristics (from perfectionists to extroverts to professional athletes) informed nuanced dialogue design, ensuring iwa adapts tone and approach to individual users while maintaining consistent values. The research addresses how iwa handles edge cases, refuses inappropriate requests, and maintains transparency about data usage. Products enter an evolutionary cycle: when damaged or suboptimal, they`re returned, recycled, and evolved into improved versions. Material from previous products incorporates into successors, creating environmental benefits and emotional continuity.',
            py: 'pt-0 pb-8'
          },
          {
            type: 'full-width-video',
            src: '/images/projects/darwinproject/the darwin project_SG1_SS18_720p.mp4',
            alt: 'Research methodology overview',
            py: 'pt-0 pb-10',
          },
        
          {
            type: 'feature-block',
            skyline: 'The Lighthouse Scenario: The Cube',
            description: 'The projects most speculative element imagines products decoupled from fixed form, specific brands, and predetermined characteristics. The foundation is an intelligent matter aggregation: The Cube. The Cube transforms into any user-desired product, limited only by mass. Multiple Cubes combine for larger objects. Key implications:'
          },
          {
            type: 'full-width-image',
            src: '/images/projects/darwinproject/implications.png',
            alt: 'Research methodology overview',
            py: 'pt-2 pb-8',
          },
          {
            type: 'full-width-image',
            src: '/images/projects/darwinproject/morph.jpg',
            alt: 'Research methodology overview',
            py: 'pt-6 pb-12',
          },
        ]
      },
      

      {
        header: 'Sustainability Through Emotional Connection',
        number: '04',
        components: [
        ]
      },
      {
        components: [

          {
            type: 'paragraph',
            content: 'Research on product attachment grounds the approach. Neurological research indicates 95% of consumer behavior is emotional rather than rational. Products become irreplaceable when they facilitate individuation, integration, and temporal orientation. The project engineers these bonds deliberately. By designing for attachment, sustainability becomes a byproduct of satisfaction rather than sacrifice.',
            py: 'pt-8 pb-0',
          },
          {
            type: 'feature-block',
            skyline: 'BONDS THROUGH Individuation',
            description: 'What kinds of influences will drive the expressive / aesthetic dimension of products when mass-market uniformity is called in question?',
            py: 'pt-8 pb-0',
          },       
        
          {
            type: 'feature-block',
            skyline: 'BONDS THROUGH Integration',
            description: 'Can usage data create a shared history between user and product, that builds familiarity and attachment through accumulated interaction over time?',
            py: 'pt-8 pb-0'
          },
        
          {
            type: 'feature-block',
            skyline: 'BONDS THROUGH Temporal orientation',
            description: 'Can evolutionary product cycles maintain emotional connection across generations, as materials from previous iterations carry forward into successors?',
            py: 'pt-8 pb-12',
          },
        ]
      },


      {
        header: 'Critical Reflection',
        number: '05',
        components: [
        ]
      },
      {
        components: [
          {
            type: 'feature-block',
            skyline: 'For designers',
            description: 'The profession shifts from operative execution to strategic curation, establishing rules and constraints for AI systems rather than crafting individual products.',
            py: 'pt-8 pb-0',
          }, 
          {
            type: 'feature-block',
            skyline: 'For consumption',
            description: 'Two trajectories emerge: Users either hoard Cubes for simultaneous products, or own fewer objects since single Cubes serve multiple purposes.',
            py: 'pt-8 pb-0',
          }, 
          {
            type: 'feature-block',
            skyline: 'For society',
            description: 'Without brand markers, social differentiation may shift to other domains. Parameterized style preferences replace brand identification, but group belonging through aesthetic consensus likely persists.',
            py: 'pt-8 pb-0',
          },  
          {
            type: 'paragraph',
            content: 'The Darwin Project offers a critical design space for examining assumptions about consumption and sustainability. By imagining radical individualization as environmental strategy, it inverts conventional wisdom that mass production serves efficiency. By projecting intelligent materials, it questions whether the product category itself remains meaningful. Most significantly, the project demonstrates designs capacity for speculative inquiry, using disciplinary tools not to solve problems but to imagine alternative futures that reframe the present.',
            py: 'pt-8 pb-6',
          },
          {
            type: 'full-width-image',
            src: '/images/projects/darwinproject/20180626_133514_A1.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-8',
          },

        ]
      },
    ]
  },
};
