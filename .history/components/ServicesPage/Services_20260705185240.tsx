import React from "react";
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import IMAGE from "../../public/images/BON_13 - Photo.jpg";
import IMAGE2 from "../../public/images/033.jpg";
import IMAGE3 from "../../public/images/013.jpg";
import IMAGE4 from "../../public/images/05.jpg";
import IMAGE5 from "../../public/images/02.jpg";
import styles from "../../styles/AboutPage/services.module.scss";

const Services = () => {
  const { t } = useT();

  return (
    <div className={styles.ser__section}>
      <div className={`container ${styles.ser__container}`}>
        <div className={styles.ser__left}>
          <RoundText text={t("services:ser")} color="var(--gold)"/>
        </div>
        <div className={styles.ser__right}>
          {t("services:ser2")}
        </div>
      </div>
    </div>
  );
};

export default Services;
