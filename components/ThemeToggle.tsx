'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
