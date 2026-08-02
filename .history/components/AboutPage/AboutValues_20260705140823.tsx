import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/aboutvalues.module.scss"

const AboutValues = () => {
  const { t } = useT();
  
  return (
    <div className={styles.av__section}>
      <div className={`container ${styles.av__container}`}>
        <p></p>
      </div>
    </div>
  )
}

export default AboutValues