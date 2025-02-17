import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend"; // Para cargar archivos JSON

i18n
  .use(HttpApi) // Carga archivos JSON desde locales/
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Idioma por defecto
    debug: true, // Activa logs en consola (útil para desarrollo)
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Ruta de los archivos JSON
    },
  });

export default i18n;
