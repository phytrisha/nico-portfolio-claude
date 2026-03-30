'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef, useCallback } from 'react';

export default function FloatingPill() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [projectExpanded, setProjectExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [overDarkBg, setOverDarkBg] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect if pill overlaps the dark hero section (only matters in light mode)
  useEffect(() => {
    if (theme === 'dark') { setOverDarkBg(false); return; }

    const checkOverlap = () => {
      const hero = document.querySelector('section');
      if (!hero || !pillRef.current) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const pillTop = pillRef.current.getBoundingClientRect().top;
      setOverDarkBg(pillTop < heroBottom);
    };

    checkOverlap();
    window.addEventListener('scroll', checkOverlap, { passive: true });
    window.addEventListener('resize', checkOverlap, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, [theme]);

  // On mobile, hide pill when a project is expanded
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setProjectExpanded(document.body.hasAttribute('data-project-expanded'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-project-expanded'] });
    return () => observer.disconnect();
  }, []);

  // Hide on scroll down, show on scroll up — only for user-initiated scrolls
  useEffect(() => {
    let userScrolling = false;

    const markUserScroll = () => { userScrolling = true; };
    const clearUserScroll = () => {
      // Reset after a short delay so the scroll handler can pick it up
      setTimeout(() => { userScrolling = false; }, 100);
    };

    const handleScroll = () => {
      if (!userScrolling) {
        lastScrollY.current = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (delta > 8) {
        setVisible(false);
      } else if (delta < -8) {
        setVisible(true);
      }

      lastScrollY.current = currentY;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 1500);
    };

    window.addEventListener('wheel', markUserScroll, { passive: true });
    window.addEventListener('touchstart', markUserScroll, { passive: true });
    window.addEventListener('touchmove', markUserScroll, { passive: true });
    window.addEventListener('wheel', clearUserScroll, { passive: true });
    window.addEventListener('touchend', clearUserScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', markUserScroll);
      window.removeEventListener('touchstart', markUserScroll);
      window.removeEventListener('touchmove', markUserScroll);
      window.removeEventListener('wheel', clearUserScroll);
      window.removeEventListener('touchend', clearUserScroll);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleThemeToggle = useCallback(async () => {
    const button = themeButtonRef.current;
    if (!button) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxDist = Math.max(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    if (!document.startViewTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `inset(${y}px ${window.innerWidth - x}px ${window.innerHeight - y}px ${x}px)`,
          `inset(${y - maxDist}px ${window.innerWidth - x - maxDist}px ${window.innerHeight - y - maxDist}px ${x - maxDist}px)`,
        ],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }, [theme, setTheme]);

  if (!mounted) return null;

  // Use dark styling when in dark mode OR when light mode pill is over the dark hero
  const useDarkStyle = theme === 'dark' || overDarkBg;
  const iconFilter = useDarkStyle ? 'none' : 'invert(1)';

  return (
    <div
      ref={pillRef}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-0 overflow-hidden"
      style={{
        backgroundColor: useDarkStyle ? '#000000' : 'var(--bg-primary)',
        border: `1px solid ${useDarkStyle ? '#EDEBE3' : 'var(--text-primary)'}`,
        transform: visible && !(projectExpanded && isMobile) ? 'translateY(0)' : 'translateY(calc(100% + 2rem))',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s, border-color 0.3s',
      }}
    >
      <a
        href="mailto:helloiamnico@icloud.com"
        data-press
        className="pl-4 py-4 pr-[14px]"
        aria-label="Send email"
      >
        <img src="/mail.png" alt="Email" className="w-6 h-6" style={{ filter: iconFilter, transition: 'filter 0.3s' }} />
      </a>
      <button
        ref={themeButtonRef}
        data-press-light={theme === 'dark' ? '' : undefined}
        onClick={handleThemeToggle}
        className="pr-4 py-4 pl-[14px]"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <img src="/lightmode.png" alt="Light mode" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
        ) : (
          <img src="/darkmode.png" alt="Dark mode" className="w-6 h-6" style={{ filter: iconFilter, transition: 'filter 0.3s' }} />
        )}
      </button>
    </div>
  );
}
