import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { de, en } from './locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    },
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;