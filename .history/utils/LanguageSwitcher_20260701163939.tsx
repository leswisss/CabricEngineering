"use client";

import { usePathname, useRouter } from "next/navigation";
import { useT } from "next-i18next/client";
import i18nConfig from "../i18n.config";
import styles from "../styles/Navigation/languageswitcher.module.scss";

export default function LanguageSwitcher() {
  const { i18n } = useT();
  const pathname = usePathname();
  const router = useRouter();
  const { fallbackLng } = i18nConfig;

  // Current locale (English is now the default)
  const currentLng = i18n.language;

  // Language to switch to
  const nextLocale = currentLng === "en" ? "fr" : "en";

  const setLocaleCookie = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `NEXT_LOCALE=${newLocale}; expires=${date.toUTCString()}; path=/`;
  };

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    // Remove current locale prefix (only "fr" since "en" is default)
    const pathWithoutLocale =
      segments[0] === "fr" ? segments.slice(1) : segments;

    // Translate route segments
    const translatedSegments = pathWithoutLocale.map((segment) => {
      if (locale === "fr") {
        if (segment === "about") return "a-propos";
        if (segment === "about") return "a-propos";
        if (segment === "privacy") return "confidentialite";
      } else {
        if (segment === "a-propos") return "about";
        if (segment === "confidentialite") return "privacy";
      }

      return segment;
    });

    // Add /fr only when switching to French
    const nextPath =
      locale === fallbackLng
        ? `/${translatedSegments.join("/")}`
        : `/fr/${translatedSegments.join("/")}`;

    const cleanPath = nextPath === "/" ? "/" : nextPath.replace(/\/$/, "");

    setLocaleCookie(locale);
    i18n.changeLanguage(locale);

    router.push(cleanPath);
    router.refresh();
  };

  return (
    <button
      className={styles.languageselector}
      onClick={() => switchLocale(nextLocale)}
    >
      <span className={styles.language}>{nextLocale.toUpperCase()}</span>
    </button>
  );
}
