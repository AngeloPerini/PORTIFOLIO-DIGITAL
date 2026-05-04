import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { normalizeLocale } from '../utils/localize';
import { resources } from './resources';

const syncDocumentLanguage = (language: string): void => {
  if (typeof document === 'undefined') {
    return;
  }

  const locale = normalizeLocale(language);
  document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['pt', 'en', 'es', 'it'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'portfolio-locale',
      caches: ['localStorage']
    },
    returnObjects: true,
  });

syncDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);
i18n.on('languageChanged', syncDocumentLanguage);

export default i18n;
