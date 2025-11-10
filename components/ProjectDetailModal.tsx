'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/types';
import Metadata from './project-sections/Metadata';
import ProjectSection from './project-sections/ProjectSection';
import ExternalLinks from './project-sections/ExternalLinks';

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

              {/* Main content area */}
              <div className="flex-1 bg-[#EEEFEB] text-black relative overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="fixed top-0 right-0 z-50 bg-black text-white w-24 h-24 flex items-center justify-center cursor-pointer transition-transform"
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div className="max-w-[80%] mx-auto">
                  {/* Project Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-[46px] w-[66%] font-medium mb-8 mt-28 leading-tight">
                    {project.title}
                  </h1>

                  {/* Metadata Section */}
                  <Metadata projectId={project.id} metadata={project.metadata} />

                  {/* Project Section - All content in one div */}
                  {project.projectSection && (
                    <div className="border">
                      <ProjectSection projectSection={project.projectSection} />
                    </div>
                  )}

                  {/* External Links */}
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
