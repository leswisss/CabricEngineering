"use client";

import React, { useState } from "react";
import RoundText from "./RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/ReUsables/constcalc.module.scss";

const ConstructionCalculator = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  const [values, setValues] = useState({
    area: "",
    floors: "",
    bfloors: "",
  });

  const formFields = [
    {
      id: 1,
      name: "area",
      label: "Total Floor Area (m²)",
      type: "number",
      placeholder: "300",
    },
    {
      id: 2,
      name: "floors",
      label: "Number of Floors",
      type: "number",
      placeholder: "3",
    },
    {
      id: 3,
      name: "bfloors",
      label: "Basement Floors",
      type: "number",
      placeholder: "0",
    },
  ];

  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__left}>
          <RoundText color="var(--gold)" text={t("cost")} />
        </div>
        <div className={styles.cc__right}>
          <h3 className={styles.cc__h3}>{t("estimate")}</h3>
          <p className={styles.cc__p}>{t("est2")}</p>
          <div className={styles.cc__calc}>
            <form action=""></form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
