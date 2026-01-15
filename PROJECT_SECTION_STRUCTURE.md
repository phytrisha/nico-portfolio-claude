# Project Section Structure

## Overview

The project detail modal has been completely refactored with a new, flexible structure:

1. **Project Title**
2. **Metadata Section** (with project ID, collaborators, supervision, topics)
3. **Project Section** (main content area with sub-sections)
4. **External Links** (black squares with colored arrows)

## Structure

### ProjectDetailModal Flow

```
ProjectDetailModal
├── Project Title (h1)
├── Subtitle (degree, program, year, institution)
├── Metadata (bordered cells with project info)
├── ProjectSection
│   └── Multiple SubSections
│       ├── Section Header (optional)
│       └── Multiple Components
└── ExternalLinks
```

## Available Components

### Sub-Section Components

Each sub-section can contain any combination of these components:

1. **Paragraph** (`paragraph`)
   - Regular paragraph text
   - `content: string`

2. **Inline Header** (`inline-header`)
   - Header within the content flow
   - `content: string`

3. **Feature Block** (`feature-block`)
   - Monospace skyline text with description below
   - `skyline: string` (monospace)
   - `description: string`

4. **Divider** (`divider`)
   - Horizontal line separator
   - No additional properties

5. **Hero Image** (`hero-image`)
   - Full-width image, no padding, automatic height
   - `src: string`
   - `alt?: string`

6. **Hero Video** (`hero-video`)
   - Full-width video, no padding, automatic height
   - `src: string`

7. **Full Width Image** (`full-width-image`)
   - Full-width image with automatic height
   - `src: string`
   - `alt?: string`

8. **Full Width Video** (`full-width-video`)
   - Full-width video with automatic height
   - `src: string`

9. **Side-by-Side** (`side-by-side`)
   - Two blocks at 50% width each (image or video)
   - Automatic height
   - `left: { type: 'image' | 'video', src: string, alt?: string }`
   - `right: { type: 'image' | 'video', src: string, alt?: string }`

10. **Sublines** (`sublines`)
    - Monospace font text
    - `content: string`

## Usage Example

```typescript
import type { Project } from '@/data/types';

export const exampleProject: Project = {
  id: 1,
  slug: 'example-project',
  title: 'Example Project',
  shortTitle: 'Example',
  category: 'strategic-design',
  tags: ['Design', 'Research'],
  color: '#FF6B6B',

  // New metadata structure
  metadata: {
    degree: 'Master Thesis (MA)',
    program: 'Strategic Design',
    year: '2019',
    institution: 'HfG Schwäbisch Gmünd',
    supervision: ['Prof. David Oswald', 'Prof. Dr. Ulrich Barnhöfer'],
    collaborators: ['Mark Meyer'],
    topics: ['AI Ethics', 'Human-Computer Interaction']
  },

  description: 'Project description for the card view',

  // New project section structure
  projectSection: {
    type: 'project-section',
    subSections: [
      {
        header: 'Introduction',
        components: [
          {
            type: 'paragraph',
            content: 'This is an introductory paragraph...'
          },
          {
            type: 'inline-header',
            content: 'Key Features'
          },
          {
            type: 'feature-block',
            skyline: '> INNOVATIVE APPROACH',
            description: 'This project introduces a novel methodology...'
          }
        ]
      },
      {
        header: 'Visual Documentation',
        components: [
          {
            type: 'hero-image',
            src: '/images/hero.jpg',
            alt: 'Hero image'
          },
          {
            type: 'divider'
          },
          {
            type: 'side-by-side',
            left: {
              type: 'image',
              src: '/images/left.jpg',
              alt: 'Left image'
            },
            right: {
              type: 'video',
              src: '/videos/right.mp4'
            }
          },
          {
            type: 'sublines',
            content: 'TECHNICAL SPECS\nVersion 2.0\nBuilt with React'
          }
        ]
      }
    ]
  },

  // External links
  externalLinks: [
    {
      title: 'GitHub Repository',
      url: 'https://github.com/example/project'
    },
    {
      title: 'Live Demo',
      url: 'https://example.com/demo'
    }
  ]
};
```

## Metadata Structure

The metadata section displays information in bordered cells:

```typescript
metadata: {
  degree?: string;        // e.g., "Master Thesis (MA)"
  year?: string;          // e.g., "2019"
  program?: string;       // e.g., "Strategic Design"
  institution?: string;   // e.g., "HfG Schwäbisch Gmünd"
  supervision?: string[]; // e.g., ["Prof. David Oswald"]
  collaborators?: string[]; // e.g., ["Mark Meyer"]
  topics?: string[];      // e.g., ["AI Ethics", "Design"]
}
```

## External Links

External links are displayed as black squares (128x128px) with:
- A colored arrow icon (using the project's color)
- A text label below the square
- Hover effect (scale up)

```typescript
externalLinks: [
  {
    title: 'Link Title',
    url: 'https://example.com',
    description?: 'Optional description'
  }
]
```

## Migration Notes

- The old `contentSections` structure is deprecated
- All projects should be migrated to use the new `projectSection` structure
- The `metadata` field now expects a `MetadataSection` object instead of a simple object
- Old project-section components have been removed (TextSection, ImageSection, TwoColumnSection, etc.)
