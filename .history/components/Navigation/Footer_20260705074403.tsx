import React from "react";
import Background from "@/utils/Icons/Background";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const navigationData = [
    {
      name: "Navigation",
      links: [
        {
          name: t("home"),
          link: "/",
        },
        {
          name: "Services",
          link: currentLng === "en" ? "/services" : "/fr/services",
        },
        {
          name: "Portfolio",
          link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
        },
        {
          name: t("about"),
          link: currentLng === "en" ? "/about" : "/fr/a-propos",
        },
        {
          name: t("gallery"),
          link: currentLng === "en" ? "/gallery" : "/fr/galerie",
        },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={`container ${styles.foot__container}`}>
        <div className={styles.footer__top}>
          <p className={styles.ft__h3}>{t("home:unique")}</p>
          <p className={styles.ft__p}>{t("home:spaces")}</p>
          <Button
            text={t("home:tellmore")}
            backColor="white"
            hbackColor="black"
            textColor="black"
            thColor="white"
            link={currentLng === "en" ? "/contact" : "/fr/contact"}
          />
        </div>
        <div className={styles.footer__mid}></div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
