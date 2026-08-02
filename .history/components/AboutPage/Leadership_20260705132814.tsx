import React from 'react'
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/leadership.module.scss"

const Leadership = () => {
  const { t } = useT();

  const leadContent = [
    {
      name: "Christopher Arrey Tarh-Ebai",
      linkedIn: "https://www.linkedin.com/in/christopher-arrey-tarh-ebai-90492121b",
      text: 
    }
  ]
  return (
    <div className={`section ${styles.lead__section}`}>
      <div className={`container ${styles.lead__container}`}>
        <div className={styles.lead__left}>
          <RoundText text={t("about:lead")} color='var(--gold)'/>
        </div>
        <div className={styles.lead__right}>
          {

          }
        </div>
      </div>
    </div>  
  )
}

export default Leadership