"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { useT } from "next-i18next/client";
import RoundText from "../ReUsables/RoundText";
import Image from "next/image";
import HEROIMAGE from "../../public/images/0"
import Button from "../ReUsables/Button";

import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = (
  // { blur }: { blur: string }
) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.hh__wrapper}>
      <div className={styles.home__image}>
        <div className={styles.background__image}>
          {/* <CldImage
            fill
            placeholder="blur"
            blurDataURL={blur}
            src="03_q2fklh.jpg"
            alt="CaBric Engineering"
          /> */}
        </div>
        <div className={styles.background}></div>
      </div>
      <div className={styles.home__text}>
        <div className={styles.main__text}>
          <div className={`container`}>
            <h1 className={styles.h__h1}>{t("home:maintext")}</h1>
          </div>
        </div>
        <div className={styles.hero__bottom}>
          <div className={`container ${styles.hb__wrap}`}>
            <div className={styles.ptop}>
              <RoundText color="white" text={t("home:people")} />
              <div className={styles.hb__left}>
                <p className={styles.hh__p}>{t("home:htext")}</p>
                <Button
                  text={t("home:tellmore")}
                  backColor="white"
                  hbackColor="black"
                  textColor="black"
                  thColor="white"
                  link={currentLng === "en" ? "/contact" : "/fr/contact"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
