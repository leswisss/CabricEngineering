import React from 'react'
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/leadership.module.scss"

const Leadership = () => {
  const { t } = useT();

  return (
    <div className={`section ${styles.lead__section}`}>
      <div className={`container ${styles.lead__container}`}>
        <div className={styles.lead__left}>
          <RoundText text={t("")}/>
        </div>
        <div className={styles.lead__right}>

        </div>
      </div>
    </div>  
  )
}

export default Leadership