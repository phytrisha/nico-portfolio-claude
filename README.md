# Nico Portfolio Website

A stunning portfolio website featuring a unique horizontal accordion layout for showcasing design and philosophy projects.

## Features

- **Hero Section**: Full-screen introduction with colored text highlights
- **Horizontal Accordion**: Innovative project navigation with expanding columns
- **Project Detail Pages**: Dedicated pages for each project with full content
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Responsive Design**: Adapts to different screen sizes
- **Modern Stack**: Built with Next.js 14+, React, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

Dependencies are already installed. To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) in your browser.

The development server is currently running at **http://localhost:3001**

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── project/[slug]/      # Dynamic project detail pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── HeroSection.tsx      # Hero/intro section
│   ├── ProjectsIntro.tsx    # Projects intro text
│   ├── ProjectsAccordion.tsx # Accordion container
│   ├── ProjectColumn.tsx    # Individual column component
│   └── ProjectsSection.tsx  # Main projects section
├── data/                    # Data files
│   └── projects.ts          # Project data and types
└── tailwind.config.ts       # Tailwind configuration
```

## Customization

### Adding Projects

Edit `data/projects.ts` to add or modify projects:

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
}
```

### Color Scheme

Colors are defined in `tailwind.config.ts`:

- `nico-orange`: #FF6B00 (Strategic Design)
- `nico-purple`: #B24BF3 (Philosophy - accent)
- `nico-pink`: #FF66CC (Philosophy projects)
- `nico-green`: #00E676 (UX/Freelance)
- `nico-cream`: #F5F5F0 (Background)
- `nico-black`: #000000 (Text/backgrounds)

## Key Features Explained

### Horizontal Accordion

- All projects displayed as vertical columns
- Click any column to expand it
- Only one column expanded at a time
- Smooth width transitions with Framer Motion
- Rotated text (90° counterclockwise) in collapsed state

### Dotted Text Effect

The word "projects" uses a custom dotted outline effect defined in `globals.css`. The effect creates a dashed stroke appearance.

### Project Categories

Projects are categorized with corresponding colors:
- **Strategic Design**: Orange
- **Philosophy**: Pink
- **Freelance/UX**: Green

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

- Static generation for project pages
- Optimized animations with Framer Motion
- Lazy loading for images (ready for implementation)
- Tailwind CSS for minimal bundle size

## Future Enhancements

- [ ] Add real project images
- [ ] Implement image lightbox
- [ ] Add page transitions
- [ ] Mobile-optimized vertical accordion
- [ ] Add contact section
- [ ] Integrate CMS for easy content management
- [ ] Add blog/writing section
- [ ] Implement search/filter

## License

MIT

## Author

Nico - Strategic Designer & Philosopher
