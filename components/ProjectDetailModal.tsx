'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Project, ContentSection } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const router = useRouter();

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
            <div className="w-full h-full flex">
              {/* Colored accent bar on the left */}
              <div
                className="w-16 flex-shrink-0 text-white relative"
                style={{ backgroundColor: project.color }}
              >
                <div className="h-full flex flex-col grow items-center justify-start py-8 px-4">
                  <div className="text-sm font-medium text-center">{project.id.toString().padStart(2, '0')}</div>
                  {/* Rotated content - reads bottom to top */}
                  <div
                    className="flex flex-row grow py-4 items-center gap-4"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    <div className="text-xs grow font-medium mt-4 text-left whitespace-nowrap">
                      {project.shortTitle}
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="h-px w-8 bg-white"></div>
                  </div>
                </div>
              </div>

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

                  {/* Metadata table */}
                  <div className="border-2 border-black mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
                      <div className="p-4 border-b md:border-b-0 md:border-r-2 border-black">
                        <p className="text-sm font-medium">Strategic Design, 2019</p>
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium">{project.metadata.topics}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm">Master Thesis, M.A.</p>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="space-y-8 mb-16">
                    {project.contentSections && project.contentSections.length > 0 ? (
                      project.contentSections.map((section: ContentSection, index: number) => {
                        switch (section.type) {
                          case 'text':
                            return (
                              <div key={index}>
                                <p className="text-base leading-relaxed">{section.content}</p>
                              </div>
                            );

                          case 'image':
                            return (
                              <div key={index} className="bg-gray-200 h-96 flex items-center justify-center">
                                {section.image ? (
                                  <Image
                                    src={section.image}
                                    alt="Project image"
                                    width={1200}
                                    height={600}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <p className="text-gray-500 text-lg">Project Image Placeholder</p>
                                )}
                              </div>
                            );

                          case 'two-column':
                            const layout = section.layout || 'text-image'; // Default to text-image for backwards compatibility

                            const renderColumn = (position: 'left' | 'right') => {
                              const isLeft = position === 'left';
                              const layoutSide = isLeft ? layout.split('-')[0] : layout.split('-')[1];

                              if (layoutSide === 'image') {
                                const imageSrc = isLeft ? section.leftImage : section.rightImage;
                                return (
                                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                                    {imageSrc ? (
                                      <Image
                                        src={imageSrc}
                                        alt="Project detail"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <p className="text-gray-500">Image</p>
                                    )}
                                  </div>
                                );
                              } else {
                                const textContent = isLeft ? section.leftContent : section.rightContent;
                                return (
                                  <div>
                                    <p className="text-base leading-relaxed">{textContent}</p>
                                  </div>
                                );
                              }
                            };

                            return (
                              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {renderColumn('left')}
                                {renderColumn('right')}
                              </div>
                            );

                          case 'quote':
                            return (
                              <div key={index}>
                                <p className="text-base leading-relaxed italic border-l-4 border-black pl-6 py-2">
                                  "{section.content}"
                                </p>
                              </div>
                            );

                          case 'two-thirds-layout':
                            return (
                              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                  {section.leftContent ? (
                                    <p className="text-base leading-relaxed">{section.leftContent}</p>
                                  ) : section.leftImage ? (
                                    <div className="bg-gray-200 h-96 flex items-center justify-center">
                                      <Image
                                        src={section.leftImage}
                                        alt="Project detail"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                                <div className="md:col-span-1">
                                  {section.rightContent ? (
                                    <p className="text-base leading-relaxed">{section.rightContent}</p>
                                  ) : section.rightImage ? (
                                    <div className="bg-gray-200 h-96 flex items-center justify-center">
                                      <Image
                                        src={section.rightImage}
                                        alt="Project detail"
                                        width={400}
                                        height={600}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            );

                          case 'one-third-layout':
                            return (
                              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-1">
                                  {section.leftContent ? (
                                    <p className="text-base leading-relaxed">{section.leftContent}</p>
                                  ) : section.leftImage ? (
                                    <div className="bg-gray-200 h-96 flex items-center justify-center">
                                      <Image
                                        src={section.leftImage}
                                        alt="Project detail"
                                        width={400}
                                        height={600}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                                <div className="md:col-span-2">
                                  {section.rightContent ? (
                                    <p className="text-base leading-relaxed">{section.rightContent}</p>
                                  ) : section.rightImage ? (
                                    <div className="bg-gray-200 h-96 flex items-center justify-center">
                                      <Image
                                        src={section.rightImage}
                                        alt="Project detail"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            );

                          case 'subheadline':
                            return (
                              <div key={index} className="my-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                {section.content && (
                                  <p className="text-base leading-relaxed text-gray-700">{section.content}</p>
                                )}
                              </div>
                            );

                          case 'links':
                            return (
                              <div key={index} className="my-8">
                                {section.title && (
                                  <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                                )}
                                <div className="space-y-3">
                                  {section.links?.map((link, linkIndex) => (
                                    <a
                                      key={linkIndex}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-black hover:underline group"
                                    >
                                      <span className="text-base font-medium">{link.title}</span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3 13L13 3M13 3H6M13 3V10"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            );

                          default:
                            return null;
                        }
                      })
                    ) : (
                      // Fallback to default content if no contentSections
                      <>
                        <div>
                          <p className="text-base leading-relaxed mb-4">{project.description}</p>
                          <p className="text-base leading-relaxed mb-4">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet.
                          </p>
                        </div>

                        <div className="bg-gray-200 h-96 flex items-center justify-center">
                          <p className="text-gray-500 text-lg">Project Image Placeholder</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <p className="text-base leading-relaxed">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                          </div>
                          <div className="bg-gray-200 h-64 flex items-center justify-center">
                            <p className="text-gray-500">Image</p>
                          </div>
                        </div>

                        <div className="bg-gray-200 h-96 flex items-center justify-center">
                          <p className="text-gray-500 text-lg">Project Image Placeholder</p>
                        </div>

                        <div>
                          <p className="text-base leading-relaxed italic border-l-4 border-black pl-6 py-2">
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est."
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* External Links */}
                  {project.externalLinks && project.externalLinks.length > 0 && (
                    <div className="border-t-2 border-black pt-12">
                      <h3 className="text-2xl font-bold mb-8">External Links</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.externalLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <div className="bg-black p-6 transition-transform">
                              <div className="flex items-end justify-between mb-4">
                                <h4 className="text-white text-sm font-medium flex-1">
                                  {link.title}
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
                                    stroke={project.color}
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <p className="text-gray-400 text-xs">
                                External Link
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
