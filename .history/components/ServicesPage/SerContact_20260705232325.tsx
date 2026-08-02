"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import IMAGE from "../../public/images/013.jpg";
import Button from "../ReUsables/Button";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/sercontact.module.scss";

const SerContact = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-150);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-75);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-100);
      } else {
        setTransform(-130);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.ser__section}>
      <div className={styles.ser__image}>
        <div className={styles.seri} ref={container}>
          <motion.div className={styles.ser__inner} style={{ y }}>
            <Image
              fill
              quality={100}
              src={IMAGE}
              alt="CaBric Engineering"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className={styles.ser__blur}></div>
      </div>
      <div className={`container ${styles.ser__container}`}>
        <p className={styles.ser__p}>{t("home:unique")}</p>
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
  );
};

export default SerContact;
