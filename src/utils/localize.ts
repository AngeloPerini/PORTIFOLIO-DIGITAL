import type { LocalizedText, SupportedLocale } from '../types/portfolio';

export const normalizeLocale = (language: string): SupportedLocale => {
  const locale = language.toLowerCase();

  if (locale.startsWith('pt')) {
    return 'pt';
  }

  if (locale.startsWith('es')) {
    return 'es';
  }

  if (locale.startsWith('it')) {
    return 'it';
  }

  return 'en';
};

export const getLocalizedText = (value: LocalizedText, language: string): string => {
  const locale = normalizeLocale(language);
  return value[locale] ?? value.en;
};
