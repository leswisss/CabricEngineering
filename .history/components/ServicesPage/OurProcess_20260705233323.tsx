import React from "react";
import { useT } from "next-i18next/client";
import Image from "next/image";
import IMAGE from "../../public/images/052.jpg";
import styles from "../../styles/AboutPage/ourprocess.module.scss";

const OurProcess = () => {
  const { t } = useT();

  const processData = [
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
  ];
  return (
    <div className={`section ${styles.pro__section}`}>
      <div className={`container ${styles.pro__container}`}>
        <div className={styles.pro__left}></div>
        <div className={styles.pro__right}></div>
      </div>
    </div>
  );
};

export default OurProcess;
