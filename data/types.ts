export interface Collaborator {
  name: string;
  url?: string;
  role?: 'with' | 'supervision';
}

// New sub-section component types
export interface ParagraphComponent {
  type: 'paragraph';
  content: string;
}

export interface InlineHeaderComponent {
  type: 'inline-header';
  content: string;
}

export interface FeatureBlockComponent {
  type: 'feature-block';
  skyline: string; // monospace text
  description: string; // paragraph below
}

export interface DividerComponent {
  type: 'divider';
}

export interface HeroImageComponent {
  type: 'hero-image';
  src: string;
  alt?: string;
}

export interface HeroVideoComponent {
  type: 'hero-video';
  src: string;
}

export interface FullWidthImageComponent {
  type: 'full-width-image';
  src: string;
  alt?: string;
}

export interface FullWidthVideoComponent {
  type: 'full-width-video';
  src: string;
}

export interface SideBySideComponent {
  type: 'side-by-side';
  left: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  right: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
}

export interface SublinesComponent {
  type: 'sublines';
  content: string; // monospace text
}

export type SubSectionComponent =
  | ParagraphComponent
  | InlineHeaderComponent
  | FeatureBlockComponent
  | DividerComponent
  | HeroImageComponent
  | HeroVideoComponent
  | FullWidthImageComponent
  | FullWidthVideoComponent
  | SideBySideComponent
  | SublinesComponent;

export interface SubSection {
  header?: string; // optional section header
  number?: string; // optional section number (e.g., "01", "02")
  components: SubSectionComponent[];
}

export interface ProjectSection {
  type: 'project-section';
  subSections: SubSection[];
}

export interface MetadataLink {
  name: string;
  url: string;
}

export interface MetadataSection {
  degree?: string;
  year?: string;
  program?: string;
  institution?: string;
  supervision?: string[] | MetadataLink[];
  collaborators?: string[] | MetadataLink[];
  topics?: string[] | string; // Support both array and legacy string format
  type?: string; // Legacy field for backwards compatibility
  row2?: string; // Optional free text for second row
}

// Legacy content section (for backwards compatibility during migration)
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
  description?: string;
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
  metadata: MetadataSection;
  description: string | DescriptionBlock[];
  projectSection?: ProjectSection; // New structure
  contentSections?: ContentSection[]; // Legacy structure
  externalLinks?: ExternalLink[];
  externalUrl?: string; // If provided, arrow button links to external URL instead of detail page
}