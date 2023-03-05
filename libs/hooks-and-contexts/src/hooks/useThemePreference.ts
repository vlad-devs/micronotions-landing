import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { types } from '@micro-notion/shared-data';

const { ThemePreference, ThemeSetting } = types;
type ThemePreference = types.ThemePreference;
type ThemeSetting = types.ThemeSetting;

const THEME_KEY = 'preferred-theme';

const mediaMatchPrefersDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)');

const themePreferenceToThemeSetting = (
  themePreference: ThemePreference,
  event?: MediaQueryListEvent
) => {
  const matchesDark = event ? event.matches : mediaMatchPrefersDark().matches;

  switch (themePreference) {
    case ThemePreference.LIGHT:
      return ThemeSetting.LIGHT;
    case ThemePreference.DARK:
      return ThemeSetting.DARK;
    case ThemePreference.SYSTEM:
      return matchesDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;
  }
};

export const updateHTMLThemeSetting = (themeSetting: ThemeSetting) => {
  if (themeSetting === ThemeSetting.DARK) {
    return document.documentElement.classList.add('dark');
  }

  document.documentElement.classList.remove('dark');
};

export const useThemePreference = () => {
  const [themePreference, setThemePreference] = useState<ThemePreference>(
    (localStorage.getItem(THEME_KEY) as ThemePreference) ||
      ThemePreference.SYSTEM
  );
  const [themeSetting, setThemeSetting] = useState(
    themePreferenceToThemeSetting(themePreference)
  );

  // Keep the html's class in sync with the theme setting (dark / no dark class)
  useLayoutEffect(() => {
    updateHTMLThemeSetting(themeSetting);
  }, [themeSetting]);

  useEffect(() => {
    // Keeps the theme setting in sync with the theme preference
    setThemeSetting(themePreferenceToThemeSetting(themePreference));

    // Watch for changes in the system's theme preference
    const mediaQuery = mediaMatchPrefersDark();

    const listener = (event: MediaQueryListEvent) => {
      if (themePreference !== ThemePreference.SYSTEM) {
        return;
      }

      setThemeSetting(themePreferenceToThemeSetting(themePreference, event));
    };

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [themePreference]);

  const changeThemePreference = useCallback((theme: ThemePreference) => {
    localStorage.setItem(THEME_KEY, theme);
    setThemePreference(theme);
  }, []);

  return {
    changeThemePreference,
    themePreference,
    themeSetting,
  };
};
