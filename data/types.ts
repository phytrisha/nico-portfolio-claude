export interface Collaborator {
  name: string;
  url?: string;
  role?: 'with' | 'supervision';
}

export interface ContentSection {
  type: 'text' | 'image' | 'quote' | 'two-column' | 'two-thirds-layout' | 'one-third-layout' | 'subheadline' | 'links';
  content?: string;
  image?: string;
  leftContent?: string | string[];
  rightContent?: string;
  rightImage?: string;
  leftImage?: string;
  layout?: 'image-text' | 'image-image' | 'text-image' | 'text-text';
  title?: string;
  links?: ExternalLink[];
  listType?: 'bullet' | 'numbered';
  items?: string[];
  collaborators?: Collaborator[];
}

export interface ExternalLink {
  title: string;
  url: string;
}

export interface DescriptionTextBlock {
  type: 'text';
  content: string;
}

export interface DescriptionListBlock {
  type: 'bullet' | 'numbered';
  items: string[];
}

export interface DescriptionImageBlock {
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
}

export type DescriptionBlock = DescriptionTextBlock | DescriptionListBlock | DescriptionImageBlock;

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'strategic-design' | 'philosophy' | 'freelance';
  tags: string[];
  year?: string; // Optional year field for projects
  color: string;
  metadata: {
    type: string;
    topics: string;
  };
  description: string | DescriptionBlock[];
  contentSections?: ContentSection[];
  externalLinks?: ExternalLink[];
  externalUrl?: string; // If provided, arrow button links to external URL instead of detail page
}