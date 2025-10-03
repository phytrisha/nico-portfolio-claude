'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Project, ContentSection } from '@/data/projects';
import TextSection from './project-sections/TextSection';
import ImageSection from './project-sections/ImageSection';
import TwoColumnSection from './project-sections/TwoColumnSection';
import QuoteSection from './project-sections/QuoteSection';
import TwoThirdsLayoutSection from './project-sections/TwoThirdsLayoutSection';
import OneThirdLayoutSection from './project-sections/OneThirdLayoutSection';
import SubheadlineSection from './project-sections/SubheadlineSection';
import LinksSection from './project-sections/LinksSection';
import ProjectMetadata from './project-sections/ProjectMetadata';
import ExternalLinks from './project-sections/ExternalLinks';
import ColoredAccentBar from './ColoredAccentBar';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 top-[0vh] z-50 flex overflow-hidden"
          >
            <div className="w-full h-full flex flex-col md:flex-row">
              <ColoredAccentBar
                id={project.id}
                shortTitle={project.shortTitle}
                tags={project.tags}
                color={project.color}
              />

              {/* Main content area */}
              <div className="flex-1 bg-nico-cream text-black relative overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="fixed top-8 right-8 z-50 bg-black text-white w-12 h-12 flex items-center justify-center cursor-pointer transition-transform"
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

                  <ExternalLinks links={project.externalLinks || []} projectColor={project.color} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
