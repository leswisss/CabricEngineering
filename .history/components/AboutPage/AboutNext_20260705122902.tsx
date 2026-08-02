import React from "react";
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/aboutnext.module.scss";

const AboutNext = () => {
  const { t } = useT();

  const misvisContent = [
    {
      name: t("about:mission"),
      text: t("about:miss"),
    },
    {
      name: t("about:vision"),
      text: t("about:vis"),
    },
    {
      name: t("about:problem"),
      text: t("about:prob"),
    },
  ];


  return (
    <div className={styles.an__section}>
      <div className={`container ${styles.an__container}`}>
        <div className={styles.an__left}>
          <RoundText text={t("about:we")} color="var(--gold)" />
        </div>
        <div className={styles.an__right}>
          <p className={styles.an__p}>{t("about:cabric")}</p>
          <p className={styles.an__p2}>{t("about:cab2")}</p>
          <p className={styles.an__p3}>{t("about:cab3")}</p>
          <h4 className={styles.an__p4}>{t("about:tag")}</h4>
        </div>
      </div>
      <div className={styles.vismiss}>
        
      </div>
    </div>
  );
};

export default AboutNext;
