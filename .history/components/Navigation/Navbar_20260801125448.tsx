"use client";

import React from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import WhiteLogo from "@/utils/Icons/WhiteLogo";
import Button from "../ReUsables/Button";
import Chevron from "@/utils/Icons/Chevron";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import styles from "../../styles/Navigation/navbar.module.scss";

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
          <Button
            text={t("getin")}
            backColor="black"
            hbackColor="white"
            textColor="white"
            thColor="black"
            link={currentLng === "en" ? "/contact" : "/fr/contact"}
          />
          <div className={styles.menu}>
            <div className={styles.chev__wrap}>
              <span className={styles.chev}>
                <Chevron />
              </span>
            </div>
            <span>Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
