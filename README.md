# Nico Portfolio Website

A stunning portfolio website featuring a unique horizontal accordion layout for showcasing design and philosophy projects.

## Features

- **Hero Section**: Full-screen introduction with colored text highlights
- **Horizontal/Vertical Accordion**: Innovative project navigation with expanding columns (horizontal on desktop, vertical on mobile)
- **Project Detail Modal**: Slide-up modal for viewing full project details with rich content sections
- **Multiple Content Section Types**: Text, images, two-column layouts, quotes, two-thirds layouts, one-third layouts, subheadlines, and links
- **Colored Accent Bar**: Dynamic colored sidebar showing project ID, title, and tags
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Fully Responsive Design**: Optimized layouts for mobile, tablet, and desktop
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router with Turbopack)
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion 12
- **Linting**: ESLint 9
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser (or the port shown in terminal).

### Build for Production

Build with Turbopack:

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/                                    # Next.js app directory
│   ├── @modal/                            # Parallel route for modal
│   │   ├── (.)project/[slug]/page.tsx    # Intercepted project route
│   │   └── default.tsx                   # Default modal state
│   ├── project/[slug]/page.tsx           # Dynamic project detail pages
│   ├── globals.css                       # Global styles
│   ├── layout.tsx                        # Root layout with modal support
│   └── page.tsx                          # Home page
├── components/                            # React components
│   ├── ColoredAccentBar.tsx              # Project accent bar (vertical/horizontal)
│   ├── HeroSection.tsx                   # Hero/intro section
│   ├── ProjectColumn.tsx                 # Individual accordion column
│   ├── ProjectDetailModal.tsx            # Project detail modal
│   ├── ProjectsAccordion.tsx             # Accordion container
│   ├── ProjectsIntro.tsx                 # Projects intro text
│   ├── ProjectsSection.tsx               # Main projects section
│   └── project-sections/                 # Project content section components
│       ├── ExternalLinks.tsx             # External links display
│       ├── ImageSection.tsx              # Image content section
│       ├── LinksSection.tsx              # Links content section
│       ├── OneThirdLayoutSection.tsx     # 1/3-2/3 layout section
│       ├── ProjectMetadata.tsx           # Project metadata table
│       ├── QuoteSection.tsx              # Quote content section
│       ├── SubheadlineSection.tsx        # Subheadline content section
│       ├── TextSection.tsx               # Text content section
│       ├── TwoColumnSection.tsx          # Two-column layout section
│       └── TwoThirdsLayoutSection.tsx    # 2/3-1/3 layout section
├── data/                                  # Data files
│   ├── projects.ts                       # Project data
│   └── types.ts                          # TypeScript type definitions
├── tailwind.config.ts                     # Tailwind configuration
└── next.config.ts                         # Next.js configuration
```

## Customization

### Adding Projects

Edit [data/projects.ts](data/projects.ts) to add or modify projects. Each project includes:

```typescript
{
  id: 10,
  slug: 'your-project-slug',
  title: 'Your Project Title',
  shortTitle: 'SHORT TITLE FOR COLUMN',
  category: 'strategic-design' | 'philosophy' | 'freelance',
  tags: ['#TAG1', '#TAG2'],
  color: '#HEX_COLOR',
  metadata: {
    type: 'Project Type, Year',
    topics: 'Topics, Keywords',
  },
  description: 'Project description...',
  contentSections: [
    { type: 'text', content: 'Main content...' },
    { type: 'image', src: '/images/example.jpg', alt: 'Description' },
    { type: 'two-column', left: 'Left content', right: 'Right content' },
    { type: 'quote', content: 'Quote text', author: 'Author name' },
    // ... more section types available
  ],
  externalLinks: [
    { label: 'View Live', url: 'https://example.com' }
  ]
}
```

### Content Section Types

The project detail modal supports multiple content section types:

- **text**: Standard text content with automatic paragraph formatting
- **image**: Full-width image with alt text
- **two-column**: Side-by-side content columns
- **quote**: Styled quote block with optional author attribution
- **two-thirds-layout**: 2/3 left, 1/3 right layout
- **one-third-layout**: 1/3 left, 2/3 right layout
- **subheadline**: Section subheading
- **links**: List of related links

### Color Scheme

Colors are defined in [tailwind.config.ts](tailwind.config.ts):

- `nico-orange`: #FF6B00 (Strategic Design)
- `nico-purple`: #B24BF3 (Philosophy - accent)
- `nico-pink`: #FF66CC (Philosophy projects)
- `nico-green`: #00E676 (UX/Freelance)
- `nico-cream`: #F5F5F0 (Background)
- `nico-black`: #000000 (Text/backgrounds)

Colors are used throughout the components for project categorization and accent bars.

## Key Features Explained

### Responsive Accordion

**Desktop (≥768px)**:
- Horizontal layout with vertical columns
- Click any column to expand horizontally
- Only one column expanded at a time
- Smooth width transitions with Framer Motion
- Text rotated 90° counterclockwise in collapsed state
- Responsive widths based on viewport (400px to 900px when expanded)

**Mobile (<768px)**:
- Vertical stacked layout
- Click any bar to expand vertically
- Horizontal text layout in collapsed state
- Fixed 80px collapsed height, 600px expanded height

### Colored Accent Bar

The [ColoredAccentBar](components/ColoredAccentBar.tsx) component adapts to both desktop and mobile:
- Desktop: Vertical 64px-wide sidebar with rotated text
- Mobile: Horizontal 80px-tall bar
- Displays project ID (zero-padded), short title, and tags
- Background color changes based on project category

### Project Detail Modal

Uses Next.js 15 parallel routes and route interception:
- Clicking the arrow in an expanded column opens a modal
- Modal slides up from bottom with backdrop
- Full project content with multiple section types
- Close button or backdrop click to dismiss
- Colored accent bar maintains project identity

### Dotted Text Effect

The word "projects" uses a custom dotted outline effect defined in [app/globals.css](app/globals.css). The effect creates a dashed stroke appearance using CSS `stroke-dasharray`.

### Project Categories

Projects are categorized with corresponding colors:
- **Strategic Design**: Orange (#FF6B00)
- **Philosophy**: Pink (#FF66CC)
- **Freelance/UX**: Green (#00E676)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npx vercel
```

## Design Reference

The design is based on the reference images provided:
- Overall_Intro.png - Hero section
- Project_Intro.png - Projects intro with collapsed columns
- Project_Preview_1.png - Expanded orange project
- Project_Preview_2.png - Expanded pink project
- Project_Detail.jpg - Detail page layout

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- **Turbopack**: Ultra-fast builds and HMR in development
- **Static Generation**: Project pages pre-rendered at build time
- **Framer Motion**: Hardware-accelerated animations
- **Tailwind CSS 4**: Optimized CSS with minimal bundle size
- **React 19**: Latest performance improvements and features
- **Route Interception**: Instant modal loading without page navigation

## Architecture Highlights

### Parallel Routes & Interception
The app uses Next.js 15's advanced routing features:
- `@modal` slot for parallel modal rendering
- `(.)project/[slug]` for route interception
- Seamless navigation between modal and full page views

### Responsive Design System
- Mobile-first approach with Tailwind breakpoints
- Dynamic layout switching at 768px breakpoint
- Viewport-based sizing for optimal display
- Touch-friendly interactions on mobile

### Type Safety
- Full TypeScript coverage
- Centralized type definitions in [data/types.ts](data/types.ts)
- Type-safe content sections
- Strongly typed project data structure

## License

MIT

## Author

Nico - Strategic Designer & Philosopher
