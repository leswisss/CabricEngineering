import React from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/aboutvalues.module.scss";

const AboutValues = () => {
  const { t } = useT();

  const aboutValues = [
    {
      name: t("about:trans"),
      text: t("about:transtext"),
    },
    {
      name: "Innovation",
      text: t("about:innovtext"),
    },
    {
      name: t("about:acc"),
      text: t("about:acctext"),
    },
    {
      name: t("about:sus"),
      text: t("about:sustext"),
    },
    {
      name: t("about:collab"),
      text: t("about:collabtext"),
    },
    {
      name: t("about:safe"),
      text: t("about:safetext"),
    },
  ];

  return (
    <div className={styles.av__section}>
      <div className={`container ${styles.av__container}`}>
        <p c>{t("about:cab4")}</p>
        <div className={styles.values}>
          {
            aboutValues.map((data, i) => (
              <div className={styles.av__wrap} key={i}>
                <div className={styles.avw__top}>
                  <span className={styles.avi}>0{i+1}</span>
                </div>
                <div className={styles.avw__bottom}>
                  <span className={styles.aw__span}>{data.name}</span>
                  <p className={styles.aw__p}>{data.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
