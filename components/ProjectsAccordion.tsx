'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectColumn from './ProjectColumn';
import { projects } from '@/data/projects';

interface ProjectsAccordionProps {
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
  onShowProjectsChange: (show: boolean) => void;
}

export default function ProjectsAccordion({ expandedId, setExpandedId, onShowProjectsChange }: ProjectsAccordionProps) {
  const [showProjects, setShowProjects] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleColumnClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable page scrolling when accordion is expanded
  useEffect(() => {
    if (expandedId !== null) {
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedId]);

  useEffect(() => {
    onShowProjectsChange(showProjects);
  }, [showProjects, onShowProjectsChange]);

  useEffect(() => {
    // On mobile, always show projects
    if (isMobile) {
      setShowProjects(true);
      return;
    }

    const handleScroll = () => {
      if (isAnimating) return; // Prevent scroll trigger during animation

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Check if user has scrolled to the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold

      if (isAtBottom && !showProjects) {
        // Wait 100 ms before showing projects
        timeoutRef.current = setTimeout(() => {
          setShowProjects(true);
          setIsAnimating(true);
        }, 100);
      } else if (!isAtBottom && showProjects) {
        setShowProjects(false);
        setIsAnimating(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile, showProjects, isAnimating]);

  return (
    <div
      ref={containerRef}
      className={`h-full flex md:flex-row flex-col w-full mt-32 lg:mt-0 ${
        expandedId !== null ? 'md:overflow-x-auto' : 'md:overflow-x-hidden'
      }`}
    >
      {/* Back button column - only visible when accordion is expanded */}
      {expandedId !== null && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative flex-shrink-0 md:h-full w-full md:w-[64px] flex flex-col"
          style={{ width: isMobile ? '100%' : '76px', height: isMobile ? '76px' : '100%' }}
        >
          {/* Close button at top */}
          <div className="flex items-center justify-center p-4 mt-110">
            <button
              onClick={() => setExpandedId(null)}
              className="text-white/60 hover:text-white transition-colors group"
              aria-label="Close expanded project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="w- h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.125 24.375L14.4469 23.0531L7.34062 15.9375H26.25V14.0625H7.34062L14.4469 6.94687L13.125 5.625L3.75 15L13.125 24.375Z"
                />
              </svg>
            </button>
          </div>

          {/* Three icons at bottom */}
          <div className="mt-auto flex flex-col items-center justify-end gap-5 p-4 pb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF6D01"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              className="w-8 h-8 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.8291 8C9.34726 8 9.80018 8.08838 10.1865 8.26562C10.5751 8.44291 10.8769 8.69002 11.0928 9.00586C11.3087 9.32176 11.421 9.6876 11.4277 10.1035H10.0127C9.9854 9.82856 9.86792 9.61517 9.66113 9.46289C9.45432 9.31068 9.17386 9.23438 8.81934 9.23438C8.57846 9.23438 8.37487 9.26779 8.20898 9.33594C8.04312 9.40186 7.91577 9.4942 7.82715 9.6123C7.74084 9.73046 7.69729 9.86471 7.69727 10.0146C7.69271 10.1396 7.7196 10.2486 7.77637 10.3418C7.83547 10.435 7.91625 10.5158 8.01855 10.584C8.12081 10.6498 8.23903 10.7079 8.37305 10.7578C8.50708 10.8055 8.65055 10.8468 8.80273 10.8809L9.42969 11.0303C9.73418 11.0984 10.014 11.1901 10.2686 11.3037C10.5229 11.4173 10.7434 11.5568 10.9297 11.7227C11.116 11.8886 11.26 12.0846 11.3623 12.3096C11.4667 12.5345 11.5202 12.7922 11.5225 13.083C11.5202 13.5103 11.4112 13.8807 11.1953 14.1943C10.9817 14.5056 10.673 14.7482 10.2686 14.9209C9.86625 15.0914 9.38064 15.1758 8.8125 15.1758C8.24888 15.1758 7.75803 15.0897 7.33984 14.917C6.92412 14.7443 6.59933 14.4888 6.36523 14.1504C6.1335 13.8096 6.01143 13.3878 6 12.8857H7.42871C7.44473 13.1196 7.51177 13.315 7.62988 13.4717C7.75029 13.6261 7.91045 13.7437 8.11035 13.8232C8.31254 13.9005 8.54143 13.9385 8.7959 13.9385C9.04549 13.9384 9.2624 13.9026 9.44629 13.8301C9.63265 13.7573 9.77758 13.6559 9.87988 13.5264C9.982 13.397 10.0331 13.248 10.0332 13.0801C10.0332 12.9234 9.98649 12.7913 9.89355 12.6846C9.80269 12.5777 9.66842 12.4861 9.49121 12.4111C9.31628 12.3361 9.10115 12.2684 8.84668 12.207L8.08594 12.0156C7.49776 11.8725 7.03318 11.649 6.69238 11.3447C6.35146 11.0402 6.1823 10.6292 6.18457 10.1133C6.18237 9.69075 6.29435 9.32163 6.52148 9.00586C6.75104 8.68996 7.06586 8.44293 7.46582 8.26562C7.86571 8.08846 8.32021 8.00005 8.8291 8ZM15.0107 8.0957C15.713 8.0957 16.3184 8.23511 16.8252 8.51465C17.3318 8.79185 17.7215 9.19074 17.9941 9.71094C18.2692 10.2314 18.4062 10.855 18.4062 11.5801C18.4062 12.3071 18.2691 12.9324 17.9941 13.4551C17.7215 13.9776 17.3295 14.3787 16.8184 14.6582C16.3093 14.9377 15.6994 15.0771 14.9902 15.0771H12.5156V8.0957H15.0107ZM13.9922 13.8125H14.9297C15.3657 13.8125 15.7327 13.7355 16.0303 13.5811C16.3303 13.4242 16.5551 13.1817 16.7051 12.8545C16.8573 12.525 16.9335 12.1003 16.9336 11.5801C16.9336 11.0641 16.8574 10.6418 16.7051 10.3145C16.5551 9.98742 16.3317 9.74624 16.0342 9.5918C15.7365 9.43724 15.369 9.36035 14.9326 9.36035H13.9922V13.8125Z"              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#F290EE"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              className="w-8 h-8 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.66895 8.61816C9.19835 8.61821 9.64983 8.71966 10.0225 8.92188C10.3949 9.12187 10.6786 9.40023 10.874 9.75684C11.0717 10.1114 11.1709 10.5208 11.1709 10.9844C11.1709 11.4477 11.0709 11.8566 10.8711 12.2109C10.6712 12.5654 10.3814 12.8423 10.002 13.04C9.62467 13.2377 9.16726 13.3359 8.63086 13.3359H7.39062V15.5996H5.91406V8.61816H8.66895ZM13.6055 11.499H16.6025V8.61816H18.0752V15.5996H16.6025V12.7158H13.6055V15.5996H12.1299V8.61816H13.6055V11.499ZM7.39062 12.1533H8.39258C8.67661 12.1533 8.91062 12.1045 9.09473 12.0068C9.281 11.9069 9.41984 11.7696 9.51074 11.5947C9.60388 11.4175 9.65035 11.2138 9.65039 10.9844C9.65039 10.7526 9.60392 10.5496 9.51074 10.377C9.41984 10.202 9.281 10.0671 9.09473 9.97168C8.90839 9.87395 8.67207 9.82521 8.38574 9.8252H7.39062V12.1533Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#259918"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              className="w-8 h-8 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.45312 13.0264C7.45316 13.2922 7.51107 13.5286 7.62695 13.7354C7.74504 13.942 7.91062 14.1046 8.12402 14.2227C8.33768 14.3409 8.58705 14.4004 8.87109 14.4004C9.15728 14.4004 9.40591 14.3407 9.61719 14.2227C9.83068 14.1046 9.99542 13.942 10.1113 13.7354C10.2295 13.5286 10.289 13.2922 10.2891 13.0264V8.61816H11.7656V13.1523C11.7656 13.6613 11.6435 14.1066 11.4004 14.4883C11.1595 14.8701 10.8218 15.1682 10.3877 15.3818C9.95375 15.5931 9.44824 15.6992 8.87109 15.6992C8.29162 15.6992 7.78465 15.5931 7.35059 15.3818C6.91655 15.1682 6.57885 14.8701 6.33789 14.4883C6.0971 14.1066 5.97657 13.6613 5.97656 13.1523V8.61816H7.45312V13.0264ZM15.7715 10.998H15.8262L17.2412 8.61816H18.9082L16.7773 12.1094L18.9561 15.5996H17.2578L15.8262 13.2168H15.7715L14.3398 15.5996H12.6494L14.834 12.1094L12.6895 8.61816H14.3643L15.7715 10.998Z"              />
            </svg>
          </div>
        </motion.div>
      )}

      {projects.map((project, index) => {
        // When showing: delay increases with index (0, 0.1, 0.2, ...)
        // When hiding: delay increases in reverse (0.8, 0.7, 0.6, ...)
        const reverseIndex = projects.length - 1 - index;
        const delay = showProjects ? index * 0.1 : reverseIndex * 0.1;

        return (
          <motion.div
            key={project.id}
            initial={isMobile ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            animate={isMobile ? {
              y: 0,
              opacity: 1
            } : {
              y: showProjects ? 0 : '100%',
              opacity: showProjects ? 1 : 0
            }}
            transition={isMobile ? {
              duration: 0
            } : {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: delay
            }}
            onAnimationComplete={() => {
              // Only set isAnimating to false after the last item completes
              if (index === (showProjects ? projects.length - 1 : 0)) {
                setIsAnimating(false);
              }
            }}
            className="md:h-full w-full md:w-auto"
          >
            <ProjectColumn
              project={project}
              isExpanded={expandedId === project.id}
              onClick={() => handleColumnClick(project.id)}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
