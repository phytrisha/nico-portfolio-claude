'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import type { Project } from '@/data/projects';

interface ProjectRowHeaderProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

export default function ProjectRowHeader({
  project,
  isExpanded,
  onClick
}: ProjectRowHeaderProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [expandedDelayDone, setExpandedDelayDone] = useState(false);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const checkProximity = () => {
      const rect = el.getBoundingClientRect();
      const vpCenter = window.innerHeight / 2;
      // Trigger only when the element's top has scrolled past the viewport center
      const pastCenter = rect.top < vpCenter;

      if (pastCenter) {
        const currentActive = document.querySelector('[data-marquee-active]');
        if (currentActive && currentActive !== el) {
          currentActive.removeAttribute('data-marquee-active');
          currentActive.dispatchEvent(new CustomEvent('marquee-stop'));
        }
        el.setAttribute('data-marquee-active', '');
        setShouldAnimate(true);
      } else if (el.hasAttribute('data-marquee-active')) {
        el.removeAttribute('data-marquee-active');
        setShouldAnimate(false);
      }
    };

    const handleStop = () => setShouldAnimate(false);
    el.addEventListener('marquee-stop', handleStop);
    window.addEventListener('scroll', checkProximity, { passive: true });
    checkProximity();

    return () => {
      window.removeEventListener('scroll', checkProximity);
      el.removeEventListener('marquee-stop', handleStop);
      el.removeAttribute('data-marquee-active');
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => setExpandedDelayDone(true), 3000);
      return () => clearTimeout(timer);
    }
    setExpandedDelayDone(false);
  }, [isExpanded]);

  return (
    <div
      className="w-full"
      data-magnetic-row="true"
      style={{
        backgroundColor: isExpanded ? project.color : 'var(--bg-primary)'
      }}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center font-sans px-0 pt-7 pb-10 md:py-10" style={{ color: isExpanded && isDark ? '#000000' : 'var(--text-primary)' }}>

        {/* First line - Title and expand button */}
        <div className="mb-6 md:mb-7">
          <div data-magnetic-title className="text-[22px] md:text-[28px] lg:text-[28px] font-medium leading-[1.4]">{project.shortTitle}</div>
        </div>

        {/* Second line - Table format with ID, Tags, and Year */}
        <div
          className="flex items-center gap-0 text-xs font-mono mb-0 md:mb-3 leading-[1.5]"
          style={{ border: `1px solid ${isExpanded && isDark ? '#000000' : 'var(--border-color)'}` }}
        >
          <div
            className="px-4 py-2 font-medium"
            style={{ borderRight: `1px solid ${isExpanded && isDark ? '#000000' : 'var(--border-color)'}` }}
          >
            {project.id.toString().padStart(2, '0')}
          </div>
          {project.year && (
            <div 
              className="px-4 py-2 font-medium"
              style={{ borderRight: `1px solid ${isExpanded && isDark ? '#000000' : 'var(--border-color)'}` }}>
              {project.year}
            </div>
          )}
          <div ref={marqueeRef} className="overflow-hidden flex-1 relative px-4 py-2">
            <div className={`whitespace-nowrap md:whitespace-normal ${shouldAnimate || expandedDelayDone ? 'marquee-container' : ''}`}>
              <span className="marquee-content">{project.tags.join(',\u00A0\u00A0').toUpperCase()}{(shouldAnimate || expandedDelayDone) && <span className="md:hidden">&nbsp;&nbsp;—&nbsp;&nbsp;</span>}</span>
              {(shouldAnimate || expandedDelayDone) && (
                <span className="marquee-content md:hidden" aria-hidden>{project.tags.join(',\u00A0\u00A0').toUpperCase()}&nbsp;&nbsp;—&nbsp;&nbsp;</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
