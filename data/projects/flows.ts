import { ContentSection } from '../types';

export const flows = {
  id: 11,
  slug: 'flows',
  title: 'Flows – rethinking the development of user interfaces',
  shortTitle: 'Flows – rethinking the development of user interfaces',
  category: 'strategic design' as const,
  tags: ['#INTERACTION DESIGN'],
  year: '2017',
  color: '#FF6B00',
  metadata: {
    type: 'Interaction Design, HfG Schwäbisch Gmünd, B.A. Thesis, 2017',
    topics: 'User Experience Design, Prototyping, Design Tools',
  },
  description: 'Flows is a concept for a new design tool, conceptualized to enable a more structured design workflow, while at the same time offering the user better ways to create and iterate over variations. Flows applies the idea of classes, originating from code and development to a design tool, helping to create complex design systems with ease. Flows was built to allow designers to do a large part of their daily design processes in one tool. Therefore the concept combines early process steps like the creation of information architectures, the translation into asset based wireframes and their refinement in visuals while supporting interactive prototyping from the start. This approach gives each of those steps connection and purpose even as a project evolves.',
  contentSections: [
    {
      type: 'image',
      image: '/images/projects/flows/cover.jpg',
    },
    {
      type: 'text',
      content: 'Flows is a design application conceived to provide designers with a high degree of structure and scalability within projects while supporting variant formation and iterations. Flows is based on the principle of applying the class model established among developers to design, thereby creating an application that distinguishes itself from classic "drawing tools" such as Sketch or Illustrator through its structured approach to design. Class-based design and the resulting dependencies between elements lead to a significant increase in scalability within larger projects. Likewise, this approach enables the development of complex, interdependent design systems.',
    },
    {
      type: 'text',
      content: 'The second fundamental principle upon which Flows was developed was to provide designers with an application that offers spaces for testing ideas and variations. This was realized through the so-called Playground, in which users can edit and further develop individual assets in detail, free from the structural constraints of their layout. Combined with prototyping functionalities and approaches to simplify design across different platforms and device sizes, Flows represents a novel approach to the design of digital products.',
    },
    {
      type: 'image',
      image: '/images/projects/flows/01.jpg',
    },
    {
      type: 'subheadline',
      title: 'Original Problem Statement',
    },
    {
      type: 'text',
      content: 'Whether Photoshop, Illustrator, or Sketch, the fundamental principle of so-called "drawing tools" has not changed since their inception. Design in these drawing tools occurred at the time of analysis often in a  unstructured manner, without consideration for structure, organization, and above all, the reusability of created objects. In an era when digital design projects were not edited for countless end-device formats and by multiple individuals, this problem was less significant than it is today. Thus, while a highly organized designer may be able to maintain order within their documents, this is only achievable through considerable expenditure of time for layer naming, spacing adjustments, size modifications, and so forth.',
    },
    {
      type: 'subheadline',
      title: 'Approach',
    },
    {
      type: 'text',
      content: 'Flows presents an approach to fundamentally re-conceptualize design processes while considering the structural composition of the final product from the outset. Over several months, an extensive research and analysis phase examined the individual steps of the design process for digital interfaces and evaluated the common tools employed for each respective activity. This research culminated in the conceptual and prototypical presentation of a new tool with the objective of integrating class-based design, in combination with an increased emphasis on variant formation, consistency, and scalability, into an application that enables users to work in a structured and cross-device manner. Flows is conceptualized to provide an end-to-end workflow, allowing designers to do a large part of their daily design processes in one tool – from creating information architectures, to wireframes, visuals and prototypes.',
    },


    {
      type: 'subheadline',
      title: '4 Key Principles',
    },

    {
      type: 'subheadline',
      title: 'Designing with assets',
    },
    {
      type: 'image',
      image: '/images/projects/flows/01.jpg',
    },
    {
      type: 'text',
      content: 'Assets are reusable interface groups, ranging from a single label to a large organism of different elements. flows offers rich prefilled asset libraries the user can use to construct his interface. Users can either choose from libraries of fully customizable OS specific UI blocks or custom unstyled elements. New assets can be created using primitive elements.',
    },



    {
      type: 'subheadline',
      title: 'Creation means iteration',
    },
    {
      type: 'image',
      image: '/images/projects/flows/01.jpg',
    },
    {
      type: 'text',
      content: 'Design is an iterative process that requires creating and analyzing many different variation of the elements to get to the best result possible. Therefore flows was built to give users a dedicated space to try ideas and test different looks for assets, all without obstructing their actual layout. This space, called playground, is also used as the primary stage to create new assets in flows.',
    },



    {
      type: 'subheadline',
      title: 'Make it interactive',
    },
    {
      type: 'image',
      image: '/images/projects/flows/01.jpg',
    },
    {
      type: 'text',
      content: 'Interactivity is obviously an important part of creating digital products. Assigning behavior to static designs, can help to test ideas and UI flows, give customers a better idea of one’s vision and help to simplify the communication process for designers & developers. Therefore flows offers the possibility to easily add behavior to Assets, right inside the app they were created in.',
    },

    {
      type: 'subheadline',
      title: 'Structure means flexibility',
    },
    {
      type: 'image',
      image: '/images/projects/flows/01.jpg',
    },
    {
      type: 'text',
      content: 'The element graph is the class-models visual representation and can be used to create, link, edit and assign these classes. By using a column based interface to communicate hierarchy the graph combines the benefits of node based interfaces with the structure of list views. These features make the element graph a powerful tool for designers to create highly complex systems.',
    },
  ] as ContentSection[],
};
