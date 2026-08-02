import React from "react";
import Background from "@/utils/Icons/Background";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import Link from "next/link";
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
          target: "_self",
        },
        {
          name: "Services",
          link: currentLng === "en" ? "/services" : "/fr/services",
          target: "_self",
        },
        {
          name: "Portfolio",
          link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
          target: "_self",
        },
        {
          name: t("about"),
          link: currentLng === "en" ? "/about" : "/fr/a-propos",
          target: "_self",
        },
        {
          name: t("gallery"),
          link: currentLng === "en" ? "/gallery" : "/fr/galerie",
          target: "_self",
        },
      ],
    },
    {
      name: t("socials"),
      links: [
        {
          name: "Facebook",
          link: "https://www.facebook.com",
          target: "_blank",
        },
        {
          name: "Instagram",
          link: "https://www.facebook.com",
          target: "_blank",
        },
      ],
    },
    {
      name: "Contacts",
      links: [
        {
          name: "+237 690000000",
          link: "tel:+237690000000",
          target: "_blank",
        },
        {
          name: "+33 690000000",
          link: "tel:+33690000000",
          target: "_blank",
        },
        {
          name: "cabriceng@gmail.com",
          link: "mailto:cabriceng@gmail.com",
          target: "_blank",
        },
      ],
    },
    {
      name: t("locations"),
      links: [
        {
          name: "Yaounde, Cameroon",
          link: "https://maps.google.com",
          target: "_blank",
        },
        {
          name: "Paris, France",
          link: "https://maps.google.com",
          target: "_blank",
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
        <div className={styles.footer__mid}>
          <div className={styles.fm__left}>
            {navigationData.slice(0, 3).map((data, i) => (
              <div className={styles.fm__wrap} key={i}>
                <span className={styles.fm__span}>{data.name}</span>
                <div className={styles.fm__links}>
                  {data.links.map((linker, i) => (
                    <Link
                      key={i}
                      className={styles.fm__link}
                      href={linker.link}
                      target={linker.target}
                    >
                      {linker.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.fm__right}>
            <div className={styles.fm__wrap}>
              <span className={styles.fm__span}>{navigationData[navigationData.length - 1].}</span>
              <div className={styles.fm__links}>
                {data.links.map((linker, i) => (
                  <Link
                    key={i}
                    className={styles.fm__link}
                    href={linker.link}
                    target={linker.target}
                  >
                    {linker.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
