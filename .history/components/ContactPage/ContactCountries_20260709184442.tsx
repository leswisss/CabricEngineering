

import React from 'react'
import RoundText from '../ReUsables/RoundText'
import Cameroon from '@/utils/Icons/Cameroon'
import France from '@/utils/Icons/France'
import { useT } from 'next-i18next/client'
import styles from "../../styles/ContactPage/contactcountries.module.scss"

const ContactCountries = () => {
  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__left}>
          <RoundText text='' color='var(--gold)'/>
        </div>
        <div className={styles.cc__right}>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ContactCountries