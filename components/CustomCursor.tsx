'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const magnetTarget = useRef<{ x: number; y: number } | null>(null);
  const rowMagnetTarget = useRef<{ x: number; y: number; maxDistX: number; maxDistY: number } | null>(null);
  const lastRowRect = useRef<{ top: number; bottom: number; centerX: number; centerY: number; maxDistX: number; maxDistY: number } | null>(null);
  const animationFrame = useRef<number>(0);
  const currentScale = useRef(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const CLICKABLE_SELECTOR = 'a, button, [role="button"], input[type="submit"], [data-clickable], .cursor-pointer';
  const DOT_SIZE = 16;
  const DOT_SIZE_HOVER = 40;
  const MAGNET_DISTANCE = 120;
  const MAGNET_STRENGTH = 0.45;
  const ROW_MAGNET_STRENGTH = 0.3;
  const SMOOTH_FACTOR = 0.15;
  const MAX_ROW_SCALE = DOT_SIZE_HOVER / DOT_SIZE; // same max as hover

  const animate = useCallback(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let tx = targetPosition.current.x;
    let ty = targetPosition.current.y;

    // Row magnetic pull (lower priority — overridden by clickable magnet)
    if (rowMagnetTarget.current && !magnetTarget.current) {
      tx += (rowMagnetTarget.current.x - tx) * ROW_MAGNET_STRENGTH;
      ty += (rowMagnetTarget.current.y - ty) * ROW_MAGNET_STRENGTH;
    }

    // Clickable element magnetic pull (higher priority)
    if (magnetTarget.current) {
      tx += (magnetTarget.current.x - tx) * MAGNET_STRENGTH;
      ty += (magnetTarget.current.y - ty) * MAGNET_STRENGTH;
    }

    position.current.x += (tx - position.current.x) * SMOOTH_FACTOR;
    position.current.y += (ty - position.current.y) * SMOOTH_FACTOR;

    // Calculate scale based on row proximity or hover state
    let targetScale = 1;
    if (isHovering.current) {
      targetScale = MAX_ROW_SCALE;
    } else if (rowMagnetTarget.current) {
      // Scale based on separate X/Y proximity, with Y weighted 2x
      const dx = Math.abs(targetPosition.current.x - rowMagnetTarget.current.x);
      const dy = Math.abs(targetPosition.current.y - rowMagnetTarget.current.y);
      const proxX = 1 - Math.min(dx / rowMagnetTarget.current.maxDistX, 1);
      const proxY = 1 - Math.min(dy / rowMagnetTarget.current.maxDistY, 1);
      // Combine: Y has 3x weight, then average
      const proximity = Math.min((proxX + proxY * 3) / 4, 1);
      targetScale = 1 + proximity * (MAX_ROW_SCALE - 1);
    } else if (lastRowRect.current) {
      // Gradually scale down based on distance from last row
      const dy = Math.min(
        Math.abs(targetPosition.current.y - lastRowRect.current.top),
        Math.abs(targetPosition.current.y - lastRowRect.current.bottom)
      );
      const fadeDistance = 80; // pixels to fully scale down
      const proximity = 1 - Math.min(dy / fadeDistance, 1);
      if (proximity > 0) {
        targetScale = 1 + proximity * (MAX_ROW_SCALE * 0.5 - 1);
      } else {
        lastRowRect.current = null;
      }
    }

    // Smooth scale transition
    currentScale.current += (targetScale - currentScale.current) * SMOOTH_FACTOR;

    const size = DOT_SIZE * currentScale.current;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
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

      const el = e.target as Element;

      // Check if cursor is over a collapsed project row
      const collapsedRow = el?.closest?.('[data-magnetic-row]');
      if (collapsedRow) {
        const rect = collapsedRow.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        rowMagnetTarget.current = { x: centerX, y: centerY, maxDistX: rect.width / 2, maxDistY: rect.height / 2 };
        lastRowRect.current = { top: rect.top, bottom: rect.bottom, centerX, centerY, maxDistX: rect.width / 2, maxDistY: rect.height / 2 };
      } else {
        rowMagnetTarget.current = null;
      }

      // Check for nearby clickable elements for magnetic effect
      const clickable = el?.closest?.(CLICKABLE_SELECTOR);
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
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const clickable = (e.target as Element)?.closest?.(CLICKABLE_SELECTOR);
      if (clickable) {
        isHovering.current = false;
        magnetTarget.current = null;
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
      `}</style>
    </div>
  );
}
