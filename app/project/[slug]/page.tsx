'use client';

import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { projects, ContentSection } from '@/data/projects';
import { use } from 'react';
import ColoredAccentBar from '@/components/ColoredAccentBar';
import ProjectMetadata from '@/components/project-sections/ProjectMetadata';
import TextSection from '@/components/project-sections/TextSection';
import ImageSection from '@/components/project-sections/ImageSection';
import TwoColumnSection from '@/components/project-sections/TwoColumnSection';
import QuoteSection from '@/components/project-sections/QuoteSection';
import TwoThirdsLayoutSection from '@/components/project-sections/TwoThirdsLayoutSection';
import OneThirdLayoutSection from '@/components/project-sections/OneThirdLayoutSection';
import SubheadlineSection from '@/components/project-sections/SubheadlineSection';
import LinksSection from '@/components/project-sections/LinksSection';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  const handleClose = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex">
      <ColoredAccentBar
        id={project.id}
        shortTitle={project.shortTitle}
        tags={project.tags}
        color={project.color}
      />

      {/* Main content area */}
      <div className="flex-1 bg-nico-cream text-black relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="fixed top-8 right-8 z-50 bg-black text-white w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="max-w-5xl mx-auto p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {project.title}
          </h1>

          <ProjectMetadata project={project} />

          {/* Main content */}
          <div className="space-y-8 mb-16">
            {project.contentSections?.map((section: ContentSection, index: number) => {
              switch (section.type) {
                case 'text':
                  return <TextSection key={index} section={section} />;

                case 'image':
                  return <ImageSection key={index} section={section} />;

                case 'two-column':
                  return <TwoColumnSection key={index} section={section} />;

                case 'quote':
                  return <QuoteSection key={index} section={section} />;

                case 'two-thirds-layout':
                  return <TwoThirdsLayoutSection key={index} section={section} />;

                case 'one-third-layout':
                  return <OneThirdLayoutSection key={index} section={section} />;

                case 'subheadline':
                  return <SubheadlineSection key={index} section={section} />;

                case 'links':
                  return <LinksSection key={index} section={section} />;

                default:
                  return null;
              }
            })}
          </div>

          {/* Related projects navigation */}
          {relatedProjects.length > 0 && (
            <div className="border-t-2 border-black pt-12">
              <h3 className="text-2xl font-bold mb-8">Explore More Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relProject) => (
                  <Link
                    key={relProject.id}
                    href={`/project/${relProject.slug}`}
                    className="group"
                  >
                    <div className="bg-black p-6">
                      <div className="flex items-end justify-between mb-4">
                        <h4 className="text-white text-sm font-medium flex-1">
                          {relProject.title.substring(0, 40)}...
                        </h4>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 ml-2"
                        >
                          <path
                            d="M10 70L70 10M70 10H25M70 10V55"
                            stroke={relProject.color}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-xs">
                        {relProject.category.replace('-', ' ')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
