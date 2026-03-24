'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const magnetTarget = useRef<{ x: number; y: number } | null>(null);
  const animationFrame = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const CLICKABLE_SELECTOR = 'a, button, [role="button"], input[type="submit"], [data-clickable], .cursor-pointer';
  const DOT_SIZE = 16;
  const DOT_SIZE_HOVER = 40;
  const MAGNET_DISTANCE = 120;
  const MAGNET_STRENGTH = 0.45;
  const SMOOTH_FACTOR = 0.15;

  const animate = useCallback(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const tx = magnetTarget.current
      ? targetPosition.current.x + (magnetTarget.current.x - targetPosition.current.x) * MAGNET_STRENGTH
      : targetPosition.current.x;
    const ty = magnetTarget.current
      ? targetPosition.current.y + (magnetTarget.current.y - targetPosition.current.y) * MAGNET_STRENGTH
      : targetPosition.current.y;

    position.current.x += (tx - position.current.x) * SMOOTH_FACTOR;
    position.current.y += (ty - position.current.y) * SMOOTH_FACTOR;

    const size = isHovering.current ? DOT_SIZE_HOVER : DOT_SIZE;
    dot.style.transform = `translate(${position.current.x - size / 2}px, ${position.current.y - size / 2}px)`;

    animationFrame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Detect touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (hasTouch && hasCoarsePointer) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check for nearby clickable elements for magnetic effect
      const clickable = (e.target as Element)?.closest?.(CLICKABLE_SELECTOR);
      if (clickable) {
        const rect = clickable.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        if (dist < MAGNET_DISTANCE) {
          magnetTarget.current = { x: centerX, y: centerY };
        } else {
          magnetTarget.current = null;
        }
      } else {
        magnetTarget.current = null;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const clickable = (e.target as Element)?.closest?.(CLICKABLE_SELECTOR);
      if (clickable) {
        isHovering.current = true;
        dotRef.current?.classList.add('cursor-dot-hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const clickable = (e.target as Element)?.closest?.(CLICKABLE_SELECTOR);
      if (clickable) {
        isHovering.current = false;
        magnetTarget.current = null;
        dotRef.current?.classList.remove('cursor-dot-hover');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrame.current);
    };
  }, [animate, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
        backdropFilter: 'invert(1) grayscale(1) contrast(20)',
        WebkitBackdropFilter: 'invert(1) grayscale(1) contrast(20)',
      }}
    >
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
        .cursor-dot-hover {
          width: ${DOT_SIZE_HOVER}px !important;
          height: ${DOT_SIZE_HOVER}px !important;
        }
      `}</style>
    </div>
  );
}
