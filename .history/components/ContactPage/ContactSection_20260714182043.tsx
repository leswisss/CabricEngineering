import React from 'react'
import styles from "../../styles/ContactPage/contactsection.module.scss"
import RoundText from '../ReUsables/RoundText'
import { useT } from "next-i18next/client";

const ContactSection = () => {
  const { t } = useT();
  return (
    <div className={styles.con__section}>
      <div className={`container ${styles.con__container}`}>
        <div className={styles.con__left}>
          <RoundText color='var(--gold)' text={t("")}/>
        </div>
        <div className={styles.con__right}>

        </div>
      </div>
    </div>
  )
}

export default ContactSection