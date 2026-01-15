# Component Showcase - Beneficial AI Project

This document shows how all the new project section components are used in the [beneficial-ai.ts](data/projects/beneficial-ai.ts) file.

## All Available Components Demonstrated

### 1. **Paragraph** (`paragraph`)
Regular paragraph text for body content.

```typescript
{
  type: 'paragraph',
  content: 'Your text content here...'
}
```

### 2. **Inline Header** (`inline-header`)
Sub-headers within content sections.

```typescript
{
  type: 'inline-header',
  content: 'Research Question'
}
```

### 3. **Feature Block** (`feature-block`)
Monospace skyline text with a description below.

```typescript
{
  type: 'feature-block',
  skyline: '> CLASSIFICATION MODEL',
  description: 'A comprehensive framework for evaluating aspects...'
}
```

### 4. **Divider** (`divider`)
Horizontal line separator.

```typescript
{
  type: 'divider'
}
```

### 5. **Hero Image** (`hero-image`)
Full-width image with no padding, automatic height.

```typescript
{
  type: 'hero-image',
  src: '/images/projects/beneficial-ai/Model9.jpg',
  alt: 'Beneficial AI Framework Model'
}
```

### 6. **Hero Video** (`hero-video`)
Full-width video with no padding, automatic height.

```typescript
{
  type: 'hero-video',
  src: '/videos/project-video.mp4'
}
```

### 7. **Full Width Image** (`full-width-image`)
Full-width image with margins, automatic height.

```typescript
{
  type: 'full-width-image',
  src: '/images/projects/beneficial-ai/methodology.jpg',
  alt: 'Research methodology overview'
}
```

### 8. **Full Width Video** (`full-width-video`)
Full-width video with margins, automatic height.

```typescript
{
  type: 'full-width-video',
  src: '/videos/demo.mp4'
}
```

### 9. **Side-by-Side** (`side-by-side`)
Two blocks at 50% width each, can be images or videos.

```typescript
{
  type: 'side-by-side',
  left: {
    type: 'image',
    src: '/images/case-study-1.jpg',
    alt: 'Case Study 1'
  },
  right: {
    type: 'video',  // Can also be 'image'
    src: '/videos/case-study-2.mp4'
  }
}
```

### 10. **Sublines** (`sublines`)
Monospace font text, supports multi-line with `\n`.

```typescript
{
  type: 'sublines',
  content: 'CLASSIFICATION FRAMEWORK\nVersion 2.0 — Published 2019'
}
```

## Structure

### Sub-Sections with Headers
Each sub-section can have an optional header:

```typescript
{
  header: 'Introduction',  // Optional
  components: [
    // Array of components
  ]
}
```

### Complete Example

```typescript
projectSection: {
  type: 'project-section',
  subSections: [
    {
      header: 'Section Title',
      components: [
        { type: 'paragraph', content: '...' },
        { type: 'inline-header', content: '...' },
        { type: 'hero-image', src: '...', alt: '...' },
        { type: 'divider' },
        // ... more components
      ]
    },
    // ... more sub-sections
  ]
}
```

## Metadata Structure

The new metadata format supports:

```typescript
metadata: {
  degree: 'Master Thesis (MA)',
  program: 'Strategic Design',
  year: '2019',
  institution: 'HfG Schwäbisch Gmünd',
  supervision: ['Prof. Name'],
  collaborators: ['Collaborator Name'],
  topics: ['Topic 1', 'Topic 2'],  // Can also be a string
}
```

## External Links

External links are displayed as black squares with colored arrows:

```typescript
externalLinks: [
  {
    title: 'Read the thesis',
    url: 'https://example.com',
  },
]
```

## Viewing the Example

To see all components in action:
1. Run `npm run dev`
2. Navigate to the Beneficial AI project
3. Each section demonstrates different component combinations

## Component Files Location

All component implementations are in:
- [components/project-sections/components/](components/project-sections/components/)
- [components/project-sections/SubSection.tsx](components/project-sections/SubSection.tsx)
- [components/project-sections/ProjectSection.tsx](components/project-sections/ProjectSection.tsx)
- [components/project-sections/Metadata.tsx](components/project-sections/Metadata.tsx)
- [components/project-sections/ExternalLinks.tsx](components/project-sections/ExternalLinks.tsx)
