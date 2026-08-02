import React from "react";
import RoundText from "./RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/ReUsables/constcalc.module.scss";

const ConstructionCalculator = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const FormFieldsData = [
    {
      id: 1,
      name: "area",
      type: "number",
      placeholder: "300",
      errorMessage: t("nameerror"),
      label: t("name"),
      required: true,
      minlength: 3,
      inputState: true,
    },
    {
      id: 2,
      name: "area",
      type: "number",
      placeholder: "300",
      errorMessage: t("nameerror"),
      label: t("name"),
      required: true,
      minlength: 3,
      inputState: true,
    },
    {
      id: 1,
      name: "area",
      type: "number",
      placeholder: "300",
      errorMessage: t("nameerror"),
      label: t("name"),
      required: true,
      minlength: 3,
      inputState: true,
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
