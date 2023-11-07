// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import ruTranslations from './ru.json';
import uzTranslations from './uz.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
    uz: {
      translation: uzTranslations,
    },
  },
  lng: 'ru', // Set the default language
  fallbackLng: 'ru', // Fallback to English if the translation is missing
  interpolation: {
    escapeValue: false, // React already escapes everything, so no need to escape HTML entities
  },
});


export default i18n;
