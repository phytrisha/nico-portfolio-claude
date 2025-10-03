export interface ContentSection {
  type: 'text' | 'image' | 'quote' | 'two-column' | 'two-thirds-layout' | 'one-third-layout' | 'subheadline' | 'links';
  content?: string;
  image?: string;
  leftContent?: string;
  rightContent?: string;
  rightImage?: string;
  leftImage?: string;
  layout?: 'image-text' | 'image-image' | 'text-image' | 'text-text';
  title?: string;
  links?: ExternalLink[];
}

export interface ExternalLink {
  title: string;
  url: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'strategic-design' | 'philosophy' | 'freelance';
  tags: string[];
  color: string;
  metadata: {
    type: string;
    topics: string;
  };
  description: string;
  contentSections?: ContentSection[];
  externalLinks?: ExternalLink[];
}
