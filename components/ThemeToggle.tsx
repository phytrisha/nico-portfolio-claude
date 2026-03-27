'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = async () => {
    const button = buttonRef.current;
    if (!button) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    // Get the button center for the circle origin
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the max radius needed to cover the entire viewport
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Check if View Transitions API is available
    if (!document.startViewTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });

    await transition.ready;

    // Animate the new view expanding from the button
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  if (!mounted) {
    return (
      <button
        className="fixed top-4 left-4 z-50 p-3 rounded-full transition-colors"
        style={{
          backgroundColor: 'var(--email-btn-bg)',
        }}
        aria-label="Toggle theme"
      >
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      data-press-light={theme === 'dark' ? '' : undefined}
      onClick={handleToggle}
      className="fixed bottom-0 right-0 z-50 p-5 rounded-none"
      style={{
        backgroundColor: 'var(--email-btn-bg)',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <img src="/lightmode.png" alt="Wave" className="w-8 h-8" />
      ) : (
        <img src="/darkmode.png" alt="Wave" className="w-8 h-8" />
      )}
    </button>
  );
}
