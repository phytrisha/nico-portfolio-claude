import type { Project } from '../types';

export const flows: Project = {
  id: 11,
  slug: 'flows',
  title: 'Flows – Rethinking the development of user interfaces',
  shortTitle: 'Flows – Rethinking the development of user interfaces',
  category: 'strategic-design',
  tags: ['BACHELOR THESIS (BA) · INTERACTION DESIGN · DESIGN TOOLS'],
  year: '2017',
  color: '#FF6B00',

  // New metadata structure
  metadata: {
    degree: 'Bachelor Thesis (BA)',
    program: 'Strategic Design',
    year: '2017',
    institution: 'HfG Schwäbisch Gmünd',
    supervision: [
      { name: 'Prof. David Osswald', url: 'https://www.hfg-gmuend.de/personen/david-oswald' },
      { name: 'Florian', url: 'https://www.hfg-gmuend.de/en/people/ulrich-barnh%C3%B6fer' }
    ],
    collaborators: [
      { name: 'Mark F. Meyer', url: 'https://mark-gestaltung.de' }
    ],
    topics: ['Bachelor Thesis, BA · Interaction design'],
    row2: ['February 2017 – July 2017', 'HfG schwäbisch gmünd']
  },

  description: 'Flows is a concept for a new design tool, conceptualized to enable a more structured design workflow, while at the same time offering the user better ways to create and iterate over variations. Flows applies the idea of classes, originating from code and development to a design tool, helping to create complex design systems with ease. Flows was built to allow designers to do a large part of their daily design processes in one tool. Therefore the concept combines early process steps like the creation of information architectures, the translation into asset based wireframes and their refinement in visuals while supporting interactive prototyping from the start. This approach gives each of those steps connection and purpose even as a project evolves.',

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
            src: '/images/projects/flows/cover7.jpg',
            alt: 'Beneficial AI Framework Model',
            py: 'pb-10'
          },
          {
            type: 'paragraph',
            content: 'Flows is a design application conceived to provide designers with a high degree of structure and scalability within projects while supporting variant formation and iterations. Flows is based on the principle of applying the class model established among developers to design, thereby creating an application that distinguishes itself from classic "drawing tools" such as Sketch or Illustrator through its structured approach to design. Class-based design and the resulting dependencies between elements lead to a significant increase in scalability within larger projects. Likewise, this approach enables the development of complex, interdependent design systems.',
            py: 'pb-0',
          },
          {
            type: 'paragraph',
            content: 'The second fundamental principle upon which Flows was developed was to provide designers with an application that offers spaces for testing ideas and variations. This was realized through the so-called Playground, in which users can edit and further develop individual assets in detail, free from the structural constraints of their layout. Combined with prototyping functionalities and approaches to simplify design across different platforms and device sizes, Flows represents a novel approach to the design of digital products.',
          },
          
        ]
      },


      // ===== SECTION =====
      {
        header: 'ORIGINAL PROBLEMSTATEMENT',
        number: '02',
        components: [
          {
            type: 'paragraph',
            content: 'Whether Photoshop, Illustrator, or Sketch, the fundamental principle of so-called "drawing tools" has not changed since their inception. Design in these drawing tools occurred at the time of analysis often in a  unstructured manner, without consideration for structure, organization, and above all, the reusability of created objects. In an era when digital design projects were not edited for countless end-device formats and by multiple individuals, this problem was less significant than it is today. Thus, while a highly organized designer may be able to maintain order within their documents, this is only achievable through considerable expenditure of time for layer naming, spacing adjustments, size modifications, and so forth.',
          },
          
        ]
      },

      // ===== SECTION =====
      {
        header: 'APPROACH',
        number: '03',
        components: [
          {
            type: 'paragraph',
            content: 'Flows presents an approach to fundamentally re-conceptualize design processes while considering the structural composition of the final product from the outset. Over several months, an extensive research and analysis phase examined the individual steps of the design process for digital interfaces and evaluated the common tools employed for each respective activity. This research culminated in the conceptual and prototypical presentation of a new tool with the objective of integrating class-based design, in combination with an increased emphasis on variant formation, consistency, and scalability, into an application that enables users to work in a structured and cross-device manner. Flows is conceptualized to provide an end-to-end workflow, allowing designers to do a large part of their daily design processes in one tool – from creating information architectures, to wireframes, visuals and prototypes.',
          },
        ]
      },

      // ===== SECTION =====
      {
        header: '4 KEY PRINCIPLES',
        number: '04',
        components: [

        ]
      },

      // ===== FEATURE BLOCK =====
      {
        number: '01',
        components: [
          {
            type: 'feature-block',
            skyline: 'DESIGNING WITH ASSETS',
            description: 'Assets are reusable interface groups, ranging from a single label to a large organism of different elements. flows offers rich prefilled asset libraries the user can use to construct his interface. Users can either choose from libraries of fully customizable OS specific UI blocks or custom unstyled elements. New assets can be created using primitive elements.',
            py: 'pt-8 pb-0',
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        components: [
          {
            type: 'full-width-video',
            src: '/images/projects/flows/01_Assets.mp4',
            alt: 'Research methodology overview',
            thumb: '/images/projects/flows/C5.jpg',
          },
        ]
      },

      {
        number: '02',
        components: [
          {
            type: 'feature-block',
            skyline: 'CREATION REQUIRES ITERATION',
            description: 'Design is an iterative process that requires creating and analyzing many different variation of the elements to get to the best result possible. Therefore flows was built to give users a dedicated space to try ideas and test different looks for assets, all without obstructing their actual layout. This space, called playground, is also used as the primary stage to create new assets in flows.',
            py: 'pt-8 pb-0',
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        components: [
          {
            type: 'full-width-video',
            src: '/images/projects/flows/02_Playground.mp4',
            alt: 'Research methodology overview',
            thumb: '/images/projects/flows/C6.jpg',
          },
        ]
      },

      {
        number: '03',
        components: [
          {
            type: 'feature-block',
            skyline: 'MAKE IT INTERACTIVE',
            description: 'Interactivity is obviously an important part of creating digital products. Assigning behavior to static designs, can help to test ideas and UI flows, give customers a better idea of one’s vision and help to simplify the communication process for designers & developers. Therefore flows offers the possibility to easily add behavior to Assets, right inside the app they were created in.',
            py: 'pt-8 pb-0',          
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        components: [
          {
            type: 'full-width-video',
            src: '/images/projects/flows/03_Interactivity.mp4',
            alt: 'Research methodology overview',
            thumb: '/images/projects/flows/C7.jpg',
          },
        ]
      },

      {
        number: '04',
        components: [
          {
            type: 'feature-block',
            skyline: 'STRUCTURE MEANS FLEXIBILITY',
            description: 'The element graph is the class-models visual representation and can be used to create, link, edit and assign these classes. By using a column based interface to communicate hierarchy the graph combines the benefits of node based interfaces with the structure of list views. These features make the element graph a powerful tool for designers to create highly complex systems.',
            py: 'pt-8 pb-0',
          },
        ]
      },
      // ===== FULL WIDTH MEDIA =====
      {
        components: [
          {
            type: 'full-width-video',
            src: '/images/projects/flows/04_Graph.mp4',
            alt: 'Research methodology overview',
            thumb: '/images/projects/flows/C8.jpg',
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


