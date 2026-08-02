import React from "react";
import { useT } from "next-i18next/client";
import Image from "next/image";
import IMAGE from "../../public/images/052.jpg";
import RoundText from "../ReUsables/RoundText";
import styles from "../../styles/AboutPage/ourprocess.module.scss";

const OurProcess = () => {
  const { t } = useT();

  const processData = [
    {
      name: t("services:ini"),
      text: t("services:initext"),
    },
    {
      name: t("services:feas"),
      text: t("services:feastext"),
    },
    {
      name: t("services:des"),
      text: t("services:destext"),
    },
    {
      name: t("services:con"),
      text: t("services:context"),
    },
    {
      name: t("services:cons"),
      text: t("services:constext"),
    },
    {
      name: t("services:han"),
      text: t("services:hantext"),
    },
    {
      name: t("services:prop"),
      text: t("services:proptext"),
    }
  ];

  return (
    <div className={`section ${styles.pro__section}`}>
      <div className={`container ${styles.pro__container}`}>
        <div className={styles.pro__left}>
          <div className={styles.pl__top}>
            <RoundText color="var(--gold)" text={t("services:pro")}/>
          </div>
          <div className={styles.pl__bottom}>
            {
              processData.map(() => (
                <div className={styles.pl__wrap}>
                  <span></span>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.pro__right}>
          <div className={styles.pror__image}>

          </div>
          <div className={styles.pror__inner}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
