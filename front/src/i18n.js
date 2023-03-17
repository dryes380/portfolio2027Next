import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      author: "Droits d'auteurs Vincent Kouoï 2023",
    },
  },
  fr: {
    translation: {
      author: "Copyrights Vincent Kouoï 2023",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
