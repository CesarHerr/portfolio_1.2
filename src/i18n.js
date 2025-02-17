import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // ✅ Si el navegador usa en-GB, usará en
    supportedLngs: ["en", "es"], // ✅ Idiomas disponibles
    debug: true, // Para ver logs en consola
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/portfolio/locales/{{lng}}.json",
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;

