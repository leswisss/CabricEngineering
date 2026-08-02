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
      label: t("area"),
      type: "number",
      placeholder: "300",
      order: 0,
    },
    {
      id: 2,
      name: "floors",
      label: t("floors"),
      type: "number",
      placeholder: "3",
      order: 3,
    },
    {
      id: 3,
      name: "bfloors",
      label: t("bfloors"),
      type: "number",
      placeholder: "0",
      order: 4,
    },
  ];

  const otherFields = [
    {
      order: 1,
      label: t("ptype"),
      error: "Please select a project type.",
      options: [
        {
          id: "res",
          name: t("res"),
        },
        {
          id: "com",
          name: "Commercial",
        },
        {
          id: "ind",
          name: t("ind"),
        },
        {
          id: "inst",
          name: t("inst"),
        },
        {
          id: "health",
          name: t("health"),
        },
        {
          id: "edu",
          name: t("edu"),
        },
      ],
    },
    {
      order: 2,
      label: t("quality"),
      error: "Please select a quality grade.",
      options: [
        {
          id: "eco",
          name: t("res"),
        },
        {
          id: "com",
          name: "Commercial",
        },
        {
          id: "ind",
          name: t("ind"),
        },
        {
          id: "inst",
          name: t("inst"),
        },
        {
          id: "health",
          name: t("health"),
        },
        {
          id: "edu",
          name: t("edu"),
        },
      ],
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
            <form action="" className={styles.form__wrapper}>
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={styles.form__field}
                  style={{ order: field.order }}
                >
                  <label className={styles.label}>{field.label}</label>

                  <input
                    type={field.type}
                    name={field.name}
                    required
                    value={values[field.name as keyof typeof values]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={styles.input}
                  />

                  {errors[field.name as keyof typeof errors] && (
                    <p className={styles.error}>
                      {errors[field.name as keyof typeof errors]}
                    </p>
                  )}
                </div>
              ))}
              <div className={styles.form__field}></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
