"use client";

import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/013.jpg";
import Button from "../ReUsables/Button";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/sercontact.module.scss";

const SerContact = () => {
  const { t, i18n } = useT();
  const currentLng = 

  return (
    <div className={styles.ser__section}>
      <div className={styles.ser__image}>
        <div className={styles.seri}>
          <Image
            fill
            quality={100}
            src={IMAGE}
            alt="CaBric Engineering"
            placeholder="blur"
          />
        </div>
        <div className={styles.ser__blur}></div>
      </div>
      <div className={`container ${styles.ser__container}`}>
        <p>{}</p>
      </div>
    </div>
  );
};

export default SerContact;
