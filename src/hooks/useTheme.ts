import { useEffect, useMemo, useState } from 'react';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => getPreferredTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useMemo(
    () => () => {
      setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    },
    [],
  );

  return { theme, toggleTheme };
};
