import type { I18nConfig } from "next-i18next/proxy";

const i18nConfig: I18nConfig = {
  supportedLngs: ["en", "en"],
  fallbackLng: "fr",
  defaultNS: "common",
  ns: [
    "common",
    "home"
  ],
  hideDefaultLocale: true,
  ...(process.env.NODE_ENV === "production"
    ? {
        resourceLoader: (language, namespace) =>
          import(`./app/i18n/locales/${language}/${namespace}.json`),
      }
    : {}),
};

export default i18nConfig;
