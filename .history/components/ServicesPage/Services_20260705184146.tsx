import React from "react";
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/services.module.scss";

const Services = () => {
  const { t } = useT();

  return (
    <div className={styles.ser__section}>
      <div className={`container ${styles.ser__container}`}>
        <div className={styles.ser__left}>
          <RoundText text={t("services:ser")} color="var()"/>
        </div>
        <div className={styles.ser__right}></div>
      </div>
    </div>
  );
};

export default Services;
