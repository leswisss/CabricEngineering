

import React from 'react'
import { useT } from "next-i18next/client";
import RoundText from "../ReUsables/RoundText";
import styles from "../../styles/HomePage/homeprojects.module.scss"

const HomeProjects = () => {
  const { t, i18n } = useT();
  const currentLng = 
  return (
    <div className={styles.hp__section}>
      <div className={`container ${styles.hp__container}`}>
        <div className={styles.hp__top}>

        </div>
        <div className={styles.hp__bottom}>

        </div>
      </div>
    </div>
  )
}

export default HomeProjects