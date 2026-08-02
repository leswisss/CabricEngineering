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

  const [errors, setErrors] = useState({
    area: "",
    floors: "",
    bfloors: "",
  });

  const validate = () => {
    const newErrors = {
      area: "",
      floors: "",
      bfloors: "",
    };

    if (!values.area) {
      newErrors.area = "Area is required.";
    } else if (Number(values.area) <= 0) {
      newErrors.area = "Area must be greater than 0.";
    }

    if (!values.floors) {
      newErrors.floors = "Number of floors is required.";
    } else if (Number(values.floors) < 1) {
      newErrors.floors = "There must be at least one floor.";
    }

    if (Number(values.bfloors) < 0) {
      newErrors.bfloors = "Basement floors cannot be negative.";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

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
