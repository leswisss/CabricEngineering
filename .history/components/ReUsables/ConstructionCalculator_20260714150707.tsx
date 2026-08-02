import React from 'react'
import RoundText from './RoundText'
import { useT } from "next-i18next/client";
import styles from "../../styles/ReUsables/constcalc.module.scss"

const ConstructionCalculator = () => {
  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__left}>

        </div>
        <div className={styles.cc__right}>

        </div>
      </div>
    </div>
  )
}

export default ConstructionCalculator