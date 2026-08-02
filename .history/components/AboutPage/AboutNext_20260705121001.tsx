import React from "react";
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/aboutnext.module.scss";

const AboutNext = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.an__section}>
      <div className={`container ${styles.an__container}`}>
        <div className={styles.an__left}>
          <RoundText text={t("about:we")} color="var(--gold)"/>
        </div>
        <div className={styles.an__right}>
          <p>{t("about:")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutNext;
