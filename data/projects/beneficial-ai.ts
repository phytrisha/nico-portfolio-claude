import { ContentSection, ExternalLink } from '../types';

export const beneficialAI = {
  id: 1,
  slug: 'beneficial-ai',
  title: 'Approaching Beneficial Artificial Intelligence in the Context of [...]',
  shortTitle: 'APPROACHING BENEFICIAL AI IN THE CONTEXT OF [...]',
  category: 'strategic-design' as const,
  tags: ['#MA-THESIS', '#STRATEGIC-DESIGN'],
  color: '#FF6D01',
  metadata: {
    type: 'Strategic Design, Master Thesis, M.A., 2019',
    topics: 'Artificial Intelligence, Ethics, Scenario Design',
  },
  description: 'This master thesis is concerned with the topic of beneficial artificial intelligence. Broadly “beneficial”, in this context, means that AI systems act in a way that is desired by humans. There are great chances for AI to positively influence many areas of our life, but also numerous risks with potentially extremely negative outcome. To approach beneficial behavior of such systems two models are outlined: the first suggests a classification for aspects of beneficiality in artificially intelligent systems. The second one explores methods to capture and counter ethical problem spaces. The defined models were explored in three speculative use cases to exemplify and refine them. Establishing ethics as an integral part of design, economics, engineering and development takes time and lots of dedicated work. Work that has to start long before artificial superintelligence has been attained.',
  externalLinks: [
    {
      title: 'AI Ethics Resources',
      url: 'https://example.com/ai-ethics',
    },
    {
      title: 'Research Paper',
      url: 'https://example.com/research',
    },
    {
      title: 'Related Article',
      url: 'https://example.com/article',
    },
  ] as ExternalLink[],
  contentSections: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      type: 'image',
      image: '/images/projects/beneficial-ai/hero.jpg',
    },
    {
      type: 'two-column',
      layout: 'text-image',
      leftContent: 'This is an example of text-image layout. The text appears on the left side, while an image is displayed on the right. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      rightImage: '/images/projects/beneficial-ai/detail-1.jpg',
    },
    {
      type: 'two-column',
      layout: 'image-text',
      leftImage: '/images/projects/beneficial-ai/detail-2.jpg',
      rightContent: 'This is an example of image-text layout. Now the image is on the left side, and the text content appears on the right. This provides visual variety and different reading patterns throughout the content.',
    },
    {
      type: 'two-column',
      layout: 'text-text',
      leftContent: 'This demonstrates the text-text layout option. Both columns contain text content, which is useful for comparing concepts, showing parallel information, or creating a more magazine-like reading experience.',
      rightContent: 'The right column continues with more text. This layout is particularly effective for presenting contrasting ideas, before-and-after scenarios, or simply breaking up longer text passages into more digestible columns.',
    },
    {
      type: 'two-column',
      layout: 'image-image',
      leftImage: '/images/projects/beneficial-ai/detail-1.jpg',
      rightImage: '/images/projects/beneficial-ai/detail-2.jpg',
    },
    {
      type: 'quote',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
    },
    {
      type: 'subheadline',
      title: 'Asymmetric Layouts',
      content: 'The following sections demonstrate the new two-thirds/one-third layout options, which provide more visual hierarchy and flexibility in content presentation.',
    },
    {
      type: 'two-thirds-layout',
      leftContent: 'This is a two-thirds/one-third layout with text on the left (taking up 2/3 of the width) and text on the right (taking up 1/3). This layout is perfect for when you want to emphasize the main content while providing supplementary information or a sidebar. The wider column naturally draws more attention and can accommodate longer paragraphs or detailed explanations.',
      rightContent: 'This shorter column is ideal for side notes, key takeaways, or related information that complements the main content.',
    },
    {
      type: 'two-thirds-layout',
      leftImage: '/images/projects/beneficial-ai/hero.jpg',
      rightContent: 'Here we have an image taking up two-thirds of the space on the left, with text content on the right occupying one-third. This is excellent for showcasing large, detailed images while providing context or description alongside.',
    },
    {
      type: 'two-thirds-layout',
      leftContent: 'This demonstrates text on the left taking two-thirds of the space, with an image on the right taking one-third. This layout works well when the text is the primary focus and the image serves as a visual accent or illustration.',
      rightImage: '/images/projects/beneficial-ai/detail-1.jpg',
    },
    {
      type: 'one-third-layout',
      leftContent: 'Now we switch to one-third/two-thirds layout. This narrow left column can be used for labels, captions, or brief introductory text.',
      rightContent: 'The main content appears in this wider right column, taking up two-thirds of the space. This layout reverses the emphasis, making it useful when you want a small label or category on the left with the detailed content flowing naturally on the right. It creates a different visual rhythm compared to the two-thirds-first layout.',
    },
    {
      type: 'one-third-layout',
      leftImage: '/images/projects/beneficial-ai/detail-2.jpg',
      rightContent: 'An image in the narrow one-third column on the left paired with text content taking two-thirds on the right. This works particularly well for portrait-oriented images, thumbnails, or icons that serve as visual markers for the accompanying text content. The asymmetry creates visual interest while maintaining clear content hierarchy.',
    },
    {
      type: 'one-third-layout',
      leftContent: 'A small text block here in the one-third column provides context or a category label.',
      rightImage: '/images/projects/beneficial-ai/hero.jpg',
    },
    {
      type: 'subheadline',
      title: 'Research and Resources',
      content: 'Below you will find relevant links and resources related to this project.',
    },
    {
      type: 'links',
      title: 'External Resources',
      links: [
        {
          title: 'AI Ethics Resources',
          url: 'https://example.com/ai-ethics',
        },
        {
          title: 'Research Paper',
          url: 'https://example.com/research',
        },
        {
          title: 'Related Article',
          url: 'https://example.com/article',
        },
      ],
    },
  ] as ContentSection[],
};
