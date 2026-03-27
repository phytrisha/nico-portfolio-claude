'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { DM_Serif_Text } from 'next/font/google';

const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
});

const MAGNIFIER_RATIO = 98 / 86; // radius relative to font size at max (86px)
const CURSOR_RADIUS = 8;
const SMOOTH_FACTOR = 0.12;
const RADIUS_SMOOTH = 0.08;
const TEXT = 'projects & writings';
const LINE_COLOR = 'rgba(255, 255, 255, 0.3125)';
const LINE_WIDTH = 0.5;
const FONT_STYLE = 'italic';

interface TypoMetrics {
  baseline: number;
  xHeight: number;
  capHeight: number;
  descender: number;
  charBoundaries: number[];
}

export default function MagnifierRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const svgTextRef = useRef<SVGTextElement>(null);
  const clipCircleRef = useRef<SVGCircleElement>(null);
  const maskCircleRef = useRef<SVGCircleElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });
  const currentRadius = useRef(0);
  const isHovering = useRef(false);
  const frameId = useRef<number>(0);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const magnifierRadius = useRef(98);
  const [svgBaseline, setSvgBaseline] = useState(0);
  const [typoMetrics, setTypoMetrics] = useState<TypoMetrics | null>(null);

  // Callback ref for SVG text — computes typographic metrics
  const svgTextCallbackRef = useCallback((node: SVGTextElement | null) => {
    svgTextRef.current = node;
    if (!node || !containerRef.current) return;

    const fontSize = parseFloat(window.getComputedStyle(containerRef.current).fontSize);
    const fontStr = `${FONT_STYLE} 400 ${fontSize}px ${dmSerif.style.fontFamily}`;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    ctx.font = fontStr;

    const xMetrics = ctx.measureText('x');
    const xHeight = svgBaseline - xMetrics.actualBoundingBoxAscent;

    const capMetrics = ctx.measureText('H');
    const capHeight = svgBaseline - capMetrics.actualBoundingBoxAscent;

    const pMetrics = ctx.measureText('p');
    const descender = svgBaseline + pMetrics.actualBoundingBoxDescent;

    const charBoundaries: number[] = [];
    for (let i = 0; i < TEXT.length; i++) {
      try {
        const extent = node.getExtentOfChar(i);
        if (i === 0) charBoundaries.push(extent.x);
        charBoundaries.push(extent.x + extent.width);
      } catch {
        continue;
      }
    }

    setTypoMetrics({ baseline: svgBaseline, xHeight, capHeight, descender, charBoundaries });
  }, [dimensions, svgBaseline]);

  // Measure text dimensions
  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;

      const fontSize = parseFloat(window.getComputedStyle(container).fontSize);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.font = `${FONT_STYLE} 400 ${fontSize}px ${dmSerif.style.fontFamily}`;
      const metrics = ctx.measureText(TEXT);
      const width = metrics.width;
      const ascent = metrics.fontBoundingBoxAscent || metrics.actualBoundingBoxAscent || fontSize * 0.78;
      const descent = metrics.fontBoundingBoxDescent || metrics.actualBoundingBoxDescent || fontSize * 0.22;
      const height = ascent + descent;

      setDimensions({ width, height });
      magnifierRadius.current = fontSize * MAGNIFIER_RATIO;
      setSvgBaseline(ascent);
    };

    document.fonts.ready.then(measure);
    const handleResize = () => measure();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation loop for magnifier with kinetic easing
  const animate = useCallback(() => {
    const clipCircle = clipCircleRef.current;
    const maskCircle = maskCircleRef.current;
    const ring = ringRef.current;

    if (clipCircle && ring && maskCircle) {
      smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * SMOOTH_FACTOR;
      smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * SMOOTH_FACTOR;

      const x = smoothPos.current.x;
      const y = smoothPos.current.y;

      const targetRadius = isHovering.current ? magnifierRadius.current : 0;
      const radiusSpeed = isHovering.current ? RADIUS_SMOOTH : 0.25;
      currentRadius.current += (targetRadius - currentRadius.current) * radiusSpeed;

      const r = currentRadius.current < 0.5 ? 0 : currentRadius.current;

      clipCircle.setAttribute('cx', String(x));
      clipCircle.setAttribute('cy', String(y));
      clipCircle.setAttribute('r', String(r));
      maskCircle.setAttribute('cx', String(x));
      maskCircle.setAttribute('cy', String(y));
      maskCircle.setAttribute('r', String(r));
      ring.setAttribute('cx', String(x));
      ring.setAttribute('cy', String(y));
      ring.setAttribute('r', String(r));
      ring.style.opacity = r > 0 ? '1' : '0';
    }

    frameId.current = requestAnimationFrame(animate);
  }, []);

  // Mouse event handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container || dimensions.width === 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
      smoothPos.current = { ...mousePos.current };
    };
    const handleMouseLeave = () => { isHovering.current = false; };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    frameId.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameId.current);
    };
  }, [dimensions, animate]);

  const textProps = {
    x: 0,
    y: svgBaseline,
    style: {
      fontSize: 'inherit' as const,
      fontFamily: dmSerif.style.fontFamily,
      fontStyle: FONT_STYLE,
      fontWeight: 400,
    },
  };

  const overshoot = 15;
  const padX = dimensions.width * 0.2;
  const padY = dimensions.height * 0.2;

  return (
    <span
      ref={containerRef}
      data-clickable
      data-hide-cursor
      style={{
        position: 'relative',
        cursor: 'none',
        fontFamily: dmSerif.style.fontFamily,
        fontStyle: FONT_STYLE,
        fontWeight: 400,
      }}
    >
      {/* Invisible extended hit area */}
      <span
        style={{
          position: 'absolute',
          top: -padY,
          left: -padX,
          right: -padX,
          bottom: -padY,
          pointerEvents: 'auto',
        }}
      />
      {dimensions.width > 0 && (
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <defs>
            <clipPath id="magnifier-clip">
              <circle ref={clipCircleRef} cx="0" cy="0" r="0" />
            </clipPath>
            {/* Mask to hide filled text inside magnifier */}
            <mask id="fill-mask">
              <rect x="-50" y="-50" width={dimensions.width + 100} height={dimensions.height + 100} fill="white" />
              <circle ref={maskCircleRef} cx="0" cy="0" r="0" fill="black" />
            </mask>
            <filter id="outline-filter" x="-5%" y="-5%" width="110%" height="110%">
              <feMorphology in="SourceGraphic" operator="erode" radius="0.6" result="eroded" />
              <feComposite in="SourceGraphic" in2="eroded" operator="out" />
            </filter>
          </defs>

          {/* Layer 1: Filled text (masked out where magnifier is) */}
          <text
            ref={svgTextCallbackRef}
            {...textProps}
            fill="var(--text-hero)"
            stroke="none"
            mask="url(#fill-mask)"
          >
            {TEXT}
          </text>

          {/* Layer 2: Magnifier reveal — outline + guide lines */}
          <g clipPath="url(#magnifier-clip)">
            {/* Guide lines */}
            {typoMetrics && (
              <g>
                {[typoMetrics.capHeight, typoMetrics.xHeight, typoMetrics.baseline, typoMetrics.descender].map((y, i) => (
                  <line
                    key={`h-${i}`}
                    x1={-overshoot}
                    y1={y}
                    x2={dimensions.width + overshoot}
                    y2={y}
                    stroke={LINE_COLOR}
                    strokeWidth={LINE_WIDTH}
                  />
                ))}
                {typoMetrics.charBoundaries.map((x, i) => {
                  // Tilt vertical lines to match italic slant (~12°)
                  const italicAngle = 12 * (Math.PI / 180);
                  const topY = typoMetrics.capHeight - overshoot;
                  const bottomY = typoMetrics.descender + overshoot;
                  const midY = (topY + bottomY) / 2;
                  const shiftTop = Math.tan(italicAngle) * (midY - topY);
                  const shiftBottom = Math.tan(italicAngle) * (midY - bottomY);
                  return (
                    <line
                      key={`v-${i}`}
                      x1={x + shiftTop}
                      y1={topY}
                      x2={x + shiftBottom}
                      y2={bottomY}
                      stroke={LINE_COLOR}
                      strokeWidth={LINE_WIDTH}
                    />
                  );
                })}
              </g>
            )}

            {/* Outline text */}
            <text
              {...textProps}
              fill="white"
              stroke="none"
              filter="url(#outline-filter)"
            >
              {TEXT}
            </text>
          </g>

          {/* Layer 3: Magnifier ring */}
          <circle
            ref={ringRef}
            cx="0"
            cy="0"
            r={magnifierRadius.current}
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth={2}
            style={{ opacity: 0 }}
          />
        </svg>
      )}

      <span style={{ visibility: 'hidden', whiteSpace: 'nowrap' }}>{TEXT}</span>
    </span>
  );
}
