"use client";

import React from "react";
import RoundText from "../ReUsables/RoundText";
import Cameroon from "@/utils/Icons/Cameroon";
import France from "@/utils/Icons/France";
import { useT } from "next-i18next/client";
import styles from "../../styles/ContactPage/contactcountries.module.scss";

const ContactCountries = () => {
  const { t } = useT();

  const contactDetails = [
    {
      country: t("about:cameroon"),
      svg: Cameroon,
      name: "Guiko Hotel, Montée Chapelle Obili"
    }
  ]

  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__top}>
          <div className={styles.cc__left}>
            <RoundText text={t("about:contact")} color="var(--gold)" />
          </div>
          <div className={styles.cc__right}>
            <p>{t("about:contacter")}</p>
          </div>
        </div>
        <div className={styles.cc__bottom}>

        </div>
      </div>
    </div>
  );
};

export default ContactCountries;
