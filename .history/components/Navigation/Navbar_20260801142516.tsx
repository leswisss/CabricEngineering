"use client";

import React from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import WhiteLogo from "@/utils/Icons/WhiteLogo";
import Button from "../ReUsables/Button";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import styles from "../../styles/Navigation/navbar.module.scss";
import Chevron2 from "@/utils/Icons/Chevron2";
import Menu from "@/utils/Icons/Menu";
import Menu2 from "@/utils/Icons/Menu2";

const Navbar = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const navLinks = [
    {
      name: t("home"),
      link: "/",
    },
    {
      name: "Portfolio",
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      name: "Services",
      link: currentLng === "en" ? "/services" : "/fr/services",
    },
    {
      name: t("about"),
      link: currentLng === "en" ? "/about" : "/fr/a-propos",
    },
    {
      name: t("gallery"),
      link: currentLng === "en" ? "/gallery" : "/fr/galerie",
    },
  ];
  return (
    <div className={styles.navigation}>
      <div className={`container ${styles.nav__in}`}>
        <Link href="/" className={styles.nav__logo}>
          <WhiteLogo />
        </Link>
        <nav className={styles.navbar}>
          {navLinks.map((data, i) => (
            <Link key={i} href={data.link} className={styles.n__link}>
              {data.name}
            </Link>
          ))}
        </nav>
        <div className={styles.nav__right}>
          <LanguageSwitcher />
          <div className={styles.buttoner}>
            <Button
              text={t("getin")}
              backColor="black"
              hbackColor="white"
              textColor="white"
              thColor="black"
              link={currentLng === "en" ? "/contact" : "/fr/contact"}
            />
          </div>
          <div className={styles.menu__wrapper}>
            <div className={styles.menu}>
              <span className={styles.men}>Menu</span>
              <span className={styles.menuu}>
                <Menu2 />
              </span>
            </div>
            <div className={styles.sidebar}>
              {navLinks.map((link, i) => (
                <Link href={link.link} className={styles.side__link} key={i}>
                  <div className={styles.rounder}></div>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
