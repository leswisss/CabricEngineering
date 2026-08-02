import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/aboutvalues.module.scss"

const AboutValues = () => {
  const { t } = useT();

  const aboutValues = [
    {
      name: t("about:trans"),
      text: t("about:")
    }
  ]

  return (
    <div className={styles.av__section}>
      <div className={`container ${styles.av__container}`}>
        <p>{t("about:cab4")}</p>
        <div className={styles.values}>

        </div>
      </div>
    </div>
  )
}

export default AboutValues