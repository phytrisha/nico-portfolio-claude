'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/types';
import Metadata from './project-sections/Metadata';
import ProjectSection from './project-sections/ProjectSection';
import ExternalLinks from './project-sections/ExternalLinks';
import PasswordGate from './PasswordGate';

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
            {project.protected ? (
              <PasswordGate onClose={handleClose}>
                <div className="w-full h-full flex flex-col md:flex-row">
                  {/* Main content area */}
                  <div className="flex-1 relative overflow-y-auto" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                    {/* Close button */}
                    <button
                      onClick={handleClose}
                      className="fixed top-0 right-0 z-50 w-20 h-20 flex items-center justify-center transition-transform"
                      style={{ backgroundColor: 'var(--externallink-bg)', color: 'var(--close-btn-icon)' }}
                    >
                      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>

                    <div style={{ '--detail-px': 'clamp(18px, 4vw, 60px)', paddingLeft: 'var(--detail-px)', paddingRight: 'var(--detail-px)' } as React.CSSProperties}>
                      <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold mb-18 mt-28 leading-tight max-w-4xl mx-auto">
                        {project.title}
                      </h1>
                      <div className="-mb-[1px]">
                        <Metadata projectId={project.id} metadata={project.metadata} />
                      </div>
                      {project.projectSection && (
                        <div className="mb-16">
                          <ProjectSection projectSection={project.projectSection} />
                        </div>
                      )}
                      <ExternalLinks links={project.externalLinks || []} projectColor={project.color} />
                    </div>
                  </div>
                </div>
              </PasswordGate>
            ) : (
              <div className="w-full h-full flex flex-col md:flex-row">
                {/* Main content area */}
                <div className="flex-1 relative overflow-y-auto" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="fixed top-0 right-0 z-50 w-20 h-20 flex items-center justify-center transition-transform"
                    style={{ backgroundColor: 'var(--externallink-bg)', color: 'var(--close-btn-icon)' }}
                  >
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>

                  <div style={{ '--detail-px': 'clamp(18px, 4vw, 60px)', paddingLeft: 'var(--detail-px)', paddingRight: 'var(--detail-px)' } as React.CSSProperties}>
                    <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold mb-18 mt-28 leading-tight max-w-4xl mx-auto">
                      {project.title}
                    </h1>
                    <div className="-mb-[1px]">
                      <Metadata projectId={project.id} metadata={project.metadata} />
                    </div>
                    {project.projectSection && (
                      <div className="mb-16">
                        <ProjectSection projectSection={project.projectSection} />
                      </div>
                    )}
                    <ExternalLinks links={project.externalLinks || []} projectColor={project.color} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
