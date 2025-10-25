'use client';

import { Moon, Sun } from 'lucide-react';
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
      <div className="fixed top-6 right-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-lg">
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-6 right-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-lg transition-all hover:scale-110 dark:border-neutral-700 dark:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      )}
    </button>
  );
}
