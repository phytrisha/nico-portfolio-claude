'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { renderDescription } from './utils/descriptionRenderer';

interface ProjectRowContentProps {
  project: Project;
  animationDuration: number;
  ease: number[];
  scrollIntoView?: boolean;
  onAnimationComplete?: () => void;
}

export default function ProjectRowContent({
  project,
  animationDuration,
  ease,
  scrollIntoView,
  onAnimationComplete,
}: ProjectRowContentProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const [expandDone, setExpandDone] = React.useState(false);
  const [collapsing, setCollapsing] = React.useState(false);
  const [buttonVisible, setButtonVisible] = React.useState(true);

  React.useEffect(() => {
    if (!expandDone) return;

    const checkVisibility = () => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setButtonVisible(isVisible);
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [expandDone]);

  return (
    <motion.div
      ref={ref}
      style={{ color: 'var(--text-projectpreview)' }}
      initial={{ height: 0, backgroundColor: 'transparent' }}
      animate={{ height: 'auto', backgroundColor: project.color }}
      exit={{ height: 0, backgroundColor: 'transparent' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
      onAnimationStart={(definition) => {
        if (typeof definition === 'object' && definition !== null && 'height' in definition && (definition as Record<string, unknown>).height === 0) setCollapsing(true);
      }}
      onAnimationComplete={() => {
        onAnimationComplete?.();
        setExpandDone(true);
      }}
      onUpdate={() => {
        if (scrollIntoView && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const overshoot = rect.bottom - window.innerHeight;
          if (overshoot > 0) {
            window.scrollBy({ top: overshoot, behavior: 'auto' });
          }
        }
      }}
    >
      {/* xl+ layout: side-by-side grid */}
      <div className="hidden xl:grid pl-0 pt-0 grid-cols-3 gap-12">
        <div className='col-span-2 pb-12'>
            <div className="text-5xl leading-normal">{renderDescription(project.description)}</div>
        </div>
        <div className="flex items-end justify-end col-span-1">
          <Link
            href={project.externalUrl || `/project/${project.slug}`}
            target={project.externalUrl ? '_blank' : undefined}
            rel={project.externalUrl ? 'noopener noreferrer' : undefined}
            data-press
            className="block"
          >
            <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              <svg className="w-[100px] h-[100px]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 70L70 10M73 10H25M70 10V55" stroke="#EDEBE3" strokeWidth="6" strokeLinecap="butt" strokeLinejoin="miter" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Below xl: full-width text with sticky button when offscreen */}
      <div className="xl:hidden relative">
        <div className="pt-0 pb-10">
          <div className="text-5xl leading-normal">{renderDescription(project.description)}</div>
        </div>

        {/* Sticky duplicate — only shown when original button is offscreen and expand is done */}
        {expandDone && !collapsing && !buttonVisible && (
          <div className="sticky bottom-0 flex justify-end z-10 overflow-hidden">
            <div className="animate-slide-up">
            <Link
              href={project.externalUrl || `/project/${project.slug}`}
              target={project.externalUrl ? '_blank' : undefined}
              rel={project.externalUrl ? 'noopener noreferrer' : undefined}
              data-press
              className="block"
            >
              <div className="p-10 md:py-[46px] flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
                <svg className="w-12 h-12 md:w-[72px] md:h-[72px]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 70L70 10M73 10H25M70 10V55" stroke="#EDEBE3" strokeWidth="6" strokeLinecap="butt" strokeLinejoin="miter" />
                </svg>
              </div>
            </Link>
            </div>
          </div>
        )}

        {/* Original button at its natural position */}
        <div ref={buttonRef} className="flex justify-end" style={{ visibility: collapsing ? 'hidden' : 'visible' }}>
          <Link
            href={project.externalUrl || `/project/${project.slug}`}
            target={project.externalUrl ? '_blank' : undefined}
            rel={project.externalUrl ? 'noopener noreferrer' : undefined}
            data-press
            className="block"
          >
            <div className="p-10 md:py-[46px] flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              <svg className="w-12 h-12 md:w-[72px] md:h-[72px]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 70L70 10M73 10H25M70 10V55" stroke="#EDEBE3" strokeWidth="6" strokeLinecap="butt" strokeLinejoin="miter" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
