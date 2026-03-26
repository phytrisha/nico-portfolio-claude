'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const MAGNIFIER_RADIUS = 98; // 140 * 0.7
const CURSOR_RADIUS = 8; // matches CustomCursor DOT_SIZE / 2
const SMOOTH_FACTOR = 0.12; // kinetic easing
const RADIUS_SMOOTH = 0.08; // slower radius transition for fluid scaling
const TEXT = 'projects & writings';
const LINE_COLOR = 'rgba(255, 255, 255, 0.3125)';
const LINE_WIDTH = 0.5;


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
  const [svgBaseline, setSvgBaseline] = useState(0);
  const [typoMetrics, setTypoMetrics] = useState<TypoMetrics | null>(null);

  // Callback ref for SVG text — computes typographic metrics
  const svgTextCallbackRef = useCallback((node: SVGTextElement | null) => {
    svgTextRef.current = node;
    if (!node || !containerRef.current) return;

    const computedStyle = window.getComputedStyle(containerRef.current!);
    const fontSize = parseFloat(computedStyle.fontSize);
    const fontStr = `${computedStyle.fontWeight} ${fontSize}px ${computedStyle.fontFamily}`;

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

      const computedStyle = window.getComputedStyle(container);
      const fontSize = parseFloat(computedStyle.fontSize);
      const fontWeight = computedStyle.fontWeight;
      const fontFamily = computedStyle.fontFamily;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      const metrics = ctx.measureText(TEXT);
      const width = metrics.width;
      const ascent = metrics.fontBoundingBoxAscent || metrics.actualBoundingBoxAscent || fontSize * 0.78;
      const descent = metrics.fontBoundingBoxDescent || metrics.actualBoundingBoxDescent || fontSize * 0.22;
      const height = ascent + descent;

      setDimensions({ width, height });
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
      // Lerp position for kinetic feel
      smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * SMOOTH_FACTOR;
      smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * SMOOTH_FACTOR;

      const x = smoothPos.current.x;
      const y = smoothPos.current.y;

      // Animate radius: cursor dot → magnifier circle (or back, faster)
      const targetRadius = isHovering.current ? MAGNIFIER_RADIUS : 0;
      const radiusSpeed = isHovering.current ? RADIUS_SMOOTH : 0.25;
      currentRadius.current += (targetRadius - currentRadius.current) * radiusSpeed;

      // Snap to 0 when very small to fully hide
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
      // Initialize smooth position to current mouse to avoid lerp from origin
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
      fontWeight: 'inherit' as const,
      fontFamily: 'inherit' as const,
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
            <clipPath id="text-clip">
              <text {...textProps}>{TEXT}</text>
            </clipPath>
            <pattern id="gradient-pattern" patternUnits="objectBoundingBox" width="1" height="1">
              <image href="/gradient-texture.png" width={dimensions.width} height={dimensions.height} preserveAspectRatio="xMidYMid slice" />
            </pattern>
            <mask id="lines-mask">
              <rect x="-50" y="-50" width={dimensions.width + 100} height={dimensions.height + 100} fill="white" />
              <circle ref={maskCircleRef} cx="0" cy="0" r="0" fill="black" />
            </mask>
            <filter id="outline-filter" x="-5%" y="-5%" width="110%" height="110%">
              <feMorphology in="SourceGraphic" operator="erode" radius="0.6" result="eroded" />
              <feComposite in="SourceGraphic" in2="eroded" operator="out" />
            </filter>
          </defs>

          {/* Layer 1: Typographic guide lines */}
          {typoMetrics && (
            <g mask="url(#lines-mask)">
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
              {typoMetrics.charBoundaries.map((x, i) => (
                <line
                  key={`v-${i}`}
                  x1={x}
                  y1={typoMetrics.capHeight - overshoot}
                  x2={x}
                  y2={typoMetrics.descender + overshoot}
                  stroke={LINE_COLOR}
                  strokeWidth={LINE_WIDTH}
                />
              ))}
            </g>
          )}

          {/* Layer 2: Outer outline via morphology filter */}
          <text
            ref={svgTextCallbackRef}
            {...textProps}
            fill="white"
            stroke="none"
            filter="url(#outline-filter)"
          >
            {TEXT}
          </text>

          {/* Layer 3: Gradient image fill (clipped by magnifier + text shape) */}
          <g clipPath="url(#magnifier-clip)">
            <g clipPath="url(#text-clip)">
              <g className="gradient-drift">
                <image
                  href="/gradient-texture.png"
                  x={-dimensions.width * 0.1}
                  y={-dimensions.height * 0.1}
                  width={dimensions.width * 1.2}
                  height={dimensions.height * 1.2}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </g>
          </g>

          {/* Layer 4: Magnifier ring */}
          <circle
            ref={ringRef}
            cx="0"
            cy="0"
            r={MAGNIFIER_RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth={2}
            style={{ opacity: 0 }}
          />
        </svg>
      )}

      <span style={{ visibility: 'hidden', whiteSpace: 'nowrap' }}>{TEXT}</span>
      <style>{`
        @keyframes gradient-drift {
          0% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
          25% { transform: translate(3%, -2%) scale(1.03) rotate(0.5deg); }
          50% { transform: translate(-2%, 3%) scale(1.01) rotate(-0.3deg); }
          75% { transform: translate(-3%, -1%) scale(1.04) rotate(0.2deg); }
          100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
        }
        .gradient-drift {
          animation: gradient-drift 8s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>
    </span>
  );
}
