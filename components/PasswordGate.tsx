'use client';

import { useState, useEffect, useRef } from 'react';

const PASSWORD = 'oh-hi_there';
const STORAGE_KEY = 'portfolio-unlocked';

interface PasswordGateProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function PasswordGate({ children, onClose }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setError(false);
      setUnlocking(true);
      setTimeout(() => {
        setIsUnlocked(true);
      }, 800);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (isUnlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-0 right-0 z-50 w-20 h-20 flex items-center justify-center transition-transform"
        style={{ backgroundColor: 'var(--externallink-bg)', color: 'var(--close-btn-icon)' }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="flex flex-col items-center gap-6 px-8 max-w-md w-full"
        style={{
          opacity: unlocking ? 0 : 1,
          transform: unlocking ? 'scale(0.95)' : 'scale(1)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          transitionDelay: '0.35s',
        }}
      >
        <p className="text-sm font-mono" style={{ color: 'var(--text-primary)' }}>
          This project contains confidential information. All data has been anonymized.
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            className="w-full px-4 py-3 text-sm font-mono bg-transparent outline-none"
            style={{
              border: `1px solid ${error ? '#EB5600' : 'var(--border-color)'}`,
              color: 'var(--text-primary)',
            }}
          />
          <button
            ref={buttonRef}
            type="submit"
            className="relative w-full px-4 py-3 text-sm font-mono overflow-hidden"
            style={{
              backgroundColor: unlocking ? '#259918' : 'var(--text-primary)',
              color: 'var(--bg-primary)',
              transition: 'background-color 0.3s ease',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: unlocking ? 'translateY(-30px)' : 'translateY(0)',
                opacity: unlocking ? 0 : 1,
              }}
            >
              View project
            </span>
            <span
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: unlocking ? 'translateY(0)' : 'translateY(30px)',
                opacity: unlocking ? 1 : 0,
              }}
            >
              Unlocked
            </span>
          </button>
        </form>
        {error && (
          <p className="text-sm font-mono" style={{ color: '#EB5600' }}>
            Incorrect password
          </p>
        )}
      </div>
    </div>
  );
}
