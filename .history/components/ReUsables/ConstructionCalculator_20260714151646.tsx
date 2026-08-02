import React from "react";
import RoundText from "./RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/ReUsables/constcalc.module.scss";

const ConstructionCalculator = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__left}>
          <RoundText color="var(--gold)" text={t("cost")}/>
        </div>
        <div className={styles.cc__right}>
          <h3>{t("estimate")}</h3>
          <p>{t("est2")}</p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
